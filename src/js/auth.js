/**
 * Authentication Module
 * Handles user authentication and session management
 */

const AUTH_CONFIG = {
    selectors: {
        loginForm: "#login-form",
        logoutButton: "#logout-button",
        loginError: "#login-error",
        loginPage: "#login-page",
        mainContent: "#main-content",
        usernameInput: "#username",
        passwordInput: "#password"
    }
};

export class Auth {
    constructor() {
        this.elements = {};
        this.setupEventListeners();
        this.checkExistingSession();
    }

    /**
     * Initialize event listeners for login and logout
     * @private
     */
    setupEventListeners() {
        // Cache DOM elements
        Object.entries(AUTH_CONFIG.selectors).forEach(([key, selector]) => {
            this.elements[key] = document.querySelector(selector);
        });

        // Add event listeners
        if (this.elements.loginForm) {
            this.elements.loginForm.addEventListener("submit", this.handleLogin.bind(this));
        }
        if (this.elements.logoutButton) {
            this.elements.logoutButton.addEventListener("click", this.handleLogout.bind(this));
        }

        // Set initial states
        this.updateUIState(false);
    }

    /**
     * Check for existing session
     * @private
     */
    checkExistingSession() {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
        if (isLoggedIn) {
            this.updateUIState(true);
        }
    }

    /**
     * Handle login form submission
     * @param {Event} event - Form submission event
     * @private
     */
    handleLogin(event) {
        event.preventDefault();

        const username = this.elements.usernameInput.value.trim();
        const password = this.elements.passwordInput.value.trim();

        // Basic validation
        if (!username || !password) {
            this.showError('Please enter both username and password');
            return;
        }

        // For testing: accept any non-empty credentials
        this.loginSuccess();
    }

    /**
     * Show error message
     * @param {string} message - Error message to display
     * @private
     */
    showError(message) {
        if (this.elements.loginError) {
            this.elements.loginError.textContent = message;
            this.elements.loginError.style.display = 'block';
        }
    }

    /**
     * Handle successful login
     * @private
     */
    loginSuccess() {
        sessionStorage.setItem('isLoggedIn', 'true');
        this.updateUIState(true);
        this.elements.loginError.style.display = 'none';
        this.elements.loginForm.reset();
    }

    /**
     * Handle user logout
     * @private
     */
    handleLogout() {
        sessionStorage.removeItem('isLoggedIn');
        this.updateUIState(false);
        if (this.elements.loginForm) {
            this.elements.loginForm.reset();
        }
        if (this.elements.loginError) {
            this.elements.loginError.style.display = 'none';
        }
    }

    /**
     * Update UI state based on authentication status
     * @param {boolean} isAuthenticated - Whether user is authenticated
     * @private
     */
    updateUIState(isAuthenticated) {
        if (this.elements.loginPage) {
            this.elements.loginPage.style.display = isAuthenticated ? 'none' : 'flex';
        }
        if (this.elements.mainContent) {
            this.elements.mainContent.style.display = isAuthenticated ? 'block' : 'none';
        }
    }
}
