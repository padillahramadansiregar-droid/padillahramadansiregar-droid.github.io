import React from "react";
import { SkillCategoryData } from "@/lib/data";

interface SkillCategoryProps {
  category: SkillCategoryData;
  index: number;
}

export default function SkillCategory({ category, index }: SkillCategoryProps) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#111111] p-6 transition-all hover:border-white/[0.18] flex flex-col justify-between space-y-5">
      <div>
        {/* Category Header */}
        <div className="flex items-baseline justify-between gap-2 pb-3 border-b border-white/[0.06]">
          <h3 className="text-base font-semibold text-white">
            {category.title}
          </h3>
          <span className="font-mono text-xs text-[#F59E0B] tabular-nums font-semibold">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Short factual context */}
        <div className="mt-2 text-[11px] font-mono text-white/40">
          Konteks: <span className="text-white/60">{category.learningContext}</span>
        </div>

        {/* Description */}
        <p className="mt-2 text-xs text-white/70 leading-relaxed">
          {category.description}
        </p>

        {/* List of technology items (unboxed, clean typography, zero pills) */}
        <div className="mt-5 flex flex-wrap gap-2">
          {category.items.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.07] text-xs font-mono text-white/90 hover:border-[#F59E0B]/50 hover:text-white transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-white/[0.04] text-[11px] text-white/40 flex items-center justify-between">
        <span>Jumlah item inventaris</span>
        <span className="font-mono tabular-nums text-white/60">{category.items.length} teknologi</span>
      </div>
    </div>
  );
}
