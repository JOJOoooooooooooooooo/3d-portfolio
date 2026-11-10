// import { meta, shopify, starbucks, tesla } from "../assets/images";


import {
    // car,
    contact,
    css,
    // estate,
    // express,
    git,
    github,
    html,
    javascript,
    linkedin,
    // mongodb,
    // motion,
    // mui,
    nextjs,
    nodejs,
    // pricewise,
    react,
    redux,
    // sass,
    // snapgram,
    // summiz,
    tailwindcss,
    // threads,
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
    HowlingWolfGames,
    AmazonWebServices,


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
    },
     {
        imageUrl: AmazonWebServices,
        name: "Amazon Web Services",
        type: "Backend/Cloud",
    },
];

export const experiences = [
    {
        title: "Software Dev & A.I Prompt Engineer Intern",
        company_name: "GenieAINow",
        icon: genieAINow,
        iconBg: "#accbe1",
        date: " June 2024- June 2026",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Optimized the prompting and engineering of voice A.I (NLP) to solve problems and innovate in uncharted territory.",
            "Collaborated with back-end logistics team to enhance process efficiency, collaborated with front-end UI/UX team to enhance user experience and spoke to clients directly.",
            "Personally managed client relations and helped launch our systems onto client computers.",
            "Managed the Onboarding process for these clients.",

        ],
    },
    {
        title: "Game Designer & Narrative Producer",
        company_name: "Howling Wolf Games",
        icon: HowlingWolfGames,
        iconBg: "#111111",
        date: " May 2026- Present",
        points: [
            "Created System Designs and Level Designs for game projects.",
            "Created Wireframes and Game Design Documents for specific Game concepts and functionalities.",
            "Worked on lore of the game as well as polish and cutscene coherence.",
            "Collaborated with Art team to create UI/UX for the game as well as main menu concepts and accessibility.",
            "Worked in engine to create features and customize levels.",
            "Spearheaded and managed development teams, directing cross-functional efforts to deliver key project milestones on schedule.",

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
        iconUrl: videoGame,
        theme: 'btn-back-blue',
        name: 'Sonic Fan Game - Unity Project',
        description: 'This project is a technical deep dive into the unique challenges of high-speed 3D platforming, driven by a passion for the classic Sonic franchise. I engineered a custom physics-based character controller to capture the iconic "feel of speed," balancing rapid acceleration with responsive traversal, combat, and ring-collection systems. A major highlight is the final encounter with Dr. Eggman, where I scripted the entire cinematic sequence and developed complex AI behaviors for his movement and attack patterns. To elevate the scale of this showdown, I implemented custom logic to transform the stage into a seamless endless runner, ensuring the environment loops indefinitely until the boss is defeated. Additionally, I built a robust asynchronous loading system to manage precise level transitions and maintain high performance throughout the experience. overall this is my proudest work yet!',
        link: 'https://github.com/JOJOoooooooooooooooo/Sonic-Project/tree/main',
        videoId: 'LZ2xb5vBfDY'
    },
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