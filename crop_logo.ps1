Add-Type -AssemblyName System.Drawing

$srcPath = "c:\Users\harshal\OneDrive\Desktop\antigravityProjects\gastrocareWebapp\MGC_Logo.png"
$destPath = "c:\Users\harshal\OneDrive\Desktop\antigravityProjects\gastrocareWebapp\public\mgc-logo-icon.png"

$img = [System.Drawing.Image]::FromFile($srcPath)
$size = $img.Height
$rect = New-Object System.Drawing.Rectangle(0, 0, $size, $size)

$crop = New-Object System.Drawing.Bitmap($size, $size)
$g = [System.Drawing.Graphics]::FromImage($crop)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.DrawImage($img, $rect, $rect, [System.Drawing.GraphicsUnit]::Pixel)

$crop.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$crop.Dispose()
$img.Dispose()

Write-Host "Successfully cropped circular emblem to $destPath"
