<?php
$db_host = getenv('PHOTO_DB_HOST') ?: 'localhost';
$db_name = getenv('PHOTO_DB_NAME') ?: 'picture_database';
$db_user = getenv('PHOTO_DB_USER') ?: 'root';
$db_pass = getenv('PHOTO_DB_PASS') ?: 'zDeKBrjqJPzGO)DM';

// Admin credentials for Phase 1 console. Override with environment variables in production.
$admin_username = getenv('PHOTO_APP_ADMIN_USER') ?: 'admin';
$admin_password_hash = getenv('PHOTO_APP_ADMIN_PASS_HASH')
	?: '$2y$10$vQ2ZeB.wK//9KI/i1bu0tudbx9gS8nhs1oYRay5p1ONda0jYXJ9cG'; // Password: ChangeMe123!

// Optional configuration tweaks
$app_items_per_page = 24;

// Allowed directories containing display-sized assets (outside web root).

$defaultAssetDirs = [
	__DIR__ . '/../../Media Display',
	__DIR__ . '/../../Media Display Sized',
	__DIR__ . '/../../Photos Full Resolution Logoless',
	__DIR__ . '/../../Videos Full Resolution Logoless',
	'C:/Program Files/Ampps/Media Display',
	'C:/Program Files/Ampps/Photos Full Resolution Logoless',
	'C:/Program Files/Ampps/Videos Full Resolution Logoless',
];

$envAssetDirs = getenv('PHOTO_APP_ASSET_DIRS');
if ($envAssetDirs) {
	$separator = stripos(PHP_OS_FAMILY, 'Windows') === 0 ? ';' : ':';
	foreach (explode($separator, $envAssetDirs) as $envPath) {
		if ($envPath !== '') {
			$defaultAssetDirs[] = $envPath;
		}
	}
}

$asset_directories = [];
$asset_display_directories = [];
$asset_full_resolution_directories = [];

foreach ($defaultAssetDirs as $path) {
	$real = realpath($path);
	if (!$real || !is_dir($real)) {
		continue;
	}

	$asset_directories[] = $real;
	$normalized = strtolower($real);
	if (strpos($normalized, 'photos full resolution') !== false || strpos($normalized, 'videos full resolution') !== false) {
		$asset_full_resolution_directories[] = $real;
	} else {
		$asset_display_directories[] = $real;
	}
}

// If no directories were classified (custom env, etc.), fall back to treating everything as displayable.
if (empty($asset_display_directories)) {
	$asset_display_directories = $asset_directories;
}