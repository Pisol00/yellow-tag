// Load products from data.js
function loadProducts() {
    const productsContainer = document.getElementById('productsContainer');
    productsContainer.innerHTML = '';

    // Filter products by category
    const recommendedProducts = productsData.filter(p => p.category === 'recommended');
    const foodProducts = productsData.filter(p => p.category === 'food');
    const clothingProducts = productsData.filter(p => p.category === 'clothing');

    // Recommended Products Section
    const recommendedHTML = `
        <section class="products-section">
            <div class="section-header">
                <h3>สินค้าแนะนำ</h3>
                <button class="view-all-btn">ดูทั้งหมด</button>
            </div>
            <div class="swiper productsSwiper">
                <div class="swiper-wrapper">
                    ${recommendedProducts.map(product => `
                        <div class="swiper-slide">
                            <div class="product-card" data-product-id="${product.id}">
                                <div class="discount-badge">-${product.discount}%</div>
                                <div class="product-image">
                                    <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'">
                                </div>
                                <p class="product-name">${product.name}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;

    // Food Category Section
    const foodHTML = `
        <section class="products-section">
            <div class="section-header">
                <h3>หมวดหมู่ : อาหาร</h3>
                <button class="view-all-btn">ดูทั้งหมด</button>
            </div>
            <div class="swiper productsSwiper">
                <div class="swiper-wrapper">
                    ${foodProducts.map(product => `
                        <div class="swiper-slide">
                            <div class="product-card" data-product-id="${product.id}">
                                <div class="discount-badge">-${product.discount}%</div>
                                <div class="product-image">
                                    <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'">
                                </div>
                                <p class="product-name">${product.name}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;

    // Clothing Category Section
    const clothingHTML = `
        <section class="products-section">
            <div class="section-header">
                <h3>หมวดหมู่ : เสื้อผ้า</h3>
                <button class="view-all-btn">ดูทั้งหมด</button>
            </div>
            <div class="swiper productsSwiper">
                <div class="swiper-wrapper">
                    ${clothingProducts.map(product => `
                        <div class="swiper-slide">
                            <div class="product-card" data-product-id="${product.id}">
                                <div class="discount-badge">-${product.discount}%</div>
                                <div class="product-image">
                                    <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'">
                                </div>
                                <p class="product-name">${product.name}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;

    // Combine all sections
    productsContainer.innerHTML = recommendedHTML + foodHTML + clothingHTML;

    // Re-initialize event listeners after loading products
    initializeProductsSwiper();
    initializeProductCardClicks();
    initializeViewAllButtons();
    initializeProductObserver();
}

// Menu functionality
const menuBtn = document.getElementById('menuBtn');
const sideMenu = document.getElementById('sideMenu');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const menuOverlay = document.getElementById('menuOverlay');

// Open menu
menuBtn.addEventListener('click', function() {
    sideMenu.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
});

// Close menu
closeMenuBtn.addEventListener('click', function() {
    sideMenu.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
});

// Close menu when clicking overlay
menuOverlay.addEventListener('click', function() {
    sideMenu.classList.remove('active');
    document.body.style.overflow = '';
});

// Close menu when clicking menu links
const menuLinks = document.querySelectorAll('.menu-list a');
menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Don't prevent default for actual navigation
        sideMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Search functionality
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', function() {
    const searchQuery = searchInput.value.trim();
    if (searchQuery) {
        alert(`กำลังค้นหา: ${searchQuery}`);
        // Here you would typically send the search query to your backend
    } else {
        alert('กรุณาใส่คำค้นหา');
    }
});

searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        searchBtn.click();
    }
});

// User button functionality
const userBtn = document.getElementById('userBtn');

userBtn.addEventListener('click', function() {
    // Navigate to user profile page
    window.location.href = 'pages/profile.html';
});

// Initialize Swiper for Banner
function initializeBannerSwiper() {
    const bannerSwiper = new Swiper('.bannerSwiper', {
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        speed: 600,
        effect: 'slide',
    });
}

// Initialize Swiper for Products
function initializeProductsSwiper() {
    const productsSwiper = document.querySelectorAll('.productsSwiper');
    productsSwiper.forEach((swiper) => {
        new Swiper(swiper, {
            slidesPerView: 'auto',
            spaceBetween: 15,
            freeMode: true,
            grabCursor: true,
        });
    });
}

// Product card click functionality
function initializeProductCardClicks() {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach((card) => {
        card.addEventListener('click', function() {
            const productName = this.querySelector('.product-name').textContent;
            // Navigate to product detail page
            window.location.href = 'pages/product.html';
        });
    });
}

// View all buttons functionality
function initializeViewAllButtons() {
    const viewAllBtns = document.querySelectorAll('.view-all-btn');

    viewAllBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event bubbling
            const sectionTitle = this.parentElement.querySelector('h3').textContent;
            alert(`ดูทั้งหมดในหมวด: ${sectionTitle}`);
            // Navigate to category page
            // window.location.href = `category.html?name=${encodeURIComponent(sectionTitle)}`;
        });
    });
}

// Logout functionality
const logoutBtn = document.querySelector('.logout-btn');

logoutBtn.addEventListener('click', function() {
    if (confirm('คุณต้องการออกจากระบบใช่หรือไม่?')) {
        alert('กำลังออกจากระบบ...');
        // Redirect to sign in page
        window.location.href = '../index.html';
    }
});

// Add smooth animations on scroll
function initializeProductObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all product sections
    const productSections = document.querySelectorAll('.products-section');
    productSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });

    // Add loading effect for images
    const productImages = document.querySelectorAll('.product-image img');
    productImages.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });

    // Handle image errors
    productImages.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect width="400" height="400" fill="%23f5f5f5"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%234E5DB7" font-size="20" font-family="Arial"%3ENo Image%3C/text%3E%3C/svg%3E';
            this.style.opacity = '1';
        });
    });

    // Prevent right-click on images (optional, for protecting images)
    productImages.forEach(img => {
        img.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
    });
}

// Touch gestures for mobile - DISABLED
// Menu can only be opened by clicking the menu button
let touchStartX = 0;
let touchEndX = 0;

// Commented out to disable swipe gesture
// document.addEventListener('touchstart', function(e) {
//     touchStartX = e.changedTouches[0].screenX;
// }, false);

// document.addEventListener('touchend', function(e) {
//     touchEndX = e.changedTouches[0].screenX;
//     handleSwipe();
// }, false);

// function handleSwipe() {
//     // Swipe right to open menu
//     if (touchEndX - touchStartX > 100 && !sideMenu.classList.contains('active')) {
//         sideMenu.classList.add('active');
//         document.body.style.overflow = 'hidden';
//     }
//     // Swipe left to close menu
//     if (touchStartX - touchEndX > 100 && sideMenu.classList.contains('active')) {
//         sideMenu.classList.remove('active');
//         document.body.style.overflow = '';
//     }
// }

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

function initializeRippleEffect() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });
}

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    initializeBannerSwiper();
    initializeRippleEffect();
});

// Handle back button
window.addEventListener('popstate', function() {
    if (sideMenu.classList.contains('active')) {
        sideMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Add to cart functionality (placeholder)
function addToCart(productName) {
    // Show notification
    const notification = document.createElement('div');
    notification.textContent = `เพิ่ม ${productName} ลงตะกร้าแล้ว`;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #4E5DB7;
        color: #F8E291;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 2000;
        font-weight: 600;
        animation: slideInRight 0.3s ease;
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }

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
