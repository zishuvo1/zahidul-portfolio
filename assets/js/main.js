// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
const links = document.querySelectorAll('.nav-links li a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        // Close menu on mobile after click
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// ===== FADE-IN ANIMATION ON SCROLL =====
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    section.classList.add('fade-section');
    observer.observe(section);
});
