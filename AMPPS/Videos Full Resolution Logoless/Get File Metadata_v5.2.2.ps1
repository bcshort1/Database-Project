<# 
    Get_File_Metadata.ps1

    - Reads Lightroom-style metadata for photos and videos using ExifTool
    - Computes PixelAspectRatio from width/height when not present
    - Writes a final CSV you can import into your database
#>

# -------------------------------
# CONFIG – CHANGE THESE IF NEEDED
# -------------------------------

# Path to exiftool.exe
$exiftool  = "C:\tools\exiftool-13.42_64/exiftool.exe"

# Root folder with your photos/videos
$folderPath = "C:\Program Files\Ampps\Videos Full Resolution Logoless"

# Output paths (next to this script)
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$rawCsv    = Join-Path $scriptDir "lightroom_metadata_raw.csv"

# Timestamped final CSV to avoid file-lock issues if you have it open in Excel
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$outputCsv = Join-Path $scriptDir "lightroom_metadata_$timestamp.csv"

Write-Host "Reading Lightroom metadata from: $folderPath" -ForegroundColor Yellow
Write-Host "Raw CSV will be: $rawCsv" -ForegroundColor Yellow
Write-Host "Final CSV will be: $outputCsv" -ForegroundColor Yellow
Write-Host ""

# -------------------------------
# EXIFTOOL TAGS
# -------------------------------

# Tags roughly matching the Lightroom panel you showed
$tags = @(
    # File
    "-FileName",
    "-Directory",

    # Descriptive / author
    "-Title",                # Title
    "-Description",          # Caption
    "-Copyright",
    "-Creator",
    "-Rating",

    # Dates
    "-DateTimeOriginal",     # Capture date/time (photos, some video)
    "-CreateDate",           # Often used for video
    "-MediaCreateDate",      # Video specific (DJI, GoPro, etc.)

    # Dimensions
    "-ImageSize",            # "WxH"
    "-ImageWidth",
    "-ImageHeight",
    "-VideoFrameWidth",
    "-VideoFrameHeight",

    # Aspect ratio
    "-AspectRatio",
    "-DisplayAspectRatio",
    "-PixelAspectRatio",     # Usually empty for stills; we'll compute

    # Camera / exposure
    "-Make",
    "-Model",
    "-ShutterSpeed",
    "-ExposureTime",
    "-Aperture",
    "-FNumber",
    "-FocalLength",
    "-Lens",
    "-LensModel",
    "-ISO",

    # Location
    "-GPSLatitude",
    "-GPSLongitude",
    "-GPSAltitude",
    "-City",
    "-State",
    "-Country",
    "-Country-PrimaryLocationName"
)

# File types to include (photos + video)
$exts = @(
    "-ext", "jpg",
    "-ext", "jpeg",
    "-ext", "tif",
    "-ext", "tiff",
    "-ext", "png",
    "-ext", "dng",
    "-ext", "nef",
    "-ext", "cr2",
    "-ext", "arw",
    "-ext", "heic",
    "-ext", "mp4",
    "-ext", "mov",
    "-ext", "m4v"
)

# -------------------------------
# STEP 1 – RUN EXIFTOOL, WRITE RAW CSV
# -------------------------------

if (-not (Test-Path $exiftool)) {
    Write-Host "ERROR: exiftool not found at '$exiftool'." -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

if (-not (Test-Path $folderPath)) {
    Write-Host "ERROR: folder not found: '$folderPath'." -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

$args = @(
    "-r",                    # recurse subfolders
    "-csv",                  # CSV output
    "-charset", "utf8"       # UTF-8 text
) + $exts + $tags + @($folderPath)

Write-Host "Running exiftool..." -ForegroundColor Yellow
$csvText = & $exiftool @args

# If exiftool failed, $LASTEXITCODE will be non-zero
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: exiftool exited with code $LASTEXITCODE." -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit $LASTEXITCODE
}

# Save raw CSV
$csvText | Out-File -FilePath $rawCsv -Encoding utf8
Write-Host "Raw metadata written to: $rawCsv" -ForegroundColor Green
Write-Host ""

# -------------------------------
# STEP 2 – IMPORT RAW CSV, COMPUTE PixelAspectRatio
# -------------------------------

Write-Host "Importing raw CSV and computing PixelAspectRatio..." -ForegroundColor Yellow
$data = Import-Csv $rawCsv

foreach ($row in $data) {

    # Ensure the PixelAspectRatio property exists on this row
    if (-not ($row.PSObject.Properties.Name -contains 'PixelAspectRatio')) {
        $row | Add-Member -NotePropertyName 'PixelAspectRatio' -NotePropertyValue $null
    }

    # Determine width/height: prefer video dimensions, fall back to image dimensions
    $w = $null
    $h = $null

    $tmpW = 0
    $tmpH = 0

    if ([int]::TryParse($row.VideoFrameWidth,  [ref]$tmpW) -and
        [int]::TryParse($row.VideoFrameHeight, [ref]$tmpH) -and $tmpH -ne 0) {

        $w = $tmpW
        $h = $tmpH

    } elseif ([int]::TryParse($row.ImageWidth,  [ref]$tmpW) -and
              [int]::TryParse($row.ImageHeight, [ref]$tmpH) -and $tmpH -ne 0) {

        $w = $tmpW
        $h = $tmpH
    }

    if ($w -and $h -and $h -ne 0) {
        $ratio = [math]::Round($w / $h, 2)

        # Only set if empty or null
        if (-not $row.PixelAspectRatio) {
            $row.PixelAspectRatio = $ratio
        }
    }
}

# -------------------------------
# STEP 3 – EXPORT FINAL CSV
# -------------------------------

Write-Host "Exporting final CSV..." -ForegroundColor Yellow

$data | Export-Csv -Path $outputCsv -NoTypeInformation -Encoding utf8

Write-Host ""
Write-Host "Done." -ForegroundColor Green
Write-Host "Final metadata CSV: $outputCsv" -ForegroundColor Green
Write-Host ""
Read-Host "Press Enter to exit"
