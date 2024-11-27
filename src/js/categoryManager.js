/**
 * Category Management Module
 * Handles video category display and navigation
 */

import { videoConfig } from '../config/videos.js';

const CATEGORY_CONFIG = {
    itemsPerPage: 10,
    selectors: {
        backButton: "#back-button",
        categoriesContainer: "#categories-container",
        categoriesPage: "#categories-page",
        videoPage: "#video-page",
        videoContainer: "#video-container",
        prevButton: "#prev-button",
        nextButton: "#next-button"
    },
    classNames: {
        category: "category"
    }
};

export class CategoryManager {
    /**
     * Initialize CategoryManager
     * @param {Object} videoManager - Video management instance
     */
    constructor(videoManager) {
        this.videoManager = videoManager;
        this.currentPage = 0;
        this.elements = {};
        this.currentCategory = null;
        this.setupElements();
        this.setupEventListeners();
        this.displayCategories();
    }

    /**
     * Cache DOM elements
     * @private
     */
    setupElements() {
        Object.entries(CATEGORY_CONFIG.selectors).forEach(([key, selector]) => {
            this.elements[key] = document.querySelector(selector);
        });
    }

    /**
     * Initialize event listeners
     * @private
     */
    setupEventListeners() {
        this.elements.backButton?.addEventListener("click", this.backToCategories.bind(this));
        this.elements.prevButton?.addEventListener("click", () => this.navigateVideos(-1));
        this.elements.nextButton?.addEventListener("click", () => this.navigateVideos(1));
    }

    /**
     * Display available video categories
     * @private
     */
    displayCategories() {
        if (!this.elements.categoriesContainer) return;

        this.elements.categoriesContainer.innerHTML = "";
        
        Object.keys(videoConfig).forEach(category => {
            const div = document.createElement("div");
            div.className = CATEGORY_CONFIG.classNames.category;
            div.textContent = category;
            div.setAttribute("role", "listitem");
            div.addEventListener("click", () => this.openCategory(category));
            this.elements.categoriesContainer.appendChild(div);
        });
    }

    /**
     * Open a specific video category
     * @param {string} category - Category name
     * @private
     */
    openCategory(category) {
        this.currentCategory = category;
        this.currentPage = 0;
        this.updateDisplay();
        this.displayVideos();
    }

    /**
     * Display videos for the current category and page
     * @private
     */
    displayVideos() {
        if (!this.currentCategory || !this.elements.videoContainer) return;

        const videos = videoConfig[this.currentCategory];
        this.elements.videoContainer.innerHTML = "";
        
        const startIndex = this.currentPage * CATEGORY_CONFIG.itemsPerPage;
        const endIndex = Math.min(startIndex + CATEGORY_CONFIG.itemsPerPage, videos.length);
        
        for (let i = startIndex; i < endIndex; i++) {
            const iframe = document.createElement("iframe");
            iframe.src = videos[i];
            iframe.allowFullscreen = true;
            iframe.setAttribute("role", "listitem");
            iframe.title = `Video ${i + 1} in ${this.currentCategory}`;
            this.elements.videoContainer.appendChild(iframe);
        }
        
        this.updateNavigationButtons(videos.length);
    }

    /**
     * Update navigation button states
     * @param {number} totalVideos - Total number of videos
     * @private
     */
    updateNavigationButtons(totalVideos) {
        if (!this.elements.prevButton || !this.elements.nextButton) return;

        this.elements.prevButton.disabled = this.currentPage === 0;
        this.elements.nextButton.disabled = 
            (this.currentPage + 1) * CATEGORY_CONFIG.itemsPerPage >= totalVideos;
    }

    /**
     * Navigate through video pages
     * @param {number} direction - Navigation direction (-1 for prev, 1 for next)
     * @private
     */
    navigateVideos(direction) {
        this.currentPage += direction;
        this.displayVideos();
    }

    /**
     * Return to categories view
     * @private
     */
    backToCategories() {
        this.currentCategory = null;
        this.currentPage = 0;
        this.updateDisplay();
    }

    /**
     * Update display state
     * @private
     */
    updateDisplay() {
        if (!this.elements.categoriesPage || !this.elements.videoPage) return;

        this.elements.categoriesPage.style.display = this.currentCategory ? "none" : "block";
        this.elements.videoPage.style.display = this.currentCategory ? "block" : "none";
    }
}
