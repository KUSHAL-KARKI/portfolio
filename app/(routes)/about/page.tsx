"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerChild, pageFade } from "@/animations/variants";
import Link from "next/link";
import { skillCategories, timeline } from "@/data/skills";
import PhotoCollage from "@/components/ui/photoCollage";

const inView = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false, amount: 0.2 },
};

export default function AboutPage() {
  return (
    <motion.main
      variants={pageFade}
      initial="hidden"
      animate="visible"
      className="w-full min-h-screen flex flex-col items-center px-5 sm:px-8 md:px-16 py-16 sm:py-20 md:py-24"
    >
      <div className="w-full max-w-5xl mx-auto">

        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-zinc-500 hover:text-white transition-colors mb-10 sm:mb-16"
        >
          <span>←</span> Back
        </Link>

        <div className="flex flex-col gap-16 sm:gap-24 md:gap-32">

          {/* ── Hero: Narrative & Collage ──────────────────────────────── */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

            {/* Collage — on mobile/tablet sits above text */}
            <div className="flex justify-center w-full lg:hidden">
              <PhotoCollage inView={inView} />
            </div>

            {/* Left — text */}
            <motion.div
              variants={staggerContainer(0.12, 0.05)}
              {...inView}
              className="flex-1 flex flex-col items-start"
            >
              <motion.h1
                variants={staggerChild}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                My Story
              </motion.h1>

              <motion.div
                variants={staggerChild}
                className="mt-6 sm:mt-8 space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed text-zinc-400"
              >
                <p>
                  I am a Computer Engineering student at{" "}
                  <strong className="text-zinc-200">Pashchimanchal Campus, Pokhara</strong>,
                  with a passion for full-stack web development and modern
                  software engineering. I enjoy building practical,
                  user-friendly applications that solve real-world problems
                  while continuously learning new technologies and improving my
                  skills.
                </p>
                <p>
                  My primary focus is the MERN stack, and I enjoy developing
                  modern web applications using React, Next.js, Node.js,
                  Express, and MongoDB. Through personal projects, I have gained
                  hands-on experience in authentication, REST APIs, real-time
                  applications, database design, and responsive user interfaces.
                </p>
                <p className="hidden sm:block">
                  I believe great software is built with clean, maintainable
                  code and thoughtful design. Every project is an opportunity to
                  learn, improve, and create applications that are reliable,
                  scalable, and enjoyable to use. My goal is to grow as a
                  software engineer while building solutions that make a
                  meaningful impact.
                </p>
              </motion.div>

              <motion.div variants={staggerChild}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white text-black text-sm sm:text-base font-semibold transition-colors hover:bg-zinc-200"
                >
                  Download Full Resume
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Collage — desktop only, right side */}
            <div className="hidden lg:flex shrink-0">
              <PhotoCollage inView={inView} />
            </div>
          </div>

          {/* ── Skills & Education ─────────────────────────────────────── */}
          <div className="flex flex-col gap-16 sm:gap-20 md:gap-24 pt-12 sm:pt-16 border-t border-zinc-800/50">

            {/* Technical Arsenal */}
            <div className="w-full">
              <motion.div variants={staggerContainer(0.12, 0.05)} {...inView}>
                <motion.h3
                  variants={staggerChild}
                  className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-white"
                >
                  Technical Arsenal
                </motion.h3>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-10 sm:gap-y-16">
                {skillCategories.map((category) => (
                  <motion.div
                    key={category.title}
                    variants={staggerContainer(0.07, 0.05)}
                    {...inView}
                    className="flex flex-col items-start"
                  >
                    <motion.h4
                      variants={staggerChild}
                      className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-zinc-500 mb-4 sm:mb-6"
                    >
                      {category.title}
                    </motion.h4>

                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {category.skills.map(({ name, Icon }) => (
                        <motion.span
                          key={name}
                          variants={staggerChild}
                          className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium border border-zinc-800 bg-zinc-900/50 text-zinc-400 transition-colors hover:border-zinc-500 hover:text-white hover:bg-zinc-800 cursor-default"
                        >
                          <Icon className="text-base sm:text-lg opacity-80" />
                          {name}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education Timeline */}
            <div className="w-full pb-8">
              <motion.div variants={staggerContainer(0.12, 0.05)} {...inView}>
                <motion.h3
                  variants={staggerChild}
                  className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-white"
                >
                  Education
                </motion.h3>
              </motion.div>

              <motion.div
                variants={staggerContainer(0.15, 0.1)}
                {...inView}
                className="flex flex-col gap-8 sm:gap-10"
              >
                {timeline.map(({ degree, school, desc, year, dotColor }) => (
                  <motion.div
                    key={degree}
                    variants={staggerChild}
                    className="relative pl-6 sm:pl-8 border-l border-zinc-800"
                  >
                    <div
                      className={`absolute w-2.5 h-2.5 sm:w-3 sm:h-3 ${dotColor} rounded-full left-[-5.5px] sm:left-[-6.5px] top-1.5 ring-4 ring-[#18181B]`}
                    />
                    <h4 className="text-base sm:text-xl font-semibold text-zinc-200">
                      {degree}
                    </h4>
                    <p className="text-zinc-400 mt-1.5 sm:mt-2 leading-relaxed text-sm sm:text-base">
                      <span className="text-zinc-300 font-medium block mb-1">
                        {school}
                      </span>
                      {desc}
                    </p>
                    <span className="text-xs sm:text-sm font-medium text-zinc-500 mt-2 sm:mt-3 block tracking-wider uppercase">
                      {year}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </motion.main>
  );
}