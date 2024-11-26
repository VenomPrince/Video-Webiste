// Main Application Entry Point
import { Auth } from './auth.js';
import { VideoManager } from './videoManager.js';
import { CategoryManager } from './categoryManager.js';
import { UIEffects } from './uiEffects.js';

class App {
    constructor() {
        // Initialize authentication
        this.auth = new Auth();

        // Initialize video management
        this.videoManager = new VideoManager();

        // Initialize category management
        this.categoryManager = new CategoryManager(this.videoManager);

        // Initialize UI effects
        this.uiEffects = new UIEffects();
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});
