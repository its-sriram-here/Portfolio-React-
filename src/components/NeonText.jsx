import React from 'react';
import { motion } from 'framer-motion';

const NeonText = ({ children, className = "", delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, textShadow: "0px 0px 0px rgba(0,255,255,0)" }}
            whileInView={{
                opacity: [1, 0.8, 1, 0.9, 1],
                textShadow: [
                    "0px 0px 5px rgba(0,255,255,0.4)",
                    "0px 0px 10px rgba(0,255,255,0.6)",
                    "0px 0px 15px rgba(0,255,255,0.8)",
                    "0px 0px 10px rgba(0,255,255,0.6)",
                    "0px 0px 5px rgba(0,255,255,0.4)"
                ]
            }}
            viewport={{ once: true }}
            transition={{
                duration: 2.5,
                delay: delay,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }}
            className={`${className} transition-all duration-300`}
        >
            <motion.span
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: delay }}
            >
                {children}
            </motion.span>
        </motion.div>
    );
};

export default NeonText;
