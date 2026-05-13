export interface ServiceData {
  id: string;
  title: string;
  description: string;
}

export const servicesData: Record<string, ServiceData> = {
  "impianti-elettrici": {
    id: "impianti-elettrici",
    title: "Impianti Elettrici",
    description: "Progettazione, installazione e manutenzione per stabili civili, industriali e commerciali. Certificazioni e conformità alle normative vigenti."
  },
  "telecomunicazioni-it": {
    id: "telecomunicazioni-it",
    title: "Telecomunicazioni e IT",
    description: "Cablaggi strutturati, reti Wi-Fi e sistemi di comunicazione. Soluzioni professionali per connettività aziendale e residenziale."
  },
  "domotica": {
    id: "domotica",
    title: "Automazione e Domotica",
    description: "Sistemi smart per il controllo di luci, tapparelle e riscaldamento (Smart Home). Comfort e risparmio energetico."
  },
  "sicurezza": {
    id: "sicurezza",
    title: "Sicurezza",
    description: "Impianti d'allarme, videosorveglianza (CCTV) e rilevazione fumo/incendio. Protezione completa per la vostra tranquillità."
  },
  "energie-rinnovabili": {
    id: "energie-rinnovabili",
    title: "Energie Rinnovabili",
    description: "Installazione pannelli fotovoltaici e stazioni di ricarica per veicoli elettrici. Verso un futuro sostenibile."
  },
  "manutenzione": {
    id: "manutenzione",
    title: "Manutenzione e Riparazioni",
    description: "Servizio di pronto intervento e riparazioni elettriche rapide. Interventi tempestivi per minimizzare i disservizi."
  },
  "opere-edili": {
    id: "opere-edili",
    title: "Integrazione e Autoconsumo",
    description: "Opere edili specializzate per il supporto impiantistico e sistemi di autoconsumo collettivo (RCP) in conformità con le nuove normative svizzere."
  },
  "elettromobilita": {
    id: "elettromobilita",
    title: "Elettromobilità",
    description: "Stazioni di ricarica intelligenti (Wallbox) per abitazioni e aziende, con gestione dinamica dei carichi e integrazione solare."
  },
  "quadristica": {
    id: "quadristica",
    title: "Quadristica",
    description: "Progettazione, cablaggio e collaudo di quadri elettrici di distribuzione e automazione. Soluzioni su misura conformi alle norme OIBT."
  }
};
