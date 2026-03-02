/* ========== GALLERY DATA (Real photos in gallery/ folder) ========== */
const BBQ_ITEMS = [
    // The Pitmaster
    { name: "On the Smoker", cat: "pitmaster", img: "gallery/pitmaster-grilling.jpg" },
    { name: "Cutting Ribs", cat: "pitmaster", img: "gallery/cutting-ribs.jpg" },
    { name: "The Pitmaster at Work", cat: "pitmaster", img: "gallery/pitmaster-cutting.jpg" },
    { name: "Whole Hog Prep", cat: "pitmaster", img: "gallery/whole-hog-prep.jpg" },
    { name: "Pulling Pork", cat: "pitmaster", img: "gallery/pulling-pork.jpg" },

    // Whole Hog
    { name: "Whole Hog on the Smoker", cat: "wholehog", img: "gallery/whole-hog-blue.jpg" },
    { name: "Whole Hog — Ready to Serve", cat: "wholehog", img: "gallery/whole-hog-sauce.jpg" },
    { name: "Whole Hog — Golden", cat: "wholehog", img: "gallery/whole-hog-smoker.jpg" },
    { name: "Checking the Temp", cat: "wholehog", img: "gallery/whole-hog-temp.jpg" },
    { name: "Basting the Hog", cat: "wholehog", img: "gallery/whole-hog-spray.jpg" },

    // The Meats
    { name: "Smoked Ribs", cat: "meats", img: "gallery/ribs-closeup.jpg" },
    { name: "Smoked Brisket", cat: "meats", img: "gallery/smoked-brisket.jpg" },
    { name: "Smoked Wings", cat: "meats", img: "gallery/smoked-wings.jpg" },
    { name: "Smoked Ham", cat: "meats", img: "gallery/smoked-ham.jpg" },
    { name: "Chicken on the Grill", cat: "meats", img: "gallery/chicken-on-grill.jpg" },

    // Sides
    { name: "Cornbread", cat: "sides", img: "gallery/cornbread.jpg" },
    { name: "Candied Yams", cat: "sides", img: "gallery/candied-yams.jpg" },

    // The Team
    { name: "The Fuller Flavor Family", cat: "team", img: "gallery/team-photo.jpg" },

    // The Sauce
    { name: "Homemade BBQ Sauce", cat: "sauce", img: "gallery/bbq-sauce-jar.jpg" },
    { name: "Sauce on the Stove", cat: "sauce", img: "gallery/bbq-sauce-pot.jpg" },

    // Catering
    { name: "Sides Spread", cat: "catering", img: "gallery/catering-sides-spread.jpg" },
    { name: "The Full Spread", cat: "catering", img: "gallery/catering-spread.jpg" },

    // Additional Meats
    { name: "Finished Ribs", cat: "meats", img: "gallery/finished-ribs.jpg" },
    { name: "Full Smoker of Ribs", cat: "meats", img: "gallery/full-smoker-ribs.jpg" },
    { name: "Glazed Wings", cat: "meats", img: "gallery/glazed-wings.jpg" },
    { name: "Ribs on the Smoker", cat: "meats", img: "gallery/ribs-on-smoker.jpg" },
    { name: "Smoked Ham Hock", cat: "meats", img: "gallery/smoked-ham-grate.jpg" },
    { name: "Wings on the Grill", cat: "meats", img: "gallery/smoked-wings-grill.jpg" },
    { name: "Wings on the Grate", cat: "meats", img: "gallery/wings-on-grate.jpg" },

    // Additional Sides
    { name: "Mac & Cheese", cat: "sides", img: "gallery/mac-and-cheese.jpg" },
    { name: "Fresh Lemonade", cat: "sides", img: "gallery/lemonade-jug.jpg" },

    // Additional Whole Hog
    { name: "Lifting the Hog", cat: "wholehog", img: "gallery/lifting-whole-hog.jpg" },
    { name: "Whole Hog on the Grate", cat: "wholehog", img: "gallery/whole-hog-on-grate.jpg" },
    { name: "Whole Hog Outdoors", cat: "wholehog", img: "gallery/whole-hog-outdoor.jpg" },
    { name: "Whole Hog Ribs Close-Up", cat: "wholehog", img: "gallery/whole-hog-ribs-closeup.jpg" },
    { name: "Whole Hog Smoke Ring", cat: "wholehog", img: "gallery/whole-hog-smoke-ring.jpg" },
    { name: "Whole Hog Smoking", cat: "wholehog", img: "gallery/whole-hog-smoking.jpg" },

    // Additional Pitmaster
    { name: "Prepping the Hog", cat: "pitmaster", img: "gallery/pitmaster-prep.jpg" },

    // Beef Ribs
    { name: "Beef Ribs — Bone In", cat: "meats", img: "gallery/beef-ribs-bones.jpg" },
    { name: "Beef Ribs — Dark Bark", cat: "meats", img: "gallery/beef-ribs-bark.jpg" },
    { name: "Beef Ribs — Sliced", cat: "meats", img: "gallery/beef-ribs-sliced.jpg" },
    { name: "Beef Ribs — Plated", cat: "meats", img: "gallery/beef-ribs-tray.jpg" },
    { name: "Beef Ribs — Close-Up", cat: "meats", img: "gallery/beef-ribs-closeup.jpg" },
];

const BBQ_CATS = ['all', 'pitmaster', 'wholehog', 'meats', 'sides', 'sauce', 'catering', 'team'];
const BBQ_CAT_LABELS = { all: 'All', pitmaster: 'The Pitmaster', wholehog: 'Whole Hog', meats: 'The Meats', sides: 'Sides', sauce: 'The Sauce', catering: 'Catering', team: 'The Team' };

function initBBQTabs() {
    const t = document.getElementById('bbqTabs');
    if (!t) return;
    t.innerHTML = BBQ_CATS.map((c, i) =>
        `<button class="btab${i === 0 ? ' on' : ''}" onclick="filterBBQ('${c}',this)">${BBQ_CAT_LABELS[c]}</button>`
    ).join('');
}

function renderBBQ(filter = 'all') {
    const g = document.getElementById('bbqGrid');
    if (!g) return;
    const list = filter === 'all' ? BBQ_ITEMS : BBQ_ITEMS.filter(i => i.cat === filter);
    g.innerHTML = list.map(i => `
        <div class="bcard">
            <img src="${i.img}" alt="${i.name}" loading="lazy">
            <div class="bcard-overlay"><span class="bcard-name">${i.name}</span></div>
        </div>
    `).join('');
}

function filterBBQ(cat, el) {
    document.querySelectorAll('.btab').forEach(b => b.classList.remove('on'));
    el.classList.add('on');
    renderBBQ(cat);
}

/* ========== NAVIGATION ========== */
let currentPage = 'home';

function navigateTo(page) {
    // Close menu if open
    document.getElementById('menuOverlay').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
    document.body.style.overflow = '';

    // Hide current page
    const current = document.getElementById('page-' + currentPage);
    if (current) {
        current.classList.remove('visible');
        setTimeout(() => {
            current.classList.remove('active');

            // Show new page
            const next = document.getElementById('page-' + page);
            if (next) {
                next.classList.add('active');
                window.scrollTo(0, 0);
                // Small delay for transition
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        next.classList.add('visible');
                    });
                });
            }

            currentPage = page;

            // Update active state in overlay links
            document.querySelectorAll('.nav-links a').forEach(a => {
                a.classList.toggle('active', a.dataset.page === page);
            });

            // Render BBQ grid if navigating to bbq page
            if (page === 'bbq') {
                initBBQTabs();
                renderBBQ();
            }
        }, 300);
    }

    return false;
}

function toggleMenu() {
    const overlay = document.getElementById('menuOverlay');
    const hamburger = document.getElementById('hamburger');
    overlay.classList.toggle('open');
    hamburger.classList.toggle('open');
    document.body.style.overflow = overlay.classList.contains('open') ? 'hidden' : '';
}

function toast(msg) {
    const el = document.getElementById('toastEl');
    const msgEl = document.getElementById('toastMsg');
    msgEl.textContent = msg;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 3500);
}

/* ========== SCROLL LISTENER ========== */
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 60) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

/* ========== INIT ========== */
document.addEventListener('DOMContentLoaded', () => {
    const homePage = document.getElementById('page-home');
    if (homePage) {
        homePage.classList.add('active');
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                homePage.classList.add('visible');
            });
        });
    }

    // Set active state on nav links
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.toggle('active', a.dataset.page === 'home');
    });
});
