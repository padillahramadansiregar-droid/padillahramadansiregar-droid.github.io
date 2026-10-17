"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CampusLogoProps {
  src: string;
  alt: string;
  fallbackText?: string;
  size?: number;
}

export default function CampusLogo({
  src,
  alt,
  fallbackText = "UMA",
  size = 40,
}: CampusLogoProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className="flex shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white"
      style={{ width: size, height: size }}
    >
      {failed ? (
        <span role="img" aria-label={alt} className="text-[11px] font-bold tracking-tight text-[#1a1a1a]">
          {fallbackText}
        </span>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="h-full w-full object-contain p-1"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
