"use client";

import { motion } from "framer-motion";
import { Award, Users, Zap, Shield, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: Award,
    title: "Qualità Svizzera",
    description:
      "Utilizziamo esclusivamente materiali di prima scelta e tecnologie all'avanguardia per garantire risultati duraturi e certificati.",
  },
  {
    icon: Users,
    title: "Professionalità",
    description:
      "Il nostro team in Ticino è composto da tecnici e professionisti altamente qualificati con formazione rigorosa.",
  },
  {
    icon: Zap,
    title: "Innovazione",
    description:
      "Pionieri in domotica e impianti fotovoltaici, ci aggiorniamo costantemente sulle ultime tecnologie per edifici intelligenti.",
  },
  {
    icon: Shield,
    title: "Affidabilità",
    description:
      "Puntualità, preventivi trasparenti e rispetto totale del budget concordato. La fiducia è la nostra vera moneta.",
  },
];

export default function ChiSiamoContent() {
  return (
    <>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-primary mb-6 tracking-tight">
                L'Eccellenza Svizzera al Tuo Servizio
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  <strong>TF Edilservice Sagl</strong> è l'azienda di riferimento nel
                  settore dell'impiantistica elettrica, domotica avanzata e delle opere edili in tutto il <strong>Cantone Ticino</strong>. 
                  Con team operativi che coprono capillarmente il territorio da <strong>Lugano</strong> a <strong>Locarno</strong>, 
                  da <strong>Bellinzona</strong> a <strong>Mendrisio</strong>, siamo il partner tecnico di fiducia per privati, amministrazioni immobiliari e aziende.
                </p>
                <p>
                  Fondata con la profonda passione per il mestiere e un impegno incrollabile verso
                  l'eccellenza costruttiva, la nostra realtà si distingue per il rispetto rigoroso degli standard di qualità svizzeri. 
                  Operiamo in piena conformità con le normative <strong>ESTI</strong> e le direttive tecniche <strong>NIN/NIBT</strong>, 
                  garantendo sicurezza assoluta e certificazioni a norma di legge in ogni singola installazione.
                </p>
                <p>
                  Oggi, il nostro organico è composto da ingegneri, tecnici specializzati e artigiani 
                  qualificati che uniscono un'esperienza decennale sul campo alle più moderne soluzioni tecnologiche. 
                  Che si tratti di un impianto fotovoltaico all'avanguardia ad Ascona o di una complessa ristrutturazione 
                  chiavi in mano a Chiasso, trasformiamo la visione di ogni cliente in un successo tangibile e duraturo.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-full min-h-[450px] lg:min-h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100"
            >
              <Image 
                src="/images/team-ticino.png"
                alt="Team di ingegneri e tecnici TF Edilservice al lavoro in un cantiere nel Cantone Ticino"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-primary/40 flex items-center justify-center p-8 backdrop-blur-[1px] transition-all hover:backdrop-blur-sm hover:bg-primary/50 duration-500">
                <div className="text-center bg-white/10 p-10 md:p-14 rounded-3xl border border-white/20 backdrop-blur-md shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="text-7xl md:text-8xl font-black text-accent mb-4 drop-shadow-lg tracking-tighter">10+</div>
                  <div className="text-white text-xl md:text-2xl font-semibold tracking-wide leading-tight drop-shadow-md">
                    Anni di Esperienza<br/>
                    <span className="font-light text-gray-200">sul territorio Ticinese</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
              I Nostri Valori Fondamentali
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Principi etici e professionali che guidano ogni nostra azione, progettazione e intervento in cantiere.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-left hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <value.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-primary leading-tight">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 tracking-tight">Radicati nel Territorio</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              La profonda conoscenza del tessuto urbano e architettonico del Ticino ci permette di intervenire con precisione chirurgica in ogni contesto. Dalla corretta gestione delle pratiche amministrative nei vari Municipi, fino all'integrazione di sistemi domotici complessi in ville storiche sul lago o in nuovi complessi residenziali, TF Edilservice è sinonimo di vicinanza e affidabilità locale.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-accent/30 transition-colors"
            >
               <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-accent"></span>
                 Luganese e Mendrisiotto
               </h3>
               <p className="text-gray-600 leading-relaxed">Presenza capillare su Lugano, Mendrisio e Chiasso. Specializzati in impianti domotici di lusso, rifacimento di grandi opere e transizione energetica per building management ed edifici commerciali ad alto standing.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-accent/30 transition-colors"
            >
               <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-accent"></span>
                 Bellinzonese e Valli
               </h3>
               <p className="text-gray-600 leading-relaxed">Presidio operativo costante a Bellinzona e nelle valli. Interventi rapidi per privati e stabili con team dedicati al pronto intervento elettrico, manutenzioni ordinarie e ristrutturazioni edili complete.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-accent/30 transition-colors"
            >
               <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-accent"></span>
                 Locarnese e Grigioni
               </h3>
               <p className="text-gray-600 leading-relaxed">Operiamo stabilmente ad Ascona, Locarno e in tutto il Grigioni Italiano, garantendo gli stessi rigorosi standard di eccellenza tecnica, tempestività e rispetto assoluto dell'ambiente circostante.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 tracking-tight">
                Le Garanzie TF Edilservice
              </h2>
              <ul className="space-y-6">
                {[
                  "Certificazioni RAQI ed esecuzione a norma ESTI svizzera",
                  "Preventivi dettagliati, chiari e con prezzi bloccati",
                  "Servizio di pronto intervento rapido in tutto il Ticino",
                  "Garanzia post-installazione e contratti di manutenzione dedicati",
                  "Consulenza tecnica per incentivi energetici cantonali e federali"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-gray-700 text-lg font-medium leading-tight">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[2rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent rounded-full blur-[80px] opacity-20"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white rounded-full blur-[80px] opacity-10"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6 text-white tracking-tight">La Nostra Missione</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Vogliamo essere il punto di riferimento assoluto per chi cerca soluzioni
                  impiantistiche e costruttive di alta fascia in Ticino. 
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Ci impegniamo ogni giorno a offrire un servizio che superi costantemente le aspettative, 
                  combinando in modo magistrale altissima competenza tecnica, innovazione sostenibile e una 
                  cura maniacale del dettaglio e delle reali esigenze del cliente.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}