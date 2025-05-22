
import React from 'react';
import { Project, Skill, NavLink } from './types';

export const DESIGNER_NAME = "Alex Chroma";
export const CONTACT_EMAIL = "alex.chroma@example.com";

export const NAV_LINKS: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

// SVG Icons
export const UserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);

export const BriefcaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073a2.25 2.25 0 0 1-2.25 2.25h-12a2.25 2.25 0 0 1-2.25-2.25v-4.073M15.75 10.5h-7.5a2.25 2.25 0 0 0-2.25 2.25v4.507c0 .534.212 1.026.562 1.386L8.25 21h7.5l2.438-2.357c.35-.36.562-.852.562-1.386V12.75a2.25 2.25 0 0 0-2.25-2.25Z" />
  </svg>
);

export const LightBulbIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.355a7.5 7.5 0 0 1-3 0m3 0a7.5 7.5 0 0 0-3 0m0 0H9m1.5-12H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 18.75h-1.875a1.125 1.125 0 0 1-1.125-1.125V11.25c0-.621.504-1.125 1.125-1.125h1.875c.621 0 1.125.504 1.125 1.125V17.625c0 .621-.504 1.125-1.125 1.125Z" />
  </svg>
);

export const PaletteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.375 3.375 0 0 1 3.375 17.625c0-1.03.394-1.983 1.098-2.727l4.908-4.908c.744-.744 1.697-1.098 2.727-1.098A3.375 3.375 0 0 1 15.375 9c1.03 0 1.983.394 2.727 1.098l4.908 4.908c.744.744 1.098 1.697 1.098 2.727A3.375 3.375 0 0 1 17.25 21h-2.25M6.75 16.5h10.5" />
  </svg>
);

export const CodeBracketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
);


export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'EcoInsight Dashboard',
    description: 'A data visualization platform for environmental impact tracking. Designed with a focus on clarity and actionable insights for sustainability initiatives.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    githubUrl: 'https://github.com/yourusername/project1',
    liveUrl: '#',
    tags: ['UX Design', 'Data Visualization', 'Web App'],
  },
  {
    id: '2',
    title: 'Artisan Connect Mobile App',
    description: 'A mobile application connecting local artisans with buyers. Features a clean, intuitive interface and seamless user experience for browsing and purchasing handmade goods.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    githubUrl: 'https://github.com/yourusername/project2',
    tags: ['UI Design', 'Mobile App', 'E-commerce'],
  },
  {
    id: '3',
    title: 'Nova Landing Page',
    description: 'A visually striking landing page for a SaaS product. Crafted to maximize conversions through compelling storytelling and clear calls-to-action.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    liveUrl: '#',
    tags: ['Web Design', 'Marketing', 'SaaS'],
  },
   {
    id: '4',
    title: 'Mindful Moments App',
    description: 'A wellness application designed to promote mindfulness and meditation. Features calming animations and a user-friendly interface for daily well-being practices.',
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    githubUrl: 'https://github.com/yourusername/project4',
    liveUrl: '#',
    tags: ['UI/UX Design', 'Mobile App', 'Wellness'],
  },
];

export const SKILLS_DATA: Skill[] = [
  { id: 'ui', name: 'UI Design', icon: <PaletteIcon className="w-8 h-8 text-indigo-400" />, level: 90 },
  { id: 'ux', name: 'UX Research', icon: <UserIcon className="w-8 h-8 text-indigo-400" />, level: 85 },
  { id: 'proto', name: 'Prototyping', icon: <LightBulbIcon className="w-8 h-8 text-indigo-400" />, level: 95 },
  { id: 'brand', name: 'Branding', icon: <BriefcaseIcon className="w-8 h-8 text-indigo-400" />, level: 80 },
  { id: 'frontend', name: 'Frontend Basics', icon: <CodeBracketIcon className="w-8 h-8 text-indigo-400" />, level: 70 },
];

export const DESIGNER_INTRO = "Hello! I'm Alex Chroma, a passionate designer specializing in creating intuitive and engaging digital experiences. With a keen eye for detail and a user-centric approach, I transform complex problems into elegant solutions. Welcome to my portfolio where art meets functionality.";
export const DESIGN_PHILOSOPHY_KEYWORDS = ['user-centric digital experiences', 'innovative branding', 'empathy-driven design', 'minimalist aesthetics', 'impactful storytelling'];

