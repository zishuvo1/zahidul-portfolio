/* ===== MAIN JAVASCRIPT ===== */

document.addEventListener('DOMContentLoaded', () => {

    /* ===== 1. SMOOTH SCROLLING FOR NAVBAR LINKS ===== */
    const navLinks = document.querySelectorAll('.nav-links a, .hero-content a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // কেবল পেজের ভেতরের সেকশন লিংকের জন্য কাজ করবে
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerHeight = document.getElementById('header').offsetHeight;
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    /* ===== 2. ACTIVE NAVBAR LINK ON SCROLL ===== */
    const sections = document.querySelectorAll('section[id]');

    function highlightNavOnScroll() {
        const scrollY = window.pageYOffset;
        const headerHeight = document.getElementById('header').offsetHeight;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - headerHeight - 60;
            const sectionId = current.getAttribute('id');
            const navItem = document.querySelector(`.nav-links a[href*="${sectionId}"]`);

            if (navItem) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navItem.classList.add('active');
                } else {
                    navItem.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavOnScroll);

    /* ===== 3. NAVBAR SHADOW & BACKGROUND ON SCROLL ===== */
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.05)';
            header.style.background = 'rgba(255, 255, 255, 0.8)';
        }
    });

});
