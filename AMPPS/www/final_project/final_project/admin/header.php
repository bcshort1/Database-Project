<?php
$pageTitle = $pageTitle ?? 'Admin Console';
$activeAdminNav = $activeAdminNav ?? '';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($pageTitle); ?> | Admin | Papi's Pictures</title>
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="../assets/css/admin.css">
</head>
<body class="admin-body">
<header class="admin-header">
    <div>
        <h1>Papi's Pictures Admin</h1>
        <p>Manage photos, tags, and collections.</p>
    </div>
    <nav class="admin-nav">
        <a href="index.php" class="<?= $activeAdminNav === 'dashboard' ? 'active' : ''; ?>">Dashboard</a>
        <a href="photos.php" class="<?= $activeAdminNav === 'photos' ? 'active' : ''; ?>">Photos</a>
        <a href="tags.php" class="<?= $activeAdminNav === 'tags' ? 'active' : ''; ?>">Tags</a>
        <a href="collections.php" class="<?= $activeAdminNav === 'collections' ? 'active' : ''; ?>">Collections</a>
        <a href="../gallery.php" target="_blank">View site</a>
        <a href="logout.php">Logout</a>
    </nav>
</header>
<main class="admin-main">
    <?php $adminFlashes = photo_app_get_flashes(); ?>
    <?php if (!empty($adminFlashes)): ?>
        <div class="flash-container">
            <?php foreach ($adminFlashes as $flash): ?>
                <div class="alert <?= htmlspecialchars($flash['type']); ?>"><?= htmlspecialchars($flash['message']); ?></div>
            <?php endforeach; ?>
        </div>
    <?php endif; ?>
