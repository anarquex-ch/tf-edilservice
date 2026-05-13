import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceContent from "@/components/ServiceContent";

export const metadata: Metadata = {
  title: "Integrazione Edile e Autoconsumo RCP Ticino | TF Edilservice Sagl",
  description: "Specialisti in sistemi di autoconsumo collettivo (RCP), comunità elettriche locali (CEL) e opere edili di supporto impiantistico in Canton Ticino. Conformità Mantelerlass.",
  keywords: "RCP Ticino, autoconsumo collettivo, Mantelerlass, ZEV Svizzera, integrazione fotovoltaico, opere edili impianti, comunità elettriche locali",
  openGraph: { title: "Integrazione Edile e Autoconsumo RCP Ticino | TF Edilservice Sagl", description: "Sistemi di autoconsumo collettivo e opere edili specializzate per l'impiantistica in Ticino.", url: "https://www.tf-edilservice.ch/servizi/opere-edili", type: "website" },
  alternates: { canonical: "https://www.tf-edilservice.ch/servizi/opere-edili" },
};

const faqData = [
  { question: "Cos'è un RCP (Raggruppamento ai fini del consumo proprio)?", answer: "Un RCP (in tedesco ZEV) permette a più consumatori (inquilini, proprietari) di raggrupparsi per consumare l'energia prodotta da un unico impianto fotovoltaico situato sullo stesso fondo. Questo ottimizza l'autoconsumo e riduce i costi di rete, rendendo l'energia solare più conveniente per tutti." },
  { question: "Cosa prevede il nuovo 'Mantelerlass' per l'energia in Svizzera?", answer: "Il Mantelerlass, approvato nel 2024, introduce le Comunità Elettriche Locali (CEL), facilitando lo scambio di energia tra vicini di casa attraverso la rete pubblica con tariffe ridotte. TF Edilservice supporta l'implementazione tecnica di questi nuovi modelli di condivisione." },
  { question: "Come viene gestita la fatturazione in un condominio con RCP?", answer: "In un RCP, il condominio diventa un unico cliente per il fornitore di energia esterno. TF Edilservice installa contatori privati e sistemi di monitoraggio che permettono di ripartire i costi e i consumi tra gli inquilini in modo trasparente e automatico." },
  { question: "Realizzate opere murarie per impianti elettrici?", answer: "Sì, siamo specializzati in opere edili di supporto: tracce a muro, carotaggi certificati per il passaggio cavi, posa di canalizzazioni e realizzazione di locali tecnici. Il nostro obiettivo è la perfetta integrazione dell'impianto nella struttura esistente." },
  { question: "Quali sono i vantaggi fiscali o gli incentivi?", answer: "Oltre agli incentivi Pronovo per il fotovoltaico, la creazione di un RCP permette di evitare il pagamento di parte degli oneri di rete per l'energia consumata internamente, accelerando l'ammortamento dell'impianto del 20-30%." },
  { question: "Potete trasformare un condominio esistente in un RCP?", answer: "Certamente. Analizziamo l'infrastruttura elettrica esistente, progettiamo le modifiche necessarie al quadro elettrico principale e installiamo i contatori smart necessari per la gestione del raggruppamento secondo le direttive ESTI." }
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Service", "name": "Integrazione Edile e Autoconsumo", "description": "Sistemi di autoconsumo collettivo (RCP) e opere edili per l'impiantistica in Ticino.", "provider": { "@type": "Organization", "name": "TF Edilservice Sagl" }, "areaServed": { "@type": "State", "name": "Canton Ticino" } },
    { "@type": "FAQPage", "mainEntity": faqData.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }
  ]
};

export default function OpereEdiliPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <PageHero 
        iconName="Zap" 
        title="Integrazione e Autoconsumo" 
        subtitle="Specialisti in raggruppamenti di consumo proprio (RCP) e integrazione impiantistica avanzata. Soluzioni conformi al nuovo Mantelerlass per l'indipendenza energetica in Ticino." 
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Servizi", href: "/servizi" }, { label: "Autoconsumo" }]} 
        imageUrl="/images/servizi/opere-edili.jpg" 
        keyPoints={[
          { text: "Configurazione RCP (Raggruppamenti ai fini del Consumo Proprio)" },
          { text: "Implementazione Comunità Elettriche Locali (CEL) - Legge federale 2024" },
          { text: "Integrazione elettrica-edile per Smart Home e Domotica" },
          { text: "Conformità totale al nuovo Mantelerlass (Legge sull'energia)" },
          { text: "Monitoraggio energetico in tempo reale per condomini" }
        ]} 
      />
      <ServiceContent 
        definition="TF Edilservice Sagl si posiziona come il referente tecnico per la transizione energetica in Ticino. Non realizziamo costruzioni generali, ma ci concentriamo esclusivamente sull'integrazione tra la struttura dell'edificio e i suoi sistemi vitali: impianti elettrici, fotovoltaico e domotica. Attraverso i sistemi RCP e le nuove CEL, permettiamo a condomini e quartieri di condividere l'energia prodotta localmente, abbattendo i costi di rete e massimizzando l'efficienza secondo le più recenti direttive federali svizzere." 
        targetAudience={[
          { title: "Condomini (RCP)", description: "Soluzioni per condividere l'energia solare tra più appartamenti sullo stesso fondo.", slug: "raggruppamento-consumo-proprio" },
          { title: "Proprietari di Case", description: "Integrazione domotica e sistemi di accumulo per l'autoconsumo totale.", slug: "raggruppamento-consumo-proprio" },
          { title: "Sviluppatori (CEL)", description: "Progettazione di reti di quartiere per lo scambio locale di energia.", slug: "comunita-elettriche-locali" }
        ]} 
        features={[
          { title: "RCP - Autoconsumo", description: "Gestione tecnica e amministrativa della vendita interna di energia solare.", slug: "raggruppamento-consumo-proprio" },
          { title: "Mantelerlass & CEL", description: "Condivisione energetica locale tramite la rete pubblica (Comunità Elettriche).", slug: "comunita-elettriche-locali" },
          { title: "Infrastruttura per Domotica", description: "Opere edili mirate per la posa di cablaggi KNX e sistemi smart home.", slug: "opere-murarie-tecniche" },
          { title: "Integrazione Fotovoltaica", description: "Sinergia tra involucro e tecnologia per impianti ad alto rendimento.", slug: "integrazione-architettonica" },
          { title: "Smart Metering", description: "Installazione di contatori intelligenti per la ripartizione automatica dei costi.", slug: "efficientamento-edile-elettrico" }
        ]} 
        processSteps={[
          { step: 1, title: "Audit Energetico", description: "Analisi dei consumi e delle potenzialità del fondo" },
          { step: 2, title: "Progettazione RCP", description: "Studio della rete interna e della fatturazione" },
          { step: 3, title: "Opere di Supporto", description: "Realizzazione di tracce e locali tecnici" },
          { step: 4, title: "Installazione", description: "Posa contatori smart e integrazione inverter" },
          { step: 5, title: "Collaudo e Avvio", description: "Messa in funzione del raggruppamento e monitoraggio" }
        ]} 
        benefits={[
          "Massimizzazione del ritorno sull'investimento fotovoltaico",
          "Riduzione dei costi di rete (fino al 30%)",
          "Trasparenza totale sui consumi per ogni utenza",
          "Conformità alle nuove leggi federali (Mantelerlass)",
          "Valorizzazione commerciale dell'immobile",
          "Intervento edile pulito e mirato"
        ]} 
        faq={faqData} 
        serviceName="Integrazione e Autoconsumo" 
        parentSlug="opere-edili" 
      />
    </>
  );
}