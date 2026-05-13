import { Metadata } from "next";
import { notFound } from "next/navigation";
import { zonesData } from "@/data/zonesData";
import { servicesData } from "@/data/servicesData";
import { subServicesData } from "@/data/subServicesData";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import SeoTicinoSection from "@/components/SeoTicinoSection";
import MarketingTechSection from "@/components/MarketingTechSection";

export async function generateStaticParams() {
  const params = [];
  for (const cityKey in zonesData) {
    const zone = zonesData[cityKey];
    for (const serviceKey in subServicesData) {
      for (const subServiceKey in subServicesData[serviceKey]) {
        params.push({
          canton: zone.canton.toLowerCase(),
          city: cityKey,
          service: serviceKey,
          subService: subServiceKey,
        });
      }
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ canton: string; city: string; service: string; subService: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const { city, service, subService, canton } = resolvedParams;
  
  const zone = zonesData[city];
  const serviceInfo = servicesData[service];
  const subServiceInfo = subServicesData[service]?.[subService];

  if (!zone || !serviceInfo || !subServiceInfo || zone.canton.toLowerCase() !== canton) {
    return { title: "Pagina non trovata" };
  }

  return {
    title: `${subServiceInfo.title} a ${zone.name} | TF Edilservice`,
    description: `Stai cercando esperti in ${subServiceInfo.title.toLowerCase()} a ${zone.name}? Scopri i nostri servizi in ${zone.region} per privati e aziende. Interventi certificati.`,
  };
}

export default async function CitySubServiceHubPage({
  params,
}: {
  params: Promise<{ canton: string; city: string; service: string; subService: string }>;
}) {
  const resolvedParams = await params;
  const { city, service, subService, canton } = resolvedParams;
  
  const zone = zonesData[city];
  const serviceInfo = servicesData[service];
  const subServiceInfo = subServicesData[service]?.[subService];

  if (!zone || !serviceInfo || !subServiceInfo || zone.canton.toLowerCase() !== canton) {
    notFound();
  }

  // AEO Schema Markup specific for Local Service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": subServiceInfo.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "TF Edilservice Sagl",
      "telephone": "+41793494546",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "CH"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": zone.name,
      "address": {
        "@type": "PostalAddress",
        "postalCode": zone.postalCode,
        "addressRegion": zone.canton
      }
    },
    "description": subServiceInfo.description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <PageHero
        title={`${subServiceInfo.title} a ${zone.name}`}
        subtitle={`${subServiceInfo.subtitle} Servizio disponibile a ${zone.name} e in tutta la regione ${zone.region}.`}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: zone.canton, href: `/${zone.canton.toLowerCase()}` },
          { label: zone.name, href: `/${zone.canton.toLowerCase()}/${city}` },
          { label: serviceInfo.title, href: `/${zone.canton.toLowerCase()}/${city}/${service}` },
          { label: subServiceInfo.title },
        ]}
        imageUrl={subServiceInfo.imageUrl}
      />

      <SeoTicinoSection
        title={subServiceInfo.title}
        serviceName={subServiceInfo.title}
        imageUrl={subServiceInfo.imageUrl}
      />

      <MarketingTechSection
        title={subServiceInfo.title}
        serviceName={subServiceInfo.title}
      />

      <CTASection
        title={`Richiedi ${subServiceInfo.title.toLowerCase()} a ${zone.name}`}
        description={`Contattaci oggi per un preventivo o un sopralluogo a ${zone.name}. Il nostro team è pronto ad assisterti con la massima competenza.`}
      />
    </>
  );
}
