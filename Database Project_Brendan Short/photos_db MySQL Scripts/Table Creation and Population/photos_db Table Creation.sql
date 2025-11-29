DROP DATABASE IF EXISTS picture_database;
CREATE DATABASE picture_database;
USE picture_database;
CREATE TABLE tags (
    tag_id INT AUTO_INCREMENT PRIMARY KEY,
    tag_name VARCHAR(100) NOT NULL UNIQUE
);
CREATE TABLE collections (
    collection_id INT AUTO_INCREMENT PRIMARY KEY,
    collection_name VARCHAR(100) NOT NULL UNIQUE,
    collection_description TEXT,
    created_date_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    is_published BOOLEAN NOT NULL DEFAULT FALSE,
    published_date_time DATETIME NULL
);
CREATE TABLE media (
    media_id INT AUTO_INCREMENT PRIMARY KEY,
    media_type VARCHAR(50) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NULL,
    file_path_display VARCHAR(500) NOT NULL,
    is_drone BOOLEAN NOT NULL DEFAULT FALSE,
    upload_date_time DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE photos (
    photo_id INT PRIMARY KEY,
    file_path_full_resolution_logoless VARCHAR(500) NOT NULL,
    capture_date_time DATETIME NOT NULL,
    location_text VARCHAR(255) NOT NULL,
    latitude DECIMAL(9, 6) NULL,
    longitude DECIMAL(9, 6) NULL,
    camera_make_model VARCHAR(100) NULL,
    lens VARCHAR(100) NULL,
    filters VARCHAR(100) NULL,
    iso INT NULL,
    shutter_speed DECIMAL(6, 3) NULL,
    aperture DECIMAL(4, 2) NULL,
    focal_length DECIMAL(6, 2) NULL,
    aspect_ratio VARCHAR(20) NOT NULL,
    CONSTRAINT fk_photos_media FOREIGN KEY (photo_id) REFERENCES media (media_id) ON DELETE CASCADE
);
CREATE TABLE videos (
    video_id INT PRIMARY KEY,
    file_path_full_resolution_logoless VARCHAR(500) NOT NULL,
    capture_date_time DATETIME NOT NULL,
    duration_seconds DECIMAL(10, 3) NOT NULL,
    location_text VARCHAR(255) NOT NULL,
    latitude DECIMAL(9, 6) NULL,
    longitude DECIMAL(9, 6) NULL,
    camera_make_model VARCHAR(100) NULL,
    lens VARCHAR(100) NULL,
    filters VARCHAR(100) NULL,
    iso INT NULL,
    shutter_speed DECIMAL(6, 3) NULL,
    aperture DECIMAL(4, 2) NULL,
    focal_length DECIMAL(6, 2) NULL,
    aspect_ratio VARCHAR(20) NOT NULL,
    CONSTRAINT fk_videos_media FOREIGN KEY (video_id) REFERENCES media (media_id) ON DELETE CASCADE
);
CREATE TABLE media_tags (
    media_id INT NOT NULL,
    tag_id INT NOT NULL,
    PRIMARY KEY (media_id, tag_id),
    CONSTRAINT fk_media_tags_media FOREIGN KEY (media_id) REFERENCES media (media_id) ON DELETE CASCADE,
    CONSTRAINT fk_media_tags_tags FOREIGN KEY (tag_id) REFERENCES tags (tag_id) ON DELETE CASCADE
);
CREATE TABLE collection_items (
    collection_id INT NOT NULL,
    media_id INT NOT NULL,
    position INT NOT NULL,
    PRIMARY KEY (collection_id, media_id),
    CONSTRAINT fk_collection_items_collection FOREIGN KEY (collection_id) REFERENCES collections (collection_id) ON DELETE CASCADE,
    CONSTRAINT fk_collection_items_media FOREIGN KEY (media_id) REFERENCES media (media_id) ON DELETE CASCADE
);