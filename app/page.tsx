"use client";

import Image from "next/image";
import image from "@/public/images/profile/profile.jpeg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      {/* Hero Section */}
      <section
        id="home"
        className="w-full min-h-screen flex items-center justify-center px-6 md:px-16"
      >
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
          {/* Left Content */}
          <div className="flex-1 flex flex-col items-start">
            <span className="text-sm font-semibold tracking-[0.4em] uppercase text-zinc-500">
              Kushal Karki
            </span>

            <h1 className="text-6xl mt-4 md:text-[4rem] font-bold leading-[1.1] tracking-tight">
              Full Stack Software Engineer
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
              Computer Engineering student passionate about building scalable
              web applications using the MERN stack. I enjoy solving real-world
              problems through clean architecture, efficient backend systems,
              and modern user experiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="px-4 py-2 rounded-full bg-white font-semibold text-black transition-all hover:bg-zinc-400" >
                Download Resume
              </button>
              <button className="px-4 py-2 rounded-full border border-zinc-700 font-semibold transition-all hover:border-zinc-500 hover:bg-zinc-800/50" onClick={() => router.push('#contact')}>
                Contact Me
              </button>
            </div>
          </div>

          {/* Right section: Image */}
          <div className="flex-shrink-0 relative w-full max-w-[250px] md:max-w-[280px] aspect-[2/3] overflow-hidden rounded-full shadow-2xl">
            <Image
              src={image}
              sizes="(max-width: 768px) 100vw, 280px"
              alt="Kushal Karki"
              fill
              priority
              className="object-cover brightness-75 grayscale transition-all duration-700 hover:brightness-100 hover:grayscale-0 hover:scale-110"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="w-full min-h-screen flex items-center justify-center px-6 md:px-16"
      >
        {/* Left Content */}
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
              I am a Computer Engineering student and MERN Stack Developer with
              a strong interest in backend development, system design, and
              scalable applications. My focus is on building efficient APIs,
              real-time applications, distributed systems, and modern web
              applications using React, Next.js, Node.js, Express, and MongoDB.
            </p>
            <button className="mt-8 px-4 py-2 rounded-full border border-zinc-700 font-semibold hover:bg-zinc-800/50 transition-all" onClick={() => router.push('/about')}>
              Learn More
            </button>
          </div>

          {/* Right Content */}

          <div className="flex-shrink-0 relative w-full max-w-[320px] md:max-w-[400px] aspect-square overflow-hidden ">
            <Image
              src={image}
              sizes="(max-width: 768px) 100vw, 400px"
              alt="Kushal Karki"
              fill
              priority
              className="object-cover brightness-75 grayscale transition-all duration-500 hover:brightness-100 hover:grayscale-0"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="project"
        className="w-full min-h-screen flex items-center justify-center px-6 md:px-16"
      >
        {/* Left Content */}
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
              Here are some of my recent projects that showcase my skills in
              full-stack development.
            </p>
            <button className="mt-8 px-4 py-2 rounded-full border border-zinc-700 font-semibold hover:bg-zinc-700/40 transition-all">
              View All Projects
            </button>
          </div>

          {/* Right Content */}
          <div className="flex-shrink-0 relative w-full max-w-[320px] md:max-w-[400px] aspect-square overflow-hidden ">
            <Image
              src={image}
              sizes="(max-width: 768px) 100vw, 400px"
              alt="Kushal Karki"
              fill
              priority
              className="object-cover brightness-75 grayscale transition-all duration-500 hover:brightness-100 hover:grayscale-0"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="w-full min-h-screen flex items-center justify-center px-6 md:px-16"
      >
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
          {/* Left Content */}
          <div className="flex-1 flex flex-col items-start">
            <h1 className="text-4xl md:text-5xl font-bold">Get In Touch</h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
              Interested in working together or discussing a project? Feel free
              to reach out.
            </p>
            <a
              href="mailto:kushalkarki@gmail.com"
              className="mt-4 text-lg md:text-lg font-medium hover:text-zinc-300 transition-colors"
            >
              kushalkarki@gmail.com
            </a>

            <div className="mt-8 flex justify-start gap-6">
              <a
                href="mailto:kushalkarki@gmail.com"
                className="flex items-center justify-center w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 hover:-translate-y-1 transition-all duration-300"
              >
                <FaEnvelope className="text-2xl" />
              </a>
              <a
                href="https://github.com/KUSHAL-KARKI"
                target="_blank"
                className="flex items-center justify-center w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 hover:-translate-y-1 transition-all duration-300"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/kushal-karki-2978342a3"
                target="_blank"
                className="flex items-center justify-center w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 hover:-translate-y-1 transition-all duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-shrink-0 relative w-full max-w-[320px] md:max-w-[400px] aspect-square overflow-hidden ">
            <Image
              src={image}
              sizes="(max-width: 768px) 100vw, 400px"
              alt="Kushal Karki"
              fill
              priority
              className="object-cover brightness-75 grayscale transition-all duration-500 hover:brightness-100 hover:grayscale-0"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
