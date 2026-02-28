"use client";

import Link from "next/link";

// ─── Constants ─────────────────────────────────────────────────────────────
const WHATSAPP =
  "https://wa.me/919845292411?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Chetana%27s%20Beauty%20Lounge.";
const INSTAGRAM = "https://www.instagram.com/chetanasbeautylounge";
const YOUTUBE = "https://www.youtube.com/@ChetanasBeautyLounge";
const GMB =
  "https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TEqqKK6Kz7I0YLRSNagwTko0Nk00NksyTE0xT01OsTKoSLFMS000TTQzNbA0SjNLMvcST85ILUnMS1QvVkhKTSwtqVTIyS_NS08FAL8sGSg&q=chetana%27s+beauty+lounge&sourceid=chrome&ie=UTF-8";
const MAPS_EMBED =
  "https://maps.google.com/maps?q=12.8699033,74.8605861&z=17&ie=UTF8&iwloc=&output=embed";
const MAPS_DIRECTIONS =
  "https://www.google.com/maps/place/Chetana's+Beauty+Lounge/@12.8699033,74.8605861,17z/data=!3m1!5s0x3ba35a324415639f:0xc6fd06eb698bc783!4m14!1m7!3m6!1s0x3ba35a36b1ed7ecd:0xd9fea5a65092f6b7!2sChetana's+Beauty+Lounge!8m2!3d12.8699033!4d74.8605861!16s%2Fg%2F11bbxsz_j9!3m5!1s0x3ba35a36b1ed7ecd:0xd9fea5a65092f6b7!8m2!3d12.8699033!4d74.8605861!16s%2Fg%2F11bbxsz_j9";

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
  { label: "Blog", href: "/blog" },
];

// ─── Icon components ────────────────────────────────────────────────────────
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L.057 23.882l6.199-1.435A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.997-1.366l-.358-.213-3.683.853.879-3.596-.234-.37A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
    </svg>
  );
}

function GoogleMapsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

// ─── Footer ─────────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="bg-white px-4 sm:px-6 lg:px-8 pt-16 pb-8"
    >
      {/* ══════════════════════════════════════════════════════════
          PART 1 — Light "Visit us" card: contact info + map
          ══════════════════════════════════════════════════════════ */}
      <div className="max-w-6xl mx-auto mb-5 rounded-3xl overflow-hidden border border-black/6 shadow-sm grid grid-cols-1 lg:grid-cols-2">

        {/* Left: contact details */}
        <div className="bg-white p-10 lg:p-12 flex flex-col justify-between">
          <div>
            {/* Heading */}
            <h2
              className="text-[#111]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Visit us
            </h2>
            <p className="mt-3 text-sm text-[#888] leading-relaxed max-w-xs">
              Questions or want to book? Come find us in Kankanady — we&apos;re here every day, 9 AM to 8 PM.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-3 mt-7">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border text-[#111] transition-all hover:bg-[#111] hover:text-white hover:border-transparent"
                style={{ borderColor: "rgba(0,0,0,0.12)" }}
              >
                Book on WhatsApp
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5" aria-hidden="true">
                  <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="tel:+919845292411"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5f1e42] hover:opacity-70 transition-opacity"
              >
                Call us
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Divider + contact rows */}
          <div className="mt-8 pt-8 border-t border-black/7 space-y-4">

            {/* Address */}
            <div className="flex gap-3 items-start">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#e8b80d" }} aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              <address className="not-italic text-sm text-[#555] leading-relaxed">
                3rd Floor, A Gate, Kankanady Bypass Rd,<br />
                Mangaluru, Karnataka 575002
              </address>
            </div>

            {/* Phone */}
            <div className="flex gap-3 items-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 flex-shrink-0" style={{ color: "#e8b80d" }} aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.05 2.22 2 2 0 012 .05h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="flex flex-wrap gap-x-2 gap-y-0.5 text-sm">
                <a href="tel:+919845292411" className="font-medium hover:opacity-70 transition-opacity" style={{ color: "#5f1e42" }}>
                  +91 98452 92411
                </a>
                <span className="text-[#ccc]">·</span>
                <a href="tel:+919108583714" className="font-medium hover:opacity-70 transition-opacity" style={{ color: "#5f1e42" }}>
                  +91 91085 83714
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-3 items-start">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#e8b80d" }} aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" strokeLinecap="round" />
              </svg>
              <div className="text-sm text-[#555]">
                <p>Every day: 9:00 AM – 8:00 PM</p>
              </div>
            </div>

            {/* Amenities */}
            <div className="flex flex-col gap-2.5">
              {["Free underground parking", "Wheelchair accessible lift", "LGBTQ+ friendly"].map((label) => (
                <div key={label} className="flex items-center gap-2.5 text-sm text-[#555]">
                  <span
                    className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "#5f1e42", color: "#fff" }}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Google Maps + custom animated marker */}
        <div className="relative min-h-[320px] lg:min-h-0 overflow-hidden">
          {/* Google Maps iframe */}
          <iframe
            src={MAPS_EMBED}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Chetana's Beauty Lounge location on Google Maps"
            allowFullScreen
          />

          {/* Bottom gradient bar with "Open in Maps" CTA */}
          <div
            className="absolute bottom-0 inset-x-0 h-20 flex items-end justify-end px-4 pb-3.5 pointer-events-none z-10"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.42) 0%, transparent 100%)" }}
          >
            {/* Open in Maps button */}
            <a
              href={MAPS_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white transition-opacity hover:opacity-85 active:scale-95"
              style={{
                background: "rgba(232,184,13,0.9)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: "0 2px 12px rgba(232,184,13,0.45)",
                color: "#3a2000",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3 h-3" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="9" r="2.2" />
              </svg>
              Open in Maps
            </a>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          PART 2 — Dark rounded footer card
          ══════════════════════════════════════════════════════════ */}
      <div
        className="max-w-6xl mx-auto rounded-3xl overflow-hidden"
        style={{ backgroundColor: "#111111" }}
      >
        {/* 4-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 sm:px-10 py-10 sm:py-12">

          {/* Col 1: Brand + tagline + CIDESCO badge */}
          <div className="col-span-2 md:col-span-1">
            <a
              href="/"
              className="inline-flex items-baseline gap-1.5 mb-3"
              aria-label="Chetana's Beauty — Home"
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  color: "#e8b80d",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                }}
              >
                Chetana&apos;s
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "1.4rem",
                  fontWeight: 300,
                }}
              >
                Beauty
              </span>
            </a>
            <p className="text-xs leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.4)", maxWidth: "175px" }}>
              Mangalore&rsquo;s CIDESCO-certified ladies salon &amp; beauty academy since 1998.
            </p>
            <div
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium"
              style={{ backgroundColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.5)" }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-3 h-3" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" strokeLinecap="round" />
              </svg>
              Est. 1998 &middot; Mangaluru
            </div>
          </div>

          {/* Col 2: Pages */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
              Pages
            </h3>
            <ul className="space-y-2.5">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Address */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
              Address
            </h3>
            <address className="not-italic text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              3rd Floor, A Gate,<br />
              Kankanady Bypass Rd,<br />
              Kankanady, Mangaluru,<br />
              Karnataka 575002
            </address>
            <a
              href={MAPS_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-4 text-xs transition-opacity hover:opacity-70"
              style={{ color: "#e8b80d" }}
            >
              Get directions
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Col 4: Open times + Social */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
              Open times
            </h3>
            <div className="mb-6">
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>Every day</p>
              <p className="text-sm font-semibold mt-0.5" style={{ color: "rgba(255,255,255,0.85)" }}>
                9:00 AM – 8:00 PM
              </p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {[
                { href: INSTAGRAM, label: "Follow on Instagram", Icon: InstagramIcon },
                { href: YOUTUBE, label: "Subscribe on YouTube", Icon: YouTubeIcon },
                { href: WHATSAPP, label: "Chat on WhatsApp", Icon: WhatsAppIcon },
                { href: GMB, label: "Find us on Google Maps", Icon: GoogleMapsIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:text-white"
                  style={{ backgroundColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.45)" }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          className="mx-6 sm:mx-8 border-t"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5">
            <p className="text-xs text-center sm:text-left" style={{ color: "rgba(255,255,255,0.3)" }}>
              © 2026 Chetana&apos;s Beauty Lounge · All rights reserved
            </p>
            <div className="flex items-center flex-wrap justify-center gap-3 sm:gap-4">
              <Link href="/terms" className="text-xs transition-colors hover:text-white/70" style={{ color: "rgba(255,255,255,0.35)" }}>
                Terms &amp; Conditions
              </Link>
              <span style={{ color: "rgba(255,255,255,0.15)" }} aria-hidden="true">·</span>
              <Link href="/privacy" className="text-xs transition-colors hover:text-white/70" style={{ color: "rgba(255,255,255,0.35)" }}>
                Privacy Policy
              </Link>
              <span style={{ color: "rgba(255,255,255,0.15)" }} aria-hidden="true">·</span>
              <a href="/sitemap.xml" className="text-xs transition-colors hover:text-white/70" style={{ color: "rgba(255,255,255,0.35)" }}>
                Sitemap
              </a>
              {/* Scroll-to-top */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Scroll to top"
                className="w-7 h-7 rounded-full flex items-center justify-center transition-all hover:text-white ml-1"
                style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5" aria-hidden="true">
                  <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
