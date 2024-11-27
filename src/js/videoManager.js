// Video Management Module
import { videoConfig } from '../config/videos.js';

export class VideoManager {
    constructor() {
        this.currentPage = 0;
        this.itemsPerPage = 10;
        this.videoContainer = document.querySelector('.video-container');
        this.setupEventListeners();
        this.displayVideos();
    }

    setupEventListeners() {
        const prevButton = document.getElementById("prev-button");
        const nextButton = document.getElementById("next-button");
        if (prevButton) prevButton.onclick = () => this.navigateVideos(-1);
        if (nextButton) nextButton.onclick = () => this.navigateVideos(1);
    }

    createVideoElement(videoUrl) {
        const videoBox = document.createElement('div');
        videoBox.className = 'video-box';
        
        const iframe = document.createElement('iframe');
        iframe.src = videoUrl;
        iframe.allowFullscreen = true;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        
        videoBox.appendChild(iframe);
        return videoBox;
    }

    displayVideos() {
        if (!this.videoContainer) return;
        
        this.videoContainer.innerHTML = '';
        
        // Display videos by category
        for (const category in videoConfig) {
            const categorySection = document.createElement('div');
            categorySection.className = 'category-section';
            
            // Add category title
            const categoryTitle = document.createElement('h2');
            categoryTitle.textContent = category;
            categorySection.appendChild(categoryTitle);
            
            // Add videos
            const videosContainer = document.createElement('div');
            videosContainer.className = 'videos-container';
            
            videoConfig[category].forEach(videoUrl => {
                const videoElement = this.createVideoElement(videoUrl);
                videosContainer.appendChild(videoElement);
            });
            
            categorySection.appendChild(videosContainer);
            this.videoContainer.appendChild(categorySection);
        }
    }

    navigateVideos(direction) {
        const categories = Object.keys(videoConfig);
        if (categories.length === 0) return;

        this.currentPage = (this.currentPage + direction + categories.length) % categories.length;
        this.displayVideos();
    }
}
