# SelectAndCopyMedia.ps1
# Edit $Source to the root/folder of your hard drive (e.g., "E:\")
# This script copies up to:
#   Photos: 5 drone + 5 traditional
#   Videos: 5 drone + 5 traditional
# Destination: $env:USERPROFILE\Pictures\SelectedMedia\<timestamp>\...

# ----------------- CONFIG -----------------
$Source = "E:\"                       # <<< EDIT this path to point at your drive/folder
$DestRoot = Join-Path $env:USERPROFILE "Pictures\SelectedMedia"
$Timestamp = (Get-Date).ToString("yyyyMMdd_HHmmss")
$Dest = Join-Path $DestRoot $Timestamp

$PhotoExts = @("*.jpg","*.jpeg","*.png","*.heic","*.tif","*.tiff")
$VideoExts = @("*.mp4","*.mov","*.mkv","*.avi","*.mpg","*.mts","*.m2ts","*.wmv")
$DroneKeywords = @("DJI","Phantom","Mavic","Inspire","Autel","Parrot","Skydio")
$CameraKeywords = @("Canon","NIKON","Nikon","SONY","Sony","FUJIFILM","Fujifilm","Panasonic","Lumix","Olympus","LEICA")
$MaxDronePhotos = 5
$MaxTradPhotos = 5
$MaxDroneVideos = 5
$MaxTradVideos = 5

# ----------------- PREP DEST -----------------
$folders = @(
    "Photos\Drone",
    "Photos\Traditional",
    "Videos\Drone",
    "Videos\Traditional"
)
foreach ($f in $folders) {
    $p = Join-Path $Dest $f
    if (-not (Test-Path $p)) { New-Item -ItemType Directory -Path $p -Force | Out-Null }
}

# ----------------- HELPERS -----------------
function Test-ExifTool {
    try {
        $cmd = Get-Command exiftool -ErrorAction Stop
        return $true
    } catch {
        return $false
    }
}

# Use ExifTool to get files where metadata Make/Model matches keywords
function Get-FilesByExifTool {
    param(
        [string]$basePath,
        [string[]]$exts,
        [string[]]$matchKeywords
    )
    # Build exiftool -r -ext ... -if '$Make =~ /keyword1|keyword2/i or $Model =~ /.../i' -p '$Directory/$FileName' $basePath
    $extArgs = @()
    foreach ($e in $exts) { $extArgs += "-ext"; $extArgs += $e.TrimStart('*').TrimStart('.') } # exiftool expects e.g. -ext jpg

    $pattern = ($matchKeywords -join "|")
    # Expression: ($Make =~ /pattern/i) or ($Model =~ /pattern/i)
    $ifExpr = '$Make =~ /' + $pattern + '/i or $Model =~ /' + $pattern + '/i'

    $args = @("-r") + $extArgs + @("-if", $ifExpr, "-p", '$Directory/$FileName', $basePath)
    $out = & exiftool.exe @args 2>$null
    return $out | Where-Object { $_ -and $_ -ne "" }   # full paths
}

# Fallback: search by filename or parent folder name containing keyword
function Get-FilesByNameKeyword {
    param(
        [string]$basePath,
        [string[]]$exts,
        [string[]]$matchKeywords
    )
    $kwRegex = ($matchKeywords | ForEach-Object { [regex]::Escape($_) }) -join "|"
    $results = @()
    foreach ($ext in $exts) {
        $results += Get-ChildItem -Path $basePath -Filter $ext -Recurse -File -ErrorAction SilentlyContinue |
            Where-Object {
                ($_.FullName -match $kwRegex) -or ($_.DirectoryName -match $kwRegex)
            } |
            Select-Object -ExpandProperty FullName
    }
    return $results
}

# Generic search by extension (no classification)
function Get-AllFilesByExt {
    param($basePath, $exts)
    $res = @()
    foreach ($ext in $exts) {
        $res += Get-ChildItem -Path $basePath -Filter $ext -Recurse -File -ErrorAction SilentlyContinue |
                Select-Object -ExpandProperty FullName
    }
    return $res
}

# Copy function with count limit and avoidance duplicates
function Copy-Selection {
    param(
        [string[]]$items,
        [int]$max,
        [string]$destinationFolder
    )
    $count = 0
    foreach ($it in $items) {
        if ($count -ge $max) { break }
        try {
            $destPath = Join-Path $destinationFolder (Split-Path -Leaf $it)
            if (-not (Test-Path $destPath)) {
                Copy-Item -Path $it -Destination $destPath -ErrorAction Stop
                $count++
            } else {
                # if file exists, skip but do not increment count
            }
        } catch {
            Write-Host "Failed to copy $it : $_" -ForegroundColor Yellow
        }
    }
    return $count
}

# ----------------- MAIN -----------------
$useExifTool = Test-ExifTool
Write-Host "Source: $Source"
Write-Host "Destination root: $Dest"
Write-Host "ExifTool available: $useExifTool"

# --- PHOTOS ---
$dronePhotoCandidates = @()
$tradPhotoCandidates = @()

if ($useExifTool) {
    Write-Host "Finding photos by EXIF drone keywords..."
    $dronePhotoCandidates = Get-FilesByExifTool -basePath $Source -exts $PhotoExts -matchKeywords $DroneKeywords
    Write-Host ("Drone photo candidates found: {0}" -f $dronePhotoCandidates.Count)
    Write-Host "Finding photos by EXIF camera keywords for traditional cameras..."
    $tradPhotoCandidates = Get-FilesByExifTool -basePath $Source -exts $PhotoExts -matchKeywords $CameraKeywords
    Write-Host ("Traditional camera photo candidates found: {0}" -f $tradPhotoCandidates.Count)
} else {
    Write-Host "ExifTool not found. Falling back to filename/folder keyword matching for photos..."
    $dronePhotoCandidates = Get-FilesByNameKeyword -basePath $Source -exts $PhotoExts -matchKeywords $DroneKeywords
    $tradPhotoCandidates = Get-FilesByNameKeyword -basePath $Source -exts $PhotoExts -matchKeywords $CameraKeywords
}

# If still not enough, fill remaining from any photos found
if ($dronePhotoCandidates.Count -lt $MaxDronePhotos -or $tradPhotoCandidates.Count -lt $MaxTradPhotos) {
    $allPhotos = Get-AllFilesByExt -basePath $Source -exts $PhotoExts
    # Remove already chosen
    $remaining = $allPhotos | Where-Object { ($dronePhotoCandidates -notcontains $_) -and ($tradPhotoCandidates -notcontains $_) }
    # Add to whichever needs more (prefer recent files)
    $remaining = $remaining | Sort-Object {[IO.File]::GetLastWriteTime($_)} -Descending
    while ($dronePhotoCandidates.Count -lt $MaxDronePhotos -and $remaining.Count -gt 0) {
        $dronePhotoCandidates += $remaining[0]; $remaining = $remaining[1..($remaining.Count-1)]
    }
    while ($tradPhotoCandidates.Count -lt $MaxTradPhotos -and $remaining.Count -gt 0) {
        $tradPhotoCandidates += $remaining[0]; $remaining = $remaining[1..($remaining.Count-1)]
    }
}

$photoDroneDest = Join-Path $Dest "Photos\Drone"
$photoTradDest  = Join-Path $Dest "Photos\Traditional"

$copiedDronePhotos = Copy-Selection -items $dronePhotoCandidates -max $MaxDronePhotos -destinationFolder $photoDroneDest
$copiedTradPhotos  = Copy-Selection -items $tradPhotoCandidates -max $MaxTradPhotos -destinationFolder $photoTradDest

Write-Host "Photos copied: Drone = $copiedDronePhotos, Traditional = $copiedTradPhotos"

# --- VIDEOS ---
$droneVideoCandidates = @()
$tradVideoCandidates = @()

if ($useExifTool) {
    Write-Host "Finding videos by EXIF drone keywords..."
    $droneVideoCandidates = Get-FilesByExifTool -basePath $Source -exts $VideoExts -matchKeywords $DroneKeywords
    Write-Host ("Drone video candidates found: {0}" -f $droneVideoCandidates.Count)
    Write-Host "Finding videos by EXIF camera keywords for traditional cameras..."
    $tradVideoCandidates = Get-FilesByExifTool -basePath $Source -exts $VideoExts -matchKeywords $CameraKeywords
    Write-Host ("Traditional camera video candidates found: {0}" -f $tradVideoCandidates.Count)
} else {
    Write-Host "ExifTool not found. Falling back to filename/folder keyword matching for videos..."
    $droneVideoCandidates = Get-FilesByNameKeyword -basePath $Source -exts $VideoExts -matchKeywords $DroneKeywords
    $tradVideoCandidates = Get-FilesByNameKeyword -basePath $Source -exts $VideoExts -matchKeywords $CameraKeywords
}

if ($droneVideoCandidates.Count -lt $MaxDroneVideos -or $tradVideoCandidates.Count -lt $MaxTradVideos) {
    $allVideos = Get-AllFilesByExt -basePath $Source -exts $VideoExts
    $remainingV = $allVideos | Where-Object { ($droneVideoCandidates -notcontains $_) -and ($tradVideoCandidates -notcontains $_) }
    $remainingV = $remainingV | Sort-Object {[IO.File]::GetLastWriteTime($_)} -Descending
    while ($droneVideoCandidates.Count -lt $MaxDroneVideos -and $remainingV.Count -gt 0) {
        $droneVideoCandidates += $remainingV[0]; $remainingV = $remainingV[1..($remainingV.Count-1)]
    }
    while ($tradVideoCandidates.Count -lt $MaxTradVideos -and $remainingV.Count -gt 0) {
        $tradVideoCandidates += $remainingV[0]; $remainingV = $remainingV[1..($remainingV.Count-1)]
    }
}

$videoDroneDest = Join-Path $Dest "Videos\Drone"
$videoTradDest  = Join-Path $Dest "Videos\Traditional"

$copiedDroneVideos = Copy-Selection -items $droneVideoCandidates -max $MaxDroneVideos -destinationFolder $videoDroneDest
$copiedTradVideos  = Copy-Selection -items $tradVideoCandidates -max $MaxTradVideos -destinationFolder $videoTradDest

Write-Host "Videos copied: Drone = $copiedDroneVideos, Traditional = $copiedTradVideos"

Write-Host "`nDone. Selected media is in: $Dest" -ForegroundColor Green
