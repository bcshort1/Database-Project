// MongoDB aggregation equivalents for the 10 MySQL data analysis queries
use('picture_database');

// Query 1: Count media items by type (PHOTO/VIDEO) and drone flag
db.media.aggregate([
  {
    $group: {
      _id: { media_type: "$mediaType", is_drone: "$isDrone" },
      media_count: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      media_type: "$_id.media_type",
      is_drone: "$_id.is_drone",
      media_count: 1
    }
  },
  { $sort: { media_type: 1, is_drone: 1 } }
]);

// Query 2: Top 10 most-used tags across all media
db.media.aggregate([
  { $unwind: "$tags" },
  {
    $group: {
      _id: { tag_id: "$tags.tagId", tag_name: "$tags.name" },
      media_count: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      tag_id: "$_id.tag_id",
      tag_name: "$_id.tag_name",
      media_count: 1
    }
  },
  { $sort: { media_count: -1, tag_name: 1 } },
  { $limit: 10 }
]);

// Query 3: Collection item counts (total / drone / photo / video) per collection
db.media.aggregate([
  { $unwind: "$collections" },
  {
    $group: {
      _id: {
        collection_id: "$collections.collectionId",
        collection_name: "$collections.name"
      },
      total_items: { $sum: 1 },
      drone_items: { $sum: { $cond: [ "$isDrone", 1, 0 ] } },
      photo_items: { $sum: { $cond: [ { $eq: [ "$mediaType", "PHOTO" ] }, 1, 0 ] } },
      video_items: { $sum: { $cond: [ { $eq: [ "$mediaType", "VIDEO" ] }, 1, 0 ] } }
    }
  },
  {
    $project: {
      _id: 0,
      collection_id: "$_id.collection_id",
      collection_name: "$_id.collection_name",
      total_items: 1,
      drone_items: 1,
      photo_items: 1,
      video_items: 1
    }
  },
  { $sort: { total_items: -1, collection_name: 1 } }
]);

// Query 4: Photo counts per month for year 2025
db.media.aggregate([
  {
    $match: {
      mediaType: "PHOTO",
      "capture.dateTime": { $type: "date" }
    }
  },
  {
    $set: {
      capture_year: { $year: { date: "$capture.dateTime", timezone: "UTC" } },
      capture_month: { $month: { date: "$capture.dateTime", timezone: "UTC" } },
      month_name: {
        $dateToString: {
          format: "%M",
          date: "$capture.dateTime",
          timezone: "UTC"
        }
      }
    }
  },
  { $match: { capture_year: 2025 } },
  {
    $group: {
      _id: {
        capture_year: "$capture_year",
        capture_month: "$capture_month",
        month_name: "$month_name"
      },
      photo_count: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      capture_year: "$_id.capture_year",
      capture_month: "$_id.capture_month",
      month_name: "$_id.month_name",
      photo_count: 1
    }
  },
  { $sort: { capture_year: 1, capture_month: 1 } }
]);

// Query 5: Average ISO and shutter speed per camera, split by drone vs non-drone photos
db.media.aggregate([
  {
    $match: {
      mediaType: "PHOTO",
      "camera.makeModel": { $ne: null }
    }
  },
  {
    $group: {
      _id: {
        camera_make_model: "$camera.makeModel",
        is_drone: "$isDrone"
      },
      photo_count: { $sum: 1 },
      avg_iso: { $avg: "$camera.iso" },
      avg_shutter_speed: { $avg: "$camera.shutterSpeed" }
    }
  },
  {
    $project: {
      _id: 0,
      camera_make_model: "$_id.camera_make_model",
      is_drone: "$_id.is_drone",
      photo_count: 1,
      avg_iso: 1,
      avg_shutter_speed: 1
    }
  },
  { $sort: { camera_make_model: 1, is_drone: 1 } }
]);

// Query 6: Total and average video duration per video location
db.media.aggregate([
  {
    $match: {
      mediaType: "VIDEO",
      "capture.durationSeconds": { $ne: null }
    }
  },
  {
    $group: {
      _id: { $ifNull: [ "$location.text", "Unknown" ] },
      video_count: { $sum: 1 },
      total_duration_seconds: { $sum: "$capture.durationSeconds" },
      avg_duration_seconds: { $avg: "$capture.durationSeconds" }
    }
  },
  {
    $project: {
      _id: 0,
      location_text: "$_id",
      video_count: 1,
      total_duration_seconds: 1,
      avg_duration_seconds: 1
    }
  },
  { $sort: { total_duration_seconds: -1 } }
]);

// Query 7: Count media items tagged with BOTH "Drone" and "Water"
db.media.aggregate([
  {
    $match: {
      $and: [
        { tags: { $elemMatch: { name: "Drone" } } },
        { tags: { $elemMatch: { name: "Water" } } }
      ]
    }
  },
  { $count: "media_with_drone_and_water" }
]);

// Query 8: Photo counts per location, split by drone vs non-drone
db.media.aggregate([
  {
    $match: {
      mediaType: "PHOTO",
      "location.text": { $ne: null }
    }
  },
  {
    $group: {
      _id: {
        location_text: "$location.text",
        is_drone: "$isDrone"
      },
      photo_count: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      location_text: "$_id.location_text",
      is_drone: "$_id.is_drone",
      photo_count: 1
    }
  },
  { $sort: { photo_count: -1, location_text: 1 } }
]);

// Query 9: For collections that include videos, total and average video duration per collection
db.media.aggregate([
  {
    $match: {
      mediaType: "VIDEO",
      "capture.durationSeconds": { $ne: null },
      collections: { $exists: true, $ne: [] }
    }
  },
  { $unwind: "$collections" },
  {
    $group: {
      _id: {
        collection_id: "$collections.collectionId",
        collection_name: "$collections.name"
      },
      video_count: { $sum: 1 },
      total_duration_seconds: { $sum: "$capture.durationSeconds" }
    }
  },
  {
    $addFields: {
      avg_duration_seconds: {
        $cond: [
          { $gt: [ "$video_count", 0 ] },
          { $divide: [ "$total_duration_seconds", "$video_count" ] },
          null
        ]
      }
    }
  },
  {
    $project: {
      _id: 0,
      collection_id: "$_id.collection_id",
      collection_name: "$_id.collection_name",
      video_count: 1,
      total_duration_seconds: 1,
      avg_duration_seconds: 1
    }
  },
  { $sort: { total_duration_seconds: -1 } }
]);

// Query 10: For each tag, percentage of tagged media that are drone media
db.media.aggregate([
  { $unwind: "$tags" },
  {
    $group: {
      _id: { tag_id: "$tags.tagId", tag_name: "$tags.name" },
      media_count: { $sum: 1 },
      drone_media_count: { $sum: { $cond: [ "$isDrone", 1, 0 ] } }
    }
  },
  {
    $addFields: {
      drone_percentage: {
        $round: [
          {
            $multiply: [
              {
                $cond: [
                  { $gt: [ "$media_count", 0 ] },
                  { $divide: [ "$drone_media_count", "$media_count" ] },
                  0
                ]
              },
              100
            ]
          },
          2
        ]
      }
    }
  },
  {
    $project: {
      _id: 0,
      tag_id: "$_id.tag_id",
      tag_name: "$_id.tag_name",
      media_count: 1,
      drone_media_count: 1,
      drone_percentage: 1
    }
  },
  { $sort: { drone_percentage: -1, media_count: -1, tag_name: 1 } }
]);
