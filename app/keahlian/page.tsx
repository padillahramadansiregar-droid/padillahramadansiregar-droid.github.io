import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Info, Compass, Sparkles } from "lucide-react";
import { MAIN_TECH_CATEGORIES, FUTURE_FOCUS_AREAS } from "@/lib/data";
import TechCategoryPanel from "@/components/skills/TechCategoryPanel";
import Reveal from "@/components/layout/Reveal";

export const metadata: Metadata = {
  title: "Keahlian dan Teknologi | Padillah Ramadan Siregar",
  description:
    "Inventaris teknologi yang dipelajari dan dieksplorasi oleh Padillah Ramadan Siregar dalam proses belajar dan pengembangan kemampuan rekayasa web.",
  openGraph: {
    title: "Keahlian dan Teknologi | Padillah Ramadan Siregar",
    description:
      "Inventaris teknologi yang dieksplorasi Padillah Ramadan Siregar - Mahasiswa Teknik Informatika Universitas Medan Area.",
  },
};

export default function KeahlianPage() {
  const totalTechnologies = MAIN_TECH_CATEGORIES.reduce(
    (sum, cat) => sum + cat.items.length,
    0
  );

  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Page Header (Spesifikasi B) */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] pb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-[#F59E0B] uppercase tracking-wider mb-2">
          <span>Eksplorasi & Inventarisasi</span>
          <span aria-hidden="true" className="text-white/30">/</span>
          <span>Keahlian</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Keahlian dan Teknologi
        </h1>

        <p className="mt-3 text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed">
          &ldquo;Teknologi yang saya eksplorasi dalam proses belajar dan pengembangan kemampuan.&rdquo;
        </p>

        {/* Catatan Transparansi Selalu Terlihat (Spesifikasi C) */}
        <div
          role="region"
          aria-label="Catatan Transparansi Inventaris Teknologi"
          className="mt-6 rounded-2xl border border-[#F59E0B]/30 bg-[#16130B] p-5 sm:p-6 text-xs sm:text-sm text-white/90 shadow-lg flex items-start gap-4 max-w-4xl"
        >
          <div className="p-2 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/30 shrink-0 text-[#F59E0B]">
            <Info className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="space-y-1.5 leading-relaxed">
            <span className="font-semibold text-[#F59E0B] block text-xs uppercase tracking-wider font-mono">
              Catatan Transparansi
            </span>
            <p className="text-white/85">
              Daftar ini adalah inventaris teknologi yang saya pelajari dan eksplorasi. Daftar ini bukan klaim penguasaan; status praktik dan pembelajaran per teknologi akan ditambahkan setelah saya mengonfirmasinya. Logo hanya menandai nama teknologi.
            </p>
          </div>
        </div>
      </section>

      {/* Main Technology Inventory (Spesifikasi F & G) */}
      <section
        aria-label="Inventaris teknologi"
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10"
      >
        <Reveal>
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-xs font-mono text-white/50">
            <span>Total Inventaris: {totalTechnologies} Teknologi</span>
            <span>5 Kategori Terstruktur</span>
          </div>
        </Reveal>

        {/* 5 Category Panels */}
        <div className="space-y-8">
          {MAIN_TECH_CATEGORIES.map((category) => (
            <Reveal key={category.id}>
              <TechCategoryPanel category={category} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Bagian Terpisah: Ingin Dipelajari atau Diperdalam (Spesifikasi H) */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 sm:p-8 lg:p-10 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-white/[0.06]">
              <div className="p-2 rounded-lg bg-black/40 border border-white/[0.06] text-[#F59E0B]">
                <Compass className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Ingin Dipelajari atau Diperdalam
                </h2>
                <p className="text-xs text-white/50 mt-0.5">
                  Fokus eksplorasi dan pembelajaran berikutnya untuk peningkatan kualitas produk perangkat lunak.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-3xl">
              Bidang-bidang di bawah ini merupakan area studi terarah yang sedang saya telusuri konsepnya. Item-item ini disajikan secara terpisah sebagai arah peningkatan kapabilitas dan bukan klaim kemampuan yang telah dikuasai.
            </p>

            <Reveal as="ul" group className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 m-0 p-0">
              {FUTURE_FOCUS_AREAS.map((area, idx) => (
                <li
                  key={area.name}
                  className="reveal-item list-none flex flex-col justify-between p-5 rounded-xl border border-white/[0.08] bg-black/40 hover:border-[#F59E0B]/30 hover:bg-[#141414] transition-all duration-200"
                  style={{ "--i": idx } as React.CSSProperties}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-[#F59E0B]">
                        0{idx + 1}
                      </span>
                      <Sparkles className="w-3.5 h-3.5 text-white/30" aria-hidden="true" />
                    </div>
                    <h3 className="text-sm font-semibold text-white">
                      {area.name}
                    </h3>
                    <p className="text-xs text-white/60 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </li>
              ))}
            </Reveal>
          </div>
        </Reveal>
      </section>

      {/* Penutup Halaman & CTA (Spesifikasi K) */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-2xl border border-white/[0.1] bg-gradient-to-r from-[#111111] via-[#141414] to-[#111111] p-8 sm:p-10 text-center space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Lihat Bagaimana Konsep Ini Diterapkan
            </h2>
            <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto leading-relaxed">
              Lihat proyek yang sedang saya kerjakan: situs portofolio ini, dibangun dengan Next.js, TypeScript, dan Tailwind CSS.
            </p>
            <div className="pt-2">
              <Link
                href="/proyek"
                className="inline-flex items-center gap-2 rounded-lg bg-[#F59E0B] px-6 py-3 text-xs sm:text-sm font-semibold text-black hover:bg-[#D97706] transition-colors focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
              >
                <span>Lihat Proyek</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
