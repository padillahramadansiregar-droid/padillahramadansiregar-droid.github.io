import React from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Code2 } from "lucide-react";
import { PORTFOLIO_PROJECT } from "@/lib/data";
import ProjectPreview from "@/components/ProjectPreview";

interface ProjectCardProps {
  variant?: "ringkas" | "lengkap";
  headingLevel?: "h2" | "h3";
}

export default function ProjectCard({ variant = "ringkas", headingLevel = "h2" }: ProjectCardProps) {
  const project = PORTFOLIO_PROJECT;
  const isShort = variant === "ringkas";
  const Heading = headingLevel;

  const preview = (
    <ProjectPreview
      src={project.screenshotSrc}
      alt={project.screenshotAlt}
      caption={project.screenshotCaption}
      urlLabel={project.urlLabel}
    />
  );

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/[0.12] bg-[#111111] transition-colors hover:border-[#F59E0B]/40">
      {isShort ? (
        <Link
          href="/proyek"
          aria-label={`Buka detail proyek ${project.title}`}
          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#F59E0B]"
        >
          {preview}
        </Link>
      ) : (
        preview
      )}

      <div className="space-y-5 border-t border-white/[0.08] p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-white/45">
          <span>
            {project.type} · {project.year}
          </span>
          <span className="inline-flex items-center rounded-md bg-[#F59E0B] px-2.5 py-1.5 text-[10.5px] font-semibold tracking-wide text-black">
            {project.status}
          </span>
        </div>

        <Heading className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          {project.title}
        </Heading>

        <p className="max-w-3xl text-sm leading-relaxed text-white/70 sm:text-[0.95rem]">{project.summary}</p>

        {!isShort && (
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {project.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-white">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#F59E0B]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <ul className="flex flex-wrap gap-1.5" aria-label="Teknologi yang digunakan">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-white/[0.08] bg-white/[0.05] px-2.5 py-1.5 font-mono text-[11.5px] text-white/75"
            >
              {tech}
            </li>
          ))}
        </ul>

        {!isShort && (
          <p className="text-xs leading-relaxed text-white/50">
            Situs yang sedang Anda buka ini adalah proyeknya. Kode sumbernya terbuka dan bisa dilihat langsung di GitHub.
          </p>
        )}

        <div className="flex flex-wrap items-center gap-3 border-t border-white/[0.08] pt-5">
          {isShort ? (
            <>
              <Link
                href="/proyek"
                className="inline-flex items-center gap-2 rounded-lg bg-[#F59E0B] px-4 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#D97706] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
              >
                <span>Lihat Detail Proyek</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Buka source code di GitHub (tab baru)"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.16] bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-[#F59E0B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
              >
                <Code2 className="h-4 w-4" aria-hidden="true" />
                <span>Source</span>
              </a>
            </>
          ) : (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Buka source code di GitHub (tab baru)"
              className="inline-flex items-center gap-2 rounded-lg bg-[#F59E0B] px-4 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#D97706] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
            >
              <Code2 className="h-4 w-4" aria-hidden="true" />
              <span>Lihat Source di GitHub</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
