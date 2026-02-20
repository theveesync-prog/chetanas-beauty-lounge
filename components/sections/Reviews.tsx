"use client";

import { useEffect, useRef } from "react";

// ─── Placeholder Reviews ──────────────────────────────────────────────────────
// TODO: Replace these with real Google / JustDial reviews.
// Format:  { id, initials, bg, name, service, rating, text }
// Recommended: 6–8 reviews, mix of bridal + skin + hair + general.
const reviews = [
  {
    id: 1,
    initials: "A",
    bg: "#c4849a",
    name: "Ananya R.",
    service: "Bridal Makeup",
    rating: 5,
    text: "Absolutely stunning work for my Tulu wedding! The bridal look was exactly what I had dreamed of — flawless skin, perfect eye makeup and it lasted all day. Chetana ma'am has such an artist's eye.",
  },
  {
    id: 2,
    initials: "P",
    bg: "#b8860b",
    name: "Priya M.",
    service: "Keratin Treatment",
    rating: 5,
    text: "Had the keratin smoothing done here and my hair has never felt better. The team is highly skilled and explained each step. I've been coming back every 6 months for the past 3 years.",
  },
  {
    id: 3,
    initials: "S",
    bg: "#5f1e42",
    name: "Sheela D.",
    service: "Skin Treatment",
    rating: 5,
    text: "Came in for pigmentation and tan removal. After just 3 sessions my skin tone has evened out significantly. The products they use are top-quality and safe. Very satisfied!",
  },
  {
    id: 4,
    initials: "N",
    bg: "#8b4b6b",
    name: "Nisha K.",
    service: "Pre-Bridal Package",
    rating: 5,
    text: "Booked the 3-month pre-bridal package for my Konkani wedding. Every session was so relaxing and the results are visible. My skin literally glowed on my wedding day. Highly recommend!",
  },
  {
    id: 5,
    initials: "R",
    bg: "#9b7048",
    name: "Roshni A.",
    service: "Hair Colouring",
    rating: 5,
    text: "Got highlights and balayage done here. The colourist matched my skin tone perfectly and the colour has held so well. Staff are professional, courteous and the salon is beautifully maintained.",
  },
  {
    id: 6,
    initials: "D",
    bg: "#4a7a8b",
    name: "Divya S.",
    service: "Nail Art",
    rating: 5,
    text: "The nail art designs here are so creative and detailed. I get my nails done here before every event and they always exceed my expectations. Love the women-only environment too — so comfortable.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`w-3.5 h-3.5 ${i < count ? "fill-[#e8b80d]" : "fill-[#e8b80d]/20"}`}
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="py-16 md:py-24 px-4"
      style={{ backgroundColor: "#f9f5f0" }}
      aria-label="Client reviews of Chetana's Beauty"
    >
      <div className="max-w-7xl mx-auto">

        {/* ─── Section header ──── */}
        <div className="reveal mb-3">
          <span className="section-label">Reviews</span>
        </div>
        <div className="reveal reveal-delay-1 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1a0d0d] leading-tight max-w-xl">
            What our clients say about{" "}
            <em className="italic text-[#5f1e42]">Chetana&apos;s</em>
          </h2>
          {/* Platform rating badges */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="flex flex-col items-center bg-white rounded-xl px-4 py-2.5 shadow-sm border border-[#e8b80d]/20">
              <span className="font-display text-2xl font-semibold text-[#5f1e42] leading-none">4.5</span>
              <StarRating count={5} />
              <span className="text-[10px] text-[#8c7b72] mt-0.5 tracking-wide">JustDial</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl px-4 py-2.5 shadow-sm border border-[#e8b80d]/20">
              <span className="font-display text-2xl font-semibold text-[#5f1e42] leading-none">315+</span>
              <span className="text-[10px] text-[#8c7b72] mt-1 tracking-wide">Ratings</span>
            </div>
          </div>
        </div>

        {/* ─── Review cards grid ──── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {reviews.map((review, i) => (
            <article
              key={review.id}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} card-hover bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-[#5f1e42]/5 flex flex-col gap-4`}
              aria-label={`Review by ${review.name}`}
            >
              {/* Top row: avatar + stars */}
              <div className="flex items-start justify-between gap-3">
                {/* Avatar */}
                {/*
                  TODO: Replace the initials circle with a real photo.
                  Use <img src="/images/reviewer-X.jpg" alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0 shadow-sm"
                  style={{ backgroundColor: review.bg }}
                  aria-hidden="true"
                >
                  {review.initials}
                </div>
                <StarRating count={review.rating} />
              </div>

              {/* Review text */}
              <p className="text-[#4a3a3a] text-sm leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Gold thin divider */}
              <div
                className="h-px w-8 rounded-full"
                style={{ background: "linear-gradient(90deg, #e8b80d, #f6dd86)" }}
                aria-hidden="true"
              />

              {/* Reviewer name + service */}
              <div>
                <p className="font-semibold text-[#1a0d0d] text-sm">{review.name}</p>
                <p className="text-[#8c7b72] text-xs mt-0.5">{review.service}</p>
              </div>
            </article>
          ))}
        </div>

        {/* ─── CTA below grid ──── */}
        <div className="reveal mt-10 text-center">
          <a
            href="https://www.justdial.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#5f1e42] border border-[#5f1e42]/25 rounded-full px-6 py-2.5 hover:bg-[#5f1e42]/5 transition-colors"
            aria-label="View all reviews on JustDial"
          >
            Read all 315+ reviews
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
