<?php
require_once __DIR__ . '/includes/bootstrap.php';

$collections = photo_app_fetch_collections($pdo, true);
$pageTitle = 'Featured Collections';
$activeNav = 'collections';

include __DIR__ . '/header.php';
?>

<section class="collections">
    <?php if (empty($collections)): ?>
        <div class="empty-state">
            <h2>No collections yet</h2>
            <p>Published collections will appear here once they are curated.</p>
        </div>
    <?php else: ?>
        <div class="collection-grid">
            <?php foreach ($collections as $collection): ?>
                <article class="collection-card">
                    <div class="card-body">
                        <h2><?= htmlspecialchars($collection['collection_name']); ?></h2>
                        <?php if (!empty($collection['collection_description'])): ?>
                            <p><?= nl2br(htmlspecialchars($collection['collection_description'])); ?></p>
                        <?php endif; ?>
                        <p class="collection-meta">
                            <?= (int)$collection['item_count']; ?> items &middot;
                            <?= $collection['is_published'] ? 'Published' : 'Draft'; ?>
                        </p>
                        <a class="btn primary" href="collection.php?id=<?= $collection['collection_id']; ?>">View collection</a>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    <?php endif; ?>
</section>

<?php include __DIR__ . '/footer.php'; ?>
