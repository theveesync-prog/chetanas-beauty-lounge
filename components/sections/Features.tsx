"use client";

import { useState, useEffect, useRef } from "react";

const STATS = [
  {
    num: 5000,
    suffix: "+",
    label: "Clients trust us",
    icon: "heart",
  },
  {
    num: 30,
    suffix: "+",
    label: "Years in the industry",
    icon: "award",
  },
  {
    num: 100,
    suffix: "%",
    label: "Women's only salon in Mangalore",
    icon: "shield",
  },
];

function useCounter(target: number, duration: number, active: boolean, delay: number) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const timeout = setTimeout(() => {
      let start: number | null = null;
      const step = (ts: number) => {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(ease * target));
        if (progress < 1) requestAnimationFrame(step);
        else setCount(target);
      };
      requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(timeout);
  }, [active, target, duration, delay]);
  return count;
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AwardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
      <circle cx="12" cy="8" r="6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StatCard({
  stat,
  inView,
  index,
}: {
  stat: typeof STATS[number];
  inView: boolean;
  index: number;
}) {
  const count = useCounter(stat.num, 1800, inView, index * 150);

  return (
    <div
      className="relative z-10 flex-1 rounded-3xl p-8 md:p-10 flex flex-col items-center text-center gap-5"
      style={{
        background: "rgba(255,255,255,0.65)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.8)",
        boxShadow:
          "0 8px 32px rgba(95,30,66,0.07), 0 1px 0 rgba(255,255,255,0.9) inset",
      }}
    >
      {/* Icon badge */}
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
        style={{
          background: "rgba(95,30,66,0.07)",
          color: "#5f1e42",
        }}
      >
        {stat.icon === "heart" && <HeartIcon />}
        {stat.icon === "award" && <AwardIcon />}
        {stat.icon === "shield" && <ShieldIcon />}
      </div>

      {/* Counter number */}
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(3.5rem, 7vw, 5.5rem)",
          fontWeight: 700,
          lineHeight: 1,
          color: "#111",
          letterSpacing: "-0.03em",
        }}
        aria-label={`${count.toLocaleString()}${stat.suffix}`}
      >
        {count.toLocaleString()}
        {stat.suffix}
      </p>

      {/* Label */}
      <p
        className="text-[#555] leading-snug"
        style={{ fontSize: "0.9375rem", maxWidth: "140px" }}
      >
        {stat.label}
      </p>
    </div>
  );
}

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);

  // Trigger counters once on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Reveal animation observer
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => setCursor(null);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative overflow-hidden py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Why choose Chetana's Beauty"
    >
      {/* Static warm radial glow behind cards */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 60%, rgba(95,30,66,0.07) 0%, rgba(232,184,13,0.03) 45%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      {/* Cursor spotlight */}
      {cursor && (
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: `radial-gradient(500px circle at ${cursor.x}px ${cursor.y}px, rgba(95,30,66,0.11), transparent 70%)`,
            transition: "background 0.05s ease",
          }}
          aria-hidden="true"
        />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <div className="reveal mb-3">
          <span className="section-label">Why us</span>
        </div>
        <h2
          className="reveal reveal-delay-1 text-[#111] mb-14 md:mb-16"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Trusted by{" "}
          <em className="text-[#5f1e42]" style={{ fontStyle: "italic" }}>
            thousands
          </em>
        </h2>

        {/* 3 glassmorphism cards */}
        <div className="reveal reveal-delay-2 flex flex-col sm:flex-row gap-5">
          {STATS.map((stat, i) => (
            <StatCard key={i} stat={stat} inView={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
