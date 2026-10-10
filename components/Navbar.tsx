"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

const serviceLinks = [
  { label: "Hair Care", href: "/services/hair-care" },
  { label: "Body Care", href: "/services/body-care" },
  { label: "Skin Care", href: "/services/skin-care" },
  { label: "Nails", href: "/services/nails" },
  { label: "For Kids", href: "/services/for-kids" },
  { label: "Packages", href: "/services/packages" },
];

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Academy", href: "https://chetanasbeautyacademy.com/", external: true },
  { label: "Services", href: "/services/hair-care", hasDropdown: true },
  { label: "Bridal", href: "/bridal" },
  { label: "Reviews", href: "/#reviews" },
];

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
          "max-w-6xl mx-auto px-4 sm:px-5 h-14 flex items-center justify-between gap-6 rounded-2xl pointer-events-auto transition duration-300",
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
          className="flex items-center flex-shrink-0"
          aria-label="Chetana's Beauty, Home"
        >
          <Image
            src="/logo/chetanas-logo-mark.png"
            alt="Chetana's Beauty Lounge"
            width={1656}
            height={455}
            priority
            className="h-8 md:h-9 w-auto"
          />
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
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
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
          href="/#contact"
          onClick={() => trackEvent("nav_book_cta_click", { location: "navbar_desktop" })}
          className="hidden md:inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#111111] hover:bg-[#333] transition-colors shadow-sm flex-shrink-0"
        >
          <span className="relative flex h-2.5 w-2.5 flex-shrink-0" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          Get in Touch
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
        inert={!mobileOpen}
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
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="block px-4 py-3 text-sm font-medium text-[#333333] hover:text-[#5f1e42] hover:bg-[#5f1e42]/5 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            )
          )}

          {/* Mobile CTA */}
          <div className="pt-3">
            <a
              href="/#contact"
              onClick={() => {
                trackEvent("nav_book_cta_click", { location: "navbar_mobile" });
                closeMobile();
              }}
              className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-full text-sm font-semibold text-white bg-[#5f1e42] hover:bg-[#4a1733] transition-colors"
            >
              Book Your Appointment
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
