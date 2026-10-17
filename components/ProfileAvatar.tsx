"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Terminal, User } from "lucide-react";
import { PROFILE_DATA } from "@/lib/data";

interface ProfileAvatarProps {
  size?: "md" | "lg";
  showCardWrapper?: boolean;
}

export default function ProfileAvatar({
  size = "lg",
  showCardWrapper = true,
}: ProfileAvatarProps) {
  // Support either /images/profile.jpg or /profile.jpg
  const [imageSrc, setImageSrc] = useState<string>("/images/profile.jpg");
  const [imageFailed, setImageFailed] = useState<boolean>(false);

  const handleImageError = () => {
    if (imageSrc === "/images/profile.jpg") {
      // Try /profile.jpg as secondary path before falling back to monogram
      setImageSrc("/profile.jpg");
    } else {
      setImageFailed(true);
    }
  };

  const avatarContent = (
    <div
      className={`relative mx-auto rounded-2xl overflow-hidden border border-[#F59E0B]/30 bg-gradient-to-br from-[#F59E0B]/15 via-[#141414] to-[#F59E0B]/5 flex items-center justify-center shadow-inner ${
        size === "lg" ? "w-28 h-28 sm:w-32 sm:h-32" : "w-20 h-20 sm:w-24 sm:h-24"
      }`}
    >
      {!imageFailed ? (
        <Image
          src={imageSrc}
          alt="Foto profil resmi Padillah Ramadan Siregar"
          fill
          sizes={size === "lg" ? "128px" : "96px"}
          className="object-cover"
          onError={handleImageError}
          priority
        />
      ) : (
        <div
          className="flex flex-col items-center justify-center select-none"
          aria-label="Monogram PRS - Padillah Ramadan Siregar"
        >
          <span className="font-mono text-2xl sm:text-3xl font-bold tracking-widest text-[#F59E0B]">
            PRS
          </span>
          <span className="text-[9px] sm:text-[10px] font-mono text-white/40 tracking-wider mt-0.5">
            2024
          </span>
        </div>
      )}
    </div>
  );

  if (!showCardWrapper) {
    return avatarContent;
  }

  return (
    <div className="w-full max-w-sm rounded-2xl border border-white/[0.1] bg-[#111111] p-6 shadow-2xl relative overflow-hidden transition-all hover:border-white/[0.18]">
      {/* Editorial Header */}
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#F59E0B]" aria-hidden="true" />
          <span className="font-mono text-xs text-white/70">profil.mahasiswa</span>
        </div>
        <span className="text-[11px] font-mono text-white/50">Informatika UMA</span>
      </div>

      <div className="py-6 text-center space-y-4">
        {avatarContent}

        <div>
          <h2 className="text-lg font-bold text-white tracking-tight">
            {PROFILE_DATA.fullName}
          </h2>
          <p className="text-xs text-white/50 font-mono mt-0.5">
            {PROFILE_DATA.contact.email}
          </p>
        </div>

        <p className="text-xs text-white/70 px-2 leading-relaxed">
          {PROFILE_DATA.bioShort}
        </p>
      </div>

      {/* Footer Technical Spec */}
      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-white/50 font-mono">
        <span>Angkatan: 2024</span>
        <span>Basis: Medan, ID</span>
      </div>
    </div>
  );
}
