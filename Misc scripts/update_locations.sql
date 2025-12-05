USE `picture_database`;

-- Update location_text fields with proper location data from City, State, Country
UPDATE photos 
SET location_text = 'Maple City, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Bird''s Eye View of Bohemian Lavender Farm' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Manistee, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Bird''s Eye View of Manistee' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Beulah, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Bird''s Eye View of the Neighborhood' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Maple City, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Bumble Bee Sampling Lavender' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Midland, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Classic Ford Mustang' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Beulah, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Closeup Cardinal In Winter' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Arcadia, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Closeup of Herron at Arcadia Marsh 2' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Arcadia, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Closeup of Herron at Arcadia Marsh' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Beulah, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Coleus Flowers' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Beulah, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Duck Couple in Winter' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Arcadia, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Family of Herrons at Arcadia Marsh' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Beulah, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Family of Swans on the Lake' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Beulah, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Foggy Morning on the Lake' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Northport, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Grand Traverse Lighthouse Foghorn Shelter' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Northport, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Grand Traverse Lighthouse' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Beulah, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Hummingbird at the Feeder' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Beulah, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Hummingbird Moth on Butterfly Bush Flowers' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Beulah, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Lilly Flowers' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Frankfort, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Livesaving Station in Frankfort' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Arcadia, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Monarch Butterfly on Butterfly Milkweed' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Arcadia, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Moth on Butterfly Milkweed' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Cleveland Township, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Picture of Rocks on Lake Bed on a Calm Day' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Frankfort, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Point Betsie Sunny Day' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Beulah, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Pontoon Boat Ride July 27th, 2025' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Beulah, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Roses in Bloom 2' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Beulah, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Roses In Bloom' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Arcadia, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Sailboat in the July 20th, 2025 Sailing Race' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Arcadia, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Sandhill Crane at Arcadia Marsh' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Arcadia, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Turtle on a Log' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Beulah, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Two Young Bucks at the Birdfeeder' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Frankfort, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Wedding at Frankfort Life Saving Station' AND media_type = 'PHOTO'
);

UPDATE photos 
SET location_text = 'Beulah, Michigan, United States' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = 'Yarrow Flowers' AND media_type = 'PHOTO'
);

