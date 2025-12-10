import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const statuses = [
    "🚀 Open to New Opportunities",
    "✨ Available for Freelance",
    "🔥 Building Cool Stuff"
];

const StatusBadge = ({ className = "" }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % statuses.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className={`inline-flex overflow-hidden relative h-9 ${className}`}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-semibold tracking-wide shadow-lg shadow-cyan-500/10 whitespace-nowrap"
                >
                    {statuses[index]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default StatusBadge;
