import Link from "next/link";

// ─── Constants ────────────────────────────────────────────────────────────────
const WHATSAPP =
  "https://wa.me/919845292411?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Chetana%27s%20Beauty%20Lounge.";
const INSTAGRAM = "https://www.instagram.com/chetanasbeautylounge";
// Update this URL to your exact YouTube channel handle once confirmed
const YOUTUBE = "https://www.youtube.com/@chetanasbeautylounge";
const GMB =
  "https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TEqqKK6Kz7I0YLRSNagwTko0Nk00NksyTE0xT01OsTKoSLFMS000TTQzNbA0SjNLMvcST85ILUnMS1QvVkhKTSwtqVTIyS_NS08FAL8sGSg&q=chetana%27s+beauty+lounge&sourceid=chrome&ie=UTF-8";

// Google Maps embed & directions — coordinates from verified schema (Kankanady, Mangaluru)
const MAPS_EMBED =
  "https://maps.google.com/maps?q=12.8698,74.8426&z=16&ie=UTF8&iwloc=&output=embed";
const MAPS_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=12.8698%2C74.8426&destination_place_id=Chetana%27s+Beauty+Lounge%2C+Kankanady+Bypass+Rd%2C+Mangaluru";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Blog", href: "/blog" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

const serviceLinks = [
  { label: "Hair Care", href: "/services/hair-care" },
  { label: "Skin Care", href: "/services/skin-care" },
  { label: "Bridal Services", href: "/services/bridal" },
  { label: "Body Care", href: "/services/body-care" },
  { label: "Nails", href: "/services/nails" },
  { label: "For Kids", href: "/services/for-kids" },
  { label: "Packages 🎁", href: "/services/packages" },
];

// ─── Icon helpers ─────────────────────────────────────────────────────────────
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L.057 23.882l6.199-1.435A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.997-1.366l-.358-.213-3.683.853.879-3.596-.234-.37A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
    </svg>
  );
}

function GoogleMapsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer aria-label="Site footer">

      {/* ── Main footer body ────────────────────────────────────── */}
      <div style={{ backgroundColor: "#120808" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 md:pt-16 md:pb-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

            {/* ── Brand column ── */}
            <div className="sm:col-span-2 lg:col-span-1">
              {/* Logo */}
              <a href="/" className="inline-flex items-baseline gap-1.5 mb-4 group" aria-label="Chetana's Beauty — Home">
                <span
                  className="font-display text-2xl font-semibold tracking-tight"
                  style={{ color: "#e8b80d" }}
                >
                  Chetana&apos;s
                </span>
                <span className="font-display text-2xl font-light tracking-tight text-white/70">
                  Beauty
                </span>
              </a>

              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Mangalore&rsquo;s CIDESCO-certified ladies salon &amp; academy.
                Bridal, hair, skin, nails and spa — in the heart of Kankanady.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors"
                  style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                  aria-label="Follow on Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href={YOUTUBE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors"
                  style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                  aria-label="Subscribe on YouTube"
                >
                  <YouTubeIcon />
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors"
                  style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                  aria-label="Chat on WhatsApp"
                >
                  <WhatsAppIcon />
                </a>
                <a
                  href={GMB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors"
                  style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                  aria-label="Find us on Google Maps"
                >
                  <GoogleMapsIcon />
                </a>
              </div>
            </div>

            {/* ── Quick Links column ── */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Services column ── */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">
                Our Services
              </h3>
              <ul className="space-y-2.5">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Contact & Hours column ── */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">
                Visit Us
              </h3>

              {/* Address */}
              <div className="flex gap-2.5 mb-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-[#e8b80d] flex-shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <address className="not-italic text-sm text-white/60 leading-relaxed">
                  3rd Floor, A Gate,<br />
                  Kankanady Bypass Rd,<br />
                  Kankanady, Mangaluru,<br />
                  Karnataka 575002
                </address>
              </div>

              {/* Phones */}
              <div className="flex gap-2.5 mb-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-[#e8b80d] flex-shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.05 2.22 2 2 0 012 .05h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="text-sm text-white/60 leading-relaxed">
                  <a href="tel:+919845292411" className="hover:text-white transition-colors block">
                    +91 98452 92411
                  </a>
                  <a href="tel:+919108583714" className="hover:text-white transition-colors block">
                    +91 91085 83714
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-2.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-[#e8b80d] flex-shrink-0 mt-0.5" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" strokeLinecap="round" />
                </svg>
                <div className="text-sm text-white/60 leading-relaxed">
                  <p>Mon – Sat: 9:00 AM – 7:00 PM</p>
                  <p className="text-white/35 text-xs mt-0.5">Sunday: Closed</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Interactive Map ──────────────────────────────────────── */}
      <div style={{ backgroundColor: "#0e0606" }}>
        {/* Map header strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-1"
              style={{ color: "rgba(232,184,13,0.7)" }}
            >
              Find Us
            </p>
            <p className="text-white text-sm font-medium">
              3rd Floor, Kankanady Bypass Rd, Mangaluru
            </p>
          </div>
          <a
            href={MAPS_DIRECTIONS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold flex-shrink-0 transition-all hover:-translate-y-0.5"
            style={{ backgroundColor: "#e8b80d", color: "#1a0800" }}
            aria-label="Get directions to Chetana's Beauty Lounge on Google Maps"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            Get Directions
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Map iframe */}
        <div className="relative overflow-hidden" style={{ height: "340px" }}>
          <iframe
            src={MAPS_EMBED}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Chetana's Beauty Lounge location on Google Maps"
            allowFullScreen
            style={{ filter: "grayscale(15%) brightness(0.88) contrast(1.05)" }}
          />
          {/* Top fade into footer */}
          <div
            className="absolute top-0 left-0 right-0 h-6 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, #0e0606, transparent)" }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────────── */}
      <div
        className="border-t"
        style={{ backgroundColor: "#080303", borderColor: "rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/35 text-center sm:text-left">
            © 2025 Chetana&apos;s Beauty Lounge · Mangaluru, Karnataka, India
          </p>
          <nav aria-label="Legal links" className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-white/15 text-xs" aria-hidden="true">·</span>
            <Link
              href="/terms"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </nav>
        </div>
      </div>

    </footer>
  );
}
