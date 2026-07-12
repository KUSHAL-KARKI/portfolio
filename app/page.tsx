"use client";

import Image from "next/image";
import profile1 from "@/public/images/profile/profile1.jpeg";
import profile2 from "@/public/images/profile/profile2.jpg";
import contactpic from "@/public/images/profile/contact2.jpg";
import projectpic from "@/public/images/profile/project2.jpg";
import socialLinks from "@/data/social";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerChild,
  fromBottom,
} from "@/animations/variants";
import { useFullPageScroll } from "@/hooks/useFullpageScroll";
const inView = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false, amount: 0.2 },
};

function Divider() {
  return (
    <motion.div
      variants={staggerChild}
      className="mt-3 mb-6 flex flex-col gap-2"
    >
      <motion.div
        variants={staggerChild}
        className="h-0.5 w-16 rounded-full bg-white"
      />
      <motion.div
        variants={staggerChild}
        className="h-0.5 w-16 rounded-full bg-white ml-10"
      />
    </motion.div>
  );
}

export default function Home() {
  const router = useRouter();
  const sectionIds = ["home", "about", "project", "contact"];
  useFullPageScroll(sectionIds);

  return (
    <main className="w-full flex flex-col items-center overflow-x-hidden">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="w-full min-h-screen  snap-start
    snap-always flex items-center justify-center px-6 sm:px-10 lg:px-16 py-24 lg:py-0"
      >
        <div className="w-full max-w-5xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20">
          <motion.div
            variants={staggerContainer(0.12, 0.05)}
            {...inView}
            className="flex-1 flex flex-col items-start"
          >
            <motion.span
              variants={staggerChild}
              className="text-xs sm:text-sm font-semibold tracking-[0.4em] uppercase text-zinc-500"
            >
              Kushal Karki
            </motion.span>

            <motion.h1
              variants={staggerChild}
              className="text-4xl sm:text-5xl lg:text-[4rem] font-bold leading-[1.1] tracking-tight mt-3"
            >
              Full Stack Software Engineer
            </motion.h1>

            <motion.p
              variants={staggerChild}
              className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-zinc-400"
            >
              Computer Engineering student and MERN Stack Developer focused on
              building modern, responsive, and scalable web applications.
            </motion.p>

            <motion.div
              variants={staggerChild}
              className="mt-8 flex flex-wrap gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 rounded-full bg-white font-semibold text-sm text-black transition-colors hover:bg-zinc-200"
              >
                Download Resume
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 rounded-full border border-zinc-700 font-semibold text-sm transition-colors hover:border-zinc-500 hover:bg-zinc-800/50"
                onClick={() => router.push("#contact")}
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right section */}
          <motion.div
            variants={staggerContainer(0.12, 0.4)}
            {...inView}
            className="shrink-0"
          >
            <motion.div
              variants={staggerChild}
              className="relative w-32.5 h-32.5 sm:w-40 sm:h-40 lg:w-65 lg:h-95 overflow-hidden rounded-full shadow-2xl"
            >
              <Image
                src={profile1}
                sizes="(max-width: 640px) 130px, (max-width: 1024px) 160px, 260px"
                alt="Kushal Karki"
                fill
                priority
                className="object-cover brightness-75 grayscale transition-all duration-700 hover:brightness-100 hover:grayscale-0 hover:scale-110"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────────────── */}
      <section
        id="about"
        className="w-full min-h-screen  snap-start
    snap-always flex items-center justify-center py-24 lg:py-0"
      >
        <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-0 lg:gap-20">
          {/* Image — full bleed on mobile/tablet, right column on desktop */}
          <motion.div
            variants={staggerContainer(0.12, 0.3)}
            {...inView}
            className="w-full lg:w-105 lg:shrink-0 relative aspect-video lg:aspect-square overflow-hidden mb-8 lg:mb-0 lg:order-2"
          >
            <motion.div
              variants={staggerChild}
              className="w-full h-full relative"
            >
              <Image
                src={profile2}
                sizes="(max-width: 1024px) 100vw, 420px"
                alt="Kushal Karki"
                fill
                priority
                className="object-cover lg:rounded-xl brightness-75 grayscale transition-all duration-500 hover:brightness-90 hover:grayscale-0"
              />
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={staggerContainer(0.12, 0.05)}
            {...inView}
            className="flex-1 flex flex-col items-start px-6 sm:px-10 lg:px-0 lg:order-1"
          >
            <motion.div variants={staggerChild}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                About Me
              </h2>
              <Divider />
            </motion.div>

            <motion.p
              variants={staggerChild}
              className="text-base sm:text-lg leading-relaxed text-zinc-400"
            >
              I am a Computer Engineering student and MERN Stack Developer
              passionate about building modern web applications. I enjoy
              learning new technologies, solving problems, and creating clean,
              user-friendly websites and applications.
            </motion.p>

            <motion.div variants={staggerChild}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-7 px-5 py-2.5 rounded-full border border-zinc-700 text-sm font-semibold hover:bg-zinc-800/50 transition-colors"
                onClick={() => router.push("/about")}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────────────────────────── */}
      <section
        id="project"
        className="w-full min-h-screen  snap-start
    snap-always flex items-center justify-center py-24 lg:py-0"
      >
        <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-0 lg:gap-20">
          {/* Image */}
          <motion.div
            variants={staggerContainer(0.12, 0.3)}
            {...inView}
            className="w-full lg:shrink-0 relative aspect-video lg:aspect-square lg:w-105 overflow-hidden mb-8 lg:mb-0 lg:order-2"
          >
            <motion.div
              variants={staggerChild}
              className="w-full h-full relative"
            >
              <Image
                src={projectpic}
                sizes="(max-width: 1024px) 100vw, 420px"
                alt="Projects"
                fill
                priority
                className="object-cover lg:rounded-xl brightness-75 grayscale transition-all duration-500 hover:brightness-100 hover:grayscale-0"
              />
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={staggerContainer(0.12, 0.05)}
            {...inView}
            className="flex-1 flex flex-col items-start px-6 sm:px-10 lg:px-0 lg:order-1"
          >
            <motion.div variants={staggerChild}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Projects
              </h2>
              <Divider />
            </motion.div>

            <motion.p
              variants={staggerChild}
              className="text-base sm:text-lg leading-relaxed text-zinc-400"
            >
              Here are some of my recent projects that showcase my skills in
              full-stack development.
            </motion.p>

            <motion.div variants={staggerChild}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-7 px-5 py-2.5 rounded-full border border-zinc-700 text-sm font-semibold hover:bg-zinc-700/40 transition-colors"
                onClick={() => router.push("/project")}
              >
                View All Projects
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="w-full min-h-screen  snap-start
    snap-always flex items-center justify-center py-24 lg:py-0"
      >
        <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-0 lg:gap-20">
          {/* Image */}
          <motion.div
            variants={staggerContainer(0.12, 0.3)}
            {...inView}
            className="w-full lg:shrink-0 relative aspect-video lg:aspect-square lg:w-105 overflow-hidden mb-8 lg:mb-0 lg:order-2"
          >
            <motion.div
              variants={staggerChild}
              className="w-full h-full relative"
            >
              <Image
                src={contactpic}
                sizes="(max-width: 1024px) 100vw, 420px"
                alt="Contact"
                fill
                priority
                className="object-cover lg:rounded-xl brightness-75 grayscale transition-all duration-500 hover:brightness-55 hover:grayscale-0"
              />
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={staggerContainer(0.12, 0.05)}
            {...inView}
            className="flex-1 flex flex-col items-start px-6 sm:px-10 lg:px-0 lg:order-1"
          >
            <motion.div variants={staggerChild}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Get In Touch
              </h2>
              <Divider />
            </motion.div>

            <motion.p
              variants={staggerChild}
              className="text-base sm:text-lg leading-relaxed text-zinc-400"
            >
              Interested in working together or discussing a project? Feel free
              to reach out.
            </motion.p>

            <motion.a
              variants={staggerChild}
              href="mailto:kushalkarki@gmail.com"
              className="mt-4 text-base sm:text-lg font-medium hover:text-zinc-300 transition-colors break-all"
            >
              {socialLinks[0].email}
            </motion.a>

            <motion.div
              variants={staggerChild}
              className="mt-8 flex justify-start gap-4"
            >
              {socialLinks.map(({ icon: Icon, label, link}) => (
                <motion.a
                  key={label}
                  href={link}
                  aria-label={label}
                  variants={fromBottom()}
                  whileHover={{ y: -6 }}
                  className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors duration-300"
                >
                  <Icon className="text-xl sm:text-2xl" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
