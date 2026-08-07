```javascript
// =============================
// === MOBILE MENU TOGGLE ======
// =============================

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

}


// =============================
// === SMOOTH SCROLL ===========
// =============================

const links = document.querySelectorAll('.nav-links li a');

links.forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (!targetSection) {
            return;
        }

        const header = document.querySelector('header');
        const offset = header ? header.offsetHeight : 70;

        const elementPosition =
            targetSection.getBoundingClientRect().top +
            window.pageYOffset;

        const offsetPosition =
            elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // Close mobile menu
        if (navLinks) {
            navLinks.classList.remove('active');
        }

    });

});


// =============================
// === FADE-IN ANIMATIONS =====
// =============================

const fadeItems = document.querySelectorAll(
    'section, .skill-card, .project-card, .experience-card, .cert-card'
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('fade-in');

                // Stop observing after animation
                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


// Add fade-section class and observe
fadeItems.forEach(item => {

    item.classList.add('fade-section');

    observer.observe(item);

});


// =============================
// === ACTIVE MENU HIGHLIGHT ===
// =============================

const sections = document.querySelectorAll('section');

function updateActiveMenu() {

    let current = '';

    const scrollPosition = window.pageYOffset;

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 100;

        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionBottom
        ) {
            current = section.getAttribute('id');
        }

    });


    links.forEach(link => {

        link.classList.remove('active-link');

        const linkTarget =
            link.getAttribute('href').substring(1);

        if (linkTarget === current) {
            link.classList.add('active-link');
        }

    });

}


// Update active menu while scrolling
window.addEventListener('scroll', updateActiveMenu);


// Run once when page loads
updateActiveMenu();


// =============================
// === CLOSE MENU OUTSIDE ======
// =============================

document.addEventListener('click', event => {

    if (!menuToggle || !navLinks) {
        return;
    }

    const clickedInsideMenu =
        navLinks.contains(event.target);

    const clickedToggle =
        menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
        navLinks.classList.remove('active');
    }

});
```
