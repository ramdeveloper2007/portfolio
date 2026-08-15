// Typing Animation
const typingTexts = [
    "Software Developer",
    "Python Developer",
    "Web Developer",
    "Computer Engineering Student"
];

let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function typeAnimation() {
    const typingElement = document.querySelector('.typing');
    const currentText = typingTexts[currentTextIndex];

    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, currentCharIndex - 1);
        currentCharIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, currentCharIndex + 1);
        currentCharIndex++;
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && currentCharIndex === currentText.length) {
        speed = 2000;
        isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
        speed = 500;
    }

    setTimeout(typeAnimation, speed);
}

// Scroll Reveal Animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('section');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            element.classList.add('scroll-reveal', 'active');
        }
    });
}

// Counter Animation
function animateCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');

    statNumbers.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        let current = 0;
        const increment = target / 50;
        const updateCount = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current);
                setTimeout(updateCount, 30);
            } else {
                counter.textContent = target;
            }
        };
        updateCount();
    });
}

// Trigger counter animation on scroll
window.addEventListener('scroll', () => {
    const aboutSection = document.querySelector('.about');
    const aboutRect = aboutSection.getBoundingClientRect();

    if (aboutRect.top < window.innerHeight && !aboutSection.classList.contains('animated')) {
        aboutSection.classList.add('animated');
        animateCounter();
    }
});

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
    html.style.colorScheme = 'light';
    document.body.classList.add('light-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('light-mode')) {
        document.body.classList.remove('light-mode');
        html.style.colorScheme = 'dark';
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.body.classList.add('light-mode');
        html.style.colorScheme = 'light';
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.style.display = 'none';
    });
});

// Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filterValue = btn.dataset.filter;

        projectCards.forEach(card => {
            if (filterValue === 'all') {
                card.classList.remove('hidden');
                card.style.opacity = '1';
                card.style.pointerEvents = 'auto';
            } else {
                if (card.dataset.category === filterValue) {
                    card.classList.remove('hidden');
                    card.style.opacity = '1';
                    card.style.pointerEvents = 'auto';
                } else {
                    card.classList.add('hidden');
                    card.style.opacity = '0';
                    card.style.pointerEvents = 'none';
                }
            }
        });
    });
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
        const message = contactForm.querySelector('textarea').value;

        // Simple validation
        if (name && email && subject && message) {
            // Assemble recipient email from the reveal element (keeps email out of raw HTML)
            const revealEl = document.querySelector('.reveal-email[data-user]');
            let recipient = 'contact@example.com';
            if (revealEl && revealEl.dataset.user && revealEl.dataset.domain) {
                recipient = `${revealEl.dataset.user}@${revealEl.dataset.domain}`;
            }

            // Create mailto link using assembled recipient
            const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=From: ${encodeURIComponent(name)} (${encodeURIComponent(email)})%0A%0A${encodeURIComponent(message)}`;

            // Open default email client
            window.location.href = mailtoLink;

            // Reset form
            contactForm.reset();

            // Show success message
            alert('Thank you for your message! Opening your email client...');
        } else {
            alert('Please fill out all fields.');
        }
    });
}

    // Email reveal handlers: assemble recipient from data attributes and open mail client
    function assembleEmailFrom(el) {
        return `${el.dataset.user}@${el.dataset.domain}`;
    }

    document.querySelectorAll('.reveal-email').forEach(el => {
        el.addEventListener('click', (ev) => {
            ev.preventDefault();
            if (!el.dataset.user || !el.dataset.domain) return;
            const recipient = assembleEmailFrom(el);
            window.location.href = `mailto:${recipient}`;
        });
    });

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Progress Indicator
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.documentElement.style.setProperty('--scroll-percent', scrollPercent + '%');
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Start typing animation
    typeAnimation();

    // Initial scroll reveal check
    revealOnScroll();

    // Add scroll event listener for reveal animation
    window.addEventListener('scroll', revealOnScroll);

    // Add loading screen fade out
    window.addEventListener('load', () => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.style.animation = 'fadeOut 0.5s ease forwards 1s';
        }
    });

    // Fade out loading screen after 2 seconds
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen && loadingScreen.parentNode) {
            loadingScreen.parentNode.removeChild(loadingScreen);
        }
    }, 2500);
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skill categories and project cards
document.querySelectorAll('.skill-category, .project-card, .cert-card, .timeline-item').forEach(el => {
    el.classList.add('scroll-reveal');
    observer.observe(el);
});

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 14, 39, 0.98)';
        navbar.style.boxShadow = '0 8px 32px rgba(0, 212, 255, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = '0 8px 32px rgba(0, 212, 255, 0.1)';
    }
});

// Preload images
function preloadImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const imageLoader = new Image();
        imageLoader.src = img.src;
    });
}

window.addEventListener('load', preloadImages);

// Add animation delays to skill categories
const skillCategories = document.querySelectorAll('.skill-category');
skillCategories.forEach((category, index) => {
    category.style.animationDelay = `${index * 0.1}s`;
});

// Add animation delays to project cards
const projects = document.querySelectorAll('.project-card');
projects.forEach((project, index) => {
    project.style.animationDelay = `${index * 0.1}s`;
});

// Responsive navbar for mobile
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.style.display = 'flex';
    }
});

// Performance optimization - Lazy load background images
if ('IntersectionObserver' in window) {
    const lazyElements = document.querySelectorAll('[data-bg]');
    lazyElements.forEach(el => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.backgroundImage = `url(${entry.target.dataset.bg})`;
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(el);
    });
}
