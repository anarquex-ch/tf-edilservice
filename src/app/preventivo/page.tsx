import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import { CheckCircle2, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Richiedi un Preventivo | TF Edilservice Sagl",
  description: "Richiedi un preventivo gratuito per impianti elettrici, domotica, fotovoltaico o opere edili. Sopralluogo gratuito in tutto il Canton Ticino.",
};

export default function PreventivoPage() {
  return (
    <>
      <PageHero
        title="Richiedi un Preventivo"
        subtitle="Sopralluogo gratuito, quotazioni trasparenti e nessuna sorpresa. Raccontaci il tuo progetto e riceverai un'offerta su misura entro 24 ore."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Preventivo" }]}
      />

      <section className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-8">
              <QuoteForm />
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-8">
              {/* Trust Box */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Perché sceglierci?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <p className="font-bold text-gray-900">Sopralluogo Gratuito</p>
                      <p className="text-sm text-gray-500">Veniamo sul posto senza impegno in tutto il Ticino.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <p className="font-bold text-gray-900">Preventivi Trasparenti</p>
                      <p className="text-sm text-gray-500">Prezzi chiari, materiali inclusi, nessuna sorpresa finale.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <p className="font-bold text-gray-900">Esecuzione Certificata</p>
                      <p className="text-sm text-gray-500">Personale qualificato e rilascio rapporti RaSI (OIBT).</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Direct Contact Info */}
              <div className="bg-gray-900 text-white rounded-3xl p-8 shadow-xl shadow-gray-900/20">
                <h3 className="text-xl font-bold mb-6">Preferisci parlarne a voce?</h3>
                <div className="space-y-6">
                  <a href="tel:+41000000000" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Chiamaci subito</p>
                      <p className="font-bold text-lg">+41 (0)91 000 00 00</p>
                    </div>
                  </a>
                  <a href="mailto:info@tfedilservice.ch" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Scrivici una mail</p>
                      <p className="font-bold">info@tfedilservice.ch</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Orari d'ufficio</p>
                      <p className="font-bold">Lun - Ven: 07:30 - 17:30</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
