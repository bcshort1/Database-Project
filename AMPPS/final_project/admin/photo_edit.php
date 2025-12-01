<?php
require_once __DIR__ . '/../includes/bootstrap.php';
photo_app_require_login();

$photoId = isset($_GET['id']) ? (int)$_GET['id'] : 0;
$isEdit = $photoId > 0;
$errors = [];

if ($isEdit) {
    $photo = photo_app_fetch_photo($pdo, $photoId);
    if (!$photo) {
        photo_app_flash('Photo not found.', 'error');
        header('Location: photos.php');
        exit;
    }
} else {
    $photo = [
        'title' => '',
        'description' => '',
        'file_path_display' => '',
        'file_path_full_resolution_logoless' => '',
        'capture_date_time' => '',
        'location_text' => '',
        'latitude' => '',
        'longitude' => '',
        'camera_make_model' => '',
        'lens' => '',
        'filters' => '',
        'iso' => '',
        'shutter_speed' => '',
        'aperture' => '',
        'focal_length' => '',
        'aspect_ratio' => '',
        'is_drone' => 0,
        'tags' => [],
    ];
}

$allTags = photo_app_fetch_tags($pdo);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!photo_app_validate_csrf($_POST['csrf_token'] ?? null)) {
        $errors[] = 'Invalid session token.';
    }

    $payload = [
        'title' => trim($_POST['title'] ?? ''),
        'description' => trim($_POST['description'] ?? ''),
        'file_path_display' => trim($_POST['file_path_display'] ?? ''),
        'file_path_full_resolution_logoless' => trim($_POST['file_path_full_resolution_logoless'] ?? ''),
        'capture_date_time' => trim($_POST['capture_date_time'] ?? ''),
        'location_text' => trim($_POST['location_text'] ?? ''),
        'latitude' => $_POST['latitude'] !== '' ? (float)$_POST['latitude'] : null,
        'longitude' => $_POST['longitude'] !== '' ? (float)$_POST['longitude'] : null,
        'camera_make_model' => trim($_POST['camera_make_model'] ?? ''),
        'lens' => trim($_POST['lens'] ?? ''),
        'filters' => trim($_POST['filters'] ?? ''),
        'iso' => $_POST['iso'] !== '' ? (int)$_POST['iso'] : null,
        'shutter_speed' => trim($_POST['shutter_speed'] ?? ''),
        'aperture' => trim($_POST['aperture'] ?? ''),
        'focal_length' => trim($_POST['focal_length'] ?? ''),
        'aspect_ratio' => trim($_POST['aspect_ratio'] ?? ''),
        'is_drone' => isset($_POST['is_drone']) ? 1 : 0,
        'tag_ids' => array_map('intval', $_POST['tag_ids'] ?? []),
    ];

    if ($payload['capture_date_time']) {
        $payload['capture_date_time'] = date('Y-m-d H:i:s', strtotime($payload['capture_date_time']));
    }

    foreach (['title', 'file_path_display', 'file_path_full_resolution_logoless', 'capture_date_time', 'location_text', 'aspect_ratio'] as $field) {
        if ($payload[$field] === '' || $payload[$field] === null) {
            $errors[] = ucfirst(str_replace('_', ' ', $field)) . ' is required.';
        }
    }

    if (empty($errors)) {
        try {
            $pdo->beginTransaction();

            if ($isEdit) {
                $mediaSql = "UPDATE media SET
                                title = :title,
                                description = :description,
                                file_path_display = :file_path_display,
                                is_drone = :is_drone
                              WHERE media_id = :id";
                $stmt = $pdo->prepare($mediaSql);
                $stmt->execute([
                    ':title' => $payload['title'],
                    ':description' => $payload['description'],
                    ':file_path_display' => $payload['file_path_display'],
                    ':is_drone' => $payload['is_drone'],
                    ':id' => $photoId,
                ]);

                $photoSql = "UPDATE photos SET
                                file_path_full_resolution_logoless = :file_path_full_resolution_logoless,
                                capture_date_time = :capture_date_time,
                                location_text = :location_text,
                                latitude = :latitude,
                                longitude = :longitude,
                                camera_make_model = :camera_make_model,
                                lens = :lens,
                                filters = :filters,
                                iso = :iso,
                                shutter_speed = :shutter_speed,
                                aperture = :aperture,
                                focal_length = :focal_length,
                                aspect_ratio = :aspect_ratio
                             WHERE photo_id = :photo_id";
                $photoParams = [':photo_id' => $photoId];
            } else {
                $dupStmt = $pdo->prepare('SELECT media_id FROM media WHERE file_path_display = :path LIMIT 1');
                $dupStmt->execute([':path' => $payload['file_path_display']]);
                if ($dupStmt->fetchColumn()) {
                    throw new RuntimeException('A media item already uses this display path.');
                }

                $mediaSql = "INSERT INTO media (media_type, title, description, file_path_display, is_drone)
                             VALUES ('PHOTO', :title, :description, :file_path_display, :is_drone)";
                $stmt = $pdo->prepare($mediaSql);
                $stmt->execute([
                    ':title' => $payload['title'],
                    ':description' => $payload['description'],
                    ':file_path_display' => $payload['file_path_display'],
                    ':is_drone' => $payload['is_drone'],
                ]);
                $photoId = (int)$pdo->lastInsertId();

                $photoSql = "INSERT INTO photos (
                                photo_id,
                                file_path_full_resolution_logoless,
                                capture_date_time,
                                location_text,
                                latitude,
                                longitude,
                                camera_make_model,
                                lens,
                                filters,
                                iso,
                                shutter_speed,
                                aperture,
                                focal_length,
                                aspect_ratio
                             ) VALUES (
                                :photo_id,
                                :file_path_full_resolution_logoless,
                                :capture_date_time,
                                :location_text,
                                :latitude,
                                :longitude,
                                :camera_make_model,
                                :lens,
                                :filters,
                                :iso,
                                :shutter_speed,
                                :aperture,
                                :focal_length,
                                :aspect_ratio
                             )";
                $photoParams = [':photo_id' => $photoId];
            }

            $stmt = $pdo->prepare($photoSql);
            $stmt->execute(array_merge($photoParams, [
                ':file_path_full_resolution_logoless' => $payload['file_path_full_resolution_logoless'],
                ':capture_date_time' => $payload['capture_date_time'],
                ':location_text' => $payload['location_text'],
                ':latitude' => $payload['latitude'],
                ':longitude' => $payload['longitude'],
                ':camera_make_model' => $payload['camera_make_model'],
                ':lens' => $payload['lens'],
                ':filters' => $payload['filters'],
                ':iso' => $payload['iso'],
                ':shutter_speed' => $payload['shutter_speed'],
                ':aperture' => $payload['aperture'],
                ':focal_length' => $payload['focal_length'],
                ':aspect_ratio' => $payload['aspect_ratio'],
            ]));

            $pdo->prepare('DELETE FROM media_tags WHERE media_id = :id')->execute([':id' => $photoId]);
            if (!empty($payload['tag_ids'])) {
                $tagStmt = $pdo->prepare('INSERT INTO media_tags (media_id, tag_id) VALUES (:media_id, :tag_id)');
                foreach ($payload['tag_ids'] as $tagId) {
                    $tagStmt->execute([
                        ':media_id' => $photoId,
                        ':tag_id' => $tagId,
                    ]);
                }
            }

            $pdo->commit();
            photo_app_flash('Photo saved successfully.', 'success');
            header('Location: photos.php');
            exit;
        } catch (Throwable $e) {
            $pdo->rollBack();
            $errors[] = $e->getMessage();
        }
    }

    $photo = array_merge($photo, $payload);
    $photo['tags'] = [];
    foreach ($payload['tag_ids'] as $tagId) {
        $photo['tags'][] = ['tag_id' => $tagId];
    }
}

$pageTitle = $isEdit ? 'Edit Photo' : 'Add Photo';
$activeAdminNav = 'photos';
$token = photo_app_csrf_token();

include __DIR__ . '/header.php';
?>

<section>
    <h2><?= $isEdit ? 'Edit photo' : 'Add a new photo'; ?></h2>

    <?php if (!empty($errors)): ?>
        <div class="alert error">
            <ul>
                <?php foreach ($errors as $error): ?>
                    <li><?= htmlspecialchars($error); ?></li>
                <?php endforeach; ?>
            </ul>
        </div>
    <?php endif; ?>

    <form method="post" class="admin-form">
        <input type="hidden" name="csrf_token" value="<?= $token; ?>">
        <div class="form-grid">
            <label>
                <span>Title</span>
                <input type="text" name="title" value="<?= htmlspecialchars($photo['title']); ?>" required>
            </label>
            <label>
                <span>Description</span>
                <textarea name="description" rows="4"><?= htmlspecialchars($photo['description']); ?></textarea>
            </label>
            <label>
                <span>Display file path</span>
                <input type="text" name="file_path_display" value="<?= htmlspecialchars($photo['file_path_display']); ?>" required>
            </label>
            <label>
                <span>Full-resolution path</span>
                <input type="text" name="file_path_full_resolution_logoless" value="<?= htmlspecialchars($photo['file_path_full_resolution_logoless']); ?>" required>
            </label>
            <label>
                <span>Capture date &amp; time</span>
                <input type="datetime-local" name="capture_date_time" value="<?= $photo['capture_date_time'] ? date('Y-m-d\TH:i', strtotime($photo['capture_date_time'])) : ''; ?>" required>
            </label>
            <label>
                <span>Location</span>
                <input type="text" name="location_text" value="<?= htmlspecialchars($photo['location_text']); ?>" required>
            </label>
            <label>
                <span>Latitude</span>
                <input type="number" step="0.000001" name="latitude" value="<?= htmlspecialchars((string)$photo['latitude']); ?>">
            </label>
            <label>
                <span>Longitude</span>
                <input type="number" step="0.000001" name="longitude" value="<?= htmlspecialchars((string)$photo['longitude']); ?>">
            </label>
            <label>
                <span>Camera</span>
                <input type="text" name="camera_make_model" value="<?= htmlspecialchars($photo['camera_make_model']); ?>">
            </label>
            <label>
                <span>Lens</span>
                <input type="text" name="lens" value="<?= htmlspecialchars($photo['lens']); ?>">
            </label>
            <label>
                <span>Filters</span>
                <input type="text" name="filters" value="<?= htmlspecialchars($photo['filters']); ?>">
            </label>
            <label>
                <span>ISO</span>
                <input type="number" name="iso" value="<?= htmlspecialchars((string)$photo['iso']); ?>">
            </label>
            <label>
                <span>Shutter speed (seconds)</span>
                <input type="text" name="shutter_speed" value="<?= htmlspecialchars($photo['shutter_speed']); ?>">
            </label>
            <label>
                <span>Aperture</span>
                <input type="text" name="aperture" value="<?= htmlspecialchars($photo['aperture']); ?>">
            </label>
            <label>
                <span>Focal length (mm)</span>
                <input type="text" name="focal_length" value="<?= htmlspecialchars($photo['focal_length']); ?>">
            </label>
            <label>
                <span>Aspect ratio</span>
                <input type="text" name="aspect_ratio" value="<?= htmlspecialchars($photo['aspect_ratio']); ?>" required>
            </label>
            <label class="checkbox">
                <input type="checkbox" name="is_drone" value="1" <?= $photo['is_drone'] ? 'checked' : ''; ?>>
                <span>Captured via drone</span>
            </label>
        </div>

        <label>
            <span>Tags</span>
            <select name="tag_ids[]" multiple size="6">
                <?php $selectedTagIds = array_column($photo['tags'], 'tag_id'); ?>
                <?php foreach ($allTags as $tag): ?>
                    <option value="<?= $tag['tag_id']; ?>" <?= in_array($tag['tag_id'], $selectedTagIds, true) ? 'selected' : ''; ?>>
                        <?= htmlspecialchars($tag['tag_name']); ?>
                    </option>
                <?php endforeach; ?>
            </select>
        </label>

        <div class="form-actions">
            <button type="submit" class="btn primary">Save photo</button>
            <a class="btn secondary" href="photos.php">Cancel</a>
        </div>
    </form>
</section>

<?php include __DIR__ . '/footer.php'; ?>
