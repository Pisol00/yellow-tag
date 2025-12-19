// Load product details from data.js
function loadProductDetails() {
    // Get first product as default mockdata (product ID 1)
    const product = dataHelpers.getProductById(1);

    if (!product) {
        return;
    }

    const productContent = document.getElementById('productContent');

    const productHTML = `
        <!-- Product Image -->
        <div class="product-image-container">
            <div class="discount-badge">-${product.discount}%</div>
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" id="productImage">
            </div>
        </div>

        <!-- Product Info -->
        <div class="product-info">
            <h2 class="product-name" id="productName">${product.name}</h2>

            <div class="price-section">
                <div class="price-row">
                    <span class="current-price">฿${product.discountPrice}</span>
                    <span class="original-price">฿${product.price}</span>
                </div>
            </div>

            <!-- Shop Info -->
            <div class="shop-info">
                <div class="shop-avatar">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="8" r="4" fill="currentColor"/>
                        <path d="M4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20V22H4V20Z" fill="currentColor"/>
                    </svg>
                </div>
                <span class="shop-name">${product.shop}</span>
            </div>

            <!-- Delivery Info -->
            <div class="delivery-info">
                <svg class="delivery-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4H15V12H1V4Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                    <path d="M15 7H18L22 11V15H15V7Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                    <circle cx="6" cy="18" r="2" stroke="currentColor" stroke-width="2"/>
                    <circle cx="18" cy="18" r="2" stroke="currentColor" stroke-width="2"/>
                    <path d="M1 12H15V15H1V12Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                </svg>
                <div class="delivery-text">
                    <p class="delivery-date">${product.delivery} ${product.deliveryTime}</p>
                    <p class="delivery-location">${product.description}</p>
                </div>
            </div>
        </div>
    `;

    productContent.innerHTML = productHTML;

    // Initialize event listeners after content is loaded
    initializeEventListeners();
}

// Initialize event listeners
function initializeEventListeners() {
    // Back button functionality
    const backBtn = document.getElementById('backBtn');
    backBtn.addEventListener('click', function() {
        window.location.href = '../home.html';
    });

    // Mobile Chat button functionality
    const chatBtn = document.getElementById('chatBtn');
    chatBtn.addEventListener('click', function() {
    });

    // Mobile Cart button functionality
    const cartBtn = document.getElementById('cartBtn');
    cartBtn.addEventListener('click', function() {
        window.location.href = 'cart.html';
    });

    // Mobile Checkout button functionality
    const checkoutBtn = document.getElementById('checkoutBtn');
    checkoutBtn.addEventListener('click', function() {
        window.location.href = 'checkout.html';
    });

    // Desktop Chat button functionality
    const desktopChatBtn = document.getElementById('desktopChatBtn');
    desktopChatBtn.addEventListener('click', function() {
    });

    // Desktop Cart button functionality
    const desktopCartBtn = document.getElementById('desktopCartBtn');
    desktopCartBtn.addEventListener('click', function() {
        window.location.href = 'cart.html';
    });

    // Desktop Checkout button functionality
    const desktopCheckoutBtn = document.getElementById('desktopCheckoutBtn');
    desktopCheckoutBtn.addEventListener('click', function() {
        window.location.href = 'checkout.html';
    });

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
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

// Load product when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadProductDetails();
});
