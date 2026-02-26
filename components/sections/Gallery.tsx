"use client";

import { useEffect, useRef } from "react";

const INSTAGRAM_URL = "https://www.instagram.com/chetanasbeautylounge";

// ─── Curated feed tiles ───────────────────────────────────────────────────────
// Each tile represents a category of real posts on the Instagram profile.
// Clicking any tile opens the salon's Instagram page.
const feedTiles = [
  {
    id: 1,
    label: "Bridal Looks",
    sublabel: "Wedding ready ✨",
    gradient: "linear-gradient(135deg, #5f1e42 0%, #8b4b6b 60%, #c4849a 100%)",
    icon: "💍",
    size: "large", // spans 2 rows on desktop
  },
  {
    id: 2,
    label: "Skin Glow",
    sublabel: "Facials & de-tan",
    gradient: "linear-gradient(135deg, #c48b3a 0%, #e8b80d 60%, #f5d87a 100%)",
    icon: "✨",
    size: "small",
  },
  {
    id: 3,
    label: "Hair Styling",
    sublabel: "Cuts & colour",
    gradient: "linear-gradient(135deg, #3a1a2e 0%, #5f1e42 60%, #8c4a6a 100%)",
    icon: "💇‍♀️",
    size: "small",
  },
  {
    id: 4,
    label: "Nail Art",
    sublabel: "Mani & pedi",
    gradient: "linear-gradient(135deg, #6b2d4a 0%, #a05070 60%, #d4a0b5 100%)",
    icon: "💅",
    size: "small",
  },
  {
    id: 5,
    label: "Spa Day",
    sublabel: "Body treatments",
    gradient: "linear-gradient(135deg, #7a5c3a 0%, #b8860b 60%, #e8c57a 100%)",
    icon: "🌿",
    size: "small",
  },
  {
    id: 6,
    label: "Makeovers",
    sublabel: "Party & events",
    gradient: "linear-gradient(135deg, #2a0d1f 0%, #5f1e42 50%, #9b4060 100%)",
    icon: "💋",
    size: "small",
  },
];

// ─── Instagram icon SVG ───────────────────────────────────────────────────────
function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

// ─── Single feed tile ─────────────────────────────────────────────────────────
function FeedTile({
  tile,
  className = "",
}: {
  tile: (typeof feedTiles)[number];
  className?: string;
}) {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden rounded-2xl block ${className}`}
      aria-label={`${tile.label} — view on Instagram @chetanasbeautylounge`}
      style={{ background: tile.gradient }}
    >
      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 40%)",
        }}
        aria-hidden="true"
      />

      {/* Default state content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 transition-opacity duration-300 group-hover:opacity-0">
        <span className="text-3xl" role="img" aria-label={tile.label}>
          {tile.icon}
        </span>
        <p className="text-white font-semibold text-sm tracking-wide drop-shadow-sm">
          {tile.label}
        </p>
        <p className="text-white/70 text-xs">{tile.sublabel}</p>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/50 backdrop-blur-[2px] opacity-0 transition-all duration-300 group-hover:opacity-100">
        <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center ring-2 ring-white/40 group-hover:scale-110 transition-transform duration-300">
          <InstagramIcon className="w-6 h-6 text-white" />
        </div>
        <p className="text-white font-semibold text-sm tracking-wide">View on Instagram</p>
        <p className="text-white/70 text-xs">@chetanasbeautylounge</p>
      </div>

      {/* Instagram watermark (bottom-right, always visible) */}
      <div className="absolute bottom-3 right-3 opacity-40 group-hover:opacity-0 transition-opacity duration-300">
        <InstagramIcon className="w-4 h-4 text-white" />
      </div>
    </a>
  );
}

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const [largeTile, ...smallTiles] = feedTiles;

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="py-24 md:py-32 px-4"
      style={{ backgroundColor: "#F7F4F1" }}
      aria-label="Instagram feed — Chetana's Beauty Lounge"
    >
      <div className="max-w-7xl mx-auto">

        {/* ─── Section header ──── */}
        <div className="reveal mb-3">
          <span className="section-label">Instagram</span>
        </div>
        <div className="reveal reveal-delay-1 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10 md:mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[#111111] leading-tight max-w-lg">
              Follow our journey &amp;{" "}
              <em className="italic text-[#5f1e42]">daily transformations</em>
            </h2>
            <p className="mt-3 text-sm text-[#8c7b72] flex items-center gap-1.5">
              <InstagramIcon className="w-4 h-4 text-[#5f1e42]" />
              <span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#5f1e42] hover:underline"
                >
                  @chetanasbeautylounge
                </a>
                {" "}· Bridal, hair, skin & nail transformations
              </span>
            </p>
          </div>

          {/* Follow CTA */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold text-white flex-shrink-0 self-start sm:self-auto transition-all hover:scale-[1.03] active:scale-100"
            style={{
              background: "linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)",
            }}
            aria-label="Follow Chetana's Beauty on Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
            Follow on Instagram
          </a>
        </div>

        {/* ─── Instagram-style grid ──── */}
        <div className="reveal reveal-delay-2">
          {/* Desktop: feature tile left + 2×2+1 right | Mobile: stacked */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">

            {/* Large tile — spans 2 rows on desktop */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl col-span-1 md:col-span-1 md:row-span-2 min-h-[200px] md:min-h-0 block"
              aria-label={`${largeTile.label} — view on Instagram @chetanasbeautylounge`}
              style={{ background: largeTile.gradient }}
            >
              {/* Texture */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 40%)",
                }}
                aria-hidden="true"
              />
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 group-hover:opacity-0">
                <span className="text-4xl md:text-5xl" role="img" aria-label={largeTile.label}>
                  {largeTile.icon}
                </span>
                <p className="text-white font-semibold text-base md:text-lg tracking-wide drop-shadow-sm">
                  {largeTile.label}
                </p>
                <p className="text-white/70 text-sm">{largeTile.sublabel}</p>
              </div>
              {/* Hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/50 backdrop-blur-[2px] opacity-0 transition-all duration-300 group-hover:opacity-100">
                <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center ring-2 ring-white/40 group-hover:scale-110 transition-transform duration-300">
                  <InstagramIcon className="w-7 h-7 text-white" />
                </div>
                <p className="text-white font-semibold">View on Instagram</p>
                <p className="text-white/70 text-xs">@chetanasbeautylounge</p>
              </div>
              {/* Watermark */}
              <div className="absolute bottom-3 right-3 opacity-40 group-hover:opacity-0 transition-opacity duration-300">
                <InstagramIcon className="w-4 h-4 text-white" />
              </div>
            </a>

            {/* Small tiles */}
            {smallTiles.map((tile) => (
              <FeedTile
                key={tile.id}
                tile={tile}
                className="aspect-square"
              />
            ))}

          </div>
        </div>

        {/* ─── Bottom follow strip ──── */}
        <div className="reveal mt-8 rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg, #5f1e42 0%, #3a1a2e 100%)" }}>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-6 group"
            aria-label="See all posts on Instagram @chetanasbeautylounge"
          >
            <div className="flex items-center gap-4 text-white">
              {/* Profile ring */}
              <div className="w-12 h-12 rounded-full flex items-center justify-center ring-2 ring-white/30 flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)" }}>
                <InstagramIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-base">@chetanasbeautylounge</p>
                <p className="text-white/60 text-sm">Bridal · Hair · Skin · Nails · Spa — Mangalore</p>
              </div>
            </div>
            <span
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-[#5f1e42] bg-white group-hover:bg-white/90 transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
              See All Posts
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
