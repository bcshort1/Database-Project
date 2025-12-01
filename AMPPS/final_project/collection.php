<?php
require_once __DIR__ . '/includes/bootstrap.php';

$collectionId = isset($_GET['id']) ? (int)$_GET['id'] : 0;
if ($collectionId <= 0) {
    header('Location: collections.php');
    exit;
}

$collection = photo_app_fetch_collection($pdo, $collectionId, true);
if (!$collection) {
    header('Location: collections.php');
    exit;
}

$pageTitle = $collection['collection_name'];
$activeNav = 'collections';

include __DIR__ . '/header.php';
?>

<section class="collection-detail">
    <a href="collections.php" class="btn secondary">&larr; All collections</a>

    <header class="collection-head">
        <h2><?= htmlspecialchars($collection['collection_name']); ?></h2>
        <?php if (!empty($collection['collection_description'])): ?>
            <p><?= nl2br(htmlspecialchars($collection['collection_description'])); ?></p>
        <?php endif; ?>
        <p class="collection-meta">
            <?= (int)$collection['item_count']; ?> total items
            <?php if (!empty($collection['published_date_time'])): ?>
                &middot; Published <?= date('F j, Y', strtotime($collection['published_date_time'])); ?>
            <?php endif; ?>
        </p>
    </header>

    <?php if (empty($collection['items'])): ?>
        <div class="empty-state">
            <h3>No media yet</h3>
            <p>This collection has not been populated.</p>
        </div>
    <?php else: ?>
        <div class="collection-items">
            <?php foreach ($collection['items'] as $item): ?>
                <article class="collection-item">
                    <?php if ($item['media_type'] === 'PHOTO'): ?>
                        <a href="photo.php?id=<?= $item['media_id']; ?>" class="item-thumb">
                            <img src="<?= htmlspecialchars(photo_app_media_url($item['media_id'])); ?>" alt="<?= htmlspecialchars($item['title']); ?>">
                        </a>
                    <?php else: ?>
                        <a href="video.php?id=<?= $item['media_id']; ?>" class="item-thumb video-thumb">
                            <video muted preload="metadata">
                                <source src="<?= htmlspecialchars(photo_app_media_url($item['media_id'])); ?>" type="video/mp4">
                            </video>
                        </a>
                    <?php endif; ?>
                    <div class="item-body">
                        <p class="position">#<?= (int)$item['position']; ?></p>
                        <h3><?= htmlspecialchars($item['title']); ?></h3>
                        <a class="btn secondary" href="<?= $item['media_type'] === 'PHOTO' ? 'photo.php?id=' . $item['media_id'] : 'video.php?id=' . $item['media_id']; ?>">
                            View <?= strtolower($item['media_type']); ?>
                        </a>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    <?php endif; ?>
</section>

<?php include __DIR__ . '/footer.php'; ?>
