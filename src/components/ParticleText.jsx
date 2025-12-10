import React, { useEffect, useRef } from 'react';

const ParticleText = ({ text = "SRIRAM" }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        let mouse = { x: null, y: null, radius: 100 };

        const adjustCanvasSize = () => {
            canvas.width = window.innerWidth; // Full width for better resolution
            canvas.height = 300; // Fixed height for the text container
        };

        adjustCanvasSize();

        // Handle Mouse Move
        const handleMouseMove = (event) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        }

        // Handle Touch Move
        const handleTouchMove = (event) => {
            event.preventDefault();
            const rect = canvas.getBoundingClientRect();
            const touch = event.touches[0];
            mouse.x = touch.clientX - rect.left;
            mouse.y = touch.clientY - rect.top;
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);
        canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
        canvas.addEventListener('touchstart', handleTouchMove, { passive: false });
        canvas.addEventListener('touchend', handleMouseLeave);

        window.addEventListener('resize', () => {
            adjustCanvasSize();
            init();
        });

        class Particle {
            constructor(x, y) {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.destX = x;
                this.destY = y;
                this.size = Math.random() * 2 + 1; // Random size
                this.vx = (Math.random() - 0.5) * 2;
                this.vy = (Math.random() - 0.5) * 2;
                this.accX = 0;
                this.accY = 0;
                this.friction = Math.random() * 0.05 + 0.92; // Unique friction for organic movement
                this.color = `hsl(${Math.random() * 60 + 180}, 100%, 50%)`; // Cyan to Blue range
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update() {
                // Physics to return to destination

                // Mouse Interaction
                if (mouse.x != null) {
                    let dxMouse = mouse.x - this.x;
                    let dyMouse = mouse.y - this.y;
                    let distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
                    if (distanceMouse < mouse.radius) {
                        const repulsionForce = 5;
                        const angle = Math.atan2(dyMouse, dxMouse);
                        this.accX -= Math.cos(angle) * repulsionForce;
                        this.accY -= Math.sin(angle) * repulsionForce;
                    }
                }

                // Spring back to home
                this.accX += (this.destX - this.x) * 0.15; // Increased spring strength for faster return
                this.accY += (this.destY - this.y) * 0.15;

                this.vx += this.accX;
                this.vy += this.accY;
                this.vx *= 0.9; // Slightly less friction for snappier movement
                this.vy *= this.friction;

                this.x += this.vx;
                this.y += this.vy;

                this.accX = 0;
                this.accY = 0;

                // Color cycling
                // Let's stick to the theme: Cyan -> Purple
                const hue = (Date.now() / 50) % 60 + 180; // 180 (Cyan) to 240 (Blue)
                this.color = `hsla(${hue}, 100%, 70%, 0.8)`;
            }
        }

        const init = () => {
            particles = [];
            // Draw text to canvas to get pixel data
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Responsive Font Size
            const isMobile = window.innerWidth < 768;
            const fontSize = isMobile ? 60 : 120; // Smaller font for mobile
            const density = isMobile ? 3 : 4; // Higher density number = fewer particles (optimization)

            ctx.font = `900 ${fontSize}px "Syne", sans-serif`;
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(text, canvas.width / 2, canvas.height / 2);

            const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);
            // Scan for pixels
            for (let y = 0, y2 = textCoordinates.height; y < y2; y += density) {
                for (let x = 0, x2 = textCoordinates.width; x < x2; x += density) {
                    if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
                        particles.push(new Particle(x, y));
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.draw();
                particle.update();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        // Ensure font is loaded before starting
        document.fonts.ready.then(() => {
            init();
            animate();
        });

        return () => {
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            canvas.removeEventListener('touchmove', handleTouchMove);
            canvas.removeEventListener('touchstart', handleTouchMove);
            canvas.removeEventListener('touchend', handleMouseLeave);
            window.removeEventListener('resize', adjustCanvasSize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [text]);

    return (
        <div className="w-full flex justify-center items-center overflow-hidden">
            <canvas ref={canvasRef} className="cursor-pointer touch-none" />
        </div>
    );
};

export default ParticleText;
