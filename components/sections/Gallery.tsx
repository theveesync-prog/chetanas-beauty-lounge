"use client";

import { useEffect, useRef } from "react";

// ─── Gallery placeholder data ─────────────────────────────────────────────────
// TODO: Replace each entry with a real image:
//   src: "/images/gallery-XX.jpg"
//   Import and use <Image> from "next/image" with appropriate alt text.
//   Recommended sizes:
//     Large (main):  900 × 700 px  ·  landscape/portrait
//     Small (grid):  450 × 350 px  ·  landscape/portrait
//   File names should be descriptive for SEO:
//     e.g. "bridal-makeup-tulu-mangalore.jpg", "keratin-hair-treatment-chetanas.jpg"
const galleryImages = [
  {
    id: 1,
    label: "Bridal Makeup",
    hint: "900 × 700 px\n/images/gallery-bridal-makeup.jpg",
    accent: "#c4849a",
  },
  {
    id: 2,
    label: "Skin Treatment",
    hint: "450 × 350 px\n/images/gallery-skin-treatment.jpg",
    accent: "#b8860b",
  },
  {
    id: 3,
    label: "Hair Styling",
    hint: "450 × 350 px\n/images/gallery-hair-styling.jpg",
    accent: "#5f1e42",
  },
  {
    id: 4,
    label: "Nail Art",
    hint: "450 × 350 px\n/images/gallery-nail-art.jpg",
    accent: "#8b4b6b",
  },
  {
    id: 5,
    label: "Keratin Treatment",
    hint: "450 × 350 px\n/images/gallery-keratin.jpg",
    accent: "#9b7048",
  },
];

function ImagePlaceholder({
  label,
  hint,
  accent,
  className = "",
}: {
  label: string;
  hint: string;
  accent: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      role="img"
      aria-label={`${label} — Chetana's Beauty gallery placeholder`}
      style={{
        background: `linear-gradient(135deg, ${accent}18 0%, ${accent}08 100%)`,
        border: `1px solid ${accent}20`,
      }}
    >
      {/* Decorative corner marks */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 rounded-tl opacity-30" style={{ borderColor: accent }} />
      <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 rounded-tr opacity-30" style={{ borderColor: accent }} />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 rounded-bl opacity-30" style={{ borderColor: accent }} />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 rounded-br opacity-30" style={{ borderColor: accent }} />

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center opacity-40"
          style={{ backgroundColor: accent }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-4 h-4">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <path d="M21 15l-5-5L5 21"/>
          </svg>
        </div>
        <p className="text-xs font-semibold tracking-wider uppercase" style={{ color: accent }}>
          {label}
        </p>
        <p className="text-[10px] leading-snug opacity-50" style={{ color: accent }}>
          {hint.split("\n").map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </p>
      </div>
    </div>
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

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="py-16 md:py-24 px-4"
      style={{ backgroundColor: "#fdf8f5" }}
      aria-label="Gallery of Chetana's Beauty transformations"
    >
      <div className="max-w-7xl mx-auto">

        {/* ─── Section header ──── */}
        <div className="reveal mb-3">
          <span className="section-label">Gallery</span>
        </div>
        <div className="reveal reveal-delay-1 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10 md:mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1a0d0d] leading-tight max-w-lg">
            Explore our transformations &amp;{" "}
            <em className="italic text-[#5f1e42]">beauty makeovers</em>
          </h2>

          {/* Instagram CTA */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1a0d0d] text-white rounded-full px-5 py-2.5 text-sm font-medium flex-shrink-0 hover:bg-[#2d1a1a] transition-colors self-start sm:self-auto"
            aria-label="Follow Chetana's Beauty on Instagram"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            More on Instagram
          </a>
        </div>

        {/* ─── Asymmetric image grid ──── */}
        <div className="reveal reveal-delay-2 flex flex-col md:flex-row gap-3 md:gap-4">

          {/* Left — large feature image */}
          <div className="md:w-[58%] flex-shrink-0">
            <ImagePlaceholder
              label={galleryImages[0].label}
              hint={galleryImages[0].hint}
              accent={galleryImages[0].accent}
              className="w-full h-64 md:h-full min-h-[320px] md:min-h-[480px]"
            />
          </div>

          {/* Right — 2×2 smaller images */}
          <div className="md:w-[42%] grid grid-cols-2 gap-3 md:gap-4">
            {galleryImages.slice(1).map((img) => (
              <ImagePlaceholder
                key={img.id}
                label={img.label}
                hint={img.hint}
                accent={img.accent}
                className="w-full aspect-[4/3]"
              />
            ))}
          </div>

        </div>

        {/* ─── Bottom note ──── */}
        <p className="reveal mt-6 text-center text-xs text-[#8c7b72]">
          {/* TODO: Remove this note once real images are added */}
          Image placeholders — add real salon photos to{" "}
          <code className="bg-[#f0e8df] rounded px-1 py-0.5">/public/images/</code> to replace these.
        </p>

      </div>
    </section>
  );
}
