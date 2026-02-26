"use client";

import { useEffect, useRef } from "react";

const WHATSAPP_SALON =
  "https://wa.me/919845292411?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Chetana%27s%20Beauty%20Lounge.";

const GMB_URL =
  "https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TEqqKK6Kz7I0YLRSNagwTko0Nk00NksyTE0xT01OsTKoSLFMS000TTQzNbA0SjNLMvcST85ILUnMS1QvVkhKTSwtqVTIyS_NS08FAL8sGSg&q=chetana%27s+beauty+lounge&sourceid=chrome&ie=UTF-8";

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
      className="relative bg-white overflow-hidden"
      style={{ minHeight: "100svh" }}
      aria-label="Hero — Mangalore's best ladies salon"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
        style={{ minHeight: "100svh", paddingTop: "7rem", paddingBottom: "4rem" }}
      >

        {/* ── Left: Text (55%) ────────────────────────────── */}
        <div className="flex-1 w-full lg:max-w-[55%] flex flex-col justify-center">

          {/* Location label */}
          <div className="hero-reveal reveal mb-7">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[#888] border border-black/10 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5f1e42] inline-block" aria-hidden="true" />
              Since 1998 · Kankanady, Mangaluru
            </span>
          </div>

          {/* H1 */}
          <h1
            className="hero-reveal reveal reveal-delay-1 font-display text-[#111111] mb-7"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 700, lineHeight: 1.04, letterSpacing: "-0.02em" }}
          >
            Mangalore&apos;s Best{" "}
            <em className="text-[#5f1e42]" style={{ fontStyle: "italic" }}>
              Ladies
            </em>{" "}
            Salon
          </h1>

          {/* Subtitle */}
          <p className="hero-reveal reveal reveal-delay-2 text-base md:text-lg text-[#666] leading-relaxed mb-10 max-w-lg font-light">
            Expert bridal makeup, advanced skin treatments &amp; a celebrated beauty
            academy — rooted in Kankanady, Mangalore since 1998.
          </p>

          {/* CTAs */}
          <div className="hero-reveal reveal reveal-delay-3 flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-12">
            <a
              href={WHATSAPP_SALON}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-85 hover:-translate-y-0.5"
              style={{ backgroundColor: "#111111" }}
            >
              {/* WhatsApp icon */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L.057 23.882l6.199-1.435A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.997-1.366l-.358-.213-3.683.853.879-3.596-.234-.37A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
              </svg>
              Book via WhatsApp
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#111] border border-black/15 hover:border-black/30 transition-all"
            >
              View Services
            </a>
          </div>

          {/* Social proof chips */}
          <div className="hero-reveal reveal reveal-delay-4 flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-2 rounded-full px-4 py-2 text-sm" style={{ backgroundColor: "#F7F4F1" }}>
              <span className="font-semibold text-[#111]">32K+</span>
              <span className="text-[#888]">happy clients</span>
            </div>
            <span className="w-px h-4 bg-black/10" aria-hidden="true" />
            <a
              href={GMB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full px-4 py-2 text-sm hover:opacity-80 transition-opacity"
              style={{ backgroundColor: "#F7F4F1" }}
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#e8b80d] flex-shrink-0" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="font-semibold text-[#111]">4.8</span>
              <span className="text-[#888]">Google · 315 reviews</span>
            </a>
            <span className="w-px h-4 bg-black/10" aria-hidden="true" />
            <div className="flex items-center gap-2 rounded-full px-4 py-2 text-sm" style={{ backgroundColor: "#F7F4F1" }}>
              <span className="font-semibold text-[#5f1e42]">CIDESCO</span>
              <span className="text-[#888]">certified</span>
            </div>
          </div>
        </div>

        {/* ── Right: Image (45%) ───────────────────────────── */}
        <div className="hero-reveal reveal reveal-delay-2 w-full lg:w-auto lg:flex-shrink-0 lg:self-stretch flex items-center" style={{ maxWidth: "min(42%, 480px)" }}>
          <div
            className="relative w-full overflow-hidden shadow-2xl"
            style={{ borderRadius: "2rem", aspectRatio: "4/5", maxHeight: "82vh" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE}
              alt="Client enjoying a beauty treatment at Chetana's Beauty Lounge Mangaluru"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
            {/* Bottom gradient */}
            <div
              className="absolute bottom-0 left-0 right-0 h-2/5 pointer-events-none"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.22), transparent)" }}
              aria-hidden="true"
            />
            {/* Floating badge */}
            <div className="absolute bottom-5 left-4 right-4 pointer-events-none">
              <div
                className="inline-flex items-center gap-2.5 rounded-2xl px-4 py-3 shadow-lg"
                style={{ backgroundColor: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)" }}
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" aria-hidden="true" />
                <span className="text-xs font-semibold text-[#111]">Women-only · Mon–Sat 9AM–7PM</span>
              </div>
            </div>
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
