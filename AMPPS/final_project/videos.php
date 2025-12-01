<?php
require_once __DIR__ . '/includes/bootstrap.php';

/**
 * Helper: simple duration formatter.
 */
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

// --- Filters: drone / traditional / all ---

$droneFilter = strtolower((string)($_GET['drone'] ?? 'all'));
$droneFilter = in_array($droneFilter, ['all', 'drone', 'traditional'], true) ? $droneFilter : 'all';

// Build query for videos directly from DB (no photo_app_fetch_videos).
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
        v.file_path_full_resolution_logoless
    FROM media m
    JOIN videos v ON v.video_id = m.media_id
";

$where   = [];
$params  = [];

if ($droneFilter === 'drone') {
    $where[] = 'm.is_drone = 1';
} elseif ($droneFilter === 'traditional') {
    $where[] = 'm.is_drone = 0';
}

if ($where) {
    $sql .= ' WHERE ' . implode(' AND ', $where);
}

// Sort by capture_date_time first, then upload_date_time, then id.
$sql .= ' ORDER BY COALESCE(v.capture_date_time, m.upload_date_time) DESC, m.media_id DESC';

$stmt = $pdo->prepare($sql);
$stmt->execute($params);
$videos = $stmt->fetchAll(PDO::FETCH_ASSOC);

$pageTitle = 'Video Showcase';
$activeNav = 'videos';

include __DIR__ . '/header.php';
?>

<section class="filters">
    <form method="get" class="filter-form">
        <label>
            <span>Capture Type</span>
            <select name="drone">
                <option value="all" <?= $droneFilter === 'all' ? 'selected' : ''; ?>>All videos</option>
                <option value="drone" <?= $droneFilter === 'drone' ? 'selected' : ''; ?>>Drone</option>
                <option value="traditional" <?= $droneFilter === 'traditional' ? 'selected' : ''; ?>>Traditional camera</option>
            </select>
        </label>
        <button type="submit" class="btn primary">Filter</button>
    </form>
</section>

<section class="video-grid">
    <?php if (empty($videos)): ?>
        <p>No videos found for the selected filter.</p>
    <?php else: ?>
        <?php foreach ($videos as $video): ?>
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

                // Compute display date.
                $displayDateRaw = $video['capture_date_time'] ?: $video['upload_date_time'];
                $displayDate    = '';
                if (!empty($displayDateRaw)) {
                    try {
                        $dt = new DateTime($displayDateRaw);
                        $displayDate = $dt->format('M j, Y g:i A');
                    } catch (Exception $e) {
                        $displayDate = $displayDateRaw;
                    }
                }

                $durationLabel = video_format_duration_simple(
                    isset($video['duration_seconds']) ? (float)$video['duration_seconds'] : null
                );
            ?>
            <article class="video-card">
                <div class="video-wrapper">
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

                <div class="card-body">
                    <h3>
                        <a href="video.php?id=<?= (int)$video['media_id']; ?>">
                            <?= htmlspecialchars($video['title']); ?>
                        </a>
                    </h3>

                    <?php if ($displayDate !== ''): ?>
                        <p class="video-date"><?= htmlspecialchars($displayDate); ?></p>
                    <?php endif; ?>

                    <?php if (!empty($video['description'])): ?>
                        <p><?= nl2br(htmlspecialchars($video['description'])); ?></p>
                    <?php endif; ?>

                    <p class="video-meta">
                        <?= $video['is_drone'] ? 'Drone' : 'Traditional'; ?>
                        <?php if (!empty($video['location_text'])): ?>
                            &middot; <?= htmlspecialchars($video['location_text']); ?>
                        <?php endif; ?>
                        <?php if ($durationLabel !== ''): ?>
                            &middot; <?= htmlspecialchars($durationLabel); ?>
                        <?php endif; ?>
                    </p>
                </div>
            </article>
        <?php endforeach; ?>
    <?php endif; ?>
</section>

<?php include __DIR__ . '/footer.php'; ?>
