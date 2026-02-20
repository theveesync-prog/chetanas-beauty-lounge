import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Gallery from "@/components/sections/Gallery";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />

      {/*
        ─── UPCOMING SECTIONS ──────────────────────────────────────
        The following sections will be added section by section
        as reference screenshots are shared and approved.

        Planned order:
        - About (#about)
        - Services — 4 verticals (#services)
        - Trust Signals / Credentials
        - Before & After Results
        - Community Bridal Block (#bridal)
        ──────────────────────────────────────────────────────────── */}

      <Reviews />
      <FAQ />
      <Gallery />
      <Contact />

      {/* ─── FOOTER ─────────────────────────────────────────────── */}
      {/* TODO: Add footer section */}
    </main>
  );
}
