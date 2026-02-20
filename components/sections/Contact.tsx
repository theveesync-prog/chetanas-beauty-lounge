"use client";

import { useState, useEffect, useRef, FormEvent } from "react";

// TODO: Replace with actual salon WhatsApp number before launch
const WHATSAPP_NUMBER = "91XXXXXXXXXX";

const SERVICES = [
  "Bridal Makeup",
  "Pre-Bridal Package (3-Month)",
  "Hair Cut & Styling",
  "Keratin Treatment",
  "Hair Colouring",
  "Facial & Skin Treatment",
  "Tan Removal",
  "Threading & Waxing",
  "Nail Art & Extensions",
  "Mehendi (Henna)",
  "Beauty Consultation",
  "Other",
];

const features = [
  { icon: "⚡", label: "Quick reply on WhatsApp — usually within 2 hours" },
  { icon: "🔒", label: "100% women-only salon — complete privacy" },
  { icon: "📅", label: "Flexible timings — Mon to Sat, 9 AM – 7 PM" },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [info, setInfo] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleWhatsApp = (e: FormEvent) => {
    e.preventDefault();

    // Build pre-filled WhatsApp message
    const lines = [
      "Hi! I'd like to book an appointment at Chetana's Beauty Lounge, Mangalore.",
      "",
      name ? `Name: ${name}` : null,
      service ? `Service: ${service}` : null,
      date ? `Preferred Date: ${date}` : null,
      info ? `Additional Info: ${info}` : null,
      "",
      "Looking forward to hearing from you!",
    ]
      .filter((l) => l !== null)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Get today's date string for min date attribute
  const todayStr = new Date().toISOString().split("T")[0];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-16 md:py-24 px-4"
      style={{ backgroundColor: "#f5ece4" }}
      aria-label="Book an appointment at Chetana's Beauty"
    >
      <div className="max-w-6xl mx-auto">

        {/* ─── Section header (above card) ──── */}
        <div className="reveal mb-3">
          <span className="section-label">Contact</span>
        </div>
        <h2 className="reveal reveal-delay-1 font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1a0d0d] leading-tight mb-10 md:mb-12">
          Book your appointment at{" "}
          <em className="italic text-[#5f1e42]">Chetana&apos;s</em>
        </h2>

        {/* ─── Two-column card ──── */}
        <div className="reveal reveal-delay-2 grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-xl border border-[#5f1e42]/8">

          {/* ── Left panel — warm cream ── */}
          <div
            className="flex flex-col justify-between gap-8 p-8 md:p-12"
            style={{ backgroundColor: "#fdf0e6" }}
          >
            {/* Top content */}
            <div className="space-y-6">
              <p className="text-[#5a4040] text-base md:text-lg leading-relaxed font-light max-w-sm">
                Fill in a few quick details on the right and we&apos;ll open WhatsApp with your
                message ready to send — no forms to submit, no waiting.
              </p>

              {/* Feature list */}
              <ul className="space-y-3">
                {features.map((f) => (
                  <li key={f.label} className="flex items-start gap-3">
                    <span className="text-base mt-0.5" aria-hidden="true">{f.icon}</span>
                    <span className="text-sm text-[#5a4040] leading-snug">{f.label}</span>
                  </li>
                ))}
              </ul>

              {/* "How it works" pill */}
              <div className="inline-flex items-center gap-2 bg-[#5f1e42] text-white rounded-full px-4 py-2 text-xs font-medium tracking-wide">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 8v4l3 3" stroke="white" fill="none" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                How it works: Fill → Tap → Chat on WhatsApp
              </div>
            </div>

            {/* Bottom — testimonial */}
            <div
              className="rounded-2xl p-5 border border-[#5f1e42]/10"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#e8b80d]" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              {/*
                TODO: Replace this placeholder quote with a real client testimonial.
                Recommended: a bridal makeup client, 1–2 sentences, specific and authentic.
              */}
              <p className="text-sm text-[#4a3a3a] leading-relaxed italic mb-4">
                &ldquo;Booking on WhatsApp was so easy. Chetana ma&apos;am confirmed within the hour
                and my bridal day was absolutely perfect.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                {/*
                  TODO: Replace with real reviewer photo.
                  <img src="/images/testimonial-bride.jpg" alt="Ananya" className="w-9 h-9 rounded-full object-cover" />
                */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0"
                  style={{ backgroundColor: "#c4849a" }}
                  aria-hidden="true"
                >
                  A
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1a0d0d]">Ananya R.</p>
                  <p className="text-[10px] text-[#8c7b72]">Bridal Makeup, Tulu Wedding</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right panel — white form ── */}
          <div className="bg-white flex flex-col justify-center p-8 md:p-12">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#1a0d0d] mb-2">
              Quick booking details
            </h3>
            <p className="text-[#8c7b72] text-sm mb-8">
              Takes less than 60 seconds. We&apos;ll do the rest on WhatsApp.
            </p>

            <form onSubmit={handleWhatsApp} className="space-y-5" noValidate>

              {/* Full Name */}
              <div>
                <label htmlFor="contact-name" className="block text-xs font-medium text-[#5a4040] mb-1.5 tracking-wide uppercase">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Priya Shetty"
                  className="w-full rounded-xl border border-[#5f1e42]/15 bg-[#fdf8f5] px-4 py-3 text-sm text-[#1a0d0d] placeholder:text-[#c0b0a8] outline-none focus:border-[#5f1e42]/40 focus:ring-2 focus:ring-[#5f1e42]/8 transition-all"
                />
              </div>

              {/* Preferred Service */}
              <div>
                <label htmlFor="contact-service" className="block text-xs font-medium text-[#5a4040] mb-1.5 tracking-wide uppercase">
                  Preferred Service <span className="text-[#5f1e42]">*</span>
                </label>
                <select
                  id="contact-service"
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full rounded-xl border border-[#5f1e42]/15 bg-[#fdf8f5] px-4 py-3 text-sm text-[#1a0d0d] outline-none focus:border-[#5f1e42]/40 focus:ring-2 focus:ring-[#5f1e42]/8 transition-all appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238c7b72' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 1rem center",
                    backgroundSize: "1rem",
                    paddingRight: "2.5rem",
                  }}
                >
                  <option value="" disabled>Select a service…</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Preferred Date */}
              <div>
                <label htmlFor="contact-date" className="block text-xs font-medium text-[#5a4040] mb-1.5 tracking-wide uppercase">
                  Preferred Date
                </label>
                <input
                  id="contact-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={todayStr}
                  className="w-full rounded-xl border border-[#5f1e42]/15 bg-[#fdf8f5] px-4 py-3 text-sm text-[#1a0d0d] outline-none focus:border-[#5f1e42]/40 focus:ring-2 focus:ring-[#5f1e42]/8 transition-all"
                />
              </div>

              {/* Additional Information */}
              <div>
                <label htmlFor="contact-info" className="block text-xs font-medium text-[#5a4040] mb-1.5 tracking-wide uppercase">
                  Additional Information
                </label>
                <textarea
                  id="contact-info"
                  value={info}
                  onChange={(e) => setInfo(e.target.value)}
                  rows={3}
                  placeholder="e.g. Tulu wedding, 15 guests, need bridal trial first…"
                  className="w-full rounded-xl border border-[#5f1e42]/15 bg-[#fdf8f5] px-4 py-3 text-sm text-[#1a0d0d] placeholder:text-[#c0b0a8] outline-none focus:border-[#5f1e42]/40 focus:ring-2 focus:ring-[#5f1e42]/8 transition-all resize-none"
                />
              </div>

              {/* Submit → opens WhatsApp */}
              <button
                type="submit"
                disabled={!service}
                className="w-full btn-gold flex items-center justify-center gap-2.5 rounded-xl py-4 text-sm font-semibold shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L.057 23.882l6.199-1.435A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.997-1.366l-.358-.213-3.683.853.879-3.596-.234-.37A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
                </svg>
                Send on WhatsApp — Book Now
              </button>

              <p className="text-center text-[10px] text-[#8c7b72]">
                Tapping above will open WhatsApp with your message pre-filled.
                Select a service to continue.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
