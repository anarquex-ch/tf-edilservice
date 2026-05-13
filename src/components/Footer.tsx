"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MapPin, Mail, Phone, ChevronDown } from "lucide-react";
import { zonesData } from "@/data/zonesData";
import clsx from "clsx";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servizi", label: "Servizi" },
  { href: "/utilita", label: "Utilità" },
  { href: "/referenze", label: "Referenze" },
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/contatti", label: "Contatti" },
];

const contactInfo = {
  address: "Via Campagna 4b, 6512 Giubiasco",
  email: "info@tfedilservice.ch",
  phone: "+41 76 461 15 99",
};

export default function Footer() {
  const mainCities = ["lugano", "locarno", "bellinzona", "mendrisio", "chiasso"];
  
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };
  
  return (
    <footer className="bg-primary text-white pt-16 pb-24 md:pb-16 rounded-t-[2.5rem] mt-10 shadow-2xl relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          
          {/* Logo & Description */}
          <div className="flex flex-col gap-6 mb-8 md:mb-0">
            <div className="relative w-40 h-16">
              <Image
                src="/logo-header.svg"
                alt="TF Edilservice"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Specialisti in integrazione impiantistica, domotica avanzata e soluzioni 
              per l'autoconsumo energetico (RCP/CEL) in tutto il Canton Ticino.
            </p>
          </div>

          {/* Link Rapidi */}
          <div className="border-t border-white/10 md:border-none pt-6 md:pt-0">
            <button 
              onClick={() => toggleSection('links')}
              className="flex items-center justify-between w-full md:cursor-default"
            >
              <h3 className="text-xl font-bold tracking-wide">Link Rapidi</h3>
              <ChevronDown className={clsx("w-5 h-5 md:hidden transition-transform duration-300", openSection === 'links' && "rotate-180")} />
            </button>
            <div className={clsx(
              "grid transition-all duration-300 md:!grid-rows-[1fr] md:!opacity-100", 
              openSection === 'links' ? "grid-rows-[1fr] opacity-100 pt-6 md:pt-6" : "grid-rows-[0fr] opacity-0 md:pt-6"
            )}>
              <div className="overflow-hidden">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-base font-medium inline-flex w-fit"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Zone Coperte */}
          <div className="border-t border-white/10 md:border-none pt-6 md:pt-0">
            <button 
              onClick={() => toggleSection('zone')}
              className="flex items-center justify-between w-full md:cursor-default"
            >
              <h3 className="text-xl font-bold tracking-wide">Zone Coperte</h3>
              <ChevronDown className={clsx("w-5 h-5 md:hidden transition-transform duration-300", openSection === 'zone' && "rotate-180")} />
            </button>
            <div className={clsx(
              "grid transition-all duration-300 md:!grid-rows-[1fr] md:!opacity-100", 
              openSection === 'zone' ? "grid-rows-[1fr] opacity-100 pt-6 md:pt-6" : "grid-rows-[0fr] opacity-0 md:pt-6"
            )}>
              <div className="overflow-hidden">
                <div className="flex flex-col gap-4">
                  {mainCities.map((cityKey) => {
                    const zone = zonesData[cityKey];
                    if (!zone) return null;
                    return (
                      <Link
                        key={cityKey}
                        href={`/${zone.canton.toLowerCase()}/${cityKey}`}
                        className="text-gray-300 hover:text-white transition-colors text-base font-medium inline-flex w-fit capitalize"
                      >
                        {zone.name}
                      </Link>
                    );
                  })}
                  <Link
                    href="/ticino"
                    className="text-accent hover:text-accent/80 transition-colors text-sm font-semibold inline-flex w-fit mt-2"
                  >
                    Vedi tutte le zone &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contatti */}
          <div className="border-t border-b border-white/10 md:border-none py-6 md:py-0">
            <button 
              onClick={() => toggleSection('contatti')}
              className="flex items-center justify-between w-full md:cursor-default"
            >
              <h3 className="text-xl font-bold tracking-wide">Contatti</h3>
              <ChevronDown className={clsx("w-5 h-5 md:hidden transition-transform duration-300", openSection === 'contatti' && "rotate-180")} />
            </button>
            <div className={clsx(
              "grid transition-all duration-300 md:!grid-rows-[1fr] md:!opacity-100", 
              openSection === 'contatti' ? "grid-rows-[1fr] opacity-100 pt-6 md:pt-6" : "grid-rows-[0fr] opacity-0 md:pt-6"
            )}>
              <div className="overflow-hidden">
                <div className="flex flex-col gap-5">
                  <a
                    href={`https://maps.google.com/?q=${contactInfo.address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors group"
                  >
                    <div className="bg-white/10 p-2 rounded-lg group-hover:bg-accent transition-colors">
                      <MapPin className="w-5 h-5 flex-shrink-0" />
                    </div>
                    <span className="mt-1">{contactInfo.address}</span>
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                  >
                    <div className="bg-white/10 p-2 rounded-lg group-hover:bg-accent transition-colors">
                      <Mail className="w-5 h-5 flex-shrink-0" />
                    </div>
                    <span>{contactInfo.email}</span>
                  </a>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                  >
                    <div className="bg-white/10 p-2 rounded-lg group-hover:bg-accent transition-colors">
                      <Phone className="w-5 h-5 flex-shrink-0" />
                    </div>
                    <span>{contactInfo.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 mt-10 md:mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 order-2 md:order-1 text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} TF Edilservice Sagl.<br className="md:hidden" /> Tutti i diritti riservati.
            </p>
            <div className="flex gap-6 mt-2 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termini di Servizio
              </Link>
              <button 
                onClick={() => window.dispatchEvent(new Event("open-cookie-preferences"))}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Preferenze Cookie
              </button>
            </div>
          </div>
          
          <a 
            href="https://www.vudu.ch" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 text-gray-400 hover:text-white text-sm transition-colors order-1 md:order-2 group"
          >
            <span className="font-medium">Sviluppato con</span>
            <img 
              src="https://www.vudu.ch/images/vudu-logo.svg" 
              alt="Vudu" 
              className="h-[30px] brightness-0 invert opacity-100 transition-transform group-hover:scale-105" 
            />
          </a>
        </div>
      </div>
    </footer>
  );
}