"use client";

import { useState, useEffect, useRef } from "react";

const GMB_URL =
  "https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TEqqKK6Kz7I0YLRSNagwTko0Nk00NksyTE0xT01OsTKoSLFMS000TTQzNbA0SjNLMvcST85ILUnMS1QvVkhKTSwtqVTIyS_NS08FAL8sGSg&q=chetana%27s+beauty+lounge&sourceid=chrome&ie=UTF-8";

const reviews = [
  { id: 1, initials: "A", bg: "#c4849a", name: "Ananya R.", service: "Bridal Makeup", rating: 5, text: "Absolutely stunning work for my Tulu wedding! The bridal look was exactly what I had dreamed of — flawless skin, perfect eye makeup and it lasted all day. Chetana ma'am has such an artist's eye." },
  { id: 2, initials: "P", bg: "#b8860b", name: "Priya M.", service: "Keratin Treatment", rating: 5, text: "Had the keratin smoothing done here and my hair has never felt better. The team is highly skilled and explained each step. I've been coming back every 6 months for the past 3 years!" },
  { id: 3, initials: "S", bg: "#5f1e42", name: "Sheela D.", service: "Skin Treatment", rating: 5, text: "Came in for pigmentation and tan removal. After just 3 sessions my skin tone has evened out significantly. The products they use are top-quality and very safe." },
  { id: 4, initials: "N", bg: "#8b4b6b", name: "Nisha K.", service: "Pre-Bridal Package", rating: 5, text: "Booked the 3-month pre-bridal package for my Konkani wedding. Every session was relaxing and results are so visible. My skin literally glowed on my wedding day. Cannot recommend enough!" },
  { id: 5, initials: "R", bg: "#9b7048", name: "Roshni A.", service: "Hair Colouring", rating: 5, text: "Got highlights and balayage done here. The colourist matched my skin tone perfectly and the colour has held so well. Staff are professional, courteous and the salon is beautifully maintained." },
  { id: 6, initials: "D", bg: "#4a7a8b", name: "Divya S.", service: "Nail Art", rating: 5, text: "The nail art designs here are so creative and detailed. I get my nails done here before every event and they always exceed my expectations. Love the women-only environment — so comfortable!" },
  { id: 7, initials: "M", bg: "#2d6a4a", name: "Meena T.", service: "Spa Body Polishing", rating: 5, text: "The A-Z spa package is absolutely divine. I came in for the full body treatment and left completely rejuvenated. The therapists were professional and the experience was truly luxurious." },
  { id: 8, initials: "V", bg: "#3d4a8b", name: "Vidya P.", service: "HD Bridal Package", rating: 5, text: "Booked the Royal Bridal Package for my daughter's wedding — we couldn't be happier. From the makeup to the saree draping, every detail was perfect." },
];

const n = reviews.length;

function getRelPos(index: number, active: number): number {
  let rel = ((index - active) % n + n) % n;
  if (rel > n / 2) rel -= n;
  return rel;
}

function getCardStyle(rel: number): React.CSSProperties {
  const OFFSET = 66;
  if (rel === 0) {
    return {
      transform: "translateX(-50%) translateX(0) scale(1)",
      opacity: 1,
      zIndex: 10,
      pointerEvents: "auto",
      boxShadow: "0 20px 60px rgba(0,0,0,0.11)",
    };
  }
  if (rel === -1 || rel === 1) {
    return {
      transform: `translateX(-50%) translateX(${rel * OFFSET}%) scale(0.87)`,
      opacity: 0.5,
      zIndex: 5,
      pointerEvents: "none",
      boxShadow: "none",
    };
  }
  return {
    transform: `translateX(-50%) translateX(${rel * OFFSET}%) scale(0.74)`,
    opacity: 0,
    zIndex: 1,
    pointerEvents: "none",
    boxShadow: "none",
  };
}

function StarRating() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 fill-[#e8b80d]" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" className="flex-shrink-0">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function ReviewCard({ review }: { review: typeof reviews[number] }) {
  return (
    <article
      className="w-full bg-white rounded-3xl p-8 flex flex-col gap-5"
      style={{ minHeight: "280px" }}
      aria-label={`Review by ${review.name}`}
    >
      {/* Top row: stars + Google icon */}
      <div className="flex items-center justify-between">
        <StarRating />
        <GoogleIcon />
      </div>

      {/* Review text */}
      <p
        className="flex-1 text-[#111] leading-relaxed"
        style={{ fontSize: "1rem", fontFamily: "var(--font-sans)" }}
      >
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Divider */}
      <div className="h-px bg-black/7 rounded-full" aria-hidden="true" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0"
          style={{ backgroundColor: review.bg }}
          aria-hidden="true"
        >
          {review.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-[#111] leading-none">{review.name}</p>
          <p className="text-xs text-[#999] mt-1">{review.service}</p>
        </div>
      </div>
    </article>
  );
}

export default function Reviews() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Reveal animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.06 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const prev = () => setActive((active - 1 + n) % n);
  const next = () => setActive((active + 1) % n);

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="py-24 md:py-32 bg-white overflow-hidden"
      aria-label="Client reviews of Chetana's Beauty"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="text-center mb-16 md:mb-20">
          <div className="reveal mb-4 flex justify-center">
            <span className="section-label">Reviews</span>
          </div>

          <h2
            className="reveal reveal-delay-1 text-[#111111] mb-5"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            The wall of{" "}
            <em className="text-[#5f1e42]" style={{ fontStyle: "italic" }}>appreciation</em>
          </h2>

          <p className="reveal reveal-delay-2 text-base text-[#888] max-w-md mx-auto">
            Real stories from real clients — from bridal transformations to everyday care.
          </p>
        </div>
      </div>

      {/* ── Carousel (full bleed, no px padding so side cards bleed to edges) ── */}
      <div
        role="region"
        aria-label="Client reviews carousel"
        className="relative"
        style={{ height: "340px" }}
      >
        {reviews.map((review, i) => {
          const rel = getRelPos(i, active);
          const cardStyle = getCardStyle(rel);

          return (
            <div
              key={review.id}
              className="absolute top-0 left-1/2 w-full"
              style={{
                maxWidth: "520px",
                ...cardStyle,
                transition:
                  "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease, box-shadow 0.4s ease",
              }}
              aria-hidden={rel !== 0}
            >
              <ReviewCard review={review} />
            </div>
          );
        })}
      </div>

      {/* ── Navigation: arrows + dots ──────────────────────── */}
      <div className="flex items-center justify-center gap-5 mt-10">
        {/* Prev arrow */}
        <button
          onClick={prev}
          aria-label="Previous review"
          className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:bg-[#111] hover:text-white hover:border-[#111] text-[#444]"
          style={{ borderColor: "rgba(0,0,0,0.15)" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-2" role="tablist" aria-label="Review navigation">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              role="tab"
              aria-selected={i === active}
              aria-label={`Review ${i + 1}: ${reviews[i].name}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? "20px" : "7px",
                height: "7px",
                backgroundColor: i === active ? "#5f1e42" : "#ddd",
              }}
            />
          ))}
        </div>

        {/* Next arrow */}
        <button
          onClick={next}
          aria-label="Next review"
          className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:bg-[#111] hover:text-white hover:border-[#111] text-[#444]"
          style={{ borderColor: "rgba(0,0,0,0.15)" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* ── Read more reviews CTA ───────────────────────────── */}
      <div className="flex justify-center mt-8">
        <a
          href={GMB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold border transition-all hover:bg-[#111] hover:text-white hover:border-[#111] hover:-translate-y-0.5 text-[#111]"
          style={{ borderColor: "rgba(0,0,0,0.12)" }}
        >
          Read more reviews
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5" aria-hidden="true">
            <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
