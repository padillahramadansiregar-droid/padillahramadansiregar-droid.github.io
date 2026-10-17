import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, AlertCircle, FolderGit2 } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Proyek: Portofolio Personal",
  description:
    "Proyek yang sedang dikerjakan Padillah Ramadan Siregar: situs portofolio personal berbasis Next.js, React, TypeScript, dan Tailwind CSS, lengkap dengan kode sumber terbuka.",
  openGraph: {
    title: "Proyek: Portofolio Personal | Padillah Ramadan Siregar",
    description:
      "Situs portofolio personal berbasis Next.js, React, TypeScript, dan Tailwind CSS dengan kode sumber terbuka.",
  },
};

const BUILD_NOTES = [
  {
    title: "Struktur halaman",
    text: "Lima halaman utama (Beranda, Tentang Saya, Keahlian, Proyek, Kontak) ditambah satu rute formulir kirim email.",
  },
  {
    title: "Teknologi",
    text: "Next.js dengan App Router, React, TypeScript, dan Tailwind CSS.",
  },
  {
    title: "Konten terpusat",
    text: "Teks profil, pendidikan, dan keahlian disimpan di satu berkas data, sehingga mudah diperbarui tanpa mengubah tampilan.",
  },
  {
    title: "Publikasi",
    text: "Kode tersimpan di repository GitHub publik dan dipublikasikan ke GitHub Pages melalui GitHub Actions.",
  },
];

export default function ProyekPage() {
  return (
    <div className="space-y-12 py-12 sm:py-16">
      {/* Header halaman */}
      <section className="mx-auto max-w-6xl border-b border-white/[0.08] px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:gap-10">
          <div>
            <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#F59E0B]">
              <span>Karya & Pembelajaran</span>
              <span aria-hidden="true" className="text-white/30">/</span>
              <span>Proyek</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Proyek <span className="text-[#F59E0B]">yang sedang</span> saya kerjakan
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Proyek dan studi kasus yang sedang atau telah saya kerjakan dalam proses belajar pengembangan web.
            </p>
          </div>

          <div
            className="flex overflow-hidden rounded-xl border border-white/[0.16] bg-[#111111] md:justify-self-end"
            aria-label="Jumlah proyek"
          >
            <div className="px-5 py-3">
              <p className="text-2xl font-bold tabular-nums text-white">1</p>
              <p className="mt-1.5 font-mono text-[10.5px] uppercase tracking-wider text-white/45">
                Proyek terdaftar
              </p>
            </div>
          </div>
        </div>

        <div className="mt-7 flex max-w-3xl items-start gap-3 rounded-xl border border-white/[0.08] bg-[#111111] p-4 text-xs leading-relaxed text-white/70">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#F59E0B]" aria-hidden="true" />
          <p>
            <strong className="font-medium text-white">Standar Kejujuran Proyek:</strong> proyek yang ditampilkan di sini adalah situs yang sedang Anda buka, lengkap dengan kode sumber publik. Tidak ada tombol demo fiktif, repositori kosong, atau metrik yang dikarang.
          </p>
        </div>
      </section>

      {/* Proyek utama */}
      <section
        aria-labelledby="proyek-utama-heading"
        className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center gap-2 border-b border-white/[0.06] pb-3 font-mono text-xs text-white/70">
          <FolderGit2 className="h-4 w-4 text-[#F59E0B]" aria-hidden="true" />
          <span>Proyek 01 · Sedang Dikembangkan</span>
        </div>
        <h2 id="proyek-utama-heading" className="sr-only">
          Proyek utama: Portofolio Personal
        </h2>
        <ProjectCard variant="lengkap" headingLevel="h3" />
      </section>

      {/* Cara situs ini dibangun */}
      <section
        aria-labelledby="cara-dibangun-heading"
        className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6 lg:px-8"
      >
        <div>
          <div className="mb-2 font-mono text-xs uppercase tracking-wider text-[#F59E0B]">Di balik layar</div>
          <h2 id="cara-dibangun-heading" className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            Cara Situs Ini Dibangun
          </h2>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {BUILD_NOTES.map((note) => (
            <li key={note.title} className="rounded-xl border border-white/[0.08] bg-[#111111] p-5">
              <h3 className="text-sm font-semibold text-white">{note.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/60">{note.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Proyek berikutnya */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 rounded-2xl border border-dashed border-white/[0.16] p-6 sm:p-7">
          <div>
            <h2 className="text-base font-semibold text-white">Proyek berikutnya akan ditambahkan di sini</h2>
            <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-white/50">
              Hanya proyek yang sudah punya dokumentasi atau hasil nyata yang ditampilkan.
            </p>
          </div>
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 rounded-sm py-2.5 text-sm font-semibold text-[#F59E0B] transition-colors hover:text-[#D97706] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
          >
            <span>Ingin diskusi proyek? Hubungi saya</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
