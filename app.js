/* ========== GALLERY DATA (Real photos in gallery/ folder) ========== */
var BBQ_ITEMS = [
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
    { name: "Beef Ribs — Close-Up", cat: "meats", img: "gallery/beef-ribs-closeup.jpg" }
];

var BBQ_CATS = ['all', 'pitmaster', 'wholehog', 'meats', 'sides', 'sauce', 'catering', 'team'];
var BBQ_CAT_LABELS = { all: 'All', pitmaster: 'The Pitmaster', wholehog: 'Whole Hog', meats: 'The Meats', sides: 'Sides', sauce: 'The Sauce', catering: 'Catering', team: 'The Team' };

/* ========== EMAILJS CONFIGURATION ========== */
/*
 *  HOW TO SET UP (one-time, ~5 minutes):
 *
 *  1. Go to https://www.emailjs.com and create a free account
 *  2. Dashboard > Email Services > Add New Service > Yahoo
 *     - Connect your fullerflavor@yahoo.com account
 *     - Copy the Service ID (e.g. "service_abc123") and paste below
 *  3. Dashboard > Email Templates > Create New Template
 *     - Create TWO templates (one for Contact, one for Catering)
 *     - Paste the HTML templates provided in the separate template files
 *     - Copy each Template ID and paste below
 *  4. Dashboard > Account > API Keys > Copy your Public Key and paste below
 *
 *  That's it! Replace the three placeholder values below and you're live.
 */
var EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY_HERE';        // From: Account > API Keys
var EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID_HERE';        // From: Email Services
var EMAILJS_CONTACT_TEMPLATE  = 'YOUR_CONTACT_TEMPLATE_ID';  // Template for Contact form
var EMAILJS_CATERING_TEMPLATE = 'YOUR_CATERING_TEMPLATE_ID';  // Template for Catering form


/* ========== GALLERY ========== */
function initBBQTabs() {
    var t = document.getElementById('bbqTabs');
    if (!t) return;
    t.innerHTML = BBQ_CATS.map(function(c, i) {
        return '<button class="btab' + (i === 0 ? ' on' : '') + '" data-cat="' + c + '">' + BBQ_CAT_LABELS[c] + '</button>';
    }).join('');
    // Bind tab clicks via event delegation
    t.addEventListener('click', function(e) {
        var btn = e.target.closest('.btab');
        if (!btn) return;
        t.querySelectorAll('.btab').forEach(function(b) { b.classList.remove('on'); });
        btn.classList.add('on');
        renderBBQ(btn.dataset.cat);
    });
}

function renderBBQ(filter) {
    filter = filter || 'all';
    var g = document.getElementById('bbqGrid');
    if (!g) return;
    var list = filter === 'all' ? BBQ_ITEMS : BBQ_ITEMS.filter(function(i) { return i.cat === filter; });
    g.innerHTML = list.map(function(i) {
        return '<div class="bcard"><img src="' + i.img + '" alt="' + i.name + '" loading="lazy"><div class="bcard-overlay"><span class="bcard-name">' + i.name + '</span></div></div>';
    }).join('');
}

/* ========== NAVIGATION ========== */
var currentPage = 'home';

function navigateTo(page) {
    document.getElementById('menuOverlay').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
    document.body.style.overflow = '';

    var current = document.getElementById('page-' + currentPage);
    if (current) {
        current.classList.remove('visible');
        setTimeout(function() {
            current.classList.remove('active');

            var next = document.getElementById('page-' + page);
            if (next) {
                next.classList.add('active');
                window.scrollTo(0, 0);
                requestAnimationFrame(function() {
                    requestAnimationFrame(function() {
                        next.classList.add('visible');
                    });
                });
            }

            currentPage = page;

            document.querySelectorAll('.nav-links a').forEach(function(a) {
                a.classList.toggle('active', a.dataset.page === page);
            });

            if (page === 'bbq') {
                initBBQTabs();
                renderBBQ();
            }
        }, 300);
    }

    return false;
}

function toggleMenu() {
    var overlay = document.getElementById('menuOverlay');
    var hamburger = document.getElementById('hamburger');
    overlay.classList.toggle('open');
    hamburger.classList.toggle('open');
    document.body.style.overflow = overlay.classList.contains('open') ? 'hidden' : '';
}

function toast(msg, isError) {
    var el = document.getElementById('toastEl');
    var msgEl = document.getElementById('toastMsg');
    msgEl.textContent = msg;
    // Add error styling if needed
    if (isError) {
        el.style.borderColor = '#d44a3a';
    } else {
        el.style.borderColor = '';
    }
    el.classList.add('show');
    setTimeout(function() { el.classList.remove('show'); }, 4000);
}

/* ========== EMAIL SENDING (EmailJS) ========== */

function setButtonLoading(btn, loading) {
    if (loading) {
        btn.dataset.originalText = btn.textContent;
        btn.textContent = 'Sending...';
        btn.disabled = true;
        btn.style.opacity = '0.6';
        btn.style.cursor = 'not-allowed';
    } else {
        btn.textContent = btn.dataset.originalText || 'Submit';
        btn.disabled = false;
        btn.style.opacity = '';
        btn.style.cursor = '';
    }
}

function sendContactForm(form) {
    var btn = form.querySelector('button[type="submit"]');
    setButtonLoading(btn, true);

    // Gather form data — matches the {{variable}} names in the Contact email template
    var inputs = form.querySelectorAll('.fi, .fs, .ft');
    var templateParams = {
        from_name:   inputs[0].value,   // Name
        phone:       inputs[1].value,   // Phone
        email:       inputs[2].value,   // Email
        subject:     inputs[3].value,   // Subject (select)
        message:     inputs[4].value    // Message (textarea)
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_CONTACT_TEMPLATE, templateParams)
        .then(function() {
            toast('Message sent! We\'ll get back to you soon.');
            form.reset();
            setButtonLoading(btn, false);
        })
        .catch(function(err) {
            console.error('EmailJS error:', err);
            toast('Something went wrong. Please try again or email us directly at fullerflavor@yahoo.com.', true);
            setButtonLoading(btn, false);
        });
}

function sendCateringForm(form) {
    var btn = form.querySelector('button[type="submit"]');
    setButtonLoading(btn, true);

    // Gather form data — matches the {{variable}} names in the Catering email template
    var inputs = form.querySelectorAll('.fi, .fs, .ft');
    var templateParams = {
        from_name:     inputs[0].value,   // Name
        phone:         inputs[1].value,   // Phone
        email:         inputs[2].value,   // Email
        event_date:    inputs[3].value,   // Event Date
        guests:        inputs[4].value,   // Number of Guests
        package_name:  inputs[5].value,   // Package (select)
        event_details: inputs[6].value    // Event Details (textarea)
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_CATERING_TEMPLATE, templateParams)
        .then(function() {
            toast('Catering request submitted! We\'ll contact you within 24 hours.');
            form.reset();
            setButtonLoading(btn, false);
        })
        .catch(function(err) {
            console.error('EmailJS error:', err);
            toast('Something went wrong. Please try again or email us directly at fullerflavor@yahoo.com.', true);
            setButtonLoading(btn, false);
        });
}


/* ========== SCROLL LISTENER ========== */
window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (window.scrollY > 60) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

/* ========== INIT — ALL EVENT BINDING HAPPENS HERE ========== */
document.addEventListener('DOMContentLoaded', function() {

    // ── Initialize EmailJS ──
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    } else {
        console.warn('EmailJS SDK not loaded. Forms will not send emails.');
    }

    // Show home page
    var homePage = document.getElementById('page-home');
    if (homePage) {
        homePage.classList.add('active');
        requestAnimationFrame(function() {
            requestAnimationFrame(function() {
                homePage.classList.add('visible');
            });
        });
    }

    // Set active state on nav links
    document.querySelectorAll('.nav-links a').forEach(function(a) {
        a.classList.toggle('active', a.dataset.page === 'home');
    });

    // Hamburger menu
    var hamburger = document.getElementById('hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    // Nav logo click -> home
    var navHome = document.getElementById('navHome');
    if (navHome) {
        navHome.addEventListener('click', function() { navigateTo('home'); });
    }

    // Overlay nav links (have data-page attribute)
    document.querySelectorAll('.nav-links a[data-page]').forEach(function(a) {
        a.addEventListener('click', function(e) {
            e.preventDefault();
            navigateTo(a.dataset.page);
        });
    });

    // All elements with data-nav attribute (hero CTAs, footer nav links)
    document.querySelectorAll('[data-nav]').forEach(function(el) {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            navigateTo(el.dataset.nav);
        });
    });

    // Hero arrow scroll
    var heroArrow = document.getElementById('heroArrow');
    if (heroArrow) {
        heroArrow.addEventListener('click', function() {
            var about = document.getElementById('about-section');
            if (about) about.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // ── Catering form → sends email via EmailJS ──
    var cateringForm = document.getElementById('cateringForm');
    if (cateringForm) {
        cateringForm.addEventListener('submit', function(e) {
            e.preventDefault();
            sendCateringForm(cateringForm);
        });
    }

    // ── Contact form → sends email via EmailJS ──
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            sendContactForm(contactForm);
        });
    }
});
