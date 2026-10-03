"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";

const WHATSAPP_SALON =
  "https://wa.me/919845292411?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Chetana%27s%20Beauty%20Lounge.";

const images = [
  {
    src: "/images/salon/salon-interior-lounge.webp",
    alt: "Chetana's Beauty Lounge reception and waiting area in Kankanady, Mangalore",
  },
  {
    src: "/images/salon/salon-hair-wash-stations.webp",
    alt: "Hair wash and pedicure stations at Chetana's Beauty Lounge Mangalore",
  },
  {
    src: "/images/salon/salon-storefront-entrance.webp",
    alt: "Chetana's Beauty Lounge storefront entrance in Kankanady, Mangalore",
  },
  {
    src: "/images/salon/salon-mirror-stations.webp",
    alt: "Salon interior with styling stations at Chetana's Beauty Lounge, Mangalore's best ladies salon",
  },
];

const INTERVAL_MS = 5000;

const aboutFaqs = [
  {
    question: "We Adapt to Your Needs",
    answer:
      "We understand every client has her own schedule. If needed, we can start earlier, stay open past closing, or arrange an appointment ahead of an important event. Our aim is for the salon to fit into your life, not the other way round.",
  },
  {
    question: "We Value Your Time",
    answer:
      "We can combine 2 to 3 services into a single appointment, hair, nails, makeup or skincare. This is ideal if you want the full result without spending half a day at the salon.",
  },
  {
    question: "One Standard, Every Visit",
    answer:
      "Chetana's is not just a group of individual stylists, but a system. We hold internal standards for service, consultation, cleanliness, communication and quality, so every guest gets a consistent experience with every artist, at every visit.",
  },
  {
    question: "We Care About Safety",
    answer:
      "We use a professional instrument sterilisation system, including medical-grade autoclaves. For us, client safety is not just a detail, but a mandatory standard.",
  },
  {
    question: "We Train Our Specialists",
    answer:
      "We invest in ongoing internal training so our stylists and therapists stay current on technique and follow one consistent standard of service. This helps us maintain the professional calibre of our team and keep our approach consistent.",
  },
  {
    question: "We Monitor Quality",
    answer:
      "We have a dedicated quality assurance process. If you have any comments, suggestions or questions after your visit, we welcome them. Our team will look into the matter and find a solution.",
  },
];

export default function About() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const [revealed, setRevealed] = useState(false);
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
      ([entry]) => entry.isIntersecting && setRevealed(true),
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-24"
      style={{ backgroundColor: "#ffffff" }}
      aria-label="About Chetana's Beauty"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

        {/* ── Left: Text ──────────────────────────────────── */}
        <div className="flex-1 w-full lg:max-w-[52%]">

          <h2
            className={`reveal reveal-delay-1 text-[#111111] mb-7 ${revealed ? "visible" : ""}`}
            style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontSize: "clamp(2.5rem, 5.5vw, 4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            With us, you are<br />
            <em className="text-[#5f1e42]" style={{ fontStyle: "italic" }}>seen &amp; heard.</em>
          </h2>

          <p className={`reveal reveal-delay-2 text-base md:text-lg text-[#666] leading-relaxed mb-5 max-w-lg font-light ${revealed ? "visible" : ""}`}>
            Chetana&rsquo;s Beauty Lounge is Mangalore&rsquo;s most trusted ladies-only salon and spa.
            CIDESCO-certified, rooted in Kankanady since 1998, we&rsquo;ve served 15,000+
            clients across bridal, skin, hair and wellness services.
          </p>

          <p className={`reveal reveal-delay-2 text-base md:text-lg text-[#666] leading-relaxed mb-10 max-w-lg font-light ${revealed ? "visible" : ""}`}>
            Every visit is a private, personalised experience. No rush, no compromise, just the best
            care for you, delivered by experts who truly listen.
          </p>

          <div className={`reveal reveal-delay-3 ${revealed ? "visible" : ""}`}>
            <a
              href={WHATSAPP_SALON}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition hover:opacity-85 hover:-translate-y-0.5"
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
        <div className={`reveal reveal-delay-1 w-full lg:w-[min(46%,440px)] lg:flex-shrink-0 ${revealed ? "visible" : ""}`}>

          {/* Image container */}
          <div className="relative aspect-[4/3] lg:aspect-[4/5]">
            <div
              className="relative w-full h-full overflow-hidden shadow-xl"
              style={{ borderRadius: "2rem" }}
            >
              <Image
                src={images[active].src}
                alt={images[active].alt}
                fill
                sizes="(min-width: 1024px) 440px, 100vw"
                className="object-cover transition-opacity duration-300"
                style={{ opacity: fading ? 0 : 1 }}
              />
            </div>

            {/* Prev button */}
            <button
              onClick={() => { resetTimer(); prev(); }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition hover:scale-110"
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
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition hover:scale-110"
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

      {/* ── What You Can Expect (accordion) ──────────────── */}
      <div className={`reveal reveal-delay-4 max-w-3xl mx-auto mt-16 lg:mt-20 ${revealed ? "visible" : ""}`}>
        <h3
          className="text-[#111111] mb-6 text-center"
          style={{
            fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
            fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
            fontWeight: 800,
            letterSpacing: "-0.015em",
          }}
        >
          What You Can Expect
        </h3>
        <FAQAccordion faqs={aboutFaqs} />
      </div>
    </section>
  );
}
