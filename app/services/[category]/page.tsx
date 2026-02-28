import { notFound } from "next/navigation";
import {
  getCategoryBySlug,
  serviceCategories,
  WHATSAPP_BASE,
} from "@/lib/services-data";
import Navbar from "@/components/Navbar";
import ServicePriceListClient from "@/components/ServicePriceListClient";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return serviceCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  return {
    title: `${cat.label} — Chetana's Beauty Lounge`,
    description: cat.tagline,
  };
}

export default async function ServiceCategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const waLink = `${WHATSAPP_BASE}${encodeURIComponent(cat.label)}%20services.`;

  return (
    <>
      <Navbar />

      {/* Page header */}
      <div className="bg-white pt-28 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <span className="section-label">Our Services</span>
          <h1
            className="mt-3 text-[#111]"
            style={{
              fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Affordable beauty,
            <br />
            exceptional results
          </h1>
          <p className="mt-4 text-[#888] text-sm max-w-md leading-relaxed">
            Six categories, every treatment crafted for Mangalore&rsquo;s
            women — all under one roof.
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
