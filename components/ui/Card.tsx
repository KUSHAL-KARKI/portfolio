"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface FeaturedProjectCardProps {
  title: string;
  shortDescription: string;
  year: string;
  status?: string;
  image: string;
  techStack: string[];
  slug: string;
  maxVisibleTech?: number;
}

export default function FeaturedProjectCard({
  title,
  shortDescription,
  year,
  status = "Completed",
  image,
  techStack,
  slug,
  maxVisibleTech = 3,
}: FeaturedProjectCardProps) {
  const visibleTech = techStack.slice(0, maxVisibleTech);
  const remaining = techStack.length - visibleTech.length;

  return (
    <Link href={`/project/${slug}`} className="block">
      <motion.div
        className="aspect-17/11 relative flex flex-col rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden hover:bg-zinc-900 hover:-translate-y-0.5 transition-all duration-300 group"
      >
        {/* ── Top section: screenshot (~65–70% of card height) ── */}
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover"
          />
          {/* Year label */}
          <div className="absolute top-5 right-5 sm:top-6 sm:right-6 text-[11px] font-medium uppercase tracking-widest text-white/80 bg-black/40 px-2.5 py-1 rounded-full border border-white/10">
            {year}
          </div>
        </div>

        {/* ── Bottom section ── */}
        <div className="flex flex-col md:flex-row md:items-stretch justify-between p-7 pt-5">
          {/* Left: title, shortDescription, tech badges */}
          <div className="flex flex-col gap-5 md:gap-6 min-w-0">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-white mb-1.5 sm:mb-2">
                {title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-500">{shortDescription.slice(0, 100)}...</p>
            </div>

            {techStack.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {visibleTech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-[11px] font-medium uppercase tracking-widest rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
                {remaining > 0 && (
                  <span className="px-3 py-1 text-[11px] font-medium uppercase tracking-wide rounded-full border border-zinc-800 bg-zinc-900 text-zinc-500">
                    +{remaining}
                  </span>
                )}
              </div>
            )}
          </div>
          <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-between gap-4 md:gap-0 shrink-0">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-zinc-900 border border-zinc-800 rounded-full px-3 py-1.5 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500/70" />
              {status}
            </span>

            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white whitespace-nowrap transition-transform duration-300 group-hover:-translate-y-1">
              View Project
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                ↗
              </span>
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}