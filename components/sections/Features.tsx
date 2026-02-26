"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const stats = [
  {
    stat: "1000+",
    title: "Happy Brides",
    description:
      "Trusted for bridal makeup and wedding beauty services in Mangalore across Tulu Hindu, Konkani Catholic and Beary Muslim ceremonies.",
  },
  {
    stat: "28+",
    title: "Years in the Beauty Industry",
    description:
      "One of the most experienced beauty salons in Mangalore since 1998 — a legacy of craft, care and deep community trust.",
  },
  {
    stat: "100%",
    title: "Women-Exclusive Salon",
    description:
      "Mangalore's only women-exclusive beauty salon — offering complete privacy and comfort for every client, every visit.",
  },
];

const INTERVAL_MS = 4000;

export default function Features() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((idx: number) => {
    setFading(true);
    setTimeout(() => {
      setActive(idx);
      setFading(false);
    }, 250);
  }, []);

  const next = useCallback(() => {
    goTo((active + 1) % stats.length);
  }, [active, goTo]);

  const prev = useCallback(() => {
    goTo((active - 1 + stats.length) % stats.length);
  }, [active, goTo]);

  // Auto-advance
  useEffect(() => {
    timerRef.current = setInterval(next, INTERVAL_MS);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [next]);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, INTERVAL_MS);
  };

  const handlePrev = () => { resetTimer(); prev(); };
  const handleNext = () => { resetTimer(); next(); };
  const handleDot = (i: number) => { resetTimer(); goTo(i); };

  const current = stats[active];

  return (
    <section
      id="features"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#111111" }}
      aria-label="Why choose Chetana's Beauty"
    >
      {/* ── Content ────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">

        {/* Stat number */}
        <div
          className="transition-opacity duration-250"
          style={{ opacity: fading ? 0 : 1 }}
          aria-live="polite"
          aria-atomic="true"
        >
          <p
            className="font-display text-white leading-none mb-4"
            style={{ fontSize: "clamp(5rem, 18vw, 10rem)", fontWeight: 700, letterSpacing: "-0.03em" }}
          >
            {current.stat}
          </p>
          <h3
            className="font-display mb-5"
            style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)", color: "rgba(255,255,255,0.65)", fontWeight: 500 }}
          >
            {current.title}
          </h3>
          {/* Thin divider */}
          <div className="flex justify-center mb-5" aria-hidden="true">
            <div className="h-px w-12 rounded-full" style={{ backgroundColor: "#5f1e42" }} />
          </div>
          <p className="text-sm md:text-base max-w-sm mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
            {current.description}
          </p>
        </div>

        {/* ── Controls ───────────────────────────────────────── */}
        <div className="flex items-center justify-center gap-8 mt-14">

          {/* Prev */}
          <button
            onClick={handlePrev}
            aria-label="Previous stat"
            className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:border-white/50 hover:text-white"
            style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.4)" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2.5" role="tablist" aria-label="Stat navigation">
            {stats.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDot(i)}
                role="tab"
                aria-selected={i === active}
                aria-label={`Stat ${i + 1}: ${stats[i].title}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? "24px" : "8px",
                  height: "8px",
                  backgroundColor: i === active ? "#5f1e42" : "rgba(255,255,255,0.25)",
                }}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={handleNext}
            aria-label="Next stat"
            className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:border-white/50 hover:text-white"
            style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.4)" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
}
