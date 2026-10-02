import { getCategoryBySlug, WHATSAPP_BASE } from "@/lib/services-data";
import ServicePriceListClient from "@/components/ServicePriceListClient";

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

export default function BridalServices() {
  const cat = getCategoryBySlug("bridal");
  if (!cat) return null;

  const waLink = `${WHATSAPP_BASE}${encodeURIComponent(cat.label)}%20services.`;

  return (
    <section
      id="bridal-services"
      className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-24"
      aria-label="Bridal services"
    >
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <h2
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
          </h2>
          <p className="mt-3 text-[#888] text-sm max-w-md leading-relaxed">
            {cat.tagline}
          </p>
        </div>

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

        <ServicePriceListClient
          services={cat.services}
          categorySlug={cat.slug}
          categoryLabel={cat.label}
          waLink={waLink}
        />
      </div>
    </section>
  );
}
