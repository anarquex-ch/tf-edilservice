"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight, FileText, MapPin, Award } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  showCards?: boolean;
}

export default function CTASection({
  title = "Pronto a realizzare il tuo progetto?",
  description = "Contattaci oggi per una consulenza gratuita. Il nostro team è pronto a trovare la soluzione migliore per le tue esigenze.",
  primaryButtonText = "Richiedi un Preventivo",
  primaryButtonHref = "/preventivo",
  secondaryButtonText = "Chiamaci",
  secondaryButtonHref = "tel:+41764611599",
  showCards = true,
}: CTASectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Why Choose Us - Marketing Section */}
        {showCards && (
          <div className="mb-16">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">I vantaggi di affidarsi a noi</h3>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                Siamo il partner ideale per i tuoi progetti in Ticino. Garantiamo professionalità, chiarezza e risultati di altissima qualità per farti dormire sonni tranquilli.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/vantaggi/sopralluogo-gratuito" className="block outline-none group h-full">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray-50 h-full rounded-2xl border border-gray-100 p-8 text-left group-hover:shadow-lg group-hover:border-accent/30 group-hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-xl font-bold text-primary leading-tight group-hover:text-accent transition-colors">Sopralluogo Gratuito</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Veniamo noi da te in tutto il Ticino. Analizziamo il tuo progetto sul posto per offrirti la soluzione tecnica più adatta alle tue reali esigenze senza alcun impegno.
                </p>
              </motion.div>
            </Link>

            {/* Card 2 */}
            <Link href="/vantaggi/preventivi-chiari" className="block outline-none group h-full">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-50 h-full rounded-2xl border border-gray-100 p-8 text-left group-hover:shadow-lg group-hover:border-accent/30 group-hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <FileText className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-xl font-bold text-primary leading-tight group-hover:text-accent transition-colors">Preventivi Chiari</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Ricevi un'offerta dettagliata e trasparente. Nessun costo nascosto o sorpresa finale: rispettiamo il budget concordato al 100% per garantirti la massima serenità.
                </p>
              </motion.div>
            </Link>

            {/* Card 3 */}
            <Link href="/vantaggi/esecuzione-certificata" className="block outline-none group h-full">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gray-50 h-full rounded-2xl border border-gray-100 p-8 text-left group-hover:shadow-lg group-hover:border-accent/30 group-hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-xl font-bold text-primary leading-tight group-hover:text-accent transition-colors">Esecuzione Certificata</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Lavori eseguiti a perfetta regola d'arte da tecnici qualificati. Rilasciamo tutte le certificazioni a norma di legge svizzera per la tua totale sicurezza.
                </p>
              </motion.div>
            </Link>
          </div>
        </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2rem] shadow-xl px-6 py-12 sm:px-12 sm:py-16 text-center"
          style={{ backgroundColor: "#F36A04" }}
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div 
              animate={{ opacity: [0.1, 0.25, 0.1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent"
            />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight drop-shadow-sm">
              {title}
            </h2>
            <p className="text-base md:text-lg text-white mb-8 leading-relaxed font-medium drop-shadow-sm">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href={primaryButtonHref}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#F36A04] font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
              >
                {primaryButtonText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={secondaryButtonHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border-2 border-white/90 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
              >
                <Phone className="w-5 h-5" />
                {secondaryButtonText}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}