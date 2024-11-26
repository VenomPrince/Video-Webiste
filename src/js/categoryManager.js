// Category Management Module
import { videoConfig } from '../config/videos.js';

const CONFIG = {
    itemsPerPage: 10
};

export class CategoryManager {
    constructor(videoManager) {
        this.videoManager = videoManager;
        this.currentPage = 0;
        this.setupEventListeners();
        this.displayCategories();
    }

    setupEventListeners() {
        document.getElementById("back-button").onclick = this.backToCategories.bind(this);
    }

    displayCategories() {
        const container = document.getElementById("categories-container");
        container.innerHTML = "";
        
        Object.keys(videoConfig).forEach(category => {
            const div = document.createElement("div");
            div.className = "category";
            div.textContent = category;
            div.onclick = () => this.openCategory(category);
            container.appendChild(div);
        });
    }

    openCategory(category) {
        document.getElementById("categories-page").style.display = "none";
        document.getElementById("video-page").style.display = "block";
        
        const videos = videoConfig[category];
        const container = document.getElementById("video-container");
        container.innerHTML = "";
        
        const startIndex = this.currentPage * CONFIG.itemsPerPage;
        const endIndex = Math.min(startIndex + CONFIG.itemsPerPage, videos.length);
        
        for (let i = startIndex; i < endIndex; i++) {
            const iframe = document.createElement("iframe");
            iframe.src = videos[i];
            iframe.allowFullscreen = true;
            container.appendChild(iframe);
        }
        
        this.updateNavigationButtons(videos.length);
    }

    updateNavigationButtons(totalVideos) {
        const prevButton = document.getElementById("prev-button");
        const nextButton = document.getElementById("next-button");
        
        prevButton.disabled = this.currentPage === 0;
        nextButton.disabled = (this.currentPage + 1) * CONFIG.itemsPerPage >= totalVideos;
    }

    navigateVideos(direction) {
        this.currentPage += direction;
        const currentCategory = Object.keys(videoConfig)[0];
        this.openCategory(currentCategory);
    }

    backToCategories() {
        document.getElementById("categories-page").style.display = "block";
        document.getElementById("video-page").style.display = "none";
        this.currentPage = 0;
    }
}
