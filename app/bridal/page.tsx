import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BridalHero from "@/components/sections/BridalHero";
import About from "@/components/sections/About";
import BridalServices from "@/components/sections/BridalServices";
import BridalFAQ from "@/components/sections/BridalFAQ";
import BridalReviews from "@/components/sections/BridalReviews";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bridal Makeup & Styling in Mangalore | Chetana's Beauty Lounge",
  description:
    "Bridal makeup, pre-bridal packages, mehendi, saree draping and more at Chetana's Beauty Lounge, Mangalore's CIDESCO-certified ladies salon. Trusted by over 500 Mangalore brides since 1998.",
  keywords: [
    "bridal makeup Mangalore",
    "bridal makeup Mangaluru",
    "best bridal makeup artist Mangalore",
    "pre-bridal package Mangalore",
    "bridal salon Mangalore",
    "HD bridal makeup Mangalore",
    "mehendi Mangalore",
    "Chetana's Beauty Lounge",
  ],
  openGraph: {
    title: "Bridal Makeup & Styling in Mangalore | Chetana's Beauty Lounge",
    description:
      "Timeless, natural bridal looks that hold up through a full coastal-Karnataka wedding day. CIDESCO-certified, trusted since 1998.",
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/bridal`,
  },
};

export default function BridalPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Bridal", item: `${SITE_URL}/bridal` },
    ],
  };

  return (
    <main>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BridalHero />
      <About />
      <BridalServices />
      <BridalFAQ />
      <BridalReviews />
      <Gallery />
      <Contact />
    </main>
  );
}
