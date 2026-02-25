"use client";

import { useState, useMemo } from "react";
import { ArrowUpDown, ArrowUp, ArrowDown, Star, Tag } from "lucide-react";
import Link from "next/link";
import type { ServiceCategory } from "@/lib/services-data";
import { WHATSAPP_BASE } from "@/lib/services-data";
import { parsePrice } from "@/lib/utils";
import ServiceImage from "@/components/ServiceImage";
import AddToCartButton from "@/components/AddToCartButton";

type SortMode = "default" | "price-asc" | "price-desc" | "bestseller" | "on-sale";

const SORT_OPTIONS: { value: SortMode; label: string; icon: typeof ArrowUpDown }[] = [
  { value: "default", label: "Default", icon: ArrowUpDown },
  { value: "price-asc", label: "Low to High", icon: ArrowUp },
  { value: "price-desc", label: "High to Low", icon: ArrowDown },
  { value: "bestseller", label: "Bestseller", icon: Star },
  { value: "on-sale", label: "On Sale", icon: Tag },
];

export default function ServiceGrid({ category }: { category: ServiceCategory }) {
  const [sortMode, setSortMode] = useState<SortMode>("default");

  const sortedServices = useMemo(() => {
    const services = [...category.services];
    switch (sortMode) {
      case "price-asc":
        return services.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
      case "price-desc":
        return services.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
      case "bestseller":
        return services.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
      case "on-sale":
        return services.sort((a, b) => (b.onSale ? 1 : 0) - (a.onSale ? 1 : 0));
      default:
        return services;
    }
  }, [category.services, sortMode]);

  return (
    <>
      {/* Sort pills */}
      <div className="flex gap-2 overflow-x-auto pb-6 scrollbar-hide">
        {SORT_OPTIONS.map((opt) => {
          const Icon = opt.icon;
          const isActive = sortMode === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => setSortMode(opt.value)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                isActive
                  ? "bg-[#5f1e42] text-white"
                  : "bg-white border border-[#5f1e42]/10 text-[#5f1e42] hover:bg-[#5f1e42]/5"
              }`}
            >
              <Icon size={13} />
              {opt.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedServices.map((service) => (
          <div
            key={service.slug}
            className="relative bg-white rounded-2xl border border-[#5f1e42]/8 overflow-hidden flex flex-col card-hover shadow-sm"
          >
            {/* Image */}
            <Link href={`/services/${category.slug}/${service.slug}`}>
              <ServiceImage
                categorySlug={category.slug}
                serviceName={service.name}
                className="h-40 w-full"
                size="md"
              />
            </Link>

            <div className="p-6 flex flex-col gap-4 flex-1">
              {/* Badges */}
              <div className="flex gap-2 flex-wrap">
                {service.bestseller && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#e8b80d]/15 text-[#8a6c00]">
                    ★ Bestseller
                  </span>
                )}
                {service.onSale && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700">
                    Sale
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <Link href={`/services/${category.slug}/${service.slug}`}>
                  <h3 className="font-display text-xl font-semibold text-[#1a0d0d] mb-2 hover:text-[#5f1e42] transition-colors">
                    {service.name}
                  </h3>
                </Link>
                <p className="text-[#8c7b72] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Price + Duration */}
              <div className="flex items-center gap-2 pt-2 border-t border-[#5f1e42]/6">
                <span className="font-display text-2xl font-semibold text-[#5f1e42]">
                  {service.price}
                </span>
                {service.originalPrice && (
                  <span className="text-sm text-[#8c7b72] line-through">
                    {service.originalPrice}
                  </span>
                )}
                <span className="text-xs text-[#8c7b72] ml-auto">
                  · {service.duration}
                </span>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <AddToCartButton
                  item={{
                    serviceSlug: service.slug,
                    categorySlug: category.slug,
                    name: service.name,
                    price: service.price,
                    originalPrice: service.originalPrice,
                    categoryLabel: category.label,
                  }}
                  className="flex-1"
                />
                <a
                  href={`${WHATSAPP_BASE}${encodeURIComponent(service.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full border border-[#5f1e42]/15 hover:bg-[#5f1e42]/5 transition-colors flex-shrink-0"
                  aria-label={`Book ${service.name} via WhatsApp`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="#5f1e42"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L.057 23.882l6.199-1.435A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.997-1.366l-.358-.213-3.683.853.879-3.596-.234-.37A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
