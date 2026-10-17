"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Saya", href: "/tentang" },
  { label: "Keahlian", href: "/keahlian" },
  { label: "Proyek", href: "/proyek" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#0A0A0A]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center shrink-0">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm sm:text-base font-semibold tracking-tight text-white hover:text-[#F59E0B] transition-colors whitespace-nowrap"
            aria-label="Padillah Ramadan Siregar - Halaman Utama"
          >
            PADILLAH RAMADAN SIREGAR
          </Link>
        </div>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium"
          aria-label="Navigasi Utama"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors whitespace-nowrap py-1 relative ${
                  isActive
                    ? "text-[#F59E0B] font-semibold"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-[#F59E0B]"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/kontak"
            onClick={() => setMobileMenuOpen(false)}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-[#F59E0B] px-3.5 py-1.5 text-xs font-semibold text-black hover:bg-[#D97706] transition-colors whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
          >
            <span>Hubungi Saya</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex md:hidden items-center justify-center p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/[0.06] transition-colors focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden border-b border-white/[0.08] bg-[#111111] px-4 py-4 space-y-1"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#F59E0B]/10 text-[#F59E0B] font-semibold"
                    : "text-white/80 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-1.5 rounded-md bg-[#F59E0B] px-4 py-2.5 text-xs font-semibold text-black hover:bg-[#D97706] transition-colors"
            >
              <span>Hubungi Saya</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
