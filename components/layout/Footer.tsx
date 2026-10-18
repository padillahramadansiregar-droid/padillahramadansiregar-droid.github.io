import React from "react";
import Link from "next/link";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { PROFILE_DATA } from "@/lib/data";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

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
                  Proyek
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
                  <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
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
