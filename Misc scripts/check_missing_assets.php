<?php
$sqlPath = __DIR__ . '/../Database Project_Brendan Short/photos_db MySQL Scripts/Table Creation and Population/photos_db Table Population.sql';
$listPath = __DIR__ . '/../MediaDisplayFiles.txt';

$sql = file_get_contents($sqlPath);
if ($sql === false) {
    fwrite(STDERR, "Failed to read SQL file\n");
    exit(1);
}

$pattern = "#'C:\\\\\\\Program Files\\\\\\\\Ampps\\\\\\\\Media Display\\\\((?:''|[^'])+)'#i";
preg_match_all($pattern, $sql, $matches);
$expected = array_unique(array_map(static function ($name) {
    $name = str_replace("''", "'", $name);
    $name = str_replace('\\\\', '\\', $name);
    return ltrim($name, '\\/');
}, $matches[1] ?? []));
$displayFiles = file($listPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: [];
$actual = [];
foreach ($displayFiles as $name) {
    $name = trim($name);
    if ($name === '') {
        continue;
    }

    $lower = strtolower($name);
    if (!preg_match('/\.(png|mp4)$/', $lower)) {
        continue;
    }

    $actual[$name] = true;
}
$missing = array_values(array_diff($expected, array_keys($actual)));
sort($missing);

echo 'Expected references: ' . count($expected) . PHP_EOL;
echo 'Actual files: ' . count($actual) . PHP_EOL;
echo 'Missing count: ' . count($missing) . PHP_EOL;
foreach ($missing as $file) {
    echo json_encode($file, JSON_UNESCAPED_SLASHES) . PHP_EOL;
}
?>
