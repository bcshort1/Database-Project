<?php
declare(strict_types=1);

require_once __DIR__ . '/../config.php';
require_once __DIR__ . '/../includes/functions.php';

function expect_condition(bool $condition, string $message): void
{
    if (!$condition) {
        throw new RuntimeException($message);
    }
}

$baseDir = sys_get_temp_dir() . '/photo_app_test_' . uniqid('', true);
$displayDir = $baseDir . '/display';
$fullDir = $baseDir . '/full';

mkdir($displayDir, 0777, true);
mkdir($fullDir, 0777, true);

$displayPhoto = $displayDir . DIRECTORY_SEPARATOR . 'photo_display.jpg';
$fullPhoto = $fullDir . DIRECTORY_SEPARATOR . 'photo_full.jpg';
$displayVideo = $displayDir . DIRECTORY_SEPARATOR . 'video_display.mp4';
$fullVideo = $fullDir . DIRECTORY_SEPARATOR . 'video_full.mp4';

file_put_contents($displayPhoto, 'photo');
file_put_contents($fullPhoto, 'photo-full');
file_put_contents($displayVideo, 'video');
file_put_contents($fullVideo, 'video-full');

global $asset_directories, $asset_display_directories, $asset_full_resolution_directories;
$asset_directories = [$displayDir, $fullDir];
$asset_display_directories = [$displayDir];
$asset_full_resolution_directories = [$fullDir];

expect_condition(
    photo_app_resolve_display_path([$displayPhoto]) === realpath($displayPhoto),
    'Should resolve a direct display path.'
);

$missingDisplay = $baseDir . '/missing/' . basename($displayPhoto);
expect_condition(
    photo_app_resolve_display_path([$missingDisplay]) === realpath($displayPhoto),
    'Should locate display asset by basename search.'
);

expect_condition(
    photo_app_resolve_display_path([$fullPhoto]) === null,
    'Full-resolution path must be rejected when not allowed.'
);

expect_condition(
    photo_app_resolve_display_path([$fullPhoto], ['allow_full_resolution' => true]) === realpath($fullPhoto),
    'Full-resolution path should return when explicitly allowed.'
);

$missingVideo = $baseDir . '/missing/' . basename($fullVideo);
expect_condition(
    photo_app_resolve_display_path([$missingVideo], ['allow_full_resolution' => true]) === realpath($fullVideo),
    'Videos may fall back to full resolution when permitted.'
);

$iterator = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($baseDir, FilesystemIterator::SKIP_DOTS),
    RecursiveIteratorIterator::CHILD_FIRST
);

foreach ($iterator as $fileInfo) {
    $path = $fileInfo->getPathname();
    if ($fileInfo->isDir()) {
        rmdir($path);
    } else {
        unlink($path);
    }
}

rmdir($baseDir);

echo "Media path resolver tests passed\n";
