import React from 'react';
import { motion } from 'framer-motion';

const SectionReveal = ({ children, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.8,
                delay: delay,
                type: "spring",
                stiffness: 50,
                damping: 20
            }}
        >
            {children}
        </motion.div>
    );
};

export default SectionReveal;
