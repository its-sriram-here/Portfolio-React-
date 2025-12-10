import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const PremiumButton = ({ children, onClick, href, className = "", icon: Icon, magnetic = true, variant = "fizzy", ...props }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!magnetic || !ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = e.clientX - (left + width / 2);
        const y = e.clientY - (top + height / 2);
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const Component = href ? motion.a : motion.button;

    return (
        <Component
            ref={ref}
            href={href}
            {...props}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 50, damping: 20, mass: 0.5 }}
            onClick={(e) => {
                if (navigator.vibrate) navigator.vibrate(15);
                if (onClick) onClick(e);
            }}
            className={`relative px-8 py-4 rounded-full font-bold text-white overflow-hidden group inline-flex items-center justify-center gap-2 ${className}`}
        >
            {/* Background Gradient & Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Animations */}
            {variant === "fizzy" && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute bg-white/30 rounded-full opacity-0 group-hover:animate-fizzy"
                            style={{
                                width: Math.random() * 6 + 4 + 'px',
                                height: Math.random() * 6 + 4 + 'px',
                                left: Math.random() * 100 + '%',
                                bottom: '-10px',
                                animationDelay: Math.random() * 0.5 + 's',
                                animationDuration: Math.random() * 1 + 0.5 + 's'
                            }}
                        />
                    ))}
                </div>
            )}

            {variant === "shimmer" && (
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            )}

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center gap-2">
                {children}
                {Icon && <Icon size={20} className="group-hover:translate-x-1 transition-transform duration-300" />}
            </div>
        </Component>
    );
};

export default PremiumButton;
