import React from 'react';
import { Github, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 bg-black border-t border-gray-900 text-center">
            <div className="max-w-7xl mx-auto px-6 flex flex-col justify-center items-center gap-6">
                <div className="flex gap-6 text-gray-500">
                    <a href="https://github.com/its-sriram-here" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github size={20} /></a>
                    <a href="https://www.linkedin.com/in/its-sriram-here/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
                    <a href="https://www.facebook.com/share/1GbRW6534V/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors"><Facebook size={20} /></a>
                    <a href="https://instagram.com/its_sriram_here" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
                </div>

                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} SRIRAM. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
