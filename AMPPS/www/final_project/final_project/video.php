<?php
require_once __DIR__ . '/includes/bootstrap.php';

if (!function_exists('video_format_duration_simple')) {
    function video_format_duration_simple(?float $seconds): string
    {
        if ($seconds === null) {
            return '';
        }
        $seconds = (int)round($seconds);
        $m = intdiv($seconds, 60);
        $s = $seconds % 60;
        if ($m > 0) {
            return sprintf('%d:%02d', $m, $s);
        }
        return $seconds . 's';
    }
}

$videoId = isset($_GET['id']) ? (int)$_GET['id'] : 0;
if ($videoId <= 0) {
    header('Location: videos.php');
    exit;
}

// Grab this one video directly.
$sql = "
    SELECT
        m.media_id,
        m.title,
        m.description,
        m.is_drone,
        m.file_path_display,
        m.upload_date_time,
        v.location_text,
        v.capture_date_time,
        v.duration_seconds,
        v.file_path_full_resolution_logoless,
        v.camera_make_model,
        v.lens,
        v.filters,
        v.iso,
        v.shutter_speed,
        v.aperture,
        v.focal_length,
        v.aspect_ratio
    FROM media m
    JOIN videos v ON v.video_id = m.media_id
    WHERE m.media_id = :id
";

$stmt = $pdo->prepare($sql);
$stmt->execute([':id' => $videoId]);
$video = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$video) {
    header('Location: videos.php');
    exit;
}

$pageTitle = $video['title'];
$activeNav = 'videos';

include __DIR__ . '/header.php';
?>

<section class="video-detail">
    <a href="videos.php" class="btn secondary">&larr; Back to videos</a>

    <?php
        $candidatePaths = [
            (string)($video['file_path_display'] ?? ''),
            (string)($video['file_path_full_resolution_logoless'] ?? ''),
        ];
        
        // Try the standard resolver first
        $resolvedPath = photo_app_resolve_display_path($candidatePaths, ['allow_full_resolution' => true]);
        
        // Fallback: directly check if file_path_display exists (bypasses directory checks)
        if (!$resolvedPath) {
            foreach ($candidatePaths as $path) {
                if ($path !== '' && file_exists($path) && is_readable($path)) {
                    $resolvedPath = $path;
                    break;
                }
            }
        }
        
        $videoUrl = $resolvedPath ? photo_app_media_url((int)$video['media_id']) : null;

        $displayDateRaw = $video['capture_date_time'] ?: $video['upload_date_time'];
        $displayDate    = '';
        if (!empty($displayDateRaw)) {
            try {
                $dt = new DateTime($displayDateRaw);
                $displayDate = $dt->format('F j, Y g:i A');
            } catch (Exception $e) {
                $displayDate = $displayDateRaw;
            }
        }

        $durationLabel = video_format_duration_simple(
            isset($video['duration_seconds']) ? (float)$video['duration_seconds'] : null
        );
    ?>

    <div class="video-player">
        <?php if ($videoUrl): ?>
            <video controls controlsList="nodownload" preload="metadata">
                <source src="<?= htmlspecialchars($videoUrl); ?>" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        <?php else: ?>
            <div class="video-missing">
                Video file not found in Media Display.
            </div>
        <?php endif; ?>
    </div>

    <div class="video-info">
        <h2><?= htmlspecialchars($video['title']); ?></h2>

        <?php if (!empty($video['description'])): ?>
            <p><?= nl2br(htmlspecialchars($video['description'])); ?></p>
        <?php endif; ?>

        <ul class="video-meta-list">
            <?php if ($displayDate !== ''): ?>
                <li><strong>Captured:</strong> <?= htmlspecialchars($displayDate); ?></li>
            <?php endif; ?>

            <li>
                <strong>Capture type:</strong>
                <?= $video['is_drone'] ? 'Drone' : 'Traditional camera'; ?>
            </li>

            <?php if ($durationLabel !== ''): ?>
                <li><strong>Duration:</strong> <?= htmlspecialchars($durationLabel); ?></li>
            <?php endif; ?>

            <?php if (!empty($video['location_text'])): ?>
                <li><strong>Location:</strong> <?= htmlspecialchars($video['location_text']); ?></li>
            <?php endif; ?>

            <?php if (!empty($video['camera_make_model'])): ?>
                <li><strong>Camera:</strong> <?= htmlspecialchars($video['camera_make_model']); ?></li>
            <?php endif; ?>

            <?php if (!empty($video['lens'])): ?>
                <li><strong>Lens:</strong> <?= htmlspecialchars($video['lens']); ?></li>
            <?php endif; ?>

            <?php if (!empty($video['filters'])): ?>
                <li><strong>Filters:</strong> <?= htmlspecialchars($video['filters']); ?></li>
            <?php endif; ?>

            <?php if (!empty($video['iso'])): ?>
                <li><strong>ISO:</strong> <?= htmlspecialchars($video['iso']); ?></li>
            <?php endif; ?>

            <?php if (!empty($video['shutter_speed'])): ?>
                <li><strong>Shutter:</strong> <?= htmlspecialchars($video['shutter_speed']); ?> s</li>
            <?php endif; ?>

            <?php if (!empty($video['aperture'])): ?>
                <li><strong>Aperture:</strong> f/<?= htmlspecialchars($video['aperture']); ?></li>
            <?php endif; ?>

            <?php if (!empty($video['focal_length'])): ?>
                <li><strong>Focal length:</strong> <?= htmlspecialchars($video['focal_length']); ?> mm</li>
            <?php endif; ?>

            <?php if (!empty($video['aspect_ratio'])): ?>
                <li><strong>Aspect ratio:</strong> <?= htmlspecialchars($video['aspect_ratio']); ?></li>
            <?php endif; ?>
        </ul>
    </div>
</section>

<?php include __DIR__ . '/footer.php'; ?>
