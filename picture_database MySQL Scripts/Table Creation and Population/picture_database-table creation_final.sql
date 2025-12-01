CREATE DATABASE IF NOT EXISTS `picture_database`;
USE `picture_database`;

CREATE TABLE `collections` (
  `collection_id` int NOT NULL AUTO_INCREMENT,
  `collection_name` varchar(100) NOT NULL,
  `collection_description` text,
  `created_date_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `is_published` tinyint(1) NOT NULL DEFAULT '0',
  `published_date_time` datetime DEFAULT NULL,
  PRIMARY KEY (`collection_id`),
  UNIQUE KEY `collection_name` (`collection_name`)
);

CREATE TABLE `media` (
  `media_id` int NOT NULL AUTO_INCREMENT,
  `media_type` varchar(50) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text,
  `file_path_display` varchar(500) NOT NULL,
  `is_drone` tinyint(1) NOT NULL DEFAULT '0',
  `upload_date_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`media_id`)
);

CREATE TABLE `tags` (
  `tag_id` int NOT NULL AUTO_INCREMENT,
  `tag_name` varchar(100) NOT NULL,
  PRIMARY KEY (`tag_id`),
  UNIQUE KEY `tag_name` (`tag_name`)
);

CREATE TABLE `photos` (
  `photo_id` int NOT NULL,
  `file_path_full_resolution_logoless` varchar(500) NOT NULL,
  `capture_date_time` datetime NOT NULL,
  `location_text` varchar(255) NOT NULL,
  `latitude` decimal(9,6) DEFAULT NULL,
  `longitude` decimal(9,6) DEFAULT NULL,
  `camera_make_model` varchar(100) DEFAULT NULL,
  `lens` varchar(100) DEFAULT NULL,
  `filters` varchar(100) DEFAULT NULL,
  `iso` int DEFAULT NULL,
  `shutter_speed` decimal(6,3) DEFAULT NULL,
  `aperture` decimal(4,2) DEFAULT NULL,
  `focal_length` decimal(6,2) DEFAULT NULL,
  `aspect_ratio` varchar(20) NOT NULL,
  PRIMARY KEY (`photo_id`),
  CONSTRAINT `fk_photos_media`
    FOREIGN KEY (`photo_id`) REFERENCES `media` (`media_id`) ON DELETE CASCADE
);

CREATE TABLE `videos` (
  `video_id` int NOT NULL,
  `file_path_full_resolution_logoless` varchar(500) NOT NULL,
  `capture_date_time` datetime NOT NULL,
  `duration_seconds` decimal(10,3) NOT NULL,
  `location_text` varchar(255) NOT NULL,
  `latitude` decimal(9,6) DEFAULT NULL,
  `longitude` decimal(9,6) DEFAULT NULL,
  `camera_make_model` varchar(100) DEFAULT NULL,
  `lens` varchar(100) DEFAULT NULL,
  `filters` varchar(100) DEFAULT NULL,
  `iso` int DEFAULT NULL,
  `shutter_speed` decimal(6,3) DEFAULT NULL,
  `aperture` decimal(4,2) DEFAULT NULL,
  `focal_length` decimal(6,2) DEFAULT NULL,
  `aspect_ratio` varchar(20) NOT NULL,
  PRIMARY KEY (`video_id`),
  CONSTRAINT `fk_videos_media`
    FOREIGN KEY (`video_id`) REFERENCES `media` (`media_id`) ON DELETE CASCADE
);

CREATE TABLE `collection_items` (
  `collection_id` int NOT NULL,
  `media_id` int NOT NULL,
  `position` int NOT NULL,
  PRIMARY KEY (`collection_id`,`media_id`),
  KEY `fk_collection_items_media` (`media_id`),
  CONSTRAINT `fk_collection_items_collection`
    FOREIGN KEY (`collection_id`) REFERENCES `collections` (`collection_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_collection_items_media`
    FOREIGN KEY (`media_id`) REFERENCES `media` (`media_id`) ON DELETE CASCADE
);

CREATE TABLE `media_tags` (
  `media_id` int NOT NULL,
  `tag_id` int NOT NULL,
  PRIMARY KEY (`media_id`,`tag_id`),
  KEY `fk_media_tags_tags` (`tag_id`),
  CONSTRAINT `fk_media_tags_media`
    FOREIGN KEY (`media_id`) REFERENCES `media` (`media_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_media_tags_tags`
    FOREIGN KEY (`tag_id`) REFERENCES `tags` (`tag_id`) ON DELETE CASCADE
);
