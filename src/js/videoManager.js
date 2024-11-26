// Video Management Module
import { videoConfig } from '../config/videos.js';

const CONFIG = {
    itemsPerPage: 10
};

export class VideoManager {
    constructor() {
        this.currentPage = 0;
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.getElementById("prev-button").onclick = () => this.navigateVideos(-1);
        document.getElementById("next-button").onclick = () => this.navigateVideos(1);
    }

    displayVideos(category) {
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
        this.displayVideos(currentCategory);
    }
}
