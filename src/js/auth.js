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

        const username = this.elements.usernameInput.value;
        const password = this.elements.passwordInput.value;

        // Validate credentials (replace with your actual authentication logic)
        this.authenticate(username, password)
            .then(isValid => {
                if (isValid) {
                    this.updateUIState(true);
                    this.elements.loginError.style.display = 'none';
                } else {
                    this.elements.loginError.style.display = 'block';
                }
            })
            .catch(error => {
                console.error('Authentication error:', error);
                this.elements.loginError.style.display = 'block';
            });
    }

    /**
     * Authenticate user credentials
     * @param {string} username - Username to validate
     * @param {string} password - Password to validate
     * @returns {Promise<boolean>} Promise resolving to authentication result
     * @private
     */
    async authenticate(username, password) {
        // Replace this with your actual authentication logic (e.g., API call)
        try {
            // Example: Make an API call to your authentication endpoint
            // const response = await fetch('/api/auth', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ username, password })
            // });
            // return response.ok;

            // Temporary: Return true for testing (replace with actual authentication)
            return true;
        } catch (error) {
            console.error('Authentication error:', error);
            return false;
        }
    }

    /**
     * Handle user logout
     * @private
     */
    handleLogout() {
        this.updateUIState(false);
        this.elements.loginForm.reset();
    }

    /**
     * Update UI state based on authentication status
     * @param {boolean} isAuthenticated - Whether user is authenticated
     * @private
     */
    updateUIState(isAuthenticated) {
        this.elements.loginPage.style.display = isAuthenticated ? 'none' : 'block';
        this.elements.mainContent.style.display = isAuthenticated ? 'block' : 'none';
    }
}
