<?php
require_once __DIR__ . '/includes/bootstrap.php';

$page = max(1, (int)($_GET['page'] ?? 1));
$filters = photo_app_get_photo_filters($_GET);
$perPage = $app_items_per_page ?? 24;

$totalPhotos = photo_app_count_photos($pdo, $filters);
$pagination = photo_app_pagination($totalPhotos, $perPage, $page);
$photos = photo_app_fetch_photos($pdo, $filters, $pagination['per_page'], $pagination['offset']);
$tags = photo_app_fetch_tags($pdo);
$aspectRatios = photo_app_fetch_aspect_ratios($pdo);
$cameras = photo_app_fetch_cameras($pdo);

$pageTitle = 'Photo Gallery';
$activeNav = 'gallery';

include __DIR__ . '/header.php';

$seasonOptions = [
    '' => 'Any season',
    'winter' => 'Winter',
    'spring' => 'Spring',
    'summer' => 'Summer',
    'fall' => 'Fall',
];

$droneOptions = [
    'all' => 'All capture types',
    'drone' => 'Drone imagery',
    'traditional' => 'Traditional camera',
];

?>

<section class="filters">
    <form method="get" class="filter-form">
        <div class="filter-grid">
            <label>
                <span>Search</span>
                <input type="text" name="q" value="<?= htmlspecialchars($filters['q']); ?>" placeholder="Title, description, location">
            </label>

            <label>
                <span>Tag</span>
                <select name="tag">
                    <option value="">All tags</option>
                    <?php foreach ($tags as $tag): ?>
                        <option value="<?= $tag['tag_id']; ?>" <?= (string)$filters['tag'] === (string)$tag['tag_id'] ? 'selected' : ''; ?>>
                            <?= htmlspecialchars($tag['tag_name']); ?>
                        </option>
                    <?php endforeach; ?>
                </select>
            </label>

            <label>
                <span>Capture Type</span>
                <select name="drone">
                    <?php foreach ($droneOptions as $value => $label): ?>
                        <option value="<?= $value; ?>" <?= $filters['drone'] === $value ? 'selected' : ''; ?>>
                            <?= $label; ?>
                        </option>
                    <?php endforeach; ?>
                </select>
            </label>

            <label>
                <span>Season</span>
                <select name="season">
                    <?php foreach ($seasonOptions as $value => $label): ?>
                        <option value="<?= $value; ?>" <?= $filters['season'] === $value ? 'selected' : ''; ?>>
                            <?= $label; ?>
                        </option>
                    <?php endforeach; ?>
                </select>
            </label>

            <label>
                <span>Location</span>
                <input type="text" name="location" value="<?= htmlspecialchars($filters['location'] ?? ''); ?>" placeholder="e.g., Traverse City">
            </label>

            <label>
                <span>Aspect Ratio</span>
                <select name="aspect_ratio">
                    <option value="">Any ratio</option>
                    <?php foreach ($aspectRatios as $ratio): ?>
                        <option value="<?= htmlspecialchars($ratio); ?>" <?= $filters['aspect_ratio'] === $ratio ? 'selected' : ''; ?>>
                            <?= htmlspecialchars($ratio); ?>
                        </option>
                    <?php endforeach; ?>
                </select>
            </label>

            <label>
                <span>Camera</span>
                <select name="camera">
                    <option value="">Any camera</option>
                    <?php foreach ($cameras as $camera): ?>
                        <option value="<?= htmlspecialchars($camera); ?>" <?= $filters['camera'] === $camera ? 'selected' : ''; ?>>
                            <?= htmlspecialchars($camera); ?>
                        </option>
                    <?php endforeach; ?>
                </select>
            </label>

            <label>
                <span>Captured After</span>
                <input type="date" name="date_from" value="<?= htmlspecialchars($filters['date_from'] ?? ''); ?>">
            </label>

            <label>
                <span>Captured Before</span>
                <input type="date" name="date_to" value="<?= htmlspecialchars($filters['date_to'] ?? ''); ?>">
            </label>
        </div>

        <div class="filter-actions">
            <button type="submit" class="btn primary">Apply Filters</button>
            <a href="gallery.php" class="btn secondary">Reset</a>
            <span class="result-count"><?= $totalPhotos; ?> photos</span>
        </div>
    </form>
</section>

<section class="gallery-grid">
    <?php if (empty($photos)): ?>
        <div class="empty-state">
            <h2>No photos found</h2>
            <p>Try adjusting your filters or search terms.</p>
        </div>
    <?php else: ?>
        <?php foreach ($photos as $photo): ?>
            <article class="gallery-card">
                <a href="photo.php?id=<?= $photo['media_id']; ?>" class="card-link">
                    <img src="<?= htmlspecialchars(photo_app_media_url($photo['media_id'])); ?>" alt="<?= htmlspecialchars($photo['title']); ?>">
                    <div class="card-body">
                        <div class="card-meta">
                            <span class="chip <?= $photo['is_drone'] ? 'chip-drone' : 'chip-traditional'; ?>">
                                <?= $photo['is_drone'] ? 'Drone' : 'Camera'; ?>
                            </span>
                            <?php 
                                $displayDate = $photo['capture_date_time'] ?: $photo['upload_date_time'];
                                if ($displayDate): 
                            ?>
                                <span><?= date('M j, Y', strtotime($displayDate)); ?></span>
                            <?php endif; ?>
                        </div>
                        <h3><?= htmlspecialchars($photo['title']); ?></h3>
                        <?php if (!empty($photo['description'])): ?>
                            <p class="description"><?= htmlspecialchars($photo['description']); ?></p>
                        <?php endif; ?>
                        <?php if (!empty($photo['location_text'])): ?>
                            <p class="location"><?= htmlspecialchars($photo['location_text']); ?></p>
                        <?php endif; ?>
                        <?php if (!empty($photo['tags'])): ?>
                            <p class="tags"><?= htmlspecialchars($photo['tags']); ?></p>
                        <?php endif; ?>
                    </div>
                </a>
            </article>
        <?php endforeach; ?>
    <?php endif; ?>
</section>

<?php if ($pagination['total_pages'] > 1): ?>
    <nav class="pagination">
        <?php
        $query = $_GET;
        ?>
        <?php if ($pagination['has_prev']): ?>
            <?php $query['page'] = $pagination['current_page'] - 1; ?>
            <a class="btn secondary" href="?<?= http_build_query($query); ?>">&laquo; Previous</a>
        <?php endif; ?>

        <span>Page <?= $pagination['current_page']; ?> of <?= $pagination['total_pages']; ?></span>

        <?php if ($pagination['has_next']): ?>
            <?php $query['page'] = $pagination['current_page'] + 1; ?>
            <a class="btn secondary" href="?<?= http_build_query($query); ?>">Next &raquo;</a>
        <?php endif; ?>
    </nav>
<?php endif; ?>

<?php include __DIR__ . '/footer.php'; ?>
