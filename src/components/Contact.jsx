import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Mail, Copy, Check, Github, Linkedin, Facebook, Instagram, Terminal, Code2, Image as ImageIcon } from 'lucide-react';
import GradientHeading from './GradientHeading';
import TextReveal from './TextReveal';
import contactAvatar from '../assets/contact-avatar.jpg';
import githubPreview from '../assets/github-preview.png';
import instagramPreview from '../assets/instagram-preview.png';
import linkedinPreview from '../assets/linkedin-preview.png';

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

                {/* Restored Dual-Pane IDE Profile Component */}
                <div className="flex justify-center mt-12 mb-20 relative perspective-1000 w-full px-4">
                    <motion.div 
                        initial={{ opacity: 0, y: 30, rotateX: 5 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                        className="w-full max-w-4xl bg-[#0d1117] rounded-xl overflow-hidden border border-[#30363d] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col group text-left"
                    >
                        {/* IDE Header */}
                        <div className="flex items-center px-4 py-2.5 bg-[#161b22] border-b border-[#30363d]">
                            <div className="flex space-x-2 mr-6">
                                <div className="w-3 h-3 bg-[#ff5f56] rounded-full border border-[#e0443e]"></div>
                                <div className="w-3 h-3 bg-[#ffbd2e] rounded-full border border-[#dea123]"></div>
                                <div className="w-3 h-3 bg-[#27c93f] rounded-full border border-[#1aab29]"></div>
                            </div>
                            <div className="flex -mb-2.5">
                                <div className="px-4 py-2 bg-[#0d1117] border-t-2 border-t-[#79c0ff] border-r border-[#30363d] border-l text-xs text-white font-mono flex items-center gap-2 rounded-t-lg relative z-10 shadow-lg">
                                    <Code2 size={14} className="text-[#79c0ff]" />
                                    <span>profile.ts</span>
                                </div>
                                {/* The avatar.jpg tab is fully removed as requested */}
                            </div>
                        </div>

                        {/* IDE Body Split */}
                        <div className="flex flex-col md:flex-row flex-1">
                            {/* Left Pane: Image */}
                            <div className="w-full md:w-[40%] bg-[#0d1117] p-8 border-b border-[#30363d] md:border-b-0 md:border-r flex flex-col justify-center items-center relative overflow-hidden">
                                {/* Subtle background code noise */}
                                <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none font-mono text-[8px] leading-tight break-all text-green-500 overflow-hidden">
                                     {Array(50).fill('0100101100100010').join(' ')}
                                </div>
                                
                                <div className="relative group/img overflow-hidden rounded-[2rem] border border-[#30363d] shadow-2xl z-10 transition-transform duration-500 hover:scale-105 hover:shadow-cyan-900/20">
                                   <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay" />
                                   <img 
                                      src={contactAvatar} 
                                      alt="Sriram" 
                                      className="w-48 h-48 md:w-56 md:h-56 object-cover object-[50%_45%] transition-all duration-700 ease-out" 
                                   />
                                </div>
                            </div>

                            {/* Right Pane: Code */}
                            <div className="w-full md:w-[60%] p-6 md:p-8 font-mono text-sm md:text-base overflow-x-auto text-gray-300 flex items-center">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.3 }}
                                >
                                    <div><span className="text-[#ff7b72]">const</span> <span className="text-[#79c0ff]">developer</span> <span className="text-[#ff7b72]">=</span> {'{'}</div>
                                    <div className="ml-4 md:ml-8 mt-2">
                                        <span className="text-[#a5d6ff]">name</span><span className="text-[#ff7b72]">:</span> <span className="text-[#a5d6ff]">'</span><span className="text-[#a5d6ff]">Sriram</span><span className="text-[#a5d6ff]">'</span><span className="text-[#ff7b72]">,</span>
                                    </div>
                                    <div className="ml-4 md:ml-8 mt-2 group-hover:bg-[#161b22] w-fit pr-4 rounded transition-colors duration-300">
                                        <span className="text-[#a5d6ff]">email</span><span className="text-[#ff7b72]">:</span> <span className="text-[#a5d6ff]">'</span><a href={`mailto:${email}`} className="text-[#a5d6ff] cursor-pointer hover:text-[#79c0ff] hover:underline transition-colors">{email}</a><span className="text-[#a5d6ff]">'</span><span className="text-[#ff7b72]">,</span>
                                    </div>
                                    <div className="ml-4 md:ml-8 mt-2 group-hover:bg-[#161b22] w-fit pr-4 rounded transition-colors duration-300">
                                        <span className="text-[#d2a8ff]">playChess</span><span className="text-[#ff7b72]">:</span> <span className="text-[#ff7b72]">()</span> <span className="text-[#ff7b72]">{"=>"}</span> <span className="text-[#d2a8ff]">challenge</span>(<span className="text-[#a5d6ff]">'</span><a href="https://www.chess.com/member/its_sriram_here" target="_blank" rel="noopener noreferrer" className="text-[#a5d6ff] cursor-pointer hover:text-[#79c0ff] hover:underline transition-colors" title="Challenge me on Chess.com!">@its_sriram_here ♟️</a><span className="text-[#a5d6ff]">'</span>)<span className="text-[#ff7b72]">,</span>
                                    </div>
                                    <div className="ml-4 md:ml-8 mt-2">
                                        <span className="text-[#d2a8ff]">network</span><span className="text-[#ff7b72]">:</span> <span className="text-[#ff7b72]">async</span> () <span className="text-[#ff7b72]">{"=>"}</span> {'{'}
                                    </div>
                                    <div className="ml-8 md:ml-16 mt-2">
                                        <span className="text-[#ff7b72]">await</span> <span className="text-[#d2a8ff]">connectViaEmail</span>(developer.<span className="text-[#79c0ff]">email</span>)<span className="text-[#ff7b72]">;</span>
                                    </div>
                                    <div className="ml-8 md:ml-16 mt-2">
                                        <span className="text-[#ff7b72]">return</span> <span className="text-[#a5d6ff]">'</span><span className="text-[#a5d6ff]">Let\'s collaborate!</span><span className="text-[#a5d6ff]">'</span><span className="text-[#ff7b72]">;</span>
                                    </div>
                                    <div className="ml-4 md:ml-8 mt-2">
                                        {'}'}
                                    </div>
                                    <div className="mt-2 text-[#c9d1d9]">
                                        {'}'}<span className="text-[#ff7b72]">;</span>
                                    </div>
                                    
                                    {/* Blinking cursor */}
                                    <motion.div 
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                        className="w-2.5 h-5 bg-[#79c0ff] inline-block ml-1 mt-4 align-middle"
                                    />
                                </motion.div>
                            </div>
                        </div>
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
                    className="mt-16 flex justify-center items-center gap-8 text-gray-500 relative z-20"
                >
                    {/* GitHub Icon with Premium Hover Preview */}
                    <div className="relative group/github flex items-center justify-center">
                        {/* The Hover Tooltip Window */}
                        <div className="absolute bottom-full mb-6 w-64 md:w-[400px] opacity-0 group-hover/github:opacity-100 scale-95 group-hover/github:scale-100 transition-all duration-300 pointer-events-none z-50 origin-bottom left-1/2 -translate-x-1/2 flex flex-col items-center">
                            <div className="w-full rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(34,211,238,0.15)] border border-white/10 bg-[#0d1117] relative z-10 transition-transform duration-500 transform group-hover/github:-translate-y-2">
                                {/* macOS style top bar for the browser frame */}
                                <div className="h-6 bg-[#161b22] border-b border-[#30363d] flex items-center px-3 gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
                                    <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
                                    <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
                                </div>
                                {/* Screenshot */}
                                <img src={githubPreview} alt="GitHub Preview" className="w-full h-auto object-cover" />
                            </div>
                            {/* Ambient Glow */}
                            <div className="absolute inset-x-0 bottom-0 h-10 bg-cyan-500/20 blur-2xl -z-10 group-hover/github:opacity-100 opacity-0 transition-opacity duration-300" />
                            
                            {/* Small downward pointing connector triangle */}
                            <div className="w-3 h-3 bg-[#0d1117] border-b border-r border-[#30363d] transform rotate-45 -translate-y-2 opacity-0 group-hover/github:opacity-100 transition-all duration-300 group-hover/github:-translate-y-4 shadow-[5px_5px_15px_rgba(34,211,238,0.2)]" />
                        </div>

                        {/* Actual Icon Link */}
                        <a href="https://github.com/its-sriram-here" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-125 transition-all duration-300 relative z-10">
                            <Github size={28} />
                        </a>
                    </div>
                    
                    {/* LinkedIn Icon with Premium Hover Preview */}
                    <div className="relative group/linkedin flex items-center justify-center">
                        {/* The Hover Tooltip Window */}
                        <div className="absolute bottom-full mb-6 w-64 md:w-[400px] opacity-0 group-hover/linkedin:opacity-100 scale-95 group-hover/linkedin:scale-100 transition-all duration-300 pointer-events-none z-50 origin-bottom left-1/2 -translate-x-1/2 flex flex-col items-center">
                            <div className="w-full rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(59,130,246,0.15)] border border-white/10 bg-[#0d1117] relative z-10 transition-transform duration-500 transform group-hover/linkedin:-translate-y-2">
                                {/* macOS style top bar for the browser frame */}
                                <div className="h-6 bg-[#161b22] border-b border-[#30363d] flex items-center px-3 gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
                                    <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
                                    <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
                                </div>
                                {/* Screenshot */}
                                <img src={linkedinPreview} alt="LinkedIn Preview" className="w-full h-[250px] object-cover object-top" />
                            </div>
                            {/* Ambient Glow */}
                            <div className="absolute inset-x-0 bottom-0 h-10 bg-blue-500/20 blur-2xl -z-10 group-hover/linkedin:opacity-100 opacity-0 transition-opacity duration-300" />
                            
                            {/* Small downward pointing connector triangle */}
                            <div className="w-3 h-3 bg-[#0d1117] border-b border-r border-[#30363d] transform rotate-45 -translate-y-2 opacity-0 group-hover/linkedin:opacity-100 transition-all duration-300 group-hover/linkedin:-translate-y-4 shadow-[5px_5px_15px_rgba(59,130,246,0.2)]" />
                        </div>

                        {/* Actual Icon Link */}
                        <a href="https://www.linkedin.com/in/its-sriram-here/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 hover:scale-125 transition-all duration-300 relative z-10">
                            <Linkedin size={28} />
                        </a>
                    </div>
                    <a href="https://www.facebook.com/share/1GbRW6534V/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:scale-110 transition-all duration-300 relative z-10"><Facebook size={28} /></a>
                    
                    {/* Chess Icon with Premium Hover Preview */}
                    <div className="relative group/chess flex items-center justify-center">
                        {/* The Hover Tooltip Window */}
                        <div className="absolute bottom-full mb-6 w-64 md:w-[300px] opacity-0 group-hover/chess:opacity-100 scale-95 group-hover/chess:scale-100 transition-all duration-300 pointer-events-none z-50 origin-bottom left-1/2 -translate-x-1/2 flex flex-col items-center">
                            <div className="w-full rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(34,197,94,0.15)] border border-white/10 bg-[#0d1117] relative z-10 transition-transform duration-500 transform group-hover/chess:-translate-y-2">
                                {/* macOS style top bar for the browser frame */}
                                <div className="h-6 bg-[#161b22] border-b border-[#30363d] flex items-center px-3 gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
                                    <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
                                    <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
                                </div>
                                {/* CSS Rendered Profile Card */}
                                <div className="w-full h-[200px] bg-[#312e2b] flex flex-col items-center justify-center relative overflow-hidden">
                                     {/* Checkerboard Pattern overlay */}
                                     <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, #312e2b 25%, #312e2b 75%, #000 75%, #000)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px' }}></div>
                                     <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-700 rounded-xl flex items-center justify-center text-4xl shadow-inner border border-white/20 mb-3 z-10 drop-shadow-2xl">
                                         ♞
                                     </div>
                                     <h3 className="text-white font-bold text-lg z-10 tracking-wide">Sriram</h3>
                                     <p className="text-green-400 text-sm font-medium mt-1 z-10">@its_sriram_here</p>
                                     <div className="mt-3 px-4 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-green-300 text-xs z-10 font-medium">
                                         Challenge Me!
                                     </div>
                                </div>
                            </div>
                            {/* Ambient Glow */}
                            <div className="absolute inset-x-0 bottom-0 h-10 bg-green-500/20 blur-2xl -z-10 group-hover/chess:opacity-100 opacity-0 transition-opacity duration-300" />
                            
                            {/* Small downward pointing connector triangle */}
                            <div className="w-3 h-3 bg-[#0d1117] border-b border-r border-[#30363d] transform rotate-45 -translate-y-2 opacity-0 group-hover/chess:opacity-100 transition-all duration-300 group-hover/chess:-translate-y-4 shadow-[5px_5px_15px_rgba(34,197,94,0.2)]" />
                        </div>

                        {/* Actual Icon Link */}
                        <a href="https://www.chess.com/member/its_sriram_here" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-500 hover:scale-125 transition-all duration-300 relative z-10 text-[26px] leading-none flex items-center h-[28px] drop-shadow-[0_0_10px_rgba(34,197,94,0)] hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                            ♟️
                        </a>
                    </div>
                    
                    {/* Instagram Icon with Premium Hover Preview */}
                    <div className="relative group/insta flex items-center justify-center">
                        {/* The Hover Tooltip Window */}
                        <div className="absolute bottom-full mb-6 w-64 md:w-[400px] opacity-0 group-hover/insta:opacity-100 scale-95 group-hover/insta:scale-100 transition-all duration-300 pointer-events-none z-50 origin-bottom right-1/2 translate-x-1/2 flex flex-col items-center">
                            <div className="w-full rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(236,72,153,0.15)] border border-white/10 bg-[#0d1117] relative z-10 transition-transform duration-500 transform group-hover/insta:-translate-y-2">
                                {/* macOS style top bar for the browser frame */}
                                <div className="h-6 bg-[#161b22] border-b border-[#30363d] flex items-center px-3 gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
                                    <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
                                    <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
                                </div>
                                {/* Screenshot (capped height) */}
                                <img src={instagramPreview} alt="Instagram Preview" className="w-full h-[250px] object-cover object-top" />
                            </div>
                            {/* Ambient Glow */}
                            <div className="absolute inset-x-0 bottom-0 h-10 bg-pink-500/20 blur-2xl -z-10 group-hover/insta:opacity-100 opacity-0 transition-opacity duration-300" />
                            
                            {/* Small downward pointing connector triangle */}
                            <div className="w-3 h-3 bg-[#0d1117] border-b border-r border-[#30363d] transform rotate-45 -translate-y-2 opacity-0 group-hover/insta:opacity-100 transition-all duration-300 group-hover/insta:-translate-y-4 shadow-[5px_5px_15px_rgba(236,72,153,0.2)]" />
                        </div>

                        {/* Actual Icon Link */}
                        <a href="https://instagram.com/its_sriram_here" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 hover:scale-125 transition-all duration-300 relative z-10">
                            <Instagram size={28} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
