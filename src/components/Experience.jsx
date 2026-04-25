import React from 'react';
import { motion } from 'framer-motion';
import claysysLogo from '../assets/claysys-logo.jpg';

const Experience = () => {
    return (
        <section id="experience" className="relative py-24 min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
            {/* Animated Mesh Gradient Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-900/30 rounded-full blur-[120px] mix-blend-screen"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-cyan-900/20 rounded-full blur-[120px] mix-blend-screen"
                />
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8">

                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500 mb-4"
                    >
                        Professional Journey
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"
                    />
                </div>

                {/* Antigravity Glassmorphism Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    animate={{ y: [0, -12, 0] }}
                    transition={{
                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                        opacity: { duration: 0.8 },
                        default: { duration: 0.8 }
                    }}
                    className="group relative p-[1px] rounded-[2rem] bg-gradient-to-br from-cyan-500/40 via-purple-500/20 to-blue-500/40 hover:from-cyan-400/60 hover:via-purple-400/30 hover:to-blue-400/60 transition-all duration-700 ease-out hover:shadow-[0_0_50px_rgba(34,211,238,0.25)]"
                >
                    {/* Inner Card */}
                    <div className="flex flex-col lg:flex-row items-center gap-10 p-8 md:p-12 lg:p-16 bg-[#0a0f18]/80 backdrop-blur-2xl rounded-[calc(2rem-1px)] w-full h-full relative overflow-hidden">

                        {/* Glow effect matching hover inside inner card to mask the edges naturally */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -skew-x-12 translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite]" />

                        {/* Left: Logo Section */}
                        <div className="relative w-40 h-40 md:w-56 md:h-56 flex-shrink-0 rounded-[2rem] bg-white border border-white/10 shadow-[0_0_30px_rgba(34,211,238,0.1)] flex items-center justify-center overflow-hidden group/logo">
                            {/* Inner glow effect */}
                            <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500"></div>

                            {/* ClaySys Logo */}
                            <img
                                src={claysysLogo}
                                alt="ClaySys Technologies"
                                className="w-full h-full object-contain p-6 md:p-8 relative z-10 transition-transform duration-500 group-hover/logo:scale-110"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.currentTarget.nextElementSibling.style.display = 'flex';
                                }}
                            />

                            {/* Fallback if logo fails to load */}
                            <div style={{ display: 'none' }} className="absolute inset-0 flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black w-full h-full">
                                <span className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-500 group-hover/logo:from-cyan-300 group-hover/logo:to-blue-500 transition-colors duration-500">
                                    CT
                                </span>
                                <span className="text-[10px] md:text-xs text-cyan-400 tracking-[0.2em] uppercase mt-2 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover/logo:translate-y-0">
                                    ClaySys
                                </span>
                            </div>
                        </div>

                        {/* Right: Content Section */}
                        <div className="flex-1 flex flex-col items-center justify-center lg:items-start text-center lg:text-left z-10">

                            <motion.div
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs md:text-sm font-semibold tracking-wider uppercase mb-6"
                            >
                                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                                Current Role
                            </motion.div>

                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-white tracking-tight mb-2">
                                Software Engineer <span className="text-cyan-400">- L1</span>
                            </h3>

                            <div className="flex flex-col lg:flex-row items-center lg:items-baseline gap-2 lg:gap-4 mb-6">
                                <p className="text-xl md:text-2xl text-gray-400 font-medium">
                                    ClaySys Technologies <span className="mx-2 text-gray-700">|</span>
                                    <span className="text-blue-300/80">Coimbatore</span>
                                </p>
                                <span className="hidden lg:inline text-gray-600">•</span>
                                <p className="text-md md:text-lg text-cyan-400/80 font-medium tracking-wide">
                                    April 2026 - Present
                                </p>
                            </div>

                            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4 max-w-2xl font-light">
                                Building high-performance MERN stack applications with scalable Node.js backends and responsive React frontends.
                            </p>

                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Experience;
