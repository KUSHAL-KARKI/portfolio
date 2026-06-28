import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, staggerChild } from "@/animations/variants";

interface ProjectCardProps {
  title: string;
  slug: string;
  shortDescription: string;
  image: string;
  techStack: string[];
  year?: string;
}

export default function ProjectCard({
  title,
  slug,
  shortDescription,
  image,
  techStack,
  year,
}: ProjectCardProps) {
  return (
    <motion.div
      variants={staggerChild}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative flex flex-col rounded-2xl border border-zinc-800 overflow-hidden min-h-[280px] sm:min-h-[340px] md:min-h-[380px]"
    >
      {/* Background image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover z-0 transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
      />

      {/* Dark overlay — lifts on hover to reveal image */}
      <div className="absolute inset-0 z-10 bg-zinc-950/85 transition-all duration-500 group-hover:bg-zinc-950/20" />

      {/* Gradient at bottom — always visible so text stays readable during transition */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-950/95 via-zinc-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Year badge */}
      {year && (
        <div className="absolute top-0 left-0 z-20 bg-zinc-900/80 backdrop-blur-md px-3 py-1.5 text-zinc-300 font-medium text-xs sm:text-sm rounded-br-xl border-b border-r border-zinc-700/50">
          {year}
        </div>
      )}

      {/* Content — fades out on hover */}
      <Link
        href={`/project/${slug}`}
        className="relative z-20 flex flex-col grow h-full"
      >
        {/* Default state: centered content */}
        <div className="flex flex-col items-center justify-center text-center grow p-5 sm:p-7 md:p-8 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-2">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-5">
            {title}
          </h3>

          <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed mb-5 sm:mb-7 max-w-md mx-auto line-clamp-3">
            {shortDescription}
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold border border-zinc-700 rounded-full text-zinc-200 bg-zinc-800/90 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
            {techStack.length > 4 && (
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold border border-zinc-700 rounded-full text-zinc-400 bg-zinc-800/90">
                +{techStack.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Hover state: title + arrow pinned to bottom-left */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 flex items-end justify-between opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-1">
              {year}
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-white">{title}</h3>
          </div>
          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-black font-bold text-lg transition-transform duration-300 group-hover:scale-110">
            →
          </div>
        </div>
      </Link>
    </motion.div>
  );
}