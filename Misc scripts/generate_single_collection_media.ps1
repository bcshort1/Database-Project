using namespace System.Globalization

function Convert-ToCamelCase {
    param([string]$Name)
    $parts = $Name -split '_'
    if ($parts.Length -eq 0) { return $Name }
    $result = $parts[0]
    for ($i = 1; $i -lt $parts.Length; $i++) {
        $part = $parts[$i]
        if ($part.Length -gt 0) {
            $result += ($part[0].ToString().ToUpper() + $part.Substring(1))
        }
    }
    return $result
}

function Split-SqlRows {
    param([string]$ValuesText)
    $rows = New-Object System.Collections.Generic.List[string]
    $depth = 0
    $start = -1
    for ($i = 0; $i -lt $ValuesText.Length; $i++) {
        $ch = $ValuesText[$i]
        if ($ch -eq '(') {
            if ($depth -eq 0) {
                $start = $i + 1
            }
            $depth++
        } elseif ($ch -eq ')') {
            $depth--
            if ($depth -eq 0 -and $start -ge 0) {
                $rows.Add($ValuesText.Substring($start, $i - $start)) | Out-Null
            }
        }
    }
    return $rows
}

function Parse-SqlRow {
    param([string]$Row)
    $values = New-Object System.Collections.Generic.List[object]
    $length = $Row.Length
    $i = 0
    while ($i -lt $length) {
        while ($i -lt $length -and [char]::IsWhiteSpace($Row[$i])) { $i++ }
        if ($i -ge $length) { break }
        if ($Row[$i] -eq "'") {
            $i++
            $sb = New-Object System.Text.StringBuilder
            while ($i -lt $length) {
                $ch = $Row[$i]
                if ($ch -eq "'") {
                    if ($i + 1 -lt $length -and $Row[$i + 1] -eq "'") {
                        $sb.Append("'") | Out-Null
                        $i += 2
                    } else {
                        $i++
                        break
                    }
                } else {
                    $sb.Append($ch) | Out-Null
                    $i++
                }
            }
            $values.Add($sb.ToString()) | Out-Null
        } else {
            $sb = New-Object System.Text.StringBuilder
            while ($i -lt $length -and $Row[$i] -ne ',') {
                $sb.Append($Row[$i]) | Out-Null
                $i++
            }
            $token = $sb.ToString().Trim()
            if (-not $token -or $token.ToUpperInvariant() -eq 'NULL') {
                $values.Add($null) | Out-Null
            } elseif ($token.Contains('.')) {
                $values.Add([double]::Parse($token, [CultureInfo]::InvariantCulture)) | Out-Null
            } else {
                $values.Add([int]::Parse($token, [CultureInfo]::InvariantCulture)) | Out-Null
            }
        }
        while ($i -lt $length -and [char]::IsWhiteSpace($Row[$i])) { $i++ }
        if ($i -lt $length -and $Row[$i] -eq ',') { $i++ }
    }
    return ,$values.ToArray()
}

$root = Split-Path -Parent $PSScriptRoot
$sqlPath = Join-Path $root "picture_database MySQL Scripts\Table Creation and Population\picture_database-table population_final.sql"
$outputPath = Join-Path $root "picture_database MongoDB Scripts\Collection and Document Creation\picture_database_media_single_collection.js"

$sqlContent = Get-Content -Path $sqlPath -Raw
$pattern = 'INSERT INTO `(?<table>\w+)` \((?<columns>[^)]+)\) VALUES\s*(?<values>[^;]+);'
$matches = [regex]::Matches($sqlContent, $pattern, [System.Text.RegularExpressions.RegexOptions]::Singleline)

$tableData = @{}
foreach ($match in $matches) {
    $table = $match.Groups['table'].Value
    $columns = $match.Groups['columns'].Value -split ',' | ForEach-Object {
        Convert-ToCamelCase (($_ -replace [char]0x0060, '').Trim())
    }
    $rows = Split-SqlRows $match.Groups['values'].Value
    $records = @()
    foreach ($row in $rows) {
        $values = Parse-SqlRow $row
        $record = [ordered]@{}
        for ($i = 0; $i -lt $columns.Length; $i++) {
            $record[$columns[$i]] = if ($i -lt $values.Length) { $values[$i] } else { $null }
        }
        $records += [pscustomobject]$record
    }
    $tableData[$table] = $records
}

$requiredTables = 'collections','media','tags','photos','videos','media_tags','collection_items'
$missing = @($requiredTables | Where-Object { -not $tableData.ContainsKey($_) })
if ($missing.Count -gt 0) {
    throw "Missing tables in SQL: $($missing -join ', ')"
}

$varMap = [ordered]@{
    'collections' = 'collections'
    'media' = 'mediaRows'
    'tags' = 'tags'
    'photos' = 'photoRows'
    'videos' = 'videoRows'
    'media_tags' = 'mediaTagLinks'
    'collection_items' = 'collectionItems'
}

$sb = New-Object System.Text.StringBuilder
$null = $sb.AppendLine("use('picture_database');")
$null = $sb.AppendLine("db.dropDatabase();")
$null = $sb.AppendLine()

foreach ($key in $varMap.Keys) {
    $json = $tableData[$key] | ConvertTo-Json -Depth 6
    $null = $sb.Append("const $($varMap[$key]) = ")
    $null = $sb.Append($json)
    $null = $sb.AppendLine(";")
    $null = $sb.AppendLine()
}

$null = $sb.AppendLine("const toDate = (value) => (value ? new Date(value.replace(' ', 'T') + 'Z') : null);")
$null = $sb.AppendLine("const boolean = (value) => Boolean(value === null ? 0 : Number(value));")
$null = $sb.AppendLine("const collectionDictionary = new Map(collections.map((collection) => [")
$null = $sb.AppendLine("  collection.collectionId,")
$null = $sb.AppendLine("  {")
$null = $sb.AppendLine("    collectionId: collection.collectionId,")
$null = $sb.AppendLine("    name: collection.collectionName,")
$null = $sb.AppendLine("    description: collection.collectionDescription,")
$null = $sb.AppendLine("    createdDateTime: toDate(collection.createdDateTime),")
$null = $sb.AppendLine("    isPublished: boolean(collection.isPublished),")
$null = $sb.AppendLine("    publishedDateTime: toDate(collection.publishedDateTime),")
$null = $sb.AppendLine("  },")
$null = $sb.AppendLine("]));")
$null = $sb.AppendLine("const tagDictionary = new Map(tags.map((tag) => [tag.tagId, tag.tagName]));")
$null = $sb.AppendLine("const photosById = new Map(photoRows.map((photo) => [photo.photoId, { ...photo }]));")
$null = $sb.AppendLine("const videosById = new Map(videoRows.map((video) => [video.videoId, { ...video }]));")
$null = $sb.AppendLine("const tagsByMediaId = mediaTagLinks.reduce((map, link) => {")
$null = $sb.AppendLine("  if (!map.has(link.mediaId)) {")
$null = $sb.AppendLine("    map.set(link.mediaId, []);")
$null = $sb.AppendLine("  }")
$null = $sb.AppendLine("  map.get(link.mediaId).push(link.tagId);")
$null = $sb.AppendLine("  return map;")
$null = $sb.AppendLine("}, new Map());")
$null = $sb.AppendLine("const collectionsByMediaId = collectionItems.reduce((map, link) => {")
$null = $sb.AppendLine("  if (!map.has(link.mediaId)) {")
$null = $sb.AppendLine("    map.set(link.mediaId, []);")
$null = $sb.AppendLine("  }")
$null = $sb.AppendLine("  map.get(link.mediaId).push(link);")
$null = $sb.AppendLine("  return map;")
$null = $sb.AppendLine("}, new Map());")
$null = $sb.AppendLine("const mediaDocs = mediaRows.map((item) => {")
$null = $sb.AppendLine("  const isPhoto = item.mediaType === 'PHOTO';")
$null = $sb.AppendLine("  const detail = isPhoto ? photosById.get(item.mediaId) : videosById.get(item.mediaId);")
$null = $sb.AppendLine("  if (!detail) {")
$null = $sb.AppendLine("    throw new Error('Missing ' + (isPhoto ? 'photo' : 'video') + ' detail for media ' + item.mediaId);")
$null = $sb.AppendLine("  }")
$null = $sb.AppendLine("  const tags = (tagsByMediaId.get(item.mediaId) || [])")
$null = $sb.AppendLine("    .map((tagId) => ({ tagId, name: tagDictionary.get(tagId) }))")
$null = $sb.AppendLine("    .filter((tag) => tag.name);")
$null = $sb.AppendLine("  const collectionsForMedia = (collectionsByMediaId.get(item.mediaId) || [])")
$null = $sb.AppendLine("    .map((entry) => {")
$null = $sb.AppendLine("      const collection = collectionDictionary.get(entry.collectionId);")
$null = $sb.AppendLine("      if (!collection) {")
$null = $sb.AppendLine("        return null;")
$null = $sb.AppendLine("      }")
$null = $sb.AppendLine("      return { ...collection, position: entry.position };")
$null = $sb.AppendLine("    })")
$null = $sb.AppendLine("    .filter(Boolean)")
$null = $sb.AppendLine("    .sort((a, b) => a.position - b.position);")
$null = $sb.AppendLine("  return {")
$null = $sb.AppendLine("    _id: item.mediaId,")
$null = $sb.AppendLine("    mediaType: item.mediaType,")
$null = $sb.AppendLine("    title: item.title,")
$null = $sb.AppendLine("    description: item.description,")
$null = $sb.AppendLine("    isDrone: boolean(item.isDrone),")
$null = $sb.AppendLine("    uploadDateTime: toDate(item.uploadDateTime),")
$null = $sb.AppendLine("    filePaths: {")
$null = $sb.AppendLine("      display: item.filePathDisplay,")
$null = $sb.AppendLine("      fullResolutionLogoless: detail.filePathFullResolutionLogoless,")
$null = $sb.AppendLine("    },")
$null = $sb.AppendLine("    capture: {")
$null = $sb.AppendLine("      dateTime: toDate(detail.captureDateTime),")
$null = $sb.AppendLine("      durationSeconds: isPhoto ? null : (detail.durationSeconds ?? null),")
$null = $sb.AppendLine("    },")
$null = $sb.AppendLine("    location: {")
$null = $sb.AppendLine("      text: detail.locationText,")
$null = $sb.AppendLine("      latitude: detail.latitude ?? null,")
$null = $sb.AppendLine("      longitude: detail.longitude ?? null,")
$null = $sb.AppendLine("    },")
$null = $sb.AppendLine("    camera: {")
$null = $sb.AppendLine("      makeModel: detail.cameraMakeModel,")
$null = $sb.AppendLine("      lens: detail.lens,")
$null = $sb.AppendLine("      filters: detail.filters,")
$null = $sb.AppendLine("      iso: detail.iso,")
$null = $sb.AppendLine("      shutterSpeed: detail.shutterSpeed,")
$null = $sb.AppendLine("      aperture: detail.aperture,")
$null = $sb.AppendLine("      focalLength: detail.focalLength,")
$null = $sb.AppendLine("    },")
$null = $sb.AppendLine("    aspectRatio: detail.aspectRatio,")
$null = $sb.AppendLine("    tags,")
$null = $sb.AppendLine("    collections: collectionsForMedia,")
$null = $sb.AppendLine("  };")
$null = $sb.AppendLine("});")
$null = $sb.AppendLine("db.media.insertMany(mediaDocs);")
$null = $sb.AppendLine("printjson({ insertedCount: mediaDocs.length });")

[IO.File]::WriteAllText($outputPath, $sb.ToString())
Write-Output ("Wrote " + $outputPath)
