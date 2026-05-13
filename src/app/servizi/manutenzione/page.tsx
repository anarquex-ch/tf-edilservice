import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceContent from "@/components/ServiceContent";

export const metadata: Metadata = {
  title: "Manutenzione e Riparazioni Impianti Elettrici | TF Edilservice Sagl",
  description: "Servizio di pronto intervento e riparazioni elettriche rapide in Canton Ticino. Interventi tempestivi per minimizzare i disservizi.",
  keywords: "manutenzione, riparazioni, pronto intervento, elettrico, assistenza, Ticino",
  openGraph: {
    title: "Manutenzione e Riparazioni Impianti Elettrici | TF Edilservice Sagl",
    description: "Servizio di pronto intervento e riparazioni elettriche rapide in Canton Ticino.",
    url: "https://www.tf-edilservice.ch/servizi/manutenzione",
    type: "website",
  },
  alternates: {
    canonical: "https://www.tf-edilservice.ch/servizi/manutenzione",
  },
};

const faqData = [
  {
    question: "Offrite servizio di pronto intervento?",
    answer: "Sì, disponiamo di un servizio di pronto intervento per emergenze elettriche con tempi di risposta rapidi. Il nostro team è disponibile per interventi urgenti su tutto il Canton Ticino, con priorità per le emergenze che mettono a rischio la sicurezza."
  },
  {
    question: "Quali tipologie di riparazioni eseguite?",
    answer: "Eseguiamo riparazioni su impianti elettrici, quadri, interruttori, prese, illuminazione e tutti i componenti elettrici. Copriamo un'ampia gamma di interventi, dalla sostituzione di una presa alla riparazione di quadri elettrici complessi."
  },
  {
    question: "Fate manutenzione programmata?",
    answer: "Sì, offriamo contratti di manutenzione programmata per impianti civili, industriali e commerciali. La manutenzione programmata permette di prevenire guasti imprevisti, prolungare la vita degli impianti e garantire la conformità normativa."
  },
  {
    question: "Quali sono i tempi di risposta per un'emergenza?",
    answer: "Per le emergenze garantiamo tempi di risposta rapidi: entro 2 ore per situazioni urgenti in zone urbane, entro 4 ore per zone rurali. Per interventi non urgenti programmiamo entro 24-48 ore."
  },
  {
    question: "Come funziona un contratto di manutenzione?",
    answer: "Il contratto di manutenzione prevede interventi periodici programmati con verifica dell'impianto, controllo dei componenti, sostituzione delle parti soggette a usura e documentazione."
  },
  {
    question: "Quali impianti potete manutenere?",
    answer: "Manutenziamo tutti i tipi di impianti elettrici: residenziali, commerciali e industriali. Questo include quadri elettrici, sistemi di illuminazione, impianti di distribuzione, sistemi di sicurezza e domotica."
  },
  {
    question: "Effettuate verifiche normative?",
    answer: "Sì, eseguiamo verifiche periodiche degli impianti secondo la normativa vigente in Canton Ticino. Possiamo effettuare le verifiche di legge richieste e rilasciare la relativa documentazione."
  },
  {
    question: "Quali marche di componenti utilizzate per le riparazioni?",
    answer: "Utilizziamo componenti di alta qualità da fornitori certificati. Per le riparazioni utilizziamo ricambi originali o equivalenti di prima qualità, garantendo l'affidabilità dell'intervento."
  },
  {
    question: "Fornite garanzia sugli interventi di riparazione?",
    answer: "Sì, tutti i nostri interventi di riparazione sono coperti da garanzia. La durata della garanzia varia in base al tipo di intervento e ai componenti sostituiti."
  },
  {
    question: "Come posso richiedere un intervento di manutenzione?",
    answer: "Può contattarci telefonicamente, via email o tramite il form sul nostro sito. Per interventi programmati consigliamo di contattarci con almeno una settimana di anticipo."
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Manutenzione e Riparazioni",
      "description": "Servizio di pronto intervento e riparazioni elettriche rapide in Canton Ticino.",
      "provider": {
        "@type": "Organization",
        "name": "TF Edilservice Sagl"
      },
      "areaServed": {
        "@type": "State",
        "name": "Canton Ticino"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tf-edilservice.ch/" },
        { "@type": "ListItem", "position": 2, "name": "Servizi", "item": "https://www.tf-edilservice.ch/servizi" },
        { "@type": "ListItem", "position": 3, "name": "Manutenzione e Riparazioni" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqData.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    }
  ]
};

export default function ManutenzionePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageHero
        iconName="Wrench"
        title="Manutenzione e Riparazioni"
        subtitle="Servizio di pronto intervento e manutenzione per impianti elettrici in Canton Ticino."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Servizi", href: "/servizi" }, { label: "Manutenzione" }]}
        imageUrl="/images/servizi/manutenzione.jpg"
        keyPoints={[
          { text: "Pronto intervento con tempi di risposta garantiti" },
          { text: "Contratti di manutenzione programmata flessibili" },
          { text: "Verifiche normative e certificazioni" },
          { text: "Tecnici qualificati e attrezzati" },
          { text: "Assistenza su tutto il Canton Ticino" }
        ]}
      />
      <ServiceContent
        definition="La manutenzione e le riparazioni comprendono tutti gli interventi necessari per mantenere gli impianti elettrici in perfetto stato di funzionamento. Un servizio di manutenzione regolare previene guasti improvvisi, prolunga la vita degli impianti e garantisce la sicurezza degli ambienti."
        targetAudience={[
          { title: "Condomini", description: "Manutenzione degli impianti comuni e parti comuni.", slug: "condomini" },
          { title: "Aziende", description: "Manutenzione di impianti commerciali e industriali.", slug: "aziende" },
          { title: "Proprietari", description: "Assistenza per case e appartamenti privati.", slug: "proprietari" }
        ]}
        features={[
          { title: "Pronto Intervento", description: "Servizio di emergenza elettrica con tempi di risposta rapidi.", slug: "pronto-intervento" },
          { title: "Riparazioni Elettriche", description: "Interventi su quadri, impianti, interruttori e componenti elettrici.", slug: "riparazioni-elettriche" },
          { title: "Manutenzione Programmata", description: "Contratti di manutenzione periodica per impianti civili e industriali.", slug: "manutenzione-programmata" },
          { title: "Verifiche e Controlli", description: "Verifiche periodiche degli impianti secondo normativa vigente.", slug: "verifiche-e-controlli" },
          { title: "Sostituzione Componenti", description: "Sostituzione di componenti obsoleti con soluzioni moderne.", slug: "sostituzione-componenti" },
          { title: "Verifiche di Legge", description: "Effettuazione verifiche normative e rilascio certificazioni.", slug: "verifiche-di-legge" },
          { title: "Gestione Emergenze", description: "Interventi rapidi per guasti e situazioni critiche.", slug: "gestione-emergenze" },
          { title: "Diagnosi da Remoto", description: "Diagnosi iniziale per interventi mirati.", slug: "diagnosi-da-remoto" },
          { title: "Ricambi di Qualità", description: "Utilizzo di ricambi certificati per ogni intervento.", slug: "ricambi-di-qualit" },
          { title: "Documentazione", description: "Registro manutenzione e documentazione tecnica.", slug: "documentazione" }
        ]}
        processSteps={[
          { step: 1, title: "Chiamata", description: "Ricezione richiesta e valutazione" },
          { step: 2, title: "Diagnosi", description: "Analisi del problema" },
          { step: 3, title: "Intervento", description: "Riparazione o manutenzione" },
          { step: 4, title: "Verifica", description: "Test funzionamento" },
          { step: 5, title: "Documentazione", description: "Rapporto e certificazioni" }
        ]}
        benefits={[
          "Interventi tempestivi e garantiti",
          "Riduzione dei guasti imprevisti",
          "Sicurezza garantita al 100%",
          "Contratti flessibili su misura",
          "Tecnici sempre disponibili",
          "Documentazione completa"
        ]}
        faq={faqData}
        serviceName="Manutenzione"
      parentSlug="manutenzione" />
    </>
  );
}