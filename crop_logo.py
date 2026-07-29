from PIL import Image

img = Image.open('MGC_Logo.png')
w, h = img.size

# Crop the left circular emblem (height x height)
# Adding a small right padding if needed to be exact
crop_box = (0, 0, h, h)
cropped = img.crop(crop_box)
cropped.save('public/mgc-logo-icon.png')
print(f"Successfully cropped emblem to public/mgc-logo-icon.png: size {cropped.size}")
