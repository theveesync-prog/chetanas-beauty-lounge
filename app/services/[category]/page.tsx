import { notFound } from "next/navigation";
import {
  getCategoryBySlug,
  serviceCategories,
  WHATSAPP_BASE,
} from "@/lib/services-data";
import Navbar from "@/components/Navbar";
import ServicePriceListClient from "@/components/ServicePriceListClient";
import { SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ category: string }>;
}

const BRIDAL_JOURNEYS = [
  {
    name: "The Full Bridal Journey",
    timeline: "Ideal if you're starting ~3 months out",
    slugs: [
      "pre-bridal-package",
      "bride-facial-treatment",
      "mehendi-application",
      "engagement-makeup",
      "bridal-makeup",
      "reception-look",
      "saree-pre-folding",
      "saree-draping",
    ],
  },
  {
    name: "The Essentials Bridal Journey",
    timeline: "Ideal if you're starting ~1 month out",
    slugs: ["pre-bridal-package", "bridal-makeup", "mehendi-application", "saree-draping"],
  },
  {
    name: "The Fast-Track Bridal Journey",
    timeline: "Booking last-minute? Start here",
    slugs: ["bridal-makeup", "saree-draping"],
  },
];

export async function generateStaticParams() {
  return serviceCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  return {
    title: `${cat.label} in Mangalore`,
    description: cat.tagline,
    keywords: [
      `${cat.label} Mangalore`,
      `${cat.label} Mangaluru`,
      `best ${cat.label.toLowerCase()} salon Mangalore`,
      `${cat.label.toLowerCase()} near me Mangalore`,
      "ladies salon Mangalore",
      "Chetana's Beauty Lounge",
    ],
    openGraph: {
      title: `${cat.label} in Mangalore | Chetana's Beauty`,
      description: cat.tagline,
      type: "website",
    },
    alternates: {
      canonical: `${SITE_URL}/services/${category}`,
    },
  };
}

export default async function ServiceCategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const waLink = `${WHATSAPP_BASE}${encodeURIComponent(cat.label)}%20services.`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: cat.label, item: `${SITE_URL}/services/${cat.slug}` },
    ],
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Page header */}
      <div className="bg-white pt-28 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1
            className="text-[#111]"
            style={{
              fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {cat.label}
          </h1>
          <p className="mt-3 text-[#888] text-sm max-w-md leading-relaxed">
            {cat.tagline}
          </p>
        </div>
      </div>

      {/* Mobile category pills */}
      <div className="bg-white px-4 sm:px-6 pb-4 lg:hidden">
        <div className="max-w-5xl mx-auto flex gap-2 overflow-x-auto scrollbar-hide">
          {serviceCategories.map((c) => (
            <a
              key={c.slug}
              href={`/services/${c.slug}`}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                c.slug === cat.slug
                  ? "bg-[#5f1e42] text-white"
                  : "bg-[#5f1e42]/6 text-[#5f1e42] hover:bg-[#5f1e42]/12"
              }`}
            >
              {c.label}
            </a>
          ))}
        </div>
      </div>

      {/* Main — sidebar + interactive price list */}
      <div className="bg-white pb-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex gap-12 lg:gap-16 items-start">

          {/* Sidebar (desktop only, sticky) */}
          <aside className="hidden lg:block w-44 flex-shrink-0 sticky top-24">
            <p className="text-[10px] uppercase tracking-widest text-[#aaa] font-semibold mb-4">
              Categories
            </p>
            <nav aria-label="Service categories">
              {serviceCategories.map((c) => (
                <a
                  key={c.slug}
                  href={`/services/${c.slug}`}
                  className={`flex items-center justify-between py-2.5 text-sm border-b border-black/4 last:border-0 transition-colors ${
                    c.slug === cat.slug
                      ? "text-[#5f1e42] font-semibold"
                      : "text-[#666] hover:text-[#5f1e42]"
                  }`}
                >
                  <span>{c.label}</span>
                  {c.slug === cat.slug && (
                    <span className="text-[#5f1e42]" aria-hidden="true">›</span>
                  )}
                </a>
              ))}
            </nav>
          </aside>

          {/* Category heading + client price list */}
          <div className="flex-1 min-w-0 pt-2">
            <div className="mb-6">
              <h2
                className="text-[#111]"
                style={{
                  fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.015em",
                }}
              >
                {cat.label}
              </h2>
              <p className="text-[#888] text-sm mt-1">{cat.tagline}</p>
            </div>

            {cat.slug === "bridal" && (
              <div className="mb-10 pb-10 border-b border-black/6">
                <h3
                  className="text-[#111] mb-2"
                  style={{
                    fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                    fontSize: "1.15rem",
                    fontWeight: 700,
                  }}
                >
                  Chetana&rsquo;s Natural Bridal Journey
                </h3>
                <p className="text-sm text-[#666] leading-relaxed mb-6 max-w-2xl">
                  We specialise in timeless, natural bridal looks that hold up through a long coastal-Karnataka
                  wedding day, not heavy, cakey glam. Every journey below is built from our individually bookable
                  bridal services, so you can see exactly what&rsquo;s included and what it costs before you book.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {BRIDAL_JOURNEYS.map((journey) => {
                    const items = journey.slugs
                      .map((slug) => cat.services.find((s) => s.slug === slug))
                      .filter((s): s is (typeof cat.services)[number] => Boolean(s));
                    return (
                      <div
                        key={journey.name}
                        className="rounded-2xl border p-5"
                        style={{ borderColor: "rgba(0,0,0,0.06)" }}
                      >
                        <p className="text-sm font-semibold text-[#5f1e42] mb-1">{journey.name}</p>
                        <p className="text-xs text-[#888] mb-4">{journey.timeline}</p>
                        <ul className="space-y-2">
                          {items.map((item) => (
                            <li key={item.slug} className="flex items-baseline justify-between gap-2 text-xs">
                              <a
                                href={`/services/bridal/${item.slug}`}
                                className="text-[#333] hover:text-[#5f1e42] transition-colors"
                              >
                                {item.name}
                              </a>
                              <span className="text-[#999] flex-shrink-0">{item.price}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
                <p className="text-xs text-[#999] mt-4">
                  Every service above is individually bookable at the price shown. Message us on WhatsApp and
                  we&rsquo;ll help you build a timeline around your wedding date.
                </p>
              </div>
            )}

            <ServicePriceListClient
              services={cat.services}
              categorySlug={cat.slug}
              categoryLabel={cat.label}
              waLink={waLink}
            />
          </div>
        </div>
      </div>
    </>
  );
}
