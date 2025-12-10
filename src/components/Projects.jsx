import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowDown, FileText } from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si';
import { projects } from '../data/projects';
import NeonText from './NeonText';
import PremiumButton from './PremiumButton';
import GradientHeading from './GradientHeading';
import ParticleText from './ParticleText';

const Projects = () => {
    const [visibleProjects, setVisibleProjects] = useState(6);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const loadMore = () => {
        setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
    };

    const getTechIcon = (techName) => {
        const iconMap = {
            "HTML": <FaHtml5 />,
            "CSS": <FaCss3Alt />,
            "JS": <FaJs />,
            "Vanilla JS": <FaJs />,
            "React": <FaReact />,
            "Node.js": <FaNodeJs />,
            "Tailwind CSS": <SiTailwindcss />,
            "Express": <SiExpress />,
            "MongoDB": <SiMongodb />
        };
        return iconMap[techName] || null;
    };

    return (
        <section id="projects" className="pt-24 pb-0 bg-black text-white relative overflow-hidden">
            {/* Unique Background: Deep Ocean Breathing */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/25 to-black animate-pulse duration-[5000ms]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20">
                    <GradientHeading className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Selected Works
                    </GradientHeading>
                    <NeonText className="text-gray-300 text-xl md:text-2xl max-w-3xl" delay={0.2}>
                        A curated selection of projects that demonstrate my passion for building robust and scalable web applications.
                    </NeonText>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <AnimatePresence>
                        {projects.slice(0, visibleProjects).map((project, index) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 50, scale: isMobile ? 1 : 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.3 } }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: isMobile ? 0 : index * 0.1, type: "spring", bounce: 0.3 }}
                                className="group relative bg-gray-900/40 border border-white/5 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500 flex flex-col hover:shadow-2xl hover:shadow-cyan-900/20"
                            >
                                {/* Project Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer relative">
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10 opacity-80" />
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                        />
                                    </a>
                                    <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none md:pointer-events-auto">
                                        <span className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors block">
                                            <ExternalLink size={20} />
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow relative z-20">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-300 mb-6 flex-grow text-lg leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="flex items-center gap-1.5 px-3 py-1 text-sm font-medium bg-white/5 text-gray-300 rounded-full border border-white/5 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors"
                                            >
                                                {getTechIcon(tech)}
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="flex flex-col items-center gap-8">
                    {projects.length > 6 && (
                        <button
                            onClick={() => {
                                if (navigator.vibrate) navigator.vibrate(15);
                                if (visibleProjects < projects.length) {
                                    loadMore();
                                } else {
                                    setVisibleProjects(6);
                                    // Optional: Scroll back to top of projects section
                                    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="px-8 py-3 bg-transparent border border-gray-700 text-gray-300 rounded-full font-medium hover:bg-white/5 hover:border-white hover:text-white transition-all duration-300 flex items-center gap-2 group hover:tracking-widest hover:px-10"
                        >
                            {visibleProjects < projects.length ? (
                                <>Load More <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" /></>
                            ) : (
                                <>Show Less <ArrowDown size={18} className="group-hover:-translate-y-1 transition-transform rotate-180" /></>
                            )}
                        </button>
                    )}

                    <div className="mt-12 pt-12 border-t border-white/10 w-full flex flex-col items-center">
                        <h3 className="text-2xl font-bold mb-6 text-center">Want to see my full professional journey?</h3>
                        <PremiumButton
                            href="https://its-sriram-here.neocities.org/Sriram-Resume"
                            target="_blank"
                            rel="noopener noreferrer"
                            icon={FileText}
                        >
                            View My Resume
                        </PremiumButton>
                        <div className="mt-12 mb-12 w-full flex justify-center">
                            <ParticleText text="SRIRAM" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
