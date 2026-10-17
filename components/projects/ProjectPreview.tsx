"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProjectPreviewProps {
  src: string;
  alt: string;
  caption: string;
  urlLabel: string;
}

export default function ProjectPreview({ src, alt, caption, urlLabel }: ProjectPreviewProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="relative m-0 overflow-hidden bg-[#0d0d0d] p-5 sm:p-8">
      {/* Latar: pola grid tipis */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Jendela browser */}
      <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-xl border border-white/[0.16] bg-[#0a0a0a]/90 shadow-[0_30px_60px_-20px_#000] transition-transform duration-300 group-hover:-translate-y-1">
        <div aria-hidden="true" className="flex items-center gap-1.5 border-b border-white/[0.08] px-3.5 py-3">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="ml-2 flex-1 truncate rounded-md bg-white/[0.05] px-2.5 py-1 font-mono text-[10.5px] text-white/45">
            {urlLabel}
          </span>
        </div>

        {failed ? (
          <div role="img" aria-label={alt} className="grid gap-3 p-6 sm:p-8">
            <div className="h-6 w-3/5 rounded-md bg-white/90" />
            <div className="h-6 w-1/3 rounded-md bg-[#F59E0B]" />
            <div className="h-2.5 w-4/5 rounded bg-white/[0.08]" />
            <div className="h-2.5 w-3/5 rounded bg-white/[0.08]" />
            <div className="h-2.5 w-1/2 rounded bg-white/[0.08]" />
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            width={1400}
            height={553}
            className="block h-auto w-full"
            onError={() => setFailed(true)}
          />
        )}
      </div>

      {!failed && (
        <figcaption className="relative mt-3 text-center font-mono text-[11px] text-white/45">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
