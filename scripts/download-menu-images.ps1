# Script to download menu product images from Unsplash
# Run with: powershell -ExecutionPolicy Bypass -File scripts/download-menu-images.ps1

$productsDir = Join-Path $PSScriptRoot "..\public\images\products"

# Create directory if it doesn't exist
if (-not (Test-Path $productsDir)) {
    New-Item -ItemType Directory -Path $productsDir -Force | Out-Null
}

$images = @(
    @{
        url = "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&h=600&fit=crop&q=80&auto=format"
        filename = "espresso.jpg"
        description = "Espresso Premium - Rich and intense espresso"
    },
    @{
        url = "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&h=600&fit=crop&q=80&auto=format"
        filename = "cappuccino.jpg"
        description = "Cappuccino Art - Cappuccino with beautiful latte art"
    },
    @{
        url = "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=600&fit=crop&q=80&auto=format"
        filename = "latte.jpg"
        description = "Latte Premium - Creamy latte with fresh milk"
    }
)

Write-Host "Downloading menu product images..." -ForegroundColor Cyan
Write-Host ""

foreach ($image in $images) {
    $filepath = Join-Path $productsDir $image.filename
    try {
        Write-Host "Downloading: $($image.filename)..." -NoNewline
        Invoke-WebRequest -Uri $image.url -OutFile $filepath -UseBasicParsing
        Write-Host " Done" -ForegroundColor Green
    }
    catch {
        Write-Host " Failed" -ForegroundColor Red
        Write-Host $_.Exception.Message -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Done! Images saved to: $productsDir" -ForegroundColor Green

