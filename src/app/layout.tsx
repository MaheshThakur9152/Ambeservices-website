import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import WhatsAppFixed from "../components/WhatsAppFixed";

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ambeservice.com'),
  title: "Ambe Service Facilities Pvt Ltd - Professional Home & Business Services",
  description: "Fast, reliable & affordable home and business services including plumbing, electrical, AC repair, deep cleaning, pest control, and handyman services across India. 24/7 emergency support available.",
  keywords: "home services, plumbing, electrical, AC repair, cleaning, pest control, handyman, facility management, Mumbai, India",
  authors: [{ name: "Ambe Service Facilities Pvt Ltd" }],
  creator: "Ambe Service Facilities Pvt Ltd",
  publisher: "Ambe Service Facilities Pvt Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://ambeservice.com',
    siteName: 'Ambe Service Facilities Pvt Ltd',
    title: 'Professional Home & Business Services - Ambe Service Facilities',
    description: 'Fast, reliable & affordable home and business services including plumbing, electrical, AC repair, deep cleaning, pest control, and handyman services across India.',
    images: [
      {
        url: '/Image.use.jpg',
        width: 1200,
        height: 630,
        alt: 'Ambe Service Facilities - Professional Home & Business Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Home & Business Services - Ambe Service Facilities',
    description: 'Fast, reliable & affordable home and business services across India. 24/7 emergency support available.',
    images: ['/Image.use.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
    // Add other verification codes as needed
  },
  alternates: {
    canonical: 'https://ambeservice.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Ambe Service Facilities Pvt Ltd",
              "description": "Professional home and business services including plumbing, electrical, AC repair, cleaning, pest control, and handyman services",
              "url": "https://ambeservice.com",
              "telephone": "+91-9876543210",
              "email": "info@ambeservice.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jan Priya Society, Ganesh Nagar",
                "addressLocality": "Kandivali-west",
                "addressRegion": "Mumbai",
                "postalCode": "400067",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "19.2056",
                "longitude": "72.8295"
              },
              "openingHours": [
                "Mo-Sa 08:00-20:00",
                "Su 09:00-18:00"
              ],
              "serviceArea": {
                "@type": "Country",
                "name": "India"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Home and Business Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Plumbing Services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Electrical Services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AC & Refrigeration"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Deep Cleaning"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Pest Control"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Handyman Services"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${lora.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
        <WhatsAppFixed />
      </body>
    </html>
  );
}
