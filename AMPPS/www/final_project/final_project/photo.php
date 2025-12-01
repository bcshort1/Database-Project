<?php
require_once __DIR__ . '/includes/bootstrap.php';

$photoId = isset($_GET['id']) ? (int)$_GET['id'] : 0;
if ($photoId <= 0) {
    header('Location: gallery.php');
    exit;
}

$photo = photo_app_fetch_photo($pdo, $photoId);
if (!$photo) {
    header('Location: gallery.php');
    exit;
}

$pageTitle = $photo['title'];
$activeNav = 'gallery';

include __DIR__ . '/header.php';
?>

<section class="photo-detail">
    <a href="gallery.php" class="btn secondary">&larr; Back to gallery</a>

    <div class="photo-detail-grid">
        <figure class="photo-frame">
            <img src="<?= htmlspecialchars(photo_app_media_url($photo['media_id'])); ?>" alt="<?= htmlspecialchars($photo['title']); ?>">
            <figcaption>
                <h2><?= htmlspecialchars($photo['title']); ?></h2>
                <?php if (!empty($photo['description'])): ?>
                    <p><?= nl2br(htmlspecialchars($photo['description'])); ?></p>
                <?php endif; ?>
            </figcaption>
        </figure>

        <div class="photo-meta">
            <div class="meta-block">
                <h3>Quick facts</h3>
                <ul>
                    <?php if (!empty($photo['capture_date_time'])): ?>
                        <li><strong>Captured:</strong> <?= date('F j, Y g:i A', strtotime($photo['capture_date_time'])); ?> (<?= photo_app_season_label($photo['capture_date_time']); ?>)</li>
                    <?php endif; ?>
                    <?php if (!empty($photo['location_text'])): ?>
                        <li><strong>Location:</strong> <?= htmlspecialchars($photo['location_text']); ?></li>
                    <?php endif; ?>
                    <li><strong>Capture type:</strong> <?= $photo['is_drone'] ? 'Drone' : 'Traditional camera'; ?></li>
                    <li><strong>Aspect ratio:</strong> <?= htmlspecialchars($photo['aspect_ratio']); ?></li>
                </ul>
            </div>

            <div class="meta-block">
                <h3>EXIF details</h3>
                <ul>
                    <?php if (!empty($photo['camera_make_model'])): ?>
                        <li><strong>Camera:</strong> <?= htmlspecialchars($photo['camera_make_model']); ?></li>
                    <?php endif; ?>
                    <?php if (!empty($photo['lens'])): ?>
                        <li><strong>Lens:</strong> <?= htmlspecialchars($photo['lens']); ?></li>
                    <?php endif; ?>
                    <?php if (!empty($photo['filters'])): ?>
                        <li><strong>Filters:</strong> <?= htmlspecialchars($photo['filters']); ?></li>
                    <?php endif; ?>
                    <?php if (!empty($photo['iso'])): ?>
                        <li><strong>ISO:</strong> <?= htmlspecialchars($photo['iso']); ?></li>
                    <?php endif; ?>
                    <?php if (!empty($photo['shutter_speed'])): ?>
                        <li><strong>Shutter:</strong> <?= htmlspecialchars($photo['shutter_speed']); ?>s</li>
                    <?php endif; ?>
                    <?php if (!empty($photo['aperture'])): ?>
                        <li><strong>Aperture:</strong> ƒ/<?= htmlspecialchars($photo['aperture']); ?></li>
                    <?php endif; ?>
                    <?php if (!empty($photo['focal_length'])): ?>
                        <li><strong>Focal length:</strong> <?= htmlspecialchars($photo['focal_length']); ?>mm</li>
                    <?php endif; ?>
                </ul>
            </div>

            <?php if (!empty($photo['tags'])): ?>
                <div class="meta-block">
                    <h3>Tags</h3>
                    <div class="tag-list">
                        <?php foreach ($photo['tags'] as $tag): ?>
                            <a class="chip" href="gallery.php?tag=<?= $tag['tag_id']; ?>"><?= htmlspecialchars($tag['tag_name']); ?></a>
                        <?php endforeach; ?>
                    </div>
                </div>
            <?php endif; ?>
        </div>
    </div>
</section>

<?php include __DIR__ . '/footer.php'; ?>
