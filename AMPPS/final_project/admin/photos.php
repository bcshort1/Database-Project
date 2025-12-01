<?php
require_once __DIR__ . '/../includes/bootstrap.php';
photo_app_require_login();

$sql = "SELECT m.media_id, m.title, m.is_drone, p.capture_date_time, p.location_text
        FROM media m
        JOIN photos p ON p.photo_id = m.media_id
        ORDER BY COALESCE(p.capture_date_time, m.upload_date_time) DESC";
$photos = $pdo->query($sql)->fetchAll();

$pageTitle = 'Manage Photos';
$activeAdminNav = 'photos';

include __DIR__ . '/header.php';
?>

<section>
    <div class="admin-toolbar">
        <h2>Photos</h2>
        <a class="btn primary" href="photo_edit.php">Add photo</a>
    </div>

    <div class="table-wrapper">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Captured</th>
                    <th>Location</th>
                    <th>Type</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($photos as $photo): ?>
                    <tr>
                        <td><?= $photo['media_id']; ?></td>
                        <td><?= htmlspecialchars($photo['title']); ?></td>
                        <td><?= $photo['capture_date_time'] ? date('Y-m-d', strtotime($photo['capture_date_time'])) : '—'; ?></td>
                        <td><?= htmlspecialchars($photo['location_text']); ?></td>
                        <td><?= $photo['is_drone'] ? 'Drone' : 'Camera'; ?></td>
                        <td><a class="btn small" href="photo_edit.php?id=<?= $photo['media_id']; ?>">Edit</a></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</section>

<?php include __DIR__ . '/footer.php'; ?>
