import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy for Chetana's Beauty Lounge: what cookies and similar technologies we use, and how to control them.",
  alternates: { canonical: `${SITE_URL}/cookies` },
};

export default function CookiesPage() {
  return (
    <>
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="pt-28 pb-10 px-4" style={{ backgroundColor: "#fdf8f5" }}>
        <div className="max-w-3xl mx-auto">
          <h1
            className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-3"
            style={{ color: "#5f1e42" }}
          >
            Cookie Policy
          </h1>
          <p className="text-sm" style={{ color: "#8c7b72" }}>
            Last updated: 3 October 2026
          </p>
        </div>
      </section>

      {/* ── Content ──────────────────────────────────────── */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto" style={{ color: "#3a2a2a", lineHeight: "1.85" }}>

          <p className="mb-8 text-base">
            This Cookie Policy explains what cookies and similar technologies{" "}
            <a href={SITE_URL} className="text-[#5f1e42] hover:underline">
              chetanasbeautylounge.com
            </a>{" "}
            uses, why, and how you can control them. It should be read alongside our{" "}
            <a href="/privacy" className="text-[#5f1e42] hover:underline">Privacy Policy</a>.
          </p>

          {[
            {
              title: "1. What Are Cookies",
              body: (
                <p className="text-sm">
                  Cookies are small text files a website can store on your device to remember
                  information. Websites can also use similar technologies (such as scripts that
                  load fonts or maps) that involve a request to a third party without necessarily
                  setting a cookie themselves. This policy covers both.
                </p>
              ),
            },
            {
              title: "2. What We Use, and Why",
              body: (
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li><strong>Essential functionality:</strong> a small amount of data stored in your browser (not a tracking cookie) to remember things like items in your cart while you browse.</li>
                  <li><strong>Vercel Analytics and Vercel Speed Insights:</strong> used to understand how visitors use our site and how fast pages load. Both are cookieless and do not build a profile of you or track you across other websites.</li>
                  <li><strong>Google Analytics:</strong> used to understand how visitors use our site (pages viewed, approximate location, device type). Unlike Vercel Analytics, Google Analytics sets first-party cookies to recognise repeat visits. We have not enabled any advertising or cross-site tracking features (such as Google Signals) in our configuration.</li>
                  <li><strong>Google Maps:</strong> our footer includes a map showing our salon&rsquo;s location. It is lazy-loaded, meaning it only contacts Google once you scroll down to it, at which point Google&rsquo;s own cookies and privacy practices apply to that embedded map.</li>
                </ul>
              ),
            },
            {
              title: "3. What We Don't Use",
              body: (
                <p className="text-sm">
                  We do not use advertising cookies, cross-site tracking pixels, remarketing tags,
                  or any chat-widget or heatmap scripts. Nothing on this site sells or shares your
                  browsing activity with advertisers.
                </p>
              ),
            },
            {
              title: "4. Why We Don't Show a Cookie Consent Banner",
              body: (
                <p className="text-sm">
                  We use first-party analytics cookies (Google Analytics) to understand site usage,
                  but no advertising or cross-site tracking cookies that would require your opt-in
                  consent, so we haven&rsquo;t added a cookie banner. You can still control cookies
                  and similar technologies at any time using your browser settings, described below.
                </p>
              ),
            },
            {
              title: "5. How to Control Cookies",
              body: (
                <p className="text-sm">
                  Most browsers let you view, delete, and block cookies through their settings
                  menu. Blocking essential cookies may affect features like your cart. Blocking
                  Google Analytics cookies or the Google Maps embed will not affect your ability to
                  browse or book with us, since the site remains usable without them.
                </p>
              ),
            },
            {
              title: "6. Changes to This Policy",
              body: (
                <p className="text-sm">
                  We may update this Cookie Policy from time to time. The updated policy will be
                  posted on this page with a revised &ldquo;Last updated&rdquo; date.
                </p>
              ),
            },
            {
              title: "7. Contact Us",
              body: (
                <ul className="space-y-1 text-sm">
                  <li><strong>Chetana&rsquo;s Beauty Lounge</strong></li>
                  <li>Suite A, Kankanady Gate Building, 3rd Floor, Kankanady Bypass Road, Kankanady, Mangaluru – 575002</li>
                  <li>
                    Phone:{" "}
                    <a href="tel:+919845292411" className="text-[#5f1e42] hover:underline">+91 98452 92411</a>
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
