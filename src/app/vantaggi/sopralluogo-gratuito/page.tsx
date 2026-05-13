import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Calculator, ShieldCheck } from "lucide-react";


export const metadata: Metadata = {
  title: "Sopralluogo Gratuito in Ticino | TF Edilservice Sagl",
  description: "Veniamo noi da te in tutto il Ticino. Analizziamo il tuo progetto sul posto per offrirti la soluzione tecnica più adatta senza alcun impegno.",
};

export default function SopralluogoGratuitoPage() {
  const steps = [
    {
      icon: MapPin,
      title: "Intervento in Loco",
      desc: "Raggiungiamo il tuo cantiere o la tua abitazione in tutto il Canton Ticino, all'orario per te più comodo."
    },
    {
      icon: Calculator,
      title: "Analisi Tecnica",
      desc: "Valutiamo le condizioni strutturali e impiantistiche per individuare subito criticità e opportunità."
    },
    {
      icon: ShieldCheck,
      title: "Nessun Vincolo",
      desc: "Ti offriamo la nostra consulenza e un preventivo dettagliato, senza alcun obbligo di accettazione."
    }
  ];

  return (
    <>
      <PageHero
        iconName="MapPin"
        title="Sopralluogo Gratuito"
        subtitle="Analizziamo il tuo progetto sul posto per offrirti la soluzione tecnica più adatta alle tue reali esigenze, in tutto il Ticino."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Sopralluogo Gratuito" }
        ]}
        imageUrl="/images/servizi/impianti-elettrici.jpg"
      />
      
      {/* Introduction Cards Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Perché il sopralluogo è fondamentale?</h2>
            <p className="text-xl text-gray-600">
              Ogni progetto è unico e presenta sfide che non possono essere valutate solo su carta. Comprendere le reali condizioni del cantiere è il primo passo per un lavoro a regola d'arte.
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
                src="/images/servizi/manutenzione.jpg" 
                alt="Tecnico TF Edilservice durante un sopralluogo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Dal primo incontro alla <span className="text-accent">soluzione definitiva.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Il sopralluogo è un nostro investimento per garantirti trasparenza. Valutiamo le metrature, verifichiamo i quadri elettrici esistenti, analizziamo l'esposizione solare (per il fotovoltaico) e ti proponiamo soluzioni concrete.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Valutazione immediata di fattibilità tecnica",
                  "Consulenza sui materiali e le tecnologie migliori",
                  "Stima accurata di tempistiche e costi",
                  "Risposte dirette a tutti i tuoi dubbi"
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
