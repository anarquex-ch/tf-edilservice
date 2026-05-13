import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceContent from "@/components/ServiceContent";

export const metadata: Metadata = {
  title: "Automazione e Domotica Smart Home | TF Edilservice Sagl",
  description: "Sistemi smart per il controllo di luci, tapparelle e riscaldamento. Smart Home con risparmio energetico e comfort intelligente in Canton Ticino.",
  keywords: "domotica, smart home, automazione domestica, controllo luci, tapparelle, riscaldamento",
  openGraph: {
    title: "Automazione e Domotica Smart Home | TF Edilservice Sagl",
    description: "Sistemi smart per il controllo di luci, tapparelle e riscaldamento. Smart Home con risparmio energetico.",
    url: "https://www.tf-edilservice.ch/servizi/domotica",
    type: "website",
  },
  alternates: { canonical: "https://www.tf-edilservice.ch/servizi/domotica" },
};

const faqData = [
  {
    question: "Cos'è un sistema domotico?",
    answer: "Un sistema domotico è un'infrastruttura tecnologica che permette di automatizzare e controllare a distanza diversi dispositivi domestici come luci, tapparelle, termostati e sistemi di sicurezza. Tutti questi dispositivi comunicano attraverso un sistema centralizzato che può essere gestito tramite pannelli touch, smartphone o assistenti vocali."
  },
  {
    question: "Quanto si risparmia con la domotica?",
    answer: "Un sistema domotico ben configurato può ridurre i consumi energetici del 20-30% attraverso la gestione intelligente di riscaldamento, illuminazione e elettrodomestici. La termoregolazione automatica e lo spegnimento delle luci nei locali non occupati sono solo alcune delle funzionalità che contribuiscono al risparmio."
  },
  {
    question: "La domotica è compatibile con tutti i dispositivi?",
    answer: "I sistemi moderni supportano numerosi protocolli come KNX, Zigbee, Z-Wave e Wi-Fi, garantendo compatibilità con la maggior parte dei dispositivi smart. È importante verificare la compatibilità durante la progettazione per garantire l'interoperabilità tra tutti i componenti del sistema."
  },
  {
    question: "Quali marchi di sistemi domotici utilizzate?",
    answer: "Lavoriamo con i marchi leader del settore come KNX, Loxone, Fibaro, Tuya e Google Home. La scelta del sistema dipende dalle esigenze specifiche del cliente, dal budget e dal livello di automazione desiderato."
  },
  {
    question: "Posso integrare la domotica in una casa già esistente?",
    answer: "Sì, esistono soluzioni wireless che permettono di integrare la domotica in edifici esistenti senza necessità di interventi murari. Per soluzioni più complete è possibile intervenire sull'impianto elettrico durante ristrutturazioni."
  },
  {
    question: "La domotica aumenta il valore di un immobile?",
    answer: "Sì, un immobile dotato di sistema domotico può vedere aumentare il proprio valore del 5-10%. La certificazione energetica migliorata e il comfort abitativo sono elementi sempre più apprezzati nel mercato immobiliare."
  },
  {
    question: "Come funziona il controllo da remoto?",
    answer: "Attraverso un'applicazione dedicata installata sullo smartphone è possibile controllare tutti i dispositivi domotici da qualsiasi luogo. È possibile verificare lo stato di luci, tapparelle, riscaldamento e ricevere notifiche in caso di eventi rilevanti."
  },
  {
    question: "La domotica è difficile da usare?",
    answer: "No, i sistemi moderni sono progettati per essere intuitivi. L'interfaccia può essere personalizzata in base alle esigenze e fornisce controllo semplice anche a persone non tecniche. Offriamo inoltre formazione all'utente finale."
  },
  {
    question: "Quali sono i requisiti per installare un sistema domotico?",
    answer: "I requisiti dipendono dal tipo di sistema scelto. Per i sistemi cablati (KNX) è necessario un impianto elettrico dedicato, mentre per i sistemi wireless basta una rete Wi-Fi stabile. In entrambi i casi è fondamentale una progettazione professionale."
  },
  {
    question: "Offrite assistenza post-installazione?",
    answer: "Sì, forniamo assistenza e manutenzione per tutti i sistemi domotici installati. Offriamo contratti di assistenza che includono aggiornamenti software, modifiche alla configurazione e supporto tecnico remoto."
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Service", "name": "Automazione e Domotica", "description": "Sistemi smart per il controllo di luci, tapparelle e riscaldamento.", "provider": { "@type": "Organization", "name": "TF Edilservice Sagl" }, "areaServed": { "@type": "State", "name": "Canton Ticino" } },
    { "@type": "FAQPage", "mainEntity": faqData.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }
  ]
};

export default function DomoticaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <PageHero iconName="Home" title="Automazione e Domotica" subtitle="Sistemi smart per il controllo di luci, tapparelle e riscaldamento. Smart Home con risparmio energetico e comfort intelligente." breadcrumb={[{ label: "Home", href: "/" }, { label: "Servizi", href: "/servizi" }, { label: "Domotica" }]} imageUrl="/images/servizi/domotica.jpg" keyPoints={[{ text: "Risparmio energetico fino al 30%" }, { text: "Controllo da smartphone ovunque" }, { text: "Integrazione con tutti i dispositivi smart" }, { text: "Sistemi KNX, Zigbee e Wi-Fi" }, { text: "Aumento valore immobile" }]} />
      <ServiceContent definition="La domotica è la disciplina che studia e realizza sistemi automatizzati per la casa intelligente. Un impianto domotico permette di controllare e programmare luci, tapparelle, riscaldamento, climatizzazione e sicurezza attraverso un'unica interfaccia, aumentando comfort, sicurezza ed efficienza energetica. In una casa domotica, tutti gli impianti comunicano tra loro per ottimizzare i consumi e garantire il massimo comfort." targetAudience={[{ title: "Nuove Costruzioni", description: "Integrazione completa dell'impianto domotico in fase di costruzione.", slug: "nuove-costruzioni" }, { title: "Ristrutturazioni", description: "Aggiornamento di immobili esistenti con tecnologie smart.", slug: "ristrutturazioni" }, { title: "Residenze Luxury", description: "Soluzioni avanzate per ville e appartamenti di alta gamma.", slug: "residenze-luxury" }]} features={[{ title: "Controllo Illuminazione", description: "Gestione intelligente dell'illuminazione con dimmerazione, scenari e controllo da smartphone.", slug: "controllo-illuminazione" }, { title: "Automazione Tapparelle", description: "Controllo motorizzato di tapparelle e persiane con programmazione oraria e meteo.", slug: "automazione-tapparelle" }, { title: "Termoregolazione", description: "Gestione intelligente del riscaldamento con termostati programmabili e controllo a distanza.", slug: "termoregolazione" }, { title: "Integrazione Sistemi", description: "Unificazione di tutti gli impianti domestici in un unico sistema di gestione.", slug: "integrazione-sistemi" }, { title: "Controllo Remoto", description: "Controllo e monitoraggio da remoto tramite app dedicata.", slug: "controllo-remoto" }, { title: "Sicurezza", description: "Integrazione con sistemi di allarme e videosorveglianza.", slug: "sicurezza" }, { title: "Scenari Personalizzati", description: "Creazione di scenari automatici per diverse situazioni.", slug: "scenari-personalizzati" }, { title: "Assistenza Vocale", description: "Integrazione con Alexa, Google Assistant e Siri.", slug: "assistenza-vocale" }, { title: "Videosorveglianza", description: "Gestione centralizzata delle telecamere di sicurezza.", slug: "videosorveglianza" }, { title: "Manutenzione", description: "Assistenza e aggiornamenti per tutti i sistemi installati.", slug: "manutenzione" }]} processSteps={[{ step: 1, title: "Consulenza", description: "Analisi delle esigenze" }, { step: 2, title: "Progettazione", description: "Scelta del sistema e progetto" }, { step: 3, title: "Installazione", description: "Posa e configurazione" }, { step: 4, title: "Programmazione", description: "Creazione scenari e automazioni" }, { step: 5, title: "Formazione", description: "Supporto all'utente" }]} benefits={["Risparmio energetico fino al 30%", "Comfort e automazione quotidiana", "Controllo da remoto ovunque", "Aumento valore immobile fino al 10%", "Sicurezza avanzata integrata", "Supporto tecnico continuo"]} faq={faqData} serviceName="Domotica" parentSlug="domotica" />
    </>
  );
}