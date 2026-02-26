import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import {
  blogPosts,
  getBlogPost,
  getRelatedPosts,
  type BlogSection,
} from "@/lib/blog-data";
import { ArrowLeft, ArrowRight, Clock, CalendarDays } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Chetana's Beauty Blog`,
    description: post.metaDescription,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [{ url: post.coverImage, alt: post.coverAlt }],
    },
    alternates: {
      canonical: `https://chetanasbeauty.in/blog/${post.slug}`,
    },
  };
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

function ContentRenderer({ sections }: { sections: BlogSection[] }) {
  return (
    <div className="prose-blog">
      {sections.map((section, i) => {
        switch (section.type) {
          case "paragraph":
            return (
              <p
                key={i}
                className="text-base md:text-lg leading-relaxed mb-6"
                style={{ color: "#3a2a2a" }}
              >
                {section.text}
              </p>
            );

          case "heading":
            return (
              <h2
                key={i}
                className="font-display text-2xl md:text-3xl font-semibold mt-10 mb-4"
                style={{ color: "#5f1e42" }}
              >
                {section.text}
              </h2>
            );

          case "subheading":
            return (
              <h3
                key={i}
                className="font-display text-xl font-semibold mt-7 mb-3"
                style={{ color: "#1a0d0d" }}
              >
                {section.text}
              </h3>
            );

          case "list":
            return (
              <ul key={i} className="mb-6 space-y-3">
                {section.items?.map((item, j) => (
                  <li key={j} className="flex gap-3 items-start">
                    <span
                      className="mt-1.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "rgba(95,30,66,0.1)" }}
                      aria-hidden="true"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "#5f1e42" }}
                      />
                    </span>
                    <span
                      className="text-base md:text-lg leading-relaxed"
                      style={{ color: "#3a2a2a" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            );

          case "tip":
            return (
              <div
                key={i}
                className="my-8 rounded-2xl p-6 border-l-4"
                style={{
                  backgroundColor: "#fdf5d6",
                  borderLeftColor: "#e8b80d",
                }}
                role="note"
                aria-label="Pro tip"
              >
                <p
                  className="text-xs font-bold uppercase tracking-wider mb-2"
                  style={{ color: "#b8860b" }}
                >
                  Pro Tip
                </p>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: "#3a2a2a" }}
                >
                  {section.text}
                </p>
              </div>
            );

          case "quote":
            return (
              <blockquote
                key={i}
                className="my-8 rounded-2xl p-7 relative"
                style={{ backgroundColor: "#f5ece4" }}
              >
                <span
                  className="font-display text-6xl leading-none absolute top-2 left-6 opacity-20"
                  style={{ color: "#5f1e42" }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p
                  className="font-display text-xl md:text-2xl italic font-medium leading-snug mb-3 relative"
                  style={{ color: "#5f1e42" }}
                >
                  {section.text}
                </p>
                {section.author && (
                  <footer
                    className="text-sm font-semibold"
                    style={{ color: "#8c7b72" }}
                  >
                    — {section.author}
                  </footer>
                )}
              </blockquote>
            );

          case "cta":
            return (
              <div
                key={i}
                className="my-8 rounded-2xl p-7 text-center"
                style={{ backgroundColor: "rgba(95,30,66,0.04)", border: "1px solid rgba(95,30,66,0.1)" }}
              >
                <p
                  className="text-base md:text-lg font-medium mb-5"
                  style={{ color: "#3a2a2a" }}
                >
                  {section.text}
                </p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white hover:opacity-90 transition-opacity"
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
                  Chat on WhatsApp
                </a>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: post.coverImage,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorTitle,
    },
    publisher: {
      "@type": "Organization",
      name: "Chetana's Beauty",
      url: "https://chetanasbeauty.in",
    },
    datePublished: post.publishedAt,
    keywords: post.tags.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://chetanasbeauty.in/blog/${post.slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://chetanasbeauty.in" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://chetanasbeauty.in/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://chetanasbeauty.in/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <Navbar />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── Cover Image Hero ───────────────────────────────────── */}
      <div className="relative w-full pt-16" style={{ height: "520px" }}>
        <img
          src={post.coverImage}
          alt={post.coverAlt}
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark gradient overlay for legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(26,13,13,0.82) 0%, rgba(26,13,13,0.35) 50%, rgba(26,13,13,0.15) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Hero content pinned to bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-10">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav
              className="flex items-center gap-1.5 text-xs font-medium mb-5 text-white/60"
              aria-label="Breadcrumb"
            >
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span aria-hidden="true">/</span>
              <a href="/blog" className="hover:text-white transition-colors">Blog</a>
              <span aria-hidden="true">/</span>
              <span className="text-white/90 truncate max-w-[200px]">{post.title}</span>
            </nav>

            {/* Category */}
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-4"
              style={{ backgroundColor: "rgba(232,184,13,0.9)" , color: "#3a1a00" }}
            >
              {post.category}
            </span>

            {/* Title */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-5 max-w-3xl">
              {post.title}
            </h1>

            {/* Author + Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/75">
              <div className="flex items-center gap-2">
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 border-2 border-white/30"
                  style={{ backgroundColor: post.authorColor }}
                  aria-hidden="true"
                >
                  {post.authorInitials}
                </span>
                <div>
                  <p className="font-semibold text-white leading-none">{post.author}</p>
                  <p className="text-xs mt-0.5 text-white/60">{post.authorTitle}</p>
                </div>
              </div>
              <span aria-hidden="true" className="opacity-40">|</span>
              <span className="flex items-center gap-1.5">
                <CalendarDays size={13} aria-hidden="true" />
                {formatDate(post.publishedAt)}
              </span>
              <span aria-hidden="true" className="opacity-40">|</span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} aria-hidden="true" />
                {post.readTime} min read
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Article Body ───────────────────────────────────────── */}
      <main
        className="py-14 px-4"
        style={{ backgroundColor: "#fdf8f5" }}
        aria-label="Article content"
      >
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium mb-10 transition-colors hover:gap-3"
            style={{ color: "#5f1e42" }}
            aria-label="Back to all articles"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            All Articles
          </a>

          {/* Excerpt / lead */}
          <p
            className="font-display text-xl md:text-2xl font-medium leading-relaxed mb-10 pb-8 border-b"
            style={{
              color: "#5f1e42",
              borderColor: "rgba(95,30,66,0.12)",
            }}
          >
            {post.excerpt}
          </p>

          {/* Rich content */}
          <ContentRenderer sections={post.content} />

          {/* Tags */}
          <div
            className="mt-10 pt-8 border-t flex flex-wrap gap-2"
            style={{ borderColor: "rgba(95,30,66,0.12)" }}
          >
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: "rgba(95,30,66,0.07)",
                  color: "#5f1e42",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </main>

      {/* ── Related Posts ──────────────────────────────────────── */}
      {related.length > 0 && (
        <section
          className="py-16 px-4"
          style={{ backgroundColor: "#f5ece4" }}
          aria-label="Related articles"
        >
          <div className="max-w-7xl mx-auto">
            <p className="section-label mb-2">Keep Reading</p>
            <h2
              className="font-display text-3xl font-semibold mb-10"
              style={{ color: "#5f1e42" }}
            >
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rPost) => (
                <article key={rPost.slug}>
                  <a
                    href={`/blog/${rPost.slug}`}
                    className="group flex flex-col h-full rounded-2xl overflow-hidden shadow-sm border card-hover"
                    style={{
                      borderColor: "rgba(95,30,66,0.08)",
                      backgroundColor: "white",
                    }}
                    aria-label={`Read: ${rPost.title}`}
                  >
                    {/* Thumbnail */}
                    <div className="relative overflow-hidden" style={{ height: "180px" }}>
                      <img
                        src={rPost.coverImage}
                        alt={rPost.coverAlt}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span
                        className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white"
                        style={{ backgroundColor: "#5f1e42" }}
                      >
                        {rPost.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-5 gap-2">
                      <h3
                        className="font-display text-lg font-semibold leading-snug"
                        style={{ color: "#1a0d0d" }}
                      >
                        {rPost.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed flex-1"
                        style={{ color: "#8c7b72" }}
                      >
                        {rPost.excerpt.slice(0, 90)}…
                      </p>
                      <span
                        className="inline-flex items-center gap-1 text-xs font-semibold mt-2 transition-all group-hover:gap-2"
                        style={{ color: "#5f1e42" }}
                      >
                        Read Article <ArrowRight size={12} aria-hidden="true" />
                      </span>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Smooth CTA ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-20 px-4"
        style={{ backgroundColor: "#5f1e42" }}
        aria-label="Book an appointment"
      >
        {/* Decorative circles */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 pointer-events-none"
          style={{ backgroundColor: "#e8b80d" }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-10 pointer-events-none"
          style={{ backgroundColor: "#e8b80d" }}
          aria-hidden="true"
        />

        <div className="relative max-w-3xl mx-auto text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "rgba(232,184,13,0.8)" }}
          >
            Ready to Try It?
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-white mb-5 leading-tight">
            Turn these tips into your<br className="hidden sm:block" /> real transformation
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Our CIDESCO-certified team in Kankanady, Mangalore is ready to bring the
            advice in this article to life — for your skin, hair, or special occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm btn-gold shadow-lg hover:opacity-90 transition-opacity"
              style={{ color: "#3a1a00" }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L.057 23.882l6.199-1.435A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.997-1.366l-.358-.213-3.683.853.879-3.596-.234-.37A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
              </svg>
              Book via WhatsApp
            </a>
            <a
              href="/blog"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              <ArrowLeft size={15} aria-hidden="true" />
              More Articles
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
