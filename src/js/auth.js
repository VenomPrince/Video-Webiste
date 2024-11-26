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
        document.getElementById("login-page").style.display = "block";
        document.getElementById("main-content").style.display = "none";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
}
