import React from 'react';
import { skills } from '../data/skills';

const SkillMarquee = () => {
    // Flatten all skill items
    const allSkills = skills.reduce((acc, category) => {
        return [...acc, ...category.items];
    }, []);

    // Duplicate array multiple times for a massive seamless loop on ultrawide monitors
    const marqueeSkills = [...allSkills, ...allSkills, ...allSkills, ...allSkills];

    return (
        <div className="w-full overflow-hidden bg-black py-12 border-y border-white/5 relative flex items-center z-10">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>

            <div className="flex animate-marquee whitespace-nowrap min-w-max hover:[animation-play-state:paused]">
                {marqueeSkills.map((skill, index) => (
                    <div
                        key={`${skill.name}-${index}`}
                        className="flex items-center gap-3 px-8 py-4 mx-4 bg-zinc-900/40 backdrop-blur-md rounded-2xl border border-white/10 hover:border-cyan-500/50 hover:bg-zinc-800 transition-all duration-300 group cursor-default hover:scale-105 shadow-lg"
                    >
                        <div
                            className="transition-transform duration-300 group-hover:scale-110 drop-shadow-md"
                            style={{ color: skill.color }}
                        >
                            <skill.icon size={28} />
                        </div>
                        <span className="text-gray-300 group-hover:text-white font-bold text-lg tracking-wide">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillMarquee;
