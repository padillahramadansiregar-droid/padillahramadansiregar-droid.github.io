import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, GraduationCap, Target, CheckCircle2, ShieldCheck, Mail, BookOpen, MapPin } from "lucide-react";
import { PROFILE_DATA, EDUCATION_DATA } from "@/lib/data";
import ProfileAvatar from "@/components/profile/ProfileAvatar";
import CampusLogo from "@/components/profile/CampusLogo";
import EducationTimeline from "@/components/profile/EducationTimeline";

export const metadata: Metadata = {
  title: "Tentang Saya | Padillah Ramadan Siregar",
  description: "Profil, latar belakang akademik, tujuan karier, dan prinsip rekayasa web Padillah Ramadan Siregar - Mahasiswa Teknik Informatika Universitas Medan Area.",
  openGraph: {
    title: "Tentang Saya | Padillah Ramadan Siregar",
    description: "Profil dan latar belakang akademik Padillah Ramadan Siregar di Universitas Medan Area.",
  },
};

export default function TentangPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Page Header */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] pb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-[#F59E0B] uppercase tracking-wider mb-2">
          <span>Profil & Rekam Jejak</span>
          <span aria-hidden="true" className="text-white/30">/</span>
          <span>Tentang Saya</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Mengenal Padillah Ramadan Siregar
        </h1>
        <p className="mt-3 text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed">
          Menelusuri motivasi belajar, latar belakang akademik di Program Studi Teknik Informatika, serta prinsip kerja dalam rekayasa perangkat lunak web.
        </p>
      </section>

      {/* Main Narrative & Academic Grid */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            {/* Latar Belakang & Motivasi Belajar */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 pb-2">
                <ProfileAvatar size="md" showCardWrapper={false} />
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#F59E0B]">
                    Profil Mahasiswa & Calon Developer
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    {PROFILE_DATA.fullName}
                  </h2>
                  <p className="text-xs text-white/50 font-mono">
                    {PROFILE_DATA.contact.location} · {EDUCATION_DATA.major}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-white/80 leading-relaxed pt-2">
                {PROFILE_DATA.bioLong.map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Arah Fokus & Pendekatan Teknis */}
            <div className="space-y-4 pt-4 border-t border-white/[0.06]">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                <BookOpen className="w-5 h-5 text-[#F59E0B]" aria-hidden="true" />
                <span>Pendekatan Rekayasa Perangkat Lunak</span>
              </h2>
              <p className="text-sm text-white/80 leading-relaxed">
                Dalam mempelajari teknologi web, fokus utama saya tidak sebatas menghafal sintaks framework atau meniru template, melainkan memahami bagaimana alur data mengalir, bagaimana status komponen dikelola, serta bagaimana arsitektur sistem dapat tetap terstruktur saat kompleksitas aplikasi bertambah.
              </p>
            </div>

            {/* Tujuan Karier Profesional */}
            <div className="space-y-4 pt-4 border-t border-white/[0.06]">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                <Target className="w-5 h-5 text-[#F59E0B]" aria-hidden="true" />
                <span>Arah & Tujuan Karier</span>
              </h2>
              <p className="text-sm text-white/70">
                Langkah strategis yang sedang ditekuni untuk membangun fondasi profesional:
              </p>
              <ul className="space-y-3 pt-1">
                {PROFILE_DATA.careerGoals.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="leading-relaxed">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Komitmen Integritas Teknis */}
            <div className="rounded-xl border border-white/[0.08] bg-[#111111] p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span>Prinsip Integritas Portofolio</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Portofolio ini dibangun dengan prinsip kejujuran mutlak: tidak mengarang pengalaman kerja atau proyek fiktif, tidak mencantumkan sertifikasi yang belum diverifikasi, dan tidak memanipulasi status perancangan sistem menjadi aplikasi jadi.
              </p>
            </div>
          </div>

          {/* Right Column: Pendidikan Formal & Kontak Cepat */}
          <div className="lg:col-span-5 space-y-6">
            {/* Box Pendidikan Formal */}
            <section
              aria-labelledby="pendidikan-formal-heading"
              className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 sm:p-7 space-y-6"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-white/[0.06]">
                <CampusLogo
                  src={EDUCATION_DATA.logoSrc}
                  alt="Logo Universitas Medan Area"
                  size={44}
                />
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#F59E0B] uppercase tracking-wider">
                    <GraduationCap className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Pendidikan Tinggi</span>
                  </div>
                  <h2 id="pendidikan-formal-heading" className="text-lg font-bold text-white">
                    Pendidikan Formal
                  </h2>
                </div>
              </div>

              <EducationTimeline
                startYear={EDUCATION_DATA.startYearNumber}
                endYear={EDUCATION_DATA.expectedYearNumber}
                currentYear={EDUCATION_DATA.currentYear}
              />

              <dl className="grid grid-cols-2 gap-x-4 gap-y-4 pt-4 border-t border-white/[0.06]">
                <div className="col-span-2">
                  <dt className="text-xs text-white/40 mb-0.5">Perguruan Tinggi</dt>
                  <dd className="text-base font-semibold text-white">{EDUCATION_DATA.institution}</dd>
                </div>
                <div>
                  <dt className="text-xs text-white/40 mb-0.5">Fakultas</dt>
                  <dd className="text-sm text-white">{EDUCATION_DATA.faculty}</dd>
                </div>
                <div>
                  <dt className="text-xs text-white/40 mb-0.5">Program Studi</dt>
                  <dd className="text-sm font-semibold text-[#F59E0B]">{EDUCATION_DATA.major}</dd>
                </div>
                <div>
                  <dt className="text-xs text-white/40 mb-0.5">Mulai Kuliah</dt>
                  <dd className="text-sm font-mono text-white tabular-nums">{EDUCATION_DATA.startYear}</dd>
                </div>
                <div>
                  <dt className="text-xs text-white/40 mb-0.5">Estimasi Lulus</dt>
                  <dd className="text-sm font-mono text-white/80 tabular-nums">{EDUCATION_DATA.expectedYear}</dd>
                </div>
                <div>
                  <dt className="text-xs text-white/40 mb-0.5">Semester Saat Ini</dt>
                  <dd className="text-sm font-mono text-white tabular-nums">{EDUCATION_DATA.currentSemester}</dd>
                </div>
                <div>
                  <dt className="text-xs text-white/40 mb-0.5">Organisasi Kampus</dt>
                  <dd className="text-sm text-white/60">{EDUCATION_DATA.organization}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-xs text-white/40 mb-0.5">Lokasi</dt>
                  <dd className="text-sm text-white/80">
                    <p>{EDUCATION_DATA.campusAddress}</p>
                    <a
                      href={EDUCATION_DATA.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Buka lokasi ${EDUCATION_DATA.institution} di Google Maps (tab baru)`}
                      className="mt-1.5 inline-flex items-center gap-1.5 rounded-sm text-xs font-semibold text-[#F59E0B] hover:text-[#D97706] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
                    >
                      <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Buka di Google Maps</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="pt-4 border-t border-white/[0.06] space-y-3">
                <h3 className="flex items-center gap-1.5 text-[11px] font-mono text-[#F59E0B] uppercase tracking-wider">
                  <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Mata Kuliah Relevan</span>
                </h3>
                <ul className="flex flex-wrap gap-1.5">
                  {EDUCATION_DATA.relevantCourses.map((course) => (
                    <li
                      key={course}
                      className="rounded border border-white/[0.06] bg-white/[0.04] px-2 py-1 text-[11px] font-mono text-white/80"
                    >
                      {course}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Catatan Validasi Status */}
              <div className="rounded-lg bg-black/40 border border-white/[0.06] p-3.5 text-xs text-white/60 space-y-1">
                <p className="font-medium text-white/80 text-[11px] uppercase tracking-wider">
                  Catatan Status Perkuliahan:
                </p>
                <p className="leading-relaxed text-[11px]">
                  {EDUCATION_DATA.statusNote} Data semester diperbarui manual setiap pergantian semester.
                </p>
              </div>
            </section>

            {/* Quick Contact Card */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 space-y-4">
              <h3 className="text-sm font-semibold text-white">
                Buka Komunikasi Langsung
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Tersedia untuk pertanyaan seputar perkuliahan, diskusi kode pemrograman, maupun peluang kerja sama.
              </p>
              <Link
                href="/kontak"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#F59E0B] px-4 py-2.5 text-xs font-semibold text-black hover:bg-[#D97706] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Buka Halaman Kontak</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
