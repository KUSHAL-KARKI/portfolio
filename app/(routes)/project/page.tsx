"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerChild, pageFade } from "@/animations/variants";
import ProjectCard from "@/components/ui/Card";
import { projects } from "@/data/projects";
import { useRouter } from "next/navigation";

const inView = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false, amount: 0.1 },
};

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <motion.main
      variants={pageFade}
      initial="hidden"
      animate="visible"
      className="w-full min-h-screen flex flex-col items-center px-5 sm:px-8 md:px-16 py-16 sm:py-20 md:py-24"
    >
      <div className="w-full max-w-6xl mx-auto">

        {/* Back button */}
        <button
          onClick={() => router.push("/#project")}
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-zinc-500 hover:text-white transition-colors mb-10 sm:mb-16"
        >
          <span>←</span> Back
        </button>

        {/* Header */}
        <motion.div
          variants={staggerContainer(0.12, 0.05)}
          {...inView}
          className="mb-10 sm:mb-16"
        >
          <motion.h1
            variants={staggerChild}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6"
          >
            Selected Works
          </motion.h1>
          <motion.p
            variants={staggerChild}
            className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed"
          >
            A collection of my recent engineering projects, focusing on scalable
            backend architectures, real-time data flow, and modern web interfaces.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          {...inView}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              slug={project.slug}
              shortDescription={project.shortDescription}
              image={project.image}
              techStack={project.techStack}
              year={project.year}
            />
          ))}
        </motion.div>

      </div>
    </motion.main>
  );
}