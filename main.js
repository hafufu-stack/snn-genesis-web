// main.js — SNN-Genesis website interactions

// === Floating Particles in Hero ===
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const count = 30;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (8 + Math.random() * 12) + 's';
        p.style.animationDelay = Math.random() * 8 + 's';
        p.style.width = p.style.height = (2 + Math.random() * 3) + 'px';

        // Random colors from palette
        const colors = ['#6c63ff', '#00d68f', '#ff4d6a', '#ffb347', '#fff'];
        p.style.background = colors[Math.floor(Math.random() * colors.length)];

        container.appendChild(p);
    }
}

// === Scroll-triggered Fade In ===
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const targets = document.querySelectorAll(
        '.section-header, .discovery-card, .timeline-item, .principle-card, .link-card'
    );
    targets.forEach(el => observer.observe(el));
}

// === Nav Background on Scroll ===
function initNavScroll() {
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(10, 10, 26, 0.95)';
        } else {
            nav.style.background = 'rgba(10, 10, 26, 0.85)';
        }
    });
}

// === Mobile Menu Toggle ===
function toggleMenu() {
    const links = document.querySelector('.nav-links');
    links.classList.toggle('open');
}

// === Smooth Scroll for Nav Links ===
function initSmoothScroll() {
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Close mobile menu
                document.querySelector('.nav-links').classList.remove('open');
            }
        });
    });
}

// === Number Counter Animation ===
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('counted');
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => observer.observe(el));
}

// === Init ===
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initScrollAnimations();
    initNavScroll();
    initSmoothScroll();
    animateNumbers();
});
