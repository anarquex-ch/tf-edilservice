"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, CheckCircle, Users } from "lucide-react";

const partners = [
  { name: "ABB", logo: "ABB" },
  { name: "Siemens", logo: "Siemens" },
  { name: "Schneider", logo: "Schneider" },
  { name: "Legrand", logo: "Legrand" },
  { name: "Feller", logo: "Feller" },
  { name: "KNX", logo: "KNX" },
];

const stats = [
  { icon: ShieldCheck, label: "Certificato ESTI", value: "100%" },
  { icon: Award, label: "Anni di Esperienza", value: "15+" },
  { icon: CheckCircle, label: "Progetti Completati", value: "500+" },
  { icon: Users, label: "Clienti Soddisfatti", value: "300+" },
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                Autorità Tecnica e <br />
                <span className="text-accent">Affidabilità Certificata</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Operiamo nel pieno rispetto delle normative federali e cantonali vigenti. La nostra competenza è supportata da partner tecnologici leader a livello mondiale e da una formazione continua del nostro team.
              </p>

              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <stat.icon className="w-5 h-5 text-accent" />
                      <span className="text-2xl font-bold text-primary">{stat.value}</span>
                    </div>
                    <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 rounded-[2.5rem] p-12 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-primary mb-8 text-center uppercase tracking-widest">Partner Tecnologici</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {partners.map((partner, i) => (
                  <div 
                    key={i} 
                    className="h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center p-4 group hover:shadow-md transition-all grayscale hover:grayscale-0"
                  >
                    <span className="text-lg font-black text-primary/30 group-hover:text-primary transition-colors italic">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-12 text-center text-sm text-gray-400 italic">
                Utilizziamo esclusivamente componentistica certificata per garantire la massima durata e sicurezza dei vostri impianti.
              </p>
            </motion.div>
            
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
