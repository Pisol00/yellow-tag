// Load product details from data.js
function loadProductDetails() {
    // Get first product as default mockdata (product ID 1)
    const product = dataHelpers.getProductById(1);

    if (!product) {
        return;
    }

    const productContent = document.getElementById('productContent');

    const productHTML = `
        <div class="product-card">
            <!-- Product Image -->
            <div class="product-image-container">
                <div class="discount-badge">-${product.discount}%</div>
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" id="productImage">
                </div>
            </div>

            <!-- Product Info -->
            <div class="product-info">
                <div class="product-details">
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

                <!-- Desktop Action Buttons -->
                <div class="desktop-actions">
                    <div class="action-row">
                        <button class="chat-btn-desktop" id="chatBtnDesktop">
                            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM8 11C7.45 11 7 10.55 7 10C7 9.45 7.45 9 8 9C8.55 9 9 9.45 9 10C9 10.55 8.55 11 8 11ZM12 11C11.45 11 11 10.55 11 10C11 9.45 11.45 9 12 9C12.55 9 13 9.45 13 10C13 10.55 12.55 11 12 11ZM16 11C15.45 11 15 10.55 15 10C15 9.45 15.45 9 16 9C16.55 9 17 9.45 17 10C17 10.55 16.55 11 16 11Z"/>
                            </svg>
                            <span>แชท</span>
                        </button>

                        <button class="cart-btn-desktop" id="cartBtnDesktop">
                            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z"/>
                            </svg>
                            <span>ตะกร้า</span>
                        </button>
                    </div>

                    <button class="checkout-btn-desktop" id="checkoutBtnDesktop">
                        Checkout
                    </button>
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
    if (chatBtn) {
        chatBtn.addEventListener('click', function() {
        });
    }

    // Mobile Cart button functionality
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', function() {
            window.location.href = 'cart.html';
        });
    }

    // Mobile Checkout button functionality
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            window.location.href = 'checkout.html';
        });
    }

    // Desktop Chat button functionality
    const chatBtnDesktop = document.getElementById('chatBtnDesktop');
    if (chatBtnDesktop) {
        chatBtnDesktop.addEventListener('click', function() {
        });
    }

    // Desktop Cart button functionality
    const cartBtnDesktop = document.getElementById('cartBtnDesktop');
    if (cartBtnDesktop) {
        cartBtnDesktop.addEventListener('click', function() {
            window.location.href = 'cart.html';
        });
    }

    // Desktop Checkout button functionality
    const checkoutBtnDesktop = document.getElementById('checkoutBtnDesktop');
    if (checkoutBtnDesktop) {
        checkoutBtnDesktop.addEventListener('click', function() {
            window.location.href = 'checkout.html';
        });
    }

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

// Detect if device is desktop
function isDesktop() {
    return window.innerWidth >= 768;
}

// Load product when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadProductDetails();
    
    // Set initial desktop class
    if (isDesktop()) {
        document.body.classList.add('is-desktop');
    }
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (isDesktop()) {
                document.body.classList.add('is-desktop');
            } else {
                document.body.classList.remove('is-desktop');
            }
        }, 250);
    });
});
