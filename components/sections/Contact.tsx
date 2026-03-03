"use client";

import { useState, useEffect, useRef, FormEvent } from "react";

const WHATSAPP_NUMBER = "919845292411";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

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

const TIME_SLOTS = [
  "Morning (9–11 AM)",
  "Noon (11 AM–1 PM)",
  "Afternoon (1–4 PM)",
  "Evening (4–7 PM)",
];

// Shared input / select / textarea class
const fieldCls =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#111] placeholder:text-gray-400 outline-none transition-all focus:border-[#5f1e42]/50 focus:ring-2 focus:ring-[#5f1e42]/10";

const labelCls = "block text-xs text-[#888] mb-1.5";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [customService, setCustomService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const todayStr = new Date().toISOString().split("T")[0];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const finalService = service === "Other" ? customService : service;
    const lines = [
      "Hi! I'd like to book an appointment at Chetana's Beauty Lounge, Mangalore.",
      "",
      (firstName || lastName) ? `Name: ${[firstName, lastName].filter(Boolean).join(" ")}` : null,
      phone ? `Phone: +91 ${phone}` : null,
      finalService ? `Service: ${finalService}` : null,
      date ? `Preferred Date: ${date}` : null,
      time ? `Preferred Time: ${time}` : null,
      comment ? `Notes: ${comment}` : null,
      "",
      "Looking forward to hearing from you!",
    ]
      .filter((l) => l !== null)
      .join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-14 md:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#ffffff" }}
      aria-label="Book an appointment at Chetana's Beauty"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ─────────────────────────────────── */}
        <div className="reveal mb-3">
          <span className="section-label">Contact</span>
        </div>
        <h2
          className="reveal reveal-delay-1 text-[#111] mb-10 md:mb-12"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Book your appointment at{" "}
          <em className="text-[#5f1e42]" style={{ fontStyle: "italic" }}>
            Chetana&apos;s
          </em>
        </h2>

        {/* ── Two-column card ────────────────────────────────── */}
        <div className="reveal reveal-delay-2 grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">

          {/* ══ LEFT: full-bleed image + text overlay ════════════ */}
          <div className="relative hidden lg:block" style={{ minHeight: "600px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=85&auto=format&fit=crop"
              alt="Beauty treatment at Chetana's Beauty Lounge"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />

            {/* Gradient overlay — dark at bottom, fades to transparent */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.18) 55%, rgba(0,0,0,0) 100%)",
              }}
            />

            {/* Text overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                }}
              >
                Your beauty journey<br />begins here
              </h3>
              <p className="mt-3 text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.72)" }}>
                Expert care trusted for over 28 years in Mangalore. Book your session in seconds.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-white transition-opacity hover:opacity-75"
                style={{ textDecoration: "underline", textUnderlineOffset: "4px", textDecorationColor: "rgba(255,255,255,0.5)" }}
              >
                Chat with us
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* ══ RIGHT: form panel ════════════════════════════════ */}
          <div className="bg-white p-8 md:p-10 lg:p-12 flex flex-col justify-center">
            <h3
              className="text-[#111] mb-1"
              style={{ fontFamily: "var(--font-heading)", fontSize: "1.35rem", fontWeight: 700 }}
            >
              Book an appointment
            </h3>
            <p className="text-sm text-[#999] mb-8">
              Fill in your details and we&apos;ll open WhatsApp with your message ready to send.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>

              {/* First + Last name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-first" className={labelCls}>First name</label>
                  <input
                    id="contact-first"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Priya"
                    className={fieldCls}
                    autoComplete="given-name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-last" className={labelCls}>Last name</label>
                  <input
                    id="contact-last"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Shetty"
                    className={fieldCls}
                    autoComplete="family-name"
                  />
                </div>
              </div>

              {/* Phone with +91 prefix */}
              <div>
                <label htmlFor="contact-phone" className={labelCls}>Phone</label>
                <div className="flex rounded-xl border border-gray-200 overflow-hidden transition-all focus-within:border-[#5f1e42]/50 focus-within:ring-2 focus-within:ring-[#5f1e42]/10">
                  <span className="flex items-center gap-1.5 px-3 bg-gray-50 border-r border-gray-200 text-sm text-[#555] flex-shrink-0 select-none">
                    🇮🇳 +91
                  </span>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="98452 92411"
                    className="flex-1 px-3 py-3 text-sm outline-none bg-white text-[#111] placeholder:text-gray-400"
                    autoComplete="tel"
                  />
                </div>
              </div>

              {/* Treatment dropdown */}
              <div>
                <label htmlFor="contact-service" className={labelCls}>
                  Treatment <span className="text-[#5f1e42]">*</span>
                </label>
                <select
                  id="contact-service"
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className={fieldCls}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 0.75rem center",
                    backgroundSize: "1rem",
                    paddingRight: "2.25rem",
                    appearance: "none",
                  }}
                >
                  <option value="" disabled>Select a treatment…</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>

                {/* "Other" free-text reveal */}
                {service === "Other" && (
                  <input
                    type="text"
                    value={customService}
                    onChange={(e) => setCustomService(e.target.value)}
                    placeholder="Describe your treatment…"
                    className={`${fieldCls} mt-2`}
                    aria-label="Describe your custom treatment"
                  />
                )}
              </div>

              {/* Date + Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-date" className={labelCls}>Date</label>
                  <input
                    id="contact-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={todayStr}
                    className={fieldCls}
                    style={{ colorScheme: "light" }}
                  />
                </div>
                <div>
                  <label htmlFor="contact-time" className={labelCls}>Time</label>
                  <select
                    id="contact-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className={fieldCls}
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 0.75rem center",
                      backgroundSize: "1rem",
                      paddingRight: "2.25rem",
                      appearance: "none",
                    }}
                  >
                    <option value="" disabled>Select…</option>
                    {TIME_SLOTS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Comment */}
              <div>
                <label htmlFor="contact-comment" className={labelCls}>Comment</label>
                <textarea
                  id="contact-comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={3}
                  placeholder="I would like…"
                  className={`${fieldCls} resize-none`}
                />
              </div>

              {/* Send button */}
              <button
                type="submit"
                disabled={!service || (service === "Other" && !customService.trim())}
                className="w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-white transition-all hover:opacity-85 hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:translate-y-0"
                style={{ backgroundColor: "#111" }}
              >
                Send
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <p className="text-center text-[11px] text-[#bbb]">
                Tapping Send opens WhatsApp with your details pre-filled.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
