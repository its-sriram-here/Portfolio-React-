import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useVelocity, useMotionValue, useMotionValueEvent } from 'framer-motion';

const CarHUD = () => {
    // --- Scroll Physics (Speedometer & Gear) ---
    const { scrollYProgress, scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);

    // Smooth out velocity for the speedometer
    const smoothVelocity = useSpring(scrollVelocity, { damping: 20, stiffness: 100 });

    // Map velocity to Speed (0 - 300 km/h)
    // We take absolute value because scrolling up also means speed
    const rawSpeed = useTransform(smoothVelocity, (v) => Math.min(Math.abs(v) / 5, 300));
    const speed = useSpring(rawSpeed, { damping: 20, stiffness: 50 });

    // Map scroll progress to Gears (1 - 6)
    const gear = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [1, 2, 3, 4, 5, 6]);
    const [currentGear, setCurrentGear] = useState(1);
    const [currentSpeed, setCurrentSpeed] = useState(0);

    useMotionValueEvent(gear, "change", (latest) => {
        setCurrentGear(Math.round(latest));
    });

    useMotionValueEvent(speed, "change", (latest) => {
        setCurrentSpeed(Math.round(latest));
    });

    // --- Mouse Physics (RPM & G-Force) ---
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [rpm, setRpm] = useState(1000); // Idle RPM
    const [gForce, setGForce] = useState({ x: 0, y: 0 });

    useEffect(() => {
        let lastX = 0;
        let lastY = 0;
        let lastTime = Date.now();
        let idleInterval;

        const handleMouseMove = (e) => {
            const now = Date.now();
            const dt = now - lastTime;
            if (dt === 0) return;

            const dx = e.clientX - lastX;
            const dy = e.clientY - lastY;

            // Calculate speed for RPM
            const distance = Math.sqrt(dx * dx + dy * dy);
            const mouseSpeed = distance / dt; // pixels per ms

            // Rev the engine based on mouse speed
            const targetRpm = Math.min(1000 + (mouseSpeed * 5000), 9000); // Cap at 9000 RPM
            setRpm(prev => prev + (targetRpm - prev) * 0.1); // Smooth transition

            // Calculate G-Force (Acceleration)
            // Simple approximation: G-force is proportional to velocity for visual effect
            setGForce({
                x: Math.min(Math.max(dx * 0.5, -20), 20),
                y: Math.min(Math.max(dy * 0.5, -20), 20)
            });

            lastX = e.clientX;
            lastY = e.clientY;
            lastTime = now;
        };

        // Idle RPM fluctuation
        idleInterval = setInterval(() => {
            setRpm(prev => {
                if (prev < 1100) return 1000 + Math.random() * 100; // Idle rumble
                return Math.max(1000, prev * 0.95); // Decelerate to idle
            });
            // Return G-Force to center
            setGForce(prev => ({
                x: prev.x * 0.9,
                y: prev.y * 0.9
            }));
        }, 50);

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(idleInterval);
        };
    }, []);

    // RPM Bar Calculation
    // 1000 RPM = 10%, 9000 RPM = 100%
    const rpmPercentage = Math.min(((rpm - 0) / 9000) * 100, 100);
    const isRedline = rpm > 7500;

    return (
        <div className="fixed inset-0 pointer-events-none z-50 flex flex-col justify-between p-6 md:p-12 overflow-hidden">
            {/* Top Right: Gear Indicator */}
            <div className="absolute top-24 right-6 md:right-12 flex flex-col items-end">
                <div className="flex items-center gap-2">
                    <span className="text-cyan-500/50 font-bold text-sm tracking-widest">GEAR</span>
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center transform skew-x-[-10deg]">
                        <span className="text-4xl md:text-6xl font-black text-white font-display" style={{ fontFamily: '"Syne", sans-serif' }}>
                            {currentGear}
                        </span>
                    </div>
                </div>
            </div>

            {/* Bottom Left: RPM Gauge */}
            <div className="absolute bottom-6 left-6 md:left-12 flex flex-col gap-2">
                <div className="flex items-end gap-4">
                    <div className="flex flex-col">
                        <span className="text-cyan-500/50 font-bold text-xs tracking-widest mb-1">RPM x1000</span>
                        <span className={`text-3xl md:text-5xl font-bold font-display w-24 ${isRedline ? 'text-red-500 animate-pulse' : 'text-white'}`} style={{ fontFamily: '"Syne", sans-serif' }}>
                            {(rpm / 1000).toFixed(1)}
                        </span>
                    </div>

                    {/* RPM Bar */}
                    <div className="w-48 md:w-80 h-12 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-1 transform skew-x-[-20deg] flex items-end">
                        <div className="w-full h-full flex gap-1">
                            {[...Array(20)].map((_, i) => {
                                const active = (i / 20) * 100 < rpmPercentage;
                                const isRedZone = i > 16;
                                return (
                                    <div
                                        key={i}
                                        className={`flex-1 rounded-sm transition-all duration-75 ${active
                                                ? (isRedZone ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]' : 'bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,0.5)]')
                                                : 'bg-white/5'
                                            }`}
                                        style={{ height: `${20 + (i * 4)}%` }} // Ascending height
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Right: Speedometer & G-Force */}
            <div className="absolute bottom-6 right-6 md:right-12 flex items-end gap-8">

                {/* G-Force Meter (Hidden on small screens) */}
                <div className="hidden md:flex flex-col items-center gap-2">
                    <span className="text-cyan-500/50 font-bold text-xs tracking-widest">G-FORCE</span>
                    <div className="w-20 h-20 rounded-full border border-white/20 bg-black/40 backdrop-blur-md relative flex items-center justify-center">
                        <div className="absolute inset-0 border border-cyan-500/20 rounded-full scale-50" />
                        <div className="w-full h-[1px] bg-cyan-500/20 absolute" />
                        <div className="h-full w-[1px] bg-cyan-500/20 absolute" />

                        {/* G-Force Dot */}
                        <motion.div
                            className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,1)]"
                            animate={{ x: gForce.x, y: gForce.y }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                    </div>
                </div>

                {/* Speedometer */}
                <div className="flex flex-col items-end">
                    <div className="flex items-baseline gap-2">
                        <span className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 font-display tracking-tighter" style={{ fontFamily: '"Syne", sans-serif' }}>
                            {currentSpeed.toString().padStart(3, '0')}
                        </span>
                        <span className="text-xl font-bold text-cyan-500 mb-4">KM/H</span>
                    </div>

                    {/* Speed Bar */}
                    <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-cyan-500 to-purple-600"
                            style={{ width: `${Math.min((currentSpeed / 300) * 100, 100)}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Center Overlay: Turbo Mode (Visible at high speed) */}
            <div
                className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${currentSpeed > 200 ? 'opacity-100' : 'opacity-0'}`}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-purple-500/10 mix-blend-overlay" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            </div>
        </div>
    );
};

export default CarHUD;
