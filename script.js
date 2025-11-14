// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(64, 36, 26, 0.98)';
    } else {
        navbar.style.background = 'rgba(64, 36, 26, 0.95)';
    }
    
    lastScroll = currentScroll;
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.problem-card, .feature-card, .step');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Order form email validation and Google Sheets submission
    const orderForm = document.getElementById('order-form');
    const orderEmail = document.getElementById('order-email');
    const orderButton = document.getElementById('order-button');

    if (orderForm && orderEmail && orderButton) {
        // Enable/disable button based on email input
        orderEmail.addEventListener('input', function() {
            const emailValue = this.value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (emailValue && emailPattern.test(emailValue)) {
                orderButton.disabled = false;
            } else {
                orderButton.disabled = true;
            }
        });

        // Handle form submission
        orderForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const email = orderEmail.value.trim();
            const timestamp = new Date().toISOString();
            
            // Disable button during submission
            orderButton.disabled = true;
            orderButton.textContent = 'Processing...';
            
            try {
                // Replace this URL with your Google Apps Script web app URL
                // See instructions in google-sheets-setup.md
                const scriptURL = 'https://script.google.com/macros/s/AKfycbyILm5-qVYMchi03Fz9cMJ8aAHWTnzhHjsZp9AvhG0u1gvKw_nG14EMffHU54XDSCHs/exec';
                
                const response = await fetch(scriptURL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email,
                        timestamp: timestamp,
                        product: 'Yume',
                        price: '£199'
                    })
                });
                
                // Redirect to thank you page
                window.location.href = 'thank-you.html';
            } catch (error) {
                console.error('Error:', error);
                // Still redirect to thank you page even if tracking fails
                window.location.href = 'thank-you.html';
            }
        });
    }
});

