"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Info, Clock } from "lucide-react";

interface LocalPresenceProps {
  cityName: string;
  postalCode: string;
  region: string;
  canton: string;
}

export default function LocalPresence({ cityName, postalCode, region, canton }: LocalPresenceProps) {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Copertura Locale</h4>
                <p className="text-xl font-bold text-primary">{cityName}, {postalCode}</p>
                <p className="text-gray-600">{canton} - {region}</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0">
                <Navigation className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Raggio d'Azione</h4>
                <p className="text-xl font-bold text-primary">Pronto Intervento</p>
                <p className="text-gray-600">Interventi rapidi in tutta la regione {region}.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0">
                <Clock className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Tempi di Risposta</h4>
                <p className="text-xl font-bold text-primary">Sopralluogo 24h</p>
                <p className="text-gray-600">Analisi tecnica gratuita entro 24 ore dalla richiesta.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <Info className="w-5 h-5 text-accent" />
            <p className="text-gray-500 text-sm leading-relaxed">
              TF Edilservice Sagl opera con tecnici certificati ESTI nel comune di <strong>{cityName}</strong>, garantendo la conformità alle normative federali e cantonali per ogni tipologia di impianto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
