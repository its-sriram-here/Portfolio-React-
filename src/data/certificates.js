import fullstackCert from '../assets/cert-fullstack.jpg';
import nssCert from '../assets/cert-nss.jpg';
import coordinatorCert from '../assets/cert-coordinator.jpg';
import cProgCert from '../assets/cert-c-programming.jpg';
import websiteCreationCert from '../assets/cert-website-creation.jpg';

export const certificates = [
    {
        title: "3rd Place - Website Creation",
        issuer: "Kongu Arts and Science College (Login Y2K 24-25)",
        date: "Jan 2025",
        description: "Secured third place in the Website Creation event organized by the Department of Computer Technology.",
        image: websiteCreationCert,
        link: "#",
        color: "rgba(236, 72, 153, 0.6)" // Pink
    },
    {
        title: "Full Stack Development",
        issuer: "Besant Technologies",
        date: "2024",
        description: "Comprehensive training in MERN stack development, covering React, Node.js, Express, and MongoDB.",
        image: fullstackCert,
        link: "#",
        color: "rgba(34, 211, 238, 0.6)" // Cyan
    },
    {
        title: "NSS Volunteer",
        issuer: "National Service Scheme",
        date: "2023",
        description: "Active volunteer participating in various social service activities and community development programs.",
        image: nssCert,
        link: "#",
        color: "rgba(250, 204, 21, 0.6)" // Yellow
    },
    {
        title: "Event Coordinator",
        issuer: "College Symposium",
        date: "2023",
        description: "Successfully coordinated technical and non-technical events during the college annual symposium.",
        image: coordinatorCert,
        link: "#",
        color: "rgba(168, 85, 247, 0.6)" // Purple
    },
    {
        title: "C Programming",
        issuer: "Great Learning",
        date: "2022",
        description: "Completed a comprehensive course on C programming fundamentals and problem-solving.",
        image: cProgCert,
        link: "#",
        color: "rgba(59, 130, 246, 0.6)" // Blue
    }
];
