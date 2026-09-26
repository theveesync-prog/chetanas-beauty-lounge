"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const WHATSAPP_SALON =
  "https://wa.me/919845292411?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Chetana%27s%20Beauty%20Lounge.";

const GMB_URL =
  "https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TEqqKK6Kz7I0YLRSNagwTko0Nk00NksyTE0xT01OsTKoSLFMS820TTQzNbA0SjNLMvcST85ILUnMS1QvVkhKTSwtqVTIyS_NS08FAL8sGSg&q=chetana%27s+beauty+lounge&sourceid=chrome&ie=UTF-8";

// Editorial slideshow — rotates through client work
const HERO_IMAGES = [
  { src: "/images/hero/hero-editorial-1.webp", alt: "Bridal makeup and hairstyling by Chetana's Beauty Lounge, Mangalore" },
  { src: "/images/hero/hero-editorial-2.webp", alt: "Editorial hairstyling and makeup by Chetana's Beauty Lounge, Mangalore" },
  { src: "/images/hero/hero-editorial-3.webp", alt: "Bridal hairstyling with feather headpiece by Chetana's Beauty Lounge, Mangalore" },
  { src: "/images/hero/hero-editorial-4.webp", alt: "Party makeup and styling by Chetana's Beauty Lounge, Mangalore" },
];

const SLIDE_INTERVAL_MS = 4500;

// Card warm off-white — matches reference
const CARD_BG = "#F2F0EC";

const AVATAR_URLS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&q=80&auto=format&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&q=80&auto=format&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&q=80&auto=format&fit=crop&crop=faces",
];

function GoogleWreathIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-8 h-8 flex-shrink-0" aria-hidden="true">
      <circle cx="20" cy="20" r="18" fill="none" stroke="#dadce0" strokeWidth="1.5" />
      <text x="20" y="25" textAnchor="middle" fontSize="14" fill="#4285F4" fontFamily="sans-serif" fontWeight="700">G</text>
    </svg>
  );
}

function CheckBadgeIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-8 h-8 flex-shrink-0" aria-hidden="true">
      <circle cx="20" cy="20" r="18" fill="none" stroke="#dadce0" strokeWidth="1.5" />
      <path d="M13 20l5 5 9-9" fill="none" stroke="#34A853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const slideTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const items = heroRef.current?.querySelectorAll(".hero-reveal");
    if (!items) return;
    items.forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), 80 + i * 120);
    });
  }, []);

  const goToSlide = useCallback((idx: number) => {
    setActiveSlide(idx);
  }, []);

  useEffect(() => {
    slideTimerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, SLIDE_INTERVAL_MS);
    return () => {
      if (slideTimerRef.current) clearInterval(slideTimerRef.current);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="bg-white"
      style={{ paddingTop: "5.5rem", paddingBottom: "3rem" }}
      aria-label="Hero — Mangalore's best ladies salon"
    >
      {/* ═══════════════════════════════════════════════════════════
          DESKTOP CARD (lg+)
          Sits inside page with horizontal margins — rounded card
          ═══════════════════════════════════════════════════════════ */}
      <div
        className="hidden lg:block relative overflow-hidden"
        style={{
          marginLeft: "2.5rem",
          marginRight: "2.5rem",
          borderRadius: "2rem",
          backgroundColor: CARD_BG,
          height: "620px",
        }}
      >
        {/* ── Layer 1 (z-1): Image slideshow — fills right 65% of the card ── */}
        <div
          className="absolute top-0 bottom-0 right-0"
          style={{ width: "65%", zIndex: 1 }}
        >
          {HERO_IMAGES.map((img, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
              style={{ objectPosition: "center top", opacity: i === activeSlide ? 1 : 0 }}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          ))}
          {/* Gradient: blends image into card bg on the left */}
          <div
            className="absolute inset-y-0 left-0"
            style={{
              width: "40%",
              zIndex: 2,
              background: `linear-gradient(to right, ${CARD_BG} 0%, ${CARD_BG}cc 30%, transparent 100%)`,
              pointerEvents: "none",
            }}
            aria-hidden="true"
          />
          {/* Slide dots */}
          <div
            className="absolute bottom-5 right-6 flex items-center gap-1.5"
            style={{ zIndex: 3 }}
            role="tablist"
            aria-label="Photo slideshow navigation"
          >
            {HERO_IMAGES.map((img, i) => (
              <button
                key={img.src}
                onClick={() => goToSlide(i)}
                role="tab"
                aria-selected={i === activeSlide}
                aria-label={`Slide ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeSlide ? "18px" : "6px",
                  height: "6px",
                  backgroundColor: i === activeSlide ? "#fff" : "rgba(255,255,255,0.5)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
                }}
              />
            ))}
          </div>
        </div>

        {/* ── Layer 2 (z-2): Text content — left portion ── */}
        <div
          className="absolute top-0 bottom-0 left-0 flex flex-col justify-center"
          style={{ width: "55%", zIndex: 2, padding: "3.5rem 3.5rem 7rem" }}
        >
          {/* H1 */}
          <h1
            className="hero-reveal reveal text-[#2d2d2d] mb-5"
            style={{
              fontFamily: "var(--font-instrument-serif)",
              fontSize: "clamp(3.5rem, 6vw, 5.5rem)",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
            }}
          >
            Mangalore&apos;s Most Trusted Ladies Salon, <em style={{ fontStyle: "italic" }}>Since 1998</em>
          </h1>

          {/* Subtitle */}
          <p
            className="hero-reveal reveal reveal-delay-1 leading-relaxed mb-10 max-w-xs"
            style={{ fontFamily: "var(--font-raleway)", fontSize: "15px", color: "#666" }}
          >
            Bridal makeup, advanced skin care and quiet pampering in Kankanady, led by
            CIDESCO-certified Chetana Salian. Three generations of Mangalore women have
            trusted her hands. Now it&apos;s your turn.
          </p>

          {/* CTA — dark pill with green glowing dot */}
          <div className="hero-reveal reveal reveal-delay-2">
            <a
              href={WHATSAPP_SALON}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-85 hover:-translate-y-0.5"
              style={{ backgroundColor: "#111111" }}
            >
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              Book a Call
            </a>
          </div>
        </div>

        {/* ── Layer 3 (z-3): Social proof bar — pinned to bottom ── */}
        <div
          className="hero-reveal reveal reveal-delay-3 absolute bottom-0 left-0 flex items-center gap-5"
          style={{ zIndex: 3, padding: "1.75rem 3.5rem" }}
        >
          {/* Google rating */}
          <a
            href={GMB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:opacity-75 transition-opacity"
          >
            <GoogleWreathIcon />
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} viewBox="0 0 20 20" className="w-3 h-3 fill-[#e8b80d]" aria-hidden="true">
                    <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.68l5.34-.78L10 1z" />
                  </svg>
                ))}
              </div>
              {/* Overlapping avatars */}
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {AVATAR_URLS.map((src, i) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={i}
                      src={src}
                      alt=""
                      aria-hidden="true"
                      className="w-5 h-5 rounded-full border border-white object-cover"
                      style={{ marginLeft: i === 0 ? 0 : "-5px", position: "relative", zIndex: 3 - i }}
                    />
                  ))}
                </div>
                <span className="text-xs text-[#888]">(315)</span>
              </div>
            </div>
          </a>

          {/* Divider */}
          <span className="w-px h-10 bg-black/10 flex-shrink-0" aria-hidden="true" />

          {/* CIDESCO certification */}
          <div className="flex items-center gap-3">
            <CheckBadgeIcon />
            <div>
              <p className="text-xs font-semibold text-[#333] leading-tight">CIDESCO</p>
              <p className="text-xs text-[#888] leading-tight">Certified salon</p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          MOBILE CARD (< lg)
          Stacked: text top, image bottom, badges below
          ═══════════════════════════════════════════════════════════ */}
      <div
        className="lg:hidden mx-3 sm:mx-5 overflow-hidden"
        style={{ borderRadius: "1.5rem", backgroundColor: CARD_BG }}
      >
        {/* Text block */}
        <div className="px-8 pt-10 pb-6">

          <p
            className="hero-reveal reveal text-[#2d2d2d] mb-4"
            style={{
              fontFamily: "var(--font-instrument-serif)",
              fontSize: "clamp(2.6rem, 9vw, 3.5rem)",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            Mangalore&apos;s Most Trusted Ladies Salon, <em style={{ fontStyle: "italic" }}>Since 1998</em>
          </p>
          <p
            className="hero-reveal reveal reveal-delay-1 text-sm leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-raleway)", color: "#666" }}
          >
            Bridal makeup, advanced skin care and quiet pampering in Kankanady, led by
            CIDESCO-certified Chetana Salian. Three generations of Mangalore women have
            trusted her hands. Now it&apos;s your turn.
          </p>
          <div className="hero-reveal reveal reveal-delay-2">
            <a
              href={WHATSAPP_SALON}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-85"
              style={{ backgroundColor: "#111111" }}
            >
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              Book a Call
            </a>
          </div>
        </div>

        {/* Image slideshow */}
        <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
          {HERO_IMAGES.map((img, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
              style={{ objectPosition: "center top", opacity: i === activeSlide ? 1 : 0 }}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          ))}
          {/* Slide dots */}
          <div
            className="absolute bottom-3 right-4 flex items-center gap-1.5"
            role="tablist"
            aria-label="Photo slideshow navigation"
          >
            {HERO_IMAGES.map((img, i) => (
              <button
                key={img.src}
                onClick={() => goToSlide(i)}
                role="tab"
                aria-selected={i === activeSlide}
                aria-label={`Slide ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeSlide ? "16px" : "6px",
                  height: "6px",
                  backgroundColor: i === activeSlide ? "#fff" : "rgba(255,255,255,0.5)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Social proof */}
        <div className="hero-reveal reveal reveal-delay-3 px-8 py-5 flex flex-wrap items-center gap-4">
          <a href={GMB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <GoogleWreathIcon />
            <div>
              <div className="flex items-center gap-0.5 mb-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} viewBox="0 0 20 20" className="w-3 h-3 fill-[#e8b80d]" aria-hidden="true">
                    <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.68l5.34-.78L10 1z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-[#888]">Rated on Google (315)</p>
            </div>
          </a>
          <span className="w-px h-10 bg-black/10" aria-hidden="true" />
          <div className="flex items-center gap-2">
            <CheckBadgeIcon />
            <div>
              <p className="text-xs font-semibold text-[#333] leading-tight">CIDESCO</p>
              <p className="text-xs text-[#888] leading-tight">Certified salon</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Floating WhatsApp FAB ── */}
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
