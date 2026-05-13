import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldAlert, GraduationCap, ClipboardCheck } from "lucide-react";


export const metadata: Metadata = {
  title: "Esecuzione Certificata a Norma di Legge | TF Edilservice Sagl",
  description: "Lavori eseguiti a perfetta regola d'arte da tecnici qualificati. Rilasciamo tutte le certificazioni a norma di legge svizzera.",
};

export default function EsecuzioneCertificataPage() {
  const steps = [
    {
      icon: GraduationCap,
      title: "Personale Qualificato",
      desc: "I nostri tecnici sono costantemente formati e in possesso delle abilitazioni federali richieste in Svizzera."
    },
    {
      icon: ClipboardCheck,
      title: "Rapporto di Sicurezza",
      desc: "Rilasciamo il RaSI (Rapporto di Sicurezza) per impianti elettrici, necessario per legge e per le assicurazioni."
    },
    {
      icon: ShieldAlert,
      title: "Materiali Omologati",
      desc: "Utilizziamo esclusivamente componenti con marchio CE e omologati per l'installazione sul territorio elvetico."
    }
  ];

  return (
    <>
      <PageHero
        iconName="Award"
        title="Esecuzione Certificata"
        subtitle="Lavori a regola d'arte e rilascio di tutte le certificazioni obbligatorie a norma di legge svizzera (RaSI, ecc.)."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Esecuzione Certificata" }
        ]}
        imageUrl="/images/servizi/domotica.jpg"
      />
      
      {/* Introduction Cards Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Qualità Svizzera, Sicurezza Garantita</h2>
            <p className="text-xl text-gray-600">
              Nel nostro settore l'improvvisazione non è ammessa. La sicurezza della tua famiglia o della tua azienda dipende dalla qualità delle installazioni e dal rigoroso rispetto delle normative SIA e NIN.
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
            <div className="relative aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="/images/servizi/energie-rinnovabili.jpg" 
                alt="Tecnico specializzato al lavoro in cantiere"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Non solo fatto bene. <br/><span className="text-accent">Fatto a norma.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Dal piccolo intervento alla grande opera, seguiamo un protocollo rigoroso. Al termine dei lavori non ti lasciamo solo con l'impianto, ma ti forniamo tutta la documentazione legale che ne attesta la validità.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Collaudi tecnici eseguiti con strumentazione certificata",
                  "Redazione dei protocolli di misurazione",
                  "Pratiche per sussidi e incentivi cantonali",
                  "Garanzia totale su manodopera e fornitura"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-800 font-medium text-lg">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection showCards={false} />
    </>
  );
}
