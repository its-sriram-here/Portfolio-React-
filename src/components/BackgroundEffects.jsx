import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Breathing Gradient Background */}
            <motion.div
                animate={{
                    opacity: [0.4, 0.6, 0.4],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"
            />

            {/* Noise Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />

            {/* Floating Particles/Orbs - Reduced count and optimized */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        opacity: 0.3,
                        scale: 0.5,
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                    }}
                    animate={{
                        x: [
                            Math.random() * window.innerWidth,
                            Math.random() * window.innerWidth,
                        ],
                        y: [
                            Math.random() * window.innerHeight,
                            Math.random() * window.innerHeight,
                        ],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 20 + Math.random() * 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute w-[25vw] h-[25vw] bg-cyan-500/10 rounded-full blur-[80px] will-change-transform"
                    style={{
                        left: 0,
                        top: 0,
                    }}
                />
            ))}

            {/* Small Stars/Dust - Reduced count */}
            {[...Array(10)].map((_, i) => (
                <motion.div
                    key={`star-${i}`}
                    initial={{
                        opacity: 0,
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                    }}
                    animate={{
                        opacity: [0, 0.8, 0],
                        scale: [0, 1.5, 0],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 4,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "easeInOut",
                    }}
                    className="absolute w-1 h-1 bg-white rounded-full will-change-transform"
                />
            ))}
        </div>
    );
};

export default BackgroundEffects;
