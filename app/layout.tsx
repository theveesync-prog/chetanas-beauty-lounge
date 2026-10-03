import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Plus_Jakarta_Sans, Instrument_Serif, Raleway } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME, SITE_LEGAL_NAME, BUSINESS_ADDRESS } from "@/lib/constants";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";

// Self-hosted via next/font — eliminates the render-blocking external
// fonts.googleapis.com/fonts.gstatic.com requests (~2.5s on mobile per
// Lighthouse). Variable names match app/globals.css's @theme tokens so
// every existing var(--font-*) usage keeps working unchanged.
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Best Ladies Salon in Mangalore | Chetana's Beauty, CIDESCO Certified",
    template: "%s | Chetana's Beauty",
  },
  description:
    "Chetana's Beauty Lounge is a CIDESCO-certified ladies salon and spa in Mangalore offering bridal makeup and skin treatments in Kankanady. Trusted by NRI families from Dubai. Book via WhatsApp.",
  keywords: [
    "best salon in Mangalore",
    "best ladies salon in Mangalore",
    "ladies salon Mangalore",
    "beauty salon Mangalore",
    "best hair salon in Mangalore",
    "best hair service in Mangalore",
    "hair salon Mangalore",
    "salon near me Mangalore",
    "ladies salon near me",
    "skin clinic Mangalore",
    "skin clinic Mangaluru",
    "hair botox Mangalore",
    "hair botox treatment Mangaluru",
    "bridal makeup artist in Mangalore",
    "bridal makeup Tulu wedding Mangalore",
    "best bridal makeup Mangaluru Catholic",
    "skin treatment in Mangaluru",
    "tan removal Mangalore",
    "pigmentation treatment Mangaluru",
    "facial treatment Mangalore",
    "facials in Mangalore",
    "keratin treatment Mangalore",
    "beauty parlour in Mangalore",
    "ladies salon Kankanady Mangalore",
    "NRI bridal makeup Mangalore",
    "CIDESCO certified salon Mangalore",
  ],
  authors: [{ name: SITE_LEGAL_NAME }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Best Ladies Salon in Mangalore | Chetana's Beauty, CIDESCO Certified",
    description:
      "CIDESCO-certified ladies salon in Mangalore. Bridal makeup, skin treatments, spa. Located in Kankanady.",
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/images/salon/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chetana's Beauty Lounge, Mangalore's best ladies salon interior, Kankanady",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Ladies Salon in Mangalore | Chetana's Beauty",
    description:
      "CIDESCO-certified ladies salon in Mangalore. Bridal makeup, skin treatments, spa in Kankanady.",
    images: ["/images/salon/og-image.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${dmSans.variable} ${plusJakartaSans.variable} ${instrumentSerif.variable} ${raleway.variable}`}
    >
      <head>
        {/* LocalBusiness + BeautySalon Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "BeautySalon"],
              name: SITE_LEGAL_NAME,
              description:
                "CIDESCO-certified ladies-only salon and spa in Kankanady, Mangalore offering bridal makeup, skin treatments and spa services.",
              url: SITE_URL,
              image: `${SITE_URL}/images/salon/og-image.jpg`,
              priceRange: "₹₹",
              telephone: "+91-9845292411",
              sameAs: [
                "https://www.google.com/maps/place/Chetana's+Beauty+Lounge/@12.8699033,74.8605861,17z",
                "https://www.youtube.com/@ChetanasBeautyLounge",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: BUSINESS_ADDRESS.streetAddress,
                addressLocality: BUSINESS_ADDRESS.addressLocality,
                addressRegion: BUSINESS_ADDRESS.addressRegion,
                postalCode: BUSINESS_ADDRESS.postalCode,
                addressCountry: BUSINESS_ADDRESS.addressCountry,
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 12.8698,
                longitude: 74.8426,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Sunday",
                    "Monday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "20:00",
                },
              ],
              hasCredential: {
                "@type": "EducationalOccupationalCredential",
                name: "CIDESCO International Certification",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <CartProvider>
          {children}
          <CartDrawer />
          <Footer />
        </CartProvider>
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-2V6N81XBVD" />
      </body>
    </html>
  );
}
