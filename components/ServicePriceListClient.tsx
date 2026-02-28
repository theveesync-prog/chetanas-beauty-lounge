"use client";

import { useState, useRef, useMemo, useCallback } from "react";
import Link from "next/link";
import { ShoppingBag, Check, Sparkles, Star, Tag, Search, X, Phone } from "lucide-react";
import type { Service } from "@/lib/services-data";
import { useCart } from "@/lib/cart-context";

type Filter = "bestseller" | "sale" | "new" | null;

interface Props {
  services: Service[];
  categorySlug: string;
  categoryLabel: string;
  waLink: string;
}

// ── Bag button — isolated so its own state doesn't re-render the list ──────
function BagButton({
  item,
}: {
  item: {
    serviceSlug: string;
    categorySlug: string;
    name: string;
    price: string;
    originalPrice?: string;
    categoryLabel: string;
  };
}) {
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      addItem(item);
      setAdded(true);
      setTimeout(() => setAdded(false), 1200);
    },
    [addItem, item]
  );

  return (
    <button
      onClick={handleClick}
      aria-label={added ? "Added to bag" : "Add to bag"}
      className={`w-8 h-8 rounded-full border flex-shrink-0 flex items-center justify-center transition-all duration-200 ${
        added
          ? "bg-green-50 text-green-600 border-green-200 scale-110"
          : "border-black/10 text-[#aaa] hover:bg-[#5f1e42] hover:text-white hover:border-transparent hover:scale-110"
      }`}
    >
      {added ? <Check size={12} /> : <ShoppingBag size={12} />}
    </button>
  );
}

// ── Filter pill ─────────────────────────────────────────────────────────────
const FILTERS: {
  key: Filter;
  label: string;
  icon: React.ReactNode;
  activeBg: string;
  activeColor: string;
}[] = [
  {
    key: "bestseller",
    label: "Bestseller",
    icon: <Star size={11} className="flex-shrink-0" />,
    activeBg: "rgba(232,184,13,0.15)",
    activeColor: "#5a3c00",
  },
  {
    key: "sale",
    label: "On Sale",
    icon: <Tag size={11} className="flex-shrink-0" />,
    activeBg: "#dcfce7",
    activeColor: "#15803d",
  },
  {
    key: "new",
    label: "New",
    icon: <Sparkles size={11} className="flex-shrink-0" />,
    activeBg: "#ede9fe",
    activeColor: "#6d28d9",
  },
];

// ── Smart search scoring (no external library needed) ────────────────────────
function scoreMatch(svc: Service, raw: string): number {
  const q = raw.toLowerCase().trim();
  if (!q) return 1;
  const haystack = `${svc.name} ${svc.description ?? ""} ${svc.slug}`
    .toLowerCase()
    .replace(/-/g, " ");
  let score = 0;
  for (const word of q.split(/\s+/)) {
    if (word.length < 2) continue;
    if (haystack.includes(word)) score += word.length > 3 ? 2 : 1;
  }
  return score;
}

// ── Main component ───────────────────────────────────────────────────────────
export default function ServicePriceListClient({
  services,
  categorySlug,
  categoryLabel,
  waLink,
}: Props) {
  const [filter, setFilter] = useState<Filter>(null);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  // ── Filtered + searched list ───────────────────────────────────────────────
  const filtered = useMemo(() => {
    let result = services;
    if (filter === "bestseller") result = result.filter((s) => s.bestseller);
    else if (filter === "sale")  result = result.filter((s) => s.onSale);
    else if (filter === "new")   result = result.filter((s) => s.isNew);

    const q = query.trim();
    if (q) {
      result = result
        .map((s) => ({ s, score: scoreMatch(s, q) }))
        .filter(({ score }) => score > 0)
        .sort((a, b) => b.score - a.score)
        .map(({ s }) => s);
    }
    return result;
  }, [filter, services, query]);

  // ── Proximity lift animation ───────────────────────────────────────────────
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    if (isTouchDevice) return;

    rowRefs.current.forEach((row) => {
      if (!row) return;
      const rect = row.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const dist = Math.abs(e.clientY - centerY);
      const lift = Math.max(0, 1 - dist / 88) * 5; // max 5px within 88px
      row.style.transform = `translateY(-${lift.toFixed(1)}px)`;
      row.style.boxShadow =
        lift > 0.3
          ? `0 ${lift * 2}px ${lift * 9}px rgba(95,30,66,${(
              (lift / 5) *
              0.09
            ).toFixed(3)})`
          : "";
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    rowRefs.current.forEach((row) => {
      if (!row) return;
      row.style.transform = "";
      row.style.boxShadow = "";
    });
  }, []);

  return (
    <div className="flex-1 min-w-0 pt-2">

      {/* ── Search bar ────────────────────────────────────────────────────── */}
      <div className="relative mb-5">
        <Search
          size={15}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#ccc] pointer-events-none"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search services, e.g. threading, facial…"
          className="w-full pl-10 pr-9 py-3 rounded-2xl text-sm text-[#111] placeholder:text-[#bbb] bg-white outline-none focus:ring-2 focus:ring-[#5f1e42]/10 focus:border-[#5f1e42]/30 transition-all"
          style={{ border: "1px solid rgba(0,0,0,0.09)" }}
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#ccc] hover:text-[#888] transition-colors"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* ── Filter pills ──────────────────────────────────────────────────── */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        {FILTERS.map((f) => {
          const isActive = filter === f.key;
          return (
            <button
              key={f.key}
              onClick={() => setFilter(isActive ? null : f.key)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200"
              style={
                isActive
                  ? {
                      backgroundColor: f.activeBg,
                      color: f.activeColor,
                      borderColor: "transparent",
                    }
                  : {
                      backgroundColor: "transparent",
                      color: "#999",
                      borderColor: "rgba(0,0,0,0.1)",
                    }
              }
            >
              {f.icon}
              {f.label}
            </button>
          );
        })}

        {(filter || query.trim()) && filtered.length > 0 && (
          <span className="text-xs text-[#bbb] ml-1">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          </span>
        )}
      </div>

      {/* ── Price list card ────────────────────────────────────────────────── */}
      {filtered.length === 0 ? (
        query.trim() ? (
          /* Search returned nothing → invite them to call */
          <div className="rounded-2xl border border-black/6 px-6 py-10 text-center">
            <p className="text-[#555] text-sm leading-relaxed">
              Couldn&apos;t find what you&apos;re looking for? Our team is happy
              to help — give us a call and we&apos;ll guide you to the right treatment.
            </p>
            <p className="mt-5 text-[10px] uppercase tracking-widest text-[#bbb] font-semibold">
              Reach us directly
            </p>
            <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <a
                href="tel:+919845292411"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-[#111] transition-all duration-200 hover:bg-[#5f1e42] hover:text-white"
                style={{ background: "rgba(0,0,0,0.04)" }}
              >
                <Phone size={13} />
                +91 98452 92411
              </a>
              <a
                href="tel:+919108583714"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-[#111] transition-all duration-200 hover:bg-[#5f1e42] hover:text-white"
                style={{ background: "rgba(0,0,0,0.04)" }}
              >
                <Phone size={13} />
                +91 91085 83714
              </a>
            </div>
            <button
              onClick={() => setQuery("")}
              className="mt-5 text-xs text-[#5f1e42] font-medium hover:opacity-75 transition-opacity"
            >
              Clear search →
            </button>
          </div>
        ) : (
          /* Filter returned nothing, no search active */
          <div className="rounded-2xl border border-black/6 px-6 py-12 text-center">
            <p className="text-[#aaa] text-sm">No services match this filter.</p>
            <button
              onClick={() => setFilter(null)}
              className="mt-3 text-xs text-[#5f1e42] font-medium hover:opacity-75 transition-opacity"
            >
              Show all →
            </button>
          </div>
        )
      ) : (
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(0,0,0,0.07)" }}
        >
          {filtered.map((svc, i) => (
            <div
              key={svc.slug}
              ref={(el) => { rowRefs.current[i] = el; }}
              className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-4 group bg-white"
              style={{
                borderBottom:
                  i !== filtered.length - 1
                    ? "1px solid rgba(0,0,0,0.05)"
                    : "none",
                borderLeft: "2px solid transparent",
                transition:
                  "transform 0.18s ease, box-shadow 0.18s ease, border-left-color 0.15s ease, background 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderLeftColor = "rgba(232,184,13,0.45)";
                e.currentTarget.style.background = "rgba(95,30,66,0.018)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderLeftColor = "transparent";
                e.currentTarget.style.background = "#ffffff";
              }}
            >
              {/* Clickable name + meta → service detail */}
              <Link
                href={`/services/${categorySlug}/${svc.slug}`}
                className="flex-1 min-w-0 flex flex-wrap items-center gap-x-2 gap-y-1"
              >
                <span className="text-sm font-medium text-[#111] group-hover:text-[#5f1e42] transition-colors leading-snug">
                  {svc.name}
                </span>
                {svc.bestseller && (
                  <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#e8b80d]/12 text-[#7a5c00]">
                    <Star size={9} />
                    Best
                  </span>
                )}
                {svc.onSale && (
                  <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-green-50 text-green-700">
                    <Tag size={9} />
                    Sale
                  </span>
                )}
                {svc.isNew && (
                  <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-violet-50 text-violet-700">
                    <Sparkles size={9} />
                    New
                  </span>
                )}
              </Link>

              {/* Duration */}
              <span className="hidden sm:block text-xs text-[#bbb] flex-shrink-0 w-14 text-right">
                {svc.duration}
              </span>

              {/* Price */}
              <div className="flex items-center gap-1 flex-shrink-0">
                <span className="text-sm font-semibold text-[#111]">
                  {svc.price}
                </span>
                {svc.originalPrice && (
                  <span className="text-xs text-[#bbb] line-through">
                    {svc.originalPrice}
                  </span>
                )}
              </div>

              {/* Add to Bag */}
              <BagButton
                item={{
                  serviceSlug: svc.slug,
                  categorySlug,
                  name: svc.name,
                  price: svc.price,
                  originalPrice: svc.originalPrice,
                  categoryLabel,
                }}
              />

              {/* Chevron — also navigates */}
              <Link
                href={`/services/${categorySlug}/${svc.slug}`}
                tabIndex={-1}
                aria-hidden="true"
                className="flex-shrink-0"
              >
                <svg
                  className="w-3.5 h-3.5 text-[#ccc] group-hover:text-[#5f1e42] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 18l6-6-6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* ── Book CTA ───────────────────────────────────────────────────────── */}
      <div className="mt-6 flex items-center gap-4">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
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
          {services.length} service{services.length !== 1 ? "s" : ""} available
        </span>
      </div>
    </div>
  );
}
