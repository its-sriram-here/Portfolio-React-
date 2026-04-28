import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Github, Linkedin, Facebook, Instagram, Terminal, Code2 } from 'lucide-react';
import GradientHeading from './GradientHeading';
import TextReveal from './TextReveal';
import contactAvatar from '../assets/contact-avatar.jpg';
import githubPreview from '../assets/github-preview.png';
import instagramPreview from '../assets/instagram-preview.png';
import linkedinPreview from '../assets/linkedin-preview.png';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [formStatus, setFormStatus] = useState(() => {
        if (typeof window !== 'undefined') {
            const sentTime = localStorage.getItem('portfolio_msg_timer');
            if (sentTime) {
                const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds
                if (Date.now() - parseInt(sentTime, 10) < oneHour) {
                    return 'success';
                } else {
                    localStorage.removeItem('portfolio_msg_timer');
                }
            }
        }
        return 'idle';
    });
    const [validationError, setValidationError] = useState('');
    const email = "srirammurugesan1807@gmail.com";

    const validateEmail = (emailStr) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(emailStr);
    };

    const validatePhone = (phoneStr) => {
        const digitsOnly = phoneStr.replace(/\D/g, '');

        // Indian mobile numbers start with 6, 7, 8, or 9 and are 10 digits long
        if (!/^[6-9]\d{9}$/.test(digitsOnly)) return false;

        // Reject repetitive numbers (e.g., 9999999999)
        if (/^(\d)\1{9}$/.test(digitsOnly)) return false;

        // Reject simple sequential dummy numbers
        const dummyNumbers = ['9876543210', '8765432109', '7654321098', '6543210987'];
        if (dummyNumbers.includes(digitsOnly)) return false;

        return true;
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name.trim()) {
            setValidationError('Please enter your name.');
            return;
        }

        if (!formData.email.trim()) {
            setValidationError('Please enter your email.');
            return;
        }

        if (!validateEmail(formData.email)) {
            setValidationError('Please enter a valid email address.');
            return;
        }

        if (!formData.phone.trim()) {
            setValidationError('Please enter your phone number.');
            return;
        }

        if (!validatePhone(formData.phone)) {
            setValidationError('Please enter a proper 10-digit phone number.');
            return;
        }

        if (!formData.message.trim()) {
            setValidationError('Please enter your message.');
            return;
        }

        setValidationError('');

        setFormStatus('submitting');

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "5c951f52-523b-4367-b5af-a89f7f3bff60",
                    name: formData.name,
                    email: formData.email,
                    phone: "+91 " + formData.phone,
                    message: formData.message,
                    subject: "New Contact from Portfolio",
                }),
            });
            const result = await response.json();
            if (result.success) {
                setFormStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
                localStorage.setItem('portfolio_msg_timer', Date.now().toString());
            } else {
                setFormStatus('error');
                setTimeout(() => setFormStatus('idle'), 3000);
            }
        } catch (error) {
            setFormStatus('error');
            setTimeout(() => setFormStatus('idle'), 3000);
        }
    };

    return (
        <section id="contact" className="pt-0 pb-32 bg-black text-white relative overflow-hidden flex items-center justify-center min-h-[80vh]">
            {/* Background: Premium Rose Breathing Gradient */}
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

                {/* Premium Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl mx-auto w-full mb-20 relative px-4"
                >
                    {/* Decorative background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-[2rem] blur-2xl -z-10" />

                    <div className="bg-[#0d1117]/80 backdrop-blur-md border border-[#30363d] rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                        {/* Subtle top border highlight */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                        {formStatus !== 'success' && (
                            <div className="mb-10 flex items-center gap-4">
                                <div className="relative flex-shrink-0">
                                    <div className="absolute inset-0 bg-cyan-500/20 blur-md rounded-full" />
                                    <div className="relative w-12 h-12 rounded-full bg-[#161b22] border border-cyan-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                                        <Mail size={20} className="text-cyan-400" />
                                    </div>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                    Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Connect.</span>
                                </h3>
                            </div>
                        )}

                        {formStatus === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, type: "spring" }}
                                className="flex flex-col items-center justify-center py-12 text-center"
                            >
                                <div className="relative flex items-center justify-center w-32 h-32 mb-8">
                                    <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-[ping_3s_infinite]" />
                                    <div className="absolute inset-4 rounded-full border border-cyan-400/40 animate-[ping_2s_infinite_delay-500ms]" />
                                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-500 shadow-[0_0_40px_rgba(34,211,238,0.5)] flex items-center justify-center">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", delay: 0.2, bounce: 0.5 }}
                                        >
                                            <Check size={40} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                                        </motion.div>
                                    </div>
                                </div>

                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]">Message Sent!</h3>
                                <p className="text-gray-400 text-lg max-w-md mx-auto leading-relaxed">
                                    Thanks for reaching out! Your message has safely landed in my inbox, and I'll get back to you as soon as possible.
                                </p>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6, type: "spring" }}
                                    className="mt-10 relative overflow-hidden group rounded-full cursor-default"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
                                    <div className="relative px-8 py-3.5 bg-green-500/10 backdrop-blur-md border border-green-500/30 rounded-full flex items-center gap-3 shadow-[0_0_20px_rgba(34,197,94,0.15)]">
                                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 border border-green-400/50">
                                            <Check size={14} className="text-green-400" />
                                        </div>

                                        <span className="font-semibold text-sm tracking-widest text-green-300 uppercase">
                                            Delivery Confirmed
                                        </span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="text-left mt-2 pb-2">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="relative group/input">
                                        <label className="text-xs font-semibold text-cyan-400/80 uppercase tracking-wider mb-2 ml-1 block group-focus-within:text-cyan-400 transition-colors">Name</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-500 group-focus-within:text-cyan-400 transition-colors z-10">
                                                <Terminal size={16} />
                                            </div>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => {
                                                    setFormData({ ...formData, name: e.target.value });
                                                    if (validationError.includes('name')) setValidationError('');
                                                }}
                                                className={`w-full bg-white/5 border ${validationError.includes('name') ? 'border-red-500/50 focus:border-red-500 focus:bg-red-500/10 focus:shadow-[0_0_20px_rgba(239,68,68,0.15)]' : 'border-white/10 focus:border-cyan-400/50 focus:bg-cyan-500/10 focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]'} rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-gray-600 outline-none transition-all duration-300 backdrop-blur-sm relative z-0`}
                                                placeholder="What's your name?"
                                            />
                                        </div>
                                        {validationError.includes('name') && (
                                            <p className="text-red-400 text-xs mt-1.5 ml-1 absolute -bottom-5">{validationError}</p>
                                        )}
                                    </div>

                                    <div className="relative group/input">
                                        <label className="text-xs font-semibold text-cyan-400/80 uppercase tracking-wider mb-2 ml-1 block group-focus-within:text-cyan-400 transition-colors">Email</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-500 group-focus-within:text-cyan-400 transition-colors z-10">
                                                <Mail size={16} />
                                            </div>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => {
                                                    setFormData({ ...formData, email: e.target.value });
                                                    if (validationError.includes('email')) setValidationError('');
                                                }}
                                                className={`w-full bg-white/5 border ${validationError.includes('email') ? 'border-red-500/50 focus:border-red-500 focus:bg-red-500/10 focus:shadow-[0_0_20px_rgba(239,68,68,0.15)]' : 'border-white/10 focus:border-cyan-400/50 focus:bg-cyan-500/10 focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]'} rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-gray-600 outline-none transition-all duration-300 backdrop-blur-sm relative z-0`}
                                                placeholder="e.g., hello@creative.com"
                                            />
                                        </div>
                                        {validationError.includes('email') && (
                                            <p className="text-red-400 text-xs mt-1.5 ml-1 absolute -bottom-5">{validationError}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="relative group/input mt-8">
                                    <label className="text-xs font-semibold text-cyan-400/80 uppercase tracking-wider mb-2 ml-1 block group-focus-within:text-cyan-400 transition-colors">Mobile Number</label>
                                    <div className="relative flex items-center">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                                            <span className="text-cyan-300 font-bold bg-cyan-500/20 px-2 py-1 rounded-lg border border-cyan-500/30 text-sm shadow-[0_0_10px_rgba(34,211,238,0.1)]">+91</span>
                                        </div>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => {
                                                setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') });
                                                if (validationError.includes('phone')) setValidationError('');
                                            }}
                                            className={`w-full bg-white/5 border ${validationError.includes('phone') ? 'border-red-500/50 focus:border-red-500 focus:bg-red-500/10 focus:shadow-[0_0_20px_rgba(239,68,68,0.15)]' : 'border-white/10 focus:border-cyan-400/50 focus:bg-cyan-500/10 focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]'} rounded-xl pl-16 pr-4 py-3.5 text-white placeholder-gray-600 outline-none transition-all duration-300 tracking-widest font-mono backdrop-blur-sm relative z-0`}
                                            placeholder="Ten digit mobile number"
                                            maxLength="10"
                                        />
                                    </div>
                                    {validationError.includes('phone') && (
                                        <p className="text-red-400 text-xs mt-1.5 ml-1 absolute -bottom-5">{validationError}</p>
                                    )}
                                </div>

                                <div className="relative group/input mt-8">
                                    <label className="text-xs font-semibold text-cyan-400/80 uppercase tracking-wider mb-2 ml-1 block group-focus-within:text-cyan-400 transition-colors">Message</label>
                                    <div className="relative">
                                        <textarea
                                            required
                                            rows="4"
                                            value={formData.message}
                                            onChange={(e) => {
                                                setFormData({ ...formData, message: e.target.value });
                                                if (validationError.includes('message')) setValidationError('');
                                            }}
                                            className={`w-full bg-white/5 border ${validationError.includes('message') ? 'border-red-500/50 focus:border-red-500 focus:bg-red-500/10 focus:shadow-[0_0_20px_rgba(239,68,68,0.15)]' : 'border-white/10 focus:border-cyan-400/50 focus:bg-cyan-500/10 focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]'} rounded-xl px-4 py-3.5 text-white placeholder-gray-600 outline-none transition-all duration-300 resize-none backdrop-blur-sm relative z-0`}
                                            placeholder="Tell me about your project, idea, or just say hi..."
                                        ></textarea>
                                    </div>
                                    {validationError.includes('message') && (
                                        <p className="text-red-400 text-xs mt-1.5 ml-1 absolute -bottom-5">{validationError}</p>
                                    )}
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={formStatus === 'submitting'}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full relative px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 overflow-hidden group/btn transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-10 shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] border border-cyan-400/30"
                                >
                                    <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out" />
                                    <div className="relative z-10 flex items-center justify-center gap-3">
                                        {formStatus === 'submitting' ? (
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : formStatus === 'error' ? (
                                            'Connection Failed. Retry.'
                                        ) : (
                                            <>
                                                Initiate Connection
                                                <motion.span
                                                    initial={{ x: 0, y: 0 }}
                                                    animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
                                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                                    className="inline-block"
                                                >

                                                </motion.span>
                                            </>
                                        )}
                                    </div>
                                </motion.button>
                            </form>
                        )}
                    </div>
                </motion.div>

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
