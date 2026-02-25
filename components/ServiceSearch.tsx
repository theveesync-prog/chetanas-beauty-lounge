"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { getAllServices } from "@/lib/services-data";
import Link from "next/link";

export default function ServiceSearch() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const allServices = useMemo(() => getAllServices(), []);

  const results = useMemo(() => {
    if (query.length < 2) return [];
    const q = query.toLowerCase();
    return allServices
      .filter(
        ({ service, category }) =>
          service.name.toLowerCase().includes(q) ||
          service.description.toLowerCase().includes(q) ||
          category.label.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [query, allServices]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-xl mx-auto">
      <div className="relative">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8c7b72]"
        />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder="Search all services... e.g. facial, keratin, bridal"
          className="w-full pl-11 pr-10 py-3 rounded-full border border-[#5f1e42]/15 bg-white text-sm text-[#1a0d0d] placeholder:text-[#c0b0a8] outline-none focus:border-[#5f1e42]/40 focus:ring-2 focus:ring-[#5f1e42]/8 transition-all"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            <X size={16} className="text-[#8c7b72]" />
          </button>
        )}
      </div>

      {isFocused && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-xl border border-[#5f1e42]/8 overflow-hidden z-50">
          {results.map(({ service, category }) => (
            <Link
              key={service.slug}
              href={`/services/${category.slug}/${service.slug}`}
              onClick={() => {
                setQuery("");
                setIsFocused(false);
              }}
              className="flex items-center justify-between px-4 py-3 hover:bg-[#fdf8f5] transition-colors border-b border-[#5f1e42]/5 last:border-b-0"
            >
              <div>
                <p className="text-sm font-medium text-[#1a0d0d]">
                  {service.name}
                </p>
                <p className="text-xs text-[#8c7b72]">
                  {category.label} &middot; {service.price}
                </p>
              </div>
              {service.bestseller && (
                <span className="text-[10px] font-semibold bg-[#e8b80d]/15 text-[#8a6c00] px-2 py-0.5 rounded-full">
                  Bestseller
                </span>
              )}
            </Link>
          ))}
        </div>
      )}

      {isFocused && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-xl border border-[#5f1e42]/8 p-6 text-center z-50">
          <p className="text-sm text-[#8c7b72]">
            No services found for &ldquo;{query}&rdquo;
          </p>
        </div>
      )}
    </div>
  );
}
