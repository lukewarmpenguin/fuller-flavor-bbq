#!/bin/bash
# ============================================================
# Fuller Flavor BBQ — Gallery Builder
# ============================================================
# This script scans the /events/ folder for event photos
# and rebuilds the "Past Events" gallery in index.html.
#
# USAGE:
#   ./build-gallery.sh
#
# WHAT IT DOES:
#   1. Scans /events/ for subfolders (each subfolder = one event)
#   2. Finds all .jpg/.jpeg/.png images in each event folder
#   3. Rebuilds the "Past Events" catering gallery HTML
#   4. Injects the updated gallery into index.html
#
# AFTER RUNNING:
#   git add .
#   git commit -m "Added photos from [event name]"
#   git push
#   (Netlify auto-deploys)
# ============================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
HTML_FILE="$SCRIPT_DIR/index.html"
EVENTS_DIR="$SCRIPT_DIR/events"

# Colors for terminal output
GREEN='\033[0;32m'
ORANGE='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo ""
echo -e "${ORANGE}🔥 Fuller Flavor BBQ — Gallery Builder${NC}"
echo "============================================"

# Check that index.html exists
if [ ! -f "$HTML_FILE" ]; then
    echo "❌ Error: index.html not found in $SCRIPT_DIR"
    exit 1
fi

# Check that events folder exists
if [ ! -d "$EVENTS_DIR" ]; then
    echo -e "${BLUE}ℹ️  No /events/ folder found. Nothing to build.${NC}"
    echo "   Create event folders like: events/johnson-wedding/"
    echo "   Then drop photos into them and re-run this script."
    exit 0
fi

# Count event folders
EVENT_COUNT=$(find "$EVENTS_DIR" -mindepth 1 -maxdepth 1 -type d | wc -l)
if [ "$EVENT_COUNT" -eq 0 ]; then
    echo -e "${BLUE}ℹ️  No event folders found in /events/.${NC}"
    echo "   Create folders like: events/johnson-wedding/"
    exit 0
fi

echo -e "${GREEN}Found $EVENT_COUNT event folder(s)${NC}"
echo ""

# Build the gallery HTML
GALLERY_HTML=""
TOTAL_PHOTOS=0

# Also include the original 3 catering photos from gallery/ folder
GALLERY_HTML="$GALLERY_HTML                <img src=\"gallery/whole-hog-sauce.jpg\" alt=\"Whole hog on the smoker\" loading=\"lazy\">\n"
GALLERY_HTML="$GALLERY_HTML                <img src=\"gallery/pitmaster-cutting.jpg\" alt=\"Pitmaster cutting ribs\" loading=\"lazy\">\n"
GALLERY_HTML="$GALLERY_HTML                <img src=\"gallery/chicken-on-grill.jpg\" alt=\"Chicken on the grill\" loading=\"lazy\">\n"

# Loop through each event folder (sorted by name)
for EVENT_DIR in $(find "$EVENTS_DIR" -mindepth 1 -maxdepth 1 -type d | sort); do
    EVENT_NAME=$(basename "$EVENT_DIR")
    
    # Convert folder name to display name (replace hyphens with spaces, title case)
    DISPLAY_NAME=$(echo "$EVENT_NAME" | sed 's/-/ /g' | sed 's/\b\(.\)/\u\1/g')
    
    # Find all image files in this event folder
    PHOTOS=$(find "$EVENT_DIR" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) | sort)
    PHOTO_COUNT=$(echo "$PHOTOS" | grep -c . || true)
    
    if [ "$PHOTO_COUNT" -eq 0 ]; then
        echo -e "  📁 $DISPLAY_NAME — ${ORANGE}no photos found${NC}"
        continue
    fi
    
    echo -e "  📁 $DISPLAY_NAME — ${GREEN}$PHOTO_COUNT photo(s)${NC}"
    
    # Add each photo to the gallery HTML
    while IFS= read -r PHOTO_PATH; do
        if [ -n "$PHOTO_PATH" ]; then
            # Make path relative to project root
            REL_PATH="${PHOTO_PATH#$SCRIPT_DIR/}"
            FILENAME=$(basename "$PHOTO_PATH" | sed 's/\.[^.]*$//' | sed 's/[-_]/ /g' | sed 's/\b\(.\)/\u\1/g')
            GALLERY_HTML="$GALLERY_HTML                <img src=\"$REL_PATH\" alt=\"$DISPLAY_NAME — $FILENAME\" loading=\"lazy\">\n"
            TOTAL_PHOTOS=$((TOTAL_PHOTOS + 1))
        fi
    done <<< "$PHOTOS"
done

echo ""
echo -e "${GREEN}📸 Total new event photos: $TOTAL_PHOTOS${NC}"

# Now inject the gallery HTML into index.html
# We replace everything between the gallery markers
# First, let's create the markers if they don't exist yet

# Check if markers already exist
if grep -q "<!-- EVENTS-GALLERY-START -->" "$HTML_FILE"; then
    echo "🔄 Updating existing gallery..."
else
    echo "🆕 Setting up gallery markers for the first time..."
    # Replace the existing static catering gallery grid content
    # with marked version
    sed -i 's|<div class="cat-gallery-grid">|<div class="cat-gallery-grid">\n                <!-- EVENTS-GALLERY-START -->|' "$HTML_FILE"
    
    # Find the closing </div> after the last gallery image and add end marker
    # The pattern is: the </div> right after the last <img> in cat-gallery-grid
    python3 -c "
import re
with open('$HTML_FILE', 'r') as f:
    content = f.read()

# Find the cat-gallery-grid section and add end marker after its images
pattern = r'(<!-- EVENTS-GALLERY-START -->)(.*?)(</div>\s*</div>\s*</section>)'
match = re.search(pattern, content, re.DOTALL)
if match:
    # Find the last </div> that closes cat-gallery-grid
    # Replace the existing images between START marker and closing div
    old_section = match.group(0)
    # Insert end marker before the closing divs
    new_section = match.group(1) + match.group(2).rstrip()
    # Find where the img tags end and the closing divs begin
    img_section = match.group(2)
    new_section = match.group(1) + img_section.rstrip() + '\n                <!-- EVENTS-GALLERY-END -->\n            ' + match.group(3)
    content = content.replace(old_section, new_section)
    with open('$HTML_FILE', 'w') as f:
        f.write(content)
    print('  ✅ Markers added successfully')
else:
    print('  ⚠️  Could not find gallery section — check index.html manually')
"
fi

# Now replace content between markers
python3 -c "
import re
with open('$HTML_FILE', 'r') as f:
    content = f.read()

gallery_html = '''$(echo -e "$GALLERY_HTML")'''

# Replace everything between the markers
pattern = r'(<!-- EVENTS-GALLERY-START -->).*?(<!-- EVENTS-GALLERY-END -->)'
replacement = r'\1\n' + gallery_html.rstrip() + '\n                \2'
new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)

with open('$HTML_FILE', 'w') as f:
    f.write(new_content)
print('  ✅ Gallery HTML updated in index.html')
"

echo ""
echo -e "${GREEN}✅ Done! Gallery rebuilt with $TOTAL_PHOTOS event photos.${NC}"
echo ""
echo "Next steps:"
echo "  git add ."
echo "  git commit -m \"Updated event gallery\""
echo "  git push"
echo ""
echo -e "${ORANGE}🔥 Netlify will auto-deploy in ~30 seconds after push.${NC}"
echo ""
