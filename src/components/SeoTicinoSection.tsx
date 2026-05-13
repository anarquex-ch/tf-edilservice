import Image from "next/image";
import Link from "next/link";
import { MapPin, Shield, Clock, PhoneCall, CheckCircle } from "lucide-react";

interface SeoTicinoSectionProps {
  title: string;
  serviceName: string;
  imageUrl: string;
}

export default function SeoTicinoSection({ title, serviceName, imageUrl }: SeoTicinoSectionProps) {
  return (
    <section className="py-20 bg-background border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
              <MapPin className="w-4 h-4" />
              <span>Operativi in tutto il Canton Ticino</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight font-heading">
              Il tuo partner di fiducia per <span className="text-accent">{title}</span> in Ticino
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              In TF Edilservice Sagl, siamo specializzati nel settore <strong>{serviceName}</strong>. 
              Garantiamo interventi rapidi, sicuri e a norma di legge per privati, aziende e condomini a Lugano, Locarno, Bellinzona, Mendrisio e in tutto il territorio ticinese.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-accent/10 p-2 rounded-lg text-accent shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Massima Sicurezza</h3>
                  <p className="text-sm text-gray-500">Lavori eseguiti rigorosamente a norma.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-accent/10 p-2 rounded-lg text-accent shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Interventi Rapidi</h3>
                  <p className="text-sm text-gray-500">Rispetto scrupoloso delle tempistiche.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-accent/10 p-2 rounded-lg text-accent shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Sopralluogo Gratuito</h3>
                  <p className="text-sm text-gray-500">Analisi dettagliata senza impegno.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <Link 
                href="/preventivo" 
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-lg shadow-accent/20"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Richiedi un Preventivo Gratuito</span>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
            <Image
              src={imageUrl}
              alt={`${title} in Canton Ticino`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-sm p-5 rounded-xl shadow-lg border border-white/20">
                <p className="text-primary font-medium text-center italic">
                  "Esperienza e professionalità svizzera al tuo servizio per {title.toLowerCase()}."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
