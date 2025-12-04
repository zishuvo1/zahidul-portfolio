// ===== Mobile Menu Toggle =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// ===== Smooth Scroll on Menu Click =====
const links = document.querySelectorAll('.nav-links li a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({ behavior: 'smooth' });

        navLinks.classList.remove('active');
    });
});

// ===== Fade-in Animation Observer =====
const fadeItems = document.querySelectorAll(
    'section, .skill-card, .project-card, .cert-img'
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
