import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import GradientHeading from './GradientHeading';


const About = () => {
    return (
        <section id="about" className="py-24 bg-black text-white relative overflow-hidden">
            {/* Unique Background: Emerald Breathing */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-900/25 to-black animate-pulse duration-[7000ms]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20">
                    <GradientHeading className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                        About Me
                    </GradientHeading>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 max-w-4xl"
                    >
                        <p className="text-gray-200 text-xl md:text-2xl leading-relaxed">
                            I am a dedicated Full Stack Developer with a passion for building scalable and efficient web applications.
                            With a strong foundation in both frontend and backend technologies, I enjoy solving complex problems
                            and creating seamless user experiences.
                        </p>
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                            My journey in tech is driven by curiosity and a constant desire to learn.
                            I specialize in the MERN stack and have experience working with modern tools and frameworks.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 group hover:-translate-y-2"
                        >
                            <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-8 text-cyan-400 group-hover:scale-110 transition-transform duration-500">
                                <skillGroup.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-cyan-300 transition-colors">{skillGroup.category}</h3>
                            <div className="space-y-4">
                                {skillGroup.items.map((skill) => (
                                    <div key={skill.name} className="flex items-center gap-4 group/item hover:bg-white/5 p-3 rounded-xl transition-colors">
                                        <div className="text-gray-400 group-hover/item:text-white transition-colors" style={{ color: skill.color }}>
                                            <skill.icon size={24} />
                                        </div>
                                        <div className="flex-1 flex justify-between items-center">
                                            <span className="text-gray-300 group-hover/item:text-white transition-colors font-medium text-lg">{skill.name}</span>
                                            <span className="text-xs px-3 py-1 bg-white/5 rounded-full text-gray-400 group-hover/item:bg-cyan-500/20 group-hover/item:text-cyan-300 transition-colors border border-white/5">
                                                {skill.level}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
