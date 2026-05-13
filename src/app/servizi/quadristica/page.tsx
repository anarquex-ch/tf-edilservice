import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceContent from "@/components/ServiceContent";

export const metadata: Metadata = {
  title: "Quadristica e Quadri Elettrici in Ticino | TF Edilservice Sagl",
  description: "Progettazione, cablaggio e collaudo di quadri elettrici di distribuzione e automazione. Soluzioni industriali e civili certificate OIBT in Canton Ticino.",
  keywords: "quadri elettrici Ticino, quadristica, cablaggio quadri, quadri di distribuzione, automazione industriale, revamping quadri, certificazione OIBT",
  openGraph: { title: "Quadristica e Quadri Elettrici | TF Edilservice Sagl", description: "Progettazione e cablaggio quadri elettrici certificati.", url: "https://www.tf-edilservice.ch/servizi/quadristica", type: "website" },
  alternates: { canonical: "https://www.tf-edilservice.ch/servizi/quadristica" },
};

const faqData = [
  { question: "Cosa si intende per Quadristica?", answer: "La quadristica è il settore dell'ingegneria elettrica dedicato alla progettazione, assemblaggio, cablaggio e collaudo dei quadri elettrici. Questi rappresentano il 'cervello' e il 'cuore' di ogni impianto, sia esso civile (distribuzione di corrente nelle case) o industriale (controllo macchinari e automazione)." },
  { question: "I vostri quadri rispettano le normative svizzere?", answer: "Sì, in modo categorico. Ogni quadro elettrico che esce dalla nostra officina o che assembliamo in loco rispetta le severe normative NIBT (Norme sugli Impianti a Bassa Tensione) e OIBT. Forniamo tutta la documentazione tecnica, inclusi gli schemi unifilari aggiornati." },
  { question: "Offrite servizi di 'Revamping' (ammodernamento)?", answer: "Certamente. Effettuiamo il revamping di quadri elettrici obsoleti. Manteniamo, ove possibile, l'involucro esterno (carpenteria) e aggiorniamo tutti i componenti interni (interruttori, salvavita, PLC) per adeguarli agli standard di sicurezza e alle tecnologie odierne." },
  { question: "Realizzate quadri per l'automazione industriale?", answer: "Sì, progettiamo e realizziamo quadri di comando e controllo per l'automazione di processi industriali, macchinari, sistemi di ventilazione/riscaldamento (HVAC) e pompe. Integriamo logiche PLC e inverter per il controllo motori." },
  { question: "Lavorate solo su grandi impianti o anche residenziali?", answer: "Operiamo su tutte le scale. Dal piccolo quadro di distribuzione per un appartamento o una villa, al quadro generale di bassa tensione (QGBT) per un condominio o per uno stabilimento industriale. La precisione e la cura del cablaggio rimangono identiche." },
  { question: "Cosa include la documentazione consegnata?", answer: "Consegniamo il quadro accompagnato da un fascicolo tecnico completo che include: schemi elettrici unifilari e multifilari, dichiarazione di conformità, distinte base dei componenti installati e i protocolli dei test di collaudo effettuati." }
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Service", "name": "Quadristica", "description": "Progettazione e assemblaggio di quadri elettrici in Ticino.", "provider": { "@type": "Organization", "name": "TF Edilservice Sagl" }, "areaServed": { "@type": "State", "name": "Canton Ticino" } },
    { "@type": "FAQPage", "mainEntity": faqData.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }
  ]
};

export default function QuadristicaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <PageHero 
        iconName="Cpu" 
        title="Quadristica" 
        subtitle="Il cuore e il cervello di ogni impianto. Progettazione, assemblaggio e cablaggio di quadri elettrici di distribuzione e automazione con standard di precisione svizzeri." 
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Servizi", href: "/servizi" }, { label: "Quadristica" }]} 
        imageUrl="/images/servizi/quadristica.jpg" 
        keyPoints={[
          { text: "Quadri generali di distribuzione per civili e industriali" },
          { text: "Quadri di automazione con integrazione PLC" },
          { text: "Revamping e ammodernamento di quadri esistenti" },
          { text: "Test e collaudi rigorosi prima della messa in opera" },
          { text: "Fornitura di schemi elettrici e certificazioni OIBT" }
        ]} 
      />
      <ServiceContent 
        definition="Un quadro elettrico cablato a regola d'arte è garanzia di un impianto sicuro, duraturo e facilmente manutenibile. In TF Edilservice uniamo l'alta ingegneria alla manualità artigianale di precisione per realizzare quadri elettrici su misura. Che si tratti del centro di smistamento energetico per un complesso residenziale o del quadro di comando per macchinari industriali complessi, curiamo ogni dettaglio: dal dimensionamento termico fino all'etichettatura perfetta di ogni singolo filo." 
        targetAudience={[
          { title: "Industria e Artigianato", description: "Quadri di automazione e comando per macchinari, capannoni e processi produttivi.", slug: "quadri-automazione-industriale" },
          { title: "Infrastrutture Residenziali", description: "Quadri di distribuzione principali (QGBT) per condomini e abitazioni.", slug: "quadri-distribuzione-civile" },
          { title: "Integrazioni Speciali", description: "Quadri dedicati per server farm, pompe di calore, domotica (KNX) e fotovoltaico.", slug: "quadri-tecnologici-speciali" }
        ]} 
        features={[
          { title: "Assemblaggio Certificato", description: "Utilizzo di componentistica premium (ABB, Hager, Schneider).", slug: "componentistica-elettrica-premium" },
          { title: "Schemi Unifilari", description: "Progettazione CAD per fornire documentazione chiara e aggiornabile.", slug: "progettazione-schemi-elettrici" },
          { title: "Revamping", description: "Messa a norma di vecchi impianti sostituendo il solo 'cuore' tecnologico.", slug: "revamping-quadri-obsoleti" },
          { title: "Prove e Collaudi", description: "Test di isolamento, continuità e riscaldamento pre-consegna.", slug: "collaudo-sicurezza-quadri" },
          { title: "Etichettatura Chiara", description: "Marcatura inequivocabile di cavi e morsettiere per facilitare interventi futuri.", slug: "cablaggi-strutturati-ordinati" }
        ]} 
        processSteps={[
          { step: 1, title: "Studio delle Esigenze", description: "Analisi dei carichi, della potenza richiesta e degli spazi" },
          { step: 2, title: "Progettazione CAD", description: "Sviluppo schemi unifilari e multifilari, calcolo sezioni e protezioni" },
          { step: 3, title: "Assemblaggio e Cablaggio", description: "Costruzione del quadro in officina con massima precisione" },
          { step: 4, title: "Collaudo a Banco", description: "Test strumentali severi per garantire la perfetta funzionalità" },
          { step: 5, title: "Installazione e RaSi", description: "Posa in opera, allacciamento all'impianto e rilascio certificato OIBT" }
        ]} 
        benefits={[
          "Massima affidabilità operativa e prevenzione guasti",
          "Sicurezza totale contro sovraccarichi e cortocircuiti",
          "Interventi di manutenzione futura più rapidi grazie all'ordine dei cablaggi",
          "Pieno rispetto delle normative antincendio e di sicurezza svizzere",
          "Integrazione perfetta con sistemi domotici o di automazione",
          "Documentazione tecnica chiara e sempre a disposizione"
        ]} 
        faq={faqData} 
        serviceName="Quadristica" 
        parentSlug="quadristica" 
      />
    </>
  );
}
