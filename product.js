// Load product details from data.js
function loadProductDetails() {
    // Get first product as default mockdata (product ID 1)
    const product = dataHelpers.getProductById(1);

    if (!product) {
        console.error('Product not found');
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
                    <path d="M1 3H16V13H1V3Z" fill="currentColor"/>
                    <path d="M16 6H19L23 10V13H16V6Z" fill="currentColor"/>
                    <circle cx="5" cy="18" r="2" fill="currentColor"/>
                    <circle cx="19" cy="18" r="2" fill="currentColor"/>
                </svg>
                <div class="delivery-text">
                    <p class="delivery-date">${product.delivery} • ${product.deliveryTime}</p>
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
        window.location.href = 'home.html';
    });

    // Chat button functionality
    const chatBtn = document.getElementById('chatBtn');
    chatBtn.addEventListener('click', function() {
        console.log('Chat clicked');
        alert('แชทกับร้านค้า');
    });

    // Cart button functionality
    const cartBtn = document.getElementById('cartBtn');
    cartBtn.addEventListener('click', function() {
        console.log('Cart clicked');
        window.location.href = 'cart.html';
    });

    // Checkout button functionality
    const checkoutBtn = document.getElementById('checkoutBtn');
    checkoutBtn.addEventListener('click', function() {
        console.log('Checkout clicked');
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

// Console welcome message
console.log('%c🛍️ Yellow Tag Sale - Product Detail', 'color: #4E5DB7; font-size: 20px; font-weight: bold;');
console.log('%cรายละเอียดสินค้า', 'color: #E8B849; font-size: 14px;');

// Load product when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadProductDetails();
});
