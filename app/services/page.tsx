import Link from "next/link";
import Navbar from "@/components/Navbar";
import { serviceCategories, WHATSAPP_BASE } from "@/lib/services-data";

export const metadata = { title: "Services | Chetana's Beauty Lounge" };

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="bg-white pt-28 pb-10 px-5">
        <div className="max-w-5xl mx-auto">
          <span className="section-label">Our Services</span>
          <h1
            style={{
              fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
            }}
            className="text-[#111] mt-3 mb-4 leading-tight"
          >
            Six categories.
            <br className="hidden sm:block" /> Every treatment you need.
          </h1>
          <p
            className="text-[#555] text-lg max-w-xl"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Mangalore&apos;s CIDESCO-certified women-only salon — pick a
            category to browse services and prices.
          </p>
        </div>
      </section>

      {/* Category grid */}
      <section className="bg-white pb-20 px-5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceCategories.map((cat) => {
            const bestsellers = cat.services
              .filter((s) => s.bestseller)
              .slice(0, 2);
            return (
              <Link
                key={cat.slug}
                href={`/services/${cat.slug}`}
                className="group rounded-2xl border border-[rgba(0,0,0,0.06)] p-6 bg-white hover:border-[#5f1e42]/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h2
                  style={{
                    fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                    fontWeight: 700,
                  }}
                  className="text-[#111] text-xl mb-1"
                >
                  {cat.label}
                </h2>
                <p
                  className="text-[#888] text-sm mb-3"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {cat.tagline}
                </p>
                {bestsellers.length > 0 && (
                  <ul className="mb-4 space-y-1">
                    {bestsellers.map((s) => (
                      <li
                        key={s.slug}
                        className="text-xs text-[#555] flex items-center gap-1.5"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#5f1e42] flex-shrink-0" />
                        {s.name}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#aaa]">
                    {cat.services.length} services
                  </span>
                  <span className="text-sm font-semibold text-[#5f1e42] group-hover:translate-x-0.5 transition-transform">
                    Explore →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* WhatsApp CTA */}
        <div className="max-w-5xl mx-auto mt-12 text-center">
          <a
            href={WHATSAPP_BASE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-sm"
            style={{ backgroundColor: "#5f1e42" }}
          >
            Book via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
