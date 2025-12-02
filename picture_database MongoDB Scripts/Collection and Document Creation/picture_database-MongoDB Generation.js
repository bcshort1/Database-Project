use('picture_database');
db.dropDatabase();

const collections = [
    {
        "collectionId":  1,
        "collectionName":  "Drone Aerials",
        "collectionDescription":  "All aerial photos and videos shot with the DJI Air 3S.",
        "createdDateTime":  "2025-11-28 12:00:00",
        "isPublished":  1,
        "publishedDateTime":  "2025-11-28 13:00:00"
    },
    {
        "collectionId":  2,
        "collectionName":  "Wildlife \u0026 Critters",
        "collectionDescription":  "Birds, insects, deer, bear, and other wildlife around the lakes and marshes.",
        "createdDateTime":  "2025-11-28 12:00:00",
        "isPublished":  1,
        "publishedDateTime":  "2025-11-28 13:00:00"
    },
    {
        "collectionId":  3,
        "collectionName":  "Lighthouses \u0026 Lake Michigan",
        "collectionDescription":  "Frankfort Light, Point Betsie, Grand Traverse, and other lighthouse scenes on Lake Michigan.",
        "createdDateTime":  "2025-11-28 12:00:00",
        "isPublished":  1,
        "publishedDateTime":  "2025-11-28 13:00:00"
    },
    {
        "collectionId":  4,
        "collectionName":  "Winter \u0026 Ice",
        "collectionDescription":  "Snowy shorelines, pancake ice, and winter scenes on the lakes.",
        "createdDateTime":  "2025-11-28 12:00:00",
        "isPublished":  1,
        "publishedDateTime":  "2025-11-28 13:00:00"
    },
    {
        "collectionId":  5,
        "collectionName":  "Flowers \u0026 Gardens",
        "collectionDescription":  "Lavender fields, garden flowers, and detailed closeups.",
        "createdDateTime":  "2025-11-28 12:00:00",
        "isPublished":  1,
        "publishedDateTime":  "2025-11-28 13:00:00"
    },
    {
        "collectionId":  6,
        "collectionName":  "Lakes, Rivers \u0026 Shoreline",
        "collectionDescription":  "Lakes, rivers, bays, marshes, and shoreline scenes around Michigan.",
        "createdDateTime":  "2025-11-28 12:00:00",
        "isPublished":  1,
        "publishedDateTime":  "2025-11-28 13:00:00"
    }
];

const mediaRows = [
    {
        "mediaId":  1,
        "mediaType":  "VIDEO",
        "title":  "Bear at the Birdfeeder-2025-06-19-21-46-19",
        "description":  "Video of Bear at the Birdfeeder-2025-06-19-21-46-19.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Bear at the Birdfeeder-2025-06-19-21-46-19-photos_db_sized_video-1.mp4",
        "isDrone":  0,
        "uploadDateTime":  "2025-11-28 17:27:29"
    },
    {
        "mediaId":  2,
        "mediaType":  "PHOTO",
        "title":  "Bird\u0027s Eye View of Bohemian Lavender Farm",
        "description":  "Bird\u0027s Eye picture of Bohemian Lavender Farm.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Bird\u0027s Eye View of Bohemian Lavender Farm_DJI_20250713134902_0441_D-HDR-2_photos_db_sized_photo_13.png",
        "isDrone":  1,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  3,
        "mediaType":  "PHOTO",
        "title":  "Bird\u0027s Eye View of Manistee",
        "description":  "Bird\u0027s Eye picture of Manistee.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Bird\u0027s Eye View of Manistee_DJI_20250628172944_0726_D-HDR_photos_db_sized_photo_11.png",
        "isDrone":  1,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  4,
        "mediaType":  "PHOTO",
        "title":  "Bird\u0027s Eye View of the Neighborhood",
        "description":  "Bird\u0027s Eye picture of the neighborhood.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Bird\u0027s Eye View of the Neighborhood_DJI_20250622150721_0379_D-HDR_photos_db_sized_photo_10.png",
        "isDrone":  1,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  5,
        "mediaType":  "PHOTO",
        "title":  "Blood Moon Closeup",
        "description":  "Closeup of the Blood Moon that occurred on March 14th, 2025.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Blood Moon Closeup_P3140252-Enhanced-SR_photos_db_sized_photo_1.png",
        "isDrone":  0,
        "uploadDateTime":  "2025-03-14 02:02:31"
    },
    {
        "mediaId":  6,
        "mediaType":  "PHOTO",
        "title":  "Blood Moon",
        "description":  "Picture of the blood moon on September 8th, 2025.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Blood Moon_DJI_20250908205852_0722_D_photos_db_sized_photo_33.png",
        "isDrone":  1,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  7,
        "mediaType":  "VIDEO",
        "title":  "Brendan Playing with Tater at the Sandbar",
        "description":  "Video of Brendan playing with Tater at the sandbar.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Brendan Playing with Tater at the Sandbar-DJI_20250807180534_0565_D-photos_db_sized_video-10.mp4",
        "isDrone":  1,
        "uploadDateTime":  "2025-11-28 18:15:20"
    },
    {
        "mediaId":  8,
        "mediaType":  "VIDEO",
        "title":  "Bricks Classic Car Show Flyover",
        "description":  "Video of the Bricks Classic Car Show flyover.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Bricks Classic Car Show Flyover-DJI_20250607161031_0356_D-photos_db_sized_video-6.mp4",
        "isDrone":  1,
        "uploadDateTime":  "2025-11-28 17:35:09"
    },
    {
        "mediaId":  9,
        "mediaType":  "PHOTO",
        "title":  "Bumble Bee Sampling Lavender",
        "description":  "Picture of a bumble bee on lavender flowers.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Bumble Bee Sampling Lavender_P7132118_photos_db_sized_photo_12.png",
        "isDrone":  0,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  10,
        "mediaType":  "PHOTO",
        "title":  "Classic Ford Mustang",
        "description":  "Picture of Bill Short\u0027s classic Ford Mustang.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Classic Ford Mustang_P9130783_photos_db_sized_photo_34.png",
        "isDrone":  0,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  11,
        "mediaType":  "PHOTO",
        "title":  "Closeup Cardinal In Winter",
        "description":  "Closeup of a male cardinal at the bird feeder in winter.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Closeup Cardinal In Winter_P3160548_photos_db_sized_photo_2.png",
        "isDrone":  0,
        "uploadDateTime":  "2025-03-16 11:47:54"
    },
    {
        "mediaId":  12,
        "mediaType":  "PHOTO",
        "title":  "Closeup of Herron at Arcadia Marsh 2",
        "description":  "Another closeup image of a heron at Arcadia Marsh.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Closeup of Herron at Arcadia Marsh 2_P8300146_photos_db_sized_photo_25.png",
        "isDrone":  0,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  13,
        "mediaType":  "PHOTO",
        "title":  "Closeup of Herron at Arcadia Marsh",
        "description":  "Closeup image of a heron at Arcadia Marsh.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Closeup of Herron at Arcadia Marsh_P8300141_photos_db_sized_photo_24.png",
        "isDrone":  0,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  14,
        "mediaType":  "PHOTO",
        "title":  "Coleus Flowers",
        "description":  "Picture of Coleus flowers.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Coleus Flowers_P6221910_photos_db_sized_photo_5.png",
        "isDrone":  0,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  15,
        "mediaType":  "VIDEO",
        "title":  "Drone Flyover of Buggy Ride June 15th, 2025",
        "description":  "Video of a drone flyover of a buggy ride on June 15th, 2025.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Drone Flyover of Buggy Ride June 15th, 2025-DJI_20250615113152_0079_D-photos_db_sized_video-8.mp4",
        "isDrone":  1,
        "uploadDateTime":  "2025-11-28 17:51:55"
    },
    {
        "mediaId":  16,
        "mediaType":  "PHOTO",
        "title":  "Duck Couple in Winter",
        "description":  "Duck mates in wintertime.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Duck Couple in Winter_P3240589_photos_db_sized_photo_3.png",
        "isDrone":  0,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  17,
        "mediaType":  "PHOTO",
        "title":  "Family of Herrons at Arcadia Marsh",
        "description":  "Picture of a family of herons at Arcadia Marsh.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Family of Herrons at Arcadia Marsh_P7202282_photos_db_sized_photo_17.png",
        "isDrone":  0,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  18,
        "mediaType":  "PHOTO",
        "title":  "Family of Swans on the Lake",
        "description":  "Picture of a family of swans on the lake.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Family of Swans on the Lake_P8102727_photos_db_sized_photo_22.png",
        "isDrone":  0,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  19,
        "mediaType":  "PHOTO",
        "title":  "Foggy Morning on the Lake",
        "description":  "Picture of a foggy morning on the lake.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Foggy Morning on the Lake_DJI_20250927081415_0091_D-HDR_photos_db_sized_photo_35.png",
        "isDrone":  1,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  20,
        "mediaType":  "VIDEO",
        "title":  "Frankfort Light in Winter-DJI 0317",
        "description":  "Video of Frankfort Light in winter.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Frankfort Light in Winter-DJI_0317-photos_db_sized_video-4.mp4",
        "isDrone":  1,
        "uploadDateTime":  "2025-11-28 17:29:14"
    },
    {
        "mediaId":  21,
        "mediaType":  "VIDEO",
        "title":  "Frankfort Lighthouse at Sunset",
        "description":  "Video of the Frankfort lighthouse at sunset.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Frankfort Lighthouse at Sunset-DJI_20250907202054_0562_D-photos_db_sized_video-14.mp4",
        "isDrone":  1,
        "uploadDateTime":  "2025-11-28 18:32:39"
    },
    {
        "mediaId":  22,
        "mediaType":  "PHOTO",
        "title":  "Grand Traverse Lighthouse Foghorn Shelter",
        "description":  "Picture of the Grand Traverse Lighthouse foghorn shelter.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Grand Traverse Lighthouse Foghorn Shelter_P9020255_photos_db_sized_photo_31.png",
        "isDrone":  0,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  23,
        "mediaType":  "PHOTO",
        "title":  "Grand Traverse Lighthouse",
        "description":  "Picture of the Grand Traverse Lighthouse.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Grand Traverse Lighthouse_P9020265_photos_db_sized_photo_30.png",
        "isDrone":  0,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  24,
        "mediaType":  "PHOTO",
        "title":  "Hummingbird at the Feeder",
        "description":  "Picture of a hummingbird at the feeder.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Hummingbird at the Feeder_P8082625_photos_db_sized_photo_21.png",
        "isDrone":  0,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  25,
        "mediaType":  "PHOTO",
        "title":  "Hummingbird Moth on Butterfly Bush Flowers",
        "description":  "Picture of a hummingbird moth on butterfly bush flowers.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Hummingbird Moth on Butterfly Bush Flowers_P7292475_photos_db_sized_photo_20.png",
        "isDrone":  0,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  26,
        "mediaType":  "PHOTO",
        "title":  "Lilly Flowers",
        "description":  "Picture of lily flowers.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Lilly Flowers_P6221902_photos_db_sized_photo_7.png",
        "isDrone":  0,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  27,
        "mediaType":  "PHOTO",
        "title":  "Livesaving Station in Frankfort",
        "description":  "Picture of the lifesaving station in Frankfort.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Livesaving Station in Frankfort_DJI_20250830202221_0049_D-HDR_photos_db_sized_photo_27.png",
        "isDrone":  1,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  28,
        "mediaType":  "PHOTO",
        "title":  "Monarch Butterfly on Butterfly Milkweed",
        "description":  "Picture of a monarch butterfly perched on butterfly milkweed.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Monarch Butterfly on Butterfly Milkweed_P8300133_photos_db_sized_photo_26.png",
        "isDrone":  0,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  29,
        "mediaType":  "VIDEO",
        "title":  "More Drone Buggy Flyover June 15th, 2025",
        "description":  "Video of a second drone flyover of the buggy ride on June 15th, 2025.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\More Drone Buggy Flyover June 15th, 2025-DJI_20250615113533_0080_D-photos_db_sized_video-9.mp4",
        "isDrone":  1,
        "uploadDateTime":  "2025-11-28 18:09:31"
    },
    {
        "mediaId":  30,
        "mediaType":  "PHOTO",
        "title":  "Moth on Butterfly Milkweed",
        "description":  "Picture of a moth on butterfly milkweed.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Moth on Butterfly Milkweed_P7202231_photos_db_sized_photo_16.png",
        "isDrone":  0,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  31,
        "mediaType":  "VIDEO",
        "title":  "Pancake Ice at the Mouth of the Betsie",
        "description":  "Video of pancake ice at the mouth of the Betsie River.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Pancake Ice at the Mouth of the Betsie-DJI_20250221140336_0110_D-photos_db_sized_video-2.mp4",
        "isDrone":  1,
        "uploadDateTime":  "2025-11-28 17:28:41"
    },
    {
        "mediaId":  32,
        "mediaType":  "PHOTO",
        "title":  "Picture of Rocks on Lake Bed on a Calm Day",
        "description":  "Picture of rocks on the lakebed on a calm day.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Picture of Rocks on Lake Bed on a Calm Day_P9010226_photos_db_sized_photo_29.png",
        "isDrone":  0,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  33,
        "mediaType":  "VIDEO",
        "title":  "Point Betsie Lighthouse in Winter-DJI 0356",
        "description":  "Video of Point Betsie Lighthouse in winter.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Point Betsie Lighthouse in Winter-DJI_0356-photos_db_sized_video-5.mp4",
        "isDrone":  1,
        "uploadDateTime":  "2025-11-28 17:33:19"
    },
    {
        "mediaId":  34,
        "mediaType":  "VIDEO",
        "title":  "Point Betsie on a Wavy Day",
        "description":  "Video of Point Betsie on a wavy day.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Point Betsie on a Wavy Day-DJI_20250905092401_0387_D-photos_db_sized_video-11.mp4",
        "isDrone":  1,
        "uploadDateTime":  "2025-11-28 18:19:16"
    },
    {
        "mediaId":  35,
        "mediaType":  "PHOTO",
        "title":  "Point Betsie Sunny Day",
        "description":  "Picture of Point Betsie on a sunny day.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Point Betsie Sunny Day_DJI_20250905150029_0444_D-HDR_photos_db_sized_photo_32.png",
        "isDrone":  1,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  36,
        "mediaType":  "VIDEO",
        "title":  "Point Betsie Wavy Day",
        "description":  "Video of Point Betsie during a wavy day.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Point Betsie Wavy Day-DJI_20250905145209_0417_D-photos_db_sized_video-13.mp4",
        "isDrone":  1,
        "uploadDateTime":  "2025-11-28 18:27:54"
    },
    {
        "mediaId":  37,
        "mediaType":  "PHOTO",
        "title":  "Pontoon Boat Ride July 27th, 2025",
        "description":  "Picture from a pontoon boat ride on July 27th, 2025.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Pontoon Boat Ride July 27th, 2025_DJI_20250727114503_0239_D-2_photos_db_sized_photo_19.png",
        "isDrone":  1,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  38,
        "mediaType":  "VIDEO",
        "title":  "Pontoon Boat Ride June 14th, 2025",
        "description":  "Video of a pontoon boat ride on June 14th, 2025.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Pontoon Boat Ride June 14th, 2025-DJI_20250614154400_0074_D-photos_db_sized_video-7.mp4",
        "isDrone":  1,
        "uploadDateTime":  "2025-11-28 17:36:55"
    },
    {
        "mediaId":  39,
        "mediaType":  "PHOTO",
        "title":  "Roses in Bloom 2",
        "description":  "Additional picture of roses in bloom.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Roses in Bloom 2_P6221899_photos_db_sized_photo_9.png",
        "isDrone":  0,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  40,
        "mediaType":  "PHOTO",
        "title":  "Roses In Bloom",
        "description":  "Picture of roses in bloom.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Roses In Bloom_P6221900_photos_db_sized_photo_8.png",
        "isDrone":  0,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  41,
        "mediaType":  "PHOTO",
        "title":  "Sailboat in the July 20th, 2025 Sailing Race",
        "description":  "Picture of a sailboat in the July 20th, 2025 sailing race.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Sailboat in the July 20th, 2025 Sailing Race_DJI_20250720192045_0752_D-HDR_photos_db_sized_photo_18.png",
        "isDrone":  1,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  42,
        "mediaType":  "PHOTO",
        "title":  "Sandhill Crane at Arcadia Marsh",
        "description":  "Picture of a sandhill crane at Arcadia Marsh.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Sandhill Crane at Arcadia Marsh_P7202247_photos_db_sized_photo_14.png",
        "isDrone":  0,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  43,
        "mediaType":  "PHOTO",
        "title":  "Turtle on a Log",
        "description":  "Picture of turtles on a log at Arcadia Marsh.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Turtle on a Log_P7202239_photos_db_sized_photo_15.png",
        "isDrone":  0,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  44,
        "mediaType":  "PHOTO",
        "title":  "Two Young Bucks at the Birdfeeder",
        "description":  "Picture of two young bucks at the birdfeeder.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Two Young Bucks at the Birdfeeder_P8162784-3_photos_db_sized_photo_23.png",
        "isDrone":  0,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  45,
        "mediaType":  "VIDEO",
        "title":  "Wavy Morning on the Elberta Side",
        "description":  "Video of wavy morning conditions on the Elberta side.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Wavy Morning on the Elberta Side-DJI_20250905141742_0400_D-photos_db_sized_video-12.mp4",
        "isDrone":  1,
        "uploadDateTime":  "2025-11-28 18:25:22"
    },
    {
        "mediaId":  46,
        "mediaType":  "PHOTO",
        "title":  "Wedding at Frankfort Life Saving Station",
        "description":  "Picture of a wedding hosted at the Frankfort Life Saving Station.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Wedding at Frankfort Life Saving Station_DJI_20250830205348_0108_D-2_photos_db_sized_photo_28.png",
        "isDrone":  1,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  47,
        "mediaType":  "VIDEO",
        "title":  "Winter Sunset Timelapse in Manistee",
        "description":  "Video of a winter sunset timelapse in Manistee.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Winter Sunset Timelapse in Manistee-dji_fly_20250307_183132_0052_1741396467214_hyperlapse-photos_db_sized_video-3.mp4",
        "isDrone":  1,
        "uploadDateTime":  "2025-11-28 17:29:10"
    },
    {
        "mediaId":  48,
        "mediaType":  "PHOTO",
        "title":  "Yarrow Flowers",
        "description":  "Picture of yarrow flowers.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\Yarrow Flowers_P6221908_photos_db_sized_photo_6.png",
        "isDrone":  0,
        "uploadDateTime":  "2025-11-28 12:00:00"
    },
    {
        "mediaId":  49,
        "mediaType":  "PHOTO",
        "title":  "Untitled DJI Photo in Frankfort",
        "description":  "Photo of a DJI aerial scene in Frankfort.",
        "filePathDisplay":  "C:\\\\Program Files\\\\Ampps\\\\Media Display\\\\_DJI_20250619213832_0258_D_photos_db_sized_photo_4.png",
        "isDrone":  1,
        "uploadDateTime":  "2025-06-19 21:38:32"
    }
];

const tags = [
    {
        "tagId":  3,
        "tagName":  "Aerial"
    },
    {
        "tagId":  27,
        "tagName":  "Arcadia"
    },
    {
        "tagId":  23,
        "tagName":  "Astro"
    },
    {
        "tagId":  9,
        "tagName":  "Bear"
    },
    {
        "tagId":  28,
        "tagName":  "Betsie"
    },
    {
        "tagId":  6,
        "tagName":  "Bird"
    },
    {
        "tagId":  37,
        "tagName":  "Boat"
    },
    {
        "tagId":  38,
        "tagName":  "Buggy"
    },
    {
        "tagId":  39,
        "tagName":  "Car"
    },
    {
        "tagId":  8,
        "tagName":  "Deer"
    },
    {
        "tagId":  10,
        "tagName":  "Dog"
    },
    {
        "tagId":  2,
        "tagName":  "Drone"
    },
    {
        "tagId":  31,
        "tagName":  "Elberta"
    },
    {
        "tagId":  40,
        "tagName":  "Event"
    },
    {
        "tagId":  11,
        "tagName":  "Flowers"
    },
    {
        "tagId":  18,
        "tagName":  "Fog"
    },
    {
        "tagId":  25,
        "tagName":  "Frankfort"
    },
    {
        "tagId":  20,
        "tagName":  "Ice"
    },
    {
        "tagId":  5,
        "tagName":  "Insect"
    },
    {
        "tagId":  35,
        "tagName":  "Lake Michigan"
    },
    {
        "tagId":  13,
        "tagName":  "Lavender"
    },
    {
        "tagId":  36,
        "tagName":  "Lighthouse"
    },
    {
        "tagId":  26,
        "tagName":  "Manistee"
    },
    {
        "tagId":  29,
        "tagName":  "Maple City"
    },
    {
        "tagId":  15,
        "tagName":  "Marsh"
    },
    {
        "tagId":  33,
        "tagName":  "Michigan"
    },
    {
        "tagId":  32,
        "tagName":  "Midland"
    },
    {
        "tagId":  21,
        "tagName":  "Moon"
    },
    {
        "tagId":  1,
        "tagName":  "Nature"
    },
    {
        "tagId":  22,
        "tagName":  "Night"
    },
    {
        "tagId":  12,
        "tagName":  "Plants"
    },
    {
        "tagId":  7,
        "tagName":  "Reptile"
    },
    {
        "tagId":  16,
        "tagName":  "Sandbar"
    },
    {
        "tagId":  30,
        "tagName":  "St Joseph"
    },
    {
        "tagId":  17,
        "tagName":  "Sunset"
    },
    {
        "tagId":  24,
        "tagName":  "Timelapse"
    },
    {
        "tagId":  34,
        "tagName":  "United States"
    },
    {
        "tagId":  14,
        "tagName":  "Water"
    },
    {
        "tagId":  4,
        "tagName":  "Wildlife"
    },
    {
        "tagId":  19,
        "tagName":  "Winter"
    }
];

const photoRows = [
    {
        "photoId":  2,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Bird\u0027s Eye View of Bohemian Lavender Farm-DJI_20250713134902_0441_D-HDR-2-photos_db_photo-13.png",
        "captureDateTime":  "2025-07-13 13:49:02",
        "locationText":  "Maple City, Michigan, United States",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "DJI Air 3S",
        "lens":  null,
        "filters":  null,
        "iso":  140,
        "shutterSpeed":  0.02,
        "aperture":  1.8,
        "focalLength":  9,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  3,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Bird\u0027s Eye View of Manistee-DJI_20250628172944_0726_D-HDR-photos_db_photo-11.png",
        "captureDateTime":  "2025-06-28 17:29:44",
        "locationText":  "Manistee, Michigan, United States",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "DJI Air 3S",
        "lens":  null,
        "filters":  null,
        "iso":  140,
        "shutterSpeed":  0.02,
        "aperture":  1.8,
        "focalLength":  9,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  4,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Bird\u0027s Eye View of the Neighborhood-DJI_20250622150721_0379_D-HDR-photos_db_photo-10.png",
        "captureDateTime":  "2025-06-22 15:07:21",
        "locationText":  "Beulah, Michigan, United States",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "DJI Air 3S",
        "lens":  null,
        "filters":  null,
        "iso":  140,
        "shutterSpeed":  0.02,
        "aperture":  1.8,
        "focalLength":  9,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  5,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Blood Moon Closeup-P3140252-Enhanced-SR-photos_db_photo-1.png",
        "captureDateTime":  "2025-03-14 02:02:31",
        "locationText":  "Blood Moon Closeup",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "OM Digital Solutions OM-5",
        "lens":  null,
        "filters":  null,
        "iso":  200,
        "shutterSpeed":  4,
        "aperture":  6.3,
        "focalLength":  400,
        "aspectRatio":  "5:4"
    },
    {
        "photoId":  6,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Blood Moon-DJI_20250908205852_0722_D-photos_db_photo-33.png",
        "captureDateTime":  "2025-09-08 20:58:52",
        "locationText":  "Blood Moon",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "DJI Air 3S",
        "lens":  null,
        "filters":  null,
        "iso":  140,
        "shutterSpeed":  0.02,
        "aperture":  1.8,
        "focalLength":  9,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  9,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Bumble Bee Sampling Lavender-P7132118-photos_db_photo-12.png",
        "captureDateTime":  "2025-07-13 12:00:00",
        "locationText":  "Maple City, Michigan, United States",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "OM Digital Solutions OM-5",
        "lens":  null,
        "filters":  null,
        "iso":  200,
        "shutterSpeed":  0.001,
        "aperture":  6.3,
        "focalLength":  400,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  10,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Classic Ford Mustang-P9130783-photos_db_photo-34.png",
        "captureDateTime":  "2025-09-13 12:00:00",
        "locationText":  "Midland, Michigan, United States",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "OM Digital Solutions OM-5",
        "lens":  null,
        "filters":  null,
        "iso":  200,
        "shutterSpeed":  0.001,
        "aperture":  6.3,
        "focalLength":  400,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  11,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Closeup Cardinal In Winter-P3160548-photos_db_photo-2.png",
        "captureDateTime":  "2025-03-16 11:47:54",
        "locationText":  "Beulah, Michigan, United States",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "OM Digital Solutions OM-5",
        "lens":  null,
        "filters":  null,
        "iso":  2500,
        "shutterSpeed":  0.001,
        "aperture":  6.3,
        "focalLength":  400,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  12,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Closeup of Herron at Arcadia Marsh 2-P8300146-photos_db_photo-25.png",
        "captureDateTime":  "2025-08-30 12:00:00",
        "locationText":  "Arcadia, Michigan, United States",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "OM Digital Solutions OM-5",
        "lens":  null,
        "filters":  null,
        "iso":  200,
        "shutterSpeed":  0.001,
        "aperture":  6.3,
        "focalLength":  400,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  13,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Closeup of Herron at Arcadia Marsh-P8300141-photos_db_photo-24.png",
        "captureDateTime":  "2025-08-30 12:00:00",
        "locationText":  "Arcadia, Michigan, United States",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "OM Digital Solutions OM-5",
        "lens":  null,
        "filters":  null,
        "iso":  200,
        "shutterSpeed":  0.001,
        "aperture":  6.3,
        "focalLength":  400,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  14,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Coleus Flowers-P6221910-photos_db_photo-5.png",
        "captureDateTime":  "2025-06-22 12:00:00",
        "locationText":  "Beulah, Michigan, United States",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "OM Digital Solutions OM-5",
        "lens":  null,
        "filters":  null,
        "iso":  200,
        "shutterSpeed":  0.001,
        "aperture":  6.3,
        "focalLength":  400,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  16,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Duck Couple in Winter-P3240589-photos_db_photo-3.png",
        "captureDateTime":  "2025-03-24 12:00:00",
        "locationText":  "Beulah, Michigan, United States",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "OM Digital Solutions OM-5",
        "lens":  null,
        "filters":  null,
        "iso":  200,
        "shutterSpeed":  0.001,
        "aperture":  6.3,
        "focalLength":  400,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  17,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Family of Herrons at Arcadia Marsh-P7202282-photos_db_photo-17.png",
        "captureDateTime":  "2025-07-20 12:00:00",
        "locationText":  "Arcadia, Michigan, United States",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "OM Digital Solutions OM-5",
        "lens":  null,
        "filters":  null,
        "iso":  200,
        "shutterSpeed":  0.001,
        "aperture":  6.3,
        "focalLength":  400,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  18,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Family of Swans on the Lake-P8102727-photos_db_photo-22.png",
        "captureDateTime":  "2025-08-10 12:00:00",
        "locationText":  "Beulah, Michigan, United States",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "OM Digital Solutions OM-5",
        "lens":  null,
        "filters":  null,
        "iso":  200,
        "shutterSpeed":  0.001,
        "aperture":  6.3,
        "focalLength":  400,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  19,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Foggy Morning on the Lake-DJI_20250927081415_0091_D-HDR-photos_db_photo-35.png",
        "captureDateTime":  "2025-09-27 08:14:15",
        "locationText":  "Beulah, Michigan, United States",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "DJI Air 3S",
        "lens":  null,
        "filters":  null,
        "iso":  140,
        "shutterSpeed":  0.02,
        "aperture":  1.8,
        "focalLength":  9,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  22,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Grand Traverse Lighthouse Foghorn Shelter-P9020255-photos_db_photo-31.png",
        "captureDateTime":  "2025-09-02 12:00:00",
        "locationText":  "Northport, Michigan, United States",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "OM Digital Solutions OM-5",
        "lens":  null,
        "filters":  null,
        "iso":  200,
        "shutterSpeed":  0.001,
        "aperture":  6.3,
        "focalLength":  400,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  23,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Holiday Lights on Front Porch-P1021319-photos_db_photo-21.png",
        "captureDateTime":  "2025-09-02 12:00:00",
        "locationText":  "Holiday Lights on Front Porch",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "OM Digital Solutions OM-5",
        "lens":  null,
        "filters":  null,
        "iso":  200,
        "shutterSpeed":  0.001,
        "aperture":  6.3,
        "focalLength":  400,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  24,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\House Mirror Picture-P1021306-photos_db_photo-20.png",
        "captureDateTime":  "2025-08-08 12:00:00",
        "locationText":  "House Mirror Picture",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "OM Digital Solutions OM-5",
        "lens":  null,
        "filters":  null,
        "iso":  200,
        "shutterSpeed":  0.001,
        "aperture":  6.3,
        "focalLength":  400,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  25,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Lighthouse Walk-P9010229-photos_db_photo-30.png",
        "captureDateTime":  "2025-07-29 12:00:00",
        "locationText":  "Lighthouse Walk",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "OM Digital Solutions OM-5",
        "lens":  null,
        "filters":  null,
        "iso":  200,
        "shutterSpeed":  0.001,
        "aperture":  6.3,
        "focalLength":  400,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  26,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Lilly Flowers-P6221902-photos_db_photo-7.png",
        "captureDateTime":  "2025-06-22 12:00:00",
        "locationText":  "Beulah, Michigan, United States",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "OM Digital Solutions OM-5",
        "lens":  null,
        "filters":  null,
        "iso":  200,
        "shutterSpeed":  0.001,
        "aperture":  6.3,
        "focalLength":  400,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  27,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Livesaving Station in Frankfort-DJI_20250830202221_0049_D-HDR-photos_db_photo-27.png",
        "captureDateTime":  "2025-08-30 20:22:21",
        "locationText":  "Frankfort, Michigan, United States",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "DJI Air 3S",
        "lens":  null,
        "filters":  null,
        "iso":  140,
        "shutterSpeed":  0.02,
        "aperture":  1.8,
        "focalLength":  9,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  28,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Monarch Butterfly on Butterfly Milkweed-P8300133-photos_db_photo-26.png",
        "captureDateTime":  "2025-08-30 12:00:00",
        "locationText":  "Arcadia, Michigan, United States",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "OM Digital Solutions OM-5",
        "lens":  null,
        "filters":  null,
        "iso":  200,
        "shutterSpeed":  0.001,
        "aperture":  6.3,
        "focalLength":  400,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  30,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Moth on Butterfly Milkweed-P7202231-photos_db_photo-16.png",
        "captureDateTime":  "2025-07-20 12:00:00",
        "locationText":  "Arcadia, Michigan, United States",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "OM Digital Solutions OM-5",
        "lens":  null,
        "filters":  null,
        "iso":  200,
        "shutterSpeed":  0.001,
        "aperture":  6.3,
        "focalLength":  400,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  32,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Picture of Rocks on Lake Bed on a Calm Day-P9010226-photos_db_photo-29.png",
        "captureDateTime":  "2025-09-01 12:00:00",
        "locationText":  "Cleveland Township, Michigan, United States",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "OM Digital Solutions OM-5",
        "lens":  null,
        "filters":  null,
        "iso":  200,
        "shutterSpeed":  0.001,
        "aperture":  6.3,
        "focalLength":  400,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  35,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Point Betsie Sunny Day-DJI_20250905150029_0444_D-HDR-photos_db_photo-32.png",
        "captureDateTime":  "2025-09-05 15:00:29",
        "locationText":  "Frankfort, Michigan, United States",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "DJI Air 3S",
        "lens":  null,
        "filters":  null,
        "iso":  140,
        "shutterSpeed":  0.02,
        "aperture":  1.8,
        "focalLength":  9,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  37,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Pontoon Boat Ride July 27th, 2025-DJI_20250727114503_0239_D-2-photos_db_photo-19.png",
        "captureDateTime":  "2025-07-27 11:45:03",
        "locationText":  "Beulah, Michigan, United States",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "DJI Air 3S",
        "lens":  null,
        "filters":  null,
        "iso":  140,
        "shutterSpeed":  0.02,
        "aperture":  1.8,
        "focalLength":  9,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  39,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Roses in Bloom 2-P6221899-photos_db_photo-9.png",
        "captureDateTime":  "2025-06-22 12:00:00",
        "locationText":  "Beulah, Michigan, United States",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "OM Digital Solutions OM-5",
        "lens":  null,
        "filters":  null,
        "iso":  200,
        "shutterSpeed":  0.001,
        "aperture":  6.3,
        "focalLength":  400,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  40,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Roses In Bloom-P6221900-photos_db_photo-8.png",
        "captureDateTime":  "2025-06-22 12:00:00",
        "locationText":  "Beulah, Michigan, United States",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "OM Digital Solutions OM-5",
        "lens":  null,
        "filters":  null,
        "iso":  200,
        "shutterSpeed":  0.001,
        "aperture":  6.3,
        "focalLength":  400,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  41,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Sailboat in the July 20th, 2025 Sailing Race-DJI_20250720192045_0752_D-HDR-photos_db_photo-18.png",
        "captureDateTime":  "2025-07-20 19:20:45",
        "locationText":  "Arcadia, Michigan, United States",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "DJI Air 3S",
        "lens":  null,
        "filters":  null,
        "iso":  140,
        "shutterSpeed":  0.02,
        "aperture":  1.8,
        "focalLength":  9,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  42,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Sandhill Crane at Arcadia Marsh-P7202247-photos_db_photo-14.png",
        "captureDateTime":  "2025-07-20 12:00:00",
        "locationText":  "Arcadia, Michigan, United States",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "OM Digital Solutions OM-5",
        "lens":  null,
        "filters":  null,
        "iso":  200,
        "shutterSpeed":  0.001,
        "aperture":  6.3,
        "focalLength":  400,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  43,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Turtle on a Log-P7202239-photos_db_photo-15.png",
        "captureDateTime":  "2025-07-20 12:00:00",
        "locationText":  "Arcadia, Michigan, United States",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "OM Digital Solutions OM-5",
        "lens":  null,
        "filters":  null,
        "iso":  200,
        "shutterSpeed":  0.001,
        "aperture":  6.3,
        "focalLength":  400,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  44,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Two Young Bucks at the Birdfeeder-P8162784-3-photos_db_photo-23.png",
        "captureDateTime":  "2025-08-16 12:00:00",
        "locationText":  "Beulah, Michigan, United States",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "OM Digital Solutions OM-5",
        "lens":  null,
        "filters":  null,
        "iso":  200,
        "shutterSpeed":  0.001,
        "aperture":  6.3,
        "focalLength":  400,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  46,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Wedding at Frankfort Life Saving Station-DJI_20250830205348_0108_D-2-photos_db_photo-28.png",
        "captureDateTime":  "2025-08-30 20:53:48",
        "locationText":  "Frankfort, Michigan, United States",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "DJI Air 3S",
        "lens":  null,
        "filters":  null,
        "iso":  140,
        "shutterSpeed":  0.02,
        "aperture":  1.8,
        "focalLength":  9,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  48,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\Yarrow Flowers-P6221908-photos_db_photo-6.png",
        "captureDateTime":  "2025-06-22 12:00:00",
        "locationText":  "Beulah, Michigan, United States",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "OM Digital Solutions OM-5",
        "lens":  null,
        "filters":  null,
        "iso":  200,
        "shutterSpeed":  0.001,
        "aperture":  6.3,
        "focalLength":  400,
        "aspectRatio":  "4:3"
    },
    {
        "photoId":  49,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Photos Full Resolution Logoless\\\\-DJI_20250619213832_0258_D-photos_db_photo-4.png",
        "captureDateTime":  "2025-06-19 21:38:32",
        "locationText":  "Untitled DJI Photo in Frankfort",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "DJI Air 3S",
        "lens":  null,
        "filters":  null,
        "iso":  140,
        "shutterSpeed":  0.02,
        "aperture":  1.8,
        "focalLength":  9,
        "aspectRatio":  "4:3"
    }
];

const videoRows = [
    {
        "videoId":  1,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Videos Full Resolution Logoless\\\\Bear at the Birdfeeder-2025-06-19-21-46-19-photos_db_video-1.mp4",
        "captureDateTime":  "2025-06-19 21:46:19",
        "durationSeconds":  40,
        "locationText":  "Bear at the Birdfeeder-2025-06-19-21-46-19",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "Unknown Camera",
        "lens":  null,
        "filters":  null,
        "iso":  800,
        "shutterSpeed":  0.017,
        "aperture":  2,
        "focalLength":  26,
        "aspectRatio":  "16:9"
    },
    {
        "videoId":  7,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Videos Full Resolution Logoless\\\\Brendan Playing with Tater at the Sandbar-DJI_20250807180534_0565_D-photos_db_video-10.mp4",
        "captureDateTime":  "2025-08-07 18:05:34",
        "durationSeconds":  27,
        "locationText":  "Brendan Playing with Tater at the Sandbar",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "DJI Air 3S",
        "lens":  null,
        "filters":  null,
        "iso":  140,
        "shutterSpeed":  0.02,
        "aperture":  1.8,
        "focalLength":  9,
        "aspectRatio":  "16:9"
    },
    {
        "videoId":  8,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Videos Full Resolution Logoless\\\\Bricks Classic Car Show Flyover-DJI_20250607161031_0356_D-photos_db_video-6.mp4",
        "captureDateTime":  "2025-06-07 16:10:31",
        "durationSeconds":  57,
        "locationText":  "Bricks Classic Car Show Flyover",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "DJI Air 3S",
        "lens":  null,
        "filters":  null,
        "iso":  140,
        "shutterSpeed":  0.02,
        "aperture":  1.8,
        "focalLength":  9,
        "aspectRatio":  "16:9"
    },
    {
        "videoId":  15,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Videos Full Resolution Logoless\\\\Drone Flyover of Buggy Ride June 15th, 2025-DJI_20250615113152_0079_D-photos_db_video-8.mp4",
        "captureDateTime":  "2025-06-15 11:31:52",
        "durationSeconds":  171,
        "locationText":  "Drone Flyover of Buggy Ride June 15th, 2025",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "DJI Air 3S",
        "lens":  null,
        "filters":  null,
        "iso":  140,
        "shutterSpeed":  0.02,
        "aperture":  1.8,
        "focalLength":  9,
        "aspectRatio":  "16:9"
    },
    {
        "videoId":  20,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Videos Full Resolution Logoless\\\\Frankfort Light in Winter-DJI_0317-photos_db_video-4.mp4",
        "captureDateTime":  "2025-02-01 12:00:00",
        "durationSeconds":  11,
        "locationText":  "Frankfort Light in Winter-DJI 0317",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "DJI Air 3S",
        "lens":  null,
        "filters":  null,
        "iso":  140,
        "shutterSpeed":  0.02,
        "aperture":  1.8,
        "focalLength":  9,
        "aspectRatio":  "16:9"
    },
    {
        "videoId":  21,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Videos Full Resolution Logoless\\\\Frankfort Lighthouse at Sunset-DJI_20250907202054_0562_D-photos_db_video-14.mp4",
        "captureDateTime":  "2025-09-07 20:20:54",
        "durationSeconds":  30,
        "locationText":  "Frankfort Lighthouse at Sunset",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "DJI Air 3S",
        "lens":  null,
        "filters":  null,
        "iso":  140,
        "shutterSpeed":  0.02,
        "aperture":  1.8,
        "focalLength":  9,
        "aspectRatio":  "16:9"
    },
    {
        "videoId":  29,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Videos Full Resolution Logoless\\\\More Drone Buggy Flyover June 15th, 2025-DJI_20250615113533_0080_D-photos_db_video-9.mp4",
        "captureDateTime":  "2025-06-15 11:35:33",
        "durationSeconds":  199,
        "locationText":  "More Drone Buggy Flyover June 15th, 2025",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "DJI Air 3S",
        "lens":  null,
        "filters":  null,
        "iso":  140,
        "shutterSpeed":  0.02,
        "aperture":  1.8,
        "focalLength":  9,
        "aspectRatio":  "16:9"
    },
    {
        "videoId":  31,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Videos Full Resolution Logoless\\\\Pancake Ice at the Mouth of the Betsie-DJI_20250221140336_0110_D-photos_db_video-2.mp4",
        "captureDateTime":  "2025-02-21 14:03:36",
        "durationSeconds":  23,
        "locationText":  "Pancake Ice at the Mouth of the Betsie",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "DJI Air 3S",
        "lens":  null,
        "filters":  null,
        "iso":  140,
        "shutterSpeed":  0.02,
        "aperture":  1.8,
        "focalLength":  9,
        "aspectRatio":  "16:9"
    },
    {
        "videoId":  33,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Videos Full Resolution Logoless\\\\Point Betsie Lighthouse in Winter-DJI_0356-photos_db_video-5.mp4",
        "captureDateTime":  "2025-02-01 12:05:00",
        "durationSeconds":  37,
        "locationText":  "Point Betsie Lighthouse in Winter-DJI 0356",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "DJI Air 3S",
        "lens":  null,
        "filters":  null,
        "iso":  140,
        "shutterSpeed":  0.02,
        "aperture":  1.8,
        "focalLength":  9,
        "aspectRatio":  "16:9"
    },
    {
        "videoId":  34,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Videos Full Resolution Logoless\\\\Point Betsie on a Wavy Day-DJI_20250905092401_0387_D-photos_db_video-11.mp4",
        "captureDateTime":  "2025-09-05 09:24:01",
        "durationSeconds":  22,
        "locationText":  "Point Betsie on a Wavy Day",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "DJI Air 3S",
        "lens":  null,
        "filters":  null,
        "iso":  140,
        "shutterSpeed":  0.02,
        "aperture":  1.8,
        "focalLength":  9,
        "aspectRatio":  "16:9"
    },
    {
        "videoId":  36,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Videos Full Resolution Logoless\\\\Point Betsie Wavy Day-DJI_20250905145209_0417_D-photos_db_video-13.mp4",
        "captureDateTime":  "2025-09-05 14:52:09",
        "durationSeconds":  31,
        "locationText":  "Point Betsie Wavy Day",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "DJI Air 3S",
        "lens":  null,
        "filters":  null,
        "iso":  140,
        "shutterSpeed":  0.02,
        "aperture":  1.8,
        "focalLength":  9,
        "aspectRatio":  "16:9"
    },
    {
        "videoId":  38,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Videos Full Resolution Logoless\\\\Pontoon Boat Ride June 14th, 2025-DJI_20250614154400_0074_D-photos_db_video-7.mp4",
        "captureDateTime":  "2025-06-14 15:44:00",
        "durationSeconds":  43,
        "locationText":  "Pontoon Boat Ride June 14th, 2025",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "DJI Air 3S",
        "lens":  null,
        "filters":  null,
        "iso":  140,
        "shutterSpeed":  0.02,
        "aperture":  1.8,
        "focalLength":  9,
        "aspectRatio":  "16:9"
    },
    {
        "videoId":  45,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Videos Full Resolution Logoless\\\\Wavy Morning on the Elberta Side-DJI_20250905141742_0400_D-photos_db_video-12.mp4",
        "captureDateTime":  "2025-09-05 14:17:42",
        "durationSeconds":  88,
        "locationText":  "Wavy Morning on the Elberta Side",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "DJI Air 3S",
        "lens":  null,
        "filters":  null,
        "iso":  140,
        "shutterSpeed":  0.02,
        "aperture":  1.8,
        "focalLength":  9,
        "aspectRatio":  "16:9"
    },
    {
        "videoId":  47,
        "filePathFullResolutionLogoless":  "C:\\\\Program Files\\\\Ampps\\\\Videos Full Resolution Logoless\\\\Winter Sunset Timelapse in Manistee-dji_fly_20250307_183132_0052_1741396467214_hyperlapse-photos_db_video-3.mp4",
        "captureDateTime":  "2025-03-07 18:31:32",
        "durationSeconds":  5,
        "locationText":  "Manistee, Michigan, United States",
        "latitude":  null,
        "longitude":  null,
        "cameraMakeModel":  "DJI Air 3S",
        "lens":  null,
        "filters":  null,
        "iso":  140,
        "shutterSpeed":  0.02,
        "aperture":  1.8,
        "focalLength":  9,
        "aspectRatio":  "16:9"
    }
];

const mediaTagLinks = [
    {
        "mediaId":  1,
        "tagId":  1
    },
    {
        "mediaId":  2,
        "tagId":  1
    },
    {
        "mediaId":  3,
        "tagId":  1
    },
    {
        "mediaId":  4,
        "tagId":  1
    },
    {
        "mediaId":  5,
        "tagId":  1
    },
    {
        "mediaId":  6,
        "tagId":  1
    },
    {
        "mediaId":  7,
        "tagId":  1
    },
    {
        "mediaId":  8,
        "tagId":  1
    },
    {
        "mediaId":  9,
        "tagId":  1
    },
    {
        "mediaId":  10,
        "tagId":  1
    },
    {
        "mediaId":  11,
        "tagId":  1
    },
    {
        "mediaId":  12,
        "tagId":  1
    },
    {
        "mediaId":  13,
        "tagId":  1
    },
    {
        "mediaId":  14,
        "tagId":  1
    },
    {
        "mediaId":  15,
        "tagId":  1
    },
    {
        "mediaId":  16,
        "tagId":  1
    },
    {
        "mediaId":  17,
        "tagId":  1
    },
    {
        "mediaId":  18,
        "tagId":  1
    },
    {
        "mediaId":  19,
        "tagId":  1
    },
    {
        "mediaId":  20,
        "tagId":  1
    },
    {
        "mediaId":  21,
        "tagId":  1
    },
    {
        "mediaId":  22,
        "tagId":  1
    },
    {
        "mediaId":  23,
        "tagId":  1
    },
    {
        "mediaId":  24,
        "tagId":  1
    },
    {
        "mediaId":  25,
        "tagId":  1
    },
    {
        "mediaId":  26,
        "tagId":  1
    },
    {
        "mediaId":  27,
        "tagId":  1
    },
    {
        "mediaId":  28,
        "tagId":  1
    },
    {
        "mediaId":  29,
        "tagId":  1
    },
    {
        "mediaId":  30,
        "tagId":  1
    },
    {
        "mediaId":  31,
        "tagId":  1
    },
    {
        "mediaId":  32,
        "tagId":  1
    },
    {
        "mediaId":  33,
        "tagId":  1
    },
    {
        "mediaId":  34,
        "tagId":  1
    },
    {
        "mediaId":  35,
        "tagId":  1
    },
    {
        "mediaId":  36,
        "tagId":  1
    },
    {
        "mediaId":  37,
        "tagId":  1
    },
    {
        "mediaId":  38,
        "tagId":  1
    },
    {
        "mediaId":  39,
        "tagId":  1
    },
    {
        "mediaId":  40,
        "tagId":  1
    },
    {
        "mediaId":  41,
        "tagId":  1
    },
    {
        "mediaId":  42,
        "tagId":  1
    },
    {
        "mediaId":  43,
        "tagId":  1
    },
    {
        "mediaId":  44,
        "tagId":  1
    },
    {
        "mediaId":  45,
        "tagId":  1
    },
    {
        "mediaId":  46,
        "tagId":  1
    },
    {
        "mediaId":  47,
        "tagId":  1
    },
    {
        "mediaId":  48,
        "tagId":  1
    },
    {
        "mediaId":  49,
        "tagId":  1
    },
    {
        "mediaId":  2,
        "tagId":  2
    },
    {
        "mediaId":  3,
        "tagId":  2
    },
    {
        "mediaId":  4,
        "tagId":  2
    },
    {
        "mediaId":  6,
        "tagId":  2
    },
    {
        "mediaId":  7,
        "tagId":  2
    },
    {
        "mediaId":  8,
        "tagId":  2
    },
    {
        "mediaId":  15,
        "tagId":  2
    },
    {
        "mediaId":  19,
        "tagId":  2
    },
    {
        "mediaId":  20,
        "tagId":  2
    },
    {
        "mediaId":  21,
        "tagId":  2
    },
    {
        "mediaId":  27,
        "tagId":  2
    },
    {
        "mediaId":  29,
        "tagId":  2
    },
    {
        "mediaId":  31,
        "tagId":  2
    },
    {
        "mediaId":  33,
        "tagId":  2
    },
    {
        "mediaId":  34,
        "tagId":  2
    },
    {
        "mediaId":  35,
        "tagId":  2
    },
    {
        "mediaId":  36,
        "tagId":  2
    },
    {
        "mediaId":  37,
        "tagId":  2
    },
    {
        "mediaId":  38,
        "tagId":  2
    },
    {
        "mediaId":  41,
        "tagId":  2
    },
    {
        "mediaId":  45,
        "tagId":  2
    },
    {
        "mediaId":  46,
        "tagId":  2
    },
    {
        "mediaId":  47,
        "tagId":  2
    },
    {
        "mediaId":  49,
        "tagId":  2
    },
    {
        "mediaId":  2,
        "tagId":  3
    },
    {
        "mediaId":  3,
        "tagId":  3
    },
    {
        "mediaId":  4,
        "tagId":  3
    },
    {
        "mediaId":  6,
        "tagId":  3
    },
    {
        "mediaId":  7,
        "tagId":  3
    },
    {
        "mediaId":  8,
        "tagId":  3
    },
    {
        "mediaId":  15,
        "tagId":  3
    },
    {
        "mediaId":  19,
        "tagId":  3
    },
    {
        "mediaId":  20,
        "tagId":  3
    },
    {
        "mediaId":  21,
        "tagId":  3
    },
    {
        "mediaId":  27,
        "tagId":  3
    },
    {
        "mediaId":  29,
        "tagId":  3
    },
    {
        "mediaId":  31,
        "tagId":  3
    },
    {
        "mediaId":  33,
        "tagId":  3
    },
    {
        "mediaId":  34,
        "tagId":  3
    },
    {
        "mediaId":  35,
        "tagId":  3
    },
    {
        "mediaId":  36,
        "tagId":  3
    },
    {
        "mediaId":  37,
        "tagId":  3
    },
    {
        "mediaId":  38,
        "tagId":  3
    },
    {
        "mediaId":  41,
        "tagId":  3
    },
    {
        "mediaId":  45,
        "tagId":  3
    },
    {
        "mediaId":  46,
        "tagId":  3
    },
    {
        "mediaId":  47,
        "tagId":  3
    },
    {
        "mediaId":  49,
        "tagId":  3
    },
    {
        "mediaId":  1,
        "tagId":  4
    },
    {
        "mediaId":  9,
        "tagId":  4
    },
    {
        "mediaId":  11,
        "tagId":  4
    },
    {
        "mediaId":  12,
        "tagId":  4
    },
    {
        "mediaId":  13,
        "tagId":  4
    },
    {
        "mediaId":  16,
        "tagId":  4
    },
    {
        "mediaId":  17,
        "tagId":  4
    },
    {
        "mediaId":  18,
        "tagId":  4
    },
    {
        "mediaId":  24,
        "tagId":  4
    },
    {
        "mediaId":  25,
        "tagId":  4
    },
    {
        "mediaId":  28,
        "tagId":  4
    },
    {
        "mediaId":  30,
        "tagId":  4
    },
    {
        "mediaId":  42,
        "tagId":  4
    },
    {
        "mediaId":  43,
        "tagId":  4
    },
    {
        "mediaId":  44,
        "tagId":  4
    },
    {
        "mediaId":  9,
        "tagId":  5
    },
    {
        "mediaId":  25,
        "tagId":  5
    },
    {
        "mediaId":  28,
        "tagId":  5
    },
    {
        "mediaId":  30,
        "tagId":  5
    },
    {
        "mediaId":  11,
        "tagId":  6
    },
    {
        "mediaId":  12,
        "tagId":  6
    },
    {
        "mediaId":  13,
        "tagId":  6
    },
    {
        "mediaId":  16,
        "tagId":  6
    },
    {
        "mediaId":  17,
        "tagId":  6
    },
    {
        "mediaId":  18,
        "tagId":  6
    },
    {
        "mediaId":  24,
        "tagId":  6
    },
    {
        "mediaId":  42,
        "tagId":  6
    },
    {
        "mediaId":  43,
        "tagId":  7
    },
    {
        "mediaId":  44,
        "tagId":  8
    },
    {
        "mediaId":  1,
        "tagId":  9
    },
    {
        "mediaId":  7,
        "tagId":  10
    },
    {
        "mediaId":  2,
        "tagId":  11
    },
    {
        "mediaId":  9,
        "tagId":  11
    },
    {
        "mediaId":  14,
        "tagId":  11
    },
    {
        "mediaId":  25,
        "tagId":  11
    },
    {
        "mediaId":  26,
        "tagId":  11
    },
    {
        "mediaId":  28,
        "tagId":  11
    },
    {
        "mediaId":  30,
        "tagId":  11
    },
    {
        "mediaId":  39,
        "tagId":  11
    },
    {
        "mediaId":  40,
        "tagId":  11
    },
    {
        "mediaId":  48,
        "tagId":  11
    },
    {
        "mediaId":  2,
        "tagId":  12
    },
    {
        "mediaId":  9,
        "tagId":  12
    },
    {
        "mediaId":  14,
        "tagId":  12
    },
    {
        "mediaId":  25,
        "tagId":  12
    },
    {
        "mediaId":  26,
        "tagId":  12
    },
    {
        "mediaId":  28,
        "tagId":  12
    },
    {
        "mediaId":  30,
        "tagId":  12
    },
    {
        "mediaId":  39,
        "tagId":  12
    },
    {
        "mediaId":  40,
        "tagId":  12
    },
    {
        "mediaId":  48,
        "tagId":  12
    },
    {
        "mediaId":  2,
        "tagId":  13
    },
    {
        "mediaId":  9,
        "tagId":  13
    },
    {
        "mediaId":  3,
        "tagId":  14
    },
    {
        "mediaId":  7,
        "tagId":  14
    },
    {
        "mediaId":  12,
        "tagId":  14
    },
    {
        "mediaId":  13,
        "tagId":  14
    },
    {
        "mediaId":  16,
        "tagId":  14
    },
    {
        "mediaId":  17,
        "tagId":  14
    },
    {
        "mediaId":  18,
        "tagId":  14
    },
    {
        "mediaId":  19,
        "tagId":  14
    },
    {
        "mediaId":  20,
        "tagId":  14
    },
    {
        "mediaId":  21,
        "tagId":  14
    },
    {
        "mediaId":  22,
        "tagId":  14
    },
    {
        "mediaId":  23,
        "tagId":  14
    },
    {
        "mediaId":  27,
        "tagId":  14
    },
    {
        "mediaId":  31,
        "tagId":  14
    },
    {
        "mediaId":  32,
        "tagId":  14
    },
    {
        "mediaId":  33,
        "tagId":  14
    },
    {
        "mediaId":  34,
        "tagId":  14
    },
    {
        "mediaId":  35,
        "tagId":  14
    },
    {
        "mediaId":  36,
        "tagId":  14
    },
    {
        "mediaId":  37,
        "tagId":  14
    },
    {
        "mediaId":  38,
        "tagId":  14
    },
    {
        "mediaId":  41,
        "tagId":  14
    },
    {
        "mediaId":  42,
        "tagId":  14
    },
    {
        "mediaId":  43,
        "tagId":  14
    },
    {
        "mediaId":  45,
        "tagId":  14
    },
    {
        "mediaId":  46,
        "tagId":  14
    },
    {
        "mediaId":  47,
        "tagId":  14
    },
    {
        "mediaId":  49,
        "tagId":  14
    },
    {
        "mediaId":  12,
        "tagId":  15
    },
    {
        "mediaId":  13,
        "tagId":  15
    },
    {
        "mediaId":  17,
        "tagId":  15
    },
    {
        "mediaId":  42,
        "tagId":  15
    },
    {
        "mediaId":  7,
        "tagId":  16
    },
    {
        "mediaId":  21,
        "tagId":  17
    },
    {
        "mediaId":  47,
        "tagId":  17
    },
    {
        "mediaId":  19,
        "tagId":  18
    },
    {
        "mediaId":  11,
        "tagId":  19
    },
    {
        "mediaId":  16,
        "tagId":  19
    },
    {
        "mediaId":  20,
        "tagId":  19
    },
    {
        "mediaId":  31,
        "tagId":  19
    },
    {
        "mediaId":  33,
        "tagId":  19
    },
    {
        "mediaId":  47,
        "tagId":  19
    },
    {
        "mediaId":  20,
        "tagId":  20
    },
    {
        "mediaId":  31,
        "tagId":  20
    },
    {
        "mediaId":  33,
        "tagId":  20
    },
    {
        "mediaId":  5,
        "tagId":  21
    },
    {
        "mediaId":  6,
        "tagId":  21
    },
    {
        "mediaId":  5,
        "tagId":  22
    },
    {
        "mediaId":  6,
        "tagId":  22
    },
    {
        "mediaId":  5,
        "tagId":  23
    },
    {
        "mediaId":  6,
        "tagId":  23
    },
    {
        "mediaId":  47,
        "tagId":  24
    },
    {
        "mediaId":  20,
        "tagId":  25
    },
    {
        "mediaId":  21,
        "tagId":  25
    },
    {
        "mediaId":  27,
        "tagId":  25
    },
    {
        "mediaId":  41,
        "tagId":  25
    },
    {
        "mediaId":  46,
        "tagId":  25
    },
    {
        "mediaId":  49,
        "tagId":  25
    },
    {
        "mediaId":  3,
        "tagId":  26
    },
    {
        "mediaId":  47,
        "tagId":  26
    },
    {
        "mediaId":  12,
        "tagId":  27
    },
    {
        "mediaId":  13,
        "tagId":  27
    },
    {
        "mediaId":  17,
        "tagId":  27
    },
    {
        "mediaId":  42,
        "tagId":  27
    },
    {
        "mediaId":  43,
        "tagId":  27
    },
    {
        "mediaId":  31,
        "tagId":  28
    },
    {
        "mediaId":  33,
        "tagId":  28
    },
    {
        "mediaId":  34,
        "tagId":  28
    },
    {
        "mediaId":  35,
        "tagId":  28
    },
    {
        "mediaId":  36,
        "tagId":  28
    },
    {
        "mediaId":  41,
        "tagId":  28
    },
    {
        "mediaId":  2,
        "tagId":  29
    },
    {
        "mediaId":  45,
        "tagId":  31
    },
    {
        "mediaId":  4,
        "tagId":  32
    },
    {
        "mediaId":  1,
        "tagId":  33
    },
    {
        "mediaId":  2,
        "tagId":  33
    },
    {
        "mediaId":  3,
        "tagId":  33
    },
    {
        "mediaId":  4,
        "tagId":  33
    },
    {
        "mediaId":  5,
        "tagId":  33
    },
    {
        "mediaId":  6,
        "tagId":  33
    },
    {
        "mediaId":  7,
        "tagId":  33
    },
    {
        "mediaId":  8,
        "tagId":  33
    },
    {
        "mediaId":  9,
        "tagId":  33
    },
    {
        "mediaId":  10,
        "tagId":  33
    },
    {
        "mediaId":  11,
        "tagId":  33
    },
    {
        "mediaId":  12,
        "tagId":  33
    },
    {
        "mediaId":  13,
        "tagId":  33
    },
    {
        "mediaId":  14,
        "tagId":  33
    },
    {
        "mediaId":  15,
        "tagId":  33
    },
    {
        "mediaId":  16,
        "tagId":  33
    },
    {
        "mediaId":  17,
        "tagId":  33
    },
    {
        "mediaId":  18,
        "tagId":  33
    },
    {
        "mediaId":  19,
        "tagId":  33
    },
    {
        "mediaId":  20,
        "tagId":  33
    },
    {
        "mediaId":  21,
        "tagId":  33
    },
    {
        "mediaId":  22,
        "tagId":  33
    },
    {
        "mediaId":  23,
        "tagId":  33
    },
    {
        "mediaId":  24,
        "tagId":  33
    },
    {
        "mediaId":  25,
        "tagId":  33
    },
    {
        "mediaId":  26,
        "tagId":  33
    },
    {
        "mediaId":  27,
        "tagId":  33
    },
    {
        "mediaId":  28,
        "tagId":  33
    },
    {
        "mediaId":  29,
        "tagId":  33
    },
    {
        "mediaId":  30,
        "tagId":  33
    },
    {
        "mediaId":  31,
        "tagId":  33
    },
    {
        "mediaId":  32,
        "tagId":  33
    },
    {
        "mediaId":  33,
        "tagId":  33
    },
    {
        "mediaId":  34,
        "tagId":  33
    },
    {
        "mediaId":  35,
        "tagId":  33
    },
    {
        "mediaId":  36,
        "tagId":  33
    },
    {
        "mediaId":  37,
        "tagId":  33
    },
    {
        "mediaId":  38,
        "tagId":  33
    },
    {
        "mediaId":  39,
        "tagId":  33
    },
    {
        "mediaId":  40,
        "tagId":  33
    },
    {
        "mediaId":  41,
        "tagId":  33
    },
    {
        "mediaId":  42,
        "tagId":  33
    },
    {
        "mediaId":  43,
        "tagId":  33
    },
    {
        "mediaId":  44,
        "tagId":  33
    },
    {
        "mediaId":  45,
        "tagId":  33
    },
    {
        "mediaId":  46,
        "tagId":  33
    },
    {
        "mediaId":  47,
        "tagId":  33
    },
    {
        "mediaId":  48,
        "tagId":  33
    },
    {
        "mediaId":  49,
        "tagId":  33
    },
    {
        "mediaId":  1,
        "tagId":  34
    },
    {
        "mediaId":  2,
        "tagId":  34
    },
    {
        "mediaId":  3,
        "tagId":  34
    },
    {
        "mediaId":  4,
        "tagId":  34
    },
    {
        "mediaId":  5,
        "tagId":  34
    },
    {
        "mediaId":  6,
        "tagId":  34
    },
    {
        "mediaId":  7,
        "tagId":  34
    },
    {
        "mediaId":  8,
        "tagId":  34
    },
    {
        "mediaId":  9,
        "tagId":  34
    },
    {
        "mediaId":  10,
        "tagId":  34
    },
    {
        "mediaId":  11,
        "tagId":  34
    },
    {
        "mediaId":  12,
        "tagId":  34
    },
    {
        "mediaId":  13,
        "tagId":  34
    },
    {
        "mediaId":  14,
        "tagId":  34
    },
    {
        "mediaId":  15,
        "tagId":  34
    },
    {
        "mediaId":  16,
        "tagId":  34
    },
    {
        "mediaId":  17,
        "tagId":  34
    },
    {
        "mediaId":  18,
        "tagId":  34
    },
    {
        "mediaId":  19,
        "tagId":  34
    },
    {
        "mediaId":  20,
        "tagId":  34
    },
    {
        "mediaId":  21,
        "tagId":  34
    },
    {
        "mediaId":  22,
        "tagId":  34
    },
    {
        "mediaId":  23,
        "tagId":  34
    },
    {
        "mediaId":  24,
        "tagId":  34
    },
    {
        "mediaId":  25,
        "tagId":  34
    },
    {
        "mediaId":  26,
        "tagId":  34
    },
    {
        "mediaId":  27,
        "tagId":  34
    },
    {
        "mediaId":  28,
        "tagId":  34
    },
    {
        "mediaId":  29,
        "tagId":  34
    },
    {
        "mediaId":  30,
        "tagId":  34
    },
    {
        "mediaId":  31,
        "tagId":  34
    },
    {
        "mediaId":  32,
        "tagId":  34
    },
    {
        "mediaId":  33,
        "tagId":  34
    },
    {
        "mediaId":  34,
        "tagId":  34
    },
    {
        "mediaId":  35,
        "tagId":  34
    },
    {
        "mediaId":  36,
        "tagId":  34
    },
    {
        "mediaId":  37,
        "tagId":  34
    },
    {
        "mediaId":  38,
        "tagId":  34
    },
    {
        "mediaId":  39,
        "tagId":  34
    },
    {
        "mediaId":  40,
        "tagId":  34
    },
    {
        "mediaId":  41,
        "tagId":  34
    },
    {
        "mediaId":  42,
        "tagId":  34
    },
    {
        "mediaId":  43,
        "tagId":  34
    },
    {
        "mediaId":  44,
        "tagId":  34
    },
    {
        "mediaId":  45,
        "tagId":  34
    },
    {
        "mediaId":  46,
        "tagId":  34
    },
    {
        "mediaId":  47,
        "tagId":  34
    },
    {
        "mediaId":  48,
        "tagId":  34
    },
    {
        "mediaId":  49,
        "tagId":  34
    },
    {
        "mediaId":  3,
        "tagId":  35
    },
    {
        "mediaId":  20,
        "tagId":  35
    },
    {
        "mediaId":  21,
        "tagId":  35
    },
    {
        "mediaId":  22,
        "tagId":  35
    },
    {
        "mediaId":  23,
        "tagId":  35
    },
    {
        "mediaId":  27,
        "tagId":  35
    },
    {
        "mediaId":  31,
        "tagId":  35
    },
    {
        "mediaId":  33,
        "tagId":  35
    },
    {
        "mediaId":  34,
        "tagId":  35
    },
    {
        "mediaId":  35,
        "tagId":  35
    },
    {
        "mediaId":  36,
        "tagId":  35
    },
    {
        "mediaId":  41,
        "tagId":  35
    },
    {
        "mediaId":  45,
        "tagId":  35
    },
    {
        "mediaId":  46,
        "tagId":  35
    },
    {
        "mediaId":  47,
        "tagId":  35
    },
    {
        "mediaId":  49,
        "tagId":  35
    },
    {
        "mediaId":  20,
        "tagId":  36
    },
    {
        "mediaId":  21,
        "tagId":  36
    },
    {
        "mediaId":  22,
        "tagId":  36
    },
    {
        "mediaId":  23,
        "tagId":  36
    },
    {
        "mediaId":  33,
        "tagId":  36
    },
    {
        "mediaId":  34,
        "tagId":  36
    },
    {
        "mediaId":  35,
        "tagId":  36
    },
    {
        "mediaId":  36,
        "tagId":  36
    },
    {
        "mediaId":  37,
        "tagId":  37
    },
    {
        "mediaId":  38,
        "tagId":  37
    },
    {
        "mediaId":  41,
        "tagId":  37
    },
    {
        "mediaId":  15,
        "tagId":  38
    },
    {
        "mediaId":  29,
        "tagId":  38
    },
    {
        "mediaId":  8,
        "tagId":  39
    },
    {
        "mediaId":  10,
        "tagId":  39
    },
    {
        "mediaId":  15,
        "tagId":  39
    },
    {
        "mediaId":  29,
        "tagId":  39
    },
    {
        "mediaId":  8,
        "tagId":  40
    },
    {
        "mediaId":  10,
        "tagId":  40
    },
    {
        "mediaId":  15,
        "tagId":  40
    },
    {
        "mediaId":  29,
        "tagId":  40
    },
    {
        "mediaId":  41,
        "tagId":  40
    },
    {
        "mediaId":  46,
        "tagId":  40
    }
];

const collectionItems = [
    {
        "collectionId":  1,
        "mediaId":  2,
        "position":  1
    },
    {
        "collectionId":  1,
        "mediaId":  3,
        "position":  2
    },
    {
        "collectionId":  1,
        "mediaId":  4,
        "position":  3
    },
    {
        "collectionId":  1,
        "mediaId":  6,
        "position":  4
    },
    {
        "collectionId":  1,
        "mediaId":  7,
        "position":  5
    },
    {
        "collectionId":  1,
        "mediaId":  8,
        "position":  6
    },
    {
        "collectionId":  1,
        "mediaId":  15,
        "position":  7
    },
    {
        "collectionId":  1,
        "mediaId":  19,
        "position":  8
    },
    {
        "collectionId":  1,
        "mediaId":  20,
        "position":  9
    },
    {
        "collectionId":  1,
        "mediaId":  21,
        "position":  10
    },
    {
        "collectionId":  1,
        "mediaId":  27,
        "position":  11
    },
    {
        "collectionId":  1,
        "mediaId":  29,
        "position":  12
    },
    {
        "collectionId":  1,
        "mediaId":  31,
        "position":  13
    },
    {
        "collectionId":  1,
        "mediaId":  33,
        "position":  14
    },
    {
        "collectionId":  1,
        "mediaId":  34,
        "position":  15
    },
    {
        "collectionId":  1,
        "mediaId":  35,
        "position":  16
    },
    {
        "collectionId":  1,
        "mediaId":  36,
        "position":  17
    },
    {
        "collectionId":  1,
        "mediaId":  37,
        "position":  18
    },
    {
        "collectionId":  1,
        "mediaId":  38,
        "position":  19
    },
    {
        "collectionId":  1,
        "mediaId":  41,
        "position":  20
    },
    {
        "collectionId":  1,
        "mediaId":  45,
        "position":  21
    },
    {
        "collectionId":  1,
        "mediaId":  46,
        "position":  22
    },
    {
        "collectionId":  1,
        "mediaId":  47,
        "position":  23
    },
    {
        "collectionId":  1,
        "mediaId":  49,
        "position":  24
    },
    {
        "collectionId":  2,
        "mediaId":  1,
        "position":  1
    },
    {
        "collectionId":  2,
        "mediaId":  9,
        "position":  2
    },
    {
        "collectionId":  2,
        "mediaId":  11,
        "position":  3
    },
    {
        "collectionId":  2,
        "mediaId":  12,
        "position":  4
    },
    {
        "collectionId":  2,
        "mediaId":  13,
        "position":  5
    },
    {
        "collectionId":  2,
        "mediaId":  16,
        "position":  6
    },
    {
        "collectionId":  2,
        "mediaId":  17,
        "position":  7
    },
    {
        "collectionId":  2,
        "mediaId":  18,
        "position":  8
    },
    {
        "collectionId":  2,
        "mediaId":  24,
        "position":  9
    },
    {
        "collectionId":  2,
        "mediaId":  25,
        "position":  10
    },
    {
        "collectionId":  2,
        "mediaId":  28,
        "position":  11
    },
    {
        "collectionId":  2,
        "mediaId":  30,
        "position":  12
    },
    {
        "collectionId":  2,
        "mediaId":  42,
        "position":  13
    },
    {
        "collectionId":  2,
        "mediaId":  43,
        "position":  14
    },
    {
        "collectionId":  2,
        "mediaId":  44,
        "position":  15
    },
    {
        "collectionId":  3,
        "mediaId":  20,
        "position":  1
    },
    {
        "collectionId":  3,
        "mediaId":  21,
        "position":  2
    },
    {
        "collectionId":  3,
        "mediaId":  22,
        "position":  3
    },
    {
        "collectionId":  3,
        "mediaId":  23,
        "position":  4
    },
    {
        "collectionId":  3,
        "mediaId":  33,
        "position":  5
    },
    {
        "collectionId":  3,
        "mediaId":  34,
        "position":  6
    },
    {
        "collectionId":  3,
        "mediaId":  35,
        "position":  7
    },
    {
        "collectionId":  3,
        "mediaId":  36,
        "position":  8
    },
    {
        "collectionId":  4,
        "mediaId":  11,
        "position":  1
    },
    {
        "collectionId":  4,
        "mediaId":  16,
        "position":  2
    },
    {
        "collectionId":  4,
        "mediaId":  20,
        "position":  3
    },
    {
        "collectionId":  4,
        "mediaId":  31,
        "position":  4
    },
    {
        "collectionId":  4,
        "mediaId":  33,
        "position":  5
    },
    {
        "collectionId":  4,
        "mediaId":  47,
        "position":  6
    },
    {
        "collectionId":  5,
        "mediaId":  2,
        "position":  1
    },
    {
        "collectionId":  5,
        "mediaId":  9,
        "position":  2
    },
    {
        "collectionId":  5,
        "mediaId":  14,
        "position":  3
    },
    {
        "collectionId":  5,
        "mediaId":  25,
        "position":  4
    },
    {
        "collectionId":  5,
        "mediaId":  26,
        "position":  5
    },
    {
        "collectionId":  5,
        "mediaId":  28,
        "position":  6
    },
    {
        "collectionId":  5,
        "mediaId":  30,
        "position":  7
    },
    {
        "collectionId":  5,
        "mediaId":  39,
        "position":  8
    },
    {
        "collectionId":  5,
        "mediaId":  40,
        "position":  9
    },
    {
        "collectionId":  5,
        "mediaId":  48,
        "position":  10
    },
    {
        "collectionId":  6,
        "mediaId":  3,
        "position":  1
    },
    {
        "collectionId":  6,
        "mediaId":  7,
        "position":  2
    },
    {
        "collectionId":  6,
        "mediaId":  12,
        "position":  3
    },
    {
        "collectionId":  6,
        "mediaId":  13,
        "position":  4
    },
    {
        "collectionId":  6,
        "mediaId":  16,
        "position":  5
    },
    {
        "collectionId":  6,
        "mediaId":  17,
        "position":  6
    },
    {
        "collectionId":  6,
        "mediaId":  18,
        "position":  7
    },
    {
        "collectionId":  6,
        "mediaId":  19,
        "position":  8
    },
    {
        "collectionId":  6,
        "mediaId":  20,
        "position":  9
    },
    {
        "collectionId":  6,
        "mediaId":  21,
        "position":  10
    },
    {
        "collectionId":  6,
        "mediaId":  22,
        "position":  11
    },
    {
        "collectionId":  6,
        "mediaId":  23,
        "position":  12
    },
    {
        "collectionId":  6,
        "mediaId":  27,
        "position":  13
    },
    {
        "collectionId":  6,
        "mediaId":  31,
        "position":  14
    },
    {
        "collectionId":  6,
        "mediaId":  32,
        "position":  15
    },
    {
        "collectionId":  6,
        "mediaId":  33,
        "position":  16
    },
    {
        "collectionId":  6,
        "mediaId":  34,
        "position":  17
    },
    {
        "collectionId":  6,
        "mediaId":  35,
        "position":  18
    },
    {
        "collectionId":  6,
        "mediaId":  36,
        "position":  19
    },
    {
        "collectionId":  6,
        "mediaId":  37,
        "position":  20
    },
    {
        "collectionId":  6,
        "mediaId":  38,
        "position":  21
    },
    {
        "collectionId":  6,
        "mediaId":  41,
        "position":  22
    },
    {
        "collectionId":  6,
        "mediaId":  42,
        "position":  23
    },
    {
        "collectionId":  6,
        "mediaId":  43,
        "position":  24
    },
    {
        "collectionId":  6,
        "mediaId":  45,
        "position":  25
    },
    {
        "collectionId":  6,
        "mediaId":  46,
        "position":  26
    },
    {
        "collectionId":  6,
        "mediaId":  47,
        "position":  27
    },
    {
        "collectionId":  6,
        "mediaId":  49,
        "position":  28
    }
];

const toDate = (value) => (value ? new Date(value.replace(' ', 'T') + 'Z') : null);
const boolean = (value) => Boolean(value === null ? 0 : Number(value));
const collectionDictionary = new Map(collections.map((collection) => [
  collection.collectionId,
  {
    collectionId: collection.collectionId,
    name: collection.collectionName,
    description: collection.collectionDescription,
    createdDateTime: toDate(collection.createdDateTime),
    isPublished: boolean(collection.isPublished),
    publishedDateTime: toDate(collection.publishedDateTime),
  },
]));
const tagDictionary = new Map(tags.map((tag) => [tag.tagId, tag.tagName]));
const photosById = new Map(photoRows.map((photo) => [photo.photoId, { ...photo }]));
const videosById = new Map(videoRows.map((video) => [video.videoId, { ...video }]));
const tagsByMediaId = mediaTagLinks.reduce((map, link) => {
  if (!map.has(link.mediaId)) {
    map.set(link.mediaId, []);
  }
  map.get(link.mediaId).push(link.tagId);
  return map;
}, new Map());
const collectionsByMediaId = collectionItems.reduce((map, link) => {
  if (!map.has(link.mediaId)) {
    map.set(link.mediaId, []);
  }
  map.get(link.mediaId).push(link);
  return map;
}, new Map());
const mediaDocs = mediaRows.map((item) => {
  const isPhoto = item.mediaType === 'PHOTO';
  const detail = isPhoto ? photosById.get(item.mediaId) : videosById.get(item.mediaId);
  if (!detail) {
    throw new Error('Missing ' + (isPhoto ? 'photo' : 'video') + ' detail for media ' + item.mediaId);
  }
  const tags = (tagsByMediaId.get(item.mediaId) || [])
    .map((tagId) => ({ tagId, name: tagDictionary.get(tagId) }))
    .filter((tag) => tag.name);
  const collectionsForMedia = (collectionsByMediaId.get(item.mediaId) || [])
    .map((entry) => {
      const collection = collectionDictionary.get(entry.collectionId);
      if (!collection) {
        return null;
      }
      return { ...collection, position: entry.position };
    })
    .filter(Boolean)
    .sort((a, b) => a.position - b.position);
  return {
    _id: item.mediaId,
    mediaType: item.mediaType,
    title: item.title,
    description: item.description,
    isDrone: boolean(item.isDrone),
    uploadDateTime: toDate(item.uploadDateTime),
    filePaths: {
      display: item.filePathDisplay,
      fullResolutionLogoless: detail.filePathFullResolutionLogoless,
    },
    capture: {
      dateTime: toDate(detail.captureDateTime),
      durationSeconds: isPhoto ? null : (detail.durationSeconds ?? null),
    },
    location: {
      text: detail.locationText,
      latitude: detail.latitude ?? null,
      longitude: detail.longitude ?? null,
    },
    camera: {
      makeModel: detail.cameraMakeModel,
      lens: detail.lens,
      filters: detail.filters,
      iso: detail.iso,
      shutterSpeed: detail.shutterSpeed,
      aperture: detail.aperture,
      focalLength: detail.focalLength,
    },
    aspectRatio: detail.aspectRatio,
    tags,
    collections: collectionsForMedia,
  };
});
db.media.insertMany(mediaDocs);
printjson({ insertedCount: mediaDocs.length });
