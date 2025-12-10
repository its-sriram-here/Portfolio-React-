import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import { certificates } from '../data/certificates';
import GradientHeading from './GradientHeading';
import ThreeDText from './ThreeDText';

const Certificates = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section id="certificates" className="py-24 bg-black text-white relative overflow-hidden">
            {/* Unique Background: Golden Amber Breathing */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-amber-900/25 to-black animate-pulse duration-[6000ms]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20 text-center">
                    <div className="flex justify-center mb-6">
                        <GradientHeading className="text-4xl md:text-6xl font-bold tracking-tight">
                            Certifications
                        </GradientHeading>
                    </div>
                    <div className="flex justify-center">
                        <ThreeDText className="text-gray-300 text-xl max-w-3xl" delay={0.2}>
                            Recognition of my dedication to continuous learning and excellence in the field of technology.
                        </ThreeDText>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 50, rotateY: isMobile ? 0 : 90 }}
                            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                            whileHover={{
                                scale: 1.05,
                                zIndex: 20,
                                boxShadow: `0 0 30px ${cert.color || 'rgba(34, 211, 238, 0.4)'}`,
                                borderColor: cert.color || 'rgba(34, 211, 238, 0.5)'
                            }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                            className={`bg-gray-900/80 backdrop-blur-md border border-white/10 p-8 rounded-3xl transition-all duration-500 group relative overflow-hidden ${index === certificates.length - 1 && certificates.length % 2 !== 0
                                ? "md:col-span-2 md:w-[calc(50%-1rem)] md:mx-auto"
                                : ""
                                }`}
                        >
                            {/* Hover Image Overlay */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
                                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
                                {/* Subtle gradient only at bottom to keep text readable if needed, but mostly clear */}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            <div className="relative z-10 flex items-start gap-6 group-hover:opacity-0 transition-opacity duration-300">
                                <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl text-cyan-400 shadow-lg shadow-cyan-900/20">
                                    <Award size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 text-white">{cert.title}</h3>
                                    <p className="text-gray-200 text-xl mb-3 font-medium">{cert.issuer}</p>
                                    <p className="text-gray-500 text-sm flex items-center gap-2 mb-4">
                                        <Calendar size={16} />
                                        {cert.date}
                                    </p>
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        {cert.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
