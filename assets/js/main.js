// ==========================================================================
// MOBILE MENU TOGGLE
// ==========================================================================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// ==========================================================================
// SMOOTH SCROLL WITH HEADER OFFSET
// ==========================================================================
const links = document.querySelectorAll('.nav-links li a');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');

    // Section লিঙ্ক না হলে (যেমন: বাহিরের লিঙ্ক বা শুধুমাত্র #) আসল বিহেভিয়ার বজায় রাখবে
    if (!targetId || !targetId.startsWith('#') || targetId === '#') return;

    e.preventDefault();
    const targetSection = document.getElementById(targetId.substring(1));

    if (targetSection) {
      const offset = 70; // হেডার হাইট
      const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // মোবাইল মেনু অপেন থাকলে স্ক্রোল করার পর বন্ধ করে দেবে
      if (navLinks) {
        navLinks.classList.remove('active');
      }
    }
  });
});

// ==========================================================================
// FADE-IN ANIMATIONS (INTERSECTION OBSERVER)
// ==========================================================================
const fadeItems = document.querySelectorAll(
  'section, .skill-card, .project-card, .cert-card'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.2 });

// fade-section ক্লাস যুক্ত করে Observer এ ট্র্যাক করা
fadeItems.forEach(item => {
  item.classList.add('fade-section');
  observer.observe(item);
});

// ==========================================================================
// ACTIVE MENU HIGHLIGHT ON SCROLL
// ==========================================================================
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80; // হেডার অফসেট
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.classList.remove('active-link');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active-link');
    }
  });
});
