// =============================
// === MOBILE MENU TOGGLE ======
// =============================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// =============================
// === SMOOTH SCROLL ===========
 // =============================
const links = document.querySelectorAll('.nav-links li a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        const offset = 70; // header height
        const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });

        navLinks.classList.remove('active');
    });
});

// =============================
// === FADE-IN ANIMATIONS =====
// =============================
const fadeItems = document.querySelectorAll(
    'section, .skill-card, .project-card, .cert-card'
);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.2 });

// Add fade-section class and observe
fadeItems.forEach(item => {
    item.classList.add('fade-section');
    observer.observe(item);
});

// =============================
// === ACTIVE MENU HIGHLIGHT ===
// =============================
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80; // header offset
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    links.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active-link');
        }
    });
});
