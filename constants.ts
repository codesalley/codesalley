
import { Project, BlogPost, Skill } from './types';

export const SKILLS: Skill[] = [
  { name: 'React' },
  { name: 'React Native' },
  { name: 'Vue' },
  { name: 'TypeScript' },
  { name: 'Ruby on Rails' },
  { name: 'Go' },
  { name: 'PostgreSQL' },
  { name: 'Tailwind CSS' },
  { name: 'Heroku' },
  { name: 'Vercel' },
  { name: 'Supabase' },
  { name: 'Firebase' },
  { name: 'Web3' },
  { name: 'Solidity' },
  { name: 'Stripe' },
];

export const PROJECTS: Project[] = [
  {
    title: "Supply Chain DApp",
    description: "A decentralized app using React and Solidity to track goods through a supply chain, ensuring transparency and immutability.",
    tech: ["React", "Solidity", "Ethereum", "Tailwind CSS"],
    liveDemo: "#",
    github: "#",
    image: "https://picsum.photos/seed/project1/500/300",
    highlight: "Used smart contract events to update UI in real-time."
  },
  {
    title: "Mobile Fitness Coach",
    description: "A cross-platform mobile app that provides personalized workout plans and tracks user progress using React Native.",
    tech: ["React Native", "Firebase", "Stripe"],
    liveDemo: "#",
    github: "#",
    image: "https://picsum.photos/seed/project2/500/300",
    highlight: "Integrated Stripe for seamless subscription management."
  },
  {
    title: "SaaS Boilerplate",
    description: "A robust starting point for SaaS applications, built with Go on the backend and React for the frontend, deployed on Vercel.",
    tech: ["Go", "React", "PostgreSQL", "Vercel"],
    github: "#",
    image: "https://picsum.photos/seed/project3/500/300",
    highlight: "Architected a multi-tenant database schema with row-level security."
  },
];

export const POSTS: BlogPost[] = [
  {
    title: "Full-Stack Tips for Building Modern Apps",
    summary: "A collection of tips and best practices for developing full-stack applications, from database design to frontend performance.",
    link: "#",
  },
  {
    title: "Getting Started with Web3 and Solidity",
    summary: "An introductory guide to the world of decentralized applications, smart contracts, and the Ethereum blockchain.",
    link: "#",
  },
  {
    title: "Why I Chose Go for my latest Backend Project",
    summary: "Exploring the benefits of Go for building high-performance, concurrent, and scalable backend services.",
    link: "#",
  }
];
