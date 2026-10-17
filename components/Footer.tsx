import React from "react";
import Link from "next/link";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { PROFILE_DATA } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#0A0A0A] text-white/70">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Col 1: Identity & Summary */}
          <div className="md:col-span-6 space-y-3">
            <Link
              href="/"
              className="text-base font-semibold tracking-tight text-white hover:text-[#F59E0B] transition-colors inline-block"
            >
              {PROFILE_DATA.fullName}
            </Link>
            <p className="text-xs text-white/50 max-w-md leading-relaxed">
              Mahasiswa Teknik Informatika Universitas Medan Area (UMA) yang berfokus pada pengembangan web terstruktur, perancangan antarmuka fungsional, dan arsitektur sistem.
            </p>
            <div className="pt-2 text-xs text-white/40">
              <span>Status Situs: </span>
              <span className="text-white/70">Portofolio Personal Resmi (5 Halaman Inti)</span>
            </div>
          </div>

          {/* Col 2: Sitemap */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              Sitemap
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-[#F59E0B] transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="hover:text-[#F59E0B] transition-colors">
                  Tentang Saya
                </Link>
              </li>
              <li>
                <Link href="/keahlian" className="hover:text-[#F59E0B] transition-colors">
                  Keahlian
                </Link>
              </li>
              <li>
                <Link href="/proyek" className="hover:text-[#F59E0B] transition-colors">
                  Proyek (AmberLens)
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-[#F59E0B] transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Channels */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              Saluran Kontak
            </p>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={`mailto:${PROFILE_DATA.contact.email}`}
                  className="flex items-center gap-2 hover:text-[#F59E0B] transition-colors group"
                >
                  <Mail className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" aria-hidden="true" />
                  <span className="truncate">{PROFILE_DATA.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={PROFILE_DATA.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors group"
                >
                  <span className="w-3.5 h-3.5 flex items-center justify-center font-bold text-emerald-400 text-[10px] shrink-0" aria-hidden="true">WA</span>
                  <span>{PROFILE_DATA.contact.whatsapp}</span>
                  <ExternalLink className="w-3 h-3 text-white/30" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={PROFILE_DATA.contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#F59E0B] transition-colors group"
                >
                  <Github className="w-3.5 h-3.5 text-white/60 group-hover:text-white shrink-0" aria-hidden="true" />
                  <span>GitHub Profile</span>
                  <ExternalLink className="w-3 h-3 text-white/30" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={PROFILE_DATA.contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#F59E0B] transition-colors group"
                >
                  <Linkedin className="w-3.5 h-3.5 text-white/60 group-hover:text-white shrink-0" aria-hidden="true" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3 text-white/30" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom divider & copyright */}
        <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {currentYear} {PROFILE_DATA.fullName}. Hak cipta dilindungi.</p>
          <p className="text-[11px] text-white/30">
            Dibangun dengan pendekatan jujur tanpa klaim palsu atau data fiktif.
          </p>
        </div>
      </div>
    </footer>
  );
}
