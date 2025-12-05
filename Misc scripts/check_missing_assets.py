import pathlib
import re

SQL_PATH = pathlib.Path(r"Database Project_Brendan Short/photos_db MySQL Scripts/Table Creation and Population/photos_db Table Population.sql")
DISPLAY_LIST = pathlib.Path("MediaDisplayFiles.txt")

display_regex = re.compile(r"'C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\([^']+)'", re.IGNORECASE)
sql_text = SQL_PATH.read_text(encoding='utf-8')
expected = {
    m.group(1).replace('\\\\', '\\')
    for m in display_regex.finditer(sql_text)
}

actual = set()
with DISPLAY_LIST.open(encoding='utf-8') as f:
    for line in f:
        name = line.strip()
        if name and name.lower().endswith(('.png', '.mp4')):
            actual.add(name)

missing = sorted(expected - actual)
print(f"expected references: {len(expected)}")
print(f"actual files: {len(actual)}")
print(f"missing count: {len(missing)}")
for name in missing:
    print(name)
