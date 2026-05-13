"use client";

import ServiceCard from "./ServiceCard";
import {
  Zap,
  Wifi,
  Home,
  Shield,
  Sun,
  Wrench,
  Hammer,
  BatteryCharging,
  Cpu,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Zap,
    title: "Impianti Elettrici",
    description:
      "Progettazione, installazione e manutenzione per stabili civili, industriali e commerciali. Certificazioni e conformità alle normative vigenti.",
    href: "/servizi/impianti-elettrici",
  },
  {
    icon: Wifi,
    title: "Telecomunicazioni e IT",
    description:
      "Cablaggi strutturati, reti Wi-Fi e sistemi di comunicazione. Soluzioni professionali per connettività aziendale e residenziale.",
    href: "/servizi/telecomunicazioni-it",
  },
  {
    icon: Home,
    title: "Automazione e Domotica",
    description:
      "Sistemi smart per il controllo di luci, tapparelle e riscaldamento (Smart Home). Comfort e risparmio energetico.",
    href: "/servizi/domotica",
  },
  {
    icon: Shield,
    title: "Sicurezza",
    description:
      "Impianti d'allarme, videosorveglianza (CCTV) e rilevazione fumo/incendio. Protezione completa per la vostra tranquillità.",
    href: "/servizi/sicurezza",
  },
  {
    icon: Sun,
    title: "Energie Rinnovabili",
    description:
      "Installazione pannelli fotovoltaici e stazioni di ricarica per veicoli elettrici. Verso un futuro sostenibile.",
    href: "/servizi/energie-rinnovabili",
  },
  {
    icon: Wrench,
    title: "Manutenzione e Riparazioni",
    description:
      "Servizio di pronto intervento e riparazioni elettriche rapide. Interventi tempestivi per minimizzare i disservizi.",
    href: "/servizi/manutenzione",
  },
  {
    icon: Hammer,
    title: "Integrazione e Autoconsumo",
    description:
      "Supporto edile specializzato per l'impiantistica e sistemi di autoconsumo collettivo (RCP) secondo il nuovo Mantelerlass.",
    href: "/servizi/opere-edili",
  },
  {
    icon: BatteryCharging,
    title: "Elettromobilità",
    description:
      "Stazioni di ricarica intelligenti (Wallbox) per abitazioni e aziende, con gestione dinamica dei carichi e integrazione solare.",
    href: "/servizi/elettromobilita",
  },
  {
    icon: Cpu,
    title: "Quadristica",
    description:
      "Progettazione, cablaggio e collaudo di quadri elettrici di distribuzione e automazione. Soluzioni su misura conformi alle norme OIBT.",
    href: "/servizi/quadristica",
  },
];

interface ServicesSectionProps {
  showAllButton?: boolean;
  title?: string;
  subtitle?: string;
}

export default function ServicesSection({
  showAllButton = true,
  title = "I Nostri Servizi",
  subtitle = "Professionalità e competenza per ogni esigenza",
}: ServicesSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
              href={service.href}
            />
          ))}
        </div>

        {showAllButton && (
          <div className="text-center mt-12">
            <Link
              href="/servizi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg"
            >
              Tutti i Servizi
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}