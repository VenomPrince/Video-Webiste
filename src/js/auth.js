// Authentication Module
const CONFIG = {
    defaultUsername: "username",
    defaultPassword: "password" // In production, this should be handled securely
};

export class Auth {
    constructor() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.getElementById("login-form").addEventListener("submit", this.handleLogin.bind(this));
        document.getElementById("logout-button").onclick = this.logout.bind(this);
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
