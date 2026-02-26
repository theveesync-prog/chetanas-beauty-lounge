import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Privacy Policy | Chetana's Beauty Lounge Mangalore",
  description:
    "Privacy Policy for Chetana's Beauty Lounge — how we collect, use and protect your personal information.",
  alternates: { canonical: "https://chetanasbeauty.in/privacy" },
};

export default function PrivacyPage() {
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
            Privacy Policy
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
            Welcome to <strong>Chetana&rsquo;s Beauty Lounge</strong> (&ldquo;we&rdquo;,
            &ldquo;our&rdquo;, or &ldquo;us&rdquo;), located at 3rd Floor, A Gate,
            Kankanady Bypass Rd, Kankanady, Mangaluru, Karnataka 575002. We are
            committed to protecting the privacy and personal information of our clients
            and website visitors.
          </p>
          <p className="mb-8 text-base">
            This Privacy Policy explains how we collect, use, and safeguard your
            information when you visit{" "}
            <a href="https://chetanasbeauty.in" className="text-[#5f1e42] hover:underline">
              chetanasbeauty.in
            </a>{" "}
            or contact us via WhatsApp, phone, or in person.
          </p>

          {[
            {
              title: "1. Information We Collect",
              body: (
                <>
                  <p className="mb-3">We may collect the following types of information:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4 text-sm">
                    <li><strong>Contact details</strong> — your name, phone number, and/or WhatsApp number when you enquire about or book an appointment.</li>
                    <li><strong>Service preferences</strong> — services you are interested in, preferred dates/times, and any special requirements you share with us.</li>
                    <li><strong>Usage data</strong> — standard analytics data about how visitors interact with our website (pages visited, browser type, device). This does not personally identify you.</li>
                  </ul>
                  <p className="text-sm">We do not collect sensitive personal data such as Aadhaar numbers, financial account details, or medical records through this website.</p>
                </>
              ),
            },
            {
              title: "2. How We Use Your Information",
              body: (
                <>
                  <p className="mb-3">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4 text-sm">
                    <li>Respond to your appointment enquiries and booking requests.</li>
                    <li>Send appointment confirmations and reminders via WhatsApp or phone.</li>
                    <li>Improve our services based on client feedback and preferences.</li>
                    <li>Send occasional updates about offers or new services — only if you have opted in.</li>
                    <li>Comply with applicable Indian laws and regulations.</li>
                  </ul>
                  <p className="text-sm">We do <strong>not</strong> sell, rent, or share your personal information with third parties for marketing purposes.</p>
                </>
              ),
            },
            {
              title: "3. WhatsApp Communication",
              body: (
                <p className="text-sm">
                  When you click a &ldquo;Book via WhatsApp&rdquo; button, you will be redirected
                  to WhatsApp. Any conversation is subject to{" "}
                  <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#5f1e42] hover:underline">
                    WhatsApp&rsquo;s Privacy Policy
                  </a>
                  . We only use WhatsApp to communicate about your appointment and services.
                </p>
              ),
            },
            {
              title: "4. Cookies & Analytics",
              body: (
                <p className="text-sm">
                  Our website may use essential cookies to ensure the site functions correctly
                  and privacy-respecting analytics tools to understand how visitors use the site.
                  These tools do not track you across other websites or build advertising profiles.
                  You can disable cookies in your browser settings at any time.
                </p>
              ),
            },
            {
              title: "5. Data Storage & Security",
              body: (
                <p className="text-sm">
                  Information you share with us is stored only for as long as necessary to fulfil
                  your appointment and for a reasonable period thereafter. We implement reasonable
                  security measures to protect your data from unauthorised access or disclosure.
                </p>
              ),
            },
            {
              title: "6. Your Rights",
              body: (
                <>
                  <p className="mb-3 text-sm">You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4 text-sm">
                    <li>Request access to the personal information we hold about you.</li>
                    <li>Request correction of inaccurate information.</li>
                    <li>Request deletion of your personal information, subject to applicable legal obligations.</li>
                    <li>Opt out of promotional messages at any time.</li>
                  </ul>
                  <p className="text-sm">
                    To exercise any of these rights, contact us at{" "}
                    <a href="tel:+919845292411" className="text-[#5f1e42] hover:underline">+91 98452 92411</a> or via WhatsApp.
                  </p>
                </>
              ),
            },
            {
              title: "7. Third-Party Links",
              body: (
                <p className="text-sm">
                  Our website links to Google Maps, Instagram, YouTube, and WhatsApp. We are not
                  responsible for the privacy practices of these platforms. We encourage you to
                  review their respective privacy policies.
                </p>
              ),
            },
            {
              title: "8. Children's Privacy",
              body: (
                <p className="text-sm">
                  Our website is not directed at children under 13. We do not knowingly collect
                  personal information from children. If you believe a child has provided us with
                  personal information, please contact us immediately.
                </p>
              ),
            },
            {
              title: "9. Changes to This Policy",
              body: (
                <p className="text-sm">
                  We may update this Privacy Policy from time to time. The updated policy will be
                  posted on this page with a revised &ldquo;Last updated&rdquo; date.
                </p>
              ),
            },
            {
              title: "10. Contact Us",
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
