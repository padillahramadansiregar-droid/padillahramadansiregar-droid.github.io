import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, FolderGit2, AlertCircle, Inbox, BookMarked } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Proyek & Studi Kasus AmberLens | Padillah Ramadan Siregar",
  description: "Dokumentasi dan studi kasus perancangan sistem AmberLens: platform micro-tasking, live streaming dinamis, koin internal, dan donasi Text-to-Speech.",
  openGraph: {
    title: "Proyek & Studi Kasus AmberLens | Padillah Ramadan Siregar",
    description: "Dokumentasi perancangan sistem web mandiri AmberLens oleh Padillah Ramadan Siregar.",
  },
};

export default function ProyekPage() {
  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Page Header */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] pb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-[#F59E0B] uppercase tracking-wider mb-2">
          <span>Portofolio & Rekayasa</span>
          <span aria-hidden="true" className="text-white/30">/</span>
          <span>Proyek</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Daftar Proyek & Perancangan Sistem
        </h1>
        <p className="mt-3 text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed">
          Dokumentasi studi kasus perancangan aplikasi web mandiri. Disajikan dengan keterbukaan penuh terhadap tahapan siklus hidup rekayasa perangkat lunak (SDLC) yang sebenarnya.
        </p>

        {/* Development Philosophy Disclaimer */}
        <div className="mt-6 rounded-xl border border-white/[0.08] bg-[#111111] p-4 text-xs text-white/70 flex items-start gap-3 max-w-3xl">
          <AlertCircle className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" aria-hidden="true" />
          <p className="leading-relaxed">
            <strong className="text-white font-medium">Standar Kejujuran Proyek:</strong> Seluruh inisiatif yang ditampilkan memuat status riil. Tidak ada tombol &quot;Live Demo&quot; fiktif atau repositori kosong yang disamarkan sebagai aplikasi jadi. Setiap fitur yang berstatus perencanaan dinyatakan secara gamblang.
          </p>
        </div>
      </section>

      {/* Primary Project Case Study: AmberLens */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-2 text-xs font-mono text-white/70">
            <FolderGit2 className="w-4 h-4 text-[#F59E0B]" aria-hidden="true" />
            <span>Studi Kasus 01 · Proyek Aktif</span>
          </div>
          <span className="text-xs font-mono text-[#F59E0B]">Tahap Perencanaan & Dokumentasi</span>
        </div>

        {/* Full Detailed Case Study Card */}
        <ProjectCard isDetailed={true} />
      </section>

      {/* Empty State for Additional Projects */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-dashed border-white/[0.12] bg-[#111111]/40 p-8 sm:p-12 text-center space-y-3">
          <div className="mx-auto w-12 h-12 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/50">
            <Inbox className="w-5 h-5" aria-hidden="true" />
          </div>
          <h3 className="text-base font-semibold text-white">
            Proyek Lain Belum Dipublikasikan
          </h3>
          <p className="text-xs sm:text-sm text-white/60 max-w-md mx-auto leading-relaxed">
            Sesuai komitmen integritas, hanya inisiatif yang memiliki dokumentasi jelas atau implementasi nyata yang disajikan di portofolio ini. Repositori atau karya lain akan diperbarui setelah melalui proses verifikasi data mandiri.
          </p>
          <div className="pt-2">
            <Link
              href="/kontak"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F59E0B] hover:text-[#D97706] transition-colors"
            >
              <span>Ingin Mendiskusikan Rencana Proyek? Hubungi Saya</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
