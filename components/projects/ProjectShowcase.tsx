"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Code, ExternalLink } from "lucide-react";

const SITE_URL = "https://padillahramadansiregar-droid.github.io";
const SITE_HOST = "padillahramadansiregar-droid.github.io";
const REPO_URL =
  "https://github.com/padillahramadansiregar-droid/padillahramadansiregar-droid.github.io";

/** Ukuran "layar" tempat halaman asli dirender, lalu diperkecil agar muat. */
const DESKTOP_FRAME = { w: 1280, h: 800 };
/** Di ponsel, situs dirender selebar ponsel supaya tampil dengan layout mobile dan teksnya terbaca. */
const MOBILE_FRAME = { w: 420, h: 560 };
/** Jika lebar jendela pratinjau di bawah ini (px), pakai tampilan ponsel. */
const COMPACT_BELOW = 480;
/** Lebar tambahan supaya scrollbar bawaan halaman tersembunyi di luar jendela. */
const SCROLLBAR_GUARD = 24;

/** Lama tiap halaman tampil sebelum pindah (ms). Di ponsel lebih lama karena halamannya lebih panjang. */
const DWELL_MS = 9000;
const DWELL_MOBILE_MS = 12000;
/** Jeda sebelum halaman mulai di-scroll otomatis (ms). */
const SCROLL_DELAY_MS = 1800;
/** Sisa waktu di akhir yang dibiarkan diam agar halaman terbaca (ms). */
const SCROLL_TAIL_MS = 1600;

const TABS = [
  { label: "Beranda", path: "/" },
  { label: "Keahlian", path: "/keahlian/" },
  { label: "Proyek", path: "/proyek/" },
  { label: "Kontak", path: "/kontak/" },
] as const;

const FACTS = [
  { value: "6", label: "Halaman" },
  { value: "Next.js 15", label: "App Router" },
  { value: "TypeScript", label: "Seluruh kode" },
  { value: "Actions", label: "Deploy otomatis" },
];

const SPECS = [
  { label: "Framework", value: "Next.js 15 · React 19" },
  { label: "Bahasa", value: "TypeScript" },
  { label: "Styling", value: "Tailwind CSS v4" },
  { label: "Publikasi", value: "GitHub Pages · Actions" },
];

const TECH = ["Next.js", "React", "TypeScript", "Tailwind CSS", "GitHub Pages"];

/* ---------- Animasi di dalam halaman asli (iframe) ---------- */

const easeInOut = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/**
 * Memutar "pembukaan" sebuah halaman di dalam iframe:
 * 1. semua blok konten disembunyikan,
 * 2. halaman di-scroll pelan ke bawah,
 * 3. tiap blok muncul bergiliran (fade + naik + sedikit blur) saat masuk layar.
 *
 * Iframe satu origin dengan situs, jadi isinya bisa diakses langsung.
 * Mengembalikan fungsi pembersih.
 */
function playEntrance(
  iframe: HTMLIFrameElement,
  opts: { pausedRef: { current: boolean }; scrollMs: number; blur: boolean }
): () => void {
  let doc: Document | null = null;
  let win: Window | null = null;
  try {
    doc = iframe.contentDocument;
    win = iframe.contentWindow;
  } catch {
    return () => {};
  }
  if (!doc || !win || !doc.body) return () => {};

  const root = (doc.querySelector("main") as HTMLElement | null) ?? doc.body;

  // Blok yang dianimasikan. Elemen yang berada di dalam blok lain dilewati
  // supaya induk dan anak tidak beranimasi dua kali.
  const all = Array.from(
    root.querySelectorAll<HTMLElement>(
      "h1,h2,h3,p,li,article,img,form,a,button,figure,blockquote"
    )
  );
  const blocks = all.filter(
    (el) => !all.some((other) => other !== el && other.contains(el))
  );

  const animations: Animation[] = [];
  let raf = 0;
  const timers: number[] = [];
  let cancelled = false;

  win.scrollTo(0, 0);
  blocks.forEach((el) => {
    el.style.opacity = "0";
  });

  const reveal = (el: HTMLElement, delay: number) => {
    const anim = el.animate(
      opts.blur
        ? [
            { opacity: 0, transform: "translateY(22px)", filter: "blur(6px)" },
            { opacity: 1, transform: "translateY(0)", filter: "blur(0)" },
          ]
        : [
            { opacity: 0, transform: "translateY(18px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
      {
        duration: 750,
        delay,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "backwards",
      }
    );
    animations.push(anim);
    anim.onfinish = () => {
      el.style.opacity = "";
    };
  };

  const observer = new (win as Window & typeof globalThis).IntersectionObserver(
    (entries) => {
      const visible = entries.filter((e) => e.isIntersecting);
      visible.forEach((entry, n) => {
        observer.unobserve(entry.target);
        reveal(entry.target as HTMLElement, n * 90);
      });
    },
    { threshold: 0.12 }
  );

  // Mulai sedikit terlambat supaya iframe sempat fade-in lebih dulu.
  timers.push(
    window.setTimeout(() => {
      if (!cancelled) blocks.forEach((el) => observer.observe(el));
    }, 250)
  );

  // Scroll otomatis pelan, berhenti saat kursor berada di atas jendela.
  timers.push(
    window.setTimeout(() => {
      if (cancelled || !win || !doc) return;
      const max = Math.max(
        0,
        doc.documentElement.scrollHeight - (win.innerHeight || DESKTOP_FRAME.h)
      );
      if (max < 24) return;

      let elapsed = 0;
      let last = performance.now();
      const tick = (now: number) => {
        if (cancelled || !win) return;
        const dt = now - last;
        last = now;
        if (!opts.pausedRef.current) elapsed += dt;
        const t = Math.min(1, elapsed / opts.scrollMs);
        win.scrollTo(0, max * easeInOut(t));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, SCROLL_DELAY_MS)
  );

  return () => {
    cancelled = true;
    cancelAnimationFrame(raf);
    timers.forEach((id) => window.clearTimeout(id));
    observer.disconnect();
    animations.forEach((a) => a.cancel());
    blocks.forEach((el) => {
      el.style.opacity = "";
    });
  };
}

/* ---------- Jendela browser berisi tampilan asli situs ---------- */

function BrowserSim() {
  const [active, setActive] = useState(0);
  const [visited, setVisited] = useState<number[]>([0]);
  const [loaded, setLoaded] = useState<number[]>([]);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [inView, setInView] = useState(true);
  const [docHidden, setDocHidden] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  // "pending" = belum tahu, "top" = halaman utama, "embedded" = sedang dimuat di dalam jendela lain
  const [mode, setMode] = useState<"pending" | "top" | "embedded">("pending");
  const [boxW, setBoxW] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const frameRefs = useRef<Record<number, HTMLIFrameElement | null>>({});
  const pausedRef = useRef(false);

  const compact = boxW > 0 && boxW < COMPACT_BELOW;
  const size = compact ? MOBILE_FRAME : DESKTOP_FRAME;
  const dwell = compact ? DWELL_MOBILE_MS : DWELL_MS;
  const scale = boxW / size.w;
  // Berhenti saat kursor di atas jendela, saat di luar layar, atau saat tab browser tidak aktif.
  const paused = hoverPaused || !inView || docHidden;
  pausedRef.current = paused;

  // Cegah rekursi: halaman yang dimuat di dalam jendela tidak membuat jendela lagi.
  useEffect(() => {
    setMode(window.self === window.top ? "top" : "embedded");
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  // Halaman baru dimuat saat pertama dibuka, lalu disimpan agar tidak memuat ulang.
  useEffect(() => {
    setVisited((prev) => (prev.includes(active) ? prev : [...prev, active]));
  }, [active]);

  // Skala mengikuti lebar jendela.
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const update = () => setBoxW(el.clientWidth);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Hemat baterai: jeda saat komponen keluar dari layar atau tab browser disembunyikan.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    );
    io.observe(el);
    const onVisibility = () => setDocHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  // Geser daftar tab agar tab aktif selalu terlihat di layar sempit.
  useEffect(() => {
    const box = tabsRef.current;
    const btn = box?.children[active] as HTMLElement | undefined;
    if (!box || !btn) return;
    box.scrollTo({
      left: btn.offsetLeft - (box.clientWidth - btn.offsetWidth) / 2,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }, [active, reducedMotion]);

  // Putar animasi masuk setiap kali sebuah halaman menjadi aktif.
  useEffect(() => {
    if (mode !== "top" || reducedMotion || !loaded.includes(active)) return;
    const frame = frameRefs.current[active];
    if (!frame) return;
    return playEntrance(frame, {
      pausedRef,
      scrollMs: dwell - SCROLL_DELAY_MS - SCROLL_TAIL_MS,
      blur: !compact,
    });
  }, [active, loaded, mode, reducedMotion, dwell, compact]);

  const markLoaded = useCallback((i: number) => {
    setLoaded((prev) => (prev.includes(i) ? prev : [...prev, i]));
  }, []);

  const autoplay = mode === "top" && !reducedMotion;

  return (
    <div
      ref={rootRef}
      // Hanya mouse yang menjeda. Di layar sentuh, "hover" menempel setelah ketuk dan akan menjeda selamanya.
      onPointerEnter={(e) => e.pointerType === "mouse" && setHoverPaused(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setHoverPaused(false)}
      onFocus={(e) => e.target.matches(":focus-visible") && setHoverPaused(true)}
      onBlur={() => setHoverPaused(false)}
    >
      <style>{`
        @keyframes showcase-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes showcase-path {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="overflow-hidden rounded-xl border border-white/[0.12] bg-[#0D0D0D]">
        {/* Bar browser */}
        <div className="flex items-center gap-3 border-b border-white/[0.08] bg-[#161616] px-3 py-2.5">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]/80" />
          </div>
          <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-md bg-black/50 px-3 py-1 font-mono text-[10px] text-white/50 sm:text-[11px]">
            <span className="text-[8px] text-emerald-400" aria-hidden="true">
              ●
            </span>
            <span className="truncate">
              {SITE_HOST}
              <span
                key={active}
                className="inline-block text-white/85 motion-safe:animate-[showcase-path_0.4s_ease-out]"
              >
                {TABS[active].path}
              </span>
            </span>
          </div>
        </div>

        {/* Tab halaman + penanda waktu */}
        <div
          ref={tabsRef}
          className="relative flex gap-1 overflow-x-auto border-b border-white/[0.06] bg-[#121212] px-2 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {TABS.map((tab, i) => (
            <button
              key={tab.path}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={`relative whitespace-nowrap rounded-t-md px-3.5 py-2.5 font-mono text-[10px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] sm:py-1.5 sm:text-[11px] ${
                active === i
                  ? "bg-[#0D0D0D] text-[#F59E0B]"
                  : "text-white/40 hover:text-white/80"
              }`}
            >
              {tab.label}
              {active === i && autoplay && (
                <span
                  key={`bar-${active}`}
                  aria-hidden="true"
                  onAnimationEnd={() =>
                    setActive((prev) => (prev + 1) % TABS.length)
                  }
                  className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-[#F59E0B]"
                  style={{
                    animation: `showcase-progress ${dwell}ms linear forwards`,
                    animationPlayState: paused ? "paused" : "running",
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Layar: halaman asli situs, diperkecil */}
        <div
          ref={viewportRef}
          role="img"
          aria-label="Tampilan asli situs portofolio: halaman Beranda, Keahlian, Proyek, dan Kontak"
          className={`bg-grid-pattern relative w-full overflow-hidden bg-[#0D0D0D] ${
            compact ? "aspect-[3/4]" : "aspect-[16/10]"
          }`}
        >
          {mode === "top" &&
            visited.map((i) => (
              <iframe
                key={TABS[i].path}
                ref={(node) => {
                  frameRefs.current[i] = node;
                }}
                src={TABS[i].path}
                title={`Pratinjau halaman ${TABS[i].label}`}
                loading="lazy"
                tabIndex={-1}
                aria-hidden="true"
                onLoad={() => markLoaded(i)}
                className={`pointer-events-none absolute left-0 top-0 border-0 transition-opacity duration-700 ease-out ${
                  active === i ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  width: size.w + SCROLLBAR_GUARD,
                  height: size.h,
                  transform: `scale(${scale})`,
                  transformOrigin: "top left",
                }}
              />
            ))}

          {mode === "embedded" && (
            <div className="absolute inset-0 grid place-items-center font-mono text-[10px] text-white/30">
              Pratinjau situs
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Komponen utama ---------- */

interface ProjectShowcaseProps {
  /** "ringkas": untuk Beranda. "lengkap": untuk halaman Proyek. */
  variant?: "ringkas" | "lengkap";
}

export default function ProjectShowcase({ variant = "ringkas" }: ProjectShowcaseProps) {
  const full = variant === "lengkap";

  const content = (
    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-7">
        <BrowserSim />
      </div>

      <div className="space-y-5 lg:col-span-5">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-emerald-400">
            {full ? "Sedang dikembangkan" : "Sedang dikerjakan"}
          </span>
        </div>

        <div className="space-y-2.5">
          <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-[26px]">
            Situs Portofolio Personal
          </h3>
          <p className="text-sm leading-relaxed text-white/70">
            {full
              ? "Situs portofolio dengan gaya gelap editorial dan aksen amber. Seluruh teks, pendidikan, dan keahlian dikelola dari satu berkas data, lalu dipublikasikan otomatis ke GitHub Pages."
              : "Situs yang sedang Anda lihat ini. Dirancang dan ditulis sendiri dengan gaya gelap editorial, seluruh isinya dikelola dari satu berkas data, dan dipublikasikan otomatis lewat GitHub Actions."}
          </p>
        </div>

        {full ? (
          <dl className="overflow-hidden rounded-xl border border-white/[0.08] text-xs">
            {SPECS.map((spec, i) => (
              <div
                key={spec.label}
                className={`flex items-center justify-between gap-4 px-4 py-2.5 ${
                  i % 2 === 0 ? "bg-black/30" : ""
                } ${i > 0 ? "border-t border-white/[0.06]" : ""}`}
              >
                <dt className="text-white/45">{spec.label}</dt>
                <dd className="text-right font-mono font-medium text-white">{spec.value}</dd>
              </div>
            ))}
          </dl>
        ) : (
          <>
            <dl className="grid grid-cols-2 gap-3">
              {FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-[10px] border border-white/[0.08] bg-[#111111] px-3.5 py-3"
                >
                  <dt className="text-[11px] text-white/40">{fact.label}</dt>
                  <dd className="mt-0.5 font-mono text-[15px] font-semibold text-white">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <ul className="flex flex-wrap gap-2" aria-label="Teknologi yang dipakai">
              {TECH.map((name) => (
                <li
                  key={name}
                  className="rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-2.5 py-1 font-mono text-[10.5px] text-[#F59E0B]"
                >
                  {name}
                </li>
              ))}
            </ul>
          </>
        )}

        <div className="flex flex-col gap-2.5 pt-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-[10px] bg-[#F59E0B] px-[18px] text-[13px] font-semibold text-black transition-colors hover:bg-[#D97706] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <Code className="h-4 w-4" aria-hidden="true" />
            <span>Lihat Kode Sumber</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          {full ? (
            <a
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-[10px] border border-white/[0.14] bg-white/[0.03] px-[18px] text-[13px] font-medium text-white transition-colors hover:border-white/[0.24] hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
            >
              <span>Buka Situs</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          ) : (
            <Link
              href="/proyek"
              className="inline-flex min-h-[46px] items-center justify-center rounded-[10px] border border-white/[0.14] bg-white/[0.03] px-[18px] text-[13px] font-medium text-white transition-colors hover:border-white/[0.24] hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
            >
              Detail Proyek
            </Link>
          )}
        </div>
      </div>
    </div>
  );

  if (full) {
    return (
      <div className="rounded-2xl border border-white/[0.1] bg-[#111111] p-5 sm:p-7">
        {content}
      </div>
    );
  }

  return content;
}
