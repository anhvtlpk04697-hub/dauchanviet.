// ===== AUTHENTICATION MODULE =====
// Simple localStorage-based auth for demo purposes

const Auth = {
    // Storage keys
    USERS_KEY: 'dulichtg_users',
    CURRENT_USER_KEY: 'dulichtg_current_user',

    // Get all registered users
    getUsers() {
        const data = localStorage.getItem(this.USERS_KEY);
        return data ? JSON.parse(data) : [];
    },

    // Save users array
    saveUsers(users) {
        localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    },

    // Register a new user
    register(userData) {
        const users = this.getUsers();
        
        // Check if email already exists
        if (users.find(u => u.email === userData.email)) {
            return { success: false, message: 'Email này đã được đăng ký!' };
        }

        const newUser = {
            id: Date.now().toString(),
            lastName: userData.lastName,
            firstName: userData.firstName,
            email: userData.email,
            phone: userData.phone,
            password: userData.password, // In real app, hash this!
            avatar: '',
            address: '',
            birthdate: '',
            gender: '',
            bio: '',
            memberSince: new Date().toISOString(),
            points: 500, // Welcome bonus
            level: 'Thành viên mới',
            bookedTours: [],
            wishlist: []
        };

        users.push(newUser);
        this.saveUsers(users);
        this.setCurrentUser(newUser);

        return { success: true, user: newUser };
    },

    // Login
    login(email, password) {
        const users = this.getUsers();
        const user = users.find(u => u.email === email && u.password === password);

        if (!user) {
            return { success: false, message: 'Email hoặc mật khẩu không chính xác!' };
        }

        this.setCurrentUser(user);
        return { success: true, user };
    },

    // Logout
    logout() {
        localStorage.removeItem(this.CURRENT_USER_KEY);
    },

    // Set current user session
    setCurrentUser(user) {
        // Don't store password in session
        const sessionUser = { ...user };
        delete sessionUser.password;
        localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(sessionUser));
    },

    // Get current logged-in user
    getCurrentUser() {
        const data = localStorage.getItem(this.CURRENT_USER_KEY);
        return data ? JSON.parse(data) : null;
    },

    // Check if user is logged in
    isLoggedIn() {
        return this.getCurrentUser() !== null;
    },

    // Update user profile
    updateProfile(updatedData) {
        const currentUser = this.getCurrentUser();
        if (!currentUser) return { success: false, message: 'Chưa đăng nhập!' };

        const users = this.getUsers();
        const index = users.findIndex(u => u.id === currentUser.id);
        
        if (index === -1) return { success: false, message: 'Không tìm thấy người dùng!' };

        // Merge updates
        const updated = { ...users[index], ...updatedData };
        users[index] = updated;
        this.saveUsers(users);
        this.setCurrentUser(updated);

        return { success: true, user: updated };
    },

    // Change password
    changePassword(currentPassword, newPassword) {
        const currentUser = this.getCurrentUser();
        if (!currentUser) return { success: false, message: 'Chưa đăng nhập!' };

        const users = this.getUsers();
        const user = users.find(u => u.id === currentUser.id);

        if (user.password !== currentPassword) {
            return { success: false, message: 'Mật khẩu hiện tại không đúng!' };
        }

        user.password = newPassword;
        this.saveUsers(users);

        return { success: true };
    },

    // Get user's full name
    getFullName(user) {
        if (!user) user = this.getCurrentUser();
        if (!user) return '';
        return `${user.lastName || ''} ${user.firstName || ''}`.trim();
    },

    // Get user initials for avatar fallback
    getInitials(user) {
        if (!user) user = this.getCurrentUser();
        if (!user) return '?';
        const first = (user.firstName || '?')[0];
        const last = (user.lastName || '?')[0];
        return `${last}${first}`.toUpperCase();
    }
};

// ===== DYNAMIC NAV AUTH UI =====
function updateNavAuth() {
    const navList = document.getElementById('navList');
    if (!navList) return;

    // Remove existing auth items
    const existingAuth = navList.querySelectorAll('.nav__item--auth');
    existingAuth.forEach(el => el.remove());

    // Also remove old register button
    const oldRegister = navList.querySelector('.nav__link--register');
    if (oldRegister) oldRegister.closest('.nav__item').remove();

    if (Auth.isLoggedIn()) {
        const user = Auth.getCurrentUser();
        const initials = Auth.getInitials(user);
        const fullName = Auth.getFullName(user);

        const li = document.createElement('li');
        li.className = 'nav__item nav__item--dropdown nav__item--auth';
        li.innerHTML = `
            <a href="profile.html" class="nav__link nav__link--user">
                <span class="nav-avatar">${initials}</span>
                <span class="nav-username">${user.firstName || 'Tài khoản'}</span>
                <i class="fas fa-chevron-down"></i>
            </a>
            <ul class="dropdown dropdown--user">
                <li>
                    <a href="profile.html">
                        <i class="fas fa-user-circle"></i> Hồ sơ cá nhân
                    </a>
                </li>
                <li>
                    <a href="profile.html#bookings">
                        <i class="fas fa-suitcase-rolling"></i> Tour đã đặt
                    </a>
                </li>
                <li>
                    <a href="profile.html#wishlist">
                        <i class="fas fa-heart"></i> Yêu thích
                    </a>
                </li>
                <li>
                    <a href="profile.html#settings">
                        <i class="fas fa-cog"></i> Cài đặt
                    </a>
                </li>
                <li class="dropdown__divider"></li>
                <li>
                    <a href="#" id="navLogoutBtn" class="dropdown__logout">
                        <i class="fas fa-sign-out-alt"></i> Đăng xuất
                    </a>
                </li>
            </ul>
        `;
        navList.appendChild(li);

        // Logout handler
        setTimeout(() => {
            const logoutBtn = document.getElementById('navLogoutBtn');
            if (logoutBtn) {
                logoutBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    Auth.logout();
                    showAuthNotification('Đăng xuất thành công! 👋', 'success');
                    setTimeout(() => {
                        window.location.href = 'index.html';
                    }, 1000);
                });
            }
        }, 100);
    } else {
        // Show login + register buttons
        const loginLi = document.createElement('li');
        loginLi.className = 'nav__item nav__item--auth';
        loginLi.innerHTML = `<a href="login.html" class="nav__link nav__link--login"><i class="fas fa-sign-in-alt"></i> ĐĂNG NHẬP</a>`;
        navList.appendChild(loginLi);

        const registerLi = document.createElement('li');
        registerLi.className = 'nav__item nav__item--auth';
        registerLi.innerHTML = `<a href="register.html" class="nav__link nav__link--register">ĐĂNG KÝ</a>`;
        navList.appendChild(registerLi);
    }
}

// Simple notification helper (used across pages)
function showAuthNotification(message, type) {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
        <button class="notification__close"><i class="fas fa-times"></i></button>
    `;
    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 10);

    notification.querySelector('.notification__close').addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    });

    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Initialize nav auth on every page
document.addEventListener('DOMContentLoaded', () => {
    updateNavAuth();
});
