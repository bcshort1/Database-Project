// MongoDB import script for picture_database with a document-oriented design
use('picture_database');

// Drop existing collections if they exist
db.media.drop();
db.collections.drop();
db.tags.drop();

// Insert media documents
db.media.insertMany(
[
  {
    "_id": 1,
    "type": "VIDEO",
    "title": "Bear at the Birdfeeder-2025-06-19-21-46-19",
    "description": "Video of Bear at the Birdfeeder-2025-06-19-21-46-19.",
    "isDrone": false,
    "uploadDateTime": "2025-11-28 17:27:29",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Bear at the Birdfeeder-2025-06-19-21-46-19-photos_db_sized_video-1.mp4",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Videos Full Resolution Logoless\\Bear at the Birdfeeder-2025-06-19-21-46-19-photos_db_video-1.mp4"
    },
    "captureDateTime": "2025-06-19 21:46:19",
    "durationSeconds": 40.0,
    "location": {
      "text": "Bear at the Birdfeeder-2025-06-19-21-46-19",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "Unknown Camera",
      "lens": null,
      "filters": null,
      "iso": 800,
      "shutterSpeed": 0.017,
      "aperture": 2.0,
      "focalLength": 26.0
    },
    "aspectRatio": "16:9",
    "tags": [
      "Bear",
      "Michigan",
      "Nature",
      "United States",
      "Wildlife"
    ],
    "collections": [
      {
        "collectionId": 2,
        "name": "Wildlife & Critters",
        "position": 1
      }
    ]
  },
  {
    "_id": 2,
    "type": "PHOTO",
    "title": "Bird's Eye View of Bohemian Lavender Farm",
    "description": "Bird's Eye picture of Bohemian Lavender Farm.",
    "isDrone": true,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Bird's Eye View of Bohemian Lavender Farm_DJI_20250713134902_0441_D-HDR-2_photos_db_sized_photo_13.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Bird's Eye View of Bohemian Lavender Farm-DJI_20250713134902_0441_D-HDR-2-photos_db_photo-13.png"
    },
    "captureDateTime": "2025-07-13 13:49:02",
    "durationSeconds": null,
    "location": {
      "text": "Bird's Eye View of Bohemian Lavender Farm",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "DJI Air 3S",
      "lens": null,
      "filters": null,
      "iso": 140,
      "shutterSpeed": 0.02,
      "aperture": 1.8,
      "focalLength": 9.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Aerial",
      "Drone",
      "Flowers",
      "Lavender",
      "Maple City",
      "Michigan",
      "Nature",
      "Plants",
      "United States"
    ],
    "collections": [
      {
        "collectionId": 1,
        "name": "Drone Aerials",
        "position": 1
      },
      {
        "collectionId": 5,
        "name": "Flowers & Gardens",
        "position": 1
      }
    ]
  },
  {
    "_id": 3,
    "type": "PHOTO",
    "title": "Bird's Eye View of Manistee",
    "description": "Bird's Eye picture of Manistee.",
    "isDrone": true,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Bird's Eye View of Manistee_DJI_20250628172944_0726_D-HDR_photos_db_sized_photo_11.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Bird's Eye View of Manistee-DJI_20250628172944_0726_D-HDR-photos_db_photo-11.png"
    },
    "captureDateTime": "2025-06-28 17:29:44",
    "durationSeconds": null,
    "location": {
      "text": "Bird's Eye View of Manistee",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "DJI Air 3S",
      "lens": null,
      "filters": null,
      "iso": 140,
      "shutterSpeed": 0.02,
      "aperture": 1.8,
      "focalLength": 9.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Aerial",
      "Drone",
      "Lake Michigan",
      "Manistee",
      "Michigan",
      "Nature",
      "United States",
      "Water"
    ],
    "collections": [
      {
        "collectionId": 6,
        "name": "Lakes, Rivers & Shoreline",
        "position": 1
      },
      {
        "collectionId": 1,
        "name": "Drone Aerials",
        "position": 2
      }
    ]
  },
  {
    "_id": 4,
    "type": "PHOTO",
    "title": "Bird's Eye View of the Neighborhood",
    "description": "Bird's Eye picture of the neighborhood.",
    "isDrone": true,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Bird's Eye View of the Neighborhood_DJI_20250622150721_0379_D-HDR_photos_db_sized_photo_10.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Bird's Eye View of the Neighborhood-DJI_20250622150721_0379_D-HDR-photos_db_photo-10.png"
    },
    "captureDateTime": "2025-06-22 15:07:21",
    "durationSeconds": null,
    "location": {
      "text": "Bird's Eye View of the Neighborhood",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "DJI Air 3S",
      "lens": null,
      "filters": null,
      "iso": 140,
      "shutterSpeed": 0.02,
      "aperture": 1.8,
      "focalLength": 9.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Aerial",
      "Drone",
      "Michigan",
      "Midland",
      "Nature",
      "United States"
    ],
    "collections": [
      {
        "collectionId": 1,
        "name": "Drone Aerials",
        "position": 3
      }
    ]
  },
  {
    "_id": 5,
    "type": "PHOTO",
    "title": "Blood Moon Closeup",
    "description": "Closeup of the Blood Moon that occurred on March 14th, 2025.",
    "isDrone": false,
    "uploadDateTime": "2025-03-14 02:02:31",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Blood Moon Closeup_P3140252-Enhanced-SR_photos_db_sized_photo_1.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Blood Moon Closeup-P3140252-Enhanced-SR-photos_db_photo-1.png"
    },
    "captureDateTime": "2025-03-14 02:02:31",
    "durationSeconds": null,
    "location": {
      "text": "Blood Moon Closeup",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "OM Digital Solutions OM-5",
      "lens": null,
      "filters": null,
      "iso": 200,
      "shutterSpeed": 4.0,
      "aperture": 6.3,
      "focalLength": 400.0
    },
    "aspectRatio": "5:4",
    "tags": [
      "Astro",
      "Michigan",
      "Moon",
      "Nature",
      "Night",
      "United States"
    ],
    "collections": []
  },
  {
    "_id": 6,
    "type": "PHOTO",
    "title": "Blood Moon",
    "description": "Picture of the blood moon on September 8th, 2025.",
    "isDrone": true,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Blood Moon_DJI_20250908205852_0722_D_photos_db_sized_photo_33.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Blood Moon-DJI_20250908205852_0722_D-photos_db_photo-33.png"
    },
    "captureDateTime": "2025-09-08 20:58:52",
    "durationSeconds": null,
    "location": {
      "text": "Blood Moon",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "DJI Air 3S",
      "lens": null,
      "filters": null,
      "iso": 140,
      "shutterSpeed": 0.02,
      "aperture": 1.8,
      "focalLength": 9.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Aerial",
      "Astro",
      "Drone",
      "Michigan",
      "Moon",
      "Nature",
      "Night",
      "United States"
    ],
    "collections": [
      {
        "collectionId": 1,
        "name": "Drone Aerials",
        "position": 4
      }
    ]
  },
  {
    "_id": 7,
    "type": "VIDEO",
    "title": "Brendan Playing with Tater at the Sandbar",
    "description": "Video of Brendan playing with Tater at the sandbar.",
    "isDrone": true,
    "uploadDateTime": "2025-11-28 18:15:20",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Brendan Playing with Tater at the Sandbar-DJI_20250807180534_0565_D-photos_db_sized_video-10.mp4",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Videos Full Resolution Logoless\\Brendan Playing with Tater at the Sandbar-DJI_20250807180534_0565_D-photos_db_video-10.mp4"
    },
    "captureDateTime": "2025-08-07 18:05:34",
    "durationSeconds": 27.0,
    "location": {
      "text": "Brendan Playing with Tater at the Sandbar",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "DJI Air 3S",
      "lens": null,
      "filters": null,
      "iso": 140,
      "shutterSpeed": 0.02,
      "aperture": 1.8,
      "focalLength": 9.0
    },
    "aspectRatio": "16:9",
    "tags": [
      "Aerial",
      "Dog",
      "Drone",
      "Michigan",
      "Nature",
      "Sandbar",
      "United States",
      "Water"
    ],
    "collections": [
      {
        "collectionId": 6,
        "name": "Lakes, Rivers & Shoreline",
        "position": 2
      },
      {
        "collectionId": 1,
        "name": "Drone Aerials",
        "position": 5
      }
    ]
  },
  {
    "_id": 8,
    "type": "VIDEO",
    "title": "Bricks Classic Car Show Flyover",
    "description": "Video of the Bricks Classic Car Show flyover.",
    "isDrone": true,
    "uploadDateTime": "2025-11-28 17:35:09",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Bricks Classic Car Show Flyover-DJI_20250607161031_0356_D-photos_db_sized_video-6.mp4",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Videos Full Resolution Logoless\\Bricks Classic Car Show Flyover-DJI_20250607161031_0356_D-photos_db_video-6.mp4"
    },
    "captureDateTime": "2025-06-07 16:10:31",
    "durationSeconds": 57.0,
    "location": {
      "text": "Bricks Classic Car Show Flyover",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "DJI Air 3S",
      "lens": null,
      "filters": null,
      "iso": 140,
      "shutterSpeed": 0.02,
      "aperture": 1.8,
      "focalLength": 9.0
    },
    "aspectRatio": "16:9",
    "tags": [
      "Aerial",
      "Car",
      "Drone",
      "Event",
      "Michigan",
      "Nature",
      "United States"
    ],
    "collections": [
      {
        "collectionId": 1,
        "name": "Drone Aerials",
        "position": 6
      }
    ]
  },
  {
    "_id": 9,
    "type": "PHOTO",
    "title": "Bumble Bee Sampling Lavender",
    "description": "Picture of a bumble bee on lavender flowers.",
    "isDrone": false,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Bumble Bee Sampling Lavender_P7132118_photos_db_sized_photo_12.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Bumble Bee Sampling Lavender-P7132118-photos_db_photo-12.png"
    },
    "captureDateTime": "2025-07-13 12:00:00",
    "durationSeconds": null,
    "location": {
      "text": "Bumble Bee Sampling Lavender",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "OM Digital Solutions OM-5",
      "lens": null,
      "filters": null,
      "iso": 200,
      "shutterSpeed": 0.001,
      "aperture": 6.3,
      "focalLength": 400.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Flowers",
      "Insect",
      "Lavender",
      "Michigan",
      "Nature",
      "Plants",
      "United States",
      "Wildlife"
    ],
    "collections": [
      {
        "collectionId": 2,
        "name": "Wildlife & Critters",
        "position": 2
      },
      {
        "collectionId": 5,
        "name": "Flowers & Gardens",
        "position": 2
      }
    ]
  },
  {
    "_id": 10,
    "type": "PHOTO",
    "title": "Classic Ford Mustang",
    "description": "Picture of Bill Short's classic Ford Mustang.",
    "isDrone": false,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Classic Ford Mustang_P9130783_photos_db_sized_photo_34.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Classic Ford Mustang-P9130783-photos_db_photo-34.png"
    },
    "captureDateTime": "2025-09-13 12:00:00",
    "durationSeconds": null,
    "location": {
      "text": "Classic Ford Mustang",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "OM Digital Solutions OM-5",
      "lens": null,
      "filters": null,
      "iso": 200,
      "shutterSpeed": 0.001,
      "aperture": 6.3,
      "focalLength": 400.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Car",
      "Event",
      "Michigan",
      "Nature",
      "United States"
    ],
    "collections": []
  },
  {
    "_id": 11,
    "type": "PHOTO",
    "title": "Closeup Cardinal In Winter",
    "description": "Closeup of a male cardinal at the bird feeder in winter.",
    "isDrone": false,
    "uploadDateTime": "2025-03-16 11:47:54",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Closeup Cardinal In Winter_P3160548_photos_db_sized_photo_2.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Closeup Cardinal In Winter-P3160548-photos_db_photo-2.png"
    },
    "captureDateTime": "2025-03-16 11:47:54",
    "durationSeconds": null,
    "location": {
      "text": "Closeup Cardinal In Winter",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "OM Digital Solutions OM-5",
      "lens": null,
      "filters": null,
      "iso": 2500,
      "shutterSpeed": 0.001,
      "aperture": 6.3,
      "focalLength": 400.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Bird",
      "Michigan",
      "Nature",
      "United States",
      "Wildlife",
      "Winter"
    ],
    "collections": [
      {
        "collectionId": 4,
        "name": "Winter & Ice",
        "position": 1
      },
      {
        "collectionId": 2,
        "name": "Wildlife & Critters",
        "position": 3
      }
    ]
  },
  {
    "_id": 12,
    "type": "PHOTO",
    "title": "Closeup of Herron at Arcadia Marsh 2",
    "description": "Another closeup image of a heron at Arcadia Marsh.",
    "isDrone": false,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Closeup of Herron at Arcadia Marsh 2_P8300146_photos_db_sized_photo_25.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Closeup of Herron at Arcadia Marsh 2-P8300146-photos_db_photo-25.png"
    },
    "captureDateTime": "2025-08-30 12:00:00",
    "durationSeconds": null,
    "location": {
      "text": "Closeup of Herron at Arcadia Marsh 2",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "OM Digital Solutions OM-5",
      "lens": null,
      "filters": null,
      "iso": 200,
      "shutterSpeed": 0.001,
      "aperture": 6.3,
      "focalLength": 400.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Arcadia",
      "Bird",
      "Marsh",
      "Michigan",
      "Nature",
      "United States",
      "Water",
      "Wildlife"
    ],
    "collections": [
      {
        "collectionId": 6,
        "name": "Lakes, Rivers & Shoreline",
        "position": 3
      },
      {
        "collectionId": 2,
        "name": "Wildlife & Critters",
        "position": 4
      }
    ]
  },
  {
    "_id": 13,
    "type": "PHOTO",
    "title": "Closeup of Herron at Arcadia Marsh",
    "description": "Closeup image of a heron at Arcadia Marsh.",
    "isDrone": false,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Closeup of Herron at Arcadia Marsh_P8300141_photos_db_sized_photo_24.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Closeup of Herron at Arcadia Marsh-P8300141-photos_db_photo-24.png"
    },
    "captureDateTime": "2025-08-30 12:00:00",
    "durationSeconds": null,
    "location": {
      "text": "Closeup of Herron at Arcadia Marsh",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "OM Digital Solutions OM-5",
      "lens": null,
      "filters": null,
      "iso": 200,
      "shutterSpeed": 0.001,
      "aperture": 6.3,
      "focalLength": 400.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Arcadia",
      "Bird",
      "Marsh",
      "Michigan",
      "Nature",
      "United States",
      "Water",
      "Wildlife"
    ],
    "collections": [
      {
        "collectionId": 6,
        "name": "Lakes, Rivers & Shoreline",
        "position": 4
      },
      {
        "collectionId": 2,
        "name": "Wildlife & Critters",
        "position": 5
      }
    ]
  },
  {
    "_id": 14,
    "type": "PHOTO",
    "title": "Coleus Flowers",
    "description": "Picture of Coleus flowers.",
    "isDrone": false,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Coleus Flowers_P6221910_photos_db_sized_photo_5.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Coleus Flowers-P6221910-photos_db_photo-5.png"
    },
    "captureDateTime": "2025-06-22 12:00:00",
    "durationSeconds": null,
    "location": {
      "text": "Coleus Flowers",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "OM Digital Solutions OM-5",
      "lens": null,
      "filters": null,
      "iso": 200,
      "shutterSpeed": 0.001,
      "aperture": 6.3,
      "focalLength": 400.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Flowers",
      "Michigan",
      "Nature",
      "Plants",
      "United States"
    ],
    "collections": [
      {
        "collectionId": 5,
        "name": "Flowers & Gardens",
        "position": 3
      }
    ]
  },
  {
    "_id": 15,
    "type": "VIDEO",
    "title": "Drone Flyover of Buggy Ride June 15th, 2025",
    "description": "Video of a drone flyover of a buggy ride on June 15th, 2025.",
    "isDrone": true,
    "uploadDateTime": "2025-11-28 17:51:55",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Drone Flyover of Buggy Ride June 15th, 2025-DJI_20250615113152_0079_D-photos_db_sized_video-8.mp4",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Videos Full Resolution Logoless\\Drone Flyover of Buggy Ride June 15th, 2025-DJI_20250615113152_0079_D-photos_db_video-8.mp4"
    },
    "captureDateTime": "2025-06-15 11:31:52",
    "durationSeconds": 171.0,
    "location": {
      "text": "Drone Flyover of Buggy Ride June 15th, 2025",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "DJI Air 3S",
      "lens": null,
      "filters": null,
      "iso": 140,
      "shutterSpeed": 0.02,
      "aperture": 1.8,
      "focalLength": 9.0
    },
    "aspectRatio": "16:9",
    "tags": [
      "Aerial",
      "Buggy",
      "Car",
      "Drone",
      "Event",
      "Michigan",
      "Nature",
      "United States"
    ],
    "collections": [
      {
        "collectionId": 1,
        "name": "Drone Aerials",
        "position": 7
      }
    ]
  },
  {
    "_id": 16,
    "type": "PHOTO",
    "title": "Duck Couple in Winter",
    "description": "Duck mates in wintertime.",
    "isDrone": false,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Duck Couple in Winter_P3240589_photos_db_sized_photo_3.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Duck Couple in Winter-P3240589-photos_db_photo-3.png"
    },
    "captureDateTime": "2025-03-24 12:00:00",
    "durationSeconds": null,
    "location": {
      "text": "Duck Couple in Winter",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "OM Digital Solutions OM-5",
      "lens": null,
      "filters": null,
      "iso": 200,
      "shutterSpeed": 0.001,
      "aperture": 6.3,
      "focalLength": 400.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Bird",
      "Michigan",
      "Nature",
      "United States",
      "Water",
      "Wildlife",
      "Winter"
    ],
    "collections": [
      {
        "collectionId": 4,
        "name": "Winter & Ice",
        "position": 2
      },
      {
        "collectionId": 6,
        "name": "Lakes, Rivers & Shoreline",
        "position": 5
      },
      {
        "collectionId": 2,
        "name": "Wildlife & Critters",
        "position": 6
      }
    ]
  },
  {
    "_id": 17,
    "type": "PHOTO",
    "title": "Family of Herrons at Arcadia Marsh",
    "description": "Picture of a family of herons at Arcadia Marsh.",
    "isDrone": false,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Family of Herrons at Arcadia Marsh_P7202282_photos_db_sized_photo_17.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Family of Herrons at Arcadia Marsh-P7202282-photos_db_photo-17.png"
    },
    "captureDateTime": "2025-07-20 12:00:00",
    "durationSeconds": null,
    "location": {
      "text": "Family of Herrons at Arcadia Marsh",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "OM Digital Solutions OM-5",
      "lens": null,
      "filters": null,
      "iso": 200,
      "shutterSpeed": 0.001,
      "aperture": 6.3,
      "focalLength": 400.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Arcadia",
      "Bird",
      "Marsh",
      "Michigan",
      "Nature",
      "United States",
      "Water",
      "Wildlife"
    ],
    "collections": [
      {
        "collectionId": 6,
        "name": "Lakes, Rivers & Shoreline",
        "position": 6
      },
      {
        "collectionId": 2,
        "name": "Wildlife & Critters",
        "position": 7
      }
    ]
  },
  {
    "_id": 18,
    "type": "PHOTO",
    "title": "Family of Swans on the Lake",
    "description": "Picture of a family of swans on the lake.",
    "isDrone": false,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Family of Swans on the Lake_P8102727_photos_db_sized_photo_22.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Family of Swans on the Lake-P8102727-photos_db_photo-22.png"
    },
    "captureDateTime": "2025-08-10 12:00:00",
    "durationSeconds": null,
    "location": {
      "text": "Family of Swans on the Lake",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "OM Digital Solutions OM-5",
      "lens": null,
      "filters": null,
      "iso": 200,
      "shutterSpeed": 0.001,
      "aperture": 6.3,
      "focalLength": 400.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Bird",
      "Michigan",
      "Nature",
      "United States",
      "Water",
      "Wildlife"
    ],
    "collections": [
      {
        "collectionId": 6,
        "name": "Lakes, Rivers & Shoreline",
        "position": 7
      },
      {
        "collectionId": 2,
        "name": "Wildlife & Critters",
        "position": 8
      }
    ]
  },
  {
    "_id": 19,
    "type": "PHOTO",
    "title": "Foggy Morning on the Lake",
    "description": "Picture of a foggy morning on the lake.",
    "isDrone": true,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Foggy Morning on the Lake_DJI_20250927081415_0091_D-HDR_photos_db_sized_photo_35.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Foggy Morning on the Lake-DJI_20250927081415_0091_D-HDR-photos_db_photo-35.png"
    },
    "captureDateTime": "2025-09-27 08:14:15",
    "durationSeconds": null,
    "location": {
      "text": "Foggy Morning on the Lake",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "DJI Air 3S",
      "lens": null,
      "filters": null,
      "iso": 140,
      "shutterSpeed": 0.02,
      "aperture": 1.8,
      "focalLength": 9.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Aerial",
      "Drone",
      "Fog",
      "Michigan",
      "Nature",
      "United States",
      "Water"
    ],
    "collections": [
      {
        "collectionId": 1,
        "name": "Drone Aerials",
        "position": 8
      },
      {
        "collectionId": 6,
        "name": "Lakes, Rivers & Shoreline",
        "position": 8
      }
    ]
  },
  {
    "_id": 20,
    "type": "VIDEO",
    "title": "Frankfort Light in Winter-DJI 0317",
    "description": "Video of Frankfort Light in winter.",
    "isDrone": true,
    "uploadDateTime": "2025-11-28 17:29:14",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Frankfort Light in Winter-DJI_0317-photos_db_sized_video-4.mp4",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Videos Full Resolution Logoless\\Frankfort Light in Winter-DJI_0317-photos_db_video-4.mp4"
    },
    "captureDateTime": "2025-02-01 12:00:00",
    "durationSeconds": 11.0,
    "location": {
      "text": "Frankfort Light in Winter-DJI 0317",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "DJI Air 3S",
      "lens": null,
      "filters": null,
      "iso": 140,
      "shutterSpeed": 0.02,
      "aperture": 1.8,
      "focalLength": 9.0
    },
    "aspectRatio": "16:9",
    "tags": [
      "Aerial",
      "Drone",
      "Frankfort",
      "Ice",
      "Lake Michigan",
      "Lighthouse",
      "Michigan",
      "Nature",
      "United States",
      "Water",
      "Winter"
    ],
    "collections": [
      {
        "collectionId": 3,
        "name": "Lighthouses & Lake Michigan",
        "position": 1
      },
      {
        "collectionId": 4,
        "name": "Winter & Ice",
        "position": 3
      },
      {
        "collectionId": 1,
        "name": "Drone Aerials",
        "position": 9
      },
      {
        "collectionId": 6,
        "name": "Lakes, Rivers & Shoreline",
        "position": 9
      }
    ]
  },
  {
    "_id": 21,
    "type": "VIDEO",
    "title": "Frankfort Lighthouse at Sunset",
    "description": "Video of the Frankfort lighthouse at sunset.",
    "isDrone": true,
    "uploadDateTime": "2025-11-28 18:32:39",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Frankfort Lighthouse at Sunset-DJI_20250907202054_0562_D-photos_db_sized_video-14.mp4",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Videos Full Resolution Logoless\\Frankfort Lighthouse at Sunset-DJI_20250907202054_0562_D-photos_db_video-14.mp4"
    },
    "captureDateTime": "2025-09-07 20:20:54",
    "durationSeconds": 30.0,
    "location": {
      "text": "Frankfort Lighthouse at Sunset",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "DJI Air 3S",
      "lens": null,
      "filters": null,
      "iso": 140,
      "shutterSpeed": 0.02,
      "aperture": 1.8,
      "focalLength": 9.0
    },
    "aspectRatio": "16:9",
    "tags": [
      "Aerial",
      "Drone",
      "Frankfort",
      "Lake Michigan",
      "Lighthouse",
      "Michigan",
      "Nature",
      "Sunset",
      "United States",
      "Water"
    ],
    "collections": [
      {
        "collectionId": 3,
        "name": "Lighthouses & Lake Michigan",
        "position": 2
      },
      {
        "collectionId": 1,
        "name": "Drone Aerials",
        "position": 10
      },
      {
        "collectionId": 6,
        "name": "Lakes, Rivers & Shoreline",
        "position": 10
      }
    ]
  },
  {
    "_id": 22,
    "type": "PHOTO",
    "title": "Grand Traverse Lighthouse Foghorn Shelter",
    "description": "Picture of the Grand Traverse Lighthouse foghorn shelter.",
    "isDrone": false,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Grand Traverse Lighthouse Foghorn Shelter_P9020255_photos_db_sized_photo_31.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Grand Traverse Lighthouse Foghorn Shelter-P9020255-photos_db_photo-31.png"
    },
    "captureDateTime": "2025-09-02 12:00:00",
    "durationSeconds": null,
    "location": {
      "text": "Grand Traverse Lighthouse Foghorn Shelter",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "OM Digital Solutions OM-5",
      "lens": null,
      "filters": null,
      "iso": 200,
      "shutterSpeed": 0.001,
      "aperture": 6.3,
      "focalLength": 400.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Lake Michigan",
      "Lighthouse",
      "Michigan",
      "Nature",
      "United States",
      "Water"
    ],
    "collections": [
      {
        "collectionId": 3,
        "name": "Lighthouses & Lake Michigan",
        "position": 3
      },
      {
        "collectionId": 6,
        "name": "Lakes, Rivers & Shoreline",
        "position": 11
      }
    ]
  },
  {
    "_id": 23,
    "type": "PHOTO",
    "title": "Grand Traverse Lighthouse",
    "description": "Picture of the Grand Traverse Lighthouse.",
    "isDrone": false,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Grand Traverse Lighthouse_P9020265_photos_db_sized_photo_30.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Holiday Lights on Front Porch-P1021319-photos_db_photo-21.png"
    },
    "captureDateTime": "2025-09-02 12:00:00",
    "durationSeconds": null,
    "location": {
      "text": "Holiday Lights on Front Porch",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "OM Digital Solutions OM-5",
      "lens": null,
      "filters": null,
      "iso": 200,
      "shutterSpeed": 0.001,
      "aperture": 6.3,
      "focalLength": 400.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Lake Michigan",
      "Lighthouse",
      "Michigan",
      "Nature",
      "United States",
      "Water"
    ],
    "collections": [
      {
        "collectionId": 3,
        "name": "Lighthouses & Lake Michigan",
        "position": 4
      },
      {
        "collectionId": 6,
        "name": "Lakes, Rivers & Shoreline",
        "position": 12
      }
    ]
  },
  {
    "_id": 24,
    "type": "PHOTO",
    "title": "Hummingbird at the Feeder",
    "description": "Picture of a hummingbird at the feeder.",
    "isDrone": false,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Hummingbird at the Feeder_P8082625_photos_db_sized_photo_21.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\House Mirror Picture-P1021306-photos_db_photo-20.png"
    },
    "captureDateTime": "2025-08-08 12:00:00",
    "durationSeconds": null,
    "location": {
      "text": "House Mirror Picture",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "OM Digital Solutions OM-5",
      "lens": null,
      "filters": null,
      "iso": 200,
      "shutterSpeed": 0.001,
      "aperture": 6.3,
      "focalLength": 400.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Bird",
      "Michigan",
      "Nature",
      "United States",
      "Wildlife"
    ],
    "collections": [
      {
        "collectionId": 2,
        "name": "Wildlife & Critters",
        "position": 9
      }
    ]
  },
  {
    "_id": 25,
    "type": "PHOTO",
    "title": "Hummingbird Moth on Butterfly Bush Flowers",
    "description": "Picture of a hummingbird moth on butterfly bush flowers.",
    "isDrone": false,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Hummingbird Moth on Butterfly Bush Flowers_P7292475_photos_db_sized_photo_20.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Lighthouse Walk-P9010229-photos_db_photo-30.png"
    },
    "captureDateTime": "2025-07-29 12:00:00",
    "durationSeconds": null,
    "location": {
      "text": "Lighthouse Walk",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "OM Digital Solutions OM-5",
      "lens": null,
      "filters": null,
      "iso": 200,
      "shutterSpeed": 0.001,
      "aperture": 6.3,
      "focalLength": 400.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Flowers",
      "Insect",
      "Michigan",
      "Nature",
      "Plants",
      "United States",
      "Wildlife"
    ],
    "collections": [
      {
        "collectionId": 5,
        "name": "Flowers & Gardens",
        "position": 4
      },
      {
        "collectionId": 2,
        "name": "Wildlife & Critters",
        "position": 10
      }
    ]
  },
  {
    "_id": 26,
    "type": "PHOTO",
    "title": "Lilly Flowers",
    "description": "Picture of lily flowers.",
    "isDrone": false,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Lilly Flowers_P6221902_photos_db_sized_photo_7.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Lilly Flowers-P6221902-photos_db_photo-7.png"
    },
    "captureDateTime": "2025-06-22 12:00:00",
    "durationSeconds": null,
    "location": {
      "text": "Lilly Flowers",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "OM Digital Solutions OM-5",
      "lens": null,
      "filters": null,
      "iso": 200,
      "shutterSpeed": 0.001,
      "aperture": 6.3,
      "focalLength": 400.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Flowers",
      "Michigan",
      "Nature",
      "Plants",
      "United States"
    ],
    "collections": [
      {
        "collectionId": 5,
        "name": "Flowers & Gardens",
        "position": 5
      }
    ]
  },
  {
    "_id": 27,
    "type": "PHOTO",
    "title": "Livesaving Station in Frankfort",
    "description": "Picture of the lifesaving station in Frankfort.",
    "isDrone": true,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Livesaving Station in Frankfort_DJI_20250830202221_0049_D-HDR_photos_db_sized_photo_27.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Livesaving Station in Frankfort-DJI_20250830202221_0049_D-HDR-photos_db_photo-27.png"
    },
    "captureDateTime": "2025-08-30 20:22:21",
    "durationSeconds": null,
    "location": {
      "text": "Livesaving Station in Frankfort",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "DJI Air 3S",
      "lens": null,
      "filters": null,
      "iso": 140,
      "shutterSpeed": 0.02,
      "aperture": 1.8,
      "focalLength": 9.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Aerial",
      "Drone",
      "Frankfort",
      "Lake Michigan",
      "Michigan",
      "Nature",
      "United States",
      "Water"
    ],
    "collections": [
      {
        "collectionId": 1,
        "name": "Drone Aerials",
        "position": 11
      },
      {
        "collectionId": 6,
        "name": "Lakes, Rivers & Shoreline",
        "position": 13
      }
    ]
  },
  {
    "_id": 28,
    "type": "PHOTO",
    "title": "Monarch Butterfly on Butterfly Milkweed",
    "description": "Picture of a monarch butterfly perched on butterfly milkweed.",
    "isDrone": false,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Monarch Butterfly on Butterfly Milkweed_P8300133_photos_db_sized_photo_26.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Monarch Butterfly on Butterfly Milkweed-P8300133-photos_db_photo-26.png"
    },
    "captureDateTime": "2025-08-30 12:00:00",
    "durationSeconds": null,
    "location": {
      "text": "Monarch Butterfly on Butterfly Milkweed",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "OM Digital Solutions OM-5",
      "lens": null,
      "filters": null,
      "iso": 200,
      "shutterSpeed": 0.001,
      "aperture": 6.3,
      "focalLength": 400.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Flowers",
      "Insect",
      "Michigan",
      "Nature",
      "Plants",
      "United States",
      "Wildlife"
    ],
    "collections": [
      {
        "collectionId": 5,
        "name": "Flowers & Gardens",
        "position": 6
      },
      {
        "collectionId": 2,
        "name": "Wildlife & Critters",
        "position": 11
      }
    ]
  },
  {
    "_id": 29,
    "type": "VIDEO",
    "title": "More Drone Buggy Flyover June 15th, 2025",
    "description": "Video of a second drone flyover of the buggy ride on June 15th, 2025.",
    "isDrone": true,
    "uploadDateTime": "2025-11-28 18:09:31",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\More Drone Buggy Flyover June 15th, 2025-DJI_20250615113533_0080_D-photos_db_sized_video-9.mp4",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Videos Full Resolution Logoless\\More Drone Buggy Flyover June 15th, 2025-DJI_20250615113533_0080_D-photos_db_video-9.mp4"
    },
    "captureDateTime": "2025-06-15 11:35:33",
    "durationSeconds": 199.0,
    "location": {
      "text": "More Drone Buggy Flyover June 15th, 2025",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "DJI Air 3S",
      "lens": null,
      "filters": null,
      "iso": 140,
      "shutterSpeed": 0.02,
      "aperture": 1.8,
      "focalLength": 9.0
    },
    "aspectRatio": "16:9",
    "tags": [
      "Aerial",
      "Buggy",
      "Car",
      "Drone",
      "Event",
      "Michigan",
      "Nature",
      "United States"
    ],
    "collections": [
      {
        "collectionId": 1,
        "name": "Drone Aerials",
        "position": 12
      }
    ]
  },
  {
    "_id": 30,
    "type": "PHOTO",
    "title": "Moth on Butterfly Milkweed",
    "description": "Picture of a moth on butterfly milkweed.",
    "isDrone": false,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Moth on Butterfly Milkweed_P7202231_photos_db_sized_photo_16.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Moth on Butterfly Milkweed-P7202231-photos_db_photo-16.png"
    },
    "captureDateTime": "2025-07-20 12:00:00",
    "durationSeconds": null,
    "location": {
      "text": "Moth on Butterfly Milkweed",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "OM Digital Solutions OM-5",
      "lens": null,
      "filters": null,
      "iso": 200,
      "shutterSpeed": 0.001,
      "aperture": 6.3,
      "focalLength": 400.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Flowers",
      "Insect",
      "Michigan",
      "Nature",
      "Plants",
      "United States",
      "Wildlife"
    ],
    "collections": [
      {
        "collectionId": 5,
        "name": "Flowers & Gardens",
        "position": 7
      },
      {
        "collectionId": 2,
        "name": "Wildlife & Critters",
        "position": 12
      }
    ]
  },
  {
    "_id": 31,
    "type": "VIDEO",
    "title": "Pancake Ice at the Mouth of the Betsie",
    "description": "Video of pancake ice at the mouth of the Betsie River.",
    "isDrone": true,
    "uploadDateTime": "2025-11-28 17:28:41",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Pancake Ice at the Mouth of the Betsie-DJI_20250221140336_0110_D-photos_db_sized_video-2.mp4",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Videos Full Resolution Logoless\\Pancake Ice at the Mouth of the Betsie-DJI_20250221140336_0110_D-photos_db_video-2.mp4"
    },
    "captureDateTime": "2025-02-21 14:03:36",
    "durationSeconds": 23.0,
    "location": {
      "text": "Pancake Ice at the Mouth of the Betsie",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "DJI Air 3S",
      "lens": null,
      "filters": null,
      "iso": 140,
      "shutterSpeed": 0.02,
      "aperture": 1.8,
      "focalLength": 9.0
    },
    "aspectRatio": "16:9",
    "tags": [
      "Aerial",
      "Betsie",
      "Drone",
      "Ice",
      "Lake Michigan",
      "Michigan",
      "Nature",
      "United States",
      "Water",
      "Winter"
    ],
    "collections": [
      {
        "collectionId": 4,
        "name": "Winter & Ice",
        "position": 4
      },
      {
        "collectionId": 1,
        "name": "Drone Aerials",
        "position": 13
      },
      {
        "collectionId": 6,
        "name": "Lakes, Rivers & Shoreline",
        "position": 14
      }
    ]
  },
  {
    "_id": 32,
    "type": "PHOTO",
    "title": "Picture of Rocks on Lake Bed on a Calm Day",
    "description": "Picture of rocks on the lakebed on a calm day.",
    "isDrone": false,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Picture of Rocks on Lake Bed on a Calm Day_P9010226_photos_db_sized_photo_29.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Picture of Rocks on Lake Bed on a Calm Day-P9010226-photos_db_photo-29.png"
    },
    "captureDateTime": "2025-09-01 12:00:00",
    "durationSeconds": null,
    "location": {
      "text": "Picture of Rocks on Lake Bed on a Calm Day",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "OM Digital Solutions OM-5",
      "lens": null,
      "filters": null,
      "iso": 200,
      "shutterSpeed": 0.001,
      "aperture": 6.3,
      "focalLength": 400.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Michigan",
      "Nature",
      "United States",
      "Water"
    ],
    "collections": [
      {
        "collectionId": 6,
        "name": "Lakes, Rivers & Shoreline",
        "position": 15
      }
    ]
  },
  {
    "_id": 33,
    "type": "VIDEO",
    "title": "Point Betsie Lighthouse in Winter-DJI 0356",
    "description": "Video of Point Betsie Lighthouse in winter.",
    "isDrone": true,
    "uploadDateTime": "2025-11-28 17:33:19",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Point Betsie Lighthouse in Winter-DJI_0356-photos_db_sized_video-5.mp4",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Videos Full Resolution Logoless\\Point Betsie Lighthouse in Winter-DJI_0356-photos_db_video-5.mp4"
    },
    "captureDateTime": "2025-02-01 12:05:00",
    "durationSeconds": 37.0,
    "location": {
      "text": "Point Betsie Lighthouse in Winter-DJI 0356",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "DJI Air 3S",
      "lens": null,
      "filters": null,
      "iso": 140,
      "shutterSpeed": 0.02,
      "aperture": 1.8,
      "focalLength": 9.0
    },
    "aspectRatio": "16:9",
    "tags": [
      "Aerial",
      "Betsie",
      "Drone",
      "Ice",
      "Lake Michigan",
      "Lighthouse",
      "Michigan",
      "Nature",
      "United States",
      "Water",
      "Winter"
    ],
    "collections": [
      {
        "collectionId": 3,
        "name": "Lighthouses & Lake Michigan",
        "position": 5
      },
      {
        "collectionId": 4,
        "name": "Winter & Ice",
        "position": 5
      },
      {
        "collectionId": 1,
        "name": "Drone Aerials",
        "position": 14
      },
      {
        "collectionId": 6,
        "name": "Lakes, Rivers & Shoreline",
        "position": 16
      }
    ]
  },
  {
    "_id": 34,
    "type": "VIDEO",
    "title": "Point Betsie on a Wavy Day",
    "description": "Video of Point Betsie on a wavy day.",
    "isDrone": true,
    "uploadDateTime": "2025-11-28 18:19:16",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Point Betsie on a Wavy Day-DJI_20250905092401_0387_D-photos_db_sized_video-11.mp4",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Videos Full Resolution Logoless\\Point Betsie on a Wavy Day-DJI_20250905092401_0387_D-photos_db_video-11.mp4"
    },
    "captureDateTime": "2025-09-05 09:24:01",
    "durationSeconds": 22.0,
    "location": {
      "text": "Point Betsie on a Wavy Day",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "DJI Air 3S",
      "lens": null,
      "filters": null,
      "iso": 140,
      "shutterSpeed": 0.02,
      "aperture": 1.8,
      "focalLength": 9.0
    },
    "aspectRatio": "16:9",
    "tags": [
      "Aerial",
      "Betsie",
      "Drone",
      "Lake Michigan",
      "Lighthouse",
      "Michigan",
      "Nature",
      "United States",
      "Water"
    ],
    "collections": [
      {
        "collectionId": 3,
        "name": "Lighthouses & Lake Michigan",
        "position": 6
      },
      {
        "collectionId": 1,
        "name": "Drone Aerials",
        "position": 15
      },
      {
        "collectionId": 6,
        "name": "Lakes, Rivers & Shoreline",
        "position": 17
      }
    ]
  },
  {
    "_id": 35,
    "type": "PHOTO",
    "title": "Point Betsie Sunny Day",
    "description": "Picture of Point Betsie on a sunny day.",
    "isDrone": true,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Point Betsie Sunny Day_DJI_20250905150029_0444_D-HDR_photos_db_sized_photo_32.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Point Betsie Sunny Day-DJI_20250905150029_0444_D-HDR-photos_db_photo-32.png"
    },
    "captureDateTime": "2025-09-05 15:00:29",
    "durationSeconds": null,
    "location": {
      "text": "Point Betsie Sunny Day",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "DJI Air 3S",
      "lens": null,
      "filters": null,
      "iso": 140,
      "shutterSpeed": 0.02,
      "aperture": 1.8,
      "focalLength": 9.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Aerial",
      "Betsie",
      "Drone",
      "Lake Michigan",
      "Lighthouse",
      "Michigan",
      "Nature",
      "United States",
      "Water"
    ],
    "collections": [
      {
        "collectionId": 3,
        "name": "Lighthouses & Lake Michigan",
        "position": 7
      },
      {
        "collectionId": 1,
        "name": "Drone Aerials",
        "position": 16
      },
      {
        "collectionId": 6,
        "name": "Lakes, Rivers & Shoreline",
        "position": 18
      }
    ]
  },
  {
    "_id": 36,
    "type": "VIDEO",
    "title": "Point Betsie Wavy Day",
    "description": "Video of Point Betsie during a wavy day.",
    "isDrone": true,
    "uploadDateTime": "2025-11-28 18:27:54",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Point Betsie Wavy Day-DJI_20250905145209_0417_D-photos_db_sized_video-13.mp4",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Videos Full Resolution Logoless\\Point Betsie Wavy Day-DJI_20250905145209_0417_D-photos_db_video-13.mp4"
    },
    "captureDateTime": "2025-09-05 14:52:09",
    "durationSeconds": 31.0,
    "location": {
      "text": "Point Betsie Wavy Day",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "DJI Air 3S",
      "lens": null,
      "filters": null,
      "iso": 140,
      "shutterSpeed": 0.02,
      "aperture": 1.8,
      "focalLength": 9.0
    },
    "aspectRatio": "16:9",
    "tags": [
      "Aerial",
      "Betsie",
      "Drone",
      "Lake Michigan",
      "Lighthouse",
      "Michigan",
      "Nature",
      "United States",
      "Water"
    ],
    "collections": [
      {
        "collectionId": 3,
        "name": "Lighthouses & Lake Michigan",
        "position": 8
      },
      {
        "collectionId": 1,
        "name": "Drone Aerials",
        "position": 17
      },
      {
        "collectionId": 6,
        "name": "Lakes, Rivers & Shoreline",
        "position": 19
      }
    ]
  },
  {
    "_id": 37,
    "type": "PHOTO",
    "title": "Pontoon Boat Ride July 27th, 2025",
    "description": "Picture from a pontoon boat ride on July 27th, 2025.",
    "isDrone": true,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Pontoon Boat Ride July 27th, 2025_DJI_20250727114503_0239_D-2_photos_db_sized_photo_19.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Pontoon Boat Ride July 27th, 2025-DJI_20250727114503_0239_D-2-photos_db_photo-19.png"
    },
    "captureDateTime": "2025-07-27 11:45:03",
    "durationSeconds": null,
    "location": {
      "text": "Pontoon Boat Ride July 27th, 2025",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "DJI Air 3S",
      "lens": null,
      "filters": null,
      "iso": 140,
      "shutterSpeed": 0.02,
      "aperture": 1.8,
      "focalLength": 9.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Aerial",
      "Boat",
      "Drone",
      "Michigan",
      "Nature",
      "United States",
      "Water"
    ],
    "collections": [
      {
        "collectionId": 1,
        "name": "Drone Aerials",
        "position": 18
      },
      {
        "collectionId": 6,
        "name": "Lakes, Rivers & Shoreline",
        "position": 20
      }
    ]
  },
  {
    "_id": 38,
    "type": "VIDEO",
    "title": "Pontoon Boat Ride June 14th, 2025",
    "description": "Video of a pontoon boat ride on June 14th, 2025.",
    "isDrone": true,
    "uploadDateTime": "2025-11-28 17:36:55",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Pontoon Boat Ride June 14th, 2025-DJI_20250614154400_0074_D-photos_db_sized_video-7.mp4",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Videos Full Resolution Logoless\\Pontoon Boat Ride June 14th, 2025-DJI_20250614154400_0074_D-photos_db_video-7.mp4"
    },
    "captureDateTime": "2025-06-14 15:44:00",
    "durationSeconds": 43.0,
    "location": {
      "text": "Pontoon Boat Ride June 14th, 2025",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "DJI Air 3S",
      "lens": null,
      "filters": null,
      "iso": 140,
      "shutterSpeed": 0.02,
      "aperture": 1.8,
      "focalLength": 9.0
    },
    "aspectRatio": "16:9",
    "tags": [
      "Aerial",
      "Boat",
      "Drone",
      "Michigan",
      "Nature",
      "United States",
      "Water"
    ],
    "collections": [
      {
        "collectionId": 1,
        "name": "Drone Aerials",
        "position": 19
      },
      {
        "collectionId": 6,
        "name": "Lakes, Rivers & Shoreline",
        "position": 21
      }
    ]
  },
  {
    "_id": 39,
    "type": "PHOTO",
    "title": "Roses in Bloom 2",
    "description": "Additional picture of roses in bloom.",
    "isDrone": false,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Roses in Bloom 2_P6221899_photos_db_sized_photo_9.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Roses in Bloom 2-P6221899-photos_db_photo-9.png"
    },
    "captureDateTime": "2025-06-22 12:00:00",
    "durationSeconds": null,
    "location": {
      "text": "Roses in Bloom 2",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "OM Digital Solutions OM-5",
      "lens": null,
      "filters": null,
      "iso": 200,
      "shutterSpeed": 0.001,
      "aperture": 6.3,
      "focalLength": 400.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Flowers",
      "Michigan",
      "Nature",
      "Plants",
      "United States"
    ],
    "collections": [
      {
        "collectionId": 5,
        "name": "Flowers & Gardens",
        "position": 8
      }
    ]
  },
  {
    "_id": 40,
    "type": "PHOTO",
    "title": "Roses In Bloom",
    "description": "Picture of roses in bloom.",
    "isDrone": false,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Roses In Bloom_P6221900_photos_db_sized_photo_8.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Roses In Bloom-P6221900-photos_db_photo-8.png"
    },
    "captureDateTime": "2025-06-22 12:00:00",
    "durationSeconds": null,
    "location": {
      "text": "Roses In Bloom",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "OM Digital Solutions OM-5",
      "lens": null,
      "filters": null,
      "iso": 200,
      "shutterSpeed": 0.001,
      "aperture": 6.3,
      "focalLength": 400.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Flowers",
      "Michigan",
      "Nature",
      "Plants",
      "United States"
    ],
    "collections": [
      {
        "collectionId": 5,
        "name": "Flowers & Gardens",
        "position": 9
      }
    ]
  },
  {
    "_id": 41,
    "type": "PHOTO",
    "title": "Sailboat in the July 20th, 2025 Sailing Race",
    "description": "Picture of a sailboat in the July 20th, 2025 sailing race.",
    "isDrone": true,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Sailboat in the July 20th, 2025 Sailing Race_DJI_20250720192045_0752_D-HDR_photos_db_sized_photo_18.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Sailboat in the July 20th, 2025 Sailing Race-DJI_20250720192045_0752_D-HDR-photos_db_photo-18.png"
    },
    "captureDateTime": "2025-07-20 19:20:45",
    "durationSeconds": null,
    "location": {
      "text": "Sailboat in the July 20th, 2025 Sailing Race",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "DJI Air 3S",
      "lens": null,
      "filters": null,
      "iso": 140,
      "shutterSpeed": 0.02,
      "aperture": 1.8,
      "focalLength": 9.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Aerial",
      "Betsie",
      "Boat",
      "Drone",
      "Event",
      "Frankfort",
      "Lake Michigan",
      "Michigan",
      "Nature",
      "United States",
      "Water"
    ],
    "collections": [
      {
        "collectionId": 1,
        "name": "Drone Aerials",
        "position": 20
      },
      {
        "collectionId": 6,
        "name": "Lakes, Rivers & Shoreline",
        "position": 22
      }
    ]
  },
  {
    "_id": 42,
    "type": "PHOTO",
    "title": "Sandhill Crane at Arcadia Marsh",
    "description": "Picture of a sandhill crane at Arcadia Marsh.",
    "isDrone": false,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Sandhill Crane at Arcadia Marsh_P7202247_photos_db_sized_photo_14.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Sandhill Crane at Arcadia Marsh-P7202247-photos_db_photo-14.png"
    },
    "captureDateTime": "2025-07-20 12:00:00",
    "durationSeconds": null,
    "location": {
      "text": "Sandhill Crane at Arcadia Marsh",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "OM Digital Solutions OM-5",
      "lens": null,
      "filters": null,
      "iso": 200,
      "shutterSpeed": 0.001,
      "aperture": 6.3,
      "focalLength": 400.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Arcadia",
      "Bird",
      "Marsh",
      "Michigan",
      "Nature",
      "United States",
      "Water",
      "Wildlife"
    ],
    "collections": [
      {
        "collectionId": 2,
        "name": "Wildlife & Critters",
        "position": 13
      },
      {
        "collectionId": 6,
        "name": "Lakes, Rivers & Shoreline",
        "position": 23
      }
    ]
  },
  {
    "_id": 43,
    "type": "PHOTO",
    "title": "Turtle on a Log",
    "description": "Picture of turtles on a log at Arcadia Marsh.",
    "isDrone": false,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Turtle on a Log_P7202239_photos_db_sized_photo_15.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Turtle on a Log-P7202239-photos_db_photo-15.png"
    },
    "captureDateTime": "2025-07-20 12:00:00",
    "durationSeconds": null,
    "location": {
      "text": "Turtle on a Log",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "OM Digital Solutions OM-5",
      "lens": null,
      "filters": null,
      "iso": 200,
      "shutterSpeed": 0.001,
      "aperture": 6.3,
      "focalLength": 400.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Arcadia",
      "Michigan",
      "Nature",
      "Reptile",
      "United States",
      "Water",
      "Wildlife"
    ],
    "collections": [
      {
        "collectionId": 2,
        "name": "Wildlife & Critters",
        "position": 14
      },
      {
        "collectionId": 6,
        "name": "Lakes, Rivers & Shoreline",
        "position": 24
      }
    ]
  },
  {
    "_id": 44,
    "type": "PHOTO",
    "title": "Two Young Bucks at the Birdfeeder",
    "description": "Picture of two young bucks at the birdfeeder.",
    "isDrone": false,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Two Young Bucks at the Birdfeeder_P8162784-3_photos_db_sized_photo_23.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Two Young Bucks at the Birdfeeder-P8162784-3-photos_db_photo-23.png"
    },
    "captureDateTime": "2025-08-16 12:00:00",
    "durationSeconds": null,
    "location": {
      "text": "Two Young Bucks at the Birdfeeder",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "OM Digital Solutions OM-5",
      "lens": null,
      "filters": null,
      "iso": 200,
      "shutterSpeed": 0.001,
      "aperture": 6.3,
      "focalLength": 400.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Deer",
      "Michigan",
      "Nature",
      "United States",
      "Wildlife"
    ],
    "collections": [
      {
        "collectionId": 2,
        "name": "Wildlife & Critters",
        "position": 15
      }
    ]
  },
  {
    "_id": 45,
    "type": "VIDEO",
    "title": "Wavy Morning on the Elberta Side",
    "description": "Video of wavy morning conditions on the Elberta side.",
    "isDrone": true,
    "uploadDateTime": "2025-11-28 18:25:22",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Wavy Morning on the Elberta Side-DJI_20250905141742_0400_D-photos_db_sized_video-12.mp4",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Videos Full Resolution Logoless\\Wavy Morning on the Elberta Side-DJI_20250905141742_0400_D-photos_db_video-12.mp4"
    },
    "captureDateTime": "2025-09-05 14:17:42",
    "durationSeconds": 88.0,
    "location": {
      "text": "Wavy Morning on the Elberta Side",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "DJI Air 3S",
      "lens": null,
      "filters": null,
      "iso": 140,
      "shutterSpeed": 0.02,
      "aperture": 1.8,
      "focalLength": 9.0
    },
    "aspectRatio": "16:9",
    "tags": [
      "Aerial",
      "Drone",
      "Elberta",
      "Lake Michigan",
      "Michigan",
      "Nature",
      "United States",
      "Water"
    ],
    "collections": [
      {
        "collectionId": 1,
        "name": "Drone Aerials",
        "position": 21
      },
      {
        "collectionId": 6,
        "name": "Lakes, Rivers & Shoreline",
        "position": 25
      }
    ]
  },
  {
    "_id": 46,
    "type": "PHOTO",
    "title": "Wedding at Frankfort Life Saving Station",
    "description": "Picture of a wedding hosted at the Frankfort Life Saving Station.",
    "isDrone": true,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Wedding at Frankfort Life Saving Station_DJI_20250830205348_0108_D-2_photos_db_sized_photo_28.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Wedding at Frankfort Life Saving Station-DJI_20250830205348_0108_D-2-photos_db_photo-28.png"
    },
    "captureDateTime": "2025-08-30 20:53:48",
    "durationSeconds": null,
    "location": {
      "text": "Wedding at Frankfort Life Saving Station",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "DJI Air 3S",
      "lens": null,
      "filters": null,
      "iso": 140,
      "shutterSpeed": 0.02,
      "aperture": 1.8,
      "focalLength": 9.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Aerial",
      "Drone",
      "Event",
      "Frankfort",
      "Lake Michigan",
      "Michigan",
      "Nature",
      "United States",
      "Water"
    ],
    "collections": [
      {
        "collectionId": 1,
        "name": "Drone Aerials",
        "position": 22
      },
      {
        "collectionId": 6,
        "name": "Lakes, Rivers & Shoreline",
        "position": 26
      }
    ]
  },
  {
    "_id": 47,
    "type": "VIDEO",
    "title": "Winter Sunset Timelapse in Manistee",
    "description": "Video of a winter sunset timelapse in Manistee.",
    "isDrone": true,
    "uploadDateTime": "2025-11-28 17:29:10",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Winter Sunset Timelapse in Manistee-dji_fly_20250307_183132_0052_1741396467214_hyperlapse-photos_db_sized_video-3.mp4",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Videos Full Resolution Logoless\\Winter Sunset Timelapse in Manistee-dji_fly_20250307_183132_0052_1741396467214_hyperlapse-photos_db_video-3.mp4"
    },
    "captureDateTime": "2025-03-07 18:31:32",
    "durationSeconds": 5.0,
    "location": {
      "text": "Winter Sunset Timelapse in Manistee",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "DJI Air 3S",
      "lens": null,
      "filters": null,
      "iso": 140,
      "shutterSpeed": 0.02,
      "aperture": 1.8,
      "focalLength": 9.0
    },
    "aspectRatio": "16:9",
    "tags": [
      "Aerial",
      "Drone",
      "Lake Michigan",
      "Manistee",
      "Michigan",
      "Nature",
      "Sunset",
      "Timelapse",
      "United States",
      "Water",
      "Winter"
    ],
    "collections": [
      {
        "collectionId": 4,
        "name": "Winter & Ice",
        "position": 6
      },
      {
        "collectionId": 1,
        "name": "Drone Aerials",
        "position": 23
      },
      {
        "collectionId": 6,
        "name": "Lakes, Rivers & Shoreline",
        "position": 27
      }
    ]
  },
  {
    "_id": 48,
    "type": "PHOTO",
    "title": "Yarrow Flowers",
    "description": "Picture of yarrow flowers.",
    "isDrone": false,
    "uploadDateTime": "2025-11-28 12:00:00",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\Yarrow Flowers_P6221908_photos_db_sized_photo_6.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\Yarrow Flowers-P6221908-photos_db_photo-6.png"
    },
    "captureDateTime": "2025-06-22 12:00:00",
    "durationSeconds": null,
    "location": {
      "text": "Yarrow Flowers",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "OM Digital Solutions OM-5",
      "lens": null,
      "filters": null,
      "iso": 200,
      "shutterSpeed": 0.001,
      "aperture": 6.3,
      "focalLength": 400.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Flowers",
      "Michigan",
      "Nature",
      "Plants",
      "United States"
    ],
    "collections": [
      {
        "collectionId": 5,
        "name": "Flowers & Gardens",
        "position": 10
      }
    ]
  },
  {
    "_id": 49,
    "type": "PHOTO",
    "title": "Untitled DJI Photo in Frankfort",
    "description": "Photo of a DJI aerial scene in Frankfort.",
    "isDrone": true,
    "uploadDateTime": "2025-06-19 21:38:32",
    "paths": {
      "display": "C:\\Program Files\\Ampps\\Media Display\\_DJI_20250619213832_0258_D_photos_db_sized_photo_4.png",
      "fullResolutionLogoless": "C:\\Program Files\\Ampps\\Photos Full Resolution Logoless\\-DJI_20250619213832_0258_D-photos_db_photo-4.png"
    },
    "captureDateTime": "2025-06-19 21:38:32",
    "durationSeconds": null,
    "location": {
      "text": "Untitled DJI Photo in Frankfort",
      "latitude": null,
      "longitude": null
    },
    "camera": {
      "makeModel": "DJI Air 3S",
      "lens": null,
      "filters": null,
      "iso": 140,
      "shutterSpeed": 0.02,
      "aperture": 1.8,
      "focalLength": 9.0
    },
    "aspectRatio": "4:3",
    "tags": [
      "Aerial",
      "Drone",
      "Frankfort",
      "Lake Michigan",
      "Michigan",
      "Nature",
      "United States",
      "Water"
    ],
    "collections": [
      {
        "collectionId": 1,
        "name": "Drone Aerials",
        "position": 24
      },
      {
        "collectionId": 6,
        "name": "Lakes, Rivers & Shoreline",
        "position": 28
      }
    ]
  }
]
);

// Insert collection documents
db.collections.insertMany(
[
  {
    "_id": 1,
    "name": "Drone Aerials",
    "description": "All aerial photos and videos shot with the DJI Air 3S.",
    "createdDateTime": "2025-11-28 12:00:00",
    "isPublished": true,
    "publishedDateTime": "2025-11-28 13:00:00",
    "items": [
      {
        "mediaId": 2,
        "title": "Bird's Eye View of Bohemian Lavender Farm",
        "type": "PHOTO",
        "position": 1
      },
      {
        "mediaId": 3,
        "title": "Bird's Eye View of Manistee",
        "type": "PHOTO",
        "position": 2
      },
      {
        "mediaId": 4,
        "title": "Bird's Eye View of the Neighborhood",
        "type": "PHOTO",
        "position": 3
      },
      {
        "mediaId": 6,
        "title": "Blood Moon",
        "type": "PHOTO",
        "position": 4
      },
      {
        "mediaId": 7,
        "title": "Brendan Playing with Tater at the Sandbar",
        "type": "VIDEO",
        "position": 5
      },
      {
        "mediaId": 8,
        "title": "Bricks Classic Car Show Flyover",
        "type": "VIDEO",
        "position": 6
      },
      {
        "mediaId": 15,
        "title": "Drone Flyover of Buggy Ride June 15th, 2025",
        "type": "VIDEO",
        "position": 7
      },
      {
        "mediaId": 19,
        "title": "Foggy Morning on the Lake",
        "type": "PHOTO",
        "position": 8
      },
      {
        "mediaId": 20,
        "title": "Frankfort Light in Winter-DJI 0317",
        "type": "VIDEO",
        "position": 9
      },
      {
        "mediaId": 21,
        "title": "Frankfort Lighthouse at Sunset",
        "type": "VIDEO",
        "position": 10
      },
      {
        "mediaId": 27,
        "title": "Livesaving Station in Frankfort",
        "type": "PHOTO",
        "position": 11
      },
      {
        "mediaId": 29,
        "title": "More Drone Buggy Flyover June 15th, 2025",
        "type": "VIDEO",
        "position": 12
      },
      {
        "mediaId": 31,
        "title": "Pancake Ice at the Mouth of the Betsie",
        "type": "VIDEO",
        "position": 13
      },
      {
        "mediaId": 33,
        "title": "Point Betsie Lighthouse in Winter-DJI 0356",
        "type": "VIDEO",
        "position": 14
      },
      {
        "mediaId": 34,
        "title": "Point Betsie on a Wavy Day",
        "type": "VIDEO",
        "position": 15
      },
      {
        "mediaId": 35,
        "title": "Point Betsie Sunny Day",
        "type": "PHOTO",
        "position": 16
      },
      {
        "mediaId": 36,
        "title": "Point Betsie Wavy Day",
        "type": "VIDEO",
        "position": 17
      },
      {
        "mediaId": 37,
        "title": "Pontoon Boat Ride July 27th, 2025",
        "type": "PHOTO",
        "position": 18
      },
      {
        "mediaId": 38,
        "title": "Pontoon Boat Ride June 14th, 2025",
        "type": "VIDEO",
        "position": 19
      },
      {
        "mediaId": 41,
        "title": "Sailboat in the July 20th, 2025 Sailing Race",
        "type": "PHOTO",
        "position": 20
      },
      {
        "mediaId": 45,
        "title": "Wavy Morning on the Elberta Side",
        "type": "VIDEO",
        "position": 21
      },
      {
        "mediaId": 46,
        "title": "Wedding at Frankfort Life Saving Station",
        "type": "PHOTO",
        "position": 22
      },
      {
        "mediaId": 47,
        "title": "Winter Sunset Timelapse in Manistee",
        "type": "VIDEO",
        "position": 23
      },
      {
        "mediaId": 49,
        "title": "Untitled DJI Photo in Frankfort",
        "type": "PHOTO",
        "position": 24
      }
    ]
  },
  {
    "_id": 2,
    "name": "Wildlife & Critters",
    "description": "Birds, insects, deer, bear, and other wildlife around the lakes and marshes.",
    "createdDateTime": "2025-11-28 12:00:00",
    "isPublished": true,
    "publishedDateTime": "2025-11-28 13:00:00",
    "items": [
      {
        "mediaId": 1,
        "title": "Bear at the Birdfeeder-2025-06-19-21-46-19",
        "type": "VIDEO",
        "position": 1
      },
      {
        "mediaId": 9,
        "title": "Bumble Bee Sampling Lavender",
        "type": "PHOTO",
        "position": 2
      },
      {
        "mediaId": 11,
        "title": "Closeup Cardinal In Winter",
        "type": "PHOTO",
        "position": 3
      },
      {
        "mediaId": 12,
        "title": "Closeup of Herron at Arcadia Marsh 2",
        "type": "PHOTO",
        "position": 4
      },
      {
        "mediaId": 13,
        "title": "Closeup of Herron at Arcadia Marsh",
        "type": "PHOTO",
        "position": 5
      },
      {
        "mediaId": 16,
        "title": "Duck Couple in Winter",
        "type": "PHOTO",
        "position": 6
      },
      {
        "mediaId": 17,
        "title": "Family of Herrons at Arcadia Marsh",
        "type": "PHOTO",
        "position": 7
      },
      {
        "mediaId": 18,
        "title": "Family of Swans on the Lake",
        "type": "PHOTO",
        "position": 8
      },
      {
        "mediaId": 24,
        "title": "Hummingbird at the Feeder",
        "type": "PHOTO",
        "position": 9
      },
      {
        "mediaId": 25,
        "title": "Hummingbird Moth on Butterfly Bush Flowers",
        "type": "PHOTO",
        "position": 10
      },
      {
        "mediaId": 28,
        "title": "Monarch Butterfly on Butterfly Milkweed",
        "type": "PHOTO",
        "position": 11
      },
      {
        "mediaId": 30,
        "title": "Moth on Butterfly Milkweed",
        "type": "PHOTO",
        "position": 12
      },
      {
        "mediaId": 42,
        "title": "Sandhill Crane at Arcadia Marsh",
        "type": "PHOTO",
        "position": 13
      },
      {
        "mediaId": 43,
        "title": "Turtle on a Log",
        "type": "PHOTO",
        "position": 14
      },
      {
        "mediaId": 44,
        "title": "Two Young Bucks at the Birdfeeder",
        "type": "PHOTO",
        "position": 15
      }
    ]
  },
  {
    "_id": 3,
    "name": "Lighthouses & Lake Michigan",
    "description": "Frankfort Light, Point Betsie, Grand Traverse, and other lighthouse scenes on Lake Michigan.",
    "createdDateTime": "2025-11-28 12:00:00",
    "isPublished": true,
    "publishedDateTime": "2025-11-28 13:00:00",
    "items": [
      {
        "mediaId": 20,
        "title": "Frankfort Light in Winter-DJI 0317",
        "type": "VIDEO",
        "position": 1
      },
      {
        "mediaId": 21,
        "title": "Frankfort Lighthouse at Sunset",
        "type": "VIDEO",
        "position": 2
      },
      {
        "mediaId": 22,
        "title": "Grand Traverse Lighthouse Foghorn Shelter",
        "type": "PHOTO",
        "position": 3
      },
      {
        "mediaId": 23,
        "title": "Grand Traverse Lighthouse",
        "type": "PHOTO",
        "position": 4
      },
      {
        "mediaId": 33,
        "title": "Point Betsie Lighthouse in Winter-DJI 0356",
        "type": "VIDEO",
        "position": 5
      },
      {
        "mediaId": 34,
        "title": "Point Betsie on a Wavy Day",
        "type": "VIDEO",
        "position": 6
      },
      {
        "mediaId": 35,
        "title": "Point Betsie Sunny Day",
        "type": "PHOTO",
        "position": 7
      },
      {
        "mediaId": 36,
        "title": "Point Betsie Wavy Day",
        "type": "VIDEO",
        "position": 8
      }
    ]
  },
  {
    "_id": 4,
    "name": "Winter & Ice",
    "description": "Snowy shorelines, pancake ice, and winter scenes on the lakes.",
    "createdDateTime": "2025-11-28 12:00:00",
    "isPublished": true,
    "publishedDateTime": "2025-11-28 13:00:00",
    "items": [
      {
        "mediaId": 11,
        "title": "Closeup Cardinal In Winter",
        "type": "PHOTO",
        "position": 1
      },
      {
        "mediaId": 16,
        "title": "Duck Couple in Winter",
        "type": "PHOTO",
        "position": 2
      },
      {
        "mediaId": 20,
        "title": "Frankfort Light in Winter-DJI 0317",
        "type": "VIDEO",
        "position": 3
      },
      {
        "mediaId": 31,
        "title": "Pancake Ice at the Mouth of the Betsie",
        "type": "VIDEO",
        "position": 4
      },
      {
        "mediaId": 33,
        "title": "Point Betsie Lighthouse in Winter-DJI 0356",
        "type": "VIDEO",
        "position": 5
      },
      {
        "mediaId": 47,
        "title": "Winter Sunset Timelapse in Manistee",
        "type": "VIDEO",
        "position": 6
      }
    ]
  },
  {
    "_id": 5,
    "name": "Flowers & Gardens",
    "description": "Lavender fields, garden flowers, and detailed closeups.",
    "createdDateTime": "2025-11-28 12:00:00",
    "isPublished": true,
    "publishedDateTime": "2025-11-28 13:00:00",
    "items": [
      {
        "mediaId": 2,
        "title": "Bird's Eye View of Bohemian Lavender Farm",
        "type": "PHOTO",
        "position": 1
      },
      {
        "mediaId": 9,
        "title": "Bumble Bee Sampling Lavender",
        "type": "PHOTO",
        "position": 2
      },
      {
        "mediaId": 14,
        "title": "Coleus Flowers",
        "type": "PHOTO",
        "position": 3
      },
      {
        "mediaId": 25,
        "title": "Hummingbird Moth on Butterfly Bush Flowers",
        "type": "PHOTO",
        "position": 4
      },
      {
        "mediaId": 26,
        "title": "Lilly Flowers",
        "type": "PHOTO",
        "position": 5
      },
      {
        "mediaId": 28,
        "title": "Monarch Butterfly on Butterfly Milkweed",
        "type": "PHOTO",
        "position": 6
      },
      {
        "mediaId": 30,
        "title": "Moth on Butterfly Milkweed",
        "type": "PHOTO",
        "position": 7
      },
      {
        "mediaId": 39,
        "title": "Roses in Bloom 2",
        "type": "PHOTO",
        "position": 8
      },
      {
        "mediaId": 40,
        "title": "Roses In Bloom",
        "type": "PHOTO",
        "position": 9
      },
      {
        "mediaId": 48,
        "title": "Yarrow Flowers",
        "type": "PHOTO",
        "position": 10
      }
    ]
  },
  {
    "_id": 6,
    "name": "Lakes, Rivers & Shoreline",
    "description": "Lakes, rivers, bays, marshes, and shoreline scenes around Michigan.",
    "createdDateTime": "2025-11-28 12:00:00",
    "isPublished": true,
    "publishedDateTime": "2025-11-28 13:00:00",
    "items": [
      {
        "mediaId": 3,
        "title": "Bird's Eye View of Manistee",
        "type": "PHOTO",
        "position": 1
      },
      {
        "mediaId": 7,
        "title": "Brendan Playing with Tater at the Sandbar",
        "type": "VIDEO",
        "position": 2
      },
      {
        "mediaId": 12,
        "title": "Closeup of Herron at Arcadia Marsh 2",
        "type": "PHOTO",
        "position": 3
      },
      {
        "mediaId": 13,
        "title": "Closeup of Herron at Arcadia Marsh",
        "type": "PHOTO",
        "position": 4
      },
      {
        "mediaId": 16,
        "title": "Duck Couple in Winter",
        "type": "PHOTO",
        "position": 5
      },
      {
        "mediaId": 17,
        "title": "Family of Herrons at Arcadia Marsh",
        "type": "PHOTO",
        "position": 6
      },
      {
        "mediaId": 18,
        "title": "Family of Swans on the Lake",
        "type": "PHOTO",
        "position": 7
      },
      {
        "mediaId": 19,
        "title": "Foggy Morning on the Lake",
        "type": "PHOTO",
        "position": 8
      },
      {
        "mediaId": 20,
        "title": "Frankfort Light in Winter-DJI 0317",
        "type": "VIDEO",
        "position": 9
      },
      {
        "mediaId": 21,
        "title": "Frankfort Lighthouse at Sunset",
        "type": "VIDEO",
        "position": 10
      },
      {
        "mediaId": 22,
        "title": "Grand Traverse Lighthouse Foghorn Shelter",
        "type": "PHOTO",
        "position": 11
      },
      {
        "mediaId": 23,
        "title": "Grand Traverse Lighthouse",
        "type": "PHOTO",
        "position": 12
      },
      {
        "mediaId": 27,
        "title": "Livesaving Station in Frankfort",
        "type": "PHOTO",
        "position": 13
      },
      {
        "mediaId": 31,
        "title": "Pancake Ice at the Mouth of the Betsie",
        "type": "VIDEO",
        "position": 14
      },
      {
        "mediaId": 32,
        "title": "Picture of Rocks on Lake Bed on a Calm Day",
        "type": "PHOTO",
        "position": 15
      },
      {
        "mediaId": 33,
        "title": "Point Betsie Lighthouse in Winter-DJI 0356",
        "type": "VIDEO",
        "position": 16
      },
      {
        "mediaId": 34,
        "title": "Point Betsie on a Wavy Day",
        "type": "VIDEO",
        "position": 17
      },
      {
        "mediaId": 35,
        "title": "Point Betsie Sunny Day",
        "type": "PHOTO",
        "position": 18
      },
      {
        "mediaId": 36,
        "title": "Point Betsie Wavy Day",
        "type": "VIDEO",
        "position": 19
      },
      {
        "mediaId": 37,
        "title": "Pontoon Boat Ride July 27th, 2025",
        "type": "PHOTO",
        "position": 20
      },
      {
        "mediaId": 38,
        "title": "Pontoon Boat Ride June 14th, 2025",
        "type": "VIDEO",
        "position": 21
      },
      {
        "mediaId": 41,
        "title": "Sailboat in the July 20th, 2025 Sailing Race",
        "type": "PHOTO",
        "position": 22
      },
      {
        "mediaId": 42,
        "title": "Sandhill Crane at Arcadia Marsh",
        "type": "PHOTO",
        "position": 23
      },
      {
        "mediaId": 43,
        "title": "Turtle on a Log",
        "type": "PHOTO",
        "position": 24
      },
      {
        "mediaId": 45,
        "title": "Wavy Morning on the Elberta Side",
        "type": "VIDEO",
        "position": 25
      },
      {
        "mediaId": 46,
        "title": "Wedding at Frankfort Life Saving Station",
        "type": "PHOTO",
        "position": 26
      },
      {
        "mediaId": 47,
        "title": "Winter Sunset Timelapse in Manistee",
        "type": "VIDEO",
        "position": 27
      },
      {
        "mediaId": 49,
        "title": "Untitled DJI Photo in Frankfort",
        "type": "PHOTO",
        "position": 28
      }
    ]
  }
]
);

// Insert tag documents
db.tags.insertMany(
[
  {
    "_id": 1,
    "name": "Nature"
  },
  {
    "_id": 2,
    "name": "Drone"
  },
  {
    "_id": 3,
    "name": "Aerial"
  },
  {
    "_id": 4,
    "name": "Wildlife"
  },
  {
    "_id": 5,
    "name": "Insect"
  },
  {
    "_id": 6,
    "name": "Bird"
  },
  {
    "_id": 7,
    "name": "Reptile"
  },
  {
    "_id": 8,
    "name": "Deer"
  },
  {
    "_id": 9,
    "name": "Bear"
  },
  {
    "_id": 10,
    "name": "Dog"
  },
  {
    "_id": 11,
    "name": "Flowers"
  },
  {
    "_id": 12,
    "name": "Plants"
  },
  {
    "_id": 13,
    "name": "Lavender"
  },
  {
    "_id": 14,
    "name": "Water"
  },
  {
    "_id": 15,
    "name": "Marsh"
  },
  {
    "_id": 16,
    "name": "Sandbar"
  },
  {
    "_id": 17,
    "name": "Sunset"
  },
  {
    "_id": 18,
    "name": "Fog"
  },
  {
    "_id": 19,
    "name": "Winter"
  },
  {
    "_id": 20,
    "name": "Ice"
  },
  {
    "_id": 21,
    "name": "Moon"
  },
  {
    "_id": 22,
    "name": "Night"
  },
  {
    "_id": 23,
    "name": "Astro"
  },
  {
    "_id": 24,
    "name": "Timelapse"
  },
  {
    "_id": 25,
    "name": "Frankfort"
  },
  {
    "_id": 26,
    "name": "Manistee"
  },
  {
    "_id": 27,
    "name": "Arcadia"
  },
  {
    "_id": 28,
    "name": "Betsie"
  },
  {
    "_id": 29,
    "name": "Maple City"
  },
  {
    "_id": 30,
    "name": "St Joseph"
  },
  {
    "_id": 31,
    "name": "Elberta"
  },
  {
    "_id": 32,
    "name": "Midland"
  },
  {
    "_id": 33,
    "name": "Michigan"
  },
  {
    "_id": 34,
    "name": "United States"
  },
  {
    "_id": 35,
    "name": "Lake Michigan"
  },
  {
    "_id": 36,
    "name": "Lighthouse"
  },
  {
    "_id": 37,
    "name": "Boat"
  },
  {
    "_id": 38,
    "name": "Buggy"
  },
  {
    "_id": 39,
    "name": "Car"
  },
  {
    "_id": 40,
    "name": "Event"
  }
]
);

// Useful indexes
db.media.createIndex({ type: 1, tags: 1 });
db.media.createIndex({ 'collections.collectionId': 1 });
db.collections.createIndex({ name: 1 }, { unique: true });
db.tags.createIndex({ name: 1 }, { unique: true });