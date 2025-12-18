// Set current date
const orderDate = document.getElementById('orderDate');
const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
orderDate.textContent = today.toLocaleDateString('th-TH', options);

// Order history button functionality
const orderHistoryBtn = document.getElementById('orderHistoryBtn');

orderHistoryBtn.addEventListener('click', function() {
    window.location.href = 'orders.html';
});

// Back to home button functionality
const backHomeBtn = document.getElementById('backHomeBtn');

backHomeBtn.addEventListener('click', function() {
    window.location.href = '../home.html';
});

// Top nav back button functionality
const backBtn = document.getElementById('backBtn');

if (backBtn) {
    backBtn.addEventListener('click', function() {
        window.location.href = '../home.html';
    });
}

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

// Auto redirect to home after 10 seconds (optional)
// setTimeout(() => {
//     window.location.href = '../home.html';
// }, 10000);
