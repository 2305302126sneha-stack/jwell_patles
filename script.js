// Navbar scroll effect
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal');
const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
    });
}, revealOptions);

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});

// Simple Cart Logic
let cartCount = 0;
const cartDisplay = document.querySelector('.cart-count');

function addToCart() {
    cartCount++;
    cartDisplay.textContent = cartCount;
    
    // Simple visual feedback
    const originalText = event.target.textContent;
    event.target.textContent = 'Added!';
    event.target.style.background = '#28a745';
    event.target.style.borderColor = '#28a745';
    
    setTimeout(() => {
        event.target.textContent = originalText;
        event.target.style.background = ''; // Resets to CSS default
        event.target.style.borderColor = '';
    }, 1500);
}

// Smooth Scrolling for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Offset for sticky nav
                behavior: 'smooth'
            });
        }
    });
});
