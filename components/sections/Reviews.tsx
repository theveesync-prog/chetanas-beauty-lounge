"use client";

import { useEffect, useRef } from "react";

const GMB_URL =
  "https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TEqqKK6Kz7I0YLRSNagwTko0Nk00NksyTE0xT01OsTKoSLFMS000TTQzNbA0SjNLMvcST85ILUnMS1QvVkhKTSwtqVTIyS_NS08FAL8sGSg&q=chetana%27s+beauty+lounge&oq=c&gs_lcrp=EgZjaHJvbWUqEggBEC4YJxivARjHARiABBiKBTIPCAAQIxgnGOMCGIAEGIoFMhIIARAuGCcYrwEYxwEYgAQYigUyBggCEEUYOzIGCAMQRRg8MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxAFGEDSAQgxOTM4ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8";

// ─── Reviews data ─────────────────────────────────────────────────────────────
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
    text: "Had the keratin smoothing done here and my hair has never felt better. The team is highly skilled and explained each step. I've been coming back every 6 months for the past 3 years!",
  },
  {
    id: 3,
    initials: "S",
    bg: "#5f1e42",
    name: "Sheela D.",
    service: "Skin Treatment",
    rating: 5,
    text: "Came in for pigmentation and tan removal. After just 3 sessions my skin tone has evened out significantly. The products they use are top-quality and very safe. Extremely satisfied!",
  },
  {
    id: 4,
    initials: "N",
    bg: "#8b4b6b",
    name: "Nisha K.",
    service: "Pre-Bridal Package",
    rating: 5,
    text: "Booked the 3-month pre-bridal package for my Konkani wedding. Every session was relaxing and results are so visible. My skin literally glowed on my wedding day. Cannot recommend enough!",
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
    text: "The nail art designs here are so creative and detailed. I get my nails done here before every event and they always exceed my expectations. Love the women-only environment — so comfortable!",
  },
  {
    id: 7,
    initials: "M",
    bg: "#2d6a4a",
    name: "Meena T.",
    service: "Spa Body Polishing",
    rating: 5,
    text: "The A-Z spa package is absolutely divine. I came in for the full body treatment and left completely rejuvenated. The therapists were professional and the experience was truly luxurious.",
  },
  {
    id: 8,
    initials: "V",
    bg: "#3d4a8b",
    name: "Vidya P.",
    service: "HD Bridal Package",
    rating: 5,
    text: "Booked the Royal Bridal Package for my daughter's wedding — we couldn't be happier. From the makeup to the saree draping, every detail was perfect. The team made her look absolutely ethereal.",
  },
];

// Duplicate each row for seamless marquee looping
const row1 = [...reviews.slice(0, 4), ...reviews.slice(0, 4)];
const row2 = [...reviews.slice(4), ...reviews.slice(4)];

// ─── Sub-components ───────────────────────────────────────────────────────────
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

function GoogleIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <article
      className="flex-shrink-0 w-[300px] sm:w-[340px] bg-white rounded-2xl p-6 flex flex-col gap-3 shadow-sm select-none"
      aria-label={`Review by ${review.name}`}
    >
      {/* Top: large quote + stars */}
      <div className="flex items-start justify-between gap-2">
        <span
          className="font-display text-5xl leading-none -mt-1 select-none"
          style={{ color: "#5f1e42", opacity: 0.18 }}
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <StarRating count={review.rating} />
      </div>

      {/* Review text */}
      <p
        className="text-[#3a2a2a] text-sm leading-relaxed flex-1 line-clamp-4"
      >
        {review.text}
      </p>

      {/* Divider */}
      <div
        className="h-px rounded-full"
        style={{ background: "linear-gradient(90deg, #e8b80d 0%, #f6dd86 60%, transparent 100%)", width: "40px" }}
        aria-hidden="true"
      />

      {/* Author row */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0"
            style={{ backgroundColor: review.bg }}
            aria-hidden="true"
          >
            {review.initials}
          </div>
          <div>
            <p className="text-xs font-semibold text-[#1a0d0d] leading-none">{review.name}</p>
            <p className="text-[11px] text-[#8c7b72] mt-0.5">{review.service}</p>
          </div>
        </div>
        {/* Google G mark */}
        <div className="opacity-60" title="Google Review">
          <GoogleIcon size={16} />
        </div>
      </div>
    </article>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="overflow-hidden"
      style={{ backgroundColor: "#fdf8f5" }}
      aria-label="Client reviews of Chetana's Beauty"
    >

      {/* ── Header ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="reveal mb-3">
          <span className="section-label">Reviews</span>
        </div>

        <div className="reveal reveal-delay-1 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          {/* Heading */}
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1a0d0d] leading-tight">
              Loved by brides,&nbsp;
              <br className="hidden sm:block" />
              <em className="italic text-[#5f1e42]">trusted by Mangalore</em>
            </h2>
            <p className="mt-4 text-[#8c7b72] text-base leading-relaxed max-w-lg">
              Real stories from real clients — from bridal transformations and
              skin treatments to everyday hair &amp; nail care.
            </p>
          </div>

          {/* Google rating card */}
          <a
            href={GMB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal reveal-delay-2 group flex-shrink-0 inline-flex flex-col items-center gap-2 bg-white rounded-2xl px-8 py-5 shadow-sm border border-[#5f1e42]/8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 self-start lg:self-auto"
            aria-label="View Chetana's Beauty reviews on Google"
          >
            <div className="flex items-center gap-2">
              <GoogleIcon size={22} />
              <span className="text-xs font-semibold text-[#8c7b72] tracking-wide uppercase">Google Reviews</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-4xl font-semibold text-[#1a0d0d] leading-none">4.8</span>
              <span className="text-[#e8b80d] text-lg">★</span>
            </div>
            <StarRating count={5} />
            <p className="text-[11px] text-[#8c7b72] font-medium tracking-wide">
              315+ ratings · See all
              <span className="ml-1 text-[#5f1e42] group-hover:underline">→</span>
            </p>
          </a>
        </div>
      </div>

      {/* ── Marquee band ───────────────────────────────────────── */}
      <div
        className="marquee-outer relative py-8 md:py-10"
        style={{ backgroundColor: "#120808" }}
        aria-label="Scrolling client reviews"
      >
        {/* Left fade mask */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #120808 0%, transparent 100%)",
          }}
          aria-hidden="true"
        />
        {/* Right fade mask */}
        <div
          className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, #120808 0%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* Row 1 — left scroll */}
        <div className="flex gap-4 animate-marquee-ltr mb-4" style={{ width: "max-content" }}>
          {row1.map((review, i) => (
            <ReviewCard key={`r1-${review.id}-${i}`} review={review} />
          ))}
        </div>

        {/* Row 2 — right scroll */}
        <div className="flex gap-4 animate-marquee-rtl" style={{ width: "max-content" }}>
          {row2.map((review, i) => (
            <ReviewCard key={`r2-${review.id}-${i}`} review={review} />
          ))}
        </div>
      </div>

      {/* ── Footer CTA ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 pb-16 md:pb-24 pt-10 md:pt-14">
        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Google CTA button */}
          <a
            href={GMB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-semibold text-[#1a0d0d] bg-white border border-[#e0d8d0] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            aria-label="See all reviews on Google"
          >
            <GoogleIcon size={18} />
            See all 315+ reviews on Google
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-[#5f1e42]" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          {/* Leave a review nudge */}
          <a
            href={GMB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{ backgroundColor: "#5f1e42" }}
            aria-label="Leave a review for Chetana's Beauty on Google"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
              <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Leave us a review
          </a>
        </div>

        {/* Trust note */}
        <p className="reveal reveal-delay-1 mt-6 text-center text-xs text-[#8c7b72]">
          All reviews are from verified clients on Google · We never edit or filter feedback
        </p>
      </div>

    </section>
  );
}
