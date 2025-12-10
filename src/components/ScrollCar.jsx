import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useVelocity, useMotionValueEvent } from 'framer-motion';

const ScrollCar = () => {
    const { scrollYProgress, scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const [isMoving, setIsMoving] = useState(false);

    // Smooth out the progress movement
    const smoothProgress = useSpring(scrollYProgress, {
        damping: 50,
        stiffness: 400,
        mass: 0.1
    });

    // Map progress to screen width (leaving some padding)
    const x = useTransform(smoothProgress, [0, 1], ["0vw", "88vw"]);

    // Transform velocity into car physics
    // Tilt: Positive velocity (scrolling down) -> Tilt back (acceleration)
    // Negative velocity (scrolling up) -> Tilt forward (braking)
    const rawTilt = useTransform(scrollVelocity, [-2000, 0, 2000], [-15, 0, 15]);
    const tilt = useSpring(rawTilt, { damping: 20, stiffness: 200 });

    // Squash/Stretch based on speed
    const scaleX = useTransform(scrollVelocity, [-2000, 0, 2000], [1.2, 1, 1.2]);
    const scaleY = useTransform(scrollVelocity, [-2000, 0, 2000], [0.8, 1, 0.8]);

    // Wheel rotation
    const [rotation, setRotation] = useState(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setRotation(latest * 0.5); // Spin wheels based on scroll position
        setIsMoving(Math.abs(scrollVelocity.get()) > 50);
    });

    return (
        <div className="fixed bottom-0 left-0 w-full h-24 pointer-events-none z-50 overflow-hidden">
            {/* Road Line */}
            <div className="absolute bottom-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-30" />

            <motion.div
                style={{ x }}
                className="absolute bottom-1 w-32 h-16"
            >
                <motion.div
                    style={{
                        rotate: tilt,
                        scaleX: scaleX,
                        scaleY: scaleY,
                    }}
                    className="relative w-full h-full"
                >
                    {/* Nitro/Exhaust Effect (Visible on high speed) */}
                    <motion.div
                        style={{ opacity: useTransform(scrollVelocity, [-1000, -100, 100, 1000], [1, 0, 0, 1]) }}
                        className="absolute -left-8 bottom-2 w-12 h-4 bg-gradient-to-l from-cyan-400 to-transparent blur-md rounded-full"
                    />

                    {/* Car Body SVG */}
                    <svg viewBox="0 0 200 80" className="w-full h-full drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                        <defs>
                            <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#22d3ee" />
                                <stop offset="100%" stopColor="#a855f7" />
                            </linearGradient>
                        </defs>

                        {/* Chassis */}
                        <path
                            d="M10,55 Q10,55 25,55 L35,40 L60,35 L110,25 L160,25 L185,40 L195,50 L195,55 L10,55"
                            fill="none"
                            stroke="url(#carGradient)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        {/* Roof/Window */}
                        <path
                            d="M60,35 L80,15 L140,15 L160,25"
                            fill="none"
                            stroke="url(#carGradient)"
                            strokeWidth="2"
                            className="opacity-80"
                        />

                        {/* Spoiler */}
                        <path
                            d="M10,45 L5,30 L25,30"
                            fill="none"
                            stroke="#a855f7"
                            strokeWidth="3"
                        />
                    </svg>

                    {/* Wheels */}
                    <motion.div
                        style={{ rotate: rotation }}
                        className="absolute left-[35px] bottom-[18px] w-7 h-7 border-2 border-cyan-400 rounded-full flex items-center justify-center bg-black/50"
                    >
                        <div className="w-5 h-5 border border-purple-500 rounded-full border-dashed opacity-80" />
                    </motion.div>

                    <motion.div
                        style={{ rotate: rotation }}
                        className="absolute right-[35px] bottom-[18px] w-8 h-8 border-2 border-cyan-400 rounded-full flex items-center justify-center bg-black/50"
                    >
                        <div className="w-6 h-6 border border-purple-500 rounded-full border-dashed opacity-80" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ScrollCar;
