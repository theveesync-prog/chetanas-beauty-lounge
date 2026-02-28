"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const serviceLinks = [
  { label: "Hair Care", href: "/services/hair-care" },
  { label: "Body Care", href: "/services/body-care" },
  { label: "Skin Care", href: "/services/skin-care" },
  { label: "Bridal Services", href: "/services/bridal" },
  { label: "Nails", href: "/services/nails" },
  { label: "For Kids", href: "/services/for-kids" },
  { label: "Packages 🎁", href: "/services/packages" },
];

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "Reviews", href: "/#reviews" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

const WHATSAPP_SALON = "https://wa.me/919845292411?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Chetana%27s%20Beauty%20Lounge.";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change / outside click
  const closeMobile = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 pt-3 px-4 pointer-events-none">
      <nav
        className={cn(
          "max-w-6xl mx-auto px-4 sm:px-5 h-14 flex items-center justify-between gap-6 rounded-2xl pointer-events-auto transition-all duration-300",
        )}
        style={{
          background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.78)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.75)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0,0,0,0.10), 0 1px 0 rgba(255,255,255,0.95) inset"
            : "0 2px 20px rgba(0,0,0,0.06), 0 1px 0 rgba(255,255,255,0.95) inset",
        }}
      >

        {/* ─── Logo ─────────────────────────────────── */}
        <a
          href="/"
          className="flex items-center gap-2 flex-shrink-0"
          aria-label="Chetana's Beauty — Home"
        >
          <span
            className="font-display text-xl md:text-2xl font-semibold tracking-tight"
            style={{ color: "#5f1e42" }}
          >
            Chetana&apos;s
          </span>
          <span className="font-display text-xl md:text-2xl font-light tracking-tight text-[#8c7b72]">
            Beauty
          </span>
        </a>

        {/* ─── Desktop Nav ──────────────────────────── */}
        <ul className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <li key={link.label} className="relative nav-dropdown-trigger">
                <a
                  href="/services"
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#333333] hover:text-[#5f1e42] transition-colors rounded-full hover:bg-[#5f1e42]/5"
                  aria-haspopup="true"
                >
                  {link.label}
                  <ChevronDown size={13} className="opacity-60" />
                </a>

                {/* Dropdown */}
                <div className="nav-dropdown" role="menu">
                  {serviceLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      role="menuitem"
                      className="block px-4 py-2.5 text-sm font-medium text-[#333333] hover:text-[#5f1e42] hover:bg-[#5f1e42]/5 rounded-lg transition-colors"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </li>
            ) : (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block px-3 py-2 text-sm font-medium text-[#333333] hover:text-[#5f1e42] transition-colors rounded-full hover:bg-[#5f1e42]/5"
                >
                  {link.label}
                </a>
              </li>
            )
          )}
        </ul>

        {/* ─── Desktop CTA ──────────────────────────── */}
        <a
          href={WHATSAPP_SALON}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#5f1e42] hover:bg-[#4a1733] transition-colors shadow-sm flex-shrink-0"
        >
          {/* WhatsApp icon */}
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L.057 23.882l6.199-1.435A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.997-1.366l-.358-.213-3.683.853.879-3.596-.234-.37A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
          </svg>
          Book Now
        </a>

        {/* ─── Mobile Hamburger ─────────────────────── */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-[#5f1e42]/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X size={22} className="text-[#5f1e42]" />
          ) : (
            <Menu size={22} className="text-[#5f1e42]" />
          )}
        </button>
      </nav>

      {/* ─── Mobile Menu ────────────────────────────── */}
      <div
        className={cn(
          "md:hidden pointer-events-auto mx-4 mt-2 overflow-hidden rounded-2xl transition-all duration-300 ease-in-out",
          mobileOpen ? "max-h-screen" : "max-h-0"
        )}
        style={{
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: mobileOpen ? "1px solid rgba(255,255,255,0.75)" : "none",
          boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
        }}
        aria-hidden={!mobileOpen}
      >
        <div className="px-4 pt-4 pb-6 space-y-1">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.label}>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-[#333333] hover:text-[#5f1e42] hover:bg-[#5f1e42]/5 rounded-xl transition-colors"
                  aria-expanded={mobileServicesOpen}
                >
                  {link.label}
                  <ChevronDown
                    size={15}
                    className={cn("transition-transform duration-200", mobileServicesOpen && "rotate-180")}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-[#5f1e42]/15 pl-4">
                    {serviceLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        onClick={closeMobile}
                        className="block py-2 text-sm font-medium text-[#8c7b72] hover:text-[#5f1e42] transition-colors"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobile}
                className="block px-4 py-3 text-sm font-medium text-[#333333] hover:text-[#5f1e42] hover:bg-[#5f1e42]/5 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            )
          )}

          {/* Mobile CTA */}
          <div className="pt-3">
            <a
              href={WHATSAPP_SALON}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
              className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-full text-sm font-semibold text-white bg-[#5f1e42] hover:bg-[#4a1733] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L.057 23.882l6.199-1.435A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.997-1.366l-.358-.213-3.683.853.879-3.596-.234-.37A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
              </svg>
              Book Your Appointment
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
