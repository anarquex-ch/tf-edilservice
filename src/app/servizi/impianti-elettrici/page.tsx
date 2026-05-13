import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceContent from "@/components/ServiceContent";

export const metadata: Metadata = {
  title: "Impianti Elettrici Civili e Industriali | TF Edilservice Sagl",
  description: "Progettazione, installazione e manutenzione impianti elettrici per stabili civili, industriali e commerciali in Canton Ticino. Certificazioni conformi alle normative vigenti.",
  keywords: "impianti elettrici, elettrico civile, industriale, Ticino, certificazione, progettazione elettrica",
  openGraph: {
    title: "Impianti Elettrici Civili e Industriali | TF Edilservice Sagl",
    description: "Progettazione, installazione e manutenzione impianti elettrici per stabili civili, industriali e commerciali in Canton Ticino.",
    url: "https://www.tf-edilservice.ch/servizi/impianti-elettrici",
    type: "website",
  },
  alternates: {
    canonical: "https://www.tf-edilservice.ch/servizi/impianti-elettrici",
  },
};

const faqData = [
  {
    question: "Quali tipologie di impianti elettrici realizzate?",
    answer: "Realizziamo impianti elettrici per stabili civili (case, appartamenti, ville), industriali (fabbriche, capannoni, laboratori) e commerciali (uffici, negozi, ristoranti). Copriamo l'intera gamma: impianti di distribuzione, quadri elettrici, sistemi di illuminazione, predisposizione domotica e building automation."
  },
  {
    question: "Gli impianti sono certificati e conformi alle normative vigenti?",
    answer: "Sì, tutti i nostri impianti sono realizzati nel rispetto delle normative federali e cantonali vigenti in materia elettrica. L'installazione viene effettuata da elettricisti qualificati e ogni impianto viene certificato secondo le procedure previste dalla normativa svizzera."
  },
  {
    question: "Quanto tempo occorre per realizzare un impianto elettrico?",
    answer: "I tempi di realizzazione dipendono dalla complessità e dalle dimensioni dell'impianto. Per un appartamento standard occorrono generalmente 1-2 settimane, per una villa 2-4 settimane, mentre per un immobile commerciale o industriale i tempi variano in base alla metratura e alla complessità del progetto."
  },
  {
    question: "Offrite servizio di manutenzione sugli impianti esistenti?",
    answer: "Sì, forniamo servizi di manutenzione e assistenza per impianti elettrici esistenti. Offriamo contratti di manutenzione programmata con interventi periodici, oltre al servizio di pronto intervento per emergenze con tempi di risposta rapidi."
  },
  {
    question: "Quali marchi di materiali elettrici utilizzate?",
    answer: "Utilizziamo esclusivamente materiali di alta qualità da fornitori certificati e riconosciuti nel settore. Lavoriamo con marchi leader come ABB, Schneider Electric, Siemens, Legrand e altri brand di primaria importanza, garantendo affidabilità e durata nel tempo."
  },
  {
    question: "Si occupa anche di impianti per nuove costruzioni?",
    answer: "Sì, collaboriamo con architetti, costruttori e imprese edili per la realizzazione di impianti elettrici in nuove costruzioni. Ci occupiamo della progettazione, installazione e collaudo, coordinandoci con le altre maestranze presenti in cantiere."
  },
  {
    question: "Realizzate anche impianti elettrici industriali di grande potenza?",
    answer: "Sì, abbiamo esperienza nella realizzazione di impianti industriali con potenze significative. Gestiamo installazioni per capannoni produttivi, laboratori, centri commerciali e strutture con esigenze di potenza elevate, curando tutti gli aspetti normativi e di sicurezza."
  },
  {
    question: "Come viene effettuata la progettazione dell'impianto?",
    answer: "La progettazione inizia con un sopralluogo per comprendere le esigenze specifiche del cliente. Successivamente sviluppiamo uno schema elettrico dettagliato, dimensioniamo i carichi, scelgo le soluzioni tecniche più appropriate e redigiamo la documentazione tecnica necessaria."
  },
  {
    question: "Fate preventivi gratuiti?",
    answer: "Sì, effettuiamo sopralluoghi e preventivi gratuiti e senza impegno. Dopo aver compreso le vostre esigenze, vi forniamo un preventivo dettagliato che include tutte le lavorazioni, i materiali e i tempi di realizzazione."
  },
  {
    question: "Quali garanzie offrite sugli impianti realizzati?",
    answer: "Tutti i nostri impianti sono coperti da garanzia contrattuale. Inoltre, utilizziamo esclusivamente materiali certificati e ogni impianto viene sottoposto a rigorosi controlli di qualità e test di funzionalità prima della consegna."
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Impianti Elettrici",
      "description": "Progettazione, installazione e manutenzione impianti elettrici per stabili civili, industriali e commerciali in Canton Ticino.",
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
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.tf-edilservice.ch/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Servizi",
          "item": "https://www.tf-edilservice.ch/servizi"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Impianti Elettrici"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqData.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ]
};

export default function ImpiantiElettriciPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageHero
        iconName="Zap"
        title="Impianti Elettrici"
        subtitle="Progettazione, installazione e manutenzione di impianti elettrici per stabili civili, industriali e commerciali in tutto il Canton Ticino."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Servizi", href: "/servizi" }, { label: "Impianti Elettrici" }]}
        imageUrl="/images/servizi/impianti-elettrici.jpg"
        keyPoints={[
          { text: "Certificazione conformi alle normative vigenti in Ticino" },
          { text: "Esperienza in impianti civili, commerciali e industriali" },
          { text: "Materiali di alta qualità da fornitori certificati" },
          { text: "Servizio di manutenzione e pronto intervento" },
          { text: "Progettazione personalizzata secondo le esigenze del cliente" }
        ]}
      />
      <ServiceContent
        definition="Un impianto elettrico è l'insieme dei componenti e delle apparecchiature che consentono la distribuzione e l'utilizzo dell'energia elettrica in un edificio. La progettazione e installazione professionale garantisce sicurezza, efficienza energetica e conformità normativa. In Canton Ticino, tutti gli impianti elettrici devono rispettare le normative federali e cantonali vigenti, inclusa la normativa ElectroSuisse. Un impianto ben progettato e realizzato garantisce la sicurezza degli occupanti, ottimizza i consumi energetici e ha una durata nel tempo superiore."
        targetAudience={[
          {
            title: "Residenziale",
            description: "Case singole, appartamenti, ville e condomini. Realizziamo impianti completi per nuove costruzioni e ristrutturazioni."
          },
          {
            title: "Commerciale",
            description: "Uffici, negozi, ristoranti, hotel e locali pubblici. Soluzioni professionali per attività commerciali di ogni tipo."
          },
          {
            title: "Industriale",
            description: "Fabbriche, capannoni, laboratori e magazzini. Impianti di alta potenza conforme alle normative specifiche."
          }
        ]}
        features={[
          {
            title: "Progettazione Elettrica",
            description: "Studio delle esigenze energetiche dell'edificio con dimensionamento dei carichi e soluzioni tecniche ottimali.",
            slug: "progettazione-elettrica"
          },
          {
            title: "Installazione Certificata",
            description: "Realizzazione di impianti completi con materiali di alta qualità e conformità alle normative vigenti.",
            slug: "installazione-certificata"
          },
          {
            title: "Quadri Elettrici",
            description: "Progettazione e installazione di quadri di distribuzione, automazione e gestione energetica.",
            slug: "quadri-elettrici"
          },
          {
            title: "Illuminazione",
            description: "Sistemi di illuminazione LED, industriale e decorativa con gestione intelligente.",
            slug: "illuminazione"
          },
          {
            title: "Building Automation",
            description: "Integrazione di sistemi di automazione per la gestione centralizzata degli impianti edilizi.",
            slug: "building-automation"
          },
          {
            title: "Impianti di Distribuzione",
            description: "Realizzazione di reti di distribuzione elettrica per ambienti civili e industriali.",
            slug: "impianti-di-distribuzione"
          },
          {
            title: "Sistemi di Emergenza",
            description: "Installazione di gruppi elettrogeni e sistemi di emergenza per garantire continuità operativa.",
            slug: "sistemi-di-emergenza"
          },
          {
            title: "Manutenzione Programmata",
            description: "Contratti di manutenzione periodica per garantire la durata e l'efficienza degli impianti.",
            slug: "manutenzione-programmata"
          },
          {
            title: "Pronto Intervento",
            description: "Servizio di emergenza con tempi di risposta rapidi per guasti e problematiche urgenti.",
            slug: "pronto-intervento"
          },
          {
            title: "Certificazione e Collaudo",
            description: "Verifica e certificazione finale dell'impianto secondo le normative vigenti.",
            slug: "certificazione-e-collaudo"
          }
        ]}
        processSteps={[
          { step: 1, title: "Consulenza", description: "Analisi delle esigenze" },
          { step: 2, title: "Progettazione", description: "Studio tecnico dettagliato" },
          { step: 3, title: "Installazione", description: "Realizzazione impianto" },
          { step: 4, title: "Collaudo", description: "Verifica e certificazione" },
          { step: 5, title: "Assistenza", description: "Manutenzione continua" }
        ]}
        benefits={[
          "Oltre 15 anni di esperienza nel settore",
          "Certificazione conforme alle normative vigenti",
          "Materiali di qualità da fornitori certificati",
          "Preventivi gratuiti e trasparenti",
          "Servizio di manutenzione e pronto intervento",
          "Team di tecnici qualificati e aggiornati"
        ]}
        faq={faqData}
        serviceName="Impianti Elettrici"
        parentSlug="impianti-elettrici"
      />
    </>
  );
}