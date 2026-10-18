import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, GraduationCap, FolderGit2, Mail, MapPin } from "lucide-react";
import { PROFILE_DATA, EDUCATION_DATA, HOME_TECH_HIGHLIGHTS } from "@/lib/data";
import ProjectShowcase from "@/components/projects/ProjectShowcase";
import ProfileAvatar from "@/components/profile/ProfileAvatar";
import TechTile from "@/components/skills/TechTile";
import CampusLogo from "@/components/profile/CampusLogo";
import Reveal from "@/components/layout/Reveal";
import EducationTimeline from "@/components/profile/EducationTimeline";

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-20 border-b border-white/[0.08] pb-16 lg:pb-24 bg-grid-pattern">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Typographic Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Unboxed Metadata Header */}
              <div className="enter" style={{ "--d": "0ms" } as React.CSSProperties}>
                <div className="flex items-center gap-2 text-xs font-mono text-[#F59E0B]">
                  <span className="font-semibold">{PROFILE_DATA.roleTitle}</span>
                  <span aria-hidden="true" className="text-white/30">/</span>
                  <span className="text-white/70">Teknik Informatika UMA</span>
                </div>
              </div>

              {/* Display Headline */}
              <div className="enter" style={{ "--d": "90ms" } as React.CSSProperties}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                  {PROFILE_DATA.fullName}
                </h1>
              </div>

              {/* Tagline & Value Prop */}
              <div className="enter" style={{ "--d": "180ms" } as React.CSSProperties}>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl">
                  {PROFILE_DATA.tagline}
                </p>

                <p className="text-sm text-white/70 leading-relaxed max-w-2xl">
                  {PROFILE_DATA.bioShort}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="enter" style={{ "--d": "270ms" } as React.CSSProperties}>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href="/proyek"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#F59E0B] px-5 py-2.5 text-xs sm:text-sm font-semibold text-black hover:bg-[#D97706] transition-colors focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
                  >
                    <span>Lihat Proyek Saya</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </Link>

                  <Link
                    href="/tentang"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/[0.12] bg-white/[0.03] px-5 py-2.5 text-xs sm:text-sm font-medium text-white hover:bg-white/[0.08] hover:border-white/[0.2] transition-colors"
                  >
                    <span>Tentang Saya & Pendidikan</span>
                  </Link>

                  <Link
                    href="/kontak"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/[0.12] bg-transparent px-5 py-2.5 text-xs sm:text-sm font-medium text-white/80 hover:text-white hover:border-white/[0.2] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#F59E0B]" aria-hidden="true" />
                    <span>Kontak Langsung</span>
                  </Link>
                </div>
              </div>

              {/* Factual Academic Metadata */}
              <div className="enter" style={{ "--d": "360ms" } as React.CSSProperties}>
                <div className="pt-6 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className="text-white/40 block text-[11px] mb-0.5">Institusi</span>
                    <span className="text-white font-medium">{EDUCATION_DATA.institution}</span>
                  </div>
                  <div>
                    <span className="text-white/40 block text-[11px] mb-0.5">Program Studi</span>
                    <span className="text-white font-medium">{EDUCATION_DATA.major}</span>
                  </div>
                  <div>
                    <span className="text-white/40 block text-[11px] mb-0.5">Fokus Studi</span>
                    <span className="text-white font-medium">Rekayasa Web & Sistem</span>
                  </div>
                </div>
              </div>
</div>

            {/* Right Column: Profile Avatar with real asset support / monogram fallback */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="enter" style={{ "--d": "200ms" } as React.CSSProperties}>
                <ProfileAvatar size="lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Sorotan Proyek (Portofolio Personal) */}
      <section
        aria-labelledby="sorotan-proyek-heading"
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#F59E0B] uppercase tracking-wider mb-2">
                <FolderGit2 className="w-4 h-4" aria-hidden="true" />
                <span>Proyek</span>
              </div>
              <h2
                id="sorotan-proyek-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-white"
              >
                Sorotan Proyek Pribadi
              </h2>
              <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-xl">
                Satu proyek yang bisa Anda lihat langsung: situs portofolio ini sendiri, lengkap dengan kode sumbernya.
              </p>
            </div>

            <Link
              href="/proyek"
              className="inline-flex items-center gap-1.5 rounded-sm text-xs font-semibold text-[#F59E0B] hover:text-[#D97706] transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
            >
              <span>Lihat Detail Proyek</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ProjectShowcase variant="ringkas" headingLevel="h3" />
        </Reveal>
      </section>

      {/* Section: Ringkasan Pendidikan Formal */}
      <section
        aria-labelledby="pendidikan-heading"
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <Reveal>
          <div className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#F59E0B] uppercase tracking-wider mb-2">
                  <GraduationCap className="w-4 h-4" aria-hidden="true" />
                  <span>Pendidikan Tinggi</span>
                </div>
                <h2
                  id="pendidikan-heading"
                  className="text-xl sm:text-2xl font-bold tracking-tight text-white"
                >
                  Pendidikan Formal
                </h2>
              </div>
              <span className="self-start rounded-full border border-[#F59E0B]/50 px-3 py-1 text-[11px] font-mono text-[#F59E0B]">
                Mahasiswa aktif · Semester {EDUCATION_DATA.currentSemester}
              </span>
            </div>

            <div className="mt-8">
              <EducationTimeline
                startYear={EDUCATION_DATA.startYearNumber}
                endYear={EDUCATION_DATA.expectedYearNumber}
                currentYear={EDUCATION_DATA.currentYear}
              />
            </div>

            <div className="mt-6 pt-6 border-t border-white/[0.06] grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <CampusLogo
                  src={EDUCATION_DATA.logoSrc}
                  alt="Logo Universitas Medan Area"
                  size={40}
                />
                <div className="space-y-1">
                  <span className="text-xs text-white/40 block">Perguruan Tinggi</span>
                  <p className="text-sm font-semibold text-white">{EDUCATION_DATA.institution}</p>
                  <p className="text-xs text-white/60">{EDUCATION_DATA.faculty}</p>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-white/40 block">Program Studi</span>
                <p className="text-sm font-semibold text-[#F59E0B]">{EDUCATION_DATA.major}</p>
                <a
                  href={EDUCATION_DATA.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Lihat lokasi ${EDUCATION_DATA.institution} di Google Maps (tab baru)`}
                  className="inline-flex items-center gap-1.5 rounded-sm text-xs text-white/60 hover:text-[#F59E0B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
                >
                  <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{EDUCATION_DATA.location}</span>
                </a>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-white/40 block">Masa Perkuliahan</span>
                <p className="text-sm font-mono text-white tabular-nums">
                  {EDUCATION_DATA.startYear} sampai {EDUCATION_DATA.expectedYearNumber}
                </p>
                <p className="text-xs text-white/50">{EDUCATION_DATA.expectedYear}</p>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/tentang"
                className="inline-flex items-center gap-1.5 rounded-sm text-xs font-semibold text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
              >
                <span>Pelajari Profil & Rekam Jejak</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Section: Ringkasan Keahlian */}
      <section
        aria-labelledby="ringkasan-keahlian-heading"
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <Reveal>
          <div className="mb-8">
            <p className="text-xs font-mono text-[#F59E0B] tracking-wider mb-2">
              {"// TECH STACK"}
            </p>
            <h2
              id="ringkasan-keahlian-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-white"
            >
              Teknologi yang Saya Eksplorasi
            </h2>
            <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-xl">
              Berbagai bahasa pemrograman, framework, dan tools yang saya pelajari dalam perjalanan akademik dan pengembangan diri.
            </p>
          </div>
        </Reveal>

        {/* Ringkasan 8 teknologi (data dari inventaris pusat di lib/data.ts) */}
        <Reveal as="ul" group className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {HOME_TECH_HIGHLIGHTS.map((item, i) => (
            <TechTile key={item.name} item={item} index={i} />
          ))}
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8">
            <Link
              href="/keahlian"
              className="inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-[#F59E0B] hover:text-[#D97706] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <span>Jelajahi Semua Keahlian</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Section: CTA Kontak Langsung */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-2xl border border-white/[0.1] bg-gradient-to-r from-[#111111] via-[#141414] to-[#111111] p-8 sm:p-10 text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Tertarik Membuka Diskusi Teknis atau Kolaborasi?
            </h2>
            <p className="text-sm text-white/70 max-w-xl mx-auto leading-relaxed">
              Saya terbuka untuk komunikasi profesional seputar pengembangan proyek web, peluang magang, maupun pertukaran wawasan rekayasa sistem.
            </p>
            <div className="pt-2 flex flex-wrap justify-center items-center gap-3">
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 rounded-lg bg-[#F59E0B] px-6 py-3 text-xs sm:text-sm font-semibold text-black hover:bg-[#D97706] transition-colors"
              >
                <span>Hubungi Melalui Email & Profil</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
