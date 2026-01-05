peimport React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const InteractiveText3D = ({ text = "SRIRAM" }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="relative w-full flex justify-center items-center py-20 cursor-pointer perspective-1000"
        >
            <div className="relative transform-style-3d group">
                {/* Layer 1: Deep Shadow (Furthest Back) */}
                <motion.h1
                    style={{ transform: "translateZ(-20px)" }}
                    className="text-7xl md:text-9xl font-extrabold text-black/20 absolute inset-0 blur-sm select-none"
                >
                    {text}
                </motion.h1>

                {/* Layer 2: Outline/Stroke (Middle) */}
                <motion.h1
                    style={{
                        transform: "translateZ(-10px)",
                        WebkitTextStroke: "2px rgba(255,255,255,0.1)"
                    }}
                    className="text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-900 to-purple-900 absolute inset-0 select-none opacity-50"
                >
                    {text}
                </motion.h1>

                {/* Layer 3: Main Text (Front) */}
                <motion.h1
                    style={{ transform: "translateZ(20px)" }}
                    className="relative text-7xl md:text-9xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-[length:200%_auto] animate-background-pan select-none drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                >
                    {text}

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-clip-text text-transparent pointer-events-none" />
                </motion.h1>
            </div>
        </motion.div>
    );
};

export default InteractiveText3D;
