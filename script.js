// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initializeApp();
});

function initializeApp() {
    // Smooth scroll anchor links
    setupSmoothScroll();
    
    // FAQ accordion
    setupFAQAccordion();
    
    // Navbar scroll effect
    setupNavbarScroll();
    
    // Live counter
    setupLiveCounter();
    
    // CTA button scroll to hero
    setupCTAButtons();
}

// ===== SMOOTH SCROLL WITH HEADER OFFSET =====
function setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    const headerHeight = 80;
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href === '#') {
                return;
            }
            
            e.preventDefault();
            
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== FAQ ACCORDION =====
function setupFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach((item, index) => {
        const header = item.querySelector('.faq-header');
        
        header.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach((otherItem, otherIndex) => {
                if (otherIndex !== index && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// ===== NAVBAR SCROLL EFFECT =====
function setupNavbarScroll() {
    const navbar = document.getElementById('navbar');
    const scrollThreshold = 50;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ===== LIVE PLAYER COUNTER =====
function setupLiveCounter() {
    let currentCount = 18290;
    const counterElement = document.getElementById('player-count');
    
    // Auto-increment every 3 seconds
    setInterval(() => {
        currentCount += Math.floor(Math.random() * 5);
        counterElement.textContent = currentCount.toLocaleString();
    }, 3000);
}

// ===== CTA BUTTONS =====
function setupCTAButtons() {
    const ctaButtons = document.querySelectorAll('.btn-primary, .nav-cta');
    const headerHeight = 80;
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Only handle if button is not inside a form or has no href
            const targetSection = document.getElementById('games');
            
            if (targetSection) {
                e.preventDefault();
                const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}
