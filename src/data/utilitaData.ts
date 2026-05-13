export interface FAQ {
  question: string;
  answer: string;
}

export interface UtilitàItem {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
  readTime: string;
  officialLinks?: { label: string; url: string }[];
  faqs?: FAQ[];
}

export const utilitaData: Record<string, UtilitàItem> = {
  "incentivi-cantonali-ticino-2024": {
    slug: "incentivi-cantonali-ticino-2024",
    title: "Incentivi Energia Ticino 2024: Guida Completa ai Sussidi",
    excerpt: "Come ottenere i fondi FER e Pronovo per fotovoltaico e termopompe nel 2024. Requisiti, scadenze e moduli ufficiali.",
    date: "2024-05-12",
    author: "Ufficio Tecnico TF",
    category: "Incentivi",
    imageUrl: "/images/utilita/incentivi.png",
    readTime: "12 min",
    officialLinks: [
      { label: "Pronovo - Portale Incentivi Federali", url: "https://pronovo.ch/it/" },
      { label: "Canton Ticino - Incentivi Energia (FER)", url: "https://www4.ti.ch/dt/da/spas/uenergia/temi/incentivi" },
      { label: "Calcolatore Incentivi Svizzera", url: "https://www.energybox.ch/it" }
    ],
    faqs: [
      { question: "Posso cumulare incentivi federali e cantonali?", answer: "Sì, per molti interventi (come il fotovoltaico) ricevi la RU federale e, in base al comune o al tipo di intervento, puoi accedere a fondi cantonali FER o sussidi comunali aggiuntivi." },
      { question: "Quanto tempo ci vuole per ricevere i soldi?", answer: "Per il fotovoltaico (Pronovo), i tempi si sono ridotti a circa 6-9 mesi dalla messa in esercizio. Per le termopompe, il contributo cantonale viene solitamente versato entro pochi mesi dalla chiusura del cantiere." },
      { question: "Devo fare la richiesta prima di iniziare i lavori?", answer: "Per le termopompe e l'isolamento termico (FER), è tassativo presentare la domanda PRIMA di firmare contratti o iniziare i lavori. Per il fotovoltaico invece, la pratica si avvia a impianto concluso." }
    ],
    content: `
      <h2>Guida Strategica agli Incentivi 2024</h2>
      <p>Investire nell'energia rinnovabile in Ticino non è mai stato così conveniente. Grazie alla combinazione di sussidi federali e cantonali, è possibile abbattere i costi d'investimento fino al 40%.</p>
      
      <p>La transizione energetica svizzera poggia su due pilastri principali: la produzione decentralizzata di elettricità (fotovoltaico) e la decarbonizzazione del riscaldamento (pompe di calore). Entrambi sono pesantemente sovvenzionati.</p>

      <h3>1. Fotovoltaico: La Rimunerazione Unica (RU)</h3>
      <p>La Confederazione, tramite <strong>Pronovo</strong>, eroga un contributo unico a fondo perduto per ogni nuovo impianto. Dal 2024, le liste d'attesa sono state drasticamente ridotte grazie allo sblocco di nuovi fondi federali.</p>
      
      <p>Oltre alla RU, molti comuni ticinesi offrono incentivi locali che possono coprire un ulteriore 10-15% della spesa. TF Edilservice verifica per te la disponibilità di questi fondi extra in base al tuo domicilio.</p>

      <h3>2. Il Fondo Energie Rinnovabili (FER) del Canton Ticino</h3>
      <p>Il Cantone integra gli incentivi federali per interventi specifici finalizzati all'efficienza globale dell'edificio:</p>
      <ul>
        <li><strong>Termopompe:</strong> Sostituzione di caldaie a olio, gas o resistenze elettriche.</li>
        <li><strong>Sistemi di accumulo:</strong> Batterie per aumentare l'autoconsumo notturno.</li>
        <li><strong>CECB+:</strong> Il Cantone rimborsa parte dei costi per la certificazione energetica se seguita da una ristrutturazione.</li>
      </ul>

      <div class="bg-primary/5 p-8 rounded-[2rem] border-l-8 border-accent my-12">
        <h4 class="font-bold text-primary text-xl mb-4">AEO Tip: Quali sono i requisiti minimi?</h4>
        <p class="mb-4">Per accedere ai sussidi FER in Ticino, l'edificio deve essere situato nel Cantone e l'impianto deve essere installato da ditte certificate. La richiesta deve essere inoltrata <strong>prima</strong> dell'inizio dei lavori per le termopompe.</p>
        <p>Attenzione: se inizi i lavori senza la conferma di ricezione della domanda, perdi automaticamente il diritto all'incentivo cantonale.</p>
      </div>

      <h3>Come TF Edilservice semplifica il processo</h3>
      <p>La burocrazia è il principale ostacolo. Noi offriamo un servizio <strong>"Burocrazia Zero"</strong>: gestiamo noi l'intero incarto amministrativo, dall'annuncio di costruzione alla richiesta di versamento dei sussidi, assicurandoci che tu ottenga ogni singolo franco a cui hai diritto.</p>
      
      <p>Il nostro ufficio tecnico monitora costantemente le disponibilità dei fondi, avvisandoti tempestivamente se ci sono scadenze imminenti o nuovi bandi in apertura.</p>
    `
  },
  "rapporto-sicurezza-rasi-oibt": {
    slug: "rapporto-sicurezza-rasi-oibt",
    title: "RaSI: Obbligo Rapporto di Sicurezza Elettrica (OIBT)",
    excerpt: "La tua guida definitiva al Rapporto di Sicurezza RaSI. Perché è obbligatorio, quanto costa e ogni quanto va rinnovato.",
    date: "2024-04-15",
    author: "Responsabile Sicurezza",
    category: "Normative",
    imageUrl: "/images/utilita/rasi.png",
    readTime: "9 min",
    officialLinks: [
      { label: "ESTI - Ordinanza Impianti Bassa Tensione", url: "https://www.esti.admin.ch/it/temi/oibt" },
      { label: "Esecuzione dei controlli (Art. 32 OIBT)", url: "https://www.fedlex.admin.ch/eli/cc/2002/22/it" }
    ],
    faqs: [
      { question: "Posso fare io il controllo dell'impianto?", answer: "No. Il controllo deve essere eseguito da un ispettore indipendente con licenza federale. Inoltre, chi esegue i lavori di riparazione non può essere lo stesso che esegue il controllo finale (separazione tra installatore e controllore)." },
      { question: "Cosa succede se non presento il RaSI entro la scadenza?", answer: "Il gestore della rete invierà dei solleciti. Se si persiste, il caso viene passato all'ESTI che può comminare multe salate e, in casi estremi di pericolo immediato, ordinare il distacco della corrente." },
      { question: "Quanto costa mediamente un controllo RaSI?", answer: "Per un appartamento standard i costi variano tra i 300 e i 600 CHF. Se vengono trovati difetti, i costi di riparazione sono a parte." }
    ],
    content: `
      <h2>Tutto sul RaSI: Sicurezza e Conformità</h2>
      <p>In Svizzera, la sicurezza elettrica non è un'opzione, ma un obbligo regolato dall'<strong>OIBT (Ordinanza sugli Impianti a Bassa Tensione)</strong>. Il proprietario dell'immobile è l'unico responsabile legale della sicurezza dell'impianto.</p>
      
      <p>Il RaSI (Rapporto di Sicurezza) non è una semplice "tassa", ma una garanzia che la tua casa è protetta da cortocircuiti, folgorazioni e incendi di natura elettrica.</p>

      <h3>Cos'è esattamente il RaSI?</h3>
      <p>Il Rapporto di Sicurezza è il documento ufficiale rilasciato dopo un controllo approfondito (ispezione visiva, prove di continuità, misure di isolamento) che attesta che l'impianto è a norma.</p>
      
      <h3>Frequenza dei controlli obbligatori:</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        <div class="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <strong class="text-accent text-lg block mb-2">Ogni 20 anni</strong>
          <p class="text-sm text-gray-600">Abitazioni private, appartamenti e case monofamiliari standard.</p>
        </div>
        <div class="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <strong class="text-accent text-lg block mb-2">Ogni 10 anni</strong>
          <p class="text-sm text-gray-600">Uffici, negozi, edifici industriali e commerciali senza rischi speciali.</p>
        </div>
        <div class="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <strong class="text-accent text-lg block mb-2">Ogni 5 anni</strong>
          <p class="text-sm text-gray-600">Luoghi pubblici, scuole, hotel, ospedali, cinema e officine con rischio esplosione.</p>
        </div>
        <div class="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <strong class="text-accent text-lg block mb-2">Al cambio di proprietà</strong>
          <p class="text-sm text-gray-600">Obbligatorio se l'ultimo controllo ha più di 5 anni. La responsabilità del controllo è dell'acquirente, salvo patti contrari.</p>
        </div>
      </div>

      <h4 class="font-bold text-primary text-xl mb-4">Cosa succede se l'impianto non è a norma?</h4>
      <p>Se l'ispettore riscontra difetti (es. mancanza di messa a terra, salvavita difettosi, fili scoperti), il proprietario ha l'obbligo di farli riparare da una ditta autorizzata come <strong>TF Edilservice</strong> entro i termini stabiliti.</p>
      
      <p>Senza un RaSI valido, in caso di sinistro, l'assicurazione stabili (es. l'assicurazione contro gli incendi) ha il diritto di rivalsa o di ridurre drasticamente le prestazioni di risarcimento.</p>

      <h3>Supporto TF Edilservice</h3>
      <p>Hai ricevuto la lettera dal tuo distributore (SES, AMB, AET, AGE)? Non aspettare l'ultimo momento. Eseguiamo un pre-controllo tecnico, sistemiamo le anomalie e coordiniamo l'ispezione con periti indipendenti certificati.</p>
    `
  },
  "comunita-elettriche-locali-cel-ticino": {
    slug: "comunita-elettriche-locali-cel-ticino",
    title: "Comunità Elettriche Locali (CEL): Rivoluzione Energetica 2024",
    excerpt: "Come vendere e scambiare energia solare tra vicini in Ticino grazie al nuovo Mantelerlass. Guida alle CEL e RCP.",
    date: "2024-05-13",
    author: "Energy Manager TF",
    category: "Innovazione",
    imageUrl: "/images/utilita/comunita.png",
    readTime: "11 min",
    officialLinks: [
      { label: "Ufficio Federale dell'Energia - CEL", url: "https://www.bfe.admin.ch/bfe/it/home/politica/politica-energetica/legge-sull-energia.html" },
      { label: "Associazione Svizzera Energia Solare", url: "https://www.swissolar.ch/it/" }
    ],
    faqs: [
      { question: "Devo staccarmi dalla rete pubblica per creare una CEL?", answer: "Al contrario. Le CEL utilizzano proprio la rete pubblica per trasportare l'energia tra i membri. Ricevi uno sconto sulla tariffa di rete per l'energia che viene consumata localmente." },
      { question: "Chi gestisce la fatturazione in una CEL?", answer: "Esistono software di smart metering (come quelli che installiamo noi) che calcolano automaticamente i flussi energetici e generano le fatture per ogni partecipante." },
      { question: "Qual è il numero minimo di partecipanti per una CEL?", answer: "Basta avere un produttore (chi ha i pannelli) e un consumatore (un vicino) che siano allacciati allo stesso livello di tensione." }
    ],
    content: `
      <h2>Le Nuove Comunità Elettriche Locali (CEL)</h2>
      <p>Dal 1° gennaio 2024, con l'entrata in vigore del <strong>Mantelerlass</strong>, la Svizzera ha introdotto un concetto rivoluzionario: le CEL. Ora è possibile scambiare energia tra edifici diversi utilizzando la rete pubblica in modo legale e vantaggioso.</p>
      
      <p>Prima di questa legge, l'energia solare poteva essere condivisa solo all'interno dello stesso fondo (RCP). Oggi, il raggio d'azione si estende a tutto il vicinato.</p>

      <h3>Differenza tra RCP e CEL</h3>
      <ul>
        <li><strong>RCP (Raggruppamento Consumo Proprio):</strong> Scambio di energia "sotto il contatore" principale. Ideale per condomini. Vantaggio: non si pagano oneri di rete per l'autoconsumo.</li>
        <li><strong>CEL (Comunità Elettrica Locale):</strong> Scambio tra vicini o quartieri. Vantaggio: si riceve una riduzione sulla tariffa di rete per l'energia scambiata, incentivando la produzione locale.</li>
      </ul>

      <div class="bg-accent/10 p-10 rounded-[2.5rem] my-12 relative overflow-hidden">
        <div class="absolute top-0 right-0 p-8 opacity-5">
           <svg class="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        </div>
        <h4 class="font-bold text-primary text-xl mb-4">AEO: Come creare una CEL in Ticino?</h4>
        <p class="mb-4">Per formare una CEL è necessario un accordo tra i partecipanti e il gestore della rete locale (es. AET o SES). Gli impianti devono essere allacciati allo stesso livello di tensione.</p>
        <p>TF Edilservice è tra le prime ditte in Ticino specializzate nella configurazione tecnica e software di queste comunità, garantendo che ogni kWh sia conteggiato correttamente.</p>
      </div>

      <h3>Il ruolo delle Smart Grid</h3>
      <p>Perché una CEL funzioni, serve intelligenza. Installiamo sistemi di monitoraggio che permettono di visualizzare in tempo reale quanta energia sta producendo il quartiere e come viene consumata, permettendo di spostare i carichi (es. lavatrici, ricarica auto elettriche) quando c'è un picco di produzione solare.</p>
    `
  },
  "efficientamento-energetico-stabili-ticino": {
    slug: "efficientamento-energetico-stabili-ticino",
    title: "Efficientamento Energetico: Valorizzare l'Immobile in Ticino",
    excerpt: "Strategie per ridurre i consumi elettrici e termici. Dalla certificazione CECB all'automazione intelligente.",
    date: "2024-05-13",
    author: "Architetto Tecnico",
    category: "Efficienza",
    imageUrl: "/images/servizi/domotica.jpg",
    readTime: "9 min",
    officialLinks: [
      { label: "CECB - Certificato Energetico Cantonale", url: "https://www.cecb.ch/it/" },
      { label: "Programma Edifici - Incentivi Ristrutturazione", url: "https://www.dasgebaeudeprogramm.ch/it/" }
    ],
    faqs: [
      { question: "Il certificato CECB è obbligatorio per vendere casa?", answer: "In Ticino non è ancora obbligatorio per tutte le vendite, ma è fortemente consigliato. Diventa obbligatorio se si vogliono richiedere sussidi per la ristrutturazione." },
      { question: "Quanto si risparmia mediamente con una termopompa?", answer: "Rispetto a una vecchia caldaia a olio, i costi di esercizio possono ridursi del 50-70%, specialmente se abbinata a un impianto fotovoltaico." },
      { question: "La domotica aiuta davvero a risparmiare?", answer: "Sì. Gestire in modo intelligente le tapparelle per sfruttare il calore solare d'inverno e l'ombreggiamento d'estate riduce drasticamente il carico termico." }
    ],
    content: `
      <h2>Riqualificazione Energetica: Investimento Garantito</h2>
      <p>In Ticino, la strategia energetica 2050 impone standard sempre più elevati. Un edificio efficiente non è solo una scelta ecologica, ma una necessità economica per proteggere il valore del proprio capitale immobiliare.</p>
      
      <p>Spesso si pensa che efficientare significhi solo "mettere il cappotto". In realtà, la sinergia tra involucro e tecnologia elettrica è il vero segreto del risparmio.</p>

      <h3>I tre pilastri dell'efficienza moderna:</h3>
      <ol>
        <li><strong>Involucro performante:</strong> Isolamento del tetto e delle pareti, fondamentali per non disperdere il calore prodotto.</li>
        <li><strong>Sostituzione Sistemi Fossili:</strong> Le pompe di calore sono oggi lo standard svizzero. Estraggono energia dall'aria o dal terreno, consumando solo una frazione di elettricità.</li>
        <li><strong>Gestione Intelligente (Smart Home):</strong> Un sistema domotico avanzato coordina i carichi, gestisce l'illuminazione LED e regola il clima stanza per stanza in base alla presenza di persone.</li>
      </ol>

      <div class="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 my-12">
        <h4 class="font-bold text-primary text-xl mb-4">Cos'è il CECB+ e perché serve?</h4>
        <p class="mb-4">Il CECB+ è un rapporto di consulenza ufficiale svizzero che analizza lo stato attuale del tuo edificio e propone tre diversi scenari di ristrutturazione con i relativi costi e risparmi previsti.</p>
        <p>È lo strumento più potente per pianificare gli investimenti: ti dice esattamente quale lavoro fare per primo per ottenere il massimo risparmio con il minimo sforzo.</p>
      </div>

      <h3>Perché scegliere TF Edilservice</h3>
      <p>Noi offriamo una visione d'insieme. Mentre un'impresa edile guarda solo ai muri e un elettricista solo ai cavi, noi integriamo le due cose. Prepariamo la struttura per ospitare la tecnologia del futuro, evitando lavori doppi e costi inutili.</p>
    `
  },
  "manutenzione-impianti-fotovoltaici-ticino": {
    slug: "manutenzione-impianti-fotovoltaici-ticino",
    title: "Manutenzione Fotovoltaico: Come Evitare Perdite di Resa",
    excerpt: "Perché pulizia e controlli tecnici sono fondamentali per garantire la durata trentennale dei tuoi pannelli solari.",
    date: "2024-05-13",
    author: "Team Manutenzione TF",
    category: "Manutenzione",
    imageUrl: "/images/utilita/manutenzione.png",
    readTime: "8 min",
    officialLinks: [
      { label: "Direttive Swissolar Manutenzione", url: "https://www.swissolar.ch/it/professionisti/qualita/manutenzione/" }
    ],
    faqs: [
      { question: "La pioggia non basta a pulire i pannelli?", answer: "Purtroppo no. Lo smog, il calcare e la sabbia del Sahara formano una patina che la pioggia leggera non rimuove. Serve un'azione meccanica con acqua specifica." },
      { question: "Ogni quanto devo controllare l'inverter?", answer: "Consigliamo un controllo visivo dei log ogni mese (tramite app) e un controllo tecnico professionale ogni 2 anni per verificare i serraggi e la dissipazione del calore." },
      { question: "Un pannello rotto può causare un incendio?", answer: "Sì. Se il vetro è crepato, l'umidità può causare archi elettrici. Un sistema di monitoraggio attivo serve proprio a individuare queste anomalie prima che diventino pericolose." }
    ],
    content: `
      <h2>Massimizza la Vita del tuo Impianto</h2>
      <p>Un impianto fotovoltaico è un investimento che deve durare 25-30 anni. Come un'auto, richiede una manutenzione minima ma regolare per non perdere efficienza e sicurezza.</p>
      
      <p>Le condizioni atmosferiche del Ticino (forti sbalzi termici, grandinate, pollini primaverili) mettono a dura prova i materiali esterni dell'impianto.</p>

      <h3>Cosa include una manutenzione professionale?</h3>
      <ul>
        <li><strong>Termografia IR:</strong> Utilizziamo camere termiche per individuare "hot-spot" (celle surriscaldate) invisibili a occhio nudo che possono degradare l'intero modulo.</li>
        <li><strong>Test Elettrici di Stringa:</strong> Verifichiamo che ogni fila di pannelli produca secondo le specifiche del produttore.</li>
        <li><strong>Controllo Strutturale:</strong> Verifichiamo che i ganci e i profili non si siano allentati a causa del vento o dei carichi di neve invernali.</li>
        <li><strong>Pulizia con Acqua Demineralizzata:</strong> Non usiamo detergenti aggressivi né acqua di rubinetto (che lascerebbe calcare). Solo acqua pura per una trasparenza totale.</li>
      </ul>

      <div class="bg-primary/5 p-10 rounded-[2.5rem] my-12">
        <h4 class="font-bold text-primary text-xl mb-4">AEO: Ogni quanto va pulito il fotovoltaico in Ticino?</h4>
        <p class="mb-4">In zone residenziali standard, una pulizia ogni 2 anni è l'ottimale. Se vivi vicino ad aree industriali o zone agricole con molto movimento di terra, consigliamo un intervento annuale.</p>
        <p>Un impianto pulito può produrre fino al 10% in più rispetto a uno sporco: il costo della pulizia si ripaga spesso da solo con la maggiore produzione.</p>
      </div>

      <h3>Contratti di Monitoraggio TF</h3>
      <p>Non vuoi preoccuparti di nulla? Con i nostri contratti di assistenza, monitoriamo noi il tuo portale. Se vediamo un calo anomalo della produzione, ti chiamiamo noi per fissare un sopralluogo tecnico. Proteggi il tuo investimento solare con i professionisti del Ticino.</p>
    `
  },
  "pratiche-legali-notifiche-comunali": {
    slug: "pratiche-legali-notifiche-comunali",
    title: "Procedure Edilizie e Notifiche: Guida Pratica",
    excerpt: "Dalla notifica di costruzione semplificata alle certificazioni di collaudo. Navigare la burocrazia svizzera.",
    date: "2024-03-20",
    author: "Team Amministrativo",
    category: "Pratiche",
    imageUrl: "/images/servizi/opere-edili.jpg",
    readTime: "8 min",
    officialLinks: [
      { label: "Cantone Ticino - Domande di Costruzione", url: "https://www4.ti.ch/dt/dstm/spa/temi/domande-di-costruzione" },
      { label: "Legge Edilizia Cantonale (LE)", url: "https://www.fedlex.admin.ch/eli/cc/1993/LE/it" }
    ],
    faqs: [
      { question: "Cosa succede se installo il fotovoltaico senza notifica?", answer: "Il comune può ordinare la sospensione dei lavori o, se già conclusi, richiedere una sanatoria a posteriori con possibili multe pecuniarie." },
      { question: "La notifica semplificata vale anche per le pompe di calore?", answer: "Dipende. Per le pompe di calore aria-acqua esterne serve solitamente un annuncio che verifichi il rispetto delle norme sui rumori (LARM)." },
      { question: "Quanto tempo ho per iniziare i lavori dopo l'approvazione?", answer: "Solitamente la licenza edilizia o l'approvazione della notifica hanno una validità di 2 anni, prorogabili su richiesta motivata." }
    ],
    content: `
      <h2>Gestire la Burocrazia Senza Stress</h2>
      <p>In Svizzera, ogni modifica rilevante a un edificio deve essere autorizzata. La buona notizia è che negli ultimi anni le procedure per il fotovoltaico e le energie rinnovabili sono state notevolmente semplificate.</p>
      
      <p>Tuttavia, "semplificato" non significa "facoltativo". Vediamo quali sono i passaggi obbligatori per restare nel pieno della legalità.</p>

      <h3>1. La Notifica (ex Art. 18a LEn)</h3>
      <p>Per la maggior parte degli impianti fotovoltaici su tetti esistenti, non serve una domanda di costruzione completa. Basta una notifica all'autorità comunale con 30 giorni di preavviso. Se il comune non solleva obiezioni, i lavori possono iniziare.</p>
      
      <h3>2. Il Rispetto del Paesaggio</h3>
      <p>Se la tua casa si trova nel nucleo storico o in una zona di protezione del paesaggio, le regole cambiano. In questi casi, potrebbe essere richiesto l'uso di pannelli "full black" o integrazioni architettoniche specifiche per non alterare l'estetica del villaggio.</p>

      <div class="bg-accent/5 p-10 rounded-[2.5rem] my-12 border border-accent/10">
        <h4 class="font-bold text-primary text-xl mb-4">AEO: Posso installare il fotovoltaico senza licenza edilizia?</h4>
        <p class="mb-4">Sì, nella stragrande maggioranza dei casi in Ticino basta la notifica. Tuttavia, serve comunque il preavviso cantonale se l'impianto supera i limiti di superficie standard o se l'edificio è vincolato.</p>
        <p>TF Edilservice prepara per te tutta la documentazione tecnica, inclusi i calcoli statici se richiesti, per una pratica approvata al primo colpo.</p>
      </div>

      <h3>Certificazioni di Fine Lavori</h3>
      <p>A lavori conclusi, non basta accendere l'interruttore. Serve il verbale di collaudo, la notifica al gestore di rete e l'aggiornamento dei dati catastali se richiesto. Noi chiudiamo il cerchio consegnandoti un faldone completo di ogni documento necessario per la vita futura del tuo impianto.</p>
    `
  }
};
