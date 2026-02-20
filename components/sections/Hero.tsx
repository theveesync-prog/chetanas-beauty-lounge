"use client";

import { useEffect, useRef } from "react";

const WHATSAPP_SALON =
  "https://wa.me/919845292411?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Chetana%27s%20Beauty%20Lounge.";

// Avatar placeholder colors — swap src="/images/avatar-X.jpg" once real photos are available
const avatars = [
  { id: 1, initials: "A", bg: "#c4849a" },
  { id: 2, initials: "P", bg: "#b8860b" },
  { id: 3, initials: "R", bg: "#8b4b6b" },
  { id: 4, initials: "S", bg: "#5f1e42" },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  // Staggered entrance animation
  useEffect(() => {
    const items = heroRef.current?.querySelectorAll(".hero-reveal");
    if (!items) return;
    items.forEach((el, i) => {
      setTimeout(
        () => el.classList.add("visible"),
        120 + i * 140
      );
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 px-4"
      aria-label="Hero — Mangalore's best ladies salon"
    >
      {/* ─── Background ──────────────────────────────── */}
      {/* Soft warm gradient base */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #fdf0e6 0%, #fdf8f5 60%, #fdf8f5 100%)",
        }}
        aria-hidden="true"
      />
      {/* Decorative large circle — top right */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full -z-10 opacity-10"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #e8b80d, #5f1e42)",
        }}
        aria-hidden="true"
      />
      {/* Decorative small circle — bottom left */}
      <div
        className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full -z-10 opacity-8"
        style={{ background: "#5f1e42" }}
        aria-hidden="true"
      />

      {/* ─── Content ─────────────────────────────────── */}
      <div className="w-full max-w-4xl mx-auto text-center space-y-6 md:space-y-8">

        {/* Social proof row */}
        <div className="hero-reveal reveal flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {/* Overlapping avatars */}
          {/*
            TODO: Replace placeholder circles with real client photos.
            Use <img src="/images/avatar-X.jpg" alt="..." /> inside each circle.
            Recommended size: 40×40px (80×80 @2x), circular crop.
          */}
          <div className="flex items-center -space-x-2.5" aria-label="Happy clients">
            {avatars.map((av) => (
              <div
                key={av.id}
                className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold flex-shrink-0 shadow-sm"
                style={{ backgroundColor: av.bg }}
                aria-hidden="true"
              >
                {av.initials}
              </div>
            ))}
          </div>

          {/* Customer count */}
          <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm border border-[#5f1e42]/8 rounded-full px-3.5 py-1.5 shadow-sm">
            <span className="text-sm font-semibold text-[#5f1e42]">32K+</span>
            <span className="text-sm text-[#8c7b72]">Happy Customers</span>
          </div>

          {/* Divider */}
          <span className="hidden sm:block w-px h-5 bg-[#5f1e42]/15" aria-hidden="true" />

          {/* JustDial rating chip */}
          <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm border border-[#e8b80d]/30 rounded-full px-3.5 py-1.5 shadow-sm">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#e8b80d]" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-sm font-semibold text-[#3a1a00]">4.5/5</span>
            <span className="text-xs text-[#8c7b72]">JustDial · 315 ratings</span>
          </div>
        </div>

        {/* H1 — SEO: "best ladies salon Mangalore" */}
        <h1 className="hero-reveal reveal reveal-delay-1 font-display text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight text-[#1a0d0d]">
          Mangalore&apos;s Best{" "}
          <em className="italic text-[#5f1e42] not-italic" style={{ fontStyle: "italic" }}>
            Ladies
          </em>{" "}
          Salon
        </h1>

        {/* Subtitle */}
        <p className="hero-reveal reveal reveal-delay-2 max-w-xl mx-auto text-base md:text-lg text-[#8c7b72] leading-relaxed font-light">
          Expert bridal makeup, advanced skin treatments &amp; a celebrated beauty
          academy — rooted in Kankanady, Mangalore since 1998.
        </p>

        {/* CTA buttons */}
        <div className="hero-reveal reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
          {/* Primary — WhatsApp */}
          <a
            href={WHATSAPP_SALON}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-sm font-semibold shadow-md w-full sm:w-auto justify-center"
          >
            {/* WhatsApp icon */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L.057 23.882l6.199-1.435A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.997-1.366l-.358-.213-3.683.853.879-3.596-.234-.37A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
            </svg>
            Book Your Appointment — WhatsApp Us Now
          </a>

          {/* Secondary — View Services */}
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold border border-[#5f1e42]/25 text-[#5f1e42] hover:bg-[#5f1e42]/5 transition-colors w-full sm:w-auto justify-center"
          >
            View Our Services
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* ─── Hero Image Placeholder ─────────────────── */}
        {/*
          TODO: Replace this placeholder with a real salon/bridal hero image.
          Recommended: a high-quality photo of the salon interior or a bridal look.
          Format: hero-image-mangalore-chetanas-01.jpg
          Dimensions: 1200×700px minimum, 16:9 or 3:2 ratio.
          Use <Image> from next/image with priority={true} loading="eager".
        */}
        <div
          className="hero-reveal reveal reveal-delay-4 relative mt-6 mx-auto w-full max-w-3xl rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
          style={{ aspectRatio: "16/7" }}
          role="img"
          aria-label="Chetana's Beauty salon — hero image placeholder"
        >
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
            style={{
              background:
                "linear-gradient(135deg, #f5ece4 0%, #fdf0e6 40%, #f0ddd0 100%)",
            }}
          >
            {/* Decorative ornamental element */}
            <div className="flex items-center gap-4 opacity-40">
              <div className="h-px w-16 bg-[#b8860b]" />
              <svg viewBox="0 0 40 40" className="w-8 h-8 fill-[#b8860b]" aria-hidden="true">
                <path d="M20 4 L22 14 L32 14 L24 20 L27 30 L20 24 L13 30 L16 20 L8 14 L18 14 Z" />
              </svg>
              <div className="h-px w-16 bg-[#b8860b]" />
            </div>
            <p className="text-[#8c7b72] text-sm font-medium tracking-widest uppercase">
              Add Hero Image Here
            </p>
            <p className="text-[#8c7b72]/60 text-xs">
              Recommended: 1200 × 700 px · /images/hero-mangalore-chetanas-01.jpg
            </p>
          </div>
        </div>

      </div>

      {/* ─── Floating WhatsApp Button ─────────────────── */}
      <a
        href={WHATSAPP_SALON}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-4 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
        style={{ background: "#25D366" }}
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L.057 23.882l6.199-1.435A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.997-1.366l-.358-.213-3.683.853.879-3.596-.234-.37A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
        </svg>
      </a>

    </section>
  );
}
