# Script to download banner images from Unsplash
# Run with: powershell -ExecutionPolicy Bypass -File scripts/download-banner-images.ps1

$bannerDir = Join-Path $PSScriptRoot "..\public\images\banner"

# Create directory if it doesn't exist
if (-not (Test-Path $bannerDir)) {
    New-Item -ItemType Directory -Path $bannerDir -Force | Out-Null
}

$images = @(
    @{
        url = "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&h=1080&fit=crop&q=80&auto=format"
        filename = "cafe-interior-space.jpg"
        description = "Coffee shop interior space"
    },
    @{
        url = "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=1920&h=1080&fit=crop&q=80&auto=format"
        filename = "coffee-brewing-art.jpg"
        description = "Coffee brewing with latte art"
    },
    @{
        url = "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1920&h=1080&fit=crop&q=80&auto=format"
        filename = "cafe-relaxing-ambiance.jpg"
        description = "Relaxing cafe ambiance"
    }
)

Write-Host "Downloading banner images..." -ForegroundColor Cyan
Write-Host ""

foreach ($image in $images) {
    $filepath = Join-Path $bannerDir $image.filename
    try {
        Write-Host "Downloading: $($image.filename)..." -NoNewline
        Invoke-WebRequest -Uri $image.url -OutFile $filepath -UseBasicParsing
        Write-Host " Done" -ForegroundColor Green
    }
    catch {
        Write-Host " Failed: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Done! Images saved to: $bannerDir" -ForegroundColor Green
