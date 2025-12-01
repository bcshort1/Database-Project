<?php
declare(strict_types=1);

/**
 * Parse gallery filters from the incoming request.
 */
function photo_app_get_photo_filters(array $source): array
{
    $season = strtolower((string)($source['season'] ?? ''));
    $allowedSeasons = ['winter', 'spring', 'summer', 'fall'];

    $filters = [
        'q' => trim((string)($source['q'] ?? '')),
        'tag' => isset($source['tag']) ? max(0, (int)$source['tag']) : null,
        'drone' => strtolower((string)($source['drone'] ?? 'all')),
        'season' => in_array($season, $allowedSeasons, true) ? $season : null,
        'location' => trim((string)($source['location'] ?? '')),
        'aspect_ratio' => trim((string)($source['aspect_ratio'] ?? '')),
        'camera' => trim((string)($source['camera'] ?? '')),
        'date_from' => photo_app_filter_date($source['date_from'] ?? null),
        'date_to' => photo_app_filter_date($source['date_to'] ?? null),
    ];

    if ($filters['tag'] === 0) {
        $filters['tag'] = null;
    }

    $filters['drone'] = in_array($filters['drone'], ['all', 'drone', 'traditional'], true)
        ? $filters['drone']
        : 'all';

    if ($filters['aspect_ratio'] === '') {
        $filters['aspect_ratio'] = null;
    }

    if ($filters['camera'] === '') {
        $filters['camera'] = null;
    }

    if ($filters['location'] === '') {
        $filters['location'] = null;
    }

    return $filters;
}

function photo_app_filter_date($value): ?string
{
    if (!$value) {
        return null;
    }

    $date = DateTime::createFromFormat('Y-m-d', (string)$value);
    return $date ? $date->format('Y-m-d') : null;
}

function photo_app_build_photo_where(array $filters, array &$params): string
{
    $where = ["m.media_type = 'PHOTO'"];

    if ($filters['q'] !== '') {
        $where[] = '(m.title LIKE :q OR m.description LIKE :q OR p.location_text LIKE :q)';
        $params[':q'] = '%' . $filters['q'] . '%';
    }

    if (!empty($filters['tag'])) {
        $where[] = 'EXISTS (
            SELECT 1 FROM media_tags mt
            WHERE mt.media_id = m.media_id AND mt.tag_id = :tag
        )';
        $params[':tag'] = $filters['tag'];
    }

    if ($filters['drone'] === 'drone') {
        $where[] = 'm.is_drone = 1';
    } elseif ($filters['drone'] === 'traditional') {
        $where[] = 'm.is_drone = 0';
    }

    if ($filters['season']) {
        $seasonMonths = [
            'winter' => [12, 1, 2],
            'spring' => [3, 4, 5],
            'summer' => [6, 7, 8],
            'fall'   => [9, 10, 11],
        ];
        $placeholders = [];
        foreach ($seasonMonths[$filters['season']] as $idx => $month) {
            $placeholder = ':season_month_' . $idx;
            $placeholders[] = $placeholder;
            $params[$placeholder] = $month;
        }
        $where[] = 'MONTH(p.capture_date_time) IN (' . implode(',', $placeholders) . ')';
    }

    if ($filters['location']) {
        $where[] = 'p.location_text LIKE :location';
        $params[':location'] = '%' . $filters['location'] . '%';
    }

    if ($filters['aspect_ratio']) {
        $where[] = 'p.aspect_ratio = :aspect_ratio';
        $params[':aspect_ratio'] = $filters['aspect_ratio'];
    }

    if ($filters['camera']) {
        $where[] = 'p.camera_make_model LIKE :camera';
        $params[':camera'] = '%' . $filters['camera'] . '%';
    }

    if ($filters['date_from']) {
        $where[] = 'p.capture_date_time >= :date_from';
        $params[':date_from'] = $filters['date_from'] . ' 00:00:00';
    }

    if ($filters['date_to']) {
        $where[] = 'p.capture_date_time <= :date_to';
        $params[':date_to'] = $filters['date_to'] . ' 23:59:59';
    }

    return 'WHERE ' . implode(' AND ', $where);
}

function photo_app_fetch_photos(PDO $pdo, array $filters, int $limit, int $offset): array
{
    $params = [];
    $where = photo_app_build_photo_where($filters, $params);

    $sql = "SELECT
                m.media_id,
                m.title,
                m.description,
                m.file_path_display,
                m.is_drone,
                m.upload_date_time,
                p.capture_date_time,
                p.location_text,
                p.aspect_ratio,
                GROUP_CONCAT(DISTINCT t.tag_name ORDER BY t.tag_name SEPARATOR ', ') AS tags
            FROM media m
            JOIN photos p ON p.photo_id = m.media_id
            LEFT JOIN media_tags mt ON mt.media_id = m.media_id
            LEFT JOIN tags t ON t.tag_id = mt.tag_id
            $where
            GROUP BY m.media_id
            ORDER BY COALESCE(p.capture_date_time, m.upload_date_time) DESC
            LIMIT :limit OFFSET :offset";

    $stmt = $pdo->prepare($sql);
    foreach ($params as $param => $value) {
        $type = is_int($value) ? PDO::PARAM_INT : PDO::PARAM_STR;
        $stmt->bindValue($param, $value, $type);
    }
    $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
    $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
    $stmt->execute();

    return $stmt->fetchAll();
}

function photo_app_count_photos(PDO $pdo, array $filters): int
{
    $params = [];
    $where = photo_app_build_photo_where($filters, $params);

    $sql = 'SELECT COUNT(*) FROM media m JOIN photos p ON p.photo_id = m.media_id ' . $where;
    $stmt = $pdo->prepare($sql);
    foreach ($params as $param => $value) {
        $type = is_int($value) ? PDO::PARAM_INT : PDO::PARAM_STR;
        $stmt->bindValue($param, $value, $type);
    }
    $stmt->execute();

    return (int)$stmt->fetchColumn();
}

function photo_app_fetch_photo(PDO $pdo, int $mediaId): ?array
{
    $sql = "SELECT
                m.media_id,
                m.title,
                m.description,
                m.file_path_display,
                m.is_drone,
                m.upload_date_time,
                p.*
            FROM media m
            JOIN photos p ON p.photo_id = m.media_id
            WHERE m.media_type = 'PHOTO' AND m.media_id = :id";

    $stmt = $pdo->prepare($sql);
    $stmt->execute([':id' => $mediaId]);
    $photo = $stmt->fetch();

    if (!$photo) {
        return null;
    }

    $photo['tags'] = photo_app_fetch_media_tags($pdo, $mediaId);

    return $photo;
}

function photo_app_fetch_media_tags(PDO $pdo, int $mediaId): array
{
    $sql = "SELECT t.tag_id, t.tag_name
            FROM tags t
            JOIN media_tags mt ON mt.tag_id = t.tag_id
            WHERE mt.media_id = :id
            ORDER BY t.tag_name";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([':id' => $mediaId]);
    return $stmt->fetchAll();
}

function photo_app_fetch_tags(PDO $pdo): array
{
    $stmt = $pdo->query('SELECT tag_id, tag_name FROM tags ORDER BY tag_name');
    return $stmt->fetchAll();
}

function photo_app_fetch_aspect_ratios(PDO $pdo): array
{
    $stmt = $pdo->query('SELECT DISTINCT aspect_ratio FROM photos ORDER BY aspect_ratio');
    return array_filter(array_column($stmt->fetchAll(), 'aspect_ratio'));
}

function photo_app_fetch_cameras(PDO $pdo): array
{
    $stmt = $pdo->query('SELECT DISTINCT camera_make_model FROM photos WHERE camera_make_model IS NOT NULL ORDER BY camera_make_model');
    return array_filter(array_column($stmt->fetchAll(), 'camera_make_model'));
}

function photo_app_fetch_media_library(PDO $pdo): array
{
    $stmt = $pdo->query("SELECT media_id, title, media_type FROM media ORDER BY upload_date_time DESC");
    return $stmt->fetchAll();
}

function photo_app_resolve_display_path(array $dbPaths, array $options = []): ?string
{
    global $asset_display_directories, $asset_full_resolution_directories;

    $allowFullResolution = $options['allow_full_resolution'] ?? false;
    $searchDirectories = $options['search_directories'] ?? (
        $allowFullResolution
            ? array_merge($asset_display_directories, $asset_full_resolution_directories)
            : $asset_display_directories
    );

    $allowedDirectories = $options['allowed_directories'] ?? (
        $allowFullResolution
            ? array_merge($asset_display_directories, $asset_full_resolution_directories)
            : $asset_display_directories
    );

    $dbPaths = array_values(array_filter($dbPaths, static fn($path) => $path !== ''));

    foreach ($dbPaths as $dbPath) {
        if (!file_exists($dbPath)) {
            continue;
        }

        $realDbPath = realpath($dbPath);
        if (!$realDbPath) {
            continue;
        }

        if (!photo_app_path_allowed($realDbPath)) {
            continue;
        }

        if (!photo_app_is_path_in_directories($realDbPath, $allowedDirectories)) {
            continue;
        }

        return $realDbPath;
    }

    foreach ($dbPaths as $dbPath) {
        $basename = basename($dbPath);
        if ($basename === '') {
            continue;
        }

        foreach ($searchDirectories as $dir) {
            $candidate = rtrim($dir, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . $basename;
            if (!file_exists($candidate)) {
                continue;
            }

            $realCandidate = realpath($candidate);
            if ($realCandidate && photo_app_path_allowed($realCandidate)) {
                return $realCandidate;
            }
        }
    }

    return null;
}

function photo_app_path_allowed(string $path): bool
{
    global $asset_directories;
    $realPath = realpath($path);
    if (!$realPath) {
        return false;
    }

    $normalizedPath = photo_app_normalize_path($realPath);
    foreach ($asset_directories as $dir) {
        if (!$dir) {
            continue;
        }
        $base = photo_app_normalize_path($dir) . '/';
        if (strncasecmp($normalizedPath . '/', $base, strlen($base)) === 0) {
            return true;
        }
    }

    return false;
}

function photo_app_normalize_path(string $path): string
{
    $normalized = str_replace('\\', '/', $path);
    return rtrim($normalized, '/');
}

function photo_app_is_path_in_directories(string $path, array $directories): bool
{
    if (empty($directories)) {
        return false;
    }

    $normalized = photo_app_normalize_path($path);
    foreach ($directories as $dir) {
        $base = photo_app_normalize_path($dir) . '/';
        if (strncasecmp($normalized . '/', $base, strlen($base)) === 0) {
            return true;
        }
    }

    return false;
}

function photo_app_media_url(int $mediaId): string
{
    return 'media_asset.php?id=' . $mediaId;
}

function photo_app_detect_mime(string $path, string $mediaType): string
{
    if (class_exists(finfo::class)) {
        $finfo = new finfo(FILEINFO_MIME_TYPE);
        $mime = $finfo->file($path);
        if ($mime) {
            return $mime;
        }
    }

    return $mediaType === 'VIDEO' ? 'video/mp4' : 'image/jpeg';
}

function photo_app_fetch_collections(PDO $pdo, bool $publishedOnly = true): array
{
    $where = $publishedOnly ? 'WHERE c.is_published = 1' : '';
    $sql = "SELECT c.*, COUNT(ci.media_id) AS item_count
            FROM collections c
            LEFT JOIN collection_items ci ON ci.collection_id = c.collection_id
            $where
            GROUP BY c.collection_id
            ORDER BY c.created_date_time DESC";
    $stmt = $pdo->query($sql);
    return $stmt->fetchAll();
}

function photo_app_fetch_collection(PDO $pdo, int $collectionId, bool $publishedOnly = true): ?array
{
    $sql = "SELECT * FROM collections WHERE collection_id = :id";
    if ($publishedOnly) {
        $sql .= ' AND is_published = 1';
    }

    $stmt = $pdo->prepare($sql);
    $stmt->execute([':id' => $collectionId]);
    $collection = $stmt->fetch();

    if (!$collection) {
        return null;
    }

    $itemsSql = "SELECT
                    m.media_id,
                    m.title,
                    m.media_type,
                    m.file_path_display,
                    ci.position
                 FROM collection_items ci
                 JOIN media m ON m.media_id = ci.media_id
                 WHERE ci.collection_id = :id
                 ORDER BY ci.position ASC";
    $itemStmt = $pdo->prepare($itemsSql);
    $itemStmt->execute([':id' => $collectionId]);
    $collection['items'] = $itemStmt->fetchAll();
    $collection['item_count'] = count($collection['items']);

    return $collection;
}

function photo_app_fetch_videos(PDO $pdo, array $filters = []): array
{
    $where = "WHERE m.media_type = 'VIDEO'";
    $params = [];

    if (!empty($filters['drone'])) {
        if ($filters['drone'] === 'drone') {
            $where .= ' AND m.is_drone = 1';
        } elseif ($filters['drone'] === 'traditional') {
            $where .= ' AND m.is_drone = 0';
        }
    }

    $sql = "SELECT m.media_id, m.title, m.description, m.file_path_display,
                   m.is_drone, v.duration_seconds, v.location_text
            FROM media m
            JOIN videos v ON v.video_id = m.media_id
            $where
            ORDER BY v.capture_date_time DESC";

    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    return $stmt->fetchAll();
}

function photo_app_fetch_video(PDO $pdo, int $videoId): ?array
{
    $sql = "SELECT m.media_id, m.title, m.description, m.file_path_display,
                   m.is_drone, v.*
            FROM media m
            JOIN videos v ON v.video_id = m.media_id
            WHERE m.media_type = 'VIDEO' AND m.media_id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([':id' => $videoId]);
    $video = $stmt->fetch();
    return $video ?: null;
}

function photo_app_pagination(int $totalItems, int $perPage, int $currentPage): array
{
    $totalPages = max(1, (int)ceil($totalItems / $perPage));
    $currentPage = max(1, min($currentPage, $totalPages));
    $offset = ($currentPage - 1) * $perPage;

    return [
        'total_pages' => $totalPages,
        'current_page' => $currentPage,
        'per_page' => $perPage,
        'offset' => $offset,
        'has_prev' => $currentPage > 1,
        'has_next' => $currentPage < $totalPages,
    ];
}

function photo_app_is_logged_in(): bool
{
    return isset($_SESSION['photo_app_admin']['username']);
}

function photo_app_require_login(): void
{
    if (!photo_app_is_logged_in()) {
        header('Location: /final_project/admin/login.php');
        exit;
    }
}

function photo_app_login(string $username, string $password): bool
{
    global $admin_username, $admin_password_hash;

    $username = trim($username);
    if ($username === '' || $password === '') {
        return false;
    }

    if (hash_equals($admin_username, $username) && password_verify($password, $admin_password_hash)) {
        $_SESSION['photo_app_admin'] = [
            'username' => $admin_username,
            'login_time' => time(),
        ];
        session_regenerate_id(true);
        return true;
    }

    return false;
}

function photo_app_logout(): void
{
    $_SESSION['photo_app_admin'] = null;
    unset($_SESSION['photo_app_admin']);
    session_regenerate_id(true);
}

function photo_app_csrf_token(): string
{
    if (empty($_SESSION['photo_app_csrf'])) {
        $_SESSION['photo_app_csrf'] = bin2hex(random_bytes(32));
    }

    return $_SESSION['photo_app_csrf'];
}

function photo_app_validate_csrf(?string $token): bool
{
    return $token !== null && isset($_SESSION['photo_app_csrf']) && hash_equals($_SESSION['photo_app_csrf'], $token);
}

function photo_app_flash(string $message, string $type = 'info'): void
{
    $_SESSION['photo_app_flash'][] = [
        'message' => $message,
        'type' => $type,
    ];
}

function photo_app_get_flashes(): array
{
    $flashes = $_SESSION['photo_app_flash'] ?? [];
    unset($_SESSION['photo_app_flash']);
    return $flashes;
}

function photo_app_format_duration(float $seconds): string
{
    $minutes = floor($seconds / 60);
    $remaining = (int)round($seconds - ($minutes * 60));
    return sprintf('%02d:%02d', $minutes, $remaining);
}

function photo_app_season_label(?string $dateTime): ?string
{
    if (!$dateTime) {
        return null;
    }

    $dt = new DateTime($dateTime);
    $month = (int)$dt->format('n');

    return match (true) {
        in_array($month, [12, 1, 2], true) => 'Winter',
        in_array($month, [3, 4, 5], true) => 'Spring',
        in_array($month, [6, 7, 8], true) => 'Summer',
        default => 'Fall',
    };
}
