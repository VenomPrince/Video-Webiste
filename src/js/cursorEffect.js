export class CursorEffect {
    constructor() {
        this.createSVGFilter();
        this.createGlitchElement();
        this.trailElements = [];
        this.maxTrails = 12;
        this.lastPositions = [];
        this.init();
    }

    createSVGFilter() {
        const svg = `
        <svg class="svg-filters">
            <defs>
                <filter id="distortion-filter">
                    <feTurbulence 
                        type="fractalNoise" 
                        baseFrequency="0.012 0.012" 
                        numOctaves="4" 
                        seed="2"
                        stitchTiles="stitch">
                        <animate 
                            attributeName="baseFrequency" 
                            from="0.012 0.012" 
                            to="0.025 0.025" 
                            dur="2s" 
                            repeatCount="indefinite" />
                    </feTurbulence>
                    <feDisplacementMap 
                        in="SourceGraphic" 
                        scale="25" />
                    <feGaussianBlur stdDeviation="3" />
                    <feBlend in="SourceGraphic" mode="screen" />
                </filter>
            </defs>
        </svg>`;
        document.body.insertAdjacentHTML('beforeend', svg);
    }

    createGlitchElement() {
        this.glitchEffect = document.createElement('div');
        this.glitchEffect.className = 'screen-glitch';
        document.body.appendChild(this.glitchEffect);
    }

    createTrailElement(x, y, index, total) {
        const trail = document.createElement('div');
        trail.className = 'trail-effect';
        trail.style.left = x + 'px';
        trail.style.top = y + 'px';
        
        const scale = 1 + ((total - index) / total * 0.3);
        trail.style.transform = `translate(-50%, -50%) scale(${scale})`;
        
        const opacity = 0.7 * (1 - (index / total));
        trail.style.opacity = opacity;
        
        document.body.appendChild(trail);
        
        setTimeout(() => {
            trail.classList.add('fade');
            setTimeout(() => {
                if (trail.parentNode) {
                    document.body.removeChild(trail);
                    this.trailElements = this.trailElements.filter(el => el !== trail);
                }
            }, 300);
        }, 50);

        this.trailElements.push(trail);

        if (this.trailElements.length > this.maxTrails) {
            const oldestTrail = this.trailElements.shift();
            if (oldestTrail && oldestTrail.parentNode) {
                oldestTrail.parentNode.removeChild(oldestTrail);
            }
        }
    }

    updateTrail(x, y) {
        this.lastPositions.unshift({ x, y });
        
        if (this.lastPositions.length > this.maxTrails) {
            this.lastPositions.pop();
        }

        this.lastPositions.forEach((pos, index) => {
            if (index % 2 === 0) {
                this.createTrailElement(pos.x, pos.y, index, this.lastPositions.length);
            }
        });
    }

    init() {
        let lastX = 0;
        let lastY = 0;
        let lastTrailTime = 0;
        
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            
            this.glitchEffect.style.left = x + 'px';
            this.glitchEffect.style.top = y + 'px';
            
            const now = Date.now();
            if (now - lastTrailTime > 16) {
                const distance = Math.hypot(x - lastX, y - lastY);
                if (distance > 5) {
                    this.updateTrail(x, y);
                    lastTrailTime = now;
                    lastX = x;
                    lastY = y;
                }
            }
        });
    }
}
