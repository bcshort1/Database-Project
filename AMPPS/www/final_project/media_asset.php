<?php
require_once __DIR__ . '/includes/bootstrap.php';

$mediaId = isset($_GET['id']) ? (int)$_GET['id'] : 0;
if ($mediaId <= 0) {
    http_response_code(404);
    exit('Missing media id');
}

$sql = 'SELECT m.media_type,
               m.file_path_display,
               p.file_path_full_resolution_logoless AS photo_path,
               v.file_path_full_resolution_logoless AS video_path
        FROM media m
        LEFT JOIN photos p ON p.photo_id = m.media_id
        LEFT JOIN videos v ON v.video_id = m.media_id
        WHERE m.media_id = :id';
$stmt = $pdo->prepare($sql);
$stmt->execute([':id' => $mediaId]);
$media = $stmt->fetch();

if (!$media) {
    http_response_code(404);
    exit('Media not found');
}

$paths = array_values(array_filter([
    (string)($media['file_path_display'] ?? ''),
    (string)($media['photo_path'] ?? ''),
    (string)($media['video_path'] ?? ''),
]));

// Prefer the stored display path. Photos never fall back to the full-resolution source, videos may.
$resolverOptions = [];
$isVideo = strtoupper((string)$media['media_type']) === 'VIDEO';
if ($isVideo) {
    $resolverOptions['allow_full_resolution'] = true;
}

$filePath = $paths ? photo_app_resolve_display_path($paths, $resolverOptions) : null;

// Fallback: directly check if any path exists (bypasses directory allow-list checks)
if (!$filePath) {
    foreach ($paths as $path) {
        if ($path !== '' && file_exists($path) && is_readable($path)) {
            $filePath = $path;
            break;
        }
    }
}

if (!$filePath || !is_readable($filePath)) {
    error_log(sprintf(
        '[photo_app] Asset not found for media_id %d (%s). Paths checked: %s',
        $mediaId,
        $media['media_type'] ?? 'unknown',
        implode(', ', $paths)
    ));
    http_response_code(404);
    exit('Asset not found');
}

$mimeType = photo_app_detect_mime($filePath, $media['media_type']);
$fileSize = filesize($filePath);

// For videos, support HTTP Range requests for proper streaming/seeking
if ($isVideo && isset($_SERVER['HTTP_RANGE'])) {
    $range = $_SERVER['HTTP_RANGE'];
    if (preg_match('/bytes=(\d*)-(\d*)/', $range, $matches)) {
        $start = $matches[1] === '' ? 0 : (int)$matches[1];
        $end = $matches[2] === '' ? $fileSize - 1 : (int)$matches[2];

        // Clamp values
        $start = max(0, min($start, $fileSize - 1));
        $end = max($start, min($end, $fileSize - 1));
        $length = $end - $start + 1;

        http_response_code(206);
        header('Content-Type: ' . $mimeType);
        header('Accept-Ranges: bytes');
        header("Content-Range: bytes $start-$end/$fileSize");
        header('Content-Length: ' . $length);
        header('Cache-Control: public, max-age=86400');

        $fp = fopen($filePath, 'rb');
        if ($fp) {
            fseek($fp, $start);
            $bytesRemaining = $length;
            while ($bytesRemaining > 0 && !feof($fp)) {
                $chunkSize = min(8192, $bytesRemaining);
                echo fread($fp, $chunkSize);
                $bytesRemaining -= $chunkSize;
                flush();
            }
            fclose($fp);
        }
        exit;
    }
}

// Standard full-file response (images, or videos without Range header)
header('Content-Type: ' . $mimeType);
header('Accept-Ranges: bytes');
header('Cache-Control: public, max-age=86400');
header('Content-Length: ' . $fileSize);
readfile($filePath);
exit;
