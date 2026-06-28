// app/project/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}
export default async function ProjectDetail({ params }: ProjectPageProps) {
  const resolvedParams = await params;

  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen flex flex-col items-center px-6 md:px-16 py-24">
      <div className="w-full max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/project"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-zinc-500 hover:text-white transition-colors mb-12 md:mb-20"
        >
          <span>←</span> Back to Projects
        </Link>

        {/* Header Section */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
            {project.shortDescription}
          </p>
        </header>

        {/* Hero Image */}
        <div className="relative w-full aspect-video md:aspect-21/9 rounded-xl overflow-hidden mb-16 border border-zinc-800/50 bg-zinc-900 flex items-center justify-center">
          {project.image ? (
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
          ) : (
            <span className="text-zinc-600 font-medium tracking-widest uppercase">
              No Image Available
            </span>
          )}
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-16">
          {/* Left Column: Deep Dive Content */}
          <div className="flex flex-col gap-6 text-lg text-zinc-300 leading-relaxed">
            <h2 className="text-2xl font-bold text-white mb-2">The Process</h2>
            {project.content?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Right Column: Metadata & Links */}
          <div className="flex flex-col gap-10">
            {/* Tech Stack */}
            <div>
              <h3 className="text-sm font-semibold tracking-widest uppercase text-zinc-500 mb-4">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-medium border border-zinc-800 rounded-lg text-zinc-300 bg-zinc-900/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-sm font-semibold tracking-widest uppercase text-zinc-500 mb-4">
                Live Links
              </h3>
              <div className="flex flex-col gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg border border-zinc-800 hover:bg-zinc-800 hover:text-white transition-all text-zinc-400 font-medium"
                  >
                    <FaGithub className="text-xl" /> View Source Code
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white text-black hover:bg-zinc-200 transition-all font-semibold"
                  >
                    <FaExternalLinkAlt className="text-lg" /> Visit Live Site
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
