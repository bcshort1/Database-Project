<?php
$pageTitle = $pageTitle ?? "Papi's Pictures";
$activeNav = $activeNav ?? '';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($pageTitle); ?> | Papi's Pictures</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <header class="site-header">
        <div class="top-bar">
            <div class="brand">
                <a href="gallery.php" class="brand-link">
                    <img src="assets/img/Logo.png?v=2" alt="Papi's Pictures Logo" class="brand-logo">
                    <div class="brand-text">
                        <span class="brand-title">Papi's Pictures</span>
                        <span class="brand-tagline">Lakes, rivers, and quiet places of Northern Michigan</span>
                    </div>
                </a>
            </div>
            <div class="top-meta">
                <span>Drone &amp; landscape imagery by Scott Short</span>
            </div>
        </div>

        <div class="hero" style="background-image: url('assets/img/Point-Betsie-Light.png');">
            <div class="hero-overlay">
                <h1><?= htmlspecialchars($pageTitle); ?></h1>
                <p>Exploring Michigan lakes, rivers, forests, and shorelines</p>
            </div>
        </div>

        <nav class="main-nav">
            <a href="gallery.php" class="<?= $activeNav === 'gallery' ? 'active' : ''; ?>">Gallery</a>
            <a href="collections.php" class="<?= $activeNav === 'collections' ? 'active' : ''; ?>">Collections</a>
            <a href="videos.php" class="<?= $activeNav === 'videos' ? 'active' : ''; ?>">Videos</a>
        </nav>
    </header>

    <main class="site-main">
