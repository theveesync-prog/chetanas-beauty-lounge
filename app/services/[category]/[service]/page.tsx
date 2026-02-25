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
  return {
    title: `${result.service.name} — ${result.category.label} | Chetana's Beauty Lounge`,
    description: result.service.longDescription ?? result.service.description,
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

  return (
    <>
      <Navbar />

      {/* Breadcrumb */}
      <section className="pt-20 pb-2 bg-[#fdf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center gap-2 text-xs text-[#8c7b72]"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#5f1e42] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href={`/services/${cat.slug}`}
              className="hover:text-[#5f1e42] transition-colors"
            >
              {cat.label}
            </Link>
            <span>/</span>
            <span className="text-[#5f1e42] font-medium">{svc.name}</span>
          </nav>
        </div>
      </section>

      {/* Main Content — 2 column */}
      <section className="py-8 md:py-12 bg-[#fdf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Image */}
            <ServiceImage
              categorySlug={cat.slug}
              serviceName={svc.name}
              className="w-full aspect-[4/3] rounded-2xl"
              size="lg"
            />

            {/* Right: Details */}
            <div className="space-y-6">
              {/* Badges */}
              <div className="flex gap-2">
                {svc.bestseller && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#e8b80d]/15 text-[#8a6c00]">
                    ★ Bestseller
                  </span>
                )}
                {svc.onSale && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700">
                    On Sale
                  </span>
                )}
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1a0d0d]">
                {svc.name}
              </h1>

              {/* Price + Duration */}
              <div className="flex items-center gap-3">
                <span className="font-display text-3xl font-semibold text-[#5f1e42]">
                  {svc.price}
                </span>
                {svc.originalPrice && (
                  <span className="text-lg text-[#8c7b72] line-through">
                    {svc.originalPrice}
                  </span>
                )}
                <span className="text-sm text-[#8c7b72]">
                  · {svc.duration}
                </span>
              </div>

              {/* Description */}
              <p className="text-[#5a4040] text-base leading-relaxed">
                {svc.longDescription ?? svc.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold shadow-md"
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
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-[#1a0d0d] mb-8">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-12 md:py-16 bg-[#fdf8f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-[#1a0d0d] mb-8">
              More in {cat.label}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={`/services/${cat.slug}/${related.slug}`}
                  className="bg-white rounded-2xl border border-[#5f1e42]/8 overflow-hidden card-hover shadow-sm block"
                >
                  <ServiceImage
                    categorySlug={cat.slug}
                    serviceName={related.name}
                    className="h-32 w-full"
                    size="sm"
                  />
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-[#1a0d0d] mb-1">
                      {related.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#5f1e42]">
                        {related.price}
                      </span>
                      {related.originalPrice && (
                        <span className="text-xs text-[#8c7b72] line-through">
                          {related.originalPrice}
                        </span>
                      )}
                      <span className="text-xs text-[#8c7b72]">
                        · {related.duration}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
