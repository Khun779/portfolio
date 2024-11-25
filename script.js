// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Adjust header visibility on scroll
const header = document.getElementById('header');
let lastScroll = 0;
let hideTimeout;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Clear any existing timeout
    clearTimeout(hideTimeout);
    
    // Determine scroll direction and position
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling DOWN & not at top - hide header
        header.style.transform = 'translateY(-100%)';
        header.style.transition = 'transform 0.3s ease-in-out';
    } else {
        // Scrolling UP or at top - show header
        header.style.transform = 'translateY(0)';
        header.style.transition = 'transform 0.3s ease-in-out';
    }
    
    // Add/remove background based on scroll position
    if (currentScroll > 50) {
        header.style.background = "rgba(0, 0, 0, 0.9)";
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.5)";
    } else {
        header.style.background = "rgba(0, 0, 0, 0.7)";
        header.style.boxShadow = "none";
    }
    
    lastScroll = currentScroll;
});

// Add animation to squares on load
document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.opacity = '1';
    });
});
