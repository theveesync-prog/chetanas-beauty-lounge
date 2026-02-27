import { notFound } from "next/navigation";
import {
  getCategoryBySlug,
  serviceCategories,
  WHATSAPP_BASE,
} from "@/lib/services-data";
import Navbar from "@/components/Navbar";
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
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 700,
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

      {/* Main — sidebar + price list */}
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

          {/* Price list */}
          <div className="flex-1 min-w-0 pt-2">
            {/* Category heading */}
            <div className="mb-6">
              <h2
                className="text-[#111]"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.015em",
                }}
              >
                {cat.label}
              </h2>
              <p className="text-[#888] text-sm mt-1">{cat.tagline}</p>
            </div>

            {/* Service rows card */}
            <div
              className="rounded-2xl overflow-hidden shadow-sm"
              style={{ border: "1px solid rgba(0,0,0,0.07)" }}
            >
              {cat.services.map((svc, i) => (
                <a
                  key={svc.slug}
                  href={`/services/${cat.slug}/${svc.slug}`}
                  className={`flex items-center gap-4 px-5 py-4 transition-colors hover:bg-[#5f1e42]/[0.03] group ${
                    i !== cat.services.length - 1
                      ? "border-b border-black/[0.05]"
                      : ""
                  }`}
                >
                  {/* Name + badges */}
                  <div className="flex-1 min-w-0 flex flex-wrap items-center gap-2">
                    <span className="text-sm font-medium text-[#111] group-hover:text-[#5f1e42] transition-colors leading-snug">
                      {svc.name}
                    </span>
                    {svc.bestseller && (
                      <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#e8b80d]/12 text-[#7a5c00]">
                        ★ Best
                      </span>
                    )}
                    {svc.onSale && (
                      <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-green-50 text-green-700">
                        Sale
                      </span>
                    )}
                  </div>

                  {/* Duration */}
                  <span className="hidden sm:block text-xs text-[#bbb] flex-shrink-0 w-14 text-right">
                    {svc.duration}
                  </span>

                  {/* Price */}
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <span className="text-sm font-semibold text-[#5f1e42]">
                      {svc.price}
                    </span>
                    {svc.originalPrice && (
                      <span className="text-xs text-[#bbb] line-through">
                        {svc.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Chevron */}
                  <svg
                    className="w-3.5 h-3.5 text-[#ccc] group-hover:text-[#5f1e42] flex-shrink-0 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Book CTA */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-colors hover:opacity-90"
                style={{ backgroundColor: "#5f1e42" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L.057 23.882l6.199-1.435A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.997-1.366l-.358-.213-3.683.853.879-3.596-.234-.37A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
                </svg>
                Book a time
              </a>
              <span className="text-xs text-[#bbb]">
                {cat.services.length} services available
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
