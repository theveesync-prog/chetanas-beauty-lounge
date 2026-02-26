import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Terms & Conditions | Chetana's Beauty Lounge Mangalore",
  description:
    "Terms and Conditions for Chetana's Beauty Lounge — booking, cancellation, payment and service policies.",
  alternates: { canonical: "https://chetanasbeauty.in/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="pt-28 pb-10 px-4" style={{ backgroundColor: "#fdf8f5" }}>
        <div className="max-w-3xl mx-auto">
          <p className="section-label mb-4">Legal</p>
          <h1
            className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-3"
            style={{ color: "#5f1e42" }}
          >
            Terms &amp; Conditions
          </h1>
          <p className="text-sm" style={{ color: "#8c7b72" }}>
            Last updated: 1 January 2025
          </p>
        </div>
      </section>

      {/* ── Content ──────────────────────────────────────── */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto" style={{ color: "#3a2a2a", lineHeight: "1.85" }}>

          <p className="mb-6 text-base">
            These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of the website{" "}
            <a href="https://chetanasbeauty.in" className="text-[#5f1e42] hover:underline">
              chetanasbeauty.in
            </a>{" "}
            and any services provided by <strong>Chetana&rsquo;s Beauty Lounge</strong>, located
            at 3rd Floor, A Gate, Kankanady Bypass Rd, Kankanady, Mangaluru, Karnataka 575002.
            By accessing our website or booking a service, you agree to be bound by these Terms.
          </p>

          {[
            {
              title: "1. Services",
              body: (
                <>
                  <p className="mb-3 text-sm">
                    Chetana&rsquo;s Beauty Lounge is a ladies-only CIDESCO-certified beauty salon
                    and academy in Mangaluru. We offer bridal makeup, hair treatments, skin care,
                    body care, nail services, spa treatments, and beauty courses.
                  </p>
                  <p className="text-sm">
                    All services are subject to availability and may be withdrawn or modified at
                    any time. Prices are indicative and may vary based on hair length, product
                    requirements, and complexity.
                  </p>
                </>
              ),
            },
            {
              title: "2. Appointments & Bookings",
              body: (
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Appointments can be made via WhatsApp at <a href="tel:+919845292411" className="text-[#5f1e42] hover:underline">+91 98452 92411</a> or <a href="tel:+919108583714" className="text-[#5f1e42] hover:underline">+91 91085 83714</a>.</li>
                  <li>Bookings are confirmed only after receiving an acknowledgement from our team via WhatsApp or phone.</li>
                  <li>Please arrive at least 5 minutes before your scheduled appointment. Late arrivals may result in a shortened service or rescheduling.</li>
                  <li>Walk-in clients are welcome subject to stylist/therapist availability.</li>
                </ul>
              ),
            },
            {
              title: "3. Cancellations & Rescheduling",
              body: (
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>We request at least <strong>24 hours&rsquo; notice</strong> for cancellations or rescheduling of regular appointments.</li>
                  <li>For bridal and pre-bridal packages, a minimum of <strong>72 hours&rsquo; notice</strong> is required to avoid a cancellation fee.</li>
                  <li>Same-day cancellations or no-shows may attract a charge equivalent to 25% of the booked service value.</li>
                  <li>We reserve the right to reschedule appointments due to stylist unavailability or unforeseen circumstances, with prior notice and an alternative date offered.</li>
                </ul>
              ),
            },
            {
              title: "4. Payments",
              body: (
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Payments are accepted in cash, UPI (GPay / PhonePe / Paytm), and net banking at the salon.</li>
                  <li>For bridal packages, an advance deposit may be required to secure the booking date. This will be communicated at the time of booking.</li>
                  <li>Deposits are non-refundable in the event of cancellation within 72 hours of the scheduled service.</li>
                  <li>All prices are inclusive of applicable taxes unless stated otherwise.</li>
                </ul>
              ),
            },
            {
              title: "5. Bridal & Package Services",
              body: (
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Bridal makeup trials must be booked separately and are charged at the applicable trial rate.</li>
                  <li>Pre-bridal package sessions must be utilised within the agreed schedule. Unused sessions do not carry over or attract a refund.</li>
                  <li>Discounted packages cannot be combined with other promotional offers unless explicitly stated.</li>
                </ul>
              ),
            },
            {
              title: "6. Health & Safety",
              body: (
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Please inform our team of any known skin sensitivities, allergies, medical conditions, or pregnancy before your appointment. We are not liable for adverse reactions from undisclosed conditions.</li>
                  <li>We reserve the right to refuse service to clients with contagious skin conditions or infections for the safety of all clients and staff.</li>
                  <li>Chetana&rsquo;s Beauty Lounge is a <strong>women-only salon</strong>. Male clients or companions are not permitted in the service areas.</li>
                </ul>
              ),
            },
            {
              title: "7. Photography & Social Media",
              body: (
                <p className="text-sm">
                  With your express consent, we may photograph before/after transformation results
                  for use on our Instagram, YouTube, and website. You may revoke this consent at
                  any time by informing us in writing or via WhatsApp. We will not use your photos
                  without your permission.
                </p>
              ),
            },
            {
              title: "8. Gift Vouchers & Offers",
              body: (
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Gift vouchers are valid for 6 months from the date of issue and are non-refundable.</li>
                  <li>Promotional offers are subject to availability and may be withdrawn at any time without prior notice.</li>
                  <li>Offers cannot be exchanged for cash and are not transferable unless stated.</li>
                </ul>
              ),
            },
            {
              title: "9. Website Use",
              body: (
                <>
                  <p className="mb-3 text-sm">
                    Content on our website — including text, images, pricing, and service
                    descriptions — is for informational purposes only and may be updated without
                    notice. While we endeavour to keep information accurate, we make no warranties
                    regarding its completeness or accuracy.
                  </p>
                  <p className="text-sm">
                    You may not reproduce, distribute, or commercially exploit any content from
                    our website without our prior written consent.
                  </p>
                </>
              ),
            },
            {
              title: "10. Limitation of Liability",
              body: (
                <p className="text-sm">
                  To the fullest extent permitted by applicable law, Chetana&rsquo;s Beauty
                  Lounge shall not be liable for any indirect, incidental, or consequential
                  damages arising from the use of our services or website. Our liability for any
                  claim shall not exceed the amount paid for that specific service.
                </p>
              ),
            },
            {
              title: "11. Governing Law",
              body: (
                <p className="text-sm">
                  These Terms are governed by the laws of India and the state of Karnataka. Any
                  disputes shall be subject to the exclusive jurisdiction of the courts in
                  Mangaluru, Karnataka.
                </p>
              ),
            },
            {
              title: "12. Changes to These Terms",
              body: (
                <p className="text-sm">
                  We reserve the right to update these Terms at any time. Changes will be posted
                  on this page with a revised &ldquo;Last updated&rdquo; date. Continued use of
                  our services after changes constitutes acceptance of the revised Terms.
                </p>
              ),
            },
            {
              title: "13. Contact Us",
              body: (
                <ul className="space-y-1 text-sm">
                  <li><strong>Chetana&rsquo;s Beauty Lounge</strong></li>
                  <li>3rd Floor, A Gate, Kankanady Bypass Rd, Kankanady, Mangaluru – 575002</li>
                  <li>
                    Phone:{" "}
                    <a href="tel:+919845292411" className="text-[#5f1e42] hover:underline">+91 98452 92411</a>
                    {" "}/ <a href="tel:+919108583714" className="text-[#5f1e42] hover:underline">+91 91085 83714</a>
                  </li>
                </ul>
              ),
            },
          ].map((section) => (
            <div key={section.title} className="mb-10">
              <h2
                className="font-display text-2xl font-semibold mb-4 pb-2 border-b"
                style={{ color: "#1a0d0d", borderColor: "rgba(95,30,66,0.1)" }}
              >
                {section.title}
              </h2>
              {section.body}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
