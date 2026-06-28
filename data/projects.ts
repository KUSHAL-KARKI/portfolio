// data/projects.ts
export const projects = [
  {
    title: "E-Commerce API Architecture",
    slug: "ecommerce-api",
    year: "2023",
    shortDescription: "A fully scalable backend for a modern e-commerce platform featuring JWT auth and payment integration.",
    content: [
      "For this project, the primary goal was to design a backend architecture capable of handling high-volume traffic during flash sales. I utilized Node.js and Express to build microservices.",
      "One of the biggest challenges was ensuring database consistency during concurrent checkout requests. I implemented Redis for caching product states and locking transactions.",
      "The final result was an API capable of serving 10,000 requests per minute with a 99.9% uptime."
    ],
    image: "/images/projects/82528385-a73f-488f-9003-513321283a6b.png",
    techStack: ["Node.js", "Express", "MongoDB", "Redis"],
    githubUrl: "https://github.com/yourusername/ecommerce-api",
    liveUrl: "https://yourproject.com",
  },
  {
    title: "Real-Time Chat Application",
    slug: "real-time-chat",
    year: "2024",
    shortDescription: "A fluid, low-latency messaging app with real-time presence and typing indicators.",
    content: [
      "Building a real-time chat application required a deep dive into WebSockets. I chose Socket.io to handle the bidirectional communication between the client and server.",
      "I designed the frontend with React and Tailwind CSS to feel as native and fluid as iMessage or WhatsApp."
    ],
    image: "/images/projects/64419ad21f1ce8214ab3c78f_Group 8-min.jpg",
    techStack: ["React", "Socket.io", "Tailwind", "Express"],
    githubUrl: "https://github.com/yourusername/real-time-chat",
    liveUrl: "",
  },
  {
    title: "Quanta AI Trading Agent",
    slug: "quanta-ai-agent",
    year: "2026",
    shortDescription: "A self-hosted AI agent that monitors a personal portfolio and scans macro market trends.",
    content: [
      "Quanta was born out of a need to automate tedious stock market research. It leverages the Gemini API for natural language understanding and tool calling to execute background scans.",
      "The frontend provides a sleek, terminal-inspired dashboard built with Shadcn UI, showing real-time logs of the agent's decision-making process.",
      "Data is persisted locally using SQLite and Prisma, ensuring fast and private execution without relying on expensive cloud databases."
    ],
    image: "/images/projects/quanta-dashboard-hero.png",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Gemini API", "Prisma"],
    githubUrl: "https://github.com/yourusername/quanta",
    liveUrl: "https://quanta-demo.com",
  },
  {
    title: "Serverless Task Manager SaaS",
    slug: "serverless-task-manager",
    year: "2025",
    shortDescription: "A collaborative Kanban board built entirely on serverless architecture for infinite scalability.",
    content: [
      "This project explored the limits of serverless computing. I used Next.js API routes deployed on Vercel, paired with Supabase for the database and authentication.",
      "To provide a seamless user experience, I implemented optimistic UI updates using React Query, ensuring tasks snap into place instantly before the server confirms the change.",
      "Stripe was integrated to handle subscription tiers, allowing users to upgrade to premium workspaces."
    ],
    image: "/images/projects/kanban-board-preview.jpg",
    techStack: ["Next.js", "Supabase", "React Query", "Stripe"],
    githubUrl: "https://github.com/yourusername/serverless-tasks",
    liveUrl: "https://tasks-saas-demo.com",
  },
  {
    title: "Crypto Portfolio Tracker",
    slug: "crypto-portfolio-tracker",
    year: "2022",
    shortDescription: "A secure dashboard for aggregating crypto assets across multiple wallets and exchanges.",
    content: [
      "Managing assets across various blockchains can be messy. This app connects to popular exchange APIs (Binance, Coinbase) and parses on-chain wallet addresses to provide a unified view.",
      "Security was a top priority, so all API keys are encrypted at rest using AES-256 and never exposed to the client.",
      "The data visualization relies on Chart.js to render beautiful, responsive historical performance graphs."
    ],
    image: "/images/projects/crypto-tracker-dark.png",
    techStack: ["Vue.js", "Node.js", "PostgreSQL", "Chart.js"],
    githubUrl: "https://github.com/yourusername/crypto-tracker",
    liveUrl: "",
  },
  {
    title: "Smart Home IoT Hub",
    slug: "smart-home-iot-hub",
    year: "2024",
    shortDescription: "A centralized control panel for managing smart lights, thermostats, and security cameras locally.",
    content: [
      "Tired of relying on cloud-dependent smart home apps, I built a local-first IoT hub using a Raspberry Pi as the main server.",
      "The backend uses MQTT to communicate with various ESP32 microcontrollers around the house, providing sub-second response times for toggling devices.",
      "The PWA frontend allows family members to install the dashboard directly to their home screens, bypassing the app stores."
    ],
    image: "/images/projects/iot-dashboard-mockup.webp",
    techStack: ["React", "MQTT", "Python", "Docker"],
    githubUrl: "https://github.com/yourusername/local-iot-hub",
    liveUrl: "https://home-hub-local.net",
  }
];