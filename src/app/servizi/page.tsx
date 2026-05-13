import ServicesSection from "@/components/ServicesSection";
import PageHero from "@/components/PageHero";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Servizi | TF Edilservice Sagl",
  description:
    "Scopri tutti i servizi di TF Edilservice Sagl: impianti elettrici, domotica, sicurezza, energie rinnovabili e ristrutturazioni edilizie.",
};

export default function ServiziPage() {
  return (
    <>
      <PageHero
        iconName="Grid"
        title="I Nostri Servizi"
        subtitle="Un'ampia gamma di servizi professionali per soddisfare ogni tua esigenza. Dalla progettazione all'installazione, dalla manutenzione alla consulenza."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Servizi" }
        ]}
        imageUrl="/images/servizi-generali.jpg"
      />

      {/* Marketing Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#383837]/5 rounded-full text-[#383837] font-medium text-sm">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Il Tuo General Contractor in Ticino
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Dimentica lo stress dei cantieri. <br />
                <span className="text-accent">Gestiamo tutto noi.</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Affidare i tuoi lavori a TF Edilservice significa avere un unico interlocutore responsabile per ogni fase del progetto. Dall'impiantistica avanzata alle opere edili, coordiniamo ogni dettaglio per consegnarti un risultato impeccabile, nei tempi stabiliti e senza imprevisti.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Unico referente dall'inizio alla fine",
                  "Standard Svizzeri e rispetto rigoroso delle normative",
                  "Soluzioni chiavi in mano ad alta efficienza",
                  "Assistenza post-intervento dedicata e tempestiva"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="pt-6">
                <Link
                  href="/preventivo"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#383837] text-white font-bold rounded-xl hover:bg-[#383837]/90 hover:shadow-xl hover:-translate-y-1 transition-all group"
                >
                  Richiedi una Consulenza Gratuita
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-accent/10 rounded-[3rem] transform rotate-3 scale-105 transition-transform hover:rotate-6 duration-700" />
              <div className="relative aspect-[4/5] md:aspect-square w-full rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <Image 
                  src="/images/servizi-marketing.png"
                  alt="Gestione cantieri e progetti chiavi in mano in Ticino"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection showAllButton={false} />
    </>
  );
}