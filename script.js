// Form handling
const signInForm = document.getElementById('signInForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Sign in form submission
signInForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    // Basic validation
    if (!email || !password) {
        alert('กรุณากรอกอีเมลและรหัสผ่าน');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('กรุณากรอกอีเมลที่ถูกต้อง');
        return;
    }

    // Here you would typically send the data to your backend
    console.log('Sign in attempt:', { email, password });
    alert(`กำลังเข้าสู่ระบบด้วย: ${email}`);

    // Reset form
    signInForm.reset();
});

// Social sign in buttons
const socialButtons = document.querySelectorAll('.btn-social');

socialButtons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent.trim();
        console.log('Social sign in:', buttonText);
        alert(`กำลังเข้าสู่ระบบด้วย ${buttonText}`);
    });
});

// Input animations
const inputs = document.querySelectorAll('input[type="email"], input[type="password"]');

inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });

    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// Forgot password link
const forgotPasswordLink = document.querySelector('.forgot-password');

forgotPasswordLink.addEventListener('click', function(e) {
    e.preventDefault();
    alert('ระบบกู้คืนรหัสผ่านจะเปิดในเร็วๆ นี้');
    console.log('Forgot password clicked');
});

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Prevent form submission on Enter key for password field
passwordInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        signInForm.dispatchEvent(new Event('submit'));
    }
});

// Add loading state to buttons (optional enhancement)
function addLoadingState(button) {
    const originalText = button.textContent;
    button.disabled = true;
    button.style.opacity = '0.6';
    button.textContent = 'กำลังโหลด...';

    setTimeout(() => {
        button.disabled = false;
        button.style.opacity = '1';
        button.textContent = originalText;
    }, 2000);
}

// Console welcome message
console.log('%c🛒 Yellow Tag Sale - Sign In Page', 'color: #4E5DB7; font-size: 20px; font-weight: bold;');
console.log('%cWelcome to the sign in page!', 'color: #E8B849; font-size: 14px;');
