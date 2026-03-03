import { notFound } from "next/navigation";
import Link from "next/link";
import {
  serviceCategories,
  getServiceBySlug,
  WHATSAPP_BASE,
} from "@/lib/services-data";
import { getFaqsForService } from "@/lib/service-faqs";
import Navbar from "@/components/Navbar";
import ServiceImage from "@/components/ServiceImage";
import FAQAccordion from "@/components/FAQAccordion";
import AddToCartButton from "@/components/AddToCartButton";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ category: string; service: string }>;
}

export async function generateStaticParams() {
  return serviceCategories.flatMap((cat) =>
    cat.services.map((svc) => ({
      category: cat.slug,
      service: svc.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, service } = await params;
  const result = getServiceBySlug(category, service);
  if (!result) return {};
  const { category: cat, service: svc } = result;
  const description = svc.longDescription ?? svc.description;
  return {
    title: `${svc.name} in Mangalore — ${cat.label} | Chetana's Beauty`,
    description,
    keywords: [
      `${svc.name} Mangalore`,
      `${svc.name} Mangaluru`,
      `${cat.label.toLowerCase()} Mangalore`,
      `best ${svc.name.toLowerCase()} Mangalore`,
      "ladies salon Mangalore",
      "Chetana's Beauty Lounge",
    ],
    openGraph: {
      title: `${svc.name} — Chetana's Beauty Mangalore`,
      description,
      type: "website",
    },
    alternates: {
      canonical: `https://chetanasbeauty.in/services/${category}/${service}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { category, service } = await params;
  const result = getServiceBySlug(category, service);
  if (!result) notFound();

  const { category: cat, service: svc } = result;
  const faqs = getFaqsForService(svc.slug, cat.slug);
  const relatedServices = cat.services
    .filter((s) => s.slug !== svc.slug)
    .slice(0, 3);

  const waLink = `${WHATSAPP_BASE}${encodeURIComponent(svc.name)}%20(${encodeURIComponent(svc.price)}).`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://chetanasbeauty.in" },
      { "@type": "ListItem", position: 2, name: cat.label, item: `https://chetanasbeauty.in/services/${cat.slug}` },
      { "@type": "ListItem", position: 3, name: svc.name, item: `https://chetanasbeauty.in/services/${cat.slug}/${svc.slug}` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.name,
    description: svc.longDescription ?? svc.description,
    url: `https://chetanasbeauty.in/services/${cat.slug}/${svc.slug}`,
    provider: {
      "@type": "BeautySalon",
      name: "Chetana's Beauty",
      url: "https://chetanasbeauty.in",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mangalore",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Mangalore",
    },
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-white pt-24 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <nav
            className="flex items-center gap-1.5 text-xs text-[#aaa]"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#5f1e42] transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href={`/services/${cat.slug}`}
              className="hover:text-[#5f1e42] transition-colors"
            >
              {cat.label}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#5f1e42] font-medium">{svc.name}</span>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <section className="bg-white py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Left: Image */}
            <ServiceImage
              categorySlug={cat.slug}
              serviceName={svc.name}
              className="w-full aspect-[4/3] rounded-3xl"
              size="lg"
            />

            {/* Right: Details */}
            <div className="space-y-6">

              {/* Badges */}
              {(svc.bestseller || svc.onSale) && (
                <div className="flex gap-2">
                  {svc.bestseller && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#e8b80d]/12 text-[#7a5c00]">
                      ★ Bestseller
                    </span>
                  )}
                  {svc.onSale && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700">
                      On Sale
                    </span>
                  )}
                </div>
              )}

              {/* Service name */}
              <h1
                className="text-[#111]"
                style={{
                  fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                {svc.name}
              </h1>

              {/* Price + Duration */}
              <div className="flex items-baseline gap-3">
                <span
                  className="text-[#111]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2rem, 4vw, 2.5rem)",
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  {svc.price}
                </span>
                {svc.originalPrice && (
                  <span className="text-base text-[#bbb] line-through">
                    {svc.originalPrice}
                  </span>
                )}
                <span className="text-sm text-[#aaa]">· {svc.duration}</span>
              </div>

              {/* Divider */}
              <div className="h-px bg-black/6" />

              {/* Description */}
              <p className="text-[#555] text-base leading-relaxed">
                {svc.longDescription ?? svc.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold shadow-sm"
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
                  Book Now on WhatsApp
                </a>
                <AddToCartButton
                  item={{
                    serviceSlug: svc.slug,
                    categorySlug: cat.slug,
                    name: svc.name,
                    price: svc.price,
                    originalPrice: svc.originalPrice,
                    categoryLabel: cat.label,
                  }}
                  variant="outline"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-black/5">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-[#111] mb-8"
              style={{
                fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                fontWeight: 700,
                letterSpacing: "-0.015em",
              }}
            >
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-black/5">
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-[#111] mb-8"
              style={{
                fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                fontWeight: 700,
                letterSpacing: "-0.015em",
              }}
            >
              More in {cat.label}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={`/services/${cat.slug}/${related.slug}`}
                  className="rounded-2xl p-5 hover:border-[#5f1e42]/25 hover:-translate-y-0.5 transition-all shadow-sm block group"
                  style={{ border: "1px solid rgba(0,0,0,0.07)" }}
                >
                  <h3
                    className="text-[#111] mb-2 group-hover:text-[#5f1e42] transition-colors leading-snug"
                    style={{
                      fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                      fontWeight: 600,
                      fontSize: "0.9375rem",
                    }}
                  >
                    {related.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-[#111]">
                      {related.price}
                    </span>
                    {related.originalPrice && (
                      <span className="text-xs text-[#bbb] line-through">
                        {related.originalPrice}
                      </span>
                    )}
                    <span className="text-xs text-[#aaa]">
                      · {related.duration}
                    </span>
                  </div>
                  <p className="mt-3 text-xs font-medium text-[#5f1e42]">
                    View details →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
