import { Metadata } from "next";
import { notFound } from "next/navigation";
import { zonesData } from "@/data/zonesData";
import { servicesData } from "@/data/servicesData";
import { subServicesData } from "@/data/subServicesData";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import LocalPresence from "@/components/LocalPresence";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import CTASection from "@/components/CTASection";

export async function generateStaticParams() {
  const params = [];
  for (const cityKey in zonesData) {
    const zone = zonesData[cityKey];
    for (const serviceKey in servicesData) {
      params.push({
        canton: zone.canton.toLowerCase(),
        city: cityKey,
        service: serviceKey,
      });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ canton: string; city: string; service: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const { city, service, canton } = resolvedParams;
  const zone = zonesData[city];
  const serviceInfo = servicesData[service];

  if (!zone || !serviceInfo || zone.canton.toLowerCase() !== canton) {
    return { title: "Servizio non trovato" };
  }

  return {
    title: `${serviceInfo.title} ${zone.name} | Pronto Intervento e Qualità TF`,
    description: `Cerchi esperti in ${serviceInfo.title} a ${zone.name}? TF Edilservice offre installazioni certificate, manutenzione e pronto intervento in tutto il distretto di ${zone.name}. Preventivo gratis in 24h.`,
    keywords: `${serviceInfo.title} ${zone.name}, tecnico ${serviceInfo.title} ${zone.name}, ditta ${serviceInfo.title} ${zone.name}, ticino`,
  };
}

export default async function CityServiceHubPage({
  params,
}: {
  params: Promise<{ canton: string; city: string; service: string }>;
}) {
  const resolvedParams = await params;
  const { city, service, canton } = resolvedParams;
  const zone = zonesData[city];
  const serviceInfo = servicesData[service];

  if (!zone || !serviceInfo || zone.canton.toLowerCase() !== canton) {
    notFound();
  }

  // Find sub-services for this service
  const relatedSubServices = subServicesData[service] || {};
  const subServiceKeys = Object.keys(relatedSubServices);

  // AEO Schema Markup specific for Local Service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${serviceInfo.title} a ${zone.name}`,
    "serviceType": serviceInfo.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "TF Edilservice Sagl",
      "telephone": "+41793494546",
      "image": "https://www.tf-edilservice.ch/images/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Via Campagna 4b",
        "addressLocality": "Giubiasco",
        "postalCode": "6512",
        "addressCountry": "CH"
      }
    },
    "areaServed": [
      {
        "@type": "City",
        "name": zone.name,
        "sameAs": `https://it.wikipedia.org/wiki/${zone.name}`
      },
      {
        "@type": "State",
        "name": "Canton Ticino"
      }
    ],
    "description": `Servizi professionali di ${serviceInfo.title} nel comune di ${zone.name} e in tutta la regione ${zone.region}. Certificazioni e pronto intervento.`,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": serviceInfo.title,
      "itemListElement": subServiceKeys.map((subKey, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": relatedSubServices[subKey].title
        }
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <PageHero
        title={`${serviceInfo.title} a ${zone.name}`}
        subtitle={`Competenza e professionalità per ogni esigenza di ${serviceInfo.title.toLowerCase()} nel territorio di ${zone.name}.`}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: zone.canton, href: `/${zone.canton.toLowerCase()}` },
          { label: zone.name, href: `/${zone.canton.toLowerCase()}/${city}` },
          { label: serviceInfo.title },
        ]}
      />

      <LocalPresence 
        cityName={zone.name} 
        postalCode={zone.postalCode} 
        region={zone.region} 
        canton={zone.canton} 
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                Specialisti in {serviceInfo.title} a {zone.name}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Stai cercando un partner affidabile per <strong>{serviceInfo.title.toLowerCase()} a {zone.name}</strong>? 
                TF Edilservice è l'azienda di riferimento per interventi di altissima qualità nel territorio di {zone.name} ({zone.seoDescription}).
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {serviceInfo.description} Operiamo attivamente nella regione {zone.region} garantendo sopralluoghi rapidi e soluzioni su misura per privati e aziende.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-gray-800 font-medium">Interventi rapidi a {zone.name} e dintorni</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-gray-800 font-medium">Personale altamente qualificato</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-gray-800 font-medium">Preventivi trasparenti senza sorprese</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -mr-10 -mt-10" />
              <h3 className="text-2xl font-bold text-primary mb-6 relative z-10">
                I nostri interventi a {zone.name}
              </h3>
              <div className="flex flex-col gap-4 relative z-10">
                {subServiceKeys.length > 0 ? (
                  subServiceKeys.map((subKey) => {
                    const subService = relatedSubServices[subKey];
                    return (
                      <Link 
                        key={subKey}
                        href={`/servizi/${service}/${subKey}`}
                        className="group flex items-center justify-between p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
                      >
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent" />
                          <span className="font-semibold text-gray-800">{subService.title}</span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                      </Link>
                    );
                  })
                ) : (
                  <p className="text-gray-500 italic">Dettagli servizi in aggiornamento.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={`Richiedi un intervento a ${zone.name}`}
        description={`Siamo a tua disposizione per qualsiasi necessità relativa a ${serviceInfo.title.toLowerCase()} a ${zone.name}. Ottieni un preventivo rapido e senza impegno.`}
      />
    </>
  );
}
