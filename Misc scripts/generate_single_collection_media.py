import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SQL_FILE = ROOT / "picture_database MySQL Scripts" / "Table Creation and Population" / "picture_database-table population_final.sql"
OUTPUT_FILE = ROOT / "picture_database MongoDB Scripts" / "Collection and Document Creation" / "picture_database_media_single_collection.js"

INSERT_REGEX = re.compile(
    r"INSERT INTO `(?P<table>\w+)` \((?P<columns>[^)]+)\) VALUES\s*(?P<values>[^;]+);",
    re.MULTILINE | re.DOTALL,
)


def camel_case(name: str) -> str:
    parts = name.split("_")
    return parts[0] + "".join(part.capitalize() for part in parts[1:])


def parse_value(token: str):
    token = token.strip()
    if token.upper() == "NULL":
        return None
    if token.startswith("'") and token.endswith("'"):
        inner = token[1:-1]
        return inner.replace("''", "'")
    # numeric
    if "." in token:
        return float(token)
    return int(token)


def parse_row(row_str: str):
    values = []
    i = 0
    length = len(row_str)
    while i < length:
        while i < length and row_str[i].isspace():
            i += 1
        if i >= length:
            break
        if row_str[i] == "'":
            i += 1
            buffer = []
            while i < length:
                ch = row_str[i]
                if ch == "'":
                    if i + 1 < length and row_str[i + 1] == "'":
                        buffer.append("'")
                        i += 2
                    else:
                        i += 1
                        break
                else:
                    buffer.append(ch)
                    i += 1
            values.append("".join(buffer))
        else:
            buffer = []
            while i < length and row_str[i] not in ",":
                buffer.append(row_str[i])
                i += 1
            token = "".join(buffer).strip()
            if token:
                if token.upper() == "NULL":
                    values.append(None)
                else:
                    values.append(float(token) if "." in token else int(token))
            else:
                values.append(None)
        while i < length and row_str[i].isspace():
            i += 1
        if i < length and row_str[i] == ",":
            i += 1
    return values


def parse_inserts(sql_text: str):
    tables = {}
    for match in INSERT_REGEX.finditer(sql_text):
        table = match.group("table")
        columns = [camel_case(col.strip().strip("`")) for col in match.group("columns").split(",")]
        values_blob = match.group("values")
        rows = []
        depth = 0
        start = None
        for idx, ch in enumerate(values_blob):
            if ch == "(":
                if depth == 0:
                    start = idx + 1
                depth += 1
            elif ch == ")":
                depth -= 1
                if depth == 0 and start is not None:
                    row_content = values_blob[start:idx]
                    row_values = parse_row(row_content)
                    rows.append({col: val for col, val in zip(columns, row_values)})
            elif ch == ";":
                break
        tables[table] = rows
    return tables


def ensure_tables(data, expected):
    missing = [name for name in expected if name not in data]
    if missing:
        raise ValueError(f"Missing tables in SQL: {missing}")


def build_js(data):
    js_sections = ["use('picture_database');", "db.dropDatabase();", ""]
    name_map = {
        "collections": "collections",
        "media": "mediaRows",
        "tags": "tags",
        "photos": "photoRows",
        "videos": "videoRows",
        "media_tags": "mediaTagLinks",
        "collection_items": "collectionItems",
    }
    for table, var_name in name_map.items():
        js_value = json.dumps(data[table], indent=2, ensure_ascii=False)
        js_sections.append(f"const {var_name} = {js_value};")
        js_sections.append("")

    js_sections.append(
        "const toDate = (value) => (value ? new Date(value.replace(' ', 'T') + 'Z') : null);"
    )
    js_sections.append(
        "const boolean = (value) => Boolean(typeof value === 'number' ? value : parseInt(value, 10));"
    )
    js_sections.append(
        "const collectionDictionary = new Map(collections.map((collection) => [\n"
        "  collection.collectionId,\n"
        "  {\n"
        "    collectionId: collection.collectionId,\n"
        "    name: collection.collectionName,\n"
        "    description: collection.collectionDescription,\n"
        "    createdDateTime: toDate(collection.createdDateTime),\n"
        "    isPublished: boolean(collection.isPublished),\n"
        "    publishedDateTime: toDate(collection.publishedDateTime),\n"
        "  },\n"
        "]));"
    )
    js_sections.append(
        "const tagDictionary = new Map(tags.map((tag) => [tag.tagId, tag.tagName]));"
    )
    js_sections.append(
        "const photosById = new Map(photoRows.map((photo) => [photo.photoId, { ...photo }]));"
    )
    js_sections.append(
        "const videosById = new Map(videoRows.map((video) => [video.videoId, { ...video }]));"
    )
    js_sections.append(
        "const tagsByMediaId = mediaTagLinks.reduce((map, link) => {\n"
        "  if (!map.has(link.mediaId)) {\n"
        "    map.set(link.mediaId, []);\n"
        "  }\n"
        "  map.get(link.mediaId).push(link.tagId);\n"
        "  return map;\n"
        "}, new Map());"
    )
    js_sections.append(
        "const collectionsByMediaId = collectionItems.reduce((map, link) => {\n"
        "  if (!map.has(link.mediaId)) {\n"
        "    map.set(link.mediaId, []);\n"
        "  }\n"
        "  map.get(link.mediaId).push(link);\n"
        "  return map;\n"
        "}, new Map());"
    )
    js_sections.append(
        "const mediaDocs = mediaRows.map((item) => {\n"
        "  const isPhoto = item.mediaType === 'PHOTO';\n"
        "  const detail = isPhoto ? photosById.get(item.mediaId) : videosById.get(item.mediaId);\n"
        "  if (!detail) {\n"
        "    throw new Error(`Missing ${isPhoto ? 'photo' : 'video'} detail for media ${item.mediaId}`);\n"
        "  }\n"
        "  const tags = (tagsByMediaId.get(item.mediaId) || [])\n"
        "    .map((tagId) => ({ tagId, name: tagDictionary.get(tagId) }))\n"
        "    .filter((tag) => tag.name);\n"
        "  const collectionsForMedia = (collectionsByMediaId.get(item.mediaId) || [])\n"
        "    .map((entry) => {\n"
        "      const collection = collectionDictionary.get(entry.collectionId);\n"
        "      if (!collection) {\n"
        "        return null;\n"
        "      }\n"
        "      return { ...collection, position: entry.position };\n"
        "    })\n"
        "    .filter(Boolean)\n"
        "    .sort((a, b) => a.position - b.position);\n"
        "  return {\n"
        "    _id: item.mediaId,\n"
        "    mediaType: item.mediaType,\n"
        "    title: item.title,\n"
        "    description: item.description,\n"
        "    isDrone: boolean(item.isDrone),\n"
        "    uploadDateTime: toDate(item.uploadDateTime),\n"
        "    filePaths: {\n"
        "      display: item.filePathDisplay,\n"
        "      fullResolutionLogoless: detail.filePathFullResolutionLogoless,\n"
        "    },\n"
        "    capture: {\n"
        "      dateTime: toDate(detail.captureDateTime),\n"
        "      durationSeconds: isPhoto ? null : (detail.durationSeconds ?? null),\n"
        "    },\n"
        "    location: {\n"
        "      text: detail.locationText,\n"
        "      latitude: detail.latitude ?? null,\n"
        "      longitude: detail.longitude ?? null,\n"
        "    },\n"
        "    camera: {\n"
        "      makeModel: detail.cameraMakeModel,\n"
        "      lens: detail.lens,\n"
        "      filters: detail.filters,\n"
        "      iso: detail.iso,\n"
        "      shutterSpeed: detail.shutterSpeed,\n"
        "      aperture: detail.aperture,\n"
        "      focalLength: detail.focalLength,\n"
        "    },\n"
        "    aspectRatio: detail.aspectRatio,\n"
        "    tags,\n"
        "    collections: collectionsForMedia,\n"
        "  };\n"
        "});"
    )
    js_sections.append("db.media.insertMany(mediaDocs);")
    js_sections.append("printjson({ insertedCount: mediaDocs.length });")

    return "\n".join(js_sections) + "\n"


def main():
    sql_text = SQL_FILE.read_text(encoding="utf-8")
    tables = parse_inserts(sql_text)
    ensure_tables(
        tables,
        [
            "collections",
            "media",
            "tags",
            "photos",
            "videos",
            "media_tags",
            "collection_items",
        ],
    )
    js_code = build_js(tables)
    OUTPUT_FILE.write_text(js_code, encoding="utf-8")
    print(f"Wrote {OUTPUT_FILE.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
