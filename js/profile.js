// Load profile from data.js
function loadProfile() {
    const profileContent = document.getElementById('profileContent');

    const profileHTML = `
        <!-- Profile Header -->
        <section class="profile-header">
            <div class="avatar-container">
                <div class="avatar">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="8" r="4" fill="currentColor"/>
                        <path d="M4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20V22H4V20Z" fill="currentColor"/>
                    </svg>
                </div>
            </div>
            <h2 class="profile-name">${userProfile.name}</h2>
            <p class="profile-email">${userProfile.email}</p>
        </section>

        <!-- Profile Info -->
        <section class="profile-info">
            <h3 class="section-title">ข้อมูลส่วนตัว</h3>

            <div class="info-card">
                <div class="info-item">
                    <div class="info-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2"/>
                            <path d="M4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20V22H4V20Z" stroke="currentColor" stroke-width="2"/>
                        </svg>
                    </div>
                    <div class="info-content">
                        <p class="info-label">ชื่อ-นามสกุล</p>
                        <p class="info-value">${userProfile.name}</p>
                    </div>
                </div>

                <div class="divider"></div>

                <div class="info-item">
                    <div class="info-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 8L10.89 13.26C11.5544 13.6778 12.4456 13.6778 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="info-content">
                        <p class="info-label">อีเมล</p>
                        <p class="info-value">${userProfile.email}</p>
                    </div>
                </div>

                <div class="divider"></div>

                <div class="info-item">
                    <div class="info-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="5" y="4" width="14" height="17" rx="2" stroke="currentColor" stroke-width="2"/>
                            <path d="M9 1V4M15 1V4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <div class="info-content">
                        <p class="info-label">เบอร์โทรศัพท์</p>
                        <p class="info-value">${userProfile.phone}</p>
                    </div>
                </div>

                <div class="divider"></div>

                <div class="info-item">
                    <div class="info-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                            <circle cx="12" cy="9" r="2.5" stroke="currentColor" stroke-width="2"/>
                        </svg>
                    </div>
                    <div class="info-content">
                        <p class="info-label">ที่อยู่</p>
                        <p class="info-value">${userProfile.address}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Logout Button -->
        <section class="logout-section">
            <button class="logout-btn" id="logoutBtn">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16 17L21 12L16 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21 12H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                ออกจากระบบ
            </button>
        </section>
    `;

    profileContent.innerHTML = profileHTML;

    // Initialize event listeners
    initializeEventListeners();
}

// Initialize event listeners
function initializeEventListeners() {
    // Back button functionality
    const backBtn = document.getElementById('backBtn');
    backBtn.addEventListener('click', function() {
        window.location.href = '../home.html';
    });

    // Logout button functionality
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.addEventListener('click', function() {
        if (confirm('คุณต้องการออกจากระบบใช่หรือไม่?')) {
            console.log('Logging out...');
            alert('กำลังออกจากระบบ...');
            // Redirect to sign in page
            window.location.href = '../index.html';
        }
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
console.log('%c👤 Yellow Tag Sale - Profile', 'color: #4E5DB7; font-size: 20px; font-weight: bold;');
console.log('%cโปรไฟล์ของคุณ', 'color: #E8B849; font-size: 14px;');

// Load profile when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadProfile();
});
