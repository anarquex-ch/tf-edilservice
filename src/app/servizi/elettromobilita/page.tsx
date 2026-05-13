import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceContent from "@/components/ServiceContent";

export const metadata: Metadata = {
  title: "Elettromobilità e Stazioni di Ricarica in Ticino | TF Edilservice Sagl",
  description: "Installazione professionale di colonnine e wallbox per la ricarica di veicoli elettrici in Canton Ticino. Gestione dinamica dei carichi e soluzioni per condomini e aziende.",
  keywords: "elettromobilità Ticino, stazioni di ricarica, wallbox, ricarica veicoli elettrici, gestione dinamica carichi, ricarica auto aziendali, colonnine condominio",
  openGraph: { title: "Elettromobilità e Stazioni di Ricarica | TF Edilservice Sagl", description: "Soluzioni smart per la ricarica di veicoli elettrici in Ticino.", url: "https://www.tf-edilservice.ch/servizi/elettromobilita", type: "website" },
  alternates: { canonical: "https://www.tf-edilservice.ch/servizi/elettromobilita" },
};

const faqData = [
  { question: "Quale wallbox è adatta alla mia abitazione?", answer: "Dipende dalla potenza elettrica disponibile e dall'impianto esistente. I nostri tecnici effettuano un sopralluogo per consigliare la wallbox ideale (es. 11kW o 22kW) e verificano se è necessario un adeguamento della fornitura o un sistema di load balancing." },
  { question: "Cos'è il Load Balancing (gestione dinamica del carico)?", answer: "Il load balancing monitora il consumo energetico dell'abitazione in tempo reale. Se accendi apparecchi energivori (forno, lavatrice), il sistema riduce automaticamente la potenza di ricarica dell'auto per evitare che scatti il salvavita, garantendo sicurezza ed efficienza." },
  { question: "È possibile installare colonnine di ricarica in un condominio?", answer: "Sì, offriamo soluzioni specifiche per condomini. Integriamo le stazioni di ricarica con sistemi di fatturazione automatica (spesso combinati con RCP) in modo che ogni inquilino paghi esattamente per l'energia che ha utilizzato per la propria auto." },
  { question: "Posso caricare l'auto usando l'energia dei miei pannelli solari?", answer: "Assolutamente sì. Le stazioni di ricarica smart che installiamo possono dialogare con l'inverter del tuo impianto fotovoltaico, utilizzando l'energia solare in eccesso per caricare la tua auto gratuitamente e massimizzando il tuo autoconsumo." },
  { question: "Fornite anche l'installazione per le aziende?", answer: "Certamente. Progettiamo e installiamo reti di stazioni di ricarica per parcheggi aziendali, offrendo software di gestione per monitorare i consumi della flotta aziendale e regolare gli accessi dei dipendenti tramite schede RFID." },
  { question: "Le vostre installazioni sono certificate?", answer: "Tutte le nostre installazioni rispettano rigorosamente le normative svizzere NIBT/OIBT. Al termine dei lavori rilasciamo il necessario Rapporto di Sicurezza (RaSi) per garantire la totale conformità e sicurezza dell'impianto." }
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Service", "name": "Elettromobilità", "description": "Installazione stazioni di ricarica e wallbox per veicoli elettrici in Ticino.", "provider": { "@type": "Organization", "name": "TF Edilservice Sagl" }, "areaServed": { "@type": "State", "name": "Canton Ticino" } },
    { "@type": "FAQPage", "mainEntity": faqData.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }
  ]
};

export default function ElettromobilitaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <PageHero 
        iconName="BatteryCharging" 
        title="Elettromobilità" 
        subtitle="Infrastrutture di ricarica intelligenti per il tuo veicolo elettrico. Wallbox domestiche, aziendali e condominiali con gestione avanzata del carico." 
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Servizi", href: "/servizi" }, { label: "Elettromobilità" }]} 
        imageUrl="/images/servizi/elettromobilita.jpg" 
        keyPoints={[
          { text: "Installazione Wallbox intelligenti da 11kW e 22kW" },
          { text: "Gestione dinamica dei carichi (Load Balancing)" },
          { text: "Sistemi di ricarica scalabili per condomini" },
          { text: "Integrazione con impianti fotovoltaici per l'autoconsumo" },
          { text: "Reti di ricarica aziendali con controllo accessi RFID" }
        ]} 
      />
      <ServiceContent 
        definition="Guidiamo la transizione verso una mobilità sostenibile offrendo stazioni di ricarica su misura per le esigenze residenziali, aziendali e pubbliche in tutto il Canton Ticino. Dalla piccola wallbox da garage fino alle infrastrutture complesse per autosili, integriamo i sistemi di ricarica con l'impianto elettrico esistente in totale sicurezza. Attraverso software intelligenti, ottimizziamo la ricarica sfruttando l'energia solare e prevenendo sovraccarichi della rete domestica." 
        targetAudience={[
          { title: "Privati e Famiglie", description: "Wallbox compatte ed eleganti per ricaricare l'auto di notte in modo sicuro.", slug: "installazione-wallbox-domestiche" },
          { title: "Amministrazioni Condominiali", description: "Reti di ricarica con fatturazione individuale per i residenti.", slug: "sistemi-ricarica-condominiali" },
          { title: "Aziende e Flotte", description: "Stazioni multiple per dipendenti e clienti con gestione remota via cloud.", slug: "infrastrutture-ricarica-aziendali" }
        ]} 
        features={[
          { title: "Load Balancing", description: "Regolazione automatica della potenza per evitare blackout.", slug: "load-balancing-dinamico" },
          { title: "Integrazione Solare", description: "Ricarica del veicolo con l'energia prodotta dai pannelli fotovoltaici.", slug: "ricarica-fotovoltaica-smart" },
          { title: "Fatturazione Automatica", description: "Ripartizione esatta dei consumi in ambienti multi-utente.", slug: "gestione-fatturazione-condominiale" },
          { title: "Sistemi RFID/App", description: "Autenticazione sicura tramite tessere o applicazione mobile.", slug: "controllo-accessi-ricarica" },
          { title: "Adeguamento Impianti", description: "Potenziamento del quadro elettrico per supportare le nuove esigenze.", slug: "adeguamento-quadri-elettrici" }
        ]} 
        processSteps={[
          { step: 1, title: "Sopralluogo Tecnico", description: "Verifica della potenza disponibile e delle canalizzazioni" },
          { step: 2, title: "Proposta e Progettazione", description: "Scelta della wallbox e studio del load balancing" },
          { step: 3, title: "Autorizzazioni AIL", description: "Gestione delle pratiche con l'azienda elettrica locale" },
          { step: 4, title: "Posa e Collegamento", description: "Installazione a regola d'arte e configurazione software" },
          { step: 5, title: "Certificazione (RaSi)", description: "Collaudo finale e rilascio della dichiarazione di conformità" }
        ]} 
        benefits={[
          "Ricarica fino a 10 volte più veloce rispetto a una presa normale",
          "Massima sicurezza contro surriscaldamenti o cortocircuiti",
          "Ottimizzazione dei costi caricando l'auto con energia solare",
          "Aumento del valore commerciale dell'immobile",
          "Assistenza rapida e manutenzione locale in Ticino",
          "Pratiche amministrative gestite internamente"
        ]} 
        faq={faqData} 
        serviceName="Elettromobilità" 
        parentSlug="elettromobilita" 
      />
    </>
  );
}
