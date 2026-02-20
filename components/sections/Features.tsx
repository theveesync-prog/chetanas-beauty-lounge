"use client";

import { useEffect, useRef } from "react";
import { Heart, Award, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Heart,
    stat: "1000+",
    title: "Happy Brides",
    description:
      "Trusted for bridal makeup and wedding beauty services in Mangalore across Tulu Hindu, Konkani Catholic and Beary Muslim ceremonies.",
    accentColor: "#c4849a",
  },
  {
    icon: Award,
    stat: "28+",
    title: "Years in the Beauty Industry",
    description:
      "One of the most experienced beauty salons in Mangalore since 1998 — a legacy of craft, care and deep community trust.",
    accentColor: "#b8860b",
  },
  {
    icon: ShieldCheck,
    stat: "100%",
    title: "Women-Exclusive Salon",
    description:
      "Mangalore's only women-exclusive beauty salon — offering complete privacy and comfort for every client, every visit.",
    accentColor: "#5f1e42",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const items = sectionRef.current?.querySelectorAll(".reveal");
    items?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-16 md:py-24 px-4"
      style={{ backgroundColor: "#f5ece4" }}
      aria-label="Why choose Chetana's Beauty"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className={`reveal reveal-delay-${i + 1} card-hover bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-[#5f1e42]/5 flex flex-col gap-5`}
                aria-label={`${feature.stat} ${feature.title}`}
              >
                {/* Icon container */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${feature.accentColor}15` }}
                  aria-hidden="true"
                >
                  <Icon
                    size={22}
                    style={{ color: feature.accentColor }}
                    strokeWidth={1.75}
                  />
                </div>

                {/* Stat */}
                <div className="space-y-1">
                  <p
                    className="font-display text-4xl md:text-5xl font-semibold leading-none"
                    style={{ color: feature.accentColor }}
                  >
                    {feature.stat}
                  </p>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-[#1a0d0d] leading-tight">
                    {feature.title}
                  </h3>
                </div>

                {/* Thin gold divider */}
                <div
                  className="h-px w-10 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at 0% 50%, #e8b80d, #f6dd86)",
                  }}
                  aria-hidden="true"
                />

                {/* Description */}
                <p className="text-[#8c7b72] text-sm md:text-base leading-relaxed font-light">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
