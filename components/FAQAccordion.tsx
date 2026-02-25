"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import type { ServiceFAQ } from "@/lib/service-faqs";

export default function FAQAccordion({ faqs }: { faqs: ServiceFAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-0 divide-y divide-[#5f1e42]/8 border-t border-b border-[#5f1e42]/8">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`transition-colors duration-300 ${isOpen ? "bg-[#fdf0e6]/50" : ""}`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 py-5 px-1 text-left group"
            >
              <span
                className={`font-medium text-sm md:text-base leading-snug transition-colors duration-200 ${
                  isOpen ? "text-[#5f1e42]" : "text-[#1a0d0d]"
                }`}
              >
                {faq.question}
              </span>
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                style={{
                  background: isOpen
                    ? "radial-gradient(circle at 30% 30%, #e8b80d, #f6dd86)"
                    : "#5f1e42",
                }}
                aria-hidden="true"
              >
                {isOpen ? (
                  <X size={14} className="text-[#3a1a00]" />
                ) : (
                  <Plus size={14} className="text-white" />
                )}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="px-1 pb-5 text-sm md:text-base text-[#5a4040] leading-relaxed font-light">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
