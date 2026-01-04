// Simple Fade-In Animation on Scroll

document.addEventListener("DOMContentLoaded", function() {
    // 1. Select all elements we want to animate
    const fadeElements = document.querySelectorAll('.fade-in');

    // 2. Set up the Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is visible in the viewport
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger the CSS animation
                entry.target.classList.add('visible');
                // Stop observing this element since it's already visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Options: trigger the animation when the element is 10% visible
        threshold: 0.1
    });

    // 3. Tell the observer to watch each of our fade-in elements
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});
