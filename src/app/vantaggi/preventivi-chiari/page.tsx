import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, PiggyBank, Eye } from "lucide-react";


export const metadata: Metadata = {
  title: "Preventivi Chiari e Trasparenti | TF Edilservice Sagl",
  description: "Ricevi un'offerta dettagliata e trasparente. Nessun costo nascosto o sorpresa finale: rispettiamo il budget concordato al 100%.",
};

export default function PreventiviChiariPage() {
  const steps = [
    {
      icon: Eye,
      title: "Trasparenza Totale",
      desc: "Ogni singola voce di costo è dettagliata, chiara e spiegata. Saprai sempre esattamente cosa stai pagando."
    },
    {
      icon: PiggyBank,
      title: "Nessun Costo Nascosto",
      desc: "Il prezzo concordato all'accettazione è quello finale. Eventuali imprevisti sono gestiti preventivamente."
    },
    {
      icon: FileText,
      title: "Specifiche Precise",
      desc: "Includiamo sempre le schede tecniche dei materiali scelti, le quantità e le ore di manodopera stimate."
    }
  ];

  return (
    <>
      <PageHero
        iconName="FileText"
        title="Preventivi Chiari"
        subtitle="Offerte dettagliate e trasparenti per garantirti la massima serenità economica in ogni progetto edilizio e impiantistico."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Preventivi Chiari" }
        ]}
        imageUrl="/images/servizi/opere-edili.jpg"
      />
      
      {/* Introduction Cards Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">La serenità di un budget rispettato</h2>
            <p className="text-xl text-gray-600">
              Nel settore edile, la paura dei "costi lievitati" è reale. Con TF Edilservice, questo rischio viene azzerato grazie a un approccio metodico e svizzero alla preventivazione.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-[#383837]/5 rounded-2xl flex items-center justify-center shrink-0">
                    <step.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Details Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Cosa trovi esattamente nei <span className="text-accent">nostri preventivi?</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Non ci limitiamo a fornirti una cifra finale. Costruiamo un documento che fa da vera e propria guida al tuo progetto, tutelandoti dal primo all'ultimo giorno di cantiere.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Elenco dettagliato di forniture e materiali",
                  "Scansione temporale e fasi di cantiere stimate",
                  "Costi di gestione burocratica e permessi inclusi",
                  "Nessuna clausola in piccolo o costi a sorpresa"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-800 font-medium text-lg">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="/images/servizi/quadristica.jpg" 
                alt="Documenti e planimetrie analizzate da un professionista"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection showCards={false} />
    </>
  );
}
