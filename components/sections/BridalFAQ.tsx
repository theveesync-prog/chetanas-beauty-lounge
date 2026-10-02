import FAQAccordion from "@/components/FAQAccordion";
import { getFaqsForService } from "@/lib/service-faqs";

export default function BridalFAQ() {
  const faqs = getFaqsForService("", "bridal");

  return (
    <section
      id="faq"
      className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-24"
      aria-label="Bridal questions, answered"
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-[#111] mb-10"
          style={{
            fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Bridal Questions, <em className="text-[#5f1e42]" style={{ fontStyle: "italic" }}>Answered</em>
        </h2>
        <FAQAccordion faqs={faqs} />
      </div>
    </section>
  );
}
