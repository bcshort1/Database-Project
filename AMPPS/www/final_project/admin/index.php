<?php
require_once __DIR__ . '/../includes/bootstrap.php';
photo_app_require_login();

$counts = [
    'photos' => (int)$pdo->query("SELECT COUNT(*) FROM media WHERE media_type = 'PHOTO'")->fetchColumn(),
    'videos' => (int)$pdo->query("SELECT COUNT(*) FROM media WHERE media_type = 'VIDEO'")->fetchColumn(),
    'tags' => (int)$pdo->query('SELECT COUNT(*) FROM tags')->fetchColumn(),
    'collections' => (int)$pdo->query('SELECT COUNT(*) FROM collections')->fetchColumn(),
];

$pageTitle = 'Admin Dashboard';
$activeAdminNav = 'dashboard';

include __DIR__ . '/header.php';
?>

<section class="admin-dashboard">
    <div class="stat-grid">
        <article>
            <h2><?= $counts['photos']; ?></h2>
            <p>Photos</p>
        </article>
        <article>
            <h2><?= $counts['videos']; ?></h2>
            <p>Videos</p>
        </article>
        <article>
            <h2><?= $counts['tags']; ?></h2>
            <p>Tags</p>
        </article>
        <article>
            <h2><?= $counts['collections']; ?></h2>
            <p>Collections</p>
        </article>
    </div>

    <div class="admin-actions">
        <a class="btn primary" href="photo_edit.php">Add photo</a>
        <a class="btn secondary" href="tags.php">Manage tags</a>
        <a class="btn secondary" href="collections.php">Manage collections</a>
    </div>
</section>

<?php include __DIR__ . '/footer.php'; ?>
