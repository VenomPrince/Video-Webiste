/**
 * Main Application Entry Point
 * Initializes and coordinates all application components
 */

import { Auth } from './auth.js';
import { VideoManager } from './videoManager.js';
import { CategoryManager } from './categoryManager.js';
import { UIEffects } from './uiEffects.js';
import { CursorEffects } from './cursor-effects.js';

class App {
    constructor() {
        this.initializeComponents();
    }

    /**
     * Initialize all application components
     * @private
     */
    initializeComponents() {
        try {
            // Initialize cursor effects immediately
            this.cursorEffects = new CursorEffects();

            // Initialize authentication
            this.auth = new Auth();

            // Initialize video management
            this.videoManager = new VideoManager();

            // Initialize category management
            this.categoryManager = new CategoryManager(this.videoManager);

            // Initialize UI effects
            this.uiEffects = new UIEffects();

            console.log('Application initialized successfully');
        } catch (error) {
            console.error('Failed to initialize application:', error);
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    try {
        window.app = new App();
    } catch (error) {
        console.error('Failed to start application:', error);
    }
});