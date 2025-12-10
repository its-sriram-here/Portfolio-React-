import React from 'react';
import { motion } from 'framer-motion';

const ThreeDText = ({ children, className = "", delay = 0 }) => {
    return (
        <div className={`perspective-1000 ${className}`}>
            <motion.div
                initial={{ opacity: 0, rotateX: 90, y: 80, scale: 0.8 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1,
                    delay: delay,
                    type: "spring",
                    bounce: 0.5,
                    stiffness: 100
                }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ThreeDText;
