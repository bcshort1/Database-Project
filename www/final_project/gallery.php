<?php
require_once __DIR__ . '/db.php';

$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
if ($id <= 0) {
    header('Location: gallery.php');
    exit;
}

$sql = "SELECT
        m.media_id,
        m.title,
        m.description,
        m.file_path_display,
        m.is_drone,
        m.upload_date_time,
        p.capture_date_time,
        p.location_text,
        p.latitude,
        p.longitude,
        p.camera_make_model,
        p.lens,
        p.filters,
        p.iso,
        p.shutter_speed,
        p.aperture,
        p.focal_length,
        p.aspect_ratio
        FROM media m
        JOIN photos p ON p.photo_id = m.media_id
        WHERE m.media_id = :id AND m.media_type = 'photo'
";

$stmt = $pdo->prepare($sql);
$stmt->execute([':id' => $id]);
$photo = $stmt->fetch();

if(!$photo){
    header('Location: gallery.php');
    exit;
}

$tagSql = "
    SELECT t.tag_name
    FROM tags t
    JOIN media_tags mt on mt.tag_id = t.tag_id
    WHERE mt.media_id = :id
    ORDER BY t.tag_name
    ";

    $argctagStmt = $pdo->prepare($tagSql);
    $tagStmt->execute(['id' => $id]);
    $tags = $tagStmt-> fetchAll();

    include __DIR__ . '/header.php';
    ?>
