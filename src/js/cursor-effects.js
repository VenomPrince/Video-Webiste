/**
 * Simple Cursor Effects Module
 */
export class CursorEffects {
    constructor() {
        this.createCursor();
        this.setupEventListeners();
    }

    createCursor() {
        // Remove any existing cursor and trails
        document.querySelectorAll('.custom-cursor, .cursor-trail').forEach(el => el.remove());

        // Create new cursor
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';
        document.body.appendChild(this.cursor);

        // Create trail elements (increased for longer trail)
        this.trails = [];
        for (let i = 0; i < 30; i++) {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.style.setProperty('--trail-index', i);
            document.body.appendChild(trail);
            this.trails.push(trail);
        }

        // Store previous positions for trail effect
        this.positions = [];
        this.lastTime = performance.now();
        this.isMoving = false;
        this.moveTimeout = null;
    }

    setupEventListeners() {
        // Add event listeners to document instead of window for better coverage
        document.addEventListener('mousemove', this.updateCursorPosition.bind(this));
        
        // Handle interactive elements
        const interactiveElements = document.querySelectorAll('button, a, input, [role="button"]');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => this.cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => this.cursor.classList.remove('hover'));
        });

        // Handle page visibility changes
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
                this.createCursor();
            }
        });
    }

    updateCursorPosition(e) {
        const currentTime = performance.now();
        const timeDelta = currentTime - this.lastTime;
        this.lastTime = currentTime;

        // Clear previous timeout and set new one
        clearTimeout(this.moveTimeout);
        this.isMoving = true;
        this.moveTimeout = setTimeout(() => {
            this.isMoving = false;
        }, 100);

        requestAnimationFrame(() => {
            const x = e.clientX;
            const y = e.clientY;

            // Update main cursor
            this.cursor.style.transform = `translate(${x}px, ${y}px)`;

            // Store position for trail effect with timestamp
            this.positions.unshift({ x, y, time: currentTime });
            if (this.positions.length > 30) {
                this.positions.pop();
            }

            // Update trails with smooth fade and scaling
            this.trails.forEach((trail, index) => {
                if (this.positions[index]) {
                    const pos = this.positions[index];
                    const age = (currentTime - pos.time) / 1000;
                    const baseScale = Math.max(0.1, 1 - (index * 0.03));
                    const movementScale = this.isMoving ? 1 : 0.5;
                    const scale = baseScale * movementScale;
                    
                    // Calculate trail opacity based on index
                    const opacity = Math.max(0, 1 - (index * 0.03));
                    
                    trail.style.transform = `translate(${pos.x}px, ${pos.y}px) scale(${scale})`;
                    trail.style.opacity = opacity;
                    
                    // Add rotation for pointy effect
                    if (index > 0 && this.positions[index - 1]) {
                        const prevPos = this.positions[index - 1];
                        const angle = Math.atan2(pos.y - prevPos.y, pos.x - prevPos.x) * 180 / Math.PI;
                        trail.style.transform += ` rotate(${angle}deg)`;
                    }
                }
            });
        });
    }
}

// Initialize on load
if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
        new CursorEffects();
    });
}
