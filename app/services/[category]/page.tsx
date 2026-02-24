import { notFound } from "next/navigation";
import { getCategoryBySlug, serviceCategories, WHATSAPP_BASE } from "@/lib/services-data";
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

  return (
    <>
      <Navbar />

      {/* ── Hero Banner ──────────────────────────────────────── */}
      <section className="pt-28 pb-12 bg-[#fdf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-4">Our Services</p>
          <h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#5f1e42] mb-4"
          >
            {cat.icon} {cat.label}
          </h1>
          <p className="text-[#8c7b72] text-lg max-w-xl mx-auto">{cat.tagline}</p>
        </div>
      </section>

      {/* ── Category Pills ───────────────────────────────────── */}
      <section className="bg-white border-y border-[#5f1e42]/8 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {serviceCategories.map((c) => (
              <a
                key={c.slug}
                href={`/services/${c.slug}`}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  c.slug === cat.slug
                    ? "bg-[#5f1e42] text-white"
                    : "bg-[#5f1e42]/5 text-[#5f1e42] hover:bg-[#5f1e42]/10"
                }`}
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Cards Grid ───────────────────────────────── */}
      <section className="py-14 bg-[#fdf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cat.services.map((service) => {
              const waLink =
                WHATSAPP_BASE +
                encodeURIComponent(service.name) +
                "%20(%E2%82%B9" +
                encodeURIComponent(service.price.replace("₹", "")) +
                ").";
              return (
                <div
                  key={service.name}
                  className="relative bg-white rounded-2xl border border-[#5f1e42]/8 p-6 flex flex-col gap-4 card-hover shadow-sm"
                >
                  {/* Bestseller tag */}
                  {service.bestseller && (
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#e8b80d]/15 text-[#8a6c00]">
                      ★ Bestseller
                    </span>
                  )}

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-[#1a0d0d] mb-2 pr-20">
                      {service.name}
                    </h3>
                    <p className="text-[#8c7b72] text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#5f1e42]/6">
                    <div>
                      <span className="font-display text-2xl font-semibold text-[#5f1e42]">
                        {service.price}
                      </span>
                      <span className="text-xs text-[#8c7b72] ml-2">· {service.duration}</span>
                    </div>
                  </div>

                  {/* Book Now button */}
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full text-sm font-semibold text-white bg-[#5f1e42] hover:bg-[#4a1733] transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L.057 23.882l6.199-1.435A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.997-1.366l-.358-.213-3.683.853.879-3.596-.234-.37A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
                    </svg>
                    Book Now
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────── */}
      <section className="py-16 bg-[#5f1e42]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-3">
            Not sure what you need?
          </h2>
          <p className="text-white/70 mb-8">
            Message us on WhatsApp and our team will help you choose the perfect treatment.
          </p>
          <a
            href="https://wa.me/919845292411?text=Hi%2C%20I%27d%20like%20some%20help%20choosing%20a%20service%20at%20Chetana%27s%20Beauty%20Lounge."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[#3a1a00] btn-gold text-sm"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L.057 23.882l6.199-1.435A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.997-1.366l-.358-.213-3.683.853.879-3.596-.234-.37A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
            </svg>
            Chat with Us on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
