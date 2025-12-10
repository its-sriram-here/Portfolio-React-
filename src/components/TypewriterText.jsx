import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ text, className = "", delay = 0 }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStarted(true);
        }, delay * 1000);

        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayedText(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 100); // Typing speed

        return () => clearInterval(interval);
    }, [text, started]);

    return (
        <span className={className}>
            {displayedText}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[3px] h-[1em] bg-cyan-400 ml-1 align-middle"
            />
        </span>
    );
};

export default TypewriterText;
