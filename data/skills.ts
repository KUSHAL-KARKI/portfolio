import {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript,
  SiTailwindcss, SiHtml5, SiCss, SiFramer,
  SiNodedotjs, SiExpress, SiCplusplus,
  SiMongodb, SiMysql ,SiPostgresql, SiPrisma, SiRedis,
  SiGit, SiGithub, SiDocker, SiPostman, SiVercel, SiLinux,
} from "react-icons/si";
import { FaNetworkWired, FaServer, FaDatabase } from "react-icons/fa";

export const skillCategories = [
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
    ],
  },
  {
    title: "Database & ORM",
    skills: [
      { name: "MongoDB", Icon: SiMongodb },
      { name: "Mongoose", Icon: FaDatabase },
      { name: "MySQL", Icon: SiMysql },
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

export const timeline = [
  {
    degree: "B.E. Computer Engineering",
    school: "Tribhuvan University, IOE, Western Regional Campus (Pokhara)",
    desc: "Currently pursuing my degree, focusing on core computer science fundamentals, data structures, algorithms, and software architecture.",
    year: "2023 — Present",
    dotColor: "bg-white",
  },
  {
    degree: "High School (+2 Science)",
    school: "Oxford Secondary School, Rupandehi",
    desc: "Built a strong foundation in physics, mathematics, and analytical problem-solving.",
    year: "Graduated 2022",
    dotColor: "bg-zinc-600",
  },
  {
    degree: "Secondary Education(SEE)",
    school: "Bhu Pu Sainik School, Banganga-8, Kapilvastu",
    desc: "",
    year: "Graduated 2020",
    dotColor: "bg-zinc-800",
  },
  {
    degree: "Primary Education",
    school: "Bhu Pu Sainik School, Banganga-8, Kapilvastu",
    desc: "",
    year: "Graduated 2018",
    dotColor: "bg-zinc-800",
  },
];