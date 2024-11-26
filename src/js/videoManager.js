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

    createVideoElement(video) {
        const videoBox = document.createElement('div');
        videoBox.className = 'video-box';
        
        const iframe = document.createElement('iframe');
        iframe.src = video.url;
        iframe.allowFullscreen = true;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        
        const videoInfo = document.createElement('div');
        videoInfo.className = 'video-info';
        
        const title = document.createElement('h3');
        title.textContent = video.title;
        
        videoInfo.appendChild(title);
        videoBox.appendChild(iframe);
        videoBox.appendChild(videoInfo);
        
        return videoBox;
    }

    displayVideos() {
        if (!this.videoContainer) return;
        
        this.videoContainer.innerHTML = '';
        
        // Display videos by category
        for (const category in videoConfig) {
            const categorySection = document.createElement('div');
            categorySection.className = 'category-section';
            
            const categoryHeader = document.createElement('h2');
            categoryHeader.className = 'category-header';
            categoryHeader.textContent = category;
            categorySection.appendChild(categoryHeader);
            
            const videosContainer = document.createElement('div');
            videosContainer.className = 'videos-grid';
            
            videoConfig[category].forEach(video => {
                const videoElement = this.createVideoElement(video);
                videosContainer.appendChild(videoElement);
            });
            
            categorySection.appendChild(videosContainer);
            this.videoContainer.appendChild(categorySection);
        }
    }

    navigateVideos(direction) {
        const totalPages = Math.ceil(Object.values(videoConfig).flat().length / this.itemsPerPage);
        this.currentPage = Math.max(0, Math.min(this.currentPage + direction, totalPages - 1));
        this.displayVideos();
    }
}
