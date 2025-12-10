import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Certificates', href: '#certificates' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/5 backdrop-blur-md py-4 border-b border-white/5 shadow-lg shadow-black/5' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white flex items-center gap-2 group">
                    <Code2 className="text-cyan-500 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-cyan-600 transition-all duration-500">
                        SRIRAM
                    </span>
                </a>
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-cyan-400 transition-colors relative group text-base font-medium tracking-wide cursor-pointer"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-cyan-400 transition-colors relative z-[101]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-[90] flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-bold text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
