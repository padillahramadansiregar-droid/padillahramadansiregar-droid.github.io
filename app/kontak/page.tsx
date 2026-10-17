"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Mail, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  Instagram, 
  ExternalLink, 
  ShieldCheck, 
  Clock, 
  Send, 
  MessageCircle, 
  MapPin, 
  AlertTriangle 
} from "lucide-react";
import { PROFILE_DATA } from "@/lib/data";

export default function KontakPage() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const handleCopyEmail = async () => {
    setCopyError(false);
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(PROFILE_DATA.contact.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } else {
        // Fallback for environments where clipboard API is restricted
        const textArea = document.createElement("textarea");
        textArea.value = PROFILE_DATA.contact.email;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);
        if (successful) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        } else {
          setCopyError(true);
          setTimeout(() => setCopyError(false), 3000);
        }
      }
    } catch {
      setCopyError(true);
      setTimeout(() => setCopyError(false), 3000);
    }
  };

  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Page Header */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] pb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-[#F59E0B] uppercase tracking-wider mb-2">
          <span>Komunikasi & Kolaborasi</span>
          <span aria-hidden="true" className="text-white/30">/</span>
          <span>Kontak</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Hubungi Padillah Ramadan Siregar
        </h1>
        <p className="mt-3 text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed">
          Tersedia saluran komunikasi langsung melalui Email dan WhatsApp untuk berdiskusi seputar eksplorasi pemrograman web, proyek portofolio ini, maupun peluang kerja sama profesional.
        </p>
      </section>

      {/* Main Content Grid */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Communication Channels (Email & WhatsApp) */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Email Card */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-2.5 pb-4 border-b border-white/[0.06]">
                <Mail className="w-5 h-5 text-[#F59E0B]" aria-hidden="true" />
                <h2 className="text-lg font-bold text-white">
                  Jalur Email Resmi
                </h2>
              </div>

              <p className="text-sm text-white/70 leading-relaxed">
                Saluran pesan tertulis utama. Anda dapat menyalin alamat email atau membuka formulir pesan khusus untuk menyusun pesan Anda.
              </p>

              {/* Email Box & Dual Actions */}
              <div className="rounded-xl border border-white/[0.1] bg-black/50 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1 min-w-0">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-white/40 block">
                    Alamat Email Utama
                  </span>
                  <p className="text-base sm:text-lg font-mono font-medium text-white select-all break-all">
                    {PROFILE_DATA.contact.email}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {/* Action 1: Copy Email */}
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.12] bg-white/[0.05] px-3.5 py-2 text-xs font-medium text-white hover:bg-white/[0.1] hover:border-white/[0.2] transition-colors focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
                    aria-label="Salin alamat email ke papan klip"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#22C55E]" aria-hidden="true" />
                        <span className="text-[#22C55E]">Tersalin</span>
                      </>
                    ) : copyError ? (
                      <>
                        <AlertTriangle className="w-3.5 h-3.5 text-[#EF4444]" aria-hidden="true" />
                        <span className="text-[#EF4444]">Gagal Salin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-white/70" aria-hidden="true" />
                        <span>Salin Email</span>
                      </>
                    )}
                  </button>

                  {/* Action 2: Open Kirim Email Child Route */}
                  <Link
                    href="/kontak/kirim-email"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#F59E0B] px-3.5 py-2 text-xs font-semibold text-black hover:bg-[#D97706] transition-colors focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
                  >
                    <Send className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Kirim Email</span>
                  </Link>
                </div>
              </div>

              {/* Accessible live status */}
              <div aria-live="polite" className="sr-only">
                {copied && "Alamat email berhasil disalin ke papan klip."}
                {copyError && "Gagal menyalin alamat email otomatis. Silakan salin teks secara manual."}
              </div>
            </div>

            {/* 2. WhatsApp Card */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-2.5 pb-4 border-b border-white/[0.06]">
                <MessageCircle className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                <h2 className="text-lg font-bold text-white">
                  Jalur Chat WhatsApp
                </h2>
              </div>

              <p className="text-sm text-white/70 leading-relaxed">
                Untuk pertanyaan singkat atau komunikasi cepat, Anda dapat menghubungi langsung via WhatsApp resmi dengan pesan pembuka otomatis.
              </p>

              <div className="rounded-xl border border-white/[0.1] bg-black/50 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-white/40 block">
                    Nomor WhatsApp Resmi
                  </span>
                  <p className="text-base sm:text-lg font-mono font-medium text-white">
                    {PROFILE_DATA.contact.whatsapp}
                  </p>
                </div>

                <a
                  href={PROFILE_DATA.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-black transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Chat WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Transparency Notice */}
            <div className="rounded-xl border border-white/[0.06] bg-black/30 p-4 text-xs text-white/60 flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="leading-relaxed text-[11px]">
                <strong className="text-white/80">Kejujuran Saluran:</strong> Tidak ada bot otomatis atau form palsu. Pesan yang Anda kirimkan melalui formulir email atau WhatsApp diterima langsung oleh Padillah Ramadan Siregar.
              </p>
            </div>
          </div>

          {/* Right Column: Verified Profiles, Location & Etiquette */}
          <div className="lg:col-span-5 space-y-6">
            {/* Lokasi & Zona Waktu */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-white pb-3 border-b border-white/[0.06]">
                Lokasi & Waktu Operasional
              </h2>

              <div className="space-y-3 text-xs text-white/70">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-white font-medium block">{PROFILE_DATA.contact.location}</span>
                    <span className="text-[11px] text-white/40">Alamat domisili akademik di Sumatera Utara</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-white/[0.04]">
                  <Clock className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-white font-medium block">Zona Waktu: {PROFILE_DATA.contact.timezone}</span>
                    <span className="text-[11px] text-white/40">Waktu Indonesia Barat</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social / Professional Profiles Card */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-white pb-3 border-b border-white/[0.06]">
                Profil & Jejaring Profesional
              </h2>

              <div className="space-y-3">
                {/* GitHub */}
                <a
                  href={PROFILE_DATA.contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-white/[0.06] bg-black/30 hover:border-white/[0.18] hover:bg-white/[0.03] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold text-white">GitHub</p>
                      <p className="text-[11px] font-mono text-white/50">
                        padillahramadansiregar-droid
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-[#F59E0B] transition-colors" aria-hidden="true" />
                </a>

                {/* LinkedIn */}
                <a
                  href={PROFILE_DATA.contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-white/[0.06] bg-black/30 hover:border-white/[0.18] hover:bg-white/[0.03] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold text-white">LinkedIn</p>
                      <p className="text-[11px] font-mono text-white/50 truncate max-w-[170px]">
                        {PROFILE_DATA.contact.linkedinDisplay}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-[#F59E0B] transition-colors" aria-hidden="true" />
                </a>

                {/* Instagram (with transparent note) */}
                <a
                  href={PROFILE_DATA.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-white/[0.06] bg-black/30 hover:border-white/[0.18] hover:bg-white/[0.03] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Instagram className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" aria-hidden="true" />
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-xs font-semibold text-white">Instagram</p>
                        <span className="text-[10px] font-mono text-[#F59E0B]/80 px-1 rounded bg-[#F59E0B]/10">
                          Sosial
                        </span>
                      </div>
                      <p className="text-[11px] font-mono text-white/50">
                        {PROFILE_DATA.contact.instagramDisplay}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-[#F59E0B] transition-colors" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Scope of Discussion */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
                Ruang Lingkup Diskusi Terbuka
              </h3>
              <ul className="space-y-2 text-xs text-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-[#F59E0B] font-mono">•</span>
                  <span>Eksplorasi arsitektur website modern (Next.js, React, Tailwind).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F59E0B] font-mono">•</span>
                  <span>Diskusi proyek portofolio ini dan perancangan website.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F59E0B] font-mono">•</span>
                  <span>Peluang kerja sama proyek akademik, freelance, atau magang.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
