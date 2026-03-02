#!/bin/bash
# ============================================================
# Fuller Flavor BBQ — Image Optimizer
# ============================================================
# Resizes and compresses images in /events/ subfolders
# so they load fast on the website.
#
# REQUIRES: ImageMagick (install with: brew install imagemagick)
#   On Windows: download from https://imagemagick.org/script/download.php
#
# USAGE:
#   ./optimize-images.sh
#
# WHAT IT DOES:
#   - Resizes any image larger than 800px (longest side) down to 800px
#   - Compresses JPEGs to 78% quality
#   - Strips EXIF data (removes GPS location info, camera metadata)
#   - Fixes rotation issues from phone photos
#   - SKIPS images that are already small enough
#
# RUN THIS BEFORE build-gallery.sh when adding new event photos.
# ============================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
EVENTS_DIR="$SCRIPT_DIR/events"
MAX_SIZE=800
QUALITY=78

GREEN='\033[0;32m'
ORANGE='\033[0;33m'
NC='\033[0m'

echo ""
echo -e "${ORANGE}🔥 Fuller Flavor BBQ — Image Optimizer${NC}"
echo "============================================"

# Check for ImageMagick
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick is not installed."
    echo ""
    echo "Install it:"
    echo "  Mac:     brew install imagemagick"
    echo "  Ubuntu:  sudo apt install imagemagick"
    echo "  Windows: https://imagemagick.org/script/download.php"
    echo ""
    echo "Then re-run this script."
    exit 1
fi

if [ ! -d "$EVENTS_DIR" ]; then
    echo "ℹ️  No /events/ folder found. Nothing to optimize."
    exit 0
fi

OPTIMIZED=0
SKIPPED=0

find "$EVENTS_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) | while read -r IMG; do
    FILENAME=$(basename "$IMG")
    
    # Get current dimensions
    WIDTH=$(identify -format "%w" "$IMG" 2>/dev/null || echo "0")
    HEIGHT=$(identify -format "%h" "$IMG" 2>/dev/null || echo "0")
    
    if [ "$WIDTH" -le "$MAX_SIZE" ] && [ "$HEIGHT" -le "$MAX_SIZE" ]; then
        echo "  ⏭️  $FILENAME (${WIDTH}x${HEIGHT}) — already optimized"
        SKIPPED=$((SKIPPED + 1))
        continue
    fi
    
    FILESIZE_BEFORE=$(du -k "$IMG" | cut -f1)
    
    # Resize, compress, strip EXIF, fix rotation
    convert "$IMG" \
        -auto-orient \
        -resize "${MAX_SIZE}x${MAX_SIZE}>" \
        -quality $QUALITY \
        -strip \
        "$IMG"
    
    FILESIZE_AFTER=$(du -k "$IMG" | cut -f1)
    NEW_WIDTH=$(identify -format "%w" "$IMG" 2>/dev/null)
    NEW_HEIGHT=$(identify -format "%h" "$IMG" 2>/dev/null)
    
    echo -e "  ${GREEN}✅ $FILENAME${NC} — ${WIDTH}x${HEIGHT} → ${NEW_WIDTH}x${NEW_HEIGHT} (${FILESIZE_BEFORE}KB → ${FILESIZE_AFTER}KB)"
    OPTIMIZED=$((OPTIMIZED + 1))
done

echo ""
echo -e "${GREEN}✅ Done! Optimized images are ready for the gallery.${NC}"
echo ""
echo "Next step: run ./build-gallery.sh"
echo ""
