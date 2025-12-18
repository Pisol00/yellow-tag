// Load orders from data.js
function loadOrders() {
    const ordersListContainer = document.getElementById('ordersListContainer');

    // Clear container
    ordersListContainer.innerHTML = '';

    // Generate orders HTML
    ordersData.forEach(order => {
        const orderWithDetails = dataHelpers.getOrderWithDetails(order.id);

        // Generate order items HTML
        const orderItemsHTML = orderWithDetails.items.map(item => {
            const product = item.product;
            return `
                <div class="order-item">
                    <div class="item-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="item-details">
                        <p class="item-name">${product.name}</p>
                        <p class="item-quantity">จำนวน: ${item.quantity}</p>
                    </div>
                    <div class="item-price">฿${product.discountPrice * item.quantity}</div>
                </div>
            `;
        }).join('');

        const orderHTML = `
            <div class="order-card" data-status="${order.status}">
                <div class="order-header">
                    <div class="order-number">
                        <span class="order-label">เลขที่คำสั่งซื้อ</span>
                        <span class="order-id">#${order.id}</span>
                    </div>
                    <span class="order-status ${order.status}">${order.statusText}</span>
                </div>

                <div class="order-date">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>
                        <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <span>${order.date}</span>
                </div>

                <div class="order-items">
                    ${orderItemsHTML}
                </div>

                <div class="order-footer">
                    <div class="order-total">
                        <span>ยอดรวม</span>
                        <span class="total-amount">฿${order.total}</span>
                    </div>
                </div>
            </div>
        `;

        ordersListContainer.innerHTML += orderHTML;
    });

    // Initialize event listeners
    initializeEventListeners();
}

// Initialize event listeners
function initializeEventListeners() {
    // Back button functionality
    const backBtn = document.getElementById('backBtn');
    backBtn.addEventListener('click', function() {
        window.location.href = 'home.html';
    });

    // Filter tabs functionality
    const filterTabs = document.querySelectorAll('.filter-tab');
    const orderCards = document.querySelectorAll('.order-card');
    const emptyState = document.querySelector('.empty-state');
    const ordersList = document.querySelector('.orders-list');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');

            // Get filter status
            const filterStatus = this.getAttribute('data-status');

            // Filter orders
            let visibleCount = 0;
            orderCards.forEach(card => {
                const cardStatus = card.getAttribute('data-status');
                if (filterStatus === 'all' || cardStatus === filterStatus) {
                    card.style.display = 'block';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            // Show empty state if no orders visible
            if (visibleCount === 0) {
                ordersList.style.display = 'none';
                emptyState.style.display = 'flex';
            } else {
                ordersList.style.display = 'flex';
                emptyState.style.display = 'none';
            }
        });
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
console.log('%c🛒 Yellow Tag Sale - Order History', 'color: #4E5DB7; font-size: 20px; font-weight: bold;');
console.log('%cประวัติการสั่งซื้อของคุณ', 'color: #E8B849; font-size: 14px;');

// Load orders when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadOrders();
});
