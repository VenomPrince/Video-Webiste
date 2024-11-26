// UI Effects Module
const CONFIG = {
    glowRadius: 400
};

export class UIEffects {
    constructor() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.addEventListener('mousemove', this.handleMouseMove.bind(this));
    }

    calculateDistance(event, element) {
        const rect = element.getBoundingClientRect();
        const elementCenterX = rect.left + rect.width / 2;
        const elementCenterY = rect.top + rect.height / 2;
        
        return Math.sqrt(
            Math.pow(event.clientX - elementCenterX, 2) +
            Math.pow(event.clientY - elementCenterY, 2)
        );
    }

    handleMouseMove(event) {
        const categories = document.querySelectorAll('.category');
        
        categories.forEach(category => {
            const distance = this.calculateDistance(event, category);
            const maxDistance = CONFIG.glowRadius;
            
            if (distance < maxDistance) {
                const intensity = 1 - (distance / maxDistance);
                const glow = Math.min(20 * intensity, 20);
                category.style.boxShadow = `0 0 ${glow}px rgba(255, 255, 255, ${intensity})`;
            } else {
                category.style.boxShadow = 'none';
            }
        });
    }
}
