<?php
// scripts/update_capture_dates.php

$dsn = 'mysql:host=localhost;dbname=picture_database;charset=utf8mb4';
$user = 'root';           // adjust
$pass = '';               // adjust

$pdo = new PDO($dsn, $user, $pass, [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
]);

function parseTimestampFromFilename(string $path): ?string
{
    $base = basename($path);

    // Bear at the Birdfeeder-2025-06-19-21-46-19-...
    if (preg_match('/(\d{4})-(\d{2})-(\d{2})-(\d{2})-(\d{2})-(\d{2})/', $base, $m)) {
        return sprintf('%s-%s-%s %s:%s:%s', $m[1], $m[2], $m[3], $m[4], $m[5], $m[6]);
    }

    // DJI_YYYYMMDDHHMMSS_...
    if (preg_match('/DJI_(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/', $base, $m)) {
        return sprintf('%s-%s-%s %s:%s:%s', $m[1], $m[2], $m[3], $m[4], $m[5], $m[6]);
    }

    // dji_fly_YYYYMMDD_HHMMSS_...
    if (preg_match('/dji_fly_(\d{4})(\d{2})(\d{2})_(\d{2})(\d{2})(\d{2})/', $base, $m)) {
        return sprintf('%s-%s-%s %s:%s:%s', $m[1], $m[2], $m[3], $m[4], $m[5], $m[6]);
    }

    return null;
}

function resolvePhotoCaptureTime(array $row): ?string
{
    $fullPath = $row['file_path_full_resolution_logoless'];

    // Try EXIF first for photos
    $exif = @exif_read_data($fullPath, 'EXIF', true);
    if ($exif && !empty($exif['EXIF']['DateTimeOriginal'])) {
        // format: "YYYY:MM:DD HH:MM:SS"
        $raw = $exif['EXIF']['DateTimeOriginal'];
        $raw = str_replace(':', '-', substr($raw, 0, 10)) . substr($raw, 10);
        return $raw;
    }

    // Fall back to filename pattern
    $fromName = parseTimestampFromFilename($fullPath);
    if ($fromName) {
        return $fromName;
    }

    // Final fallback: use upload_date_time from media
    return $row['upload_date_time'] ?? null;
}

// Photos
$sql = "
    SELECT p.photo_id,
           p.file_path_full_resolution_logoless,
           p.capture_date_time,
           m.upload_date_time
      FROM photos p
      JOIN media m ON m.media_id = p.photo_id
";
$photos = $pdo->query($sql)->fetchAll(PDO::FETCH_ASSOC);

$updatePhoto = $pdo->prepare(
    "UPDATE photos SET capture_date_time = :dt WHERE photo_id = :id"
);

foreach ($photos as $p) {
    $newDt = resolvePhotoCaptureTime($p);
    if (!$newDt || $newDt === $p['capture_date_time']) {
        continue;
    }
    $updatePhoto->execute([
        ':dt' => $newDt,
        ':id' => $p['photo_id'],
    ]);
    echo "Photo {$p['photo_id']} -> {$newDt}\n";
}

// Videos: same idea but we skip EXIF and only parse filenames
$sql = "
    SELECT v.video_id,
           v.file_path_full_resolution_logoless,
           v.capture_date_time,
           m.upload_date_time,
           m.title
      FROM videos v
      JOIN media m ON m.media_id = v.video_id
";
$videos = $pdo->query($sql)->fetchAll(PDO::FETCH_ASSOC);

$updateVideo = $pdo->prepare(
    "UPDATE videos SET capture_date_time = :dt WHERE video_id = :id"
);

foreach ($videos as $v) {
    $newDt = parseTimestampFromFilename($v['file_path_full_resolution_logoless'])
          ?? parseTimestampFromFilename($v['title'])
          ?? $v['upload_date_time'];

    if (!$newDt || $newDt === $v['capture_date_time']) {
        continue;
    }
    $updateVideo->execute([
        ':dt' => $newDt,
        ':id' => $v['video_id'],
    ]);
    echo "Video {$v['video_id']} -> {$newDt}\n";
}

echo "Done.\n";
