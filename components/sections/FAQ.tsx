"use client";

import { useState, useEffect, useRef } from "react";

const faqs = [
  {
    question: "How do I book an appointment at Chetana's Beauty?",
    answer:
      "Booking is easiest via WhatsApp — just tap the 'Book on WhatsApp' button anywhere on this page. You can choose your preferred service, date and time and we'll confirm within a few hours. Walk-ins are also welcome subject to availability.",
  },
  {
    question: "Do you accept walk-in clients, or is it by appointment only?",
    answer:
      "Both! We do welcome walk-in clients, though appointments are always prioritised. For bridal makeup, skin treatments and any session lasting over an hour, we strongly recommend booking ahead to guarantee your preferred slot.",
  },
  {
    question: "What are your salon working hours?",
    answer:
      "We are open Monday to Saturday, 9:00 AM to 7:00 PM. We are closed on Sundays and major public holidays. During wedding season (October–March) we sometimes extend hours — check with us on WhatsApp.",
  },
  {
    question: "Which bridal makeup styles do you specialise in?",
    answer:
      "We specialise in a wide range of bridal looks — Tulu Hindu, Konkani Catholic, Beary Muslim, South Indian traditional, and modern airbrush bridal makeup. We also cater to NRI brides flying in from the Gulf and abroad who prefer specific international looks.",
  },
  {
    question: "Are the products and treatments safe for sensitive skin?",
    answer:
      "Yes. Chetana's Beauty is CIDESCO-certified, which means we follow international standards for product safety and hygiene. We carry clinical-grade, dermatologically tested ranges and always do a patch test before any chemical treatment. Please inform us of any known allergies at booking.",
  },
  {
    question: "What does a bridal package typically include?",
    answer:
      "Our bridal packages are customised to your wedding type and duration. A typical package covers: pre-bridal skin prep sessions, hair treatment, bridal makeup on the wedding day, a trial session, and saree/lehenga draping. We'll share a detailed quote after a free 15-minute consultation — message us on WhatsApp to schedule.",
  },
  {
    question: "Can I book a trial makeup session before my wedding day?",
    answer:
      "Absolutely — and we highly recommend it! A trial run lets you test the exact look, check for product reactions and make adjustments so your actual wedding day runs stress-free. Trial sessions are usually booked 4–6 weeks before the wedding.",
  },
  {
    question: "Do you offer group or family packages?",
    answer:
      "Yes! We offer group packages for bridal parties, pre-wedding gatherings, mother-of-the-bride and family sessions. For groups of 3 or more, please message us on WhatsApp at least 2 weeks in advance so we can arrange dedicated staff and timing.",
  },
  {
    question: "Where exactly is the salon located in Mangalore?",
    answer:
      "Chetana's Beauty is located in Kankanady, Mangalore — a central, well-connected neighbourhood easily accessible by auto, cab or private vehicle. Parking is available nearby. Message us on WhatsApp for the exact address and directions pin.",
  },
  {
    question: "What is your cancellation or rescheduling policy?",
    answer:
      "We understand plans change! Please give us at least 24 hours' notice to reschedule or cancel. For bridal bookings with an advance deposit, cancellations within 48 hours of the appointment may forfeit the deposit. Rescheduling is always accommodated where possible — just message us.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-24 md:py-32 px-4"
      style={{ backgroundColor: "#ffffff" }}
      aria-label="Frequently asked questions"
    >
      <div className="max-w-3xl mx-auto">

        {/* ─── Section header ──── */}
        <div className="reveal mb-3">
          <span className="section-label">FAQ</span>
        </div>
        <h2 className="reveal reveal-delay-1 font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1a0d0d] leading-tight mb-12 md:mb-14">
          Answers to your most{" "}
          <em className="italic text-[#5f1e42]">common questions</em>
        </h2>

        {/* ─── Accordion ──── */}
        <div className="space-y-0 divide-y divide-[#5f1e42]/8 border-t border-[#5f1e42]/8">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} transition-colors duration-300 ${
                  isOpen ? "bg-[#F7F4F1]" : "bg-transparent"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
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

                  {/* Toggle circle: magenta when closed, gold when open */}
                  <span
                    className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      background: isOpen
                        ? "radial-gradient(circle at 30% 30%, #e8b80d, #f6dd86)"
                        : "#5f1e42",
                    }}
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      /* × icon */
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-4 h-4">
                        <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
                      </svg>
                    ) : (
                      /* + icon */
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-4 h-4">
                        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                      </svg>
                    )}
                  </span>
                </button>

                {/* Answer — animated open/close */}
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

        {/* ─── Bottom CTA ──── */}
        <div className="reveal mt-12 text-center">
          <p className="text-[#8c7b72] text-sm mb-4">
            Still have questions? We&apos;re happy to help directly.
          </p>
          <a
            href="https://wa.me/919845292411?text=Hi%2C%20I%20have%20a%20question%20about%20Chetana%27s%20Beauty%20Lounge."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold shadow-md"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L.057 23.882l6.199-1.435A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.997-1.366l-.358-.213-3.683.853.879-3.596-.234-.37A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
            </svg>
            Ask us on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
