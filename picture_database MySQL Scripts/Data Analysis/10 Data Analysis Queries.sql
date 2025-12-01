-- 1. Count media items by type (PHOTO/VIDEO) and drone flag
SELECT 
    media_type,
    is_drone,
    COUNT(*) AS media_count
FROM media
GROUP BY media_type, is_drone
ORDER BY media_type, is_drone;


-- 2. Top 10 most-used tags across all media
SELECT 
    t.tag_id,
    t.tag_name,
    COUNT(*) AS media_count
FROM tags t
JOIN media_tags mt ON mt.tag_id = t.tag_id
GROUP BY t.tag_id, t.tag_name
ORDER BY media_count DESC, t.tag_name
LIMIT 10;


-- 3. Collection item counts (total / drone / photo / video) per collection
SELECT 
    c.collection_id,
    c.collection_name,
    COUNT(ci.media_id) AS total_items,
    SUM(CASE WHEN m.is_drone = 1 THEN 1 ELSE 0 END) AS drone_items,
    SUM(CASE WHEN m.media_type = 'PHOTO' THEN 1 ELSE 0 END) AS photo_items,
    SUM(CASE WHEN m.media_type = 'VIDEO' THEN 1 ELSE 0 END) AS video_items
FROM collections c
LEFT JOIN collection_items ci ON ci.collection_id = c.collection_id
LEFT JOIN media m ON m.media_id = ci.media_id
GROUP BY c.collection_id, c.collection_name
ORDER BY total_items DESC, c.collection_name;


-- 4. Photo counts per month for year 2025
SELECT
    YEAR(p.capture_date_time) AS capture_year,
    MONTH(p.capture_date_time) AS capture_month,
    DATE_FORMAT(p.capture_date_time, '%M') AS month_name,
    COUNT(*) AS photo_count
FROM photos p
WHERE YEAR(p.capture_date_time) = 2025
GROUP BY capture_year, capture_month, month_name
ORDER BY capture_year, capture_month;


-- 5. Average ISO and shutter speed per camera, split by drone vs non-drone photos
SELECT
    p.camera_make_model,
    m.is_drone,
    COUNT(*) AS photo_count,
    AVG(p.iso) AS avg_iso,
    AVG(p.shutter_speed) AS avg_shutter_speed
FROM photos p
JOIN media m ON m.media_id = p.photo_id
GROUP BY p.camera_make_model, m.is_drone
ORDER BY p.camera_make_model, m.is_drone;


-- 6. Total and average video duration per video location
SELECT
    v.location_text,
    COUNT(*) AS video_count,
    SUM(v.duration_seconds) AS total_duration_seconds,
    AVG(v.duration_seconds) AS avg_duration_seconds
FROM videos v
GROUP BY v.location_text
ORDER BY total_duration_seconds DESC;


-- 7. Count media items tagged with BOTH 'Drone' and 'Water'
SELECT 
    COUNT(DISTINCT mt1.media_id) AS media_with_drone_and_water
FROM media_tags mt1
JOIN tags t1 
    ON t1.tag_id = mt1.tag_id 
   AND t1.tag_name = 'Drone'
JOIN media_tags mt2 
    ON mt2.media_id = mt1.media_id
JOIN tags t2 
    ON t2.tag_id = mt2.tag_id 
   AND t2.tag_name = 'Water';


-- 8. Photo counts per location, split by drone vs non-drone
SELECT
    p.location_text,
    m.is_drone,
    COUNT(*) AS photo_count
FROM photos p
JOIN media m ON m.media_id = p.photo_id
GROUP BY p.location_text, m.is_drone
ORDER BY photo_count DESC, p.location_text;


-- 9. For collections that include videos, total and average video duration per collection
SELECT
    c.collection_id,
    c.collection_name,
    COUNT(DISTINCT v.video_id) AS video_count,
    SUM(v.duration_seconds) AS total_duration_seconds,
    AVG(v.duration_seconds) AS avg_duration_seconds
FROM collections c
JOIN collection_items ci ON ci.collection_id = c.collection_id
JOIN media m ON m.media_id = ci.media_id
JOIN videos v ON v.video_id = m.media_id
GROUP BY c.collection_id, c.collection_name
HAVING video_count > 0
ORDER BY total_duration_seconds DESC;


-- 10. For each tag, percentage of tagged media that are drone media
SELECT
    t.tag_id,
    t.tag_name,
    COUNT(*) AS media_count,
    SUM(CASE WHEN m.is_drone = 1 THEN 1 ELSE 0 END) AS drone_media_count,
    ROUND(
        100.0 * SUM(CASE WHEN m.is_drone = 1 THEN 1 ELSE 0 END) / COUNT(*),
        2
    ) AS drone_percentage
FROM tags t
JOIN media_tags mt ON mt.tag_id = t.tag_id
JOIN media m ON m.media_id = mt.media_id
GROUP BY t.tag_id, t.tag_name
ORDER BY drone_percentage DESC, media_count DESC;
