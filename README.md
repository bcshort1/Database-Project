# Database-Project

A photo and video gallery web application built with PHP and MySQL, designed to showcase nature photography from Northern Michigan.

## Overview

This project is a database-driven photo/video gallery prototype that demonstrates core database concepts including normalized schema design, relationships, and CRUD operations. The application displays photos and videos with metadata, supports filtering and collections, and includes a basic admin panel.

## Features

- **Photo Gallery**: Browse photos with filtering by capture type (drone/traditional camera), date range, location, camera, aspect ratio, and tags
- **Video Showcase**: View videos with metadata and filtering options
- **Collections**: Curated groupings of related media
- **Admin Panel**: Basic content management for photos, videos, and tags
- **Metadata Display**: Shows EXIF data including camera settings, location, and capture dates

## Technology Stack

- **Backend**: PHP 8.2
- **Database**: MySQL 8.0
- **Web Server**: Apache (via AMPPS)
- **Frontend**: HTML/CSS (vanilla, no frameworks)

## Database Structure

The MySQL database (`picture_database`) includes:
- `media` - Base table for all media items
- `photos` - Photo-specific metadata (camera settings, EXIF data)
- `videos` - Video-specific metadata (duration, capture settings)
- `collections` - Curated media groupings
- `tags` - Categorization system
- Supporting junction tables for many-to-many relationships

## Project Structure

```
Database-Project/
├── AMPPS/
│   ├── final_project/          # PHP web application
│   ├── Media Display/          # Display-sized media files
│   ├── Photos Full Resolution/ # Full-resolution photos
│   └── Videos Full Resolution/ # Full-resolution videos
├── Complete Database SQL/      # Full database export
├── picture_database MySQL Scripts/
│   ├── Data Analysis/         # 10 analysis queries
│   └── Table Creation and Population/
└── picture_database MongoDB Scripts/ # MongoDB alternative implementation
```

## Setup

1. Install AMPPS (Apache, MySQL, PHP stack)
2. Import `Complete Database SQL/picture_database.sql` into MySQL
3. Copy `AMPPS/final_project/` to `C:\Program Files\Ampps\www\`
4. Copy media folders to `C:\Program Files\Ampps\`
5. Update database credentials in `config.php` if needed
6. Access via `http://localhost/final_project/`

Default admin credentials:
- Username: `admin`
- Password: `ChangeMe123!`

## Known Limitations

- Media files must be stored in specific filesystem locations
- No user authentication beyond single admin account
- Limited error handling and validation
- Video streaming uses basic PHP readfile (no dedicated media server)
- No responsive mobile layout
- Capture dates extracted from filenames where EXIF data unavailable

## Database Analysis

The `Data Analysis/` folder contains 10 SQL queries demonstrating:
- Aggregations and grouping
- Joins across multiple tables
- Date-based filtering
- Statistical analysis of media metadata

## Development Notes

This is a prototype/demonstration project created for a database design course. It showcases fundamental database concepts but is not production-ready. Key areas that would need enhancement for production use include security hardening, input validation, error handling, responsive design, and scalable media delivery.

## License

Educational project - code provided as-is for reference purposes.