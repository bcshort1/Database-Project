<?php
require_once __DIR__ . '/../includes/bootstrap.php';
photo_app_require_login();

$collections = photo_app_fetch_collections($pdo, false);

$pageTitle = 'Manage Collections';
$activeAdminNav = 'collections';

include __DIR__ . '/header.php';
?>

<section>
    <div class="admin-toolbar">
        <h2>Collections</h2>
        <a class="btn primary" href="collection_edit.php">Create collection</a>
    </div>

    <div class="table-wrapper">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Items</th>
                    <th>Updated</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($collections as $collection): ?>
                    <tr>
                        <td><?= $collection['collection_id']; ?></td>
                        <td><?= htmlspecialchars($collection['collection_name']); ?></td>
                        <td><?= $collection['is_published'] ? 'Published' : 'Draft'; ?></td>
                        <td><?= (int)$collection['item_count']; ?></td>
                        <td><?= $collection['created_date_time'] ? date('Y-m-d', strtotime($collection['created_date_time'])) : '—'; ?></td>
                        <td><a class="btn small" href="collection_edit.php?id=<?= $collection['collection_id']; ?>">Edit</a></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</section>

<?php include __DIR__ . '/footer.php'; ?>
