import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Github, Linkedin, Facebook, Instagram } from 'lucide-react';
import GradientHeading from './GradientHeading';
import TextReveal from './TextReveal';
import contactAvatar from '../assets/contact-avatar.jpg';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "srirammurugesan1807@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="pt-0 pb-32 bg-black text-white relative overflow-hidden flex items-center justify-center min-h-[80vh]">
            {/* Unique Background: Animated Gradient Waves */}
            {/* Unique Background: Rose Breathing */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-rose-900/25 to-black animate-pulse duration-[5000ms]" />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <div className="mb-12">
                    <div className="flex justify-center mb-6 group cursor-default">
                        <GradientHeading className="text-5xl md:text-7xl font-bold tracking-tighter">
                            Let's Work Together
                        </GradientHeading>
                    </div>
                    <div className="flex justify-center">
                        <TextReveal className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed" delay={0.2}>
                            If you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out!
                        </TextReveal>
                    </div>
                </div>

                <div className="flex justify-center mb-10">
                    <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", bounce: 0.5, delay: 0.3 }}
                        className="relative group/avatar"
                    >
                        <div className="absolute inset-[-10px] bg-gradient-to-r from-cyan-500 via-rose-500 to-purple-600 rounded-full blur-[20px] opacity-30 group-hover/avatar:opacity-60 transition-opacity duration-500" />
                        <img 
                            src={contactAvatar} 
                            alt="Sriram" 
                            className="w-40 h-40 md:w-64 md:h-64 rounded-full object-cover object-[50%_45%] border-[4px] border-[#0a0a0a] shadow-2xl relative z-10 transition-transform duration-500 group-hover/avatar:scale-110" 
                        />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                    className="flex flex-col md:flex-row items-center justify-center gap-8"
                >
                    <a
                        href={`mailto:${email}`}
                        className="relative px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 overflow-hidden group inline-flex items-center justify-center min-w-[160px]"
                    >
                        <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />

                        <div className="relative overflow-hidden h-6 w-full flex items-center justify-center">
                            <span className="absolute inset-0 flex items-center justify-center gap-2 group-hover:-translate-y-full transition-transform duration-300 ease-out">
                                Say Hello <Mail size={20} />
                            </span>
                            <span className="absolute inset-0 flex items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out text-cyan-100">
                                Let's Talk! <Mail size={20} />
                            </span>
                        </div>
                    </a>

                    <button
                        onClick={handleCopy}
                        className="px-8 py-4 bg-transparent border border-gray-700 text-white rounded-full font-bold hover:bg-white/10 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center gap-3 group"
                    >
                        {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} className="group-hover:text-purple-400 transition-colors" />}
                        {copied ? "Email Copied!" : "Copy Email"}
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 flex justify-center gap-8 text-gray-500"
                >
                    <a href="https://github.com/its-sriram-here" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all duration-300"><Github size={28} /></a>
                    <a href="https://www.linkedin.com/in/its-sriram-here/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 hover:scale-110 transition-all duration-300"><Linkedin size={28} /></a>
                    <a href="https://www.facebook.com/share/1GbRW6534V/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:scale-110 transition-all duration-300"><Facebook size={28} /></a>
                    <a href="https://instagram.com/its_sriram_here" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 hover:scale-110 transition-all duration-300"><Instagram size={28} /></a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
