import { Metadata } from "next";
import { notFound } from "next/navigation";
import { zonesData } from "@/data/zonesData";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { MapPin, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  return [
    { canton: "ticino" },
    { canton: "grigioni" }
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ canton: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const cantonName = resolvedParams.canton === "ticino" ? "Ticino" : 
                    resolvedParams.canton === "grigioni" ? "Grigioni" : null;

  if (!cantonName) {
    return { title: "Cantone non trovato" };
  }

  return {
    title: `Zone Coperte nel Cantone ${cantonName} | TF Edilservice`,
    description: `Scopri tutti i servizi di TF Edilservice disponibili nel Cantone ${cantonName}. Interventi di impianti elettrici, domotica ed edilizia in tutte le principali città.`,
  };
}

export default async function CantonHubPage({
  params,
}: {
  params: Promise<{ canton: string }>;
}) {
  const resolvedParams = await params;
  const cantonName = resolvedParams.canton === "ticino" ? "Ticino" : 
                    resolvedParams.canton === "grigioni" ? "Grigioni" : null;

  if (!cantonName) {
    notFound();
  }

  // Get cities for this canton (include Moesa region for Ticino SEO/AEO)
  const cities = Object.entries(zonesData)
    .filter(([_, data]) => {
      if (cantonName === "Ticino") {
        return data.canton === "Ticino" || data.region === "Moesa";
      }
      return data.canton === cantonName;
    })
    .sort((a, b) => a[1].name.localeCompare(b[1].name));

  return (
    <>
      <PageHero
        title={`Servizi nel Cantone ${cantonName}`}
        subtitle={`Siamo operativi in tutte le principali città e regioni del Cantone ${cantonName}${cantonName === "Ticino" ? " e nelle zone di confine (Moesa/Mesolcina)" : ""}. Scegli la tua zona per scoprire i servizi dedicati.`}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Zone Coperte" },
          { label: cantonName },
        ]}
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center gap-3 mb-10">
            <MapPin className="w-8 h-8 text-accent" />
            <h2 className="text-3xl font-bold text-primary">
              Città e Regioni in {cantonName}{cantonName === "Ticino" && " e dintorni"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map(([cityKey, data]) => (
              <Link
                key={cityKey}
                href={`/${data.canton.toLowerCase()}/${cityKey}`}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {data.name}
                  </h3>
                  <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full font-medium">
                    {data.postalCode}
                  </span>
                </div>
                <p className="text-gray-600 flex-grow mb-6">
                  Scopri i nostri interventi e servizi attivi nella regione <strong>{data.region}</strong>, {data.seoDescription}.
                </p>
                <div className="flex items-center text-accent font-medium mt-auto">
                  Esplora i servizi
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
