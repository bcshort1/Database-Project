// Query 1: Count media items by type and drone flag
db.media.aggregate([
  {
    $group: {
      _id: { media_type: "$type", is_drone: "$isDrone" },
      media_count: { $sum: 1 }
    }
  },
  {
    $sort: { "_id.media_type": 1, "_id.is_drone": 1 }
  }
]);

// Query 2: Top 10 most-used tags across all media
db.media.aggregate([
  { $unwind: "$tags" },
  {
    $group: {
      _id: "$tags",              // tag name
      media_count: { $sum: 1 }
    }
  },
  { $sort: { media_count: -1, _id: 1 } },
  { $limit: 10 },
  {
    $lookup: {
      from: "tags",
      localField: "_id",         // tag name
      foreignField: "name",
      as: "tag_doc"
    }
  },
  {
    $unwind: {
      path: "$tag_doc",
      preserveNullAndEmptyArrays: true
    }
  },
  {
    $project: {
      _id: 0,
      tag_id: "$tag_doc._id",
      tag_name: "$_id",
      media_count: 1
    }
  }
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
      drone_items: {
        $sum: {
          $cond: [ "$isDrone", 1, 0 ]
        }
      },
      photo_items: {
        $sum: {
          $cond: [
            { $eq: [ "$type", "PHOTO" ] },
            1,
            0
          ]
        }
      },
      video_items: {
        $sum: {
          $cond: [
            { $eq: [ "$type", "VIDEO" ] },
            1,
            0
          ]
        }
      }
    }
  },
  {
    $sort: {
      total_items: -1,
      "_id.collection_name": 1
    }
  }
]);

// Query 4: Photo counts per month for year 2025
db.media.aggregate([
  {
    $match: {
      type: "PHOTO",
      captureDateTime: { $ne: null }
    }
  },
  {
    $addFields: {
      captureDate: {
        $dateFromString: {
          dateString: "$captureDateTime",
          format: "%Y-%m-%d %H:%M:%S"
        }
      }
    }
  },
  {
    $match: {
      captureDate: {
        $gte: ISODate("2025-01-01T00:00:00Z"),
        $lt: ISODate("2026-01-01T00:00:00Z")
      }
    }
  },
  {
    $group: {
      _id: {
        capture_year: { $year: "$captureDate" },
        capture_month: { $month: "$captureDate" }
      },
      photo_count: { $sum: 1 }
    }
  },
  {
    $addFields: {
      capture_year: "$_id.capture_year",
      capture_month: "$_id.capture_month",
      month_name: {
        $arrayElemAt: [
          [
            null,
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ],
          "$_id.capture_month"
        ]
      }
    }
  },
  {
    $project: {
      _id: 0,
      capture_year: 1,
      capture_month: 1,
      month_name: 1,
      photo_count: 1
    }
  },
  {
    $sort: {
      capture_year: 1,
      capture_month: 1
    }
  }
]);

// Query 5: Average ISO and shutter speed per camera, split by drone vs non-drone photos
db.media.aggregate([
  {
    $match: {
      type: "PHOTO",
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
    $sort: {
      "_id.camera_make_model": 1,
      "_id.is_drone": 1
    }
  }
]);

// Query 6: Total and average video duration per video location
db.media.aggregate([
  {
    $match: {
      type: "VIDEO",
      durationSeconds: { $ne: null }
    }
  },
  {
    $group: {
      _id: "$location.text",
      video_count: { $sum: 1 },
      total_duration_seconds: { $sum: "$durationSeconds" },
      avg_duration_seconds: { $avg: "$durationSeconds" }
    }
  },
  {
    $sort: {
      total_duration_seconds: -1
    }
  }
]);

// Query 7: Count media items tagged with BOTH "Drone" and "Water"
db.media.aggregate([
  {
    $match: {
      tags: { $all: [ "Drone", "Water" ] }
    }
  },
  {
    $count: "media_with_drone_and_water"
  }
]);

// Query 8: Photo counts per location, split by drone vs non-drone
db.media.aggregate([
  {
    $match: {
      type: "PHOTO",
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
    $sort: {
      photo_count: -1,
      "_id.location_text": 1
    }
  }
]);

// Query 9: For collections that include videos, total and average video duration per collection
db.collections.aggregate([
  { $unwind: "$items" },
  {
    $lookup: {
      from: "media",
      localField: "items.mediaId",
      foreignField: "_id",
      as: "media"
    }
  },
  { $unwind: "$media" },
  {
    $match: {
      "media.type": "VIDEO",
      "media.durationSeconds": { $ne: null }
    }
  },
  {
    $group: {
      _id: {
        collection_id: "$_id",
        collection_name: "$name"
      },
      video_count: { $sum: 1 },
      total_duration_seconds: { $sum: "$media.durationSeconds" }
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
    $match: {
      video_count: { $gt: 0 }
    }
  },
  {
    $sort: {
      total_duration_seconds: -1
    }
  }
]);

// Query 10: For each tag, percentage of tagged media that are drone media
db.media.aggregate([
  { $unwind: "$tags" },
  {
    $group: {
      _id: "$tags",                      // tag name
      media_count: { $sum: 1 },
      drone_media_count: {
        $sum: {
          $cond: [ "$isDrone", 1, 0 ]
        }
      }
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
    $lookup: {
      from: "tags",
      localField: "_id",                 // tag name
      foreignField: "name",
      as: "tag_doc"
    }
  },
  {
    $unwind: {
      path: "$tag_doc",
      preserveNullAndEmptyArrays: true
    }
  },
  {
    $project: {
      _id: 0,
      tag_id: "$tag_doc._id",
      tag_name: "$_id",
      media_count: 1,
      drone_media_count: 1,
      drone_percentage: 1
    }
  },
  {
    $sort: {
      drone_percentage: -1,
      media_count: -1
    }
  }
]);
