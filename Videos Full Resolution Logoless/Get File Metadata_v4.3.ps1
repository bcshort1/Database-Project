# ================================
# Get-PhotoMetadata.ps1
# ================================
try {
    # CHANGE THIS to the folder with your photos
    $folderPath = "C:\Users\Brend\Documents\Database Project Repository\Database-Project\Videos Full Resolution Logoless"

    Write-Host "Starting metadata scan for: $folderPath"
    
    if (-not (Test-Path $folderPath)) {
        throw "Folder does not exist: $folderPath"
    }

    # Get the Shell COM object once
    $Shell = New-Object -ComObject Shell.Application

    # Collect all results in memory so we can export later if you want
    $results = @()

    # Get only image files; remove -Recurse if you only want top-level
    $files = Get-ChildItem -Path $folderPath -File -Recurse -Include *.jpg,*.jpeg,*.png,*.tif,*.tiff,*.heic,*.mp4

    if (-not $files) {
        Write-Host "No matching image files found in $folderPath" -ForegroundColor Yellow
    } else {
        Write-Host "Found $($files.Count) image file(s). Gathering metadata..."
    }

    foreach ($file in $files) {
        # Get the correct folder namespace for THIS file
        $Folder = $Shell.Namespace($file.DirectoryName)
        if (-not $Folder) {
            Write-Host "WARNING: Could not get folder namespace for $($file.FullName)" -ForegroundColor Yellow
            continue
        }

        $FileObj = $Folder.ParseName($file.Name)
        if (-not $FileObj) {
            Write-Host "WARNING: Could not parse file: $($file.FullName)" -ForegroundColor Yellow
            continue
        }

        # Base object for this file
        $Properties = [PSCustomObject]@{
            Name     = $file.Name
            FullPath = $file.FullName
        }

        # Loop through possible columns
        for ($i = 0; $i -lt 512; $i++) {
            $PropertyName = $Folder.GetDetailsOf($null, $i)
            if ($PropertyName) {
                $PropertyValue = $Folder.GetDetailsOf($FileObj, $i)
                if ($PropertyValue) {
                    Add-Member -InputObject $Properties -MemberType NoteProperty -Name $PropertyName -Value $PropertyValue -Force
                }
            }
        }

        $results += $Properties
    }

    # Show a preview in the console
    if ($results.Count -gt 0) {
        Write-Host ""
        Write-Host "Sample metadata (first 5 files):" -ForegroundColor Cyan
        $results | Select-Object -First 5 | Format-Table -AutoSize
    }

# Export results to CSV in the current folder
$outputCsv = Join-Path (Get-Location).Path "video_metadata.csv"
$results | Export-Csv -Path $outputCsv -NoTypeInformation -Encoding UTF8
Write-Host ""
Write-Host "Metadata exported to: $outputCsv" -ForegroundColor Green

}
catch {
    Write-Host ""
    Write-Host "ERROR OCCURRED:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    Write-Host ""
    Write-Host "Full error details:" -ForegroundColor Yellow
    Write-Host $_.Exception.ToString()
}
finally {
    Write-Host ""
    Read-Host "Press Enter to exit"
}
