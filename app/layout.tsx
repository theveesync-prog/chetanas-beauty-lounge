import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME, BUSINESS_ADDRESS } from "@/lib/constants";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Best Ladies Salon in Mangalore | Chetana's Beauty — CIDESCO Certified",
    template: "%s | Chetana's Beauty Lounge",
  },
  description:
    "Chetana's Beauty is a CIDESCO-certified ladies salon in Mangalore offering bridal makeup, skin treatments and a beauty academy in Kankanady. Trusted by NRI families from Dubai. Book via WhatsApp.",
  keywords: [
    "best salon in Mangalore",
    "best ladies salon in Mangalore",
    "ladies salon Mangalore",
    "beauty salon Mangalore",
    "bridal makeup artist in Mangalore",
    "bridal makeup Tulu wedding Mangalore",
    "best bridal makeup Mangaluru Catholic",
    "skin treatment in Mangaluru",
    "tan removal Mangalore",
    "pigmentation treatment Mangaluru",
    "facial treatment Mangalore",
    "keratin treatment Mangalore",
    "best beauty academy in Mangalore",
    "beauty academy Dakshina Kannada",
    "professional makeup course Mangaluru",
    "beautician course Dakshina Kannada",
    "beauty parlour in Mangalore",
    "ladies salon Kankanady Mangalore",
    "NRI bridal makeup Mangalore",
    "CIDESCO certified salon Mangalore",
  ],
  authors: [{ name: "Chetana's Beauty" }],
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
    title: "Best Ladies Salon in Mangalore | Chetana's Beauty — CIDESCO Certified",
    description:
      "CIDESCO-certified ladies salon in Mangalore. Bridal makeup, skin treatments, beauty academy. Located in Kankanady.",
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/images/salon/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chetana's Beauty Lounge — Mangalore's best ladies salon interior, Kankanady",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Ladies Salon in Mangalore | Chetana's Beauty",
    description:
      "CIDESCO-certified ladies salon in Mangalore. Bridal makeup, skin treatments, beauty academy in Kankanady.",
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
    <html lang="en">
      <head>
        {/* Google Fonts — loaded at runtime for build-time compatibility */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Cormorant Garamond (display/headings) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        {/* DM Sans (body text) */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap"
          rel="stylesheet"
        />
        {/* Plus Jakarta Sans (hero heading) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Instrument Serif (hero heading) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        {/* Raleway (hero subheading) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />

        {/* LocalBusiness + BeautySalon Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "BeautySalon"],
              name: "Chetana's Beauty",
              description:
                "CIDESCO-certified ladies-only beauty salon and academy in Kankanady, Mangalore offering bridal makeup, skin treatments and professional beauty courses.",
              url: SITE_URL,
              image: `${SITE_URL}/images/salon/og-image.jpg`,
              priceRange: "₹₹",
              telephone: "+91-9845292411",
              sameAs: [
                "https://www.google.com/maps/place/Chetana's+Beauty+Lounge/@12.8699033,74.8605861,17z",
                "https://www.youtube.com/@ChetanasBeautyLounge",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "315",
              },
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
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "19:00",
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
      </body>
    </html>
  );
}
