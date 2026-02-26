"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const WHATSAPP_SALON =
  "https://wa.me/919845292411?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Chetana%27s%20Beauty%20Lounge.";

const images = [
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=85&auto=format&fit=crop",
    alt: "Client having hair washed at a professional salon",
  },
  {
    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=85&auto=format&fit=crop",
    alt: "Relaxing skincare facial treatment in progress",
  },
  {
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=85&auto=format&fit=crop",
    alt: "Happy client with beautiful makeup looking radiant",
  },
];

const INTERVAL_MS = 5000;

export default function About() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const goTo = useCallback((idx: number) => {
    setFading(true);
    setTimeout(() => {
      setActive(idx);
      setFading(false);
    }, 300);
  }, []);

  const next = useCallback(() => {
    goTo((active + 1) % images.length);
  }, [active, goTo]);

  const prev = useCallback(() => {
    goTo((active - 1 + images.length) % images.length);
  }, [active, goTo]);

  useEffect(() => {
    timerRef.current = setInterval(next, INTERVAL_MS);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [next]);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, INTERVAL_MS);
  };

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: "#F7F4F1" }}
      aria-label="About Chetana's Beauty"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

        {/* ── Left: Text ──────────────────────────────────── */}
        <div className="flex-1 w-full lg:max-w-[52%]">

          <div className="reveal mb-4">
            <span className="section-label">About Us</span>
          </div>

          <h2
            className="reveal reveal-delay-1 font-display text-[#111111] mb-7"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 4rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            With us, you are<br />
            <em className="text-[#5f1e42]" style={{ fontStyle: "italic" }}>seen &amp; heard.</em>
          </h2>

          <p className="reveal reveal-delay-2 text-base md:text-lg text-[#666] leading-relaxed mb-5 max-w-lg font-light">
            Chetana&rsquo;s Beauty Lounge is Mangalore&rsquo;s most trusted ladies-only salon and beauty academy.
            CIDESCO-certified, rooted in Kankanady since 1998 — we&rsquo;ve served over 32,000 clients
            across bridal, skin, hair and wellness services.
          </p>

          <p className="reveal reveal-delay-2 text-base md:text-lg text-[#666] leading-relaxed mb-10 max-w-lg font-light">
            Every visit is a private, personalised experience. No rush, no compromise — just the best
            care for you, delivered by experts who truly listen.
          </p>

          <div className="reveal reveal-delay-3">
            <a
              href={WHATSAPP_SALON}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-85 hover:-translate-y-0.5"
              style={{ backgroundColor: "#111111" }}
            >
              Book an Appointment
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Right: Image carousel ────────────────────────── */}
        <div className="reveal reveal-delay-1 w-full lg:w-auto lg:flex-shrink-0" style={{ maxWidth: "min(46%, 440px)", width: "100%" }}>

          {/* Image container */}
          <div className="relative" style={{ aspectRatio: "4/5" }}>
            <div
              className="relative w-full h-full overflow-hidden shadow-xl"
              style={{ borderRadius: "2rem" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images[active].src}
                alt={images[active].alt}
                className="w-full h-full object-cover transition-opacity duration-300"
                style={{ opacity: fading ? 0 : 1 }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Prev button */}
            <button
              onClick={() => { resetTimer(); prev(); }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ backgroundColor: "rgba(255,255,255,0.88)", backdropFilter: "blur(6px)", boxShadow: "0 2px 12px rgba(0,0,0,0.12)" }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
                <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Next button */}
            <button
              onClick={() => { resetTimer(); next(); }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ backgroundColor: "rgba(255,255,255,0.88)", backdropFilter: "blur(6px)", boxShadow: "0 2px 12px rgba(0,0,0,0.12)" }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-5" role="tablist" aria-label="Image navigation">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => { resetTimer(); goTo(i); }}
                role="tab"
                aria-selected={i === active}
                aria-label={`Image ${i + 1}: ${img.alt}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? "24px" : "8px",
                  height: "8px",
                  backgroundColor: i === active ? "#5f1e42" : "rgba(0,0,0,0.2)",
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
