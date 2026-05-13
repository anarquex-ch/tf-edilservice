import { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ServiceContent from "@/components/ServiceContent";
import SeoTicinoSection from "@/components/SeoTicinoSection";
import MarketingTechSection from "@/components/MarketingTechSection";
import { subServicesData } from "@/data/subServicesData";

interface SubServicePageProps {
  params: Promise<{
    service: string;
    subService: string;
  }>;
}

export async function generateMetadata({ params }: SubServicePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const serviceData = subServicesData[resolvedParams.service];
  const data = serviceData?.[resolvedParams.subService];

  if (!data) {
    return {
      title: "Servizio Non Trovato | TF Edilservice Sagl"
    };
  }

  // Format service name for breadcrumb and title (e.g., "impianti-elettrici" -> "Impianti Elettrici")
  const formattedServiceName = resolvedParams.service.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  return {
    title: `${data.title} | ${formattedServiceName} Ticino | TF Edilservice Sagl`,
    description: `${data.description} Scopri i nostri servizi qualificati per ${data.title} a Lugano e nel Canton Ticino. Richiedi un preventivo gratuito.`,
    keywords: `${data.title.toLowerCase()}, ${formattedServiceName.toLowerCase()}, ticino, lugano, bellinzona, locarno, mendrisio, installazione, manutenzione, preventivo gratuito`,
    openGraph: {
      title: `${data.title} | ${formattedServiceName} Ticino | TF Edilservice Sagl`,
      description: `${data.description} Interventi rapidi e a norma in tutto il Canton Ticino.`,
      url: `https://www.tf-edilservice.ch/servizi/${resolvedParams.service}/${resolvedParams.subService}`,
      type: "website",
    },
    alternates: {
      canonical: `https://www.tf-edilservice.ch/servizi/${resolvedParams.service}/${resolvedParams.subService}`,
    },
  };
}

export default async function SubServicePage({ params }: SubServicePageProps) {
  const resolvedParams = await params;
  const serviceData = subServicesData[resolvedParams.service];
  const data = serviceData?.[resolvedParams.subService];

  if (!data) {
    notFound();
  }

  const formattedServiceName = resolvedParams.service.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  // Map main service to its correct high-quality image
  const serviceImages: Record<string, string> = {
    "impianti-elettrici": "/images/servizi/impianti-elettrici.jpg",
    "domotica": "/images/servizi/domotica.jpg",
    "energie-rinnovabili": "/images/servizi/energie-rinnovabili.jpg",
    "manutenzione": "/images/servizi/manutenzione.jpg",
    "opere-edili": "/images/servizi/opere-edili.jpg",
    "sicurezza": "/images/servizi/sicurezza.jpg",
    "telecomunicazioni-it": "/images/servizi/telecomunicazioni.jpg",
    "elettromobilita": "/images/servizi/elettromobilita.jpg",
    "quadristica": "/images/servizi/quadristica.jpg",
  };
  
  const mappedImage = serviceImages[resolvedParams.service] || data.imageUrl || "/images/servizi/impianti-elettrici.jpg";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": data.title,
        "description": data.description,
        "provider": {
          "@type": "LocalBusiness",
          "name": "TF Edilservice Sagl",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "Ticino",
            "addressCountry": "CH"
          }
        },
        "areaServed": {
          "@type": "State",
          "name": "Canton Ticino"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": formattedServiceName,
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": data.title
              }
            }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.tf-edilservice.ch/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Servizi",
            "item": "https://www.tf-edilservice.ch/servizi"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": formattedServiceName,
            "item": `https://www.tf-edilservice.ch/servizi/${resolvedParams.service}`
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": data.title
          }
        ]
      },
      ...(data.faq && data.faq.length > 0 ? [{
        "@type": "FAQPage",
        "mainEntity": data.faq.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      }] : [])
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageHero
        iconName="CheckCircle"
        title={data.title}
        subtitle={data.subtitle}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Servizi", href: "/servizi" },
          { label: formattedServiceName, href: `/servizi/${resolvedParams.service}` },
          { label: data.title }
        ]}
        imageUrl={mappedImage}
        keyPoints={data.keyPoints}
      />
      
      {/* Dynamic Marketing and Technical Section */}
      <MarketingTechSection 
        title={data.title}
        serviceName={formattedServiceName}
      />
      
      {/* Dynamic SEO Section specifically targeting Ticino with the correct mapped image */}
      <SeoTicinoSection 
        title={data.title} 
        serviceName={formattedServiceName} 
        imageUrl={mappedImage} 
      />

      <ServiceContent
        definition={data.description}
        features={[]}
        processSteps={data.processSteps || []}
        benefits={data.benefits || []}
        faq={data.faq || []}
        serviceName={data.title}
        hideFeatures={true}
      />
    </>
  );
}
