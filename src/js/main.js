/**
 * Main Application Entry Point
 * Initializes and coordinates all application components
 */

import { Auth } from './auth.js';
import { VideoManager } from './videoManager.js';
import { CategoryManager } from './categoryManager.js';
import { UIEffects } from './uiEffects.js';
import { CursorEffects } from './cursor-effects.js';
import { videoConfig } from '../config.js';

// Function to display videos based on category
function displayVideos(category) {
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = ''; // Clear existing videos

    if (videoConfig[category]) {
        videoConfig[category].forEach(videoUrl => {
            const iframe = document.createElement('iframe');
            iframe.src = videoUrl;
            iframe.width = '560';
            iframe.height = '315';
            iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            videoContainer.appendChild(iframe);
        });
    } else {
        console.error(`Category "${category}" not found in videoConfig.`);
    }
}

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
            new CursorEffects();

            // Initialize authentication
            new Auth();

            // Initialize video management
            this.videoManager = new VideoManager();

            // Initialize category management
            this.categoryManager = new CategoryManager(this.videoManager);

            // Initialize UI effects
            new UIEffects();

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
        displayVideos('youtube');
    } catch (error) {
        console.error('Failed to start application:', error);
    }
});