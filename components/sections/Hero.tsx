"use client";

import { useEffect, useRef } from "react";

const WHATSAPP_SALON =
  "https://wa.me/919845292411?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Chetana%27s%20Beauty%20Lounge.";

const GMB_URL =
  "https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TEqqKK6Kz7I0YLRSNagwTko0Nk00NksyTE0xT01OsTKoSLFMS820TTQzNbA0SjNLMvcST85ILUnMS1QvVkhKTSwtqVTIyS_NS08FAL8sGSg&q=chetana%27s+beauty+lounge&sourceid=chrome&ie=UTF-8";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=85&auto=format&fit=crop";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = heroRef.current?.querySelectorAll(".hero-reveal");
    if (!items) return;
    items.forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), 80 + i * 120);
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative bg-white"
      style={{ minHeight: "100svh" }}
      aria-label="Hero — Mangalore's best ladies salon"
    >
      {/* Spacer for fixed navbar */}
      <div style={{ paddingTop: "5.5rem" }} />

      {/* ── Hero Card ──────────────────────────────────────────── */}
      <div
        className="mx-3 sm:mx-5 lg:mx-8 overflow-hidden"
        style={{ borderRadius: "1.5rem", backgroundColor: "#f5f3ef" }}
      >
        <div
          className="flex flex-col lg:flex-row items-stretch"
          style={{ minHeight: "calc(100svh - 7rem)" }}
        >
          {/* ── Left: Text Content ─────────────────────────────── */}
          <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-12 lg:py-16 lg:w-[45%]">

            {/* Tag */}
            <p className="hero-reveal reveal text-xs font-medium tracking-widest uppercase text-[#999] mb-8">
              Since 1998 · CIDESCO Certified
            </p>

            {/* H1 */}
            <h1
              className="hero-reveal reveal reveal-delay-1 text-[#111111] mb-6"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.06,
                letterSpacing: "-0.025em",
              }}
            >
              Mangalore&apos;s Best{" "}
              <span className="text-[#5f1e42]">Ladies</span>{" "}
              Salon
            </h1>

            {/* Subtitle */}
            <p className="hero-reveal reveal reveal-delay-2 text-base text-[#777] leading-relaxed mb-10 max-w-md">
              Expert bridal makeup, advanced skin treatments &amp; a celebrated
              beauty academy — rooted in Kankanady, Mangalore since 1998.
            </p>

            {/* CTA */}
            <div className="hero-reveal reveal reveal-delay-3 mb-14">
              <a
                href={WHATSAPP_SALON}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-85 hover:-translate-y-0.5"
                style={{ backgroundColor: "#111111" }}
              >
                {/* Green glowing dot */}
                <span className="relative flex h-2.5 w-2.5 flex-shrink-0" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                Book a Call
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Social Proof */}
            <div className="hero-reveal reveal reveal-delay-4 flex flex-wrap items-center gap-3">
              {/* Google rating badge */}
              <a
                href={GMB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-white rounded-full px-4 py-2.5 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Google "G" logo */}
                <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 flex-shrink-0" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span className="text-sm font-bold text-[#111]">4.8</span>
                {/* Stars */}
                <span className="flex gap-0.5" aria-label="4.8 out of 5 stars">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-[#e8b80d]" aria-hidden="true">
                      <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.68l5.34-.78L10 1z" />
                    </svg>
                  ))}
                </span>
                <span className="text-xs text-[#999]">(315)</span>
              </a>

              {/* CIDESCO badge */}
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2.5 shadow-sm">
                {/* Green checkmark circle */}
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500 flex-shrink-0" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="white" className="w-3 h-3">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-[#111]">CIDESCO Certified</span>
              </div>
            </div>
          </div>

          {/* ── Right: Image ───────────────────────────────────── */}
          {/* Desktop — fills right 55% of card */}
          <div className="hidden lg:block lg:w-[55%] relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE}
              alt="Client enjoying a beauty treatment at Chetana's Beauty Lounge Mangaluru"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
          {/* Mobile — stacks below text */}
          <div className="lg:hidden w-full relative" style={{ aspectRatio: "4/3" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE}
              alt="Client enjoying a beauty treatment at Chetana's Beauty Lounge Mangaluru"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* ── Floating WhatsApp FAB ────────────────────────────── */}
      <a
        href={WHATSAPP_SALON}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-4 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
        style={{ background: "#25D366" }}
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L.057 23.882l6.199-1.435A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.997-1.366l-.358-.213-3.683.853.879-3.596-.234-.37A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
        </svg>
      </a>
    </section>
  );
}
