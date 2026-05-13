export interface SubServiceData {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  keyPoints: { text: string }[];
  processSteps?: { step: number; title: string; description: string }[];
  benefits?: string[];
  faq?: { question: string; answer: string }[];
}

export const subServicesData: Record<string, Record<string, SubServiceData>> = {
  "impianti-elettrici": {
    "progettazione-elettrica": {
      title: "Progettazione Elettrica",
      subtitle: "Studio e dimensionamento di impianti civili e industriali.",
      description: "La progettazione elettrica è il primo passo fondamentale per la realizzazione di un impianto sicuro ed efficiente. Analizziamo le vostre esigenze per dimensionare correttamente i carichi e scegliere le soluzioni tecniche ottimali.",
      imageUrl: "/images/servizi/impianti-elettrici.jpg",
      keyPoints: [
        { text: "Studio di fattibilità" },
        { text: "Dimensionamento dei carichi elettrici" },
        { text: "Scelta dei materiali" },
        { text: "Elaborazione schemi elettrici" }
      ]
    },
    "installazione-certificata": {
      title: "Installazione Certificata",
      subtitle: "Impianti elettrici realizzati a regola d'arte e conformi alle norme in Ticino.",
      description: "Realizziamo impianti elettrici completi per abitazioni e aziende. Ogni nostro impianto è installato da personale qualificato, utilizzando esclusivamente materiali certificati e garantendo il rispetto di tutte le normative svizzere ed europee (ElectroSuisse). Al termine dei lavori rilasciamo la dichiarazione di conformità.",
      imageUrl: "/images/servizi/impianti-elettrici.jpg",
      keyPoints: [
        { text: "Materiali certificati di prima scelta" },
        { text: "Posa cavi e canalizzazioni a norma" },
        { text: "Rispetto dei protocolli di sicurezza" },
        { text: "Rilascio certificazione di conformità RaSi" }
      ],
      processSteps: [
        { step: 1, title: "Sopralluogo", description: "Analisi degli spazi e rilievo misure" },
        { step: 2, title: "Tracciamento", description: "Definizione percorsi canalizzazioni" },
        { step: 3, title: "Posa", description: "Installazione cavi e componenti" },
        { step: 4, title: "Collaudo", description: "Verifica e certificazione impianto" }
      ],
      benefits: [
        "Sicurezza totale per gli occupanti",
        "Conformità garantita per le assicurazioni",
        "Efficienza energetica ottimizzata",
        "Documentazione completa rilasciata a fine lavori"
      ]
    },
    "quadri-elettrici": {
      title: "Quadri Elettrici",
      subtitle: "Progettazione, cablaggio e installazione di quadri di distribuzione.",
      description: "Il quadro elettrico è il cuore di ogni impianto. Ci occupiamo dell'assemblaggio, cablaggio e installazione di quadri di distribuzione principale e secondaria, quadri di automazione e sistemi di comando per ogni esigenza civile e industriale.",
      imageUrl: "/images/servizi/impianti-elettrici.jpg",
      keyPoints: [
        { text: "Quadri civili salvavita" },
        { text: "Quadri industriali di potenza" },
        { text: "Quadri di automazione" },
        { text: "Certificazione e collaudo finale" }
      ]
    },
    "illuminazione": {
      title: "Sistemi di Illuminazione",
      subtitle: "Progettazione e installazione di illuminazione LED e architetturale.",
      description: "Un'illuminazione corretta migliora il comfort visivo e riduce i consumi. Installiamo sistemi di illuminazione LED avanzati per interni ed esterni, studiando la luce in modo funzionale e scenografico per case, uffici e capannoni industriali.",
      imageUrl: "/images/servizi/impianti-elettrici.jpg",
      keyPoints: [
        { text: "Illuminazione LED ad alta efficienza" },
        { text: "Illuminazione architetturale" },
        { text: "Illuminazione industriale e di emergenza" },
        { text: "Gestione smart e relè crepuscolari" }
      ]
    },
    "building-automation": {
      title: "Building Automation",
      subtitle: "Integrazione e automazione degli impianti tecnologici.",
      description: "Ottimizziamo la gestione del tuo edificio integrando tutti i sistemi (elettrico, termico, illuminazione, sicurezza) in un'unica piattaforma automatizzata. Ideale per grandi strutture commerciali e industriali per massimizzare il risparmio energetico.",
      imageUrl: "/images/servizi/impianti-elettrici.jpg",
      keyPoints: [
        { text: "Sistemi BMS (Building Management System)" },
        { text: "Monitoraggio energetico in tempo reale" },
        { text: "Controllo centralizzato" },
        { text: "Ottimizzazione dei consumi" }
      ]
    },
    "impianti-di-distribuzione": {
      title: "Impianti di Distribuzione",
      subtitle: "Reti elettriche di distribuzione per ambienti civili e industriali.",
      description: "Realizziamo infrastrutture per la distribuzione dell'energia elettrica dal punto di fornitura fino ai singoli utilizzatori, garantendo reti bilanciate, sicure e con adeguate protezioni differenziali e magnetotermiche.",
      imageUrl: "/images/servizi/impianti-elettrici.jpg",
      keyPoints: [
        { text: "Linee di alimentazione principali" },
        { text: "Canalizzazioni industriali" },
        { text: "Distribuzione forza motrice" },
        { text: "Rifasamento impianti" }
      ]
    },
    "sistemi-di-emergenza": {
      title: "Sistemi di Emergenza",
      subtitle: "Gruppi elettrogeni e UPS per continuità operativa.",
      description: "Previeni i blackout. Installiamo gruppi di continuità (UPS) e gruppi elettrogeni per mantenere attivi i sistemi critici della tua azienda o abitazione in caso di interruzione dell'energia dalla rete pubblica.",
      imageUrl: "/images/servizi/impianti-elettrici.jpg",
      keyPoints: [
        { text: "Gruppi di continuità (UPS)" },
        { text: "Gruppi elettrogeni diesel/gas" },
        { text: "Quadri di commutazione automatica" },
        { text: "Illuminazione di emergenza" }
      ]
    },
    "manutenzione-programmata": {
      title: "Manutenzione Programmata",
      subtitle: "Contratti di assistenza e controllo periodico degli impianti.",
      description: "Manteniamo efficienti e sicuri i tuoi impianti nel tempo. Offriamo contratti di manutenzione preventiva per individuare e risolvere potenziali guasti prima che causino fermi macchina o rischi per la sicurezza.",
      imageUrl: "/images/servizi/impianti-elettrici.jpg",
      keyPoints: [
        { text: "Verifiche termografiche" },
        { text: "Test differenziali e terre" },
        { text: "Sostituzione componenti usurati" },
        { text: "Report di manutenzione dettagliati" }
      ]
    },
    "pronto-intervento": {
      title: "Pronto Intervento",
      subtitle: "Servizio di emergenza elettrica rapido ed efficiente in Ticino.",
      description: "In caso di guasto elettrico improvviso o cortocircuito, interveniamo rapidamente per ripristinare la sicurezza e la funzionalità del tuo impianto. I nostri tecnici sono equipaggiati per risolvere le emergenze nel minor tempo possibile.",
      imageUrl: "/images/servizi/impianti-elettrici.jpg",
      keyPoints: [
        { text: "Intervento rapido in tutto il Ticino" },
        { text: "Ricerca guasti strumentale" },
        { text: "Ripristino temporaneo o definitivo" },
        { text: "Messa in sicurezza immediata" }
      ]
    },
    "certificazione-e-collaudo": {
      title: "Certificazione e Collaudo",
      subtitle: "Verifiche normative e rilascio dichiarazioni di conformità RaSi.",
      description: "I nostri ispettori e tecnici eseguono tutti i collaudi necessari per certificare che l'impianto sia a norma secondo le direttive federali svizzere. Redigiamo il rapporto di sicurezza (RaSi) richiesto dai distributori di energia e dalle assicurazioni.",
      imageUrl: "/images/servizi/impianti-elettrici.jpg",
      keyPoints: [
        { text: "Rapporti di Sicurezza (RaSi)" },
        { text: "Controlli periodici obbligatori" },
        { text: "Perizie tecniche" },
        { text: "Verifica messa a terra" }
      ]
    }
  },

  "domotica": {
    "nuove-costruzioni": {
      title: "Nuove Costruzioni",
      subtitle: "Integrazione completa dell'impianto domotico in fase di costruzione.",
      description: "Integrazione completa dell'impianto domotico in fase di costruzione. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/domotica.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "ristrutturazioni": {
      title: "Ristrutturazioni",
      subtitle: "Aggiornamento di immobili esistenti con tecnologie smart.",
      description: "Aggiornamento di immobili esistenti con tecnologie smart. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/domotica.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "residenze-luxury": {
      title: "Residenze Luxury",
      subtitle: "Soluzioni avanzate per ville e appartamenti di alta gamma.",
      description: "Soluzioni avanzate per ville e appartamenti di alta gamma. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/domotica.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "controllo-illuminazione": {
      title: "Controllo Illuminazione",
      subtitle: "Gestione intelligente dell'illuminazione con dimmerazione, scenari e controllo da smartphone.",
      description: "Gestione intelligente dell'illuminazione con dimmerazione, scenari e controllo da smartphone. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/domotica.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "automazione-tapparelle": {
      title: "Automazione Tapparelle",
      subtitle: "Controllo motorizzato di tapparelle e persiane con programmazione oraria e meteo.",
      description: "Controllo motorizzato di tapparelle e persiane con programmazione oraria e meteo. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/domotica.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "termoregolazione": {
      title: "Termoregolazione",
      subtitle: "Gestione intelligente del riscaldamento con termostati programmabili e controllo a distanza.",
      description: "Gestione intelligente del riscaldamento con termostati programmabili e controllo a distanza. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/domotica.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "integrazione-sistemi": {
      title: "Integrazione Sistemi",
      subtitle: "Unificazione di tutti gli impianti domestici in un unico sistema di gestione.",
      description: "Unificazione di tutti gli impianti domestici in un unico sistema di gestione. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/domotica.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "controllo-remoto": {
      title: "Controllo Remoto",
      subtitle: "Controllo e monitoraggio da remoto tramite app dedicata.",
      description: "Controllo e monitoraggio da remoto tramite app dedicata. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/domotica.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "sicurezza": {
      title: "Sicurezza",
      subtitle: "Integrazione con sistemi di allarme e videosorveglianza.",
      description: "Integrazione con sistemi di allarme e videosorveglianza. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/domotica.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "scenari-personalizzati": {
      title: "Scenari Personalizzati",
      subtitle: "Creazione di scenari automatici per diverse situazioni.",
      description: "Creazione di scenari automatici per diverse situazioni. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/domotica.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "assistenza-vocale": {
      title: "Assistenza Vocale",
      subtitle: "Integrazione con Alexa, Google Assistant e Siri.",
      description: "Integrazione con Alexa, Google Assistant e Siri. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/domotica.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "videosorveglianza": {
      title: "Videosorveglianza",
      subtitle: "Gestione centralizzata delle telecamere di sicurezza.",
      description: "Gestione centralizzata delle telecamere di sicurezza. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/domotica.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "manutenzione": {
      title: "Manutenzione",
      subtitle: "Assistenza e aggiornamenti per tutti i sistemi installati.",
      description: "Assistenza e aggiornamenti per tutti i sistemi installati. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/domotica.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
  },
  "energie-rinnovabili": {
    "residenziale": {
      title: "Residenziale",
      subtitle: "Case e appartamenti. Risparmio energetico e indipendenza.",
      description: "Case e appartamenti. Risparmio energetico e indipendenza. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/energie-rinnovabili.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "commerciale": {
      title: "Commerciale",
      subtitle: "Aziende e uffici. Energie verdi e immagine sostenibile.",
      description: "Aziende e uffici. Energie verdi e immagine sostenibile. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/energie-rinnovabili.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "condomini": {
      title: "Condomini",
      subtitle: "Condomini condivisi. Gestione intelligente e costi ridotti.",
      description: "Condomini condivisi. Gestione intelligente e costi ridotti. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/energie-rinnovabili.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "impianti-fotovoltaici": {
      title: "Impianti Fotovoltaici",
      subtitle: "Progettazione e installazione di impianti solari per produzione di energia elettrica.",
      description: "Progettazione e installazione di impianti solari per produzione di energia elettrica. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/energie-rinnovabili.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "accumulo-energia": {
      title: "Accumulo Energia",
      subtitle: "Sistemi di accumulo con batterie per massimizzare l'autoconsumo.",
      description: "Sistemi di accumulo con batterie per massimizzare l'autoconsumo. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/energie-rinnovabili.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "colonnine-ricarica": {
      title: "Colonnine Ricarica",
      subtitle: "Installazione stazioni di ricarica per veicoli elettrici, domestiche e aziendali.",
      description: "Installazione stazioni di ricarica per veicoli elettrici, domestiche e aziendali. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/energie-rinnovabili.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "efficientamento-energetico": {
      title: "Efficientamento Energetico",
      subtitle: "Consulenza per la riduzione dei consumi e ottimizzazione energetica.",
      description: "Consulenza per la riduzione dei consumi e ottimizzazione energetica. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/energie-rinnovabili.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "pratiche-incentivi": {
      title: "Pratiche Incentivi",
      subtitle: "Assistenza nella richiesta di incentivi cantonali e federali.",
      description: "Assistenza nella richiesta di incentivi cantonali e federali. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/energie-rinnovabili.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "monitoraggio": {
      title: "Monitoraggio",
      subtitle: "Sistemi di monitoraggio remoto delle performance dell'impianto.",
      description: "Sistemi di monitoraggio remoto delle performance dell'impianto. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/energie-rinnovabili.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "manutenzione": {
      title: "Manutenzione",
      subtitle: "Servizi di pulizia e manutenzione per massimizzare la resa.",
      description: "Servizi di pulizia e manutenzione per massimizzare la resa. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/energie-rinnovabili.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "inverter-e-optimizer": {
      title: "Inverter e Optimizer",
      subtitle: "Installazione di inverter di ultima generazione e optimizer.",
      description: "Installazione di inverter di ultima generazione e optimizer. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/energie-rinnovabili.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "tetti-solari": {
      title: "Tetti Solari",
      subtitle: "Integrazione architettonica con tetti solari innovativi.",
      description: "Integrazione architettonica con tetti solari innovativi. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/energie-rinnovabili.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "consulenza-energetica": {
      title: "Consulenza Energetica",
      subtitle: "Analisi dei consumi e studio di fattibilità personalizzato.",
      description: "Analisi dei consumi e studio di fattibilità personalizzato. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/energie-rinnovabili.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
  },
  "manutenzione": {
    "condomini": {
      title: "Condomini",
      subtitle: "Manutenzione degli impianti comuni e parti comuni.",
      description: "Manutenzione degli impianti comuni e parti comuni. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/manutenzione.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "aziende": {
      title: "Aziende",
      subtitle: "Manutenzione di impianti commerciali e industriali.",
      description: "Manutenzione di impianti commerciali e industriali. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/manutenzione.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "proprietari": {
      title: "Proprietari",
      subtitle: "Assistenza per case e appartamenti privati.",
      description: "Assistenza per case e appartamenti privati. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/manutenzione.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "pronto-intervento": {
      title: "Pronto Intervento",
      subtitle: "Servizio di emergenza elettrica con tempi di risposta rapidi.",
      description: "Servizio di emergenza elettrica con tempi di risposta rapidi. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/manutenzione.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "riparazioni-elettriche": {
      title: "Riparazioni Elettriche",
      subtitle: "Interventi su quadri, impianti, interruttori e componenti elettrici.",
      description: "Interventi su quadri, impianti, interruttori e componenti elettrici. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/manutenzione.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "manutenzione-programmata": {
      title: "Manutenzione Programmata",
      subtitle: "Contratti di manutenzione periodica per impianti civili e industriali.",
      description: "Contratti di manutenzione periodica per impianti civili e industriali. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/manutenzione.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "verifiche-e-controlli": {
      title: "Verifiche e Controlli",
      subtitle: "Verifiche periodiche degli impianti secondo normativa vigente.",
      description: "Verifiche periodiche degli impianti secondo normativa vigente. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/manutenzione.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "sostituzione-componenti": {
      title: "Sostituzione Componenti",
      subtitle: "Sostituzione di componenti obsoleti con soluzioni moderne.",
      description: "Sostituzione di componenti obsoleti con soluzioni moderne. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/manutenzione.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "verifiche-di-legge": {
      title: "Verifiche di Legge",
      subtitle: "Effettuazione verifiche normative e rilascio certificazioni.",
      description: "Effettuazione verifiche normative e rilascio certificazioni. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/manutenzione.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "gestione-emergenze": {
      title: "Gestione Emergenze",
      subtitle: "Interventi rapidi per guasti e situazioni critiche.",
      description: "Interventi rapidi per guasti e situazioni critiche. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/manutenzione.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "diagnosi-da-remoto": {
      title: "Diagnosi da Remoto",
      subtitle: "Diagnosi iniziale per interventi mirati.",
      description: "Diagnosi iniziale per interventi mirati. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/manutenzione.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "ricambi-di-qualit": {
      title: "Ricambi di Qualità",
      subtitle: "Utilizzo di ricambi certificati per ogni intervento.",
      description: "Utilizzo di ricambi certificati per ogni intervento. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/manutenzione.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "documentazione": {
      title: "Documentazione",
      subtitle: "Registro manutenzione e documentazione tecnica.",
      description: "Registro manutenzione e documentazione tecnica. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/manutenzione.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
  },
  "opere-edili": {
    "raggruppamento-consumo-proprio": {
      title: "RCP - Autoconsumo",
      subtitle: "Raggruppamento ai fini del Consumo Proprio (ZEV).",
      description: "Implementiamo la configurazione tecnica e legale per i Raggruppamenti ai fini del Consumo Proprio (RCP). Secondo la normativa svizzera, questo permette a proprietari e inquilini di consumare l'energia prodotta in loco (fotovoltaico), riducendo drasticamente i costi di rete e aumentando la redditività dell'impianto.",
      imageUrl: "/images/servizi/opere-edili.jpg",
      keyPoints: [
        { text: "Configurazione contatori privati" },
        { text: "Gestione flussi energetici interni" },
        { text: "Conformità ordinanza sull'energia (OEn)" },
        { text: "Ottimizzazione della quota di autoconsumo" }
      ],
      benefits: [
        "Riduzione dei costi dell'energia per gli inquilini",
        "Aumento del valore dell'immobile",
        "Ammortamento rapido dell'impianto fotovoltaico",
        "Indipendenza parziale dai prezzi di mercato"
      ]
    },
    "comunita-elettriche-locali": {
      title: "Comunità Elettriche (CEL)",
      subtitle: "Sistemi di condivisione dell'energia secondo il nuovo Mantelerlass.",
      description: "Con l'entrata in vigore del 'Mantelerlass' (Legge federale per un approvvigionamento elettrico sicuro), supportiamo la creazione di Comunità Elettriche Locali. Queste permettono lo scambio di energia tra vicini utilizzando la rete pubblica con tariffe di utilizzo ridotte.",
      imageUrl: "/images/servizi/opere-edili.jpg",
      keyPoints: [
        { text: "Analisi di fattibilità per quartieri" },
        { text: "Interfacciamento con il distributore locale" },
        { text: "Sistemi di monitoraggio e fatturazione" },
        { text: "Integrazione con reti intelligenti (Smart Grid)" }
      ]
    },
    "opere-murarie-tecniche": {
      title: "Opere Murarie Tecniche",
      subtitle: "Interventi edili specializzati esclusivamente per il supporto agli impianti.",
      description: "Non siamo un'impresa di costruzione generale, ma specialisti in opere edili funzionali all'impiantistica. Realizziamo tracce, carotaggi certificati, fori passanti e ripristini tecnici necessari per l'installazione di nuovi sistemi elettrici, domotici o di sicurezza senza compromettere la struttura.",
      imageUrl: "/images/servizi/opere-edili.jpg",
      keyPoints: [
        { text: "Carotaggi tecnici di precisione" },
        { text: "Posa di canalizzazioni interrate" },
        { text: "Sottofondi per locali tecnici" },
        { text: "Ripristini con materiali certificati" }
      ]
    },
    "integrazione-architettonica": {
      title: "Integrazione Sistemi",
      subtitle: "Fusione tra estetica edilizia e tecnologia impiantistica.",
      description: "Ci occupiamo di integrare i sistemi tecnologici (fotovoltaico, sensori, automazioni) nell'architettura dell'edificio. Dalla posa di moduli fotovoltaici integrati nel tetto (BIPV) all'installazione invisibile di componenti domotici, garantiamo che la tecnologia migliori l'edificio senza deturparlo.",
      imageUrl: "/images/servizi/opere-edili.jpg",
      keyPoints: [
        { text: "Moduli fotovoltaici a integrazione totale" },
        { text: "Posa estetica di infrastrutture IT" },
        { text: "Schermature per apparati tecnologici" },
        { text: "Soluzioni custom per stabili storici" }
      ]
    },
    "efficientamento-edile-elettrico": {
      title: "Efficientamento Tecnico",
      subtitle: "Ottimizzazione combinata dell'involucro e dei sistemi elettrici.",
      description: "Analizziamo l'edificio come un sistema unico. Proponiamo interventi mirati che combinano opere edili leggere per l'isolamento con l'ottimizzazione degli impianti elettrici e termici, puntando alla classe energetica A secondo gli standard svizzeri.",
      imageUrl: "/images/servizi/opere-edili.jpg",
      keyPoints: [
        { text: "Audit energetico professionale" },
        { text: "Integrazione termopompe e fotovoltaico" },
        { text: "Automazione carichi energetici" },
        { text: "Supporto per incentivi cantonali" }
      ]
    }
  },
  "sicurezza": {
    "residenziale": {
      title: "Residenziale",
      subtitle: "Case, ville e appartamenti. Protezione completa per la vostra famiglia.",
      description: "Case, ville e appartamenti. Protezione completa per la vostra famiglia. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/sicurezza.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "commerciale": {
      title: "Commerciale",
      subtitle: "Uffici, negozi e attività. Sicurezza per i vostri beni e dipendenti.",
      description: "Uffici, negozi e attività. Sicurezza per i vostri beni e dipendenti. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/sicurezza.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "industriale": {
      title: "Industriale",
      subtitle: "Fabbriche e capannoni. Sistemi avanzati per ambienti di produzione.",
      description: "Fabbriche e capannoni. Sistemi avanzati per ambienti di produzione. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/sicurezza.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "impianti-d-allarme": {
      title: "Impianti d'Allarme",
      subtitle: "Sistemi antifurto perimetrali e volumetrici con sensori di movimento e contatti magnetici.",
      description: "Sistemi antifurto perimetrali e volumetrici con sensori di movimento e contatti magnetici. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/sicurezza.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "videosorveglianza-cctv": {
      title: "Videosorveglianza CCTV",
      subtitle: "Telecamere IP e analogiche con registrazione e monitoraggio da remoto.",
      description: "Telecamere IP e analogiche con registrazione e monitoraggio da remoto. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/sicurezza.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "rilevazione-incendi": {
      title: "Rilevazione Incendi",
      subtitle: "Rilevatori di fumo e sistemi di allarme antincendio conformi alle normative.",
      description: "Rilevatori di fumo e sistemi di allarme antincendio conformi alle normative. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/sicurezza.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "controllo-accessi": {
      title: "Controllo Accessi",
      subtitle: "Sistemi di badge e controllo accessi per edifici commerciali e condomini.",
      description: "Sistemi di badge e controllo accessi per edifici commerciali e condomini. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/sicurezza.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "monitoraggio-24-7": {
      title: "Monitoraggio 24/7",
      subtitle: "Collegamento a istituti di vigilanza per monitoraggio continuo.",
      description: "Collegamento a istituti di vigilanza per monitoraggio continuo. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/sicurezza.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "sistemi-perimetrali": {
      title: "Sistemi Perimetrali",
      subtitle: "Protezione del perimetro con barriere infrarossi e sensori.",
      description: "Protezione del perimetro con barriere infrarossi e sensori. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/sicurezza.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "domotica-sicura": {
      title: "Domotica Sicura",
      subtitle: "Integrazione con sistemi domotici per automazioni di sicurezza.",
      description: "Integrazione con sistemi domotici per automazioni di sicurezza. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/sicurezza.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "manutenzione": {
      title: "Manutenzione",
      subtitle: "Contratti di manutenzione e assistenza per tutti i sistemi.",
      description: "Contratti di manutenzione e assistenza per tutti i sistemi. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/sicurezza.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "installazione-certificata": {
      title: "Installazione Certificata",
      subtitle: "Tecnici qualificati con certificazioni di settore.",
      description: "Tecnici qualificati con certificazioni di settore. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/sicurezza.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "supporto-24h": {
      title: "Supporto 24h",
      subtitle: "Assistenza tecnica disponibile 24 ore su 24 per emergenze.",
      description: "Assistenza tecnica disponibile 24 ore su 24 per emergenze. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/sicurezza.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
  },
  "telecomunicazioni-it": {
    "aziende-e-uffici": {
      title: "Aziende e Uffici",
      subtitle: "Reti aziendali, Wi-Fi, VoIP e data center per piccole e medie imprese.",
      description: "Reti aziendali, Wi-Fi, VoIP e data center per piccole e medie imprese. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/telecomunicazioni.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "residenze-private": {
      title: "Residenze Private",
      subtitle: "Reti domestiche, Wi-Fi e sistemi multimediali per abitazioni.",
      description: "Reti domestiche, Wi-Fi e sistemi multimediali per abitazioni. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/telecomunicazioni.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "attivit-commerciali": {
      title: "Attività Commerciali",
      subtitle: "Connettività per negozi, ristoranti, hotel e locali pubblici.",
      description: "Connettività per negozi, ristoranti, hotel e locali pubblici. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/telecomunicazioni.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "cablaggio-strutturato": {
      title: "Cablaggio Strutturato",
      subtitle: "Installazione di reti cablate Cat6/Cat6a per trasmissione dati ad alta velocità.",
      description: "Installazione di reti cablate Cat6/Cat6a per trasmissione dati ad alta velocità. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/telecomunicazioni.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "reti-wi-fi-aziendali": {
      title: "Reti Wi-Fi Aziendali",
      subtitle: "Progettazione e installazione di reti wireless con copertura completa.",
      description: "Progettazione e installazione di reti wireless con copertura completa. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/telecomunicazioni.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "sistemi-voip": {
      title: "Sistemi VoIP",
      subtitle: "Centralini telefonici e sistemi VoIP per comunicazioni aziendali.",
      description: "Centralini telefonici e sistemi VoIP per comunicazioni aziendali. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/telecomunicazioni.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "data-center": {
      title: "Data Center",
      subtitle: "Realizzazione di armadi rack e infrastrutture per server.",
      description: "Realizzazione di armadi rack e infrastrutture per server. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/telecomunicazioni.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "firewall-e-sicurezza": {
      title: "Firewall e Sicurezza",
      subtitle: "Sistemi di protezione per la rete aziendale.",
      description: "Sistemi di protezione per la rete aziendale. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/telecomunicazioni.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "switch-e-routing": {
      title: "Switch e Routing",
      subtitle: "Configurazione di switch gestiti e router professionali.",
      description: "Configurazione di switch gestiti e router professionali. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/telecomunicazioni.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "video-sorveglianza-ip": {
      title: "Video Sorveglianza IP",
      subtitle: "Integrazione di sistemi di videosorveglianza sulla rete dati.",
      description: "Integrazione di sistemi di videosorveglianza sulla rete dati. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/telecomunicazioni.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "manutenzione-reti": {
      title: "Manutenzione Reti",
      subtitle: "Assistenza e manutenzione per infrastrutture IT esistenti.",
      description: "Assistenza e manutenzione per infrastrutture IT esistenti. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/telecomunicazioni.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "diagnosi-e-troubleshooting": {
      title: "Diagnosi e Troubleshooting",
      subtitle: "Analisi e risoluzione problemi di rete.",
      description: "Analisi e risoluzione problemi di rete. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/telecomunicazioni.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
    "consulenza-it": {
      title: "Consulenza IT",
      subtitle: "Consulenza per l'ottimizzazione dell'infrastruttura tecnologica.",
      description: "Consulenza per l'ottimizzazione dell'infrastruttura tecnologica. Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",
      imageUrl: "/images/servizi/telecomunicazioni.jpg",
      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]
    },
  },
  "elettromobilita": {
    "installazione-wallbox-domestiche": {
      title: "Installazione Wallbox Domestiche",
      subtitle: "Wallbox compatte ed eleganti per ricaricare l'auto di notte in modo sicuro.",
      description: "Soluzioni di ricarica domestica per auto elettriche. Installiamo wallbox compatte e performanti per ricaricare la tua vettura comodamente nel garage di casa, garantendo la massima sicurezza e affidabilità.",
      imageUrl: "/images/servizi/elettromobilita.jpg",
      keyPoints: [{ text: "Soluzioni a norma OIBT" }, { text: "Ricarica sicura notturna" }, { text: "Consulenza sulla potenza" }, { text: "Assistenza dedicata" }]
    },
    "sistemi-ricarica-condominiali": {
      title: "Sistemi Ricarica Condominiali",
      subtitle: "Reti di ricarica con fatturazione individuale per i residenti.",
      description: "Sviluppiamo reti di ricarica per parcheggi condominiali, integrando sistemi intelligenti (incluso RCP) che permettono di misurare e ripartire i costi dell'energia ricaricata singolarmente per ogni inquilino.",
      imageUrl: "/images/servizi/elettromobilita.jpg",
      keyPoints: [{ text: "Fatturazione automatica" }, { text: "Load balancing condiviso" }, { text: "Equità nei consumi" }, { text: "Integrazione con RCP" }]
    },
    "infrastrutture-ricarica-aziendali": {
      title: "Infrastrutture Ricarica Aziendali",
      subtitle: "Stazioni multiple per dipendenti e clienti con gestione remota via cloud.",
      description: "Progettazione e posa di colonnine multiple per flotte aziendali, dipendenti o clienti. Sistemi monitorabili in cloud per garantire il controllo sugli accessi e ottimizzare i consumi dell'azienda.",
      imageUrl: "/images/servizi/elettromobilita.jpg",
      keyPoints: [{ text: "Controllo accessi e RFID" }, { text: "Gestione flotte online" }, { text: "Sistemi scalabili" }, { text: "Servizio di alta qualità" }]
    },
    "load-balancing-dinamico": {
      title: "Load Balancing Dinamico",
      subtitle: "Regolazione automatica della potenza per evitare blackout.",
      description: "Installiamo sistemi di gestione del carico (Load Balancing) che monitorano il consumo della rete in tempo reale, regolando la potenza erogata alla vettura per non far scattare il salvavita della struttura.",
      imageUrl: "/images/servizi/elettromobilita.jpg",
      keyPoints: [{ text: "Prevenzione sovraccarichi" }, { text: "Ricarica ottimizzata" }, { text: "Massima efficienza" }, { text: "Monitoraggio in tempo reale" }]
    },
    "ricarica-fotovoltaica-smart": {
      title: "Ricarica Fotovoltaica Smart",
      subtitle: "Ricarica del veicolo con l'energia prodotta dai pannelli fotovoltaici.",
      description: "Sfrutta al massimo l'energia verde prodotta dal tuo tetto solare. Le nostre wallbox dialogano con l'inverter fotovoltaico per ricaricare la tua auto gratuitamente usando solo il surplus di energia.",
      imageUrl: "/images/servizi/elettromobilita.jpg",
      keyPoints: [{ text: "Autoconsumo massimizzato" }, { text: "Ricarica 100% ecologica" }, { text: "Integrazione con inverter" }, { text: "Riduzione bolletta" }]
    },
    "gestione-fatturazione-condominiale": {
      title: "Gestione e Fatturazione Condominiale",
      subtitle: "Ripartizione esatta dei consumi in ambienti multi-utente.",
      description: "Software e contatori intelligenti integrati nelle colonnine che comunicano direttamente con l'amministrazione, garantendo la ripartizione dei costi chiara e automatizzata in ambiti multi-familiari.",
      imageUrl: "/images/servizi/elettromobilita.jpg",
      keyPoints: [{ text: "Semplicità amministrativa" }, { text: "Trasparenza dei costi" }, { text: "Report dettagliati" }, { text: "Supporto amministrativo" }]
    },
    "controllo-accessi-ricarica": {
      title: "Controllo Accessi Ricarica",
      subtitle: "Autenticazione sicura tramite tessere o applicazione mobile.",
      description: "Nessun utilizzo non autorizzato delle tue colonnine. Forniamo soluzioni di blocco tramite schede RFID, portachiavi o applicazioni smartphone, per garantire l'accesso esclusivo all'infrastruttura.",
      imageUrl: "/images/servizi/elettromobilita.jpg",
      keyPoints: [{ text: "Lettori RFID integrati" }, { text: "App smartphone" }, { text: "Sicurezza avanzata" }, { text: "Blocco colonnine" }]
    },
    "adeguamento-quadri-elettrici": {
      title: "Adeguamento Quadri Elettrici",
      subtitle: "Potenziamento del quadro elettrico per supportare le nuove esigenze.",
      description: "Se la tua rete attuale non è adatta a supportare una wallbox, provvediamo noi all'ammodernamento del quadro elettrico, posando nuove linee dedicate e interruttori differenziali di Tipo B.",
      imageUrl: "/images/servizi/elettromobilita.jpg",
      keyPoints: [{ text: "Sostituzione interruttori" }, { text: "Ammodernamento quadri" }, { text: "Cablaggio nuove linee" }, { text: "Rilascio certificato RaSi" }]
    }
  },
  "quadristica": {
    "quadri-automazione-industriale": {
      title: "Quadri Automazione Industriale",
      subtitle: "Quadri di automazione e comando per macchinari, capannoni e processi produttivi.",
      description: "Siamo specializzati nell'assemblaggio di quadri elettrici per l'automazione, contenenti PLC, inverter, relè e contattori. Soluzioni robuste per ottimizzare i processi delle fabbriche e dell'industria ticinese.",
      imageUrl: "/images/servizi/quadristica.jpg",
      keyPoints: [{ text: "Integrazione logica PLC" }, { text: "Cablaggi industriali" }, { text: "Controllo macchinari" }, { text: "Affidabilità operativa" }]
    },
    "quadri-distribuzione-civile": {
      title: "Quadri Distribuzione Civile",
      subtitle: "Quadri di distribuzione principali (QGBT) per condomini e abitazioni.",
      description: "Quadri elettrici generali di bassa tensione per stabili residenziali. Dimensioniamo termicamente e progettiamo la distribuzione per garantire fornitura ininterrotta e sicura in palazzi e case unifamiliari.",
      imageUrl: "/images/servizi/quadristica.jpg",
      keyPoints: [{ text: "Normative OIBT/NIBT" }, { text: "Dimensionamento termico" }, { text: "QGBT Condominiali" }, { text: "Quadro salva-spazio" }]
    },
    "quadri-tecnologici-speciali": {
      title: "Quadri Tecnologici Speciali",
      subtitle: "Quadri dedicati per server farm, pompe di calore, domotica (KNX) e fotovoltaico.",
      description: "Realizziamo quadri elettrici dedicati alle nuove tecnologie impiantistiche: dai quadri per rack IT e data center, ai quadri di parallelo per fotovoltaico e accumulo, fino ai sistemi di riscaldamento (termopompe).",
      imageUrl: "/images/servizi/quadristica.jpg",
      keyPoints: [{ text: "Quadri termopompa" }, { text: "Domotica KNX" }, { text: "Integrazione FV" }, { text: "Alta precisione" }]
    },
    "componentistica-elettrica-premium": {
      title: "Componentistica Elettrica Premium",
      subtitle: "Utilizzo di componentistica premium (ABB, Hager, Schneider).",
      description: "L'affidabilità di un quadro dipende dai materiali usati. Utilizziamo esclusivamente componentistica dei migliori marchi internazionali per garantire la massima longevità e prevenzione dei guasti.",
      imageUrl: "/images/servizi/quadristica.jpg",
      keyPoints: [{ text: "Materiali top di gamma" }, { text: "Lunga durata" }, { text: "Zero falsi contatti" }, { text: "Partnership certificate" }]
    },
    "progettazione-schemi-elettrici": {
      title: "Progettazione Schemi Elettrici",
      subtitle: "Progettazione CAD per fornire documentazione chiara e aggiornabile.",
      description: "Ogni nostro quadro esce dall'officina corredato di uno schema unifilare o multifilare disegnato tramite software CAD. Documentazione chiara, obbligatoria per legge, indispensabile per future manutenzioni.",
      imageUrl: "/images/servizi/quadristica.jpg",
      keyPoints: [{ text: "Disegni CAD professionali" }, { text: "Schemi unifilari" }, { text: "Archivio documentazione" }, { text: "Consegna fascicolo tecnico" }]
    },
    "revamping-quadri-obsoleti": {
      title: "Revamping Quadri Obsoleti",
      subtitle: "Messa a norma di vecchi impianti sostituendo il solo 'cuore' tecnologico.",
      description: "Mettiamo a norma quadri vecchi e pericolosi senza necessariamente sostituire la scocca esterna in metallo. Sostituiamo le piastre di fondo e tutto l'equipaggiamento obsoleto portandolo agli standard NIBT attuali.",
      imageUrl: "/images/servizi/quadristica.jpg",
      keyPoints: [{ text: "Ammodernamento economico" }, { text: "Sicurezza ripristinata" }, { text: "Soluzioni su misura" }, { text: "Riduzione tempi di fermo" }]
    },
    "collaudo-sicurezza-quadri": {
      title: "Collaudo e Sicurezza Quadri",
      subtitle: "Test di isolamento, continuità e riscaldamento pre-consegna.",
      description: "Tutti i quadri prodotti in TF Edilservice passano attraverso una batteria di test strumentali (isolamento, intervento differenziali, tenuta termica) per assicurare al cliente la totale sicurezza dell'assemblaggio.",
      imageUrl: "/images/servizi/quadristica.jpg",
      keyPoints: [{ text: "Test di continuità" }, { text: "Verifiche d'isolamento" }, { text: "Collaudo certificato" }, { text: "Massima affidabilità" }]
    },
    "cablaggi-strutturati-ordinati": {
      title: "Cablaggi Strutturati e Ordinati",
      subtitle: "Marcatura inequivocabile di cavi e morsettiere per facilitare interventi futuri.",
      description: "Un quadro ordinato è un quadro che si manutiene con facilità. Il nostro cablaggio è curato nei minimi dettagli, con l'utilizzo di canaline, fascette e sistemi di siglatura/etichettatura su ogni singolo morsetto e cavo.",
      imageUrl: "/images/servizi/quadristica.jpg",
      keyPoints: [{ text: "Siglatura professionale" }, { text: "Estetica del cablaggio" }, { text: "Morsettiere numerate" }, { text: "Manutenzione agevolata" }]
    }
  }
};
