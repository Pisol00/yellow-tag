// Form handling
const signInForm = document.getElementById('signInForm');

// Sign in form submission - Simple demo version
signInForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Go to home page directly
    window.location.href = 'home.html';
});

// Social sign in buttons
const socialButtons = document.querySelectorAll('.btn-social');

socialButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Go to home page directly
        window.location.href = 'home.html';
    });
});

// Input animations
const inputs = document.querySelectorAll('input[type="text"]');

inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });

    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// Forgot password link - Disabled for demo
const forgotPasswordLink = document.querySelector('.forgot-password');

forgotPasswordLink.addEventListener('click', function(e) {
    e.preventDefault();
});

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

