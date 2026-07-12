"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  staggerContainer,
  staggerChild,
  pageFade,
} from "@/animations/variants";
import ProjectCard from "@/components/ui/Card";
import { projects } from "@/data/projects";

const inView = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false, amount: 0.1 },
};

export default function ProjectsPage() {
  const router = useRouter();

  // First project in the list is treated as the featured project.
  const [featured, ...rest] = projects;
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

        {/* ── Featured Project ── */}
        {featured && (
          <>
            <motion.div
              variants={staggerContainer(0.12, 0.05)}
              {...inView}
              className="mb-12 sm:mb-16"
            >
              <motion.h1
                variants={staggerChild}
                className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-8"
              >
                <span className="text-white">★</span> Featured Project
              </motion.h1>
            </motion.div>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 lg:items-center mb-16 sm:mb-24">
              {/* Hero image */}
              <motion.div
                variants={staggerChild}
                className="relative w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 shrink-0"
              >
                {featured.image ? (
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-zinc-600 font-medium tracking-widest uppercase text-sm">
                      No Image Available
                    </span>
                  </div>
                )}
              </motion.div>

              <motion.div
                variants={staggerContainer(0.12, 0.05)}
                {...inView}
                className="flex-1 min-w-0"
              >
                <div className="flex flex-col gap-6 max-w-3xl">
                  <motion.div variants={staggerChild}>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3">
                      {featured.title}
                    </h2>
                    <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
                      {featured.shortDescription}
                    </p>
                  </motion.div>

                  {/* Tech stack */}
                  {featured.techStack?.length > 0 && (
                    <motion.div
                      variants={staggerChild}
                      className="flex flex-wrap gap-2"
                    >
                      {featured.techStack.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700 text-xs px-3 py-2 font-bold tracking-wide uppercase"
                        >
                          {tech}
                        </span>
                      ))}
                    </motion.div>
                  )}

                  {/* Actions */}
                  <motion.div
                    variants={staggerChild}
                    className="flex flex-wrap gap-3 pt-2"
                  >
                    <Link
                      href={`/project/${featured.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors"
                    >
                      View Project
                    </Link>
                    {featured.githubUrl && (
                      <a
                        href={featured.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View source code for ${featured.title} on GitHub (opens in new tab)`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-800 text-sm font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
                      >
                        <FaGithub className="text-base shrink-0" /> GitHub
                      </a>
                    )}
                    {featured.liveUrl && (
                      <a
                        href={featured.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${featured.title} (opens in new tab)`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-800 text-sm font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
                      >
                        <FaExternalLinkAlt className="text-sm shrink-0" /> Live
                        Demo
                      </a>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </>
        )}

        {/* ── Other Projects ── */}
        {rest.length > 0 && (
          <>
            <div className="h-px w-full bg-zinc-800 mb-10 sm:mb-12" />

                 <motion.div
              variants={staggerContainer(0.12, 0.05)}
              {...inView}
              className="mb-10 sm:mb-12"
            >
              <motion.h1
                variants={staggerChild}
                className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-8"
              >
               Other Projects
              </motion.h1>
            </motion.div>

            <motion.div
              variants={staggerContainer(0.15, 0.1)}
              {...inView}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
            >
              {rest.map((project) => (
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
          </>
        )}
      </div>
    </motion.main>
  );
}
