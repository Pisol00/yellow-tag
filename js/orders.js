// Pagination variables
let currentPage = 1;
let itemsPerPage = 3;
let currentFilter = 'all';
let filteredOrders = [];
let eventListenersInitialized = false;

// Load orders from data.js
function loadOrders() {
    const ordersListContainer = document.getElementById('ordersListContainer');

    // Clear container
    ordersListContainer.innerHTML = '';

    // Get filtered orders based on current filter
    filteredOrders = currentFilter === 'all'
        ? ordersData
        : ordersData.filter(order => order.status === currentFilter);

    // Calculate pagination
    const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const ordersToShow = filteredOrders.slice(startIndex, endIndex);

    // Generate orders HTML
    ordersToShow.forEach(order => {
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

    // Update pagination UI
    updatePaginationUI(totalPages);
}

// Update pagination UI
function updatePaginationUI(totalPages) {
    const paginationContainer = document.getElementById('paginationContainer');
    const paginationDots = document.getElementById('paginationDots');
    const prevBtn = document.getElementById('prevPageBtn');
    const nextBtn = document.getElementById('nextPageBtn');
    const emptyState = document.querySelector('.empty-state');
    const ordersList = document.querySelector('.orders-list');

    // Show/hide pagination
    if (filteredOrders.length > itemsPerPage) {
        paginationContainer.style.display = 'flex';
    } else {
        paginationContainer.style.display = 'none';
    }

    // Show/hide empty state
    if (filteredOrders.length === 0) {
        ordersList.style.display = 'none';
        emptyState.style.display = 'flex';
        paginationContainer.style.display = 'none';
    } else {
        ordersList.style.display = 'flex';
        emptyState.style.display = 'none';
    }

    // Generate pagination dots
    paginationDots.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const dot = document.createElement('div');
        dot.className = 'pagination-dot';
        if (i === currentPage) {
            dot.classList.add('active');
        }
        // Use data attribute instead of event listener
        dot.setAttribute('data-page', i);
        paginationDots.appendChild(dot);
    }

    // Update button states
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages || totalPages === 0;
}

// Initialize event listeners (called once on page load)
function initializeEventListeners() {
    if (eventListenersInitialized) {
        return;
    }

    // Back button functionality
    const backBtn = document.getElementById('backBtn');
    backBtn.addEventListener('click', function() {
        window.location.href = '../home.html';
    });

    // Filter tabs functionality
    const filterTabs = document.querySelectorAll('.filter-tab');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');

            // Get filter status
            currentFilter = this.getAttribute('data-status');

            // Reset to page 1 when filter changes
            currentPage = 1;

            // Reload orders with new filter
            loadOrders();
        });
    });

    // Pagination buttons
    const prevBtn = document.getElementById('prevPageBtn');
    const nextBtn = document.getElementById('nextPageBtn');
    const paginationDots = document.getElementById('paginationDots');

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage--;
                loadOrders();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                loadOrders();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    // Pagination dots - use event delegation
    if (paginationDots) {
        paginationDots.addEventListener('click', function(e) {
            if (e.target.classList.contains('pagination-dot')) {
                const pageNumber = parseInt(e.target.getAttribute('data-page'));
                if (pageNumber && pageNumber !== currentPage) {
                    currentPage = pageNumber;
                    loadOrders();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }
        });
    }

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });

    eventListenersInitialized = true;
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

// Initialize Filter Tabs Swiper
function initializeFilterTabsSwiper() {
    new Swiper('.filterTabsSwiper', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
        grabCursor: true,
    });
}

// Load orders when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    loadOrders();
    initializeFilterTabsSwiper();
});
