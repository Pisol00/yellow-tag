// Load cart items from data.js
function loadCartItems() {
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartCountElement = document.querySelector('.cart-count');

    // Clear container
    cartItemsContainer.innerHTML = '';

    // Get cart items with product details
    const cartItems = dataHelpers.getCartItemsWithDetails();

    // Update cart count
    cartCountElement.textContent = cartItems.length;

    // Generate cart items HTML
    cartItems.forEach(item => {
        const product = item.product;
        const cartItemHTML = `
            <div class="cart-item" data-cart-id="${item.id}">
                <input type="checkbox" class="item-checkbox" ${item.selected ? 'checked' : ''}>
                <div class="item-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="item-details">
                    <h3 class="item-name">${product.name}</h3>
                    <p class="item-shop">ร้าน: ${product.shop}</p>
                    <div class="item-footer">
                        <div class="item-price">
                            <span class="price-original">฿${product.price}</span>
                            <span class="price-discount">฿${product.discountPrice}</span>
                        </div>
                        <div class="quantity-control">
                            <button class="qty-btn minus">-</button>
                            <input type="number" class="qty-input" value="${item.quantity}" min="1" readonly>
                            <button class="qty-btn plus">+</button>
                        </div>
                    </div>
                </div>
                <button class="delete-btn">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6H5H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        `;
        cartItemsContainer.innerHTML += cartItemHTML;
    });

    // Initialize event listeners after items are loaded
    initializeEventListeners();

    // Update total
    updateTotal();
    updateCheckoutButton();
    checkEmptyCart();
}

// Initialize all event listeners
function initializeEventListeners() {
    // Back button functionality
    const backBtn = document.getElementById('backBtn');
    backBtn.addEventListener('click', function() {
        window.location.href = '../home.html';
    });

    // Mobile Checkout button functionality
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            const selectedItems = document.querySelectorAll('.item-checkbox:checked');
            if (selectedItems.length > 0) {
                window.location.href = 'checkout.html';
            } else {
                alert('กรุณาเลือกสินค้าที่ต้องการสั่งซื้อ');
            }
        });
    }

    // Desktop Checkout button functionality
    const desktopCheckoutBtn = document.getElementById('desktopCheckoutBtn');
    if (desktopCheckoutBtn) {
        desktopCheckoutBtn.addEventListener('click', function() {
            const selectedItems = document.querySelectorAll('.item-checkbox:checked');
            if (selectedItems.length > 0) {
                window.location.href = 'checkout.html';
            } else {
                alert('กรุณาเลือกสินค้าที่ต้องการสั่งซื้อ');
            }
        });
    }

    // Mobile Select all functionality
    const selectAllCheckbox = document.getElementById('selectAll');
    const itemCheckboxes = document.querySelectorAll('.item-checkbox');

    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', function() {
            itemCheckboxes.forEach(checkbox => {
                checkbox.checked = selectAllCheckbox.checked;
                // Update data
                const cartId = parseInt(checkbox.closest('.cart-item').dataset.cartId);
                const cartItem = cartData.find(item => item.id === cartId);
                if (cartItem) {
                    cartItem.selected = selectAllCheckbox.checked;
                }
            });
            updateTotal();
            updateCheckoutButton();
        });
    }

    // Desktop Select all functionality
    const desktopSelectAllCheckbox = document.getElementById('desktopSelectAll');
    if (desktopSelectAllCheckbox) {
        desktopSelectAllCheckbox.addEventListener('change', function() {
            itemCheckboxes.forEach(checkbox => {
                checkbox.checked = desktopSelectAllCheckbox.checked;
                // Update data
                const cartId = parseInt(checkbox.closest('.cart-item').dataset.cartId);
                const cartItem = cartData.find(item => item.id === cartId);
                if (cartItem) {
                    cartItem.selected = desktopSelectAllCheckbox.checked;
                }
            });
            // Sync mobile select all
            if (selectAllCheckbox) {
                selectAllCheckbox.checked = desktopSelectAllCheckbox.checked;
            }
            updateTotal();
            updateCheckoutButton();
        });
    }

    // Update select all when individual checkboxes change
    itemCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const allChecked = Array.from(itemCheckboxes).every(cb => cb.checked);

            // Sync both select all checkboxes
            if (selectAllCheckbox) {
                selectAllCheckbox.checked = allChecked;
            }
            if (desktopSelectAllCheckbox) {
                desktopSelectAllCheckbox.checked = allChecked;
            }

            // Update data
            const cartId = parseInt(this.closest('.cart-item').dataset.cartId);
            const cartItem = cartData.find(item => item.id === cartId);
            if (cartItem) {
                cartItem.selected = this.checked;
            }

            updateTotal();
            updateCheckoutButton();
        });
    });

    // Quantity control
    const cartItems = document.querySelectorAll('.cart-item');

    cartItems.forEach(item => {
        const minusBtn = item.querySelector('.minus');
        const plusBtn = item.querySelector('.plus');
        const qtyInput = item.querySelector('.qty-input');
        const cartId = parseInt(item.dataset.cartId);

        minusBtn.addEventListener('click', function() {
            let value = parseInt(qtyInput.value);
            if (value > 1) {
                qtyInput.value = value - 1;
                // Update data
                const cartItem = cartData.find(item => item.id === cartId);
                if (cartItem) {
                    cartItem.quantity = value - 1;
                }
                updateTotal();
            }
        });

        plusBtn.addEventListener('click', function() {
            let value = parseInt(qtyInput.value);
            if (value < 99) {
                qtyInput.value = value + 1;
                // Update data
                const cartItem = cartData.find(item => item.id === cartId);
                if (cartItem) {
                    cartItem.quantity = value + 1;
                }
                updateTotal();
            }
        });
    });

    // Delete button functionality
    const deleteButtons = document.querySelectorAll('.delete-btn');

    deleteButtons.forEach((btn) => {
        btn.addEventListener('click', function() {
            if (confirm('คุณต้องการลบสินค้าชิ้นนี้ออกจากตะกร้าหรือไม่?')) {
                const cartItem = this.closest('.cart-item');
                const cartId = parseInt(cartItem.dataset.cartId);

                // Remove from data
                const index = cartData.findIndex(item => item.id === cartId);
                if (index !== -1) {
                    cartData.splice(index, 1);
                }

                // Remove from DOM
                cartItem.remove();

                updateCartCount();
                updateTotal();
                updateCheckoutButton();
                checkEmptyCart();

                // Update select all checkbox
                const itemCheckboxes = document.querySelectorAll('.item-checkbox');
                const selectAllCheckbox = document.getElementById('selectAll');
                const allChecked = Array.from(itemCheckboxes).every(cb => cb.checked);
                selectAllCheckbox.checked = allChecked && itemCheckboxes.length > 0;
            }
        });
    });

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });
}

// Update cart count
function updateCartCount() {
    const remainingItems = cartData.length;
    const cartCountElement = document.querySelector('.cart-count');
    cartCountElement.textContent = remainingItems;
}

// Update total amount
function updateTotal() {
    const total = dataHelpers.calculateCartTotal(true);

    // Update mobile total
    const totalAmount = document.querySelector('.total-amount');
    if (totalAmount) {
        totalAmount.textContent = '฿' + total;
    }

    // Update desktop total
    const desktopTotalAmount = document.querySelector('.desktop-total-amount');
    if (desktopTotalAmount) {
        desktopTotalAmount.textContent = '฿' + total;
    }
}

// Update checkout button text
function updateCheckoutButton() {
    const selectedCount = dataHelpers.getSelectedCartCount();

    // Update mobile button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.textContent = `สั่งซื้อ (${selectedCount})`;
    }

    // Update desktop button
    const desktopCheckoutBtn = document.getElementById('desktopCheckoutBtn');
    if (desktopCheckoutBtn) {
        desktopCheckoutBtn.textContent = `สั่งซื้อ (${selectedCount})`;
    }
}

// Check if cart is empty
function checkEmptyCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const emptyState = document.querySelector('.empty-state');
    const bottomBar = document.querySelector('.bottom-bar');
    const desktopCheckoutSection = document.querySelector('.desktop-checkout-section');
    const remainingItems = cartData.length;

    if (remainingItems === 0) {
        cartItemsContainer.style.display = 'none';
        emptyState.style.display = 'flex';
        if (bottomBar) {
            bottomBar.style.display = 'none';
        }
        if (desktopCheckoutSection) {
            desktopCheckoutSection.style.display = 'none';
        }
    } else {
        cartItemsContainer.style.display = 'flex';
        emptyState.style.display = 'none';
        if (bottomBar) {
            bottomBar.style.display = 'flex';
        }
        if (desktopCheckoutSection && window.innerWidth >= 1200) {
            desktopCheckoutSection.style.display = 'flex';
        }
    }
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

// Load cart items when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadCartItems();
});
