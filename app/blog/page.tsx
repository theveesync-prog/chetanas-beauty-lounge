import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { blogPosts, blogCategories, getFeaturedPost } from "@/lib/blog-data";
import { ArrowRight, Clock, CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "Beauty Blog — Tips, Trends & Expert Advice | Chetana's Beauty Mangalore",
  description:
    "Expert beauty advice from Chetana's Beauty, Mangalore's CIDESCO-certified salon. Skin care routines for coastal humidity, bridal makeup tips, keratin vs straightening guides, nail art trends and more.",
  keywords: [
    "beauty blog Mangalore",
    "salon tips Mangaluru",
    "bridal makeup advice Mangalore",
    "skin care tips humid climate",
    "keratin treatment guide",
    "nail art trends Mangalore",
  ],
  openGraph: {
    title: "Beauty Blog | Chetana's Beauty Mangalore",
    description:
      "Expert beauty tips, trends and guides from Mangalore's CIDESCO-certified salon.",
    type: "website",
  },
  alternates: {
    canonical: "https://chetanasbeauty.in/blog",
  },
};

interface Props {
  searchParams: Promise<{ category?: string }>;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const WHATSAPP =
  "https://wa.me/919845292411?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Chetana%27s%20Beauty%20Lounge.";

export default async function BlogPage({ searchParams }: Props) {
  const { category } = await searchParams;
  const activeCategory = category || "all";

  const featured = getFeaturedPost();
  const allPosts = blogPosts;

  const filtered =
    activeCategory === "all"
      ? allPosts
      : allPosts.filter((p) => p.categorySlug === activeCategory);

  const gridPosts = featured
    ? filtered.filter((p) => p.slug !== featured.slug)
    : filtered;

  return (
    <>
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-white pt-28 pb-12 px-4 sm:px-6 lg:px-8" aria-label="Blog hero">
        <div className="max-w-5xl mx-auto">
          <span className="section-label">From Our Experts</span>
          <h1
            className="mt-3 mb-4 text-[#111] leading-tight"
            style={{
              fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
              fontWeight: 800,
              fontSize: "clamp(2.4rem, 6vw, 4rem)",
              letterSpacing: "-0.025em",
            }}
          >
            Beauty Tips &amp; Guides
          </h1>
          <p
            className="text-lg max-w-2xl leading-relaxed"
            style={{ color: "#555", fontFamily: "var(--font-sans)" }}
          >
            Skin care routines built for Mangalore&apos;s coastal humidity,
            bridal prep timelines, hair treatment comparisons and nail trends
            — all from our CIDESCO-certified team.
          </p>
        </div>
      </section>

      {/* ── Category Pills ─────────────────────────────────────── */}
      <div
        className="sticky z-40 bg-white border-b"
        style={{ top: "72px", borderColor: "rgba(0,0,0,0.06)" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {blogCategories.map((cat) => {
              const isActive = cat.slug === activeCategory;
              return (
                <a
                  key={cat.slug}
                  href={cat.slug === "all" ? "/blog" : `/blog?category=${cat.slug}`}
                  className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    isActive ? "text-white" : "hover:bg-[#5f1e42]/10"
                  }`}
                  style={
                    isActive
                      ? { backgroundColor: "#5f1e42" }
                      : { backgroundColor: "rgba(95,30,66,0.06)", color: "#5f1e42" }
                  }
                >
                  {cat.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Featured Post ──────────────────────────────────────── */}
      {featured && activeCategory === "all" && (
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-8" aria-label="Featured article">
          <div className="max-w-5xl mx-auto">
            <span className="section-label">Featured Article</span>
            <a
              href={`/blog/${featured.slug}`}
              className="group mt-5 block rounded-3xl overflow-hidden border hover:border-[#5f1e42]/20 hover:-translate-y-0.5 transition-all duration-200"
              style={{ borderColor: "rgba(0,0,0,0.06)", backgroundColor: "white" }}
              aria-label={`Read featured article: ${featured.title}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative overflow-hidden" style={{ minHeight: "300px" }}>
                  <img
                    src={featured.coverImage}
                    alt={featured.coverAlt}
                    loading="eager"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span
                    className="absolute top-5 left-5 px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: "#5f1e42" }}
                  >
                    {featured.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-8 md:p-10 gap-5">
                  <h2
                    className="leading-snug"
                    style={{
                      fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                      fontWeight: 700,
                      fontSize: "clamp(1.5rem, 2.8vw, 2rem)",
                      letterSpacing: "-0.015em",
                      color: "#111",
                    }}
                  >
                    {featured.title}
                  </h2>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#555", fontFamily: "var(--font-sans)" }}
                  >
                    {featured.excerpt}
                  </p>

                  {/* Meta */}
                  <div
                    className="flex flex-wrap items-center gap-3 text-xs"
                    style={{ color: "#888", fontFamily: "var(--font-sans)" }}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                        style={{ backgroundColor: featured.authorColor }}
                        aria-hidden="true"
                      >
                        {featured.authorInitials}
                      </span>
                      <span className="font-medium text-[#333]">{featured.author}</span>
                    </div>
                    <span aria-hidden="true" className="opacity-40">·</span>
                    <span className="flex items-center gap-1">
                      <CalendarDays size={12} aria-hidden="true" />
                      {formatDate(featured.publishedAt)}
                    </span>
                    <span aria-hidden="true" className="opacity-40">·</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} aria-hidden="true" />
                      {featured.readTime} min read
                    </span>
                  </div>

                  <span
                    className="inline-flex items-center gap-2 text-xs font-semibold transition-all group-hover:gap-3"
                    style={{ color: "#5f1e42" }}
                  >
                    Read Article
                    <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </section>
      )}

      {/* ── Article Grid ───────────────────────────────────────── */}
      <section className="bg-white pb-20 px-4 sm:px-6 lg:px-8" aria-label="All articles">
        <div className="max-w-5xl mx-auto">
          {activeCategory !== "all" && (
            <span className="section-label block mb-8">
              {blogCategories.find((c) => c.slug === activeCategory)?.label ?? "Articles"}
            </span>
          )}

          {gridPosts.length === 0 ? (
            <div className="text-center py-16" style={{ color: "#888" }}>
              <p className="text-base">No articles in this category yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {gridPosts.map((post) => (
                <article key={post.slug}>
                  <a
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col h-full rounded-2xl overflow-hidden border hover:border-[#5f1e42]/20 hover:-translate-y-0.5 transition-all duration-200"
                    style={{
                      borderColor: "rgba(0,0,0,0.06)",
                      backgroundColor: "white",
                    }}
                    aria-label={`Read article: ${post.title}`}
                  >
                    {/* Cover image */}
                    <div className="relative overflow-hidden" style={{ height: "200px" }}>
                      <img
                        src={post.coverImage}
                        alt={post.coverAlt}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span
                        className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white"
                        style={{ backgroundColor: "#5f1e42" }}
                      >
                        {post.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-5 gap-3">
                      <h2
                        className="leading-snug"
                        style={{
                          fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                          fontWeight: 700,
                          fontSize: "1rem",
                          color: "#111",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {post.title}
                      </h2>
                      <p
                        className="text-xs leading-relaxed flex-1"
                        style={{ color: "#666", fontFamily: "var(--font-sans)" }}
                      >
                        {post.excerpt}
                      </p>

                      {/* Footer */}
                      <div
                        className="flex items-center justify-between pt-3 border-t"
                        style={{ borderColor: "rgba(0,0,0,0.06)" }}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                            style={{ backgroundColor: post.authorColor }}
                            aria-hidden="true"
                          >
                            {post.authorInitials}
                          </span>
                          <div>
                            <p
                              className="text-xs font-semibold leading-none"
                              style={{ color: "#333" }}
                            >
                              {post.author}
                            </p>
                            <p
                              className="text-xs mt-0.5"
                              style={{ color: "#888", fontFamily: "var(--font-sans)" }}
                            >
                              {formatDate(post.publishedAt)} · {post.readTime} min
                            </p>
                          </div>
                        </div>
                        <span
                          className="flex items-center gap-1 text-xs font-semibold transition-all group-hover:gap-2"
                          style={{ color: "#5f1e42" }}
                        >
                          Read <ArrowRight size={12} aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-20 px-4"
        style={{ backgroundColor: "#5f1e42" }}
        aria-label="Book an appointment"
      >
        <div
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-10 pointer-events-none"
          style={{ backgroundColor: "#e8b80d" }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full opacity-10 pointer-events-none"
          style={{ backgroundColor: "#e8b80d" }}
          aria-hidden="true"
        />

        <div className="relative max-w-3xl mx-auto text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "rgba(232,184,13,0.85)" }}
          >
            Ready to Experience It Yourself?
          </p>
          <h2
            className="text-white mb-5 leading-tight"
            style={{
              fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Your best look is one appointment away
          </h2>
          <p
            className="text-white/70 text-base mb-10 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            From the bridal chair to everyday glow-ups — our CIDESCO-certified
            team in Kankanady, Mangalore is ready to make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-sm btn-gold hover:opacity-90 transition-opacity"
              style={{ color: "#3a1a00" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L.057 23.882l6.199-1.435A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.997-1.366l-.358-.213-3.683.853.879-3.596-.234-.37A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
              </svg>
              Book via WhatsApp
            </a>
            <a
              href="/services/hair-care"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm border border-white/25 text-white hover:bg-white/10 transition-colors"
            >
              View All Services
              <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
