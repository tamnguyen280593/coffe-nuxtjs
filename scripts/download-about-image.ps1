# Script to download about section image from Unsplash
# Run with: powershell -ExecutionPolicy Bypass -File scripts/download-about-image.ps1

$imageDir = Join-Path $PSScriptRoot "..\public\images"

# Create directory if it doesn't exist
if (-not (Test-Path $imageDir)) {
    New-Item -ItemType Directory -Path $imageDir -Force | Out-Null
}

# Image URL from Unsplash - barista making coffee, warm and cozy atmosphere
# Size: 532x512 (approximately square, suitable for about section)
$imageUrl = "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=532&h=512&fit=crop&q=80&auto=format"
$filename = "about-story.jpg"
$filepath = Join-Path $imageDir $filename

Write-Host "Downloading about section image..." -ForegroundColor Cyan
Write-Host ""

try {
    Write-Host "Downloading: $filename..." -NoNewline
    Invoke-WebRequest -Uri $imageUrl -OutFile $filepath -UseBasicParsing
    Write-Host " Done" -ForegroundColor Green
    Write-Host ""
    Write-Host "Image saved to: $filepath" -ForegroundColor Green
    Write-Host "Size: 532x512 pixels" -ForegroundColor Green
}
catch {
    Write-Host " Failed" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
}
