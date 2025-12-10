import React from 'react';
import { motion } from 'framer-motion';

const GradientHeading = ({ children, className = "", delay = 0 }) => {
    return (
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
            className={`relative inline-block cursor-default group ${className}`}
        >
            <span className="relative z-10 text-white transition-colors duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:via-blue-500 group-hover:to-purple-600">
                {children}
            </span>
            <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 transition-all duration-500 group-hover:w-full rounded-full" />
        </motion.h2>
    );
};

export default GradientHeading;
