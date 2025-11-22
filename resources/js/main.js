AOS.init();
// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const header = document.getElementById('header');
const logoImg = document.querySelectorAll('.logo');
// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save theme preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        logoImg.forEach(item => {
            item.src = './resources/images/logo/logo-white.svg';
        });
    } else {
        localStorage.setItem('theme', 'light');
        logoImg.forEach(item => {
            item.src = './resources/images/logo/logo.svg';
        });
    }
});

// Update logo based on theme
if (body.classList.contains('dark-mode')) {
    logoImg.forEach(item => {
        item.src = './resources/images/logo/logo-white.svg';
    });
} else {
    logoImg.forEach(item => {
        item.src = './resources/images/logo/logo.svg';
    });
}

// Sticky Header on Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY >= 80) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

function openMobileMenu() {
    mobileMenu.classList.add('active');
    mobileMenuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

mobileMenuToggle.addEventListener('click', openMobileMenu);
mobileMenuClose.addEventListener('click', closeMobileMenu);
mobileMenuOverlay.addEventListener('click', closeMobileMenu);

// Mobile Blog Submenu Toggle
const mobileBlogToggle = document.getElementById('mobile-blog-toggle');
const mobileBlogSubmenu = document.getElementById('mobile-blog-submenu');

mobileBlogToggle.addEventListener('click', (e) => {
    e.preventDefault();
    mobileBlogSubmenu.classList.toggle('active');
});

// Active Navigation Link
const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath ||
        (currentPath.startsWith('/blog') && href === '/blog') ||
        (currentPath.startsWith('/portfolio') && href === '/portfolio')) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});


// Modal Toggle
const modal = document.getElementById("authModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");

const modal2 = document.getElementById("authModal2");
const openBtn2 = document.getElementById("openModalBtn2");
const closeBtn2 = document.getElementById("closeModalBtn2");

// Open modal
openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Close modal by clicking X
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the box
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


// Open modal
openBtn2.addEventListener("click", () => {
    modal2.style.display = "flex";
});

// Close modal by clicking X
closeBtn2.addEventListener("click", () => {
    modal2.style.display = "none";
});

// Close modal when clicking outside the box
window.addEventListener("click", (e) => {
    if (e.target === modal2) {
        modal2.style.display = "none";
    }
});

// carousel of swiper


var swiper = new Swiper(".myPortfolioSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    speed: 600,
    breakpoints: {
        // Mobile phones (320px and up)
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // Small mobile (400px and up)
        400: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // Large mobile (480px and up)
        480: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        // Small tablets (600px and up)
        600: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // Tablets (768px and up)
        768: {
            slidesPerView: 2.5,
            spaceBetween: 25
        },
        // Large tablets (992px and up)
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // Desktop (1024px and up)
        1024: {
            slidesPerView: 3.5,
            spaceBetween: 30
        },
        // Large desktop (1200px and up)
        1200: {
            slidesPerView: 4,
            spaceBetween: 35
        },
        // Extra large desktop (1320px and up)
        1320: {
            slidesPerView: 4.5,
            spaceBetween: 40
        },
        // Ultra wide (1440px and up)
        1440: {
            slidesPerView: 5,
            spaceBetween: 40
        }
    }
});