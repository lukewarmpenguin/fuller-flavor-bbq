# 🔥 Fuller Flavor BBQ — Website

**Live site:** [fullerflavor.com](https://fullerflavor.com)

---

## 📁 Folder Structure (IMPORTANT — Read This First)

```
fuller-flavor-bbq/              ← Your repo (the root folder)
│
├── index.html                  ← The website (ONE file — everything is in here)
├── fuller_flavor_logo.png      ← The logo (used by the site — DO NOT rename)
├── build-gallery.sh            ← Script: rebuilds the event photo gallery
├── optimize-images.sh          ← Script: resizes/compresses new photos
├── .gitignore                  ← Tells Git to ignore junk files
├── README.md                   ← This file
│
├── gallery/                    ← MAIN GALLERY PHOTOS (Our BBQ page + hero images)
│   ├── pitmaster-grilling.jpg
│   ├── whole-hog-blue.jpg
│   ├── ribs-closeup.jpg
│   ├── ... (38 photos total)
│   └── team-photo.jpg
│
└── events/                     ← EVENT PHOTOS (Catering "Past Events" section)
    ├── johnson-wedding/        ← One folder per event
    │   ├── photo1.jpg
    │   ├── photo2.jpg
    │   └── ...
    ├── smith-reunion/
    │   ├── photo1.jpg
    │   └── ...
    └── (add more event folders as needed)
```

### What goes where:

| Folder | What goes in it | When to add to it |
|--------|----------------|-------------------|
| `gallery/` | The core BBQ photos (meats, pitmaster, whole hog, sides, team) | Rarely — only when you get new "general" BBQ photos |
| `events/` | Photos from specific catering events | Every time Fuller Flavor does an event |
| Root folder | `index.html`, logo, scripts | Don't add files here unless needed |

---

## 🚀 FIRST-TIME SETUP (Do This Once)

### Step 1: Create the GitHub Repo

1. Go to [github.com/new](https://github.com/new)
2. Name it: `fuller-flavor-bbq`
3. Set it to **Public** (required for free Netlify hosting)
4. Do NOT check "Add a README" (we already have one)
5. Click **Create repository**
6. GitHub will show you setup commands — you'll use those in Step 3

### Step 2: Set Up the Project on Your Computer

Open your terminal and run:

```bash
# Navigate to where you want the project folder
cd ~/Desktop    # (or wherever you keep projects)

# Clone the empty repo
git clone https://github.com/YOUR-USERNAME/fuller-flavor-bbq.git

# Go into the folder
cd fuller-flavor-bbq
```

### Step 3: Add Your Files

Now copy ALL of these files into the `fuller-flavor-bbq` folder:

1. **`index.html`** — the website file (I'm giving you this)
2. **`fuller_flavor_logo.png`** — the logo file (you already have this)
3. **`build-gallery.sh`** — the gallery script (I'm giving you this)
4. **`optimize-images.sh`** — the image optimizer script (I'm giving you this)
5. **`.gitignore`** — git ignore rules (I'm giving you this)
6. **`README.md`** — this file (I'm giving you this)
7. **`gallery/`** — Create this folder and put all 38 BBQ photos in it
8. **`events/`** — Create this empty folder (you'll add event photos later)

Your folder should now look like the structure diagram at the top.

### Step 4: Push to GitHub

```bash
git add .
git commit -m "Initial site setup"
git push origin main
```

If Git asks about `main` vs `master`, use whatever branch it created. You can check with `git branch`.

### Step 5: Connect Netlify to GitHub

1. Log into [app.netlify.com](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub**
4. Select the `fuller-flavor-bbq` repo
5. Settings should be:
   - **Branch to deploy:** `main`
   - **Build command:** (leave blank)
   - **Publish directory:** (leave blank — or type `.` )
6. Click **Deploy site**

### Step 6: Set Your Custom Domain

1. In Netlify, go to **Domain management**
2. Click **"Add a domain you already own"**
3. Enter: `fullerflavor.com`
4. Follow Netlify's instructions to point your DNS (they'll walk you through it)
5. Enable **HTTPS** (Netlify does this free with Let's Encrypt)

**That's it. Your site is now live at fullerflavor.com** 🎉

Every time you `git push`, Netlify automatically rebuilds and deploys.

---

## 📸 ADDING NEW EVENT PHOTOS (Your Regular Workflow)

This is what you'll do every time Fuller Flavor sends you photos from an event.

### The Quick Version (once you've done it a few times)

```bash
# 1. Create a folder for the event
mkdir events/johnson-wedding

# 2. Drop the photos into that folder (use Finder/Explorer)

# 3. Optimize the images (optional but recommended)
./optimize-images.sh

# 4. Rebuild the gallery
./build-gallery.sh

# 5. Push to GitHub (Netlify auto-deploys)
git add .
git commit -m "Added photos from Johnson wedding"
git push
```

### The Detailed Version (with explanations)

**Step 1: Create an event folder**

In your `fuller-flavor-bbq/events/` folder, create a new folder named after the event. Use lowercase and hyphens:

```
events/johnson-wedding/
events/smith-family-reunion/
events/corporate-bbq-march-2026/
```

The folder name becomes the display name on the site — hyphens turn into spaces and words get capitalized. So `johnson-wedding` becomes "Johnson Wedding" in the alt text.

**Step 2: Drop the photos in**

Take the photos Fuller Flavor sends you and put them in that event folder. Any of these formats work: `.jpg`, `.jpeg`, `.png`, `.webp`

**Step 3: Optimize (recommended)**

If the photos are straight from a phone camera, they're probably 3-8MB each. Run the optimizer to shrink them for web:

```bash
./optimize-images.sh
```

This resizes them to max 800px and compresses them. A 5MB photo becomes ~100KB. Your site stays fast.

> **Note:** You need ImageMagick installed for this. The script will tell you how to install it if you don't have it.  
> **If you don't want to install ImageMagick**, you can skip this step — the site will still work, the photos will just load slower.

**Step 4: Build the gallery**

```bash
./build-gallery.sh
```

This scans all the event folders and updates the "Past Events" gallery section in `index.html` automatically. You'll see output like:

```
🔥 Fuller Flavor BBQ — Gallery Builder
============================================
Found 2 event folder(s)

  📁 Johnson Wedding — 25 photo(s)
  📁 Smith Family Reunion — 12 photo(s)

📸 Total new event photos: 37

✅ Done! Gallery rebuilt with 37 event photos.
```

**Step 5: Push to GitHub**

```bash
git add .
git commit -m "Added photos from Johnson wedding"
git push
```

Netlify picks up the push and your site is updated in about 30 seconds.

---

## 🖼️ ADDING NEW PHOTOS TO THE MAIN GALLERY (Our BBQ Page)

The "Our BBQ" page gallery is different from the catering events gallery. It shows the core BBQ photos organized by category (Pitmaster, Whole Hog, Meats, Sides, Team).

To add photos here, you need to:

1. Put the new photo in the `gallery/` folder
2. Open `index.html` in a text editor
3. Find the `BBQ_ITEMS` array (search for `BBQ_ITEMS`)
4. Add a new line like:

```javascript
{ name: "New Ribs Photo", cat: "meats", img: "gallery/new-ribs.jpg" },
```

The `cat` value must be one of: `pitmaster`, `wholehog`, `meats`, `sides`, `team`

5. Save, then `git add . && git commit -m "Added new BBQ photo" && git push`

---

## 📋 CHEAT SHEET

| I want to... | Do this |
|---------------|---------|
| Add event photos | Make folder in `events/` → drop photos → `./optimize-images.sh` → `./build-gallery.sh` → git push |
| Add a BBQ gallery photo | Put image in `gallery/` → edit `BBQ_ITEMS` in `index.html` → git push |
| Change the logo | Replace `fuller_flavor_logo.png` with the new file (SAME filename) → git push |
| Update text/prices | Edit `index.html` → git push |
| Update the email | Search `index.html` for the old email → replace all instances → git push |
| See if the site is deployed | Check [app.netlify.com](https://app.netlify.com) → your site → Deploys |
| Undo a bad deploy | In Netlify → Deploys → click a previous deploy → "Publish deploy" |

---

## ⚠️ THINGS TO REMEMBER

1. **Don't rename `index.html`** — Netlify looks for this exact filename
2. **Don't rename `fuller_flavor_logo.png`** — The site references this exact name
3. **Don't rename or reorganize the `gallery/` folder** — All 38 photos are referenced by exact filename in `index.html`
4. **Event folder names should be lowercase with hyphens** — Like `johnson-wedding`, not `Johnson Wedding`
5. **Run `build-gallery.sh` after adding event photos** — Otherwise they won't show on the site
6. **Large photos slow down the site** — Run `optimize-images.sh` when adding phone/camera photos

---

## 🔧 TROUBLESHOOTING

**"Permission denied" when running scripts**
```bash
chmod +x build-gallery.sh optimize-images.sh
```

**Photos not showing on the site**
- Check that the image filenames match exactly (case-sensitive!)
- Make sure you ran `build-gallery.sh` after adding event photos
- Check that you pushed to GitHub (`git push`)

**Netlify not deploying**
- Go to app.netlify.com → your site → Deploys
- Check if there's a failed deploy (red) — click it for details
- Make sure your repo is connected (Site settings → Build & deploy)

**Site shows old version**
- Hard refresh your browser: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Check Netlify to confirm the deploy went through

**"build-gallery.sh: command not found"**
- Make sure you're in the project folder: `cd fuller-flavor-bbq`
- Use `./build-gallery.sh` (with the `./` prefix)

---

*Last updated: February 2026*
