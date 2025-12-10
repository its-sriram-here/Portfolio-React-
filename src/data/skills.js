import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostman } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { Layout, Server, Terminal } from 'lucide-react';

export const skills = [
    {
        category: "Frontend",
        icon: Layout,
        items: [
            { name: "HTML5", level: "Advanced", icon: FaHtml5, color: "#E34F26" },
            { name: "CSS3", level: "Advanced", icon: FaCss3Alt, color: "#1572B6" },
            { name: "JavaScript", level: "Advanced", icon: FaJs, color: "#F7DF1E" },
            { name: "React", level: "Intermediate", icon: FaReact, color: "#61DAFB" },
            { name: "Tailwind CSS", level: "Intermediate", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "Bootstrap", level: "Intermediate", icon: FaBootstrap, color: "#7952B3" }
        ]
    },
    {
        category: "Backend",
        icon: Server,
        items: [
            { name: "Node.js", level: "Intermediate", icon: FaNodeJs, color: "#339933" },
            { name: "Express.js", level: "Intermediate", icon: SiExpress, color: "#000000" },
            { name: "MongoDB", level: "Intermediate", icon: SiMongodb, color: "#47A248" },
            { name: "MySQL", level: "Intermediate", icon: SiMysql, color: "#4479A1" }
        ]
    },
    {
        category: "Tools & Others",
        icon: Terminal,
        items: [
            { name: "Git & GitHub", level: "Intermediate", icon: FaGithub, color: "#181717" },
            { name: "VS Code", level: "Advanced", icon: VscVscode, color: "#007ACC" },
            { name: "Postman", level: "Intermediate", icon: SiPostman, color: "#FF6C37" }
        ]
    }
];
