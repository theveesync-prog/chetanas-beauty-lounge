import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { WHATSAPP_BASE } from "@/lib/services-data";
import { SITE_URL, SITE_LEGAL_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hygiene & Safety Promise",
  description:
    "How Chetana's Beauty Lounge keeps every service clean and safe: single-use disposables, tool sterilization, patch tests and consent before every treatment.",
  keywords: [
    "hygienic salon Mangalore",
    "safe salon Mangalore",
    "salon sterilization Mangalore",
    "clean salon Mangaluru",
  ],
  openGraph: {
    title: "Hygiene & Safety Promise | Chetana's Beauty Lounge",
    description:
      "Single-use disposables, tool sterilization, patch tests and consent before every treatment, our standard for every client.",
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/hygiene-safety`,
  },
};

const PROMISES = [
  {
    title: "Single-use disposables",
    text: "Waxing applicators, spatulas, cotton and other single-use items are used once per client and discarded, never reused.",
  },
  {
    title: "Tool sterilization",
    text: "Reusable tools, tweezers, cuticle tools and equipment, are sanitized and sterilized between every client.",
  },
  {
    title: "Patch tests on request",
    text: "Ask us for a patch test before a facial, coloring, or any chemical treatment, especially if you have sensitive or reactive skin.",
  },
  {
    title: "Consent before treatment",
    text: "Our team explains what a service involves and checks in with you before waxing, extractions, or any chemical step.",
  },
];

export default function HygieneSafetyPage() {
  const waLink = `${WHATSAPP_BASE}${encodeURIComponent("a question about hygiene and safety practices")}.`;

  return (
    <>
      <Navbar />

      {/* Page header */}
      <div className="bg-white pt-28 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-[#111]"
            style={{
              fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            The Chetana&rsquo;s Hygiene &amp; Skin Safety Promise
          </h1>
          <p className="mt-3 text-[#888] text-sm max-w-md leading-relaxed">
            What we do at every visit, for every client, as standard, not as a special request.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-base text-[#555] leading-relaxed mb-10 max-w-2xl">
            {SITE_LEGAL_NAME} is a CIDESCO-certified salon, spa and academy, and hygiene is one of the
            standards we hold ourselves to across all three. This is what that actually means in practice.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {PROMISES.map((item) => (
              <div key={item.title} className="flex gap-3.5">
                <span
                  className="flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "#5f1e42", color: "#fff" }}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3.5 h-3.5">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#111] mb-1">{item.title}</p>
                  <p className="text-sm text-[#666] leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="rounded-2xl p-6"
            style={{ backgroundColor: "rgba(95,30,66,0.04)" }}
          >
            <p className="text-sm text-[#555] leading-relaxed mb-4">
              Have a question about a specific service, a skin sensitivity, or an allergy? Ask us before you
              book, we would rather answer a question up front than have you worry during a treatment.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-colors"
              style={{ backgroundColor: "#5f1e42" }}
            >
              Ask us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
