"use client";

import { useEffect, useRef } from "react";

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

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className={`w-3.5 h-3.5 ${i < count ? "fill-[#e8b80d]" : "fill-[#e8b80d]/20"}`} aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function ReviewCard({ review, delay }: { review: typeof reviews[number]; delay: number }) {
  return (
    <article
      className={`reveal reveal-delay-${delay} flex flex-col gap-3 p-6 rounded-2xl border`}
      style={{ backgroundColor: "#ffffff", borderColor: "rgba(0,0,0,0.07)" }}
      aria-label={`Review by ${review.name}`}
    >
      {/* Stars */}
      <StarRating count={review.rating} />

      {/* Text */}
      <p className="text-sm text-[#444] leading-relaxed flex-1">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Thin divider */}
      <div className="h-px rounded-full" style={{ backgroundColor: "rgba(0,0,0,0.07)" }} aria-hidden="true" />

      {/* Author */}
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
            <p className="text-xs font-semibold text-[#111] leading-none">{review.name}</p>
            <p className="text-[11px] text-[#999] mt-0.5">{review.service}</p>
          </div>
        </div>
        <div className="opacity-50">
          <GoogleIcon />
        </div>
      </div>
    </article>
  );
}

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.06 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white"
      aria-label="Client reviews of Chetana's Beauty"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="text-center mb-16 md:mb-20">
          <div className="reveal mb-4 flex justify-center">
            <span className="section-label">Reviews</span>
          </div>

          <h2
            className="reveal reveal-delay-1 font-display text-[#111111] mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.02em" }}
          >
            The wall of<br />
            <em className="text-[#5f1e42]" style={{ fontStyle: "italic" }}>appreciation</em>
          </h2>

          <p className="reveal reveal-delay-2 text-base md:text-lg text-[#888] max-w-md mx-auto font-light mb-8">
            Real stories from real clients — from bridal transformations to everyday care.
          </p>

          {/* Google rating badge */}
          <div className="reveal reveal-delay-2 flex justify-center">
            <a
              href={GMB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border transition-all hover:-translate-y-0.5"
              style={{ borderColor: "rgba(0,0,0,0.1)", backgroundColor: "#F7F4F1" }}
              aria-label="View all Google reviews"
            >
              <GoogleIcon />
              <span className="text-sm font-semibold text-[#111]">4.8</span>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="w-3 h-3 fill-[#e8b80d]" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-[#888]">315+ Google reviews</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-[#5f1e42]" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Review grid ────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-14 md:mb-16">
          {reviews.map((review, i) => (
            <ReviewCard
              key={review.id}
              review={review}
              delay={Math.min((i % 3) + 1, 4)}
            />
          ))}
        </div>

        {/* ── Bottom CTAs ────────────────────────────────────── */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={GMB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-[#111] border border-black/12 hover:border-black/25 transition-all hover:-translate-y-0.5"
          >
            <GoogleIcon />
            See all 315+ reviews on Google
          </a>
          <a
            href={GMB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-85 hover:-translate-y-0.5"
            style={{ backgroundColor: "#5f1e42" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
              <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Leave us a review
          </a>
        </div>

        <p className="reveal text-center text-xs text-[#bbb] mt-6">
          All reviews are from verified clients on Google · We never edit or filter feedback
        </p>
      </div>
    </section>
  );
}
