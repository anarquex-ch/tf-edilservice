import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ReferenzeContent from "@/components/ReferenzeContent";

export const metadata: Metadata = {
  title: "Le Nostre Referenze & Portfolio Progetti | TF Edilservice Sagl in Ticino",
  description:
    "Scopri i progetti realizzati da TF Edilservice Sagl in Ticino. Impianti elettrici, domotica, fotovoltaico, sicurezza e ristrutturazioni edili per residenze, industrie e uffici.",
  keywords: [
    "referenze impianti elettrici",
    "portfolio domotica ticino",
    "progetti fotovoltaico",
    "ristrutturazioni edili ticino",
    "impianti sicurezza aziendale",
    "elettricista ticino progetti",
    "tf edilservice lavori"
  ],
  alternates: {
    canonical: "https://www.tf-edilservice.ch/referenze",
  },
  openGraph: {
    title: "Le Nostre Referenze | TF Edilservice Sagl",
    description: "Esplora i nostri progetti di maggior successo in Ticino: impianti elettrici industriali, domotica per ville, fotovoltaico commerciale e ristrutturazioni edili.",
    url: "https://www.tf-edilservice.ch/referenze",
    type: "website",
    images: [
      {
        url: "https://www.tf-edilservice.ch/images/referenze/hero-referenze.png",
        width: 1200,
        height: 630,
        alt: "Portfolio e Referenze TF Edilservice Sagl",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Referenze e Portfolio - TF Edilservice Sagl",
  "description": "Una raccolta dei progetti più significativi realizzati da TF Edilservice Sagl nel Canton Ticino nel campo dell'impiantistica e dell'edilizia.",
  "url": "https://www.tf-edilservice.ch/referenze",
  "publisher": {
    "@type": "LocalBusiness",
    "name": "TF Edilservice Sagl",
    "image": "https://www.tf-edilservice.ch/logo-TF-edilservice.svg"
  }
};

export default function ReferenzePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageHero
        iconName="Grid"
        title="Le Nostre Referenze"
        subtitle="Scopri i progetti che abbiamo realizzato con successo in tutto il Ticino. La nostra migliore garanzia è la soddisfazione dei nostri clienti."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Referenze" }
        ]}
        imageUrl="/images/referenze/hero-referenze.png"
      />
      <ReferenzeContent />
    </>
  );
}
