class Butterfly {
    constructor() {
        console.log('Creating butterfly...');
        this.element = document.createElement('div');
        this.element.className = 'butterfly';
        this.element.style.pointerEvents = 'all';
        this.element.innerHTML = '🦋';
        document.body.appendChild(this.element);
        
        this.isFlying = false;
        this.currentX = window.innerWidth / 2;
        this.currentY = window.innerHeight / 2;
        this.targetX = this.currentX;
        this.targetY = this.currentY;
        
        this.init();
        console.log('Butterfly created and initialized');
    }
    
    init() {
        // Initial position
        this.updatePosition(this.currentX, this.currentY);
        
        // Start random movement
        this.startRandomMovement();
        
        // Add click handler to the butterfly itself
        this.element.addEventListener('click', () => {
            console.log('Butterfly clicked!');
            this.startFlying();
        });
    }
    
    updatePosition(x, y) {
        this.element.style.left = `${x}px`;
        this.element.style.top = `${y}px`;
    }
    
    startFlying() {
        if (this.isFlying) return;
        
        this.isFlying = true;
        this.element.classList.add('flying');
        
        // Generate random position within viewport
        const newX = Math.random() * (window.innerWidth - 50);
        const newY = Math.random() * (window.innerHeight - 50);
        
        this.flyTo(newX, newY);
    }
    
    async flyTo(x, y) {
        this.targetX = x;
        this.targetY = y;
        
        await this.animateFlying();
        
        this.element.classList.remove('flying');
        this.isFlying = false;
    }
    
    async animateFlying() {
        const startX = this.currentX;
        const startY = this.currentY;
        const diffX = this.targetX - startX;
        const diffY = this.targetY - startY;
        const duration = 1500; // 1.5 seconds
        const startTime = Date.now();
        
        return new Promise(resolve => {
            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Ease out cubic
                const easing = 1 - Math.pow(1 - progress, 3);
                
                this.currentX = startX + diffX * easing;
                this.currentY = startY + diffY * easing;
                
                this.updatePosition(this.currentX, this.currentY);
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    resolve();
                }
            };
            
            animate();
        });
    }
    
    startRandomMovement() {
        const moveRandomly = () => {
            if (!this.isFlying) {
                this.startFlying();
            }
            
            // Wait random time before next movement
            setTimeout(moveRandomly, Math.random() * 3000 + 2000);
        };
        
        // Start the random movement after a short delay
        setTimeout(moveRandomly, 1000);
    }
}

// Create butterfly when DOM is loaded
window.addEventListener('load', () => {
    console.log('Window loaded, creating butterfly...');
    new Butterfly();
});
