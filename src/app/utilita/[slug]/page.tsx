import { Metadata } from "next";
import { notFound } from "next/navigation";
import { utilitaData } from "@/data/utilitaData";
import PageHero from "@/components/PageHero";
import { Calendar, User, Clock, ChevronLeft, ExternalLink, Download, ShieldCheck, HelpCircle, ChevronDown } from "lucide-react";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import ShareButton from "@/components/ShareButton";
import Image from "next/image";

export async function generateStaticParams() {
  return Object.keys(utilitaData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const item = utilitaData[resolvedParams.slug];
  if (!item) return { title: "Risorsa non trovata" };

  return {
    title: `${item.title} | Utilità & Risorse Ticino`,
    description: item.excerpt,
    openGraph: {
      title: item.title,
      description: item.excerpt,
      type: "article",
      publishedTime: item.date,
      authors: [item.author],
    },
  };
}

export default async function UtilitaPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const item = utilitaData[resolvedParams.slug];

  if (!item) notFound();

  const currentUrl = `https://www.tf-edilservice.ch/utilita/${item.slug}`;

  // JSON-LD for Article & FAQ
  const jsonLd: any = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": item.title,
    "description": item.excerpt,
    "author": {
      "@type": "Organization",
      "name": "TF Edilservice Sagl"
    },
    "datePublished": item.date,
    "image": `https://www.tf-edilservice.ch${item.imageUrl}`,
    "publisher": {
      "@type": "Organization",
      "name": "TF Edilservice Sagl",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.tf-edilservice.ch/images/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": currentUrl
    }
  };

  if (item.faqs) {
    jsonLd.mainEntity = item.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }));
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <PageHero
        title={item.title}
        subtitle={item.excerpt}
        imageUrl={item.imageUrl}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Utilità", href: "/utilita" },
          { label: item.category }
        ]}
      />

      <article className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
              <Link 
                href="/utilita" 
                className="inline-flex items-center gap-2 text-gray-500 hover:text-accent transition-colors mb-12 font-bold group"
              >
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                  <ChevronLeft className="w-4 h-4" />
                </div>
                Torna a Utilità
              </Link>

              <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl border-8 border-gray-50">
                <Image 
                  src={item.imageUrl} 
                  alt={item.title} 
                  fill 
                  className="object-cover"
                />
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-12 pb-8 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-accent" />
                  {new Date(item.date).toLocaleDateString('it-CH', { day: 'numeric', month: 'long', year: 'numeric' })}
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-accent" />
                  {item.author}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" />
                  {item.readTime} di lettura
                </div>
              </div>

              {/* Improved Typography with proper spacing */}
              <div 
                className="prose prose-lg prose-gray max-w-none 
                prose-headings:text-primary prose-headings:font-bold 
                prose-p:leading-[1.8] prose-p:text-gray-600 prose-p:mb-8
                prose-li:text-gray-600 prose-li:mb-2
                prose-strong:text-primary
                prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8
                prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
                prose-ul:mb-8
                "
                dangerouslySetInnerHTML={{ __html: item.content }}
              />

              {/* FAQ Section */}
              {item.faqs && item.faqs.length > 0 && (
                <div className="mt-20 pt-20 border-t border-gray-100">
                  <h2 className="text-3xl font-bold text-primary mb-10 flex items-center gap-3">
                    <HelpCircle className="w-8 h-8 text-accent" /> Domande Frequenti
                  </h2>
                  <div className="space-y-6">
                    {item.faqs.map((faq, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                        <h4 className="text-xl font-bold text-primary mb-4">{faq.question}</h4>
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Marketing Callout */}
              <div className="mt-20 p-12 bg-gradient-to-br from-primary via-primary to-blue-900 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                  <ShieldCheck className="w-64 h-64" />
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-4 py-2 bg-accent rounded-full text-xs font-bold uppercase tracking-wider mb-6">Supporto Tecnico</span>
                  <h3 className="text-3xl font-bold mb-6">Non rischiare con la burocrazia svizzera</h3>
                  <p className="text-white/80 mb-10 max-w-xl text-lg leading-relaxed">
                    Le leggi federali e cantonali sono precise e gli errori possono costare caro in termini di sanzioni o mancati incentivi. 
                    TF Edilservice gestisce per te ogni aspetto tecnico e amministrativo.
                  </p>
                  <Link 
                    href="/preventivo" 
                    className="inline-flex items-center gap-4 px-10 py-5 bg-white text-primary rounded-full font-bold hover:bg-accent hover:text-white transition-all shadow-xl group"
                  >
                    Parla con un esperto <ChevronLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-10">
              
              {/* Share Card - Now functional */}
              <div className="p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm flex items-center justify-between">
                <span className="font-bold text-primary">Ti piace? Condividi</span>
                <ShareButton title={item.title} url={currentUrl} />
              </div>

              {/* Official Links Card */}
              {item.officialLinks && item.officialLinks.length > 0 && (
                <div className="bg-gray-50 rounded-[2rem] p-10 border border-gray-100 shadow-sm relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/5 rounded-full" />
                  <h4 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                    <ExternalLink className="w-6 h-6 text-accent" /> Risorse Ufficiali
                  </h4>
                  <ul className="space-y-4">
                    {item.officialLinks.map((link, idx) => (
                      <li key={idx}>
                        <a 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-5 bg-white rounded-2xl border border-gray-200 hover:border-accent hover:shadow-md transition-all group"
                        >
                          <span className="font-bold text-sm text-gray-700 group-hover:text-accent">{link.label}</span>
                          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                            <Download className="w-4 h-4" />
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 text-xs text-gray-400 leading-relaxed italic border-t border-gray-200 pt-6">
                    * TF Edilservice non è responsabile del contenuto dei siti esterni della Confederazione o del Cantone.
                  </p>
                </div>
              )}

              {/* Sticky Wrapper for Trust & Contact Cards */}
              <div className="sticky top-32 space-y-10 h-fit">
                {/* Trust Card */}
                <div className="bg-primary text-white rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
                  <h4 className="text-2xl font-bold mb-6">Eccellenza Ticinese</h4>
                  <ul className="space-y-4">
                    {[
                      "Certificazione Federale ESTI",
                      "Esperti in Pratiche Pronovo/FER",
                      "Oltre 15 anni di attività in Ticino",
                      "Gestione Burocratica Completa",
                      "Sopralluoghi Tecnici Gratuiti"
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-4 text-sm font-medium">
                        <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5 shadow-lg">
                          <ChevronLeft className="w-4 h-4 rotate-180" />
                        </div>
                        <span className="text-white/90">{t}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 pt-8 border-t border-white/10">
                     <p className="text-white/60 text-xs leading-relaxed">
                       Siamo una ditta iscritta all'albo degli installatori autorizzati, operante nel pieno rispetto della normativa svizzera.
                     </p>
                  </div>
                </div>

                {/* Direct Contact Card */}
                <div className="p-10 border-2 border-dashed border-gray-200 rounded-[2.5rem] text-center">
                   <h5 className="font-bold text-primary mb-2 text-lg">Hai una domanda specifica?</h5>
                   <p className="text-gray-500 text-sm mb-6">Chiamaci ora per una consulenza senza impegno.</p>
                   <a 
                     href="tel:+41764611599" 
                     className="block text-2xl font-black text-accent hover:scale-105 transition-transform"
                   >
                     +41 76 461 15 99
                   </a>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </article>

      <CTASection 
        title="Vuoi sapere quanto puoi risparmiare?"
        description="I nostri tecnici eseguono analisi dettagliate del potenziale solare e termico del tuo immobile, calcolando esattamente il ritorno dell'investimento e i sussidi ottenibili."
      />
    </>
  );
}
