"use client";

import React, { useEffect, useRef, useState } from "react";

type RevealTag = "div" | "section" | "article" | "header" | "ul" | "ol";

interface RevealProps {
  children: React.ReactNode;
  as?: RevealTag;
  className?: string;
  /** Jeda sebelum animasi mulai (milidetik). Dipakai untuk blok tunggal. */
  delay?: number;
  /**
   * Mode grup: elemen anak dengan class "reveal-item" dan variabel --i
   * muncul berurutan (stagger) saat grup masuk ke layar.
   */
  group?: boolean;
}

export default function Reveal({
  children,
  as = "div",
  className = "",
  delay = 0,
  group = false,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Peramban lama tanpa IntersectionObserver: tampilkan langsung.
    if (typeof IntersectionObserver === "undefined") {
      const frame = window.requestAnimationFrame(() => setVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect(); // animasi hanya berjalan sekali
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return React.createElement(
    as,
    {
      ref,
      className: `${group ? "reveal-group" : "reveal"} ${visible ? "is-visible" : ""} ${className}`.trim(),
      style: group ? undefined : ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties),
    },
    children
  );
}
