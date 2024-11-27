/**
 * Authentication Module
 * Handles user authentication and session management
 */

const AUTH_CONFIG = {
    credentials: {
        username: "username",
        password: "password"
    },
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
        this.elements.loginForm?.addEventListener("submit", this.handleLogin.bind(this));
        this.elements.logoutButton?.addEventListener("click", this.handleLogout.bind(this));

        // Set initial states
        this.updateUIState(false);
    }

    /**
     * Handle login form submission
     * @param {Event} event - Form submission event
     * @private
     */
    handleLogin(event) {
        event.preventDefault();
        
        const credentials = {
            username: this.elements.usernameInput.value,
            password: this.elements.passwordInput.value
        };
        
        try {
            if (this.validateCredentials(credentials)) {
                this.updateUIState(true);
                this.elements.loginError.style.display = "none";
            } else {
                this.elements.loginError.style.display = "block";
            }
        } catch (error) {
            console.error('Authentication error:', error);
            this.elements.loginError.style.display = "block";
        }
    }

    /**
     * Validate user credentials
     * @param {Object} credentials - User credentials
     * @param {string} credentials.username - Username
     * @param {string} credentials.password - Password
     * @returns {boolean} - Whether credentials are valid
     * @private
     */
    validateCredentials({ username, password }) {
        return username === AUTH_CONFIG.credentials.username && 
               password === AUTH_CONFIG.credentials.password;
    }

    /**
     * Handle user logout
     * @private
     */
    handleLogout() {
        this.resetForm();
        this.updateUIState(false);
    }

    /**
     * Reset the login form
     * @private
     */
    resetForm() {
        this.elements.usernameInput.value = "";
        this.elements.passwordInput.value = "";
        this.elements.loginError.style.display = "none";
    }

    /**
     * Update UI state based on authentication status
     * @param {boolean} isAuthenticated - Whether user is authenticated
     * @private
     */
    updateUIState(isAuthenticated) {
        this.elements.loginPage.style.display = isAuthenticated ? "none" : "flex";
        this.elements.mainContent.style.display = isAuthenticated ? "block" : "none";
    }
}
