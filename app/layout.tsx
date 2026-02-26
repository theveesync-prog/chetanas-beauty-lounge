import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Best Ladies Salon in Mangalore | Chetana's Beauty — CIDESCO Certified",
  description:
    "Chetana's Beauty is a CIDESCO-certified ladies salon in Mangalore offering bridal makeup, skin treatments and a beauty academy in Kankanady. Trusted by NRI families from Dubai. Book via WhatsApp.",
  keywords: [
    "best salon in Mangalore",
    "ladies salon Mangalore",
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
  ],
  authors: [{ name: "Chetana's Beauty" }],
  openGraph: {
    title: "Best Ladies Salon in Mangalore | Chetana's Beauty — CIDESCO Certified",
    description:
      "CIDESCO-certified ladies salon in Mangalore. Bridal makeup, skin treatments, beauty academy. Located in Kankanady.",
    type: "website",
    locale: "en_IN",
  },
  alternates: {
    canonical: "https://chetanasbeauty.in", // TODO: replace with live URL
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
              url: "https://chetanasbeauty.in",
              telephone: "+91-9845292411",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kankanady",
                addressLocality: "Mangalore",
                addressRegion: "Karnataka",
                postalCode: "575002",
                addressCountry: "IN",
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
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.5",
                reviewCount: "315",
                bestRating: "5",
                worstRating: "1",
              },
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
      </body>
    </html>
  );
}
