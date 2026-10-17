import React from "react";
import { Code2, Layout, Server, Database, Wrench, Layers } from "lucide-react";
import { TechCategory } from "@/lib/data";
import TechTile from "@/components/skills/TechTile";

interface TechCategoryPanelProps {
  category: TechCategory;
}

export default function TechCategoryPanel({ category }: TechCategoryPanelProps) {
  // Check if there are any confirmed status items
  const hasMixedStatuses = category.items.some(
    (item) => item.status !== "belum-dikonfirmasi"
  );

  // Group items by status if mixed
  const practicedItems = category.items.filter(
    (item) => item.status === "sudah-dipraktikkan"
  );
  const learningItems = category.items.filter(
    (item) => item.status === "sedang-dipelajari"
  );
  const unconfirmedItems = category.items.filter(
    (item) => item.status === "belum-dikonfirmasi"
  );

  // Choose appropriate generic category icon
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "code":
        return <Code2 className="w-5 h-5 text-[#F59E0B]" aria-hidden="true" />;
      case "layout":
        return <Layout className="w-5 h-5 text-[#F59E0B]" aria-hidden="true" />;
      case "server":
        return <Server className="w-5 h-5 text-[#F59E0B]" aria-hidden="true" />;
      case "database":
        return <Database className="w-5 h-5 text-[#F59E0B]" aria-hidden="true" />;
      case "wrench":
        return <Wrench className="w-5 h-5 text-[#F59E0B]" aria-hidden="true" />;
      default:
        return <Layers className="w-5 h-5 text-[#F59E0B]" aria-hidden="true" />;
    }
  };

  return (
    <section className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 sm:p-8 space-y-6">
      {/* Category Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-black/40 border border-white/[0.06] shrink-0">
            {getCategoryIcon(category.icon)}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            {category.title}
          </h2>
        </div>

        {/* Automatic calculated count */}
        <span className="text-xs font-mono text-[#F59E0B] bg-[#F59E0B]/10 border border-[#F59E0B]/30 px-3 py-1 rounded-full self-start sm:self-auto">
          {category.items.length} teknologi
        </span>
      </div>

      {/* When all items are unconfirmed (standard initial inventory) */}
      {!hasMixedStatuses ? (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 sm:gap-4 m-0 p-0">
          {category.items.map((item) => (
            <TechTile key={item.name} item={item} showStatusBadge={false} />
          ))}
        </ul>
      ) : (
        /* If mixed statuses exist in the future, render sub-groups with non-empty items */
        <div className="space-y-6">
          {practicedItems.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Sudah Dipraktikkan ({practicedItems.length})
              </h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4 m-0 p-0">
                {practicedItems.map((item) => (
                  <TechTile key={item.name} item={item} showStatusBadge={true} />
                ))}
              </ul>
            </div>
          )}

          {learningItems.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F59E0B]">
                Sedang Dipelajari ({learningItems.length})
              </h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4 m-0 p-0">
                {learningItems.map((item) => (
                  <TechTile key={item.name} item={item} showStatusBadge={true} />
                ))}
              </ul>
            </div>
          )}

          {unconfirmedItems.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50">
                Belum Dikonfirmasi ({unconfirmedItems.length})
              </h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4 m-0 p-0">
                {unconfirmedItems.map((item) => (
                  <TechTile key={item.name} item={item} showStatusBadge={false} />
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
