"use client";

import React, { useEffect, useRef, useState } from "react";

interface EducationTimelineProps {
  startYear: number;
  endYear: number;
  currentYear: number;
}

export default function EducationTimeline({
  startYear,
  endYear,
  currentYear,
}: EducationTimelineProps) {
  const total = Math.max(endYear - startYear, 1);
  const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);
  const progress = Math.min(Math.max(((currentYear - startYear) / total) * 100, 0), 100);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      const frame = window.requestAnimationFrame(() => setVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className={`edu-timeline px-1 ${visible ? "is-visible" : ""}`.trim()}
      role="group"
      aria-label={`Garis waktu perkuliahan ${startYear} sampai ${endYear}`}
    >
      <div className="relative h-14">
        {/* Garis dasar dan garis progres */}
        <div aria-hidden="true" className="absolute left-0 right-0 top-[6px] h-0.5 bg-white/[0.14]" />
        <div
          aria-hidden="true"
          className="edu-fill absolute left-0 top-[6px] h-0.5 bg-[#F59E0B]"
          style={{ width: `${progress}%` }}
        />

        <ol className="absolute inset-0 m-0 list-none p-0">
          {years.map((year, i) => {
            const isFirst = i === 0;
            const isLast = i === years.length - 1;
            const isCurrent = year === currentYear;
            const isPast = year < currentYear;
            const pct = (i / total) * 100;

            const position = isFirst
              ? "left-0 items-start text-left"
              : isLast
                ? "right-0 items-end text-right"
                : "-translate-x-1/2 items-center text-center";

            const dot = isCurrent
              ? "bg-[#F59E0B] ring-4 ring-[#F59E0B]/25"
              : isPast
                ? "bg-[#F59E0B]"
                : "border-2 border-white/30 bg-[#111111]";

            const caption = isFirst
              ? "Mulai kuliah"
              : isCurrent
                ? "Saat ini"
                : isLast
                  ? "Estimasi lulus"
                  : null;

            const stateText = isCurrent ? "tahun berjalan" : isPast ? "sudah dilewati" : "belum tercapai";

            return (
              <li
                key={year}
                aria-current={isCurrent ? "date" : undefined}
                className={`absolute top-0 flex flex-col ${position}`}
                style={isFirst || isLast ? undefined : { left: `${pct}%` }}
              >
                <span
                  aria-hidden="true"
                  className={`edu-dot block h-3.5 w-3.5 rounded-full box-border ${dot}`}
                  style={{ "--i": i } as React.CSSProperties}
                />
                <span
                  className={`mt-2 text-xs tabular-nums ${
                    isCurrent ? "font-semibold text-[#F59E0B]" : "text-white/80"
                  }`}
                >
                  {year}
                  <span className="sr-only">, {stateText}</span>
                </span>
                {caption && <span className="text-[11px] leading-tight text-white/50">{caption}</span>}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
