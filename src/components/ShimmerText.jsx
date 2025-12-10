import React from 'react';
import { motion } from 'framer-motion';

const ShimmerText = ({ text, className = "", delay = 0 }) => {
    return (
        <motion.span
            initial={{ opacity: 0, backgroundPosition: "0% center" }}
            animate={{
                opacity: 1,
                backgroundPosition: ["0% center", "200% center"]
            }}
            transition={{
                opacity: { duration: 0.5, delay: delay },
                backgroundPosition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: delay
                }
            }}
            className={`relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-purple-600 bg-[length:200%_auto] ${className}`}
            style={{
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
            }}
        >
            {text}
        </motion.span>
    );
};

export default ShimmerText;
