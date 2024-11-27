// Main Application Entry Point
import { Auth } from './auth.js';

class App {
    constructor() {
        // Initialize authentication
        this.auth = new Auth();
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});
