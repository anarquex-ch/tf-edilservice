export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export const reviewsData: Review[] = [
  {
    id: "1",
    author: "Marco R.",
    location: "Lugano",
    rating: 5,
    text: "Professionalità ai massimi livelli. Hanno installato l'impianto fotovoltaico con RCP in tempi record. Molto competenti sulla normativa svizzera.",
    date: "2024-03-15"
  },
  {
    id: "2",
    author: "Elena S.",
    location: "Bellinzona",
    rating: 5,
    text: "Servizio di pronto intervento rapido ed efficace. Il tecnico è arrivato in meno di un'ora. Prezzo onesto e trasparente.",
    date: "2024-02-28"
  },
  {
    id: "3",
    author: "Giuseppe T.",
    location: "Locarno",
    rating: 5,
    text: "Ho automatizzato tutta la casa con loro. Il sistema domotico KNX funziona a meraviglia. Ottimo supporto post-vendita.",
    date: "2024-01-20"
  },
  {
    id: "4",
    author: "Sara B.",
    location: "Mendrisio",
    rating: 5,
    text: "Lavoro pulito e preciso per l'installazione delle telecamere di sicurezza. Mi sento molto più sicura ora. Consigliatissimi!",
    date: "2023-12-10"
  }
];
