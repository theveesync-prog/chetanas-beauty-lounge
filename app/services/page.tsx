import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { serviceCategories } from "@/lib/services-data";
import { SITE_URL } from "@/lib/constants";
import { ArrowRight, Gift } from "lucide-react";
import { CATEGORY_STYLES } from "@/components/ServiceImage";

export const metadata: Metadata = {
  title: "Beauty Services in Mangalore | Hair, Skin, Bridal, Nails & More",
  description:
    "Explore all beauty services at Chetana's Beauty Lounge, Mangalore's best ladies salon. Hair care, skin treatments, bridal makeup, nails, body care and kids' services, all at our CIDESCO-certified salon near you in Kankanady.",
  keywords: [
    "beauty services in Mangalore",
    "best beauty services in Mangalore",
    "salon services Mangalore",
    "best salon in Mangalore",
    "best hair salon in Mangalore",
    "best hair service in Mangalore",
    "skin clinic Mangalore",
    "hair botox Mangalore",
    "facials in Mangalore",
    "salon near me Mangalore",
    "ladies salon Kankanady",
  ],
  openGraph: {
    title: "Beauty Services in Mangalore | Chetana's Beauty Lounge",
    description:
      "Hair, skin, bridal, nails, body care and kids' services at Mangalore's best ladies salon, CIDESCO-certified and trusted since 1998.",
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
};

export default function ServicesPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Beauty Services at Chetana's Beauty Lounge, Mangalore",
    itemListElement: serviceCategories.map((cat, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: cat.label,
      url: `${SITE_URL}/services/${cat.slug}`,
    })),
  };

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <section
        className="py-14 md:py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#ffffff", paddingTop: "7rem" }}
        aria-label="Beauty services in Mangalore"
      >
        <div className="max-w-6xl mx-auto">
          <h1
            className="text-[#111111] mb-5"
            style={{
              fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
              fontWeight: 800,
              fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Beauty Services in{" "}
            <em className="text-[#5f1e42]" style={{ fontStyle: "italic" }}>
              Mangalore
            </em>
          </h1>
          <p
            className="text-base md:text-lg text-[#555] leading-relaxed mb-12 max-w-2xl"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Chetana&rsquo;s Beauty Lounge is a full-service, ladies-only salon in Kankanady, Mangalore, led by
            CIDESCO-certified Chetana Salian and trusted since 1998. From everyday hair and skin care to full
            bridal packages, every service is delivered by a trained team with a consultation-first approach.
            Browse by category below, or message us on WhatsApp if you&rsquo;re not sure where to start.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceCategories.map((cat) => {
              const Icon = CATEGORY_STYLES[cat.slug]?.icon ?? Gift;
              return (
              <a
                key={cat.slug}
                href={`/services/${cat.slug}`}
                className="group flex flex-col rounded-2xl p-7 border transition-all duration-200 hover:-translate-y-0.5 hover:border-[#5f1e42]/20"
                style={{ borderColor: "rgba(0,0,0,0.06)", backgroundColor: "#fff" }}
                aria-label={`Explore ${cat.label} services`}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(95,30,66,0.06)" }}
                >
                  <Icon size={22} className="text-[#5f1e42]" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h2
                  className="mb-2"
                  style={{
                    fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                    fontWeight: 700,
                    fontSize: "1.3rem",
                    color: "#111",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {cat.label}
                </h2>
                <p className="text-sm text-[#666] leading-relaxed mb-5 flex-1" style={{ fontFamily: "var(--font-sans)" }}>
                  {cat.tagline}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5"
                  style={{ color: "#5f1e42" }}
                >
                  {cat.services.length} services
                  <ArrowRight size={14} aria-hidden="true" />
                </span>
              </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
