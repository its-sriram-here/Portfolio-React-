import React from 'react';
import { motion } from 'framer-motion';

const TextReveal = ({ children, className = "", delay = 0, variant = "slide" }) => {
    // Split text into words if it's a string, otherwise handle as is
    const words = typeof children === 'string' ? children.split(" ") : [children];

    const variants = {
        slide: {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
        },
        blur: {
            hidden: { opacity: 0, filter: "blur(10px)", scale: 1.1 },
            visible: { opacity: 1, filter: "blur(0px)", scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
        },
        scale: {
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1, transition: { type: "spring", damping: 12, stiffness: 100 } }
        }
    };

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.04 * i + delay },
        }),
    };

    return (
        <motion.div
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className={className}
        >
            {words.map((word, index) => (
                <motion.span variants={variants[variant]} style={{ marginRight: "0.25em" }} key={index}>
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default TextReveal;
