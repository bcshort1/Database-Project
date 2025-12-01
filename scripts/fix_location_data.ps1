# Fix Location Data Script
# This script reads the CSV files and generates SQL UPDATE statements to fix location_text

$csvFiles = @(
    "c:\Users\Brend\Documents\Database Project Repository\Database-Project\AMPPS\Media Display\lightroom_metadata_20251130_142822.csv",
    "c:\Users\Brend\Documents\Database Project Repository\Database-Project\AMPPS\Photos Full Resolution Logoless\lightroom_metadata_20251130_142726.csv",
    "c:\Users\Brend\Documents\Database Project Repository\Database-Project\AMPPS\Videos Full Resolution Logoless\lightroom_metadata_20251130_142618.csv"
)

$outputSql = "c:\Users\Brend\Documents\Database Project Repository\Database-Project\scripts\update_locations.sql"

# Start SQL file
$sqlContent = @"
USE ``picture_database``;

-- Update location_text fields with proper location data from City, State, Country

"@

$updates = @()

foreach ($csvFile in $csvFiles) {
    if (Test-Path $csvFile) {
        Write-Host "Processing: $csvFile"
        
        # Import CSV
        $data = Import-Csv -Path $csvFile
        
        foreach ($row in $data) {
            $title = $row.Title
            $city = $row.City
            $state = $row.State
            $country = $row.Country
            
            # Only process if we have a title
            if ([string]::IsNullOrWhiteSpace($title)) {
                continue
            }
            
            # Build location text from City, State, Country
            $locationParts = @()
            if (![string]::IsNullOrWhiteSpace($city)) {
                $locationParts += $city
            }
            if (![string]::IsNullOrWhiteSpace($state)) {
                $locationParts += $state
            }
            if (![string]::IsNullOrWhiteSpace($country)) {
                $locationParts += $country
            }
            
            $locationText = $locationParts -join ", "
            
            # If no location data, skip
            if ([string]::IsNullOrWhiteSpace($locationText)) {
                continue
            }
            
            # Escape single quotes for SQL
            $titleEscaped = $title -replace "'", "''"
            $locationEscaped = $locationText -replace "'", "''"
            
            # Create update statement
            $update = @"
UPDATE photos 
SET location_text = '$locationEscaped' 
WHERE photo_id IN (
    SELECT media_id FROM media WHERE title = '$titleEscaped' AND media_type = 'PHOTO'
);

"@
            $updates += $update
        }
    } else {
        Write-Host "File not found: $csvFile" -ForegroundColor Yellow
    }
}

# Add video updates
Write-Host "Processing videos..."
$videoCSV = "c:\Users\Brend\Documents\Database Project Repository\Database-Project\AMPPS\Videos Full Resolution Logoless\lightroom_metadata_20251130_142618.csv"
if (Test-Path $videoCSV) {
    $data = Import-Csv -Path $videoCSV
    
    foreach ($row in $data) {
        $title = $row.Title
        $city = $row.City
        $state = $row.State
        $country = $row.Country
        
        if ([string]::IsNullOrWhiteSpace($title)) {
            continue
        }
        
        $locationParts = @()
        if (![string]::IsNullOrWhiteSpace($city)) {
            $locationParts += $city
        }
        if (![string]::IsNullOrWhiteSpace($state)) {
            $locationParts += $state
        }
        if (![string]::IsNullOrWhiteSpace($country)) {
            $locationParts += $country
        }
        
        $locationText = $locationParts -join ", "
        
        if ([string]::IsNullOrWhiteSpace($locationText)) {
            continue
        }
        
        $titleEscaped = $title -replace "'", "''"
        $locationEscaped = $locationText -replace "'", "''"
        
        $update = @"
UPDATE videos 
SET location_text = '$locationEscaped' 
WHERE video_id IN (
    SELECT media_id FROM media WHERE title = '$titleEscaped' AND media_type = 'VIDEO'
);

"@
        $updates += $update
    }
}

# Remove duplicates
$updates = $updates | Select-Object -Unique

$sqlContent += $updates -join "`n"

# Write to file
$sqlContent | Out-File -FilePath $outputSql -Encoding UTF8

Write-Host "`nGenerated SQL file: $outputSql" -ForegroundColor Green
Write-Host "Total updates: $($updates.Count)" -ForegroundColor Green
Write-Host "`nYou can now run this SQL file against your database to update the location_text fields."
