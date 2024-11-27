// Authentication Module
const CONFIG = {
    defaultUsername: "username",
    defaultPassword: "password" // In production, this should be handled securely
};

export class Auth {
    constructor() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupEventListeners());
        } else {
            this.setupEventListeners();
        }
    }

    setupEventListeners() {
        const loginForm = document.getElementById("login-form");
        const logoutButton = document.getElementById("logout-button");
        
        if (loginForm) {
            loginForm.addEventListener("submit", this.handleLogin.bind(this));
        }
        
        if (logoutButton) {
            logoutButton.onclick = this.logout.bind(this);
        }
    }

    handleLogin(event) {
        event.preventDefault();
        
        const usernameInput = document.getElementById("username").value;
        const passwordInput = document.getElementById("password").value;
        
        try {
            if (this.validateCredentials(usernameInput, passwordInput)) {
                document.getElementById("login-page").style.display = "none";
                document.getElementById("main-content").style.display = "block";
                document.getElementById("login-error").style.display = "none";
            } else {
                document.getElementById("login-error").style.display = "block";
            }
        } catch (error) {
            console.error('Login error:', error);
            document.getElementById("login-error").style.display = "block";
        }
    }

    validateCredentials(username, password) {
        return username === CONFIG.defaultUsername && password === CONFIG.defaultPassword;
    }

    logout() {
        // Reset form
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("login-error").style.display = "none";
        
        // Switch views
        document.getElementById("main-content").style.display = "none";
        const loginPage = document.getElementById("login-page");
        loginPage.style.removeProperty("display");  // Let CSS handle the display
        
        // Reapply fade-in animation
        loginPage.classList.remove("fade-in");
        void loginPage.offsetWidth; // Trigger reflow
        loginPage.classList.add("fade-in");
    }
}
