import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import About from "@/components/sections/About";
import Reviews from "@/components/sections/Reviews";
import Gallery from "@/components/sections/Gallery";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Reviews />
      <Gallery />
      <FAQ />
      <Contact />
    </main>
  );
}
