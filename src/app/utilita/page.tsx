import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { utilitaData } from "@/data/utilitaData";
import UtilitaList from "@/components/UtilitaList";
import { ArrowRight, Sun, Link as LinkIcon, Lightbulb, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Utilità e Incentivi | TF Edilservice Sagl Ticino",
  description: "Guida completa agli incentivi cantonali (FER), sussidi Pronovo e obblighi di legge come il RaSI (OIBT) in Canton Ticino.",
};

export default function UtilitaIndexPage() {
  const items = Object.values(utilitaData).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <PageHero
        title="Utilità & Risorse"
        subtitle="Il portale informativo per navigare tra incentivi cantonali, sussidi energetici e obblighi normativi in Ticino."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Utilità" }]}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <UtilitaList items={items} />
        </div>
      </section>

      {/* 2026 Solar Subsidy Guide - Premium Section */}
      <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="utilita-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#utilita-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          {/* Header Section */}
          <div className="max-w-3xl mb-20">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-accent/10 text-accent font-bold text-sm tracking-wide mb-8 uppercase">
              <Sun className="w-4 h-4" /> Aggiornamento Normativo 2026
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-8">
              Guida ai Sussidi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">Fotovoltaico Ticino</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Installare pannelli solari quest'anno non è solo una scelta etica, ma un investimento finanziario blindato da tre livelli di incentivi cumulabili.
            </p>
          </div>

          {/* Three Pillars of Subsidies - Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-24">
            {/* Pillar 1 */}
            <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center mb-8 text-white font-bold text-xl group-hover:bg-accent transition-colors duration-300">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Incentivi Federali</h3>
              <p className="text-accent font-semibold mb-6">Pronovo (RU)</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                La Confederazione eroga la Rimunerazione Unica che copre circa il 20-30% dei costi d’investimento base.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-gray-600">
                  <ArrowRight className="w-5 h-5 text-accent shrink-0" />
                  <span><strong>Bonus Invernale:</strong> Extra per impianti ad alta pendenza.</span>
                </li>
                <li className="flex gap-3 text-sm text-gray-600">
                  <ArrowRight className="w-5 h-5 text-accent shrink-0" />
                  <span><strong>Bonus Parcheggi:</strong> ~CHF 250/kW per le pensiline.</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center mb-8 text-white font-bold text-xl group-hover:bg-accent transition-colors duration-300">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Incentivi Cantonali</h3>
              <p className="text-accent font-semibold mb-6">Fondo FER (Ticino)</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Il Ticino "raddoppia" l'offerta. Oltre ai fondi di Berna, arrivano i contributi diretti da Bellinzona.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-gray-600">
                  <ArrowRight className="w-5 h-5 text-accent shrink-0" />
                  <span><strong>Contributo Extra:</strong> Circa il 20% del valore federale.</span>
                </li>
                <li className="flex gap-3 text-sm text-gray-600">
                  <ArrowRight className="w-5 h-5 text-accent shrink-0" />
                  <span><strong>Cumulabilità:</strong> 100% cumulabile con gli aiuti federali.</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center mb-8 text-white font-bold text-xl group-hover:bg-accent transition-colors duration-300">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vantaggio Fiscale</h3>
              <p className="text-accent font-semibold mb-6">Deducibilità 100%</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Finestra d'oro 2026-2027: sfrutta la deduzione totale dell'impianto dalle tasse come "manutenzione".
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-gray-600">
                  <ArrowRight className="w-5 h-5 text-accent shrink-0" />
                  <span><strong>Sconto Reale:</strong> Tra il 20% e il 35% del costo netto.</span>
                </li>
                <li className="flex gap-3 text-sm text-gray-600">
                  <ArrowRight className="w-5 h-5 text-accent shrink-0" />
                  <span><strong>Scadenza:</strong> Soggetto a imminenti riforme sul valore locativo.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Table & Links Split Layout */}
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            
            {/* ROI Table */}
            <div className="lg:col-span-3 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-gray-200/40 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Esempio di Risparmio (Impianto 10 kWp)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-100">
                      <th className="pb-4 font-semibold text-gray-500 uppercase text-xs tracking-wider">Tipo di Incentivo</th>
                      <th className="pb-4 font-semibold text-gray-500 uppercase text-xs tracking-wider text-right">Valore Stimato</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-6">
                        <p className="font-bold text-gray-900">Federale (Pronovo)</p>
                        <p className="text-sm text-gray-500 mt-1">Rimunerazione Unica base</p>
                      </td>
                      <td className="py-6 text-right font-bold text-gray-900">~ CHF 4'000</td>
                    </tr>
                    <tr>
                      <td className="py-6">
                        <p className="font-bold text-gray-900">Cantonale (FER)</p>
                        <p className="text-sm text-gray-500 mt-1">Contributo Cantonale Ticino</p>
                      </td>
                      <td className="py-6 text-right font-bold text-gray-900">~ CHF 800</td>
                    </tr>
                    <tr>
                      <td className="py-6">
                        <p className="font-bold text-gray-900">Risparmio Fiscale</p>
                        <p className="text-sm text-gray-500 mt-1">Deduzione totale (media)</p>
                      </td>
                      <td className="py-6 text-right font-bold text-gray-900">~ CHF 5'000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-8 px-6 rounded-l-2xl">
                        <p className="font-black text-gray-900 text-lg">RECUPERO TOTALE</p>
                        <p className="text-sm text-gray-600 mt-1">Dell'investimento iniziale</p>
                      </td>
                      <td className="py-8 px-6 rounded-r-2xl text-right font-black text-3xl text-accent">
                        40-55%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sidebar Resources */}
            <div className="lg:col-span-2 space-y-8">
              {/* Pro Tip Box */}
              <div className="bg-gray-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-gray-900/20">
                <div className="absolute -top-10 -right-10 opacity-10">
                  <Home className="w-48 h-48" />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                    <Lightbulb className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Novità CLE 2026</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Da gennaio 2026 è possibile creare <strong>Comunità Locali di Energia (CLE)</strong>. Scambia l'energia prodotta con i tuoi vicini e ottieni sconti sulla tariffa di rete fino al 40%.
                  </p>
                </div>
              </div>

              {/* Useful Links */}
              <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm">
                <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <LinkIcon className="w-5 h-5 text-accent" /> Fonti Ufficiali
                </h4>
                <div className="space-y-3">
                  <a href="https://pronovo.ch" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div>
                      <p className="font-bold text-gray-900 group-hover:text-accent transition-colors">Pronovo AG</p>
                      <p className="text-sm text-gray-500">Calcolatore ufficiale</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </a>
                  <a href="https://www.ticinoenergia.ch" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div>
                      <p className="font-bold text-gray-900 group-hover:text-accent transition-colors">TicinoEnergia</p>
                      <p className="text-sm text-gray-500">Portale cantonale</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </a>
                  <a href="https://www.ti.ch/dt" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div>
                      <p className="font-bold text-gray-900 group-hover:text-accent transition-colors">Dip. Territorio</p>
                      <p className="text-sm text-gray-500">Fondo FER</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
