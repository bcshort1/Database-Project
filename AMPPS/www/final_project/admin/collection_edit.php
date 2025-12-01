<?php
require_once __DIR__ . '/../includes/bootstrap.php';
photo_app_require_login();

$collectionId = isset($_GET['id']) ? (int)$_GET['id'] : 0;
$isEdit = $collectionId > 0;
$errors = [];

if ($isEdit) {
    $collection = photo_app_fetch_collection($pdo, $collectionId, false);
    if (!$collection) {
        photo_app_flash('Collection not found.', 'error');
        header('Location: collections.php');
        exit;
    }
} else {
    $collection = [
        'collection_name' => '',
        'collection_description' => '',
        'is_published' => 0,
        'published_date_time' => null,
        'items' => [],
        'item_count' => 0,
    ];
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!photo_app_validate_csrf($_POST['csrf_token'] ?? null)) {
        $errors[] = 'Invalid session token.';
    } else {
        $action = $_POST['action'] ?? 'save_collection';

        try {
            switch ($action) {
                case 'save_collection':
                    $name = trim($_POST['collection_name'] ?? '');
                    $description = trim($_POST['collection_description'] ?? '');
                    $isPublished = isset($_POST['is_published']) ? 1 : 0;

                    if ($name === '') {
                        throw new RuntimeException('Collection name is required.');
                    }

                    if ($isEdit) {
                        $publishedDate = $collection['published_date_time'];
                        if ($isPublished && !$publishedDate) {
                            $publishedDate = date('Y-m-d H:i:s');
                        }
                        if (!$isPublished) {
                            $publishedDate = null;
                        }

                        $stmt = $pdo->prepare('UPDATE collections SET collection_name = :name, collection_description = :description, is_published = :is_published, published_date_time = :published_date_time WHERE collection_id = :id');
                        $stmt->execute([
                            ':name' => $name,
                            ':description' => $description,
                            ':is_published' => $isPublished,
                            ':published_date_time' => $publishedDate,
                            ':id' => $collectionId,
                        ]);
                    } else {
                        $publishedDate = $isPublished ? date('Y-m-d H:i:s') : null;
                        $stmt = $pdo->prepare('INSERT INTO collections (collection_name, collection_description, is_published, published_date_time) VALUES (:name, :description, :is_published, :published_date_time)');
                        $stmt->execute([
                            ':name' => $name,
                            ':description' => $description,
                            ':is_published' => $isPublished,
                            ':published_date_time' => $publishedDate,
                        ]);
                        $collectionId = (int)$pdo->lastInsertId();
                        photo_app_flash('Collection created. Add items below.', 'success');
                        header('Location: collection_edit.php?id=' . $collectionId);
                        exit;
                    }

                    photo_app_flash('Collection saved.', 'success');
                    header('Location: collection_edit.php?id=' . $collectionId);
                    exit;

                case 'update_items':
                    if (!$isEdit) {
                        throw new RuntimeException('Create the collection before managing items.');
                    }
                    $items = $_POST['items'] ?? [];
                    foreach ($items as $item) {
                        $mediaId = isset($item['media_id']) ? (int)$item['media_id'] : 0;
                        if ($mediaId <= 0) {
                            continue;
                        }
                        if (!empty($item['remove'])) {
                            $pdo->prepare('DELETE FROM collection_items WHERE collection_id = :cid AND media_id = :mid')->execute([
                                ':cid' => $collectionId,
                                ':mid' => $mediaId,
                            ]);
                        } else {
                            $position = max(1, (int)($item['position'] ?? 1));
                            $pdo->prepare('UPDATE collection_items SET position = :position WHERE collection_id = :cid AND media_id = :mid')->execute([
                                ':position' => $position,
                                ':cid' => $collectionId,
                                ':mid' => $mediaId,
                            ]);
                        }
                    }
                    photo_app_flash('Collection order updated.', 'success');
                    header('Location: collection_edit.php?id=' . $collectionId);
                    exit;

                case 'add_item':
                    if (!$isEdit) {
                        throw new RuntimeException('Save the collection before adding media.');
                    }
                    $mediaId = isset($_POST['media_id']) ? (int)$_POST['media_id'] : 0;
                    $position = max(1, (int)($_POST['position'] ?? 1));
                    if ($mediaId <= 0) {
                        throw new RuntimeException('Choose a media item to add.');
                    }
                    $sql = 'INSERT INTO collection_items (collection_id, media_id, position) VALUES (:cid, :mid, :position)
                            ON DUPLICATE KEY UPDATE position = VALUES(position)';
                    $stmt = $pdo->prepare($sql);
                    $stmt->execute([
                        ':cid' => $collectionId,
                        ':mid' => $mediaId,
                        ':position' => $position,
                    ]);
                    photo_app_flash('Media added to collection.', 'success');
                    header('Location: collection_edit.php?id=' . $collectionId);
                    exit;

                default:
                    throw new RuntimeException('Unknown action.');
            }
        } catch (Throwable $e) {
            $errors[] = $e->getMessage();
        }
    }
}

if ($isEdit) {
    $collection = photo_app_fetch_collection($pdo, $collectionId, false);
}

$mediaLibrary = photo_app_fetch_media_library($pdo);
$token = photo_app_csrf_token();

$pageTitle = $isEdit ? 'Edit Collection' : 'Create Collection';
$activeAdminNav = 'collections';

include __DIR__ . '/header.php';
?>

<section>
    <h2><?= $isEdit ? 'Edit collection' : 'Create collection'; ?></h2>

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
        <input type="hidden" name="action" value="save_collection">
        <label>
            <span>Name</span>
            <input type="text" name="collection_name" value="<?= htmlspecialchars($collection['collection_name']); ?>" required>
        </label>
        <label>
            <span>Description</span>
            <textarea name="collection_description" rows="4"><?= htmlspecialchars($collection['collection_description']); ?></textarea>
        </label>
        <label class="checkbox">
            <input type="checkbox" name="is_published" value="1" <?= !empty($collection['is_published']) ? 'checked' : ''; ?>>
            <span>Published</span>
        </label>
        <button class="btn primary" type="submit">Save collection</button>
    </form>
</section>

<?php if ($isEdit): ?>
<section>
    <h3>Existing items</h3>
    <?php if (empty($collection['items'])): ?>
        <p class="empty-state">No media assigned yet.</p>
    <?php else: ?>
        <form method="post" class="admin-form">
            <input type="hidden" name="csrf_token" value="<?= $token; ?>">
            <input type="hidden" name="action" value="update_items">
            <div class="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Media</th>
                            <th>Type</th>
                            <th>Position</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($collection['items'] as $index => $item): ?>
                            <tr>
                                <td><?= htmlspecialchars($item['title']); ?></td>
                                <td><?= htmlspecialchars($item['media_type']); ?></td>
                                <td>
                                    <input type="hidden" name="items[<?= $index; ?>][media_id]" value="<?= $item['media_id']; ?>">
                                    <input type="number" name="items[<?= $index; ?>][position]" value="<?= (int)$item['position']; ?>" min="1">
                                </td>
                                <td>
                                    <label class="checkbox">
                                        <input type="checkbox" name="items[<?= $index; ?>][remove]" value="1">
                                        <span>Remove</span>
                                    </label>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
            <button class="btn secondary" type="submit">Update order</button>
        </form>
    <?php endif; ?>
</section>

<section>
    <h3>Add media</h3>
    <form method="post" class="admin-form inline">
        <input type="hidden" name="csrf_token" value="<?= $token; ?>">
        <input type="hidden" name="action" value="add_item">
        <label>
            <span>Media item</span>
            <select name="media_id" required>
                <option value="">Select media</option>
                <?php foreach ($mediaLibrary as $media): ?>
                    <option value="<?= $media['media_id']; ?>">
                        [<?= $media['media_type']; ?>] <?= htmlspecialchars($media['title']); ?>
                    </option>
                <?php endforeach; ?>
            </select>
        </label>
        <label>
            <span>Position</span>
            <input type="number" name="position" value="<?= $collection['item_count'] + 1; ?>" min="1">
        </label>
        <button class="btn primary" type="submit">Add to collection</button>
    </form>
</section>
<?php endif; ?>

<?php include __DIR__ . '/footer.php'; ?>
