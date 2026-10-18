"use client";

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
import { PORTFOLIO_PROJECT, SHOWCASE_PAGES } from "@/lib/data";

/** Ukuran "layar" tempat halaman asli dirender, lalu diperkecil agar muat. */
const DESKTOP_FRAME = { w: 1280, h: 800 };
/** Di layar sempit, situs dirender selebar ponsel supaya teksnya terbaca. */
const MOBILE_FRAME = { w: 420, h: 560 };
/** Jika lebar jendela pratinjau di bawah ini (px), pakai tampilan ponsel. */
const COMPACT_BELOW = 560;

/** Lama tiap halaman tampil sebelum pindah (ms). */
const DWELL_MS = 9000;
const DWELL_MOBILE_MS = 12000;
/** Jeda sebelum halaman mulai di-scroll otomatis (ms). */
const SCROLL_DELAY_MS = 1800;
/** Sisa waktu di akhir yang dibiarkan diam agar halaman terbaca (ms). */
const SCROLL_TAIL_MS = 1600;

/* ---------- Sumber data eksternal (aman untuk SSR dan lint) ---------- */

const subscribeNever = () => () => {};

function subscribeReducedMotion(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
const getReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function subscribeVisibility(callback: () => void) {
  document.addEventListener("visibilitychange", callback);
  return () => document.removeEventListener("visibilitychange", callback);
}
const getDocHidden = () => document.hidden;

/** True jika halaman ini sedang dimuat di dalam iframe (misalnya di pratinjau sendiri). */
const getEmbedded = () => window.self !== window.top;

/** True jika pengguna menyalakan mode hemat data. */
const getSaveData = () =>
  (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;

/* ---------- Pembantu untuk iframe ---------- */

const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/** Sembunyikan scrollbar di dalam iframe (iframe satu origin dengan situs). */
function hideScrollbars(iframe: HTMLIFrameElement) {
  try {
    const doc = iframe.contentDocument;
    if (!doc || !doc.head || doc.getElementById("showcase-no-scrollbar")) return;
    const style = doc.createElement("style");
    style.id = "showcase-no-scrollbar";
    style.textContent =
      "html{scrollbar-width:none;-ms-overflow-style:none}html::-webkit-scrollbar,body::-webkit-scrollbar{display:none}";
    doc.head.appendChild(style);
  } catch {
    /* abaikan */
  }
}

/** Kerangka halaman, dipakai sebelum pratinjau hidup dimuat atau saat dimuat di dalam iframe. */
function Wireframe() {
  return (
    <div aria-hidden="true" className="absolute inset-0 grid content-start gap-3 p-8 sm:p-12">
      <div className="h-3 w-24 rounded bg-[#F59E0B]/70" />
      <div className="h-7 w-3/5 rounded-md bg-white/90" />
      <div className="h-7 w-2/5 rounded-md bg-[#F59E0B]" />
      <div className="h-2.5 w-4/5 rounded bg-white/[0.08]" />
      <div className="h-2.5 w-3/5 rounded bg-white/[0.08]" />
      <div className="mt-3 flex gap-2">
        <div className="h-8 w-28 rounded-lg bg-[#F59E0B]" />
        <div className="h-8 w-28 rounded-lg border border-white/[0.16]" />
      </div>
    </div>
  );
}

/* ---------- Jendela browser berisi tampilan asli situs ---------- */

function BrowserSim() {
  const pages = SHOWCASE_PAGES;

  const [active, setActive] = useState(0);
  const [visited, setVisited] = useState<number[]>([0]);
  const [loaded, setLoaded] = useState<number[]>([]);
  const [advance, setAdvance] = useState(true); // tab berganti sendiri
  const [hoverPaused, setHoverPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [everInView, setEverInView] = useState(false);
  const [boxW, setBoxW] = useState(0);

  const saveData = useSyncExternalStore(subscribeNever, getSaveData, () => false);
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false);
  const docHidden = useSyncExternalStore(subscribeVisibility, getDocHidden, () => false);

  const rootRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const frameRefs = useRef<Record<number, HTMLIFrameElement | null>>({});
  const pausedRef = useRef(true);

  // Pratinjau hidup hanya dimuat jika pengguna tidak memakai mode hemat data dan komponen sudah pernah terlihat.
  const live = !saveData && everInView;
  const compact = boxW > 0 && boxW < COMPACT_BELOW;
  const size = compact ? MOBILE_FRAME : DESKTOP_FRAME;
  const dwell = compact ? DWELL_MOBILE_MS : DWELL_MS;
  const scale = boxW / size.w;
  const scrollMs = dwell - SCROLL_DELAY_MS - SCROLL_TAIL_MS;
  const paused = hoverPaused || !inView || docHidden;
  const autoplay = live && advance && !reducedMotion;

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  const goTo = useCallback((index: number) => {
    setActive(index);
    setVisited((prev) => (prev.includes(index) ? prev : [...prev, index]));
  }, []);

  const markLoaded = useCallback((index: number) => {
    setLoaded((prev) => (prev.includes(index) ? prev : [...prev, index]));
  }, []);

  // Skala mengikuti lebar jendela (ResizeObserver langsung melapor saat mulai diamati).
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const observer = new ResizeObserver(() => setBoxW(el.clientWidth));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Muat pratinjau hanya setelah komponen terlihat, dan jeda saat keluar dari layar.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setEverInView(true);
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Geser daftar tab agar tab aktif selalu terlihat di layar sempit.
  useEffect(() => {
    const box = tabsRef.current;
    const button = box?.children[active] as HTMLElement | undefined;
    if (!box || !button) return;
    box.scrollTo({
      left: button.offsetLeft - (box.clientWidth - button.offsetWidth) / 2,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }, [active, reducedMotion]);

  // Scroll otomatis pelan di dalam halaman aktif. Animasi masuk dikerjakan oleh situs itu sendiri.
  useEffect(() => {
    if (!live || reducedMotion || !loaded.includes(active)) return;
    const iframe = frameRefs.current[active];
    if (!iframe) return;

    let win: Window | null = null;
    let doc: Document | null = null;
    try {
      win = iframe.contentWindow;
      doc = iframe.contentDocument;
    } catch {
      return;
    }
    if (!win || !doc) return;

    const target = win;
    const targetDoc = doc;
    target.scrollTo({ top: 0, behavior: "instant" });

    let raf = 0;
    let cancelled = false;

    const timer = window.setTimeout(() => {
      if (cancelled) return;
      const max = Math.max(0, targetDoc.documentElement.scrollHeight - (target.innerHeight || size.h));
      if (max < 24) return;

      let elapsed = 0;
      let last = performance.now();
      const tick = (now: number) => {
        if (cancelled) return;
        const dt = now - last;
        last = now;
        if (!pausedRef.current) elapsed += dt;
        const t = Math.min(1, elapsed / scrollMs);
        target.scrollTo({ top: max * easeInOut(t), behavior: "instant" });
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, SCROLL_DELAY_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [active, loaded, live, reducedMotion, scrollMs, size.h]);

  return (
    <div ref={rootRef}>
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
              {PORTFOLIO_PROJECT.urlLabel}
              <span
                key={active}
                className="inline-block text-white/85 motion-safe:animate-[showcase-path_0.4s_ease-out]"
              >
                {pages[active].path}
              </span>
            </span>
          </div>
        </div>

        {/* Tab halaman */}
        <div className="flex items-end border-b border-white/[0.06] bg-[#121212] pl-2 pr-2 pt-2">
          <div
            ref={tabsRef}
            role="group"
            aria-label="Halaman yang ditampilkan"
            className="flex min-w-0 flex-1 gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {pages.map((page, i) => (
              <button
                key={page.path}
                type="button"
                onClick={() => {
                  goTo(i);
                  setAdvance(false);
                }}
                aria-pressed={active === i}
                className={`relative whitespace-nowrap rounded-t-md px-3.5 py-2.5 font-mono text-[10px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] sm:py-1.5 sm:text-[11px] ${
                  active === i ? "bg-[#0D0D0D] text-[#F59E0B]" : "text-white/40 hover:text-white/80"
                }`}
              >
                {page.label}
                {active === i && autoplay && (
                  <span
                    key={`bar-${active}`}
                    aria-hidden="true"
                    onAnimationEnd={() => goTo((active + 1) % pages.length)}
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
        </div>

        {/* Layar: halaman asli situs, diperkecil. Hanya mouse di atas layar yang menjeda. */}
        <div
          ref={viewportRef}
          role="img"
          aria-label="Tampilan asli situs portofolio: halaman Beranda, Tentang, Keahlian, Proyek, dan Kontak"
          onPointerEnter={(e) => e.pointerType === "mouse" && setHoverPaused(true)}
          onPointerLeave={(e) => e.pointerType === "mouse" && setHoverPaused(false)}
          className={`bg-grid-pattern relative w-full overflow-hidden bg-[#0D0D0D] ${
            compact ? "aspect-[3/4]" : "aspect-[16/10]"
          }`}
        >
          {!live && <Wireframe />}

          {live &&
            visited.map((i) => (
              <iframe
                key={pages[i].path}
                ref={(node) => {
                  frameRefs.current[i] = node;
                }}
                src={pages[i].path}
                title={`Pratinjau halaman ${pages[i].label}`}
                sandbox="allow-same-origin allow-scripts"
                tabIndex={-1}
                aria-hidden="true"
                onLoad={(e) => {
                  hideScrollbars(e.currentTarget);
                  markLoaded(i);
                }}
                className={`pointer-events-none absolute left-0 top-0 border-0 transition-opacity duration-700 ease-out motion-reduce:transition-none ${
                  active === i ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  width: size.w,
                  height: size.h,
                  transform: `scale(${scale})`,
                  transformOrigin: "top left",
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Komponen utama ---------- */

interface ProjectShowcaseProps {
  /** "ringkas": untuk Beranda (ada tombol Detail Proyek). "lengkap": untuk halaman Proyek. */
  variant?: "ringkas" | "lengkap";
  headingLevel?: "h2" | "h3";
}

export default function ProjectShowcase({
  variant = "ringkas",
  headingLevel = "h2",
}: ProjectShowcaseProps) {
  const project = PORTFOLIO_PROJECT;
  const full = variant === "lengkap";
  const Heading = headingLevel;

  // Saat dimuat di dalam pratinjau (iframe), tampilkan kartu info saja
  // supaya tidak ada jendela browser di dalam jendela browser.
  const embedded = useSyncExternalStore(subscribeNever, getEmbedded, () => false);

  return (
    <article
      className={
        embedded ? "" : "grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12"
      }
    >
      {!embedded && (
        <div className="lg:col-span-7">
          <BrowserSim />
        </div>
      )}

      <div className={`space-y-5 ${embedded ? "" : "lg:col-span-5"}`}>
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-emerald-400">
            {project.status}
          </span>
        </div>

        <div className="space-y-2.5">
          <Heading className="text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-[26px]">
            {project.title}
          </Heading>
          <p className="text-sm leading-relaxed text-white/70">{project.summary}</p>
        </div>

        <dl className="grid grid-cols-2 gap-3">
          {project.facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-[10px] border border-white/[0.08] bg-[#111111] px-3.5 py-3"
            >
              <dt className="text-[11px] text-white/40">{fact.label}</dt>
              <dd className="mt-0.5 font-mono text-[15px] font-semibold text-white">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <ul className="flex flex-wrap gap-2" aria-label="Teknologi yang dipakai">
          {project.technologies.map((name) => (
            <li
              key={name}
              className="rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-2.5 py-1 font-mono text-[10.5px] text-[#F59E0B]"
            >
              {name}
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-2.5 pt-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Buka kode sumber di GitHub (tab baru)"
            className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-[10px] bg-[#F59E0B] px-[18px] text-[13px] font-semibold text-black transition-colors hover:bg-[#D97706] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <Code2 className="h-4 w-4" aria-hidden="true" />
            <span>Lihat Kode Sumber</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          {!full && (
            <Link
              href="/proyek"
              className="inline-flex min-h-[46px] items-center justify-center rounded-[10px] border border-white/[0.14] bg-white/[0.03] px-[18px] text-[13px] font-medium text-white transition-colors hover:border-white/[0.24] hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
            >
              Detail Proyek
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
