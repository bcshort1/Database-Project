<?php
require_once __DIR__ . '/../includes/bootstrap.php';
photo_app_require_login();

$errors = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!photo_app_validate_csrf($_POST['csrf_token'] ?? null)) {
        $errors[] = 'Invalid session token.';
    } else {
        $action = $_POST['action'] ?? '';
        $tagName = trim($_POST['tag_name'] ?? '');
        $tagId = isset($_POST['tag_id']) ? (int)$_POST['tag_id'] : 0;

        try {
            switch ($action) {
                case 'create':
                    if ($tagName === '') {
                        throw new RuntimeException('Tag name is required.');
                    }
                    $stmt = $pdo->prepare('INSERT INTO tags (tag_name) VALUES (:name)');
                    $stmt->execute([':name' => $tagName]);
                    photo_app_flash('Tag created.', 'success');
                    break;
                case 'update':
                    if ($tagId <= 0 || $tagName === '') {
                        throw new RuntimeException('Both tag and name are required.');
                    }
                    $stmt = $pdo->prepare('UPDATE tags SET tag_name = :name WHERE tag_id = :id');
                    $stmt->execute([':name' => $tagName, ':id' => $tagId]);
                    photo_app_flash('Tag updated.', 'success');
                    break;
                case 'delete':
                    if ($tagId <= 0) {
                        throw new RuntimeException('Select a tag to delete.');
                    }
                    $pdo->prepare('DELETE FROM tags WHERE tag_id = :id')->execute([':id' => $tagId]);
                    photo_app_flash('Tag deleted.', 'success');
                    break;
                default:
                    throw new RuntimeException('Unknown action.');
            }

            header('Location: tags.php');
            exit;
        } catch (Throwable $e) {
            $errors[] = $e->getMessage();
        }
    }
}

$tags = photo_app_fetch_tags($pdo);
$token = photo_app_csrf_token();

$pageTitle = 'Manage Tags';
$activeAdminNav = 'tags';

include __DIR__ . '/header.php';
?>

<section>
    <div class="admin-toolbar">
        <h2>Tags</h2>
    </div>

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
        <label>
            <span>Tag name</span>
            <input type="text" name="tag_name" required>
        </label>
        <button class="btn primary" type="submit" name="action" value="create">Add tag</button>
    </form>

    <div class="table-wrapper">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($tags as $tag): ?>
                    <tr>
                        <td><?= $tag['tag_id']; ?></td>
                        <td><?= htmlspecialchars($tag['tag_name']); ?></td>
                        <td>
                            <form method="post" class="inline-form">
                                <input type="hidden" name="csrf_token" value="<?= $token; ?>">
                                <input type="hidden" name="tag_id" value="<?= $tag['tag_id']; ?>">
                                <input type="text" name="tag_name" value="<?= htmlspecialchars($tag['tag_name']); ?>" required>
                                <button class="btn small" name="action" value="update">Save</button>
                                <button class="btn small danger" name="action" value="delete" onclick="return confirm('Delete this tag?');">Delete</button>
                            </form>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</section>

<?php include __DIR__ . '/footer.php'; ?>
