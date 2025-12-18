// Back button functionality
const backBtn = document.getElementById('backBtn');

backBtn.addEventListener('click', function() {
    window.history.back();
});

// Menu button functionality
const menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', function() {
    console.log('Menu clicked');
    alert('เปิดเมนู');
});

// Chat button functionality
const chatBtn = document.getElementById('chatBtn');

chatBtn.addEventListener('click', function() {
    console.log('Chat clicked');
    alert('เปิดแชท');
});

// Cart button functionality
const cartBtn = document.getElementById('cartBtn');

cartBtn.addEventListener('click', function() {
    console.log('Cart clicked');
    alert('เปิดตะกร้า');
});

// Checkout button functionality
const checkoutBtn = document.getElementById('checkoutBtn');

checkoutBtn.addEventListener('click', function() {
    console.log('Checkout clicked');
    alert('ไปหน้า Checkout');
});

// Mock data - no need to get from URL parameters
// All data is hardcoded in HTML

// Add ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
    ripple.classList.add('ripple');

    const rippleElement = button.getElementsByClassName('ripple')[0];
    if (rippleElement) {
        rippleElement.remove();
    }

    button.appendChild(ripple);
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', createRipple);
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Console welcome message
console.log('%c🛒 Yellow Tag Sale - Product Detail', 'color: #4E5DB7; font-size: 20px; font-weight: bold;');
console.log('%cยินดีต้อนรับสู่หน้ารายละเอียดสินค้า!', 'color: #E8B849; font-size: 14px;');
