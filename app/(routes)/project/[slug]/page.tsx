// app/project/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}
export default async function ProjectDetail({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const metaItems = [
    { label: "Role", value: project.role },
    { label: "Team", value: project.team },
    { label: "Timeline", value: project.duration },
    { label: "Year", value: project.year },
  ].filter((item) => Boolean(item.value));

  return (
    <main className="w-full min-h-screen flex flex-col items-center px-6 md:px-16 py-24 text-white">
      <div className="w-full max-w-4xl mx-auto">
        {/* ── Back ── */}
        <Link
          href="/project"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-zinc-500 hover:text-white transition-colors mb-10"
        >
          ← Back
        </Link>

        {/* ── Project Header: Title / Description / Links ── */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-2 lg:items-center justify-between mb-10">
          {/* ── Header ── */}
          <div className="mb-10 gap-4 flex flex-col">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2 leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 mb-6 max-w-2xl">
              {project.shortDescription}
            </p>

            {/* ── Meta Row: Role / Team / Timeline / Year ── */}
            {metaItems.length > 0 && (
              <div className="flex flex-wrap gap-x-6 sm:gap-x-10 gap-y-4">
                {metaItems.map((item) => (
                  <div key={item.label}>
                    <span className="text-zinc-600 uppercase tracking-widest text-xs block mb-1">
                      {item.label}
                    </span>
                    <span className="text-zinc-200 font-medium text-sm">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View source code for ${project.title} on GitHub (opens in new tab)`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-800 text-sm font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
                >
                  <FaGithub className="text-base shrink-0" /> GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${project.title} (opens in new tab)`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors"
                >
                  <FaExternalLinkAlt className="text-sm shrink-0" /> Live Demo
                </a>
              )}
            </div>
          </div>

          {/* ── Hero Screenshot (large screens only) ── */}
          <div className="hidden lg:block relative shrink-0 w-100 h-52 rounded-lg overflow-hidden">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <span className="text-zinc-600 font-medium tracking-widest uppercase text-sm">
                  No Image Available
                </span>
              </div>
            )}
          </div>
        </div>

        {/* ── Overview ── */}
        {project.overview && (
          <div className="mb-14">
            <SectionLabel>Overview</SectionLabel>
            <p className="text-lg text-zinc-300 leading-relaxed">
              {project.overview}
            </p>
          </div>
        )}

        {/* ── Tech Stack ── */}
        <div className="mb-14">
          <SectionLabel>Tech Stack</SectionLabel>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="px-3 py-1.5 text-xs font-medium border border-zinc-800 rounded-lg text-zinc-300 bg-zinc-900"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ── Project Gallery: large / small-small rhythm ── */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-10">
            <SectionLabel>Project Gallery</SectionLabel>
            <GalleryGrid images={project.gallery} title={project.title} />
          </div>
        )}
      </div>
    </main>
  );
}

/* ── Gallery: every group of 3 images renders as 1 large + 2 small ──
   Falls back gracefully for counts that aren't multiples of 3. */
function GalleryGrid({ images, title }: { images: string[]; title: string }) {
  const groups: string[][] = [];
  for (let i = 0; i < images.length; i += 3) {
    groups.push(images.slice(i, i + 3));
  }

  return (
    <div className="flex flex-col gap-4">
      {groups.map((group, gi) => (
        <div key={gi} className="flex flex-col gap-4">
          {/* Large image */}
          <GalleryImage
            src={group[0]}
            alt={`${title} screenshot ${gi * 3 + 1}`}
            className="aspect-[16/9]"
          />
          {/* Small pair, if present */}
          {(group[1] || group[2]) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {group[1] && (
                <GalleryImage
                  src={group[1]}
                  alt={`${title} screenshot ${gi * 3 + 2}`}
                  className="aspect-video"
                />
              )}
              {group[2] && (
                <GalleryImage
                  src={group[2]}
                  alt={`${title} screenshot ${gi * 3 + 3}`}
                  className="aspect-video"
                />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function GalleryImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>
  );
}

/* ── Section label with flanking line ── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 whitespace-nowrap">
        {children}
      </span>
      <span className="block h-px flex-1 bg-zinc-800" />
    </div>
  );
}