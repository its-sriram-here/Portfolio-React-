import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, Briefcase, FileText, Mail, Home, Code } from 'lucide-react';

const CommandMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const inputRef = useRef(null);

    // Toggle logic
    useEffect(() => {
        const handleKeyDown = (e) => {
            // Open on Ctrl+K or Cmd+K
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
            // Close on Escape
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Focus input on open
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current.focus(), 100);
        } else {
            setSearch('');
        }
    }, [isOpen]);

    const handleNavigate = (id) => {
        setIsOpen(false);
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    };

    const handleExternal = (url) => {
        setIsOpen(false);
        window.open(url, '_blank');
    };

    const commands = [
        { id: 'hero', icon: Home, label: 'Go to Home', action: () => handleNavigate('hero') },
        { id: 'about', icon: User, label: 'Go to About', action: () => handleNavigate('about') },
        { id: 'experience', icon: Briefcase, label: 'Go to Experience', action: () => handleNavigate('experience') },
        { id: 'projects', icon: Code, label: 'Go to Projects', action: () => handleNavigate('projects') },
        { id: 'contact', icon: Mail, label: 'Go to Contact', action: () => handleNavigate('contact') },
        { id: 'resume', icon: FileText, label: 'View Resume', action: () => handleExternal('https://its-sriram-here.neocities.org/Sriram-Resume') },
    ];

    const filteredCommands = commands.filter(cmd => 
        cmd.label.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-[10000] flex items-start justify-center pt-[15vh] bg-black/60 backdrop-blur-md px-4"
                    >
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-xl bg-zinc-900 border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(34,211,238,0.15)] overflow-hidden flex flex-col"
                        >
                            {/* Search Header */}
                            <div className="flex items-center px-4 py-4 border-b border-white/5">
                                <Search className="text-gray-400 mr-3" size={22} />
                                <input 
                                    ref={inputRef}
                                    type="text" 
                                    placeholder="Type a command or search..." 
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-500 text-lg"
                                />
                                <div className="flex items-center gap-1.5 ml-2">
                                    <span className="px-2 py-1 text-xs font-mono text-gray-400 bg-white/5 rounded border border-white/5">ESC</span>
                                </div>
                            </div>

                            {/* Command List */}
                            <div className="max-h-[50vh] overflow-y-auto p-2">
                                {filteredCommands.length === 0 ? (
                                    <div className="p-8 text-center text-gray-500">
                                        No results found for "{search}"
                                    </div>
                                ) : (
                                    filteredCommands.map((cmd) => (
                                        <button
                                            key={cmd.id}
                                            onClick={cmd.action}
                                            className="w-full flex items-center gap-4 px-4 py-3.5 text-left hover:bg-white/5 rounded-xl text-gray-300 hover:text-white group transition-colors"
                                        >
                                            <cmd.icon size={20} className="text-gray-500 group-hover:text-cyan-400 transition-colors" />
                                            <span className="font-medium text-lg">{cmd.label}</span>
                                        </button>
                                    ))
                                )}
                            </div>
                            
                            {/* Footer */}
                            <div className="px-4 py-3 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
                                <span>Navigation & Actions</span>
                                <div className="flex items-center gap-2">
                                    Use <span className="font-mono bg-white/5 px-1.5 py-0.5 rounded border border-white/5">↑</span><span className="font-mono bg-white/5 px-1.5 py-0.5 rounded border border-white/5">↓</span> or mouse to navigate
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default CommandMenu;
