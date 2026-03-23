import { meta, shopify, starbucks, tesla } from "../assets/images";


import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    c_sharp,
    cpp,
    unity,
    unreal,
    godot,
    python,
    opengl,
    genieAINow,
    gears,
    ai,
    videoGame,


} from "../assets/icons";

export const skills = [
     {
        imageUrl: unity,
        name: "Unity",
        type: "Game Engine",
    },
     {
        imageUrl: unreal,
        name: "Unreal Engine",
        type: "Game Engine",
    },
     {
        imageUrl: godot,
        name: "Godot",
        type: "Game Engine",
    },
     {
        imageUrl: c_sharp,
        name: "C#",
        type: "Game Engine",
    },
     {
        imageUrl: cpp,
        name: "C++",
        type: "Game Engine",
    },
    
     {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
     {
        imageUrl: opengl,
        name: "OpenGL",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "A.I Prompt Engineer Intern / Software Dev",
        company_name: "GenieAINow",
        icon: genieAINow,
        iconBg: "#accbe1",
        date: " April 2025- Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Optimized the prompting and engineering of voice A.I (NLP) to solve problems and innovate in uncharted territory.",
            "Collaborated with back-end logistics team to enhance process efficiency, collaborated with front-end UI/UX team to enhance user experience and spoke to clients directly.",
            "Personally managed client relations and helped launch our systems onto client computers.",
            "Managed the Onboarding process for these clients.",

        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/JOJOoooooooooooooooo',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/jonathan-ghattas/',
    }
];

export const projects = [
    {
        iconUrl: gears,
        theme: 'btn-back-red',
        name: 'Game Engine',
        description: 'Architected a custom 3D game engine from the ground up using C++ and OpenGL. The featured demonstration highlights the engines real-time lighting system and material properties. This project provided a deep dive into low-level systems programming, reinforcing the critical importance of memory management, cache coherency, and modular design in achieving high-performance scalability.',
        link: 'https://github.com/JOJOoooooooooooooooo',
        videoId: 'S7E2m7p6qp8'
    },
    {
        iconUrl: ai,
        theme: 'btn-back-green',
        name: 'Machine Learning Algorithm for Optimization Problem',
        description: "Developed an optimization application designed to solve the 'Woodcutters Problem' using heuristic-based search patterns. The project focused on maximizing board utility by eliminating 'red zones' (waste) through efficient recursive logic and spatial partitioning. This challenge showcased my ability to translate complex Machine Learning concepts into a performant, production-ready tool, earning a top-tier placement for program efficiency and runtime speed.",
        link: 'https://github.com/JOJOoooooooooooooooo',
        videoId: 'ySMVZwXzkd0'
    },
     {
        iconUrl: videoGame,
        theme: 'btn-back-blue',
        name: '3D Platformer - Unity',
        description: 'Engineered a fully functional 3D platformer from scratch within a 24-hour development cycle. The project features a custom character controller, dynamic camera systems with scripted cinematic sequences, and a modular power-up framework. I leveraged Unity’s Animator Controllers and Blend Trees to achieve fluid character transitions while maintaining a clean, highly reusable codebase.',
        link: 'https://github.com/JOJOoooooooooooooooo/3D-PlatFormer-Game-in-Unity---Jonathan-Ghattas',
        videoId: 'q1RyiYkjxJU'
    },
    {
        iconUrl: genieAINow,
        theme: 'btn-back-pink',
        name: 'GenieAINow',
        description: "At GenieAINow, an AI solutions startup for the healthcare sector, I operated at the intersection of development and strategy. By collaborating across full-stack teams and engaging directly with medical clients, I developed a reputation for being a dynamic problem-solver. This role solidified my ability to navigate the complexities of startup growth while delivering high-reliability AI tools for dental and medical centers.",
        link: 'https://github.com/JOJOoooooooooooooooo',
        videoId: 'G8tnkwpB9ts'
    },
   
    {
        iconUrl: videoGame,
        theme: 'btn-back-black',
        name: '2D Plaformer - Unreal Engine',
        description: "Co-developed a dynamic 2D action-platformer in Unreal Engine, architecting the core combat and locomotion systems using Blueprints. I engineered integrated dialogue trees, monster a.i, world design, and a multi-state player controller that managed health, combat stances, and environmental interactions. The project culminated in a complex, multi-phase boss encounter, which we prototyped via logic flowcharts and implemented using a centralized Game State Manager to handle cinematic triggers, SFX transitions, and win/loss conditions.",
        link: 'https://github.com/JOJOoooooooooooooooo',
        videoId: 'jHCwdFYD3XA'
    },
    {
        iconUrl: videoGame,
        theme: 'btn-back-yellow',
        name: 'Fantasy Card Game - MAUI',
        description: "Co-developed a cross-platform fantasy card game using .NET MAUI, centered on complex turn-based mechanics and data-driven design. I architected the core game engine using Object-Oriented Programming (OOP) principles, creating extensible classes for card behavior, entity management, and player states. By implementing a custom UI/UX and a specialized combat logic system, I successfully navigated the early-stage challenges of MAUI to deliver a polished, interactive experience that translated anime-inspired abilities (Jujutsu Kaisen) into balanced gameplay mechanics.",
        link: 'https://github.com/JOJOoooooooooooooooo',
        videoId: 'ldY5x0X2NL4'
    },
     {
        iconUrl: videoGame,
        theme: 'btn-back-green',
        name: 'Lunar Lander Remastered - Unity',
        description: "Co-developed a high-fidelity reimagining of the arcade classic Lunar Lander in Unity, focusing on modular systems architecture. I implemented a Finite State Machine (FSM) to manage complex lander behaviors and utilized Object Listeners (Observer Pattern) to decouple gameplay logic from visual effects, such as dynamic fuel-to-thruster synchronization. Additionally, I engineered a centralized Scene & Score Management system to handle persistent high-scores and multi-level transitions, ensuring a seamless user experience from the UI menus to the final touchdown.",
        link: 'https://github.com/JOJOoooooooooooooooo/LunarLanderRemaster',
        videoId: 'nEzTxQXesU4'
    }
];