import { CheckCircle2, Wrench, FileText, Zap } from "lucide-react";

interface MarketingTechSectionProps {
  title: string;
  serviceName: string;
}

export default function MarketingTechSection({ title, serviceName }: MarketingTechSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Marketing / Benefits Section */}
          <div>
            <div className="mb-8">
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">I Vantaggi per Te</span>
              <h2 className="text-3xl font-bold text-primary mt-2">
                Perché scegliere il nostro servizio di {title}?
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Affidarsi a veri professionisti nel settore <strong>{serviceName}</strong> è fondamentale per garantire longevità, 
                sicurezza ed efficienza. Con TF Edilservice Sagl, ti assicuri un intervento eseguito a regola d'arte, 
                ideale per abitazioni, uffici e complessi industriali.
              </p>
            </div>

            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary">Eccellenza Operativa</h4>
                  <p className="text-gray-600 mt-1">
                    Ogni intervento è pianificato nel dettaglio per azzerare gli imprevisti e ottimizzare i tempi di esecuzione.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Zap className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary">Materiali di Prima Scelta</h4>
                  <p className="text-gray-600 mt-1">
                    Selezioniamo solo materie prime e tecnologie all'avanguardia per garantire risultati duraturi.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Technical Section */}
          <div className="bg-background rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-sm relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
            
            <span className="text-accent font-semibold tracking-wider uppercase text-sm relative z-10">Specifiche Tecniche</span>
            <h3 className="text-2xl font-bold text-primary mt-2 relative z-10">
              Protocollo di Intervento
            </h3>
            <p className="mt-4 text-gray-600 mb-8 relative z-10">
              L'implementazione delle soluzioni relative a <strong>{title}</strong> richiede un iter tecnico rigoroso, in piena conformità con le normative svizzere vigenti.
            </p>

            <div className="space-y-5 relative z-10">
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                <div className="text-accent bg-accent/5 p-2 rounded-lg">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Esecuzione Qualificata</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Manodopera altamente specializzata dotata di strumentazione di ultima generazione per test e collaudi precisi.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                <div className="text-accent bg-accent/5 p-2 rounded-lg">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Certificazione e Garanzia</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Rilascio della documentazione tecnica completa al termine dei lavori, come richiesto dalle disposizioni cantonali.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
