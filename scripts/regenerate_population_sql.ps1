# Generate corrected table population SQL with proper location data
# This script rebuilds the photos and videos INSERT statements with correct location_text

$photoCSV = "c:\Users\Brend\Documents\Database Project Repository\Database-Project\AMPPS\Photos Full Resolution Logoless\lightroom_metadata_20251130_142726.csv"
$videoCSV = "c:\Users\Brend\Documents\Database Project Repository\Database-Project\AMPPS\Videos Full Resolution Logoless\lightroom_metadata_20251130_142618.csv"
$displayCSV = "c:\Users\Brend\Documents\Database Project Repository\Database-Project\AMPPS\Media Display\lightroom_metadata_20251130_142822.csv"

# Read the original SQL file to get the structure
$originalSQL = "c:\Users\Brend\Documents\Database Project Repository\Database-Project\picture_database MySQL Scripts\Table Creation and Population\picture_database-table population_final.sql"
$outputSQL = "c:\Users\Brend\Documents\Database Project Repository\Database-Project\picture_database MySQL Scripts\Table Creation and Population\picture_database-table population_corrected.sql"

# Create a mapping of titles to locations from all CSV files
$titleToLocation = @{}

foreach ($csvPath in @($photoCSV, $videoCSV, $displayCSV)) {
    if (Test-Path $csvPath) {
        $data = Import-Csv -Path $csvPath
        foreach ($row in $data) {
            $title = $row.Title
            if ([string]::IsNullOrWhiteSpace($title)) {
                continue
            }
            
            $locationParts = @()
            if (![string]::IsNullOrWhiteSpace($row.City)) {
                $locationParts += $row.City
            }
            if (![string]::IsNullOrWhiteSpace($row.State)) {
                $locationParts += $row.State
            }
            if (![string]::IsNullOrWhiteSpace($row.Country)) {
                $locationParts += $row.Country
            }
            
            if ($locationParts.Count -gt 0) {
                $titleToLocation[$title] = $locationParts -join ", "
            }
        }
    }
}

Write-Host "Found location data for $($titleToLocation.Count) titles"

# Read original SQL file
$content = Get-Content -Path $originalSQL -Raw

# Function to fix location in INSERT statement
function Fix-LocationInInsert {
    param($match)
    
    $fullMatch = $match.Value
    
    # Extract the current location_text value (4th field)
    # Pattern: (id, 'path', 'datetime', 'CURRENT_LOCATION', ...
    if ($fullMatch -match "^(\(\d+,\s*'[^']*(?:''[^']*)*',\s*'[^']*',\s*)'([^']*(?:''[^']*)*)(',.*)$") {
        $before = $matches[1]
        $currentLocation = $matches[2] -replace "''", "'"
        $after = $matches[3]
        
        # Check if we have a better location for this title
        if ($titleToLocation.ContainsKey($currentLocation)) {
            $newLocation = $titleToLocation[$currentLocation] -replace "'", "''"
            return "$before$newLocation$after"
        }
    }
    
    return $fullMatch
}

# Fix photos INSERT statements
$content = [regex]::Replace($content, 
    '\(\d+,\s*''[^'']*(?:''''[^'']*)*'',\s*''[^'']*'',\s*''[^'']*(?:''''[^'']*)*''[^\)]*\)',
    { param($m) Fix-LocationInInsert $m },
    [System.Text.RegularExpressions.RegexOptions]::Multiline)

# Save the corrected SQL
$content | Out-File -FilePath $outputSQL -Encoding UTF8

Write-Host "`nGenerated corrected SQL file: $outputSQL" -ForegroundColor Green
Write-Host "You can review this file and replace the original if it looks correct."
