// Toggle between Sign In and Sign Up
const signInSection = document.getElementById('signInSection');
const signUpSection = document.getElementById('signUpSection');
const showSignUpBtn = document.getElementById('showSignUpBtn');
const showSignInBtn = document.getElementById('showSignInBtn');
const headerTitle = document.getElementById('headerTitle');
const headerSubtitle = document.getElementById('headerSubtitle');

// Show Sign Up form
showSignUpBtn.addEventListener('click', function(e) {
    e.preventDefault();
    signInSection.style.display = 'none';
    signUpSection.style.display = 'flex';
    headerTitle.textContent = 'สร้างบัญชีใหม่';
    headerSubtitle.textContent = 'เข้าร่วม Yellow Tag Sale และรับส่วนลดสุดพิเศษ';
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show Sign In form
showSignInBtn.addEventListener('click', function(e) {
    e.preventDefault();
    signUpSection.style.display = 'none';
    signInSection.style.display = 'flex';
    headerTitle.textContent = 'ยินดีต้อนรับ';
    headerSubtitle.textContent = 'กรุณาเข้าสู่ระบบ';
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Sign In form handling
const signInForm = document.getElementById('signInForm');

signInForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Go to home page directly
    window.location.href = 'home.html';
});

// Sign Up form handling
const signUpForm = document.getElementById('signUpForm');

signUpForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const password = document.getElementById('signUpPassword').value;
    const confirmPassword = document.getElementById('signUpConfirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('รหัสผ่านไม่ตรงกัน!');
        return;
    }
    
    // Go to home page directly
    window.location.href = 'home.html';
});

// Social sign in/up buttons
const socialButtons = document.querySelectorAll('.btn-social');

socialButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Go to home page directly
        window.location.href = 'home.html';
    });
});

// Input animations
const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');

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

