import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Facebook, Instagram } from 'lucide-react';
import avatar1 from '../assets/sriram-avatar-1.jpg';
import avatar2 from '../assets/sriram-avatar-2.jpg';
import TextReveal from './TextReveal';
import TypewriterText from './TypewriterText';
import ShimmerText from './ShimmerText';
import StatusBadge from './StatusBadge';
import PremiumButton from './PremiumButton';

const Hero = () => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden pt-20">
            {/* Unique Background: Aurora Effect */}
            <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-cyan-500/25 rounded-full blur-[120px] animate-pulse will-change-transform" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-blue-600/25 rounded-full blur-[120px] animate-pulse delay-1000 will-change-transform" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col items-start text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 h-10" // Fixed height to prevent layout shift
                    >
                        <StatusBadge />
                    </motion.div>

                    <div className="mb-8 min-h-[160px] md:min-h-[200px]">
                        <div className="block">
                            <TypewriterText
                                text="Building Digital"
                                className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none mb-2 block"
                                delay={0.5}
                            />
                        </div>
                        <div className="block">
                            <ShimmerText
                                text="Experiences"
                                className="text-6xl md:text-8xl font-bold tracking-tighter leading-none block"
                                delay={2.5}
                            />
                        </div>
                    </div>

                    <div className="mb-12">
                        <TextReveal className="text-gray-300 text-xl md:text-2xl max-w-xl leading-relaxed font-light" delay={0.4}>
                            I'm <span className="text-cyan-400 font-bold">Sriram</span>, a passionate Tech Enthusiast and Full Stack Developer.
                            I craft pixel-perfect interfaces and robust server-side logic.
                        </TextReveal>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-wrap gap-6"
                    >
                        <PremiumButton
                            href="https://its-sriram-here.neocities.org/Sriram-Resume"
                            target="_blank"
                            rel="noopener noreferrer"
                            icon={ArrowRight}
                            onClick={() => navigator.vibrate?.(15)}
                            magnetic={false}
                            variant="shimmer"
                        >
                            View My Resume
                        </PremiumButton>

                        <button
                            onClick={() => {
                                navigator.vibrate?.(15);
                                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300 relative overflow-hidden group"
                        >
                            <span className="relative z-10">Contact Me</span>
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="mt-12 flex gap-8 text-gray-400"
                    >
                        <a href="https://github.com/its-sriram-here" target="_blank" rel="noopener noreferrer" onClick={() => navigator.vibrate?.(15)} className="hover:text-cyan-400 transition-colors transform hover:scale-110 duration-300"><Github size={28} /></a>
                        <a href="https://www.linkedin.com/in/its-sriram-here/" target="_blank" rel="noopener noreferrer" onClick={() => navigator.vibrate?.(15)} className="hover:text-blue-500 transition-colors transform hover:scale-110 duration-300"><Linkedin size={28} /></a>
                        <a href="https://instagram.com/its_sriram_here" target="_blank" rel="noopener noreferrer" onClick={() => navigator.vibrate?.(15)} className="hover:text-pink-500 transition-colors transform hover:scale-110 duration-300"><Instagram size={28} /></a>
                        <a href="https://www.facebook.com/share/1GbRW6534V/" target="_blank" rel="noopener noreferrer" onClick={() => navigator.vibrate?.(15)} className="hover:text-blue-600 transition-colors transform hover:scale-110 duration-300"><Facebook size={28} /></a>
                    </motion.div>
                </div>

                {/* Avatar Section with 3D Parallax */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                    className="relative block perspective-1000 mt-12 md:mt-0"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <motion.div
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        className="relative w-full h-[350px] md:h-[450px] group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-blue-500/30 rounded-[3rem] blur-3xl group-hover:blur-[4rem] transition-all duration-700 -z-10" />

                        <div className="relative w-full h-full transform-style-3d">
                            {/* Image 1 (Default) */}
                            <img
                                src={avatar1}
                                alt="Developer Avatar"
                                className="absolute inset-0 w-full h-full object-cover rounded-[3rem] shadow-2xl transition-opacity duration-700 ease-in-out group-hover:opacity-0 group-active:opacity-0 border border-white/10"
                                style={{ transform: "translateZ(50px)" }}
                            />

                            {/* Image 2 (Hover/Active) */}
                            <img
                                src={avatar2}
                                alt="Developer Avatar Hover"
                                className="absolute inset-0 w-full h-full object-cover object-top rounded-[3rem] shadow-2xl opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 group-active:opacity-100 border border-white/10"
                                style={{ transform: "translateZ(50px)" }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
