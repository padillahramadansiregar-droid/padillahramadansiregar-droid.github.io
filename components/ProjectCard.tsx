import React from "react";
import { 
  Clock, 
  FileText, 
  CheckCircle2, 
  ShieldAlert, 
  Layers, 
  HelpCircle, 
  Cpu, 
  ArrowRight,
  ListOrdered
} from "lucide-react";
import { AMBERLENS_PROJECT } from "@/lib/data";

interface ProjectCardProps {
  isDetailed?: boolean;
}

export default function ProjectCard({ isDetailed = false }: ProjectCardProps) {
  const project = AMBERLENS_PROJECT;

  return (
    <article className="rounded-2xl border border-white/[0.1] bg-[#111111] p-6 sm:p-8 lg:p-10 transition-all hover:border-white/[0.18] space-y-8">
      {/* Header: Title & Explicit Planning Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-1.5">
            <span>{project.type}</span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span>Konsep Arsitektur Web</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {project.title}
          </h2>
        </div>

        {/* Status Badge - Text + Icon, explicitly not just color */}
        <div 
          className="inline-flex items-center gap-2 rounded-lg border border-[#F59E0B]/40 bg-[#F59E0B]/10 px-4 py-2 text-xs font-semibold text-[#F59E0B] shrink-0 self-start sm:self-auto"
          role="status"
          aria-label={`Status Proyek: ${project.status}`}
        >
          <Clock className="w-4 h-4 text-[#F59E0B] shrink-0" aria-hidden="true" />
          <span>Status: {project.status}</span>
        </div>
      </div>

      {/* Ringkasan Konsep Resmi */}
      <div className="space-y-4">
        <p className="text-sm sm:text-base text-white/90 leading-relaxed">
          &ldquo;AmberLens adalah proyek pribadi yang sedang saya rancang sebagai platform web dengan konsep micro-tasking, live streaming, koin, dan donasi berbasis Text-to-Speech. Saat ini fokus saya berada pada penyusunan dokumentasi, struktur halaman, daftar fitur, dan alur sistem. Fitur-fitur tersebut masih dalam tahap perencanaan dan belum diimplementasikan.&rdquo;
        </p>

        {/* Notice of Transparency */}
        <div className="rounded-xl border border-white/[0.08] bg-black/40 p-4 text-xs text-white/70 flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" aria-hidden="true" />
          <p className="leading-relaxed">
            <strong className="text-white font-medium">Transparansi Tahap Proyek:</strong> {project.statusDetail}
          </p>
        </div>
      </div>

      {/* Structured Sections for Detailed Case Study */}
      {isDetailed && (
        <div className="space-y-8 pt-4 border-t border-white/[0.08]">
          {/* 1. Masalah & Konsep Solusi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl bg-black/30 border border-white/[0.06] p-5 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                <HelpCircle className="w-4 h-4 text-[#F59E0B]" aria-hidden="true" />
                <span>Masalah & Latar Belakang</span>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="rounded-xl bg-black/30 border border-white/[0.06] p-5 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                <Cpu className="w-4 h-4 text-[#F59E0B]" aria-hidden="true" />
                <span>Konsep Solusi</span>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                {project.solutionConcept}
              </p>
            </div>
          </div>

          {/* 2. Ruang Lingkup yang Direncanakan */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
              <Layers className="w-4 h-4 text-[#F59E0B]" aria-hidden="true" />
              <span>Ruang Lingkup Sistem yang Direncanakan (Scope)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.plannedScope.map((scope, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-white/80 p-3 rounded-lg bg-black/20 border border-white/[0.04]">
                  <span className="font-mono text-[#F59E0B] font-semibold">{String(idx + 1).padStart(2, "0")}.</span>
                  <span className="leading-relaxed">{scope}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Pertimbangan Desain & Teknis */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
              <FileText className="w-4 h-4 text-[#F59E0B]" aria-hidden="true" />
              <span>Pertimbangan Desain & Teknis</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-white/70">
              {project.designAndTechConsiderations.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-black/20">
                  <span className="text-[#F59E0B] font-mono select-none" aria-hidden="true">•</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Aktivitas yang Selesai vs Belum Diimplementasikan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Hal yang Sudah Dikerjakan */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span>Hal yang Sudah Selesai Dikerjakan</span>
              </div>
              <ul className="space-y-2.5 text-xs text-white/80">
                {project.completedTasks.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-mono select-none font-bold" aria-hidden="true">✓</span>
                    <span className="leading-relaxed">{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hal yang Belum Diimplementasikan */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                <Clock className="w-4 h-4 text-white/40" aria-hidden="true" />
                <span>Hal yang Belum Diimplementasikan</span>
              </div>
              <ul className="space-y-2.5 text-xs text-white/60">
                {project.pendingImplementation.map((pending, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-white/40 font-mono select-none" aria-hidden="true">○</span>
                    <span className="leading-relaxed">{pending}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 5. Langkah Berikutnya */}
          <div className="pt-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white mb-3">
              <ListOrdered className="w-4 h-4 text-[#F59E0B]" aria-hidden="true" />
              <span>Rencana Langkah Berikutnya (Roadmap)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.nextSteps.map((step, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-black/30 border border-white/[0.06] text-xs text-white/70 flex items-start gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B] shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Compact Preview Grid when not in detailed case study view */}
      {!isDetailed && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/[0.08]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
              <FileText className="w-3.5 h-3.5 text-[#F59E0B]" aria-hidden="true" />
              <span>Ruang Lingkup Fitur</span>
            </div>
            <ul className="space-y-2 text-xs text-white/70">
              {project.plannedScope.slice(0, 4).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#F59E0B] font-mono select-none" aria-hidden="true">•</span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              <span>Aktivitas Dokumentasi Berjalan</span>
            </div>
            <ul className="space-y-2 text-xs text-white/70">
              {project.completedTasks.map((act, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-mono select-none" aria-hidden="true">✓</span>
                  <span className="leading-relaxed">{act}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Card Footer: Transparent notice with zero fake buttons */}
      <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/50">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-white/40 shrink-0" aria-hidden="true" />
          <span>Tidak ada tombol demo atau link repository fiktif untuk tahap perencanaan ini.</span>
        </div>
        <span className="text-white/40 font-mono text-[11px] shrink-0">
          Status: Tahap Perencanaan & Dokumentasi
        </span>
      </div>
    </article>
  );
}
