"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SeoTicinoSection from "@/components/SeoTicinoSection";
import CTASection from "@/components/CTASection";

const references = [
  {
    id: "impianto-industriale",
    category: "Impianti Elettrici",
    title: "Nuovo Polo Industriale a Lugano",
    challenge: "Gestire una potenza elevata garantendo la continuità operativa in un'area di 5.000 mq con carichi macchinari variabili.",
    solution: "Installazione di un quadro generale intelligente con monitoraggio in tempo reale e ridondanza dei circuiti critici.",
    description: "Progettazione e realizzazione completa dell'impianto elettrico per un nuovo polo logistico e produttivo. L'intervento ha richiesto soluzioni ad alta efficienza per ottimizzare i consumi dell'intera struttura.",
    results: [
      "Quadro generale di bassa tensione da 1600A",
      "Oltre 10 km di cablaggio strutturato",
      "Riduzione dei consumi stimata del 25%",
      "Consegna dei lavori con 2 settimane di anticipo",
    ],
    image: "/images/referenze/referenza-01-impianto-industriale.png",
  },
  {
    id: "domotica-villa",
    category: "Smart Home & Domotica",
    title: "Villa di Lusso ad Ascona",
    challenge: "Integrare molteplici sistemi (luci, clima, piscina, audio) in un'unica interfaccia che fosse esteticamente invisibile.",
    solution: "Sviluppo su standard KNX con server di supervisione e pulsantiere di design integrate nello stile architettonico.",
    description: "Integrazione di un sistema domotico avanzato in una prestigiosa villa sul Lago Maggiore. Il cliente desiderava il controllo totale gestibile da remoto tramite smartphone e pannelli touch di design.",
    results: [
      "Integrazione completa con standard KNX",
      "Scenari personalizzati per ogni ambiente",
      "Controllo vocale e gestione carichi energetici",
      "Design estetico minimale e invisibile",
    ],
    image: "/images/referenze/referenza-02-domotica-villa.png",
    reverse: true,
  },
  {
    id: "fotovoltaico-commerciale",
    category: "Fotovoltaico e Batterie",
    title: "Centro Commerciale Sostenibile a Mendrisio",
    challenge: "Massimizzare l'autoconsumo per abbattere i costi di raffrescamento estivo del centro commerciale.",
    solution: "Posa di 150 kWp di pannelli ad alta efficienza e integrazione con sistema di accumulo per gestire i picchi diurni.",
    description: "Installazione di un grande impianto fotovoltaico sul tetto di un centro commerciale, abbinato a un sistema di accumulo all'avanguardia per garantire l'autosufficienza energetica.",
    results: [
      "Potenza installata di 150 kWp",
      "Inverter ad alta efficienza con monitoraggio cloud",
      "Autonomia energetica diurna fino all'80%",
      "Ritorno sull'investimento calcolato in soli 5 anni",
    ],
    image: "/images/referenze/referenza-03-fotovoltaico-commerciale.png",
  },
  {
    id: "ristrutturazione-totale",
    category: "Integrazione Energetica",
    title: "Ristrutturazione Appartamento Storico a Locarno",
    challenge: "Modernizzare gli impianti in un contesto vincolato rispettando la sicurezza e migliorando l'efficienza energetica.",
    solution: "Rifacimento totale con domotica wireless per evitare tracce invasive e installazione di sistemi a basso consumo.",
    description: "Intervento 'chiavi in mano' per il rinnovamento totale di un appartamento d'epoca. Oltre al completo rifacimento degli impianti, ci siamo occupati di opere murarie e finiture di pregio.",
    results: [
      "Rifacimento completo impianti a norma",
      "Isolamento termico e acustico avanzato",
      "Illuminotecnica su misura con velette a LED",
      "Unico interlocutore per tutto il progetto",
    ],
    image: "/images/referenze/referenza-04-ristrutturazione-totale.png",
    reverse: true,
  },
  {
    id: "sicurezza-aziendale",
    category: "Sicurezza e Videosorveglianza",
    title: "Sede Bancaria a Bellinzona",
    challenge: "Garantire i massimi standard di sicurezza richiesti dal settore bancario senza compromettere l'usabilità degli spazi.",
    solution: "Sistema integrato con analisi video AI per rilevamento intrusioni e controllo accessi biometrico multi-livello.",
    description: "Progettazione e messa in opera di un sistema di sicurezza integrato di altissimo livello. L'impianto include telecamere ad altissima risoluzione e controllo accessi biometrico.",
    results: [
      "Telecamere 4K con analisi video AI",
      "Controllo accessi avanzato a zone differenziate",
      "Integrazione perfetta senza impatto visivo",
      "Standard di sicurezza bancari internazionali",
    ],
    image: "/images/referenze/referenza-05-sicurezza-aziendale.png",
  },
];

export default function ReferenzeContent() {
  return (
    <div className="bg-white">
      {/* Intro Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              I nostri lavori parlano per noi
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Dalla piccola installazione residenziale ai grandi progetti industriali, 
              mettiamo la stessa passione, competenza e precisione in ogni lavoro. 
              Ecco alcune delle nostre realizzazioni più recenti e significative in tutto il Ticino.
            </p>
          </motion.div>

          <div className="space-y-24 md:space-y-32">
            {references.map((ref, index) => (
              <motion.div
                key={ref.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col ${ref.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                    <Image
                      src={ref.image}
                      alt={ref.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-semibold text-sm rounded-full">
                    {ref.category}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                    {ref.title}
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-2xl border-l-4 border-accent">
                      <p className="text-sm font-bold text-primary uppercase tracking-wider mb-1">Sfida Tecnica</p>
                      <p className="text-gray-700 italic">{ref.challenge}</p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-2xl border-l-4 border-primary">
                      <p className="text-sm font-bold text-primary uppercase tracking-wider mb-1">Soluzione TF</p>
                      <p className="text-gray-700">{ref.solution}</p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {ref.description}
                  </p>
                  
                  <div className="pt-4 space-y-3">
                    <h4 className="font-bold text-primary">Risultati:</h4>
                    <ul className="space-y-3">
                      {ref.results.map((result, i) => (
                         <motion.li 
                           key={i}
                           initial={{ opacity: 0, x: -10 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.4, delay: i * 0.1 }}
                           className="flex items-start gap-3"
                         >
                           <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                           <span className="text-gray-700 font-medium">{result}</span>
                         </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6">
                     <Link 
                       href="/preventivo"
                       className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-accent transition-colors duration-300"
                     >
                       Voglio un risultato simile
                       <ArrowRight className="w-4 h-4" />
                     </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 bg-[#383837] text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Perché sceglierci per il tuo prossimo progetto?</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shrink-0">
                  <span className="font-bold text-xl">1</span>
                </div>
                <h4 className="text-xl font-bold leading-tight">Unico Referente</h4>
              </div>
              <p className="text-white/70">Gestiamo l'intero progetto "chiavi in mano", dalla progettazione alla consegna, semplificando il lavoro.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shrink-0">
                  <span className="font-bold text-xl">2</span>
                </div>
                <h4 className="text-xl font-bold leading-tight">Qualità Svizzera</h4>
              </div>
              <p className="text-white/70">Materiali di prima scelta, rispetto rigoroso delle normative e precisione assoluta nei dettagli.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shrink-0">
                  <span className="font-bold text-xl">3</span>
                </div>
                <h4 className="text-xl font-bold leading-tight">Rispetto dei Tempi</h4>
              </div>
              <p className="text-white/70">Sappiamo quanto è importante il tuo tempo. Garantiamo il rispetto assoluto delle scadenze prefissate.</p>
            </div>
          </div>
        </div>
      </section>

      <SeoTicinoSection 
        title="i Tuoi Progetti" 
        serviceName="impiantistica ed edilizia" 
        imageUrl="/images/referenze/hero-referenze.png" 
      />
      
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
           <CTASection />
        </div>
      </div>
    </div>
  );
}
