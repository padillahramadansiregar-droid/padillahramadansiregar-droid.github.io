import React from "react";
import { TechItem } from "@/lib/data";
import TechLogo from "@/components/TechLogo";

interface TechTileProps {
  item: TechItem;
  showStatusBadge?: boolean;
}

export default function TechTile({ item, showStatusBadge = false }: TechTileProps) {
  return (
    <li className="list-none">
      <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-white/[0.08] bg-[#111111] text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F59E0B]/40 hover:bg-[#141414] min-w-[120px] sm:min-w-[130px] h-full motion-reduce:hover:translate-y-0">
        {/* Technology Logo / Icon (Decorative, size 36px) */}
        <div className="w-10 h-10 flex items-center justify-center mb-2.5 shrink-0">
          <TechLogo name={item.name} size={36} />
        </div>

        {/* Visible Technology Name (Semantic text) */}
        <span className="text-xs sm:text-sm font-medium text-white/90 tracking-tight break-words">
          {item.name}
        </span>

        {/* Optional status text if status is confirmed in the future */}
        {showStatusBadge && item.status !== "belum-dikonfirmasi" && (
          <span className="mt-2 text-[10px] font-mono text-[#F59E0B] tracking-wider uppercase">
            {item.status === "sudah-dipraktikkan" ? "Sudah Dipraktikkan" : "Sedang Dipelajari"}
          </span>
        )}
      </div>
    </li>
  );
}
