# Database-Project

A photo and video gallery web application built with PHP and MySQL, designed to showcase nature photography from Northern Michigan.

## Overview

This project is a database-driven photo/video gallery prototype that demonstrates core database concepts including normalized schema design, relationships, and CRUD operations. The application displays photos and videos with metadata, supports filtering and collections, and includes a basic admin panel.

## Features

- **Photo Gallery**: Browse photos with filtering by capture type (drone/traditional camera), date range, location, camera, aspect ratio, and tags
- **Video Showcase**: View videos with metadata and filtering options
- **Collections**: Curated groupings of related media (e.g., "Drone Aerials", "Wildlife & Critters", "Lighthouses & Lake Michigan")
- **Admin Panel**: Content management for photos, videos, collections, and tags
  - Edit photo and video metadata
  - Manage collections and collection items
  - Create and organize tags
- **Metadata Display**: Shows comprehensive EXIF data including camera settings, location, GPS coordinates, and capture dates
- **Media Streaming**: PHP-based file serving for photos and videos

## Technology Stack

- **Backend**: PHP 8.2
- **Database**: MySQL 8.0
- **Web Server**: Apache (via AMPPS)
- **Frontend**: HTML/CSS (vanilla, no frameworks)

## Database Structure

The MySQL database (`picture_database`) includes:
- `media` - Base table for all media items (photos and videos)
- `photos` - Photo-specific metadata (camera settings, EXIF data, focal length, ISO, etc.)
- `videos` - Video-specific metadata (duration, frame rate, resolution, capture settings)
- `collections` - Curated media groupings with descriptions
- `collection_items` - Junction table linking media to collections
- `tags` - Categorization system for media items
- `media_tags` - Junction table for many-to-many media-tag relationships

The database uses a normalized schema with foreign key relationships to maintain data integrity.

## Project Structure

```
Database-Project/
├── AMPPS/
│   ├── www/
│   │   └── final_project/      # PHP web application
│   │       ├── admin/          # Admin panel pages
│   │       ├── assets/         # Static assets
│   │       ├── includes/       # Reusable PHP components
│   │       └── tests/          # Test files
│   ├── Media Display/          # Display-sized media files
│   ├── Photos Full Resolution/ # Full-resolution photos
│   └── Videos Full Resolution/ # Full-resolution videos
├── Complete Database SQL/      # Full database export
├── picture_database MySQL Scripts/
│   ├── Data Analysis/         # 10 analysis queries
│   └── Table Creation and Population/
├── picture_database MongoDB Scripts/ # MongoDB alternative implementation
├── scripts/                   # Utility scripts (location fixes, regeneration)
└── Presentation-Demo/         # Project presentation materials
```

## Setup

1. **Install AMPPS** (Apache, MySQL, PHP stack)
2. **Import Database**: Import `Complete Database SQL/picture_database.sql` into MySQL
3. **Deploy Web Application**: Copy `AMPPS/www/final_project/` to `C:\Program Files\Ampps\www\`
4. **Setup Media Folders**: Copy media folders to `C:\Program Files\Ampps\` or configure paths in `config.php`
5. **Configure Database**: Update database credentials in `config.php` if needed (defaults to root/password from environment variables)
6. **Access Application**: Navigate to `http://localhost/final_project/`

**Database Configuration** (in `config.php`):
- Host: `localhost` (or set `PHOTO_DB_HOST` environment variable)
- Database: `picture_database` (or set `PHOTO_DB_NAME`)
- User: `root` (or set `PHOTO_DB_USER`)
- Password: Can be set via `PHOTO_DB_PASS` environment variable

**Default Admin Credentials**:
- Username: `admin`
- Password: `ChangeMe123!`

## Known Limitations

- Media files must be stored in specific filesystem locations (configurable in `config.php`)
- Single admin account authentication (credentials in `config.php`)
- Limited error handling and validation in some areas
- Video streaming uses basic PHP readfile (not optimized for large files or high concurrency)
- No responsive mobile layout
- Some capture dates extracted from filenames where EXIF data unavailable
- Location data initially had population issues (fixed via `scripts/update_locations.sql`)

## Utility Scripts

The `scripts/` directory contains PowerShell and SQL utilities:
- `fix_location_data.ps1` - Regenerates location update SQL from CSV metadata
- `regenerate_population_sql.ps1` - Regenerates database population scripts
- `update_locations.sql` - SQL to correct location_text fields
- `check_missing_assets.php/.py` - Validates media file references

## Database Analysis

The `picture_database MySQL Scripts/Data Analysis/` folder contains `10 Data Analysis Queries.sql` demonstrating:
- Aggregations and grouping (e.g., photos by camera, videos by resolution)
- Complex joins across multiple tables (media, photos, videos, collections, tags)
- Date-based filtering and temporal analysis
- Statistical analysis of media metadata (ISO settings, focal lengths, durations)
- Collection and tag analytics

## Alternative Implementation

A MongoDB version of the database is available in `picture_database MongoDB Scripts/` with:
- Collection and document creation scripts
- Data analysis queries adapted for MongoDB's document model
- Demonstrates NoSQL approach to the same dataset

## Development Notes

This is a prototype/demonstration project created for a database design course. It showcases fundamental database concepts including:
- Normalized relational schema design (3NF)
- Foreign key relationships and referential integrity
- Many-to-many relationships via junction tables
- CRUD operations via PHP/MySQL
- Metadata extraction from media files (EXIF, filename parsing)
- Alternative NoSQL implementation (MongoDB)

The project is not production-ready. Key areas that would need enhancement for production use include:
- Security hardening (prepared statements, input sanitization, CSRF protection)
- Comprehensive input validation and error handling
- User authentication and authorization system
- Responsive mobile design
- Scalable media delivery (CDN, streaming server)
- Caching layer for performance
- Backup and recovery procedures

## License

Educational project - code provided as-is for reference purposes.