// Load checkout details from data.js
function loadCheckoutDetails() {
    const checkoutContent = document.getElementById('checkoutContent');

    // Get selected cart items
    const cartItems = dataHelpers.getCartItemsWithDetails().filter(item => item.selected);

    if (cartItems.length === 0) {
        checkoutContent.innerHTML = '<p style="text-align: center; padding: 40px;">ไม่มีสินค้าในตะกร้า</p>';
        return;
    }

    // Calculate totals
    const subtotal = dataHelpers.calculateCartTotal(true);
    const shipping = 20;
    const discount = 0;
    const total = subtotal + shipping - discount;

    // Generate product items HTML
    const productItemsHTML = cartItems.map(item => {
        const product = item.product;
        return `
            <div class="product-item">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-details">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-quantity">จำนวน: ${item.quantity}</p>
                    <p class="product-price">฿${product.discountPrice * item.quantity}</p>
                </div>
            </div>
        `;
    }).join('');

    // Generate payment options HTML
    const paymentOptionsHTML = paymentMethods.map((method, index) => {
        return `
            <div class="payment-option ${index === 0 ? 'active' : ''}" data-method="${method.id}">
                <div class="radio-btn"></div>
                <div class="payment-info">
                    <svg class="payment-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        ${getPaymentIconSVG(method.icon)}
                    </svg>
                    <span>${method.name}</span>
                </div>
            </div>
        `;
    }).join('');

    const checkoutHTML = `
        <!-- Order Summary -->
        <section class="order-summary">
            <h2 class="section-title">สรุปคำสั่งซื้อ</h2>
            ${productItemsHTML}
        </section>

        <!-- Delivery Address -->
        <section class="delivery-section">
            <h2 class="section-title">ที่อยู่จัดส่ง</h2>
            <div class="address-card">
                <div class="address-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                        <circle cx="12" cy="9" r="2.5" stroke="currentColor" stroke-width="2"/>
                    </svg>
                </div>
                <div class="address-details">
                    <p class="address-name">${deliveryAddress.name}</p>
                    <p class="address-text">${deliveryAddress.address}</p>
                    <p class="address-phone">โทร: ${deliveryAddress.phone}</p>
                </div>
            </div>
        </section>

        <!-- Payment Method -->
        <section class="payment-section">
            <h2 class="section-title">วิธีการชำระเงิน</h2>
            <div class="payment-options">
                ${paymentOptionsHTML}
            </div>
        </section>

        <!-- Price Summary -->
        <section class="price-summary">
            <h2 class="section-title">สรุปราคา</h2>
            <div class="price-breakdown">
                <div class="price-row">
                    <span class="price-label">ราคาสินค้า</span>
                    <span class="price-value">฿${subtotal}</span>
                </div>
                <div class="price-row">
                    <span class="price-label">ค่าจัดส่ง</span>
                    <span class="price-value">฿${shipping}</span>
                </div>
                <div class="price-row">
                    <span class="price-label">ส่วนลด</span>
                    <span class="price-value discount">-฿${discount}</span>
                </div>
                <div class="divider"></div>
                <div class="price-row total">
                    <span class="price-label">ยอดรวมทั้งหมด</span>
                    <span class="price-value">฿${total}</span>
                </div>
            </div>
        </section>
    `;

    checkoutContent.innerHTML = checkoutHTML;

    // Update bottom bar total
    document.querySelector('.total-amount').textContent = `฿${total}`;

    // Initialize event listeners
    initializeEventListeners();
}

// Get payment icon SVG path
function getPaymentIconSVG(iconType) {
    const icons = {
        'credit-card': `
            <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" stroke-width="2"/>
            <path d="M2 10H22" stroke="currentColor" stroke-width="2"/>
            <rect x="5" y="14" width="6" height="2" rx="1" fill="currentColor"/>
        `,
        'bank': `
            <path d="M3 9L12 2L21 9V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9Z" stroke="currentColor" stroke-width="2"/>
            <path d="M9 21V12H15V21" stroke="currentColor" stroke-width="2"/>
        `,
        'cash': `
            <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>
            <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        `
    };
    return icons[iconType] || icons['credit-card'];
}

// Initialize event listeners
function initializeEventListeners() {
    // Back button functionality
    const backBtn = document.getElementById('backBtn');
    backBtn.addEventListener('click', function() {
        window.location.href = 'cart.html';
    });

    // Payment option selection
    const paymentOptions = document.querySelectorAll('.payment-option');
    paymentOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            paymentOptions.forEach(opt => opt.classList.remove('active'));
            // Add active class to clicked option
            this.classList.add('active');
        });
    });

    // Confirm button functionality
    const confirmBtn = document.getElementById('confirmBtn');
    confirmBtn.addEventListener('click', function() {
        console.log('Order confirmed');
        // Redirect to success page after confirmation
        window.location.href = 'success.html';
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
console.log('%c🛒 Yellow Tag Sale - Checkout', 'color: #4E5DB7; font-size: 20px; font-weight: bold;');
console.log('%cยืนยันคำสั่งซื้อของคุณ!', 'color: #E8B849; font-size: 14px;');

// Load checkout when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadCheckoutDetails();
});
