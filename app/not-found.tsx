import React from "react";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 rounded-2xl border border-white/[0.08] bg-[#111111] p-8">
        <span className="font-mono text-4xl font-bold text-[#F59E0B]">404</span>
        <div className="space-y-2">
          <h1 className="text-xl font-bold text-white">Halaman Tidak Ditemukan</h1>
          <p className="text-xs text-white/60 leading-relaxed">
            Halaman yang Anda tuju tidak tersedia dalam sitemap resmi 5 halaman portofolio Padillah Ramadan Siregar.
          </p>
        </div>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-[#F59E0B] px-5 py-2.5 text-xs font-semibold text-black hover:bg-[#D97706] transition-colors"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
