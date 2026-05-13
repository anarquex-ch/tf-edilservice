import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceContent from "@/components/ServiceContent";

export const metadata: Metadata = {
  title: "Telecomunicazioni e IT | TF Edilservice Sagl",
  description: "Cablaggi strutturati, reti Wi-Fi e sistemi di comunicazione professionali per connettività aziendale e residenziale in Canton Ticino.",
  keywords: "telecomunicazioni, cablaggio strutturato, rete Wi-Fi, IT, networking, Ticino",
  openGraph: {
    title: "Telecomunicazioni e IT | TF Edilservice Sagl",
    description: "Cablaggi strutturati, reti Wi-Fi e sistemi di comunicazione professionali per connettività aziendale e residenziale.",
    url: "https://www.tf-edilservice.ch/servizi/telecomunicazioni-it",
    type: "website",
  },
  alternates: {
    canonical: "https://www.tf-edilservice.ch/servizi/telecomunicazioni-it",
  },
};

const faqData = [
  {
    question: "Che cos'è un cablaggio strutturato?",
    answer: "Il cablaggio strutturato è un sistema di cablaggio standardizzato per reti informatiche e telefoniche che supporta multiple applicazioni e servizi con un'infrastruttura unificata. Utilizza standard internazionali (TIA/EIA-568) che garantiscono compatibilità e interoperabilità tra diversi dispositivi e marchi."
  },
  {
    question: "Quali standard di cablaggio utilizzate?",
    answer: "Utilizziamo standard di cablaggio Cat6 e Cat6a per garantire alte velocità di trasmissione fino a 10 Gbps. Per applicazioni specifiche utilizziamo anche cavi Cat7 con schermatura individuale, ideali per ambienti con interferenze elettromagnetiche."
  },
  {
    question: "Realizzate reti Wi-Fi per aziende?",
    answer: "Sì, progettiamo e installiamo reti Wi-Fi aziendali con copertura completa, sicurezza avanzata e gestione centralizzata. Utilizziamo access point professionali con supporto Wi-Fi 6/6E per garantire alte velocità e capacità di gestione di molti dispositivi contemporaneamente."
  },
  {
    question: "Cos'è il VoIP e quali vantaggi offre?",
    answer: "Il VoIP (Voice over IP) permette di trasmettere traffico telefonico attraverso la rete dati invece delle linee telefoniche tradizionali. I vantaggi includono: riduzione dei costi, flessibilità, integrazione con altri servizi, possibilità di lavorare da remoto e funzionalità avanzate come segreteria telefonica e IVR."
  },
  {
    question: "Come progettate una rete aziendale?",
    answer: "La progettazione inizia con un'analisi delle esigenze del cliente: numero di utenti, applicazioni utilizzate, requisiti di banda e obiettivi di crescita. Successivamente sviluppiamo un progetto dettagliato che include topologia di rete, posizionamento access point, infrastruttura switch e firewall."
  },
  {
    question: "Offrite servizio di manutenzione per reti esistenti?",
    answer: "Sì, forniamo contratti di manutenzione che includono monitoraggio proattivo, interventi programmati e supporto tecnico. Il nostro servizio garantisce la continuità operativa della vostra infrastruttura con tempi di risposta garantiti."
  },
  {
    question: "Che cos'è un data center aziendale?",
    answer: "Un data center aziendale è uno spazio dedicato ospitare server, storage e apparecchiature di rete. Realizziamo armadi rack, sistemi di raffreddamento, alimentazione ridondata e cable management per garantire operatività 24/7 delle vostre applicazioni critiche."
  },
  {
    question: "Quali marchi di apparati di rete utilizzate?",
    answer: "Lavoriamo con i marchi leader del settore come Cisco, Ubiquiti, Aruba e Netgear per le infrastrutture di rete, oltre a produttori specializzati per firewall e sistemi di sicurezza. La scelta dipende dalle esigenze specifiche del progetto e dal budget del cliente."
  },
  {
    question: "Quanto tempo occorre per installare una rete aziendale?",
    answer: "I tempi dipendono dalla complessità e dalla dimensione dell'installazione. Per un piccolo ufficio con 10-20 postazioni occorrono 2-3 giorni, mentre per un'azienda media con 50-100 postazioni i tempi possono variare da 1 a 3 settimane."
  },
  {
    question: "Fornite formazione all'utente finale?",
    answer: "Sì, al termine dell'installazione forniamo formazione all'utente finale per l'utilizzo dei sistemi. Includiamo documentazione tecnica, guide rapide e supporto immediato per qualsiasi dubbio o necessità."
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Telecomunicazioni e IT",
      "description": "Cablaggi strutturati, reti Wi-Fi e sistemi di comunicazione professionali per connettività aziendale e residenziale.",
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
        { "@type": "ListItem", "position": 3, "name": "Telecomunicazioni e IT" }
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

export default function TelecomunicazioniPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <PageHero
        iconName="Wifi"
        title="Telecomunicazioni e IT"
        subtitle="Cablaggi strutturati, reti Wi-Fi e sistemi di comunicazione professionali per aziende e residenze in tutto il Canton Ticino."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Servizi", href: "/servizi" }, { label: "Telecomunicazioni e IT" }]}
        imageUrl="/images/servizi/telecomunicazioni-it.jpg"
        keyPoints={[
          { text: "Cablaggio strutturato Cat6/Cat6a fino a 10 Gbps" },
          { text: "Reti Wi-Fi aziendali con tecnologia Wi-Fi 6/6E" },
          { text: "Sistemi VoIP e centralini telefonici" },
          { text: "Progettazione personalizzata e scalabile" },
          { text: "Manutenzione e supporto tecnico continuo" }
        ]}
      />
      <ServiceContent
        definition="Le telecomunicazioni e i servizi IT comprendono l'infrastruttura di rete che consente la trasmissione di dati, voce e video. Un sistema di cablaggio strutturato professionale garantisce affidabilità, velocità e scalabilità per le esigenze moderne. In un'era dove la connettività è fondamentale per ogni attività, disporre di un'infrastruttura IT performante e affidabile rappresenta un vantaggio competitivo essenziale."
        targetAudience={[
          { title: "Aziende e Uffici", description: "Reti aziendali, Wi-Fi, VoIP e data center per piccole e medie imprese.", slug: "aziende-e-uffici" },
          { title: "Residenze Private", description: "Reti domestiche, Wi-Fi e sistemi multimediali per abitazioni.", slug: "residenze-private" },
          { title: "Attività Commerciali", description: "Connettività per negozi, ristoranti, hotel e locali pubblici.", slug: "attivit-commerciali" }
        ]}
        features={[
          { title: "Cablaggio Strutturato", description: "Installazione di reti cablate Cat6/Cat6a per trasmissione dati ad alta velocità.", slug: "cablaggio-strutturato" },
          { title: "Reti Wi-Fi Aziendali", description: "Progettazione e installazione di reti wireless con copertura completa.", slug: "reti-wi-fi-aziendali" },
          { title: "Sistemi VoIP", description: "Centralini telefonici e sistemi VoIP per comunicazioni aziendali.", slug: "sistemi-voip" },
          { title: "Data Center", description: "Realizzazione di armadi rack e infrastrutture per server.", slug: "data-center" },
          { title: "Firewall e Sicurezza", description: "Sistemi di protezione per la rete aziendale.", slug: "firewall-e-sicurezza" },
          { title: "Switch e Routing", description: "Configurazione di switch gestiti e router professionali.", slug: "switch-e-routing" },
          { title: "Video Sorveglianza IP", description: "Integrazione di sistemi di videosorveglianza sulla rete dati.", slug: "video-sorveglianza-ip" },
          { title: "Manutenzione Reti", description: "Assistenza e manutenzione per infrastrutture IT esistenti.", slug: "manutenzione-reti" },
          { title: "Diagnosi e Troubleshooting", description: "Analisi e risoluzione problemi di rete.", slug: "diagnosi-e-troubleshooting" },
          { title: "Consulenza IT", description: "Consulenza per l'ottimizzazione dell'infrastruttura tecnologica.", slug: "consulenza-it" }
        ]}
        processSteps={[
          { step: 1, title: "Analisi", description: "Sopraluogo e analisi esigenze" },
          { step: 2, title: "Progettazione", description: "Progetto tecnico dettagliato" },
          { step: 3, title: "Installazione", description: "Posa cablaggio e apparati" },
          { step: 4, title: "Configurazione", description: "Setup e testing sistemi" },
          { step: 5, title: "Supporto", description: "Assistenza continua" }
        ]}
        benefits={[
          "Velocità di trasmissione fino a 10 Gbps",
          "Affidabilità e ridondanza dei sistemi",
          "Scalabilità per crescita futura",
          "Supporto tecnico qualificato",
          "Marchi professionali certificati",
          "Certificazione della rete"
        ]}
        faq={faqData}
        serviceName="Telecomunicazioni e IT"
      parentSlug="telecomunicazioni-it" />
    </>
  );
}