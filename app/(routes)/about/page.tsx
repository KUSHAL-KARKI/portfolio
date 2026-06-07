// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import image from "@/public/images/profile/profile.jpeg";

// 1. Import official brand icons (Simple Icons) and a few generic ones (FontAwesome)
import { 
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss, SiHtml5, SiCss, SiFramer,
  SiNodedotjs, SiExpress, SiCplusplus, SiPython,
  SiMongodb, SiPostgresql, SiPrisma, SiRedis,
  SiGit, SiGithub, SiDocker, SiPostman, SiVercel, SiLinux
} from "react-icons/si";
import { FaNetworkWired, FaServer, FaDatabase } from "react-icons/fa";

// 2. Updated Data Structure with Icons
const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "HTML5", Icon: SiHtml5 },
      { name: "CSS3", Icon: SiCss },
      { name: "Framer Motion", Icon: SiFramer },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express.js", Icon: SiExpress },
      { name: "RESTful APIs", Icon: FaServer },
      { name: "System Design", Icon: FaNetworkWired },
      { name: "C++", Icon: SiCplusplus },
      { name: "Python", Icon: SiPython },
    ],
  },
  {
    title: "Database & ORM",
    skills: [
      { name: "MongoDB", Icon: SiMongodb },
      { name: "Mongoose", Icon: FaDatabase }, // Using generic DB icon for Mongoose
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "Prisma", Icon: SiPrisma },
      { name: "Redis", Icon: SiRedis },
    ],
  },
  {
    title: "Infrastructure & Tools",
    skills: [
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "Docker", Icon: SiDocker },
      { name: "Postman", Icon: SiPostman },
      { name: "Vercel", Icon: SiVercel },
      { name: "Linux / Bash", Icon: SiLinux },
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center px-6 md:px-16 py-24">
      <div className="w-full max-w-5xl mx-auto">
        
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-zinc-500 hover:text-white transition-colors mb-16"
        >
          <span>←</span> Back
        </Link>

        <div className="flex flex-col gap-20 md:gap-32">
          {/* Top Half: Narrative & Image */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
            {/* Left Content */}
            <div className="flex-1 flex flex-col items-start">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                My Story
              </h1>
              
              <div className="mt-8 space-y-6 max-w-xl text-lg leading-relaxed text-zinc-400">
                <p>
                  I am a Computer Engineering student passionate about solving real-world problems through clean architecture and modern user experiences.
                </p>
                <p>
                  My journey into software development started with a curiosity for how systems operate behind the scenes. Today, my focus is strictly on the MERN stack, architecting scalable backend APIs, and building fluid, responsive interfaces.
                </p>
                <p>
                  I believe that great software isn't just about writing code that works—it's about writing code that is clean, maintainable, and highly performant.
                </p>
              </div>

              <button className="mt-10 px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:scale-105 transition-all">
                Download Full Resume
              </button>
            </div>

            {/* Right Content: Image */}
            <div className="flex-shrink-0 relative w-full max-w-[300px] md:max-w-[360px] aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src={image}
                sizes="(max-width: 768px) 100vw, 360px"
                alt="Kushal Karki"
                fill
                priority
                className="object-cover brightness-75 grayscale transition-all duration-700 hover:brightness-100 hover:grayscale-0"
              />
            </div>
          </div>

          {/* Bottom Half: Skills & Education */}
          <div className="flex flex-col gap-24 pt-16 border-t border-zinc-800/50">
            
            {/* DETAILED TECH STACK SECTION */}
            <div className="w-full">
              <h3 className="text-3xl font-bold mb-12 text-white">Technical Arsenal</h3>
              
              {/* Grid layout matching your reference image */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {skillCategories.map((category) => (
                  <div key={category.title} className="flex flex-col items-start">
                    
                    {/* Category Title */}
                    <h4 className="text-sm font-semibold tracking-[0.15em] uppercase text-zinc-500 mb-6">
                      {category.title}
                    </h4>
                    
                    {/* ICON PILLS CONTAINER */}
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map(({ name, Icon }) => (
                        <span 
                          key={name} 
                          // Updated pill styling: added flex, items-center, gap-2 for the icon
                          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-zinc-800 bg-zinc-900/50 text-zinc-400 transition-all hover:border-zinc-500 hover:text-white hover:bg-zinc-800 cursor-default"
                        >
                          <Icon className="text-lg opacity-80" />
                          {name}
                        </span>
                      ))}
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* Education Timeline Row */}
            <div className="w-full">
              <h3 className="text-3xl font-bold mb-12 text-white">Education</h3>
              <div className="flex flex-col gap-10">
                
                {/* Timeline Item 1: Bachelor's */}
                <div className="relative pl-8 border-l border-zinc-800">
                  <div className="absolute w-3 h-3 bg-white rounded-full -left-[6.5px] top-1.5 ring-4 ring-[#18181B]"></div>
                  <h4 className="text-xl font-semibold text-zinc-200">B.E. Computer Engineering</h4>
                  <p className="text-zinc-400 mt-2 leading-relaxed max-w-3xl">
                    <span className="text-zinc-300 font-medium block mb-1">Tribhuvan University, IOE, Western Regional Campus (Pokhara)</span>
                    Currently pursuing my degree, focusing on core computer science fundamentals, data structures, algorithms, and software architecture.
                  </p>
                  <span className="text-sm font-medium text-zinc-500 mt-3 block tracking-wider uppercase">
                    2021 — Present
                  </span>
                </div>

                {/* Timeline Item 2: +2 Level */}
                <div className="relative pl-8 border-l border-zinc-800">
                  <div className="absolute w-3 h-3 bg-zinc-600 rounded-full -left-[6.5px] top-1.5 ring-4 ring-[#18181B]"></div>
                  <h4 className="text-lg font-semibold text-zinc-300">High School (+2 Science)</h4>
                  <p className="text-zinc-500 mt-2 leading-relaxed max-w-3xl">
                    <span className="text-zinc-400 font-medium block mb-1">Oxford Secondary School, Rupandehi</span>
                    Built a strong foundation in physics, mathematics, and analytical problem-solving.
                  </p>
                  <span className="text-sm font-medium text-zinc-600 mt-3 block tracking-wider uppercase">
                    Graduated 2021
                  </span>
                </div>

                {/* Timeline Item 3: Class 10 */}
                <div className="relative pl-8 border-l border-zinc-800">
                  <div className="absolute w-3 h-3 bg-zinc-800 rounded-full -left-[6.5px] top-1.5 ring-4 ring-[#18181B]"></div>
                  <h4 className="text-lg font-semibold text-zinc-400">Class 10 (SEE)</h4>
                  <p className="text-zinc-500 mt-2 leading-relaxed max-w-3xl">
                    <span className="text-zinc-500 font-medium block mb-1">Bhu Pu Sainik School, Banganga-8, Kapilvastu</span>
                  </p>
                  <span className="text-sm font-medium text-zinc-600 mt-3 block tracking-wider uppercase">
                    Graduated 2019
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}