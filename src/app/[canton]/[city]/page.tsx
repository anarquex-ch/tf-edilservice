import { Metadata } from "next";
import { notFound } from "next/navigation";
import { zonesData } from "@/data/zonesData";
import { servicesData } from "@/data/servicesData";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { ArrowRight, MapPin } from "lucide-react";
import CTASection from "@/components/CTASection";

export async function generateStaticParams() {
  const params = [];
  for (const key in zonesData) {
    const zone = zonesData[key];
    params.push({
      canton: zone.canton.toLowerCase(),
      city: key,
    });
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ canton: string; city: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const cityKey = resolvedParams.city;
  const zone = zonesData[cityKey];

  if (!zone || zone.canton.toLowerCase() !== resolvedParams.canton) {
    return { title: "Città non trovata" };
  }

  return {
    title: `Elettricista e Impianti a ${zone.name} | TF Edilservice`,
    description: `Servizi di impianti elettrici, domotica e opere edili a ${zone.name}, ${zone.seoDescription}. Contatta TF Edilservice per un preventivo.`,
  };
}

export default async function CityHubPage({
  params,
}: {
  params: Promise<{ canton: string; city: string }>;
}) {
  const resolvedParams = await params;
  const cityKey = resolvedParams.city;
  const zone = zonesData[cityKey];

  if (!zone || zone.canton.toLowerCase() !== resolvedParams.canton) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={`I nostri servizi a ${zone.name}`}
        subtitle={`Operiamo attivamente a ${zone.name}, ${zone.seoDescription}. Offriamo servizi chiavi in mano con la massima precisione e qualità svizzera.`}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: zone.canton, href: `/${zone.canton.toLowerCase()}` },
          { label: zone.name },
        ]}
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center gap-3 mb-10">
            <MapPin className="w-8 h-8 text-accent" />
            <h2 className="text-3xl font-bold text-primary">
              Cosa offriamo a {zone.name}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(servicesData).map((service) => (
              <Link
                key={service.id}
                href={`/${zone.canton.toLowerCase()}/${cityKey}/${service.id}`}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full"
              >
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {service.title} a {zone.name}
                </h3>
                <p className="text-gray-600 flex-grow mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-accent font-medium mt-auto">
                  Scopri di più
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Cerchi un professionista a ${zone.name}?`}
        description={`Siamo operativi nel territorio di ${zone.name} e in tutto il ${zone.canton}. Contattaci per un sopralluogo gratuito o un preventivo senza impegno.`}
      />
    </>
  );
}
