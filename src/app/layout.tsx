import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileQuickActions from "@/components/MobileQuickActions";
import CookieBanner from "@/components/CookieBanner";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TF Edilservice Sagl | Impianti Elettrici e Edili in Ticino",
  description: "TF Edilservice Sagl - Via Campagna 4b, 6512 Giubiasco. Impianti elettrici, telecomunicazioni, domotica, sicurezza, energie rinnovabili e opere edili. Servizi professionali in tutto il Cantone Ticino.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TF Edilservice Sagl",
    "image": "https://www.tfedilservice.ch/logo.png",
    "@id": "https://www.tfedilservice.ch",
    "url": "https://www.tfedilservice.ch",
    "telephone": "+41764611599",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Campagna 4b",
      "addressLocality": "Giubiasco",
      "postalCode": "6512",
      "addressCountry": "CH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 46.1725,
      "longitude": 9.0064
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/tfedilservice",
      "https://www.instagram.com/tfedilservice"
    ],
    "areaServed": {
      "@type": "State",
      "name": "Canton Ticino"
    }
  };

  return (
    <html lang="it" className={`${openSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileQuickActions />
        <CookieBanner />
      </body>
    </html>
  );
}