"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap } from "lucide-react";

function ElectricityAnimation() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-20">
      <svg 
        className="absolute inset-0 w-full h-full opacity-60" 
        preserveAspectRatio="none" 
        viewBox="0 0 100 100"
      >
        <defs>
          <filter id="electricity-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Bolt 1 */}
        <motion.path
          d="M 15 0 L 30 25 L 20 45 L 40 70 L 25 100"
          fill="none"
          stroke="#F36A04"
          strokeWidth="0.5"
          filter="url(#electricity-glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut", repeatDelay: 1.5 }}
        />
        
        {/* Bolt 2 */}
        <motion.path
          d="M 50 0 L 40 30 L 60 55 L 45 80 L 70 100"
          fill="none"
          stroke="#F36A04"
          strokeWidth="0.3"
          filter="url(#electricity-glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", repeatDelay: 2, delay: 0.5 }}
        />
        
        {/* Bolt 3 */}
        <motion.path
          d="M 75 0 L 85 20 L 70 40 L 90 65 L 75 100"
          fill="none"
          stroke="#F36A04"
          strokeWidth="0.8"
          filter="url(#electricity-glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeOut", repeatDelay: 1, delay: 1.5 }}
        />
      </svg>
    </div>
  );
}

function GridBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-[0.06]">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="white" strokeWidth="0.6"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>
    </div>
  );
}

export default function Hero() {
  const imageUrl = "/images/home-hero.jpg"; // Immagine da caricare
  const finalImageUrl = imageUrl || "/images/servizi/impianti-elettrici.jpg";

  return (
    <section 
      className="relative pt-28 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 flex items-center bg-[#383837] overflow-hidden min-h-screen"
      style={{
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)'
      }}
    >
      {/* GRID OVERLAY */}
      <GridBackground />

      {/* RIGHT SIDE IMAGE (Desktop) */}
      <div 
        className="hidden lg:block absolute inset-y-0 right-0 w-[55%] z-0"
        style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
      >
        <img 
          src={finalImageUrl} 
          alt="TF Edilservice Sagl" 
          className="w-full h-full object-cover"
          loading="eager"
          onError={(e) => {
            e.currentTarget.src = "/images/servizi/impianti-elettrici.jpg";
          }}
        />

        {/* Subtle Overlay for text contrast */}
        <div className="absolute inset-0 bg-[#383837]/40" />
        <div className="absolute inset-0 bg-accent/10" />
        
        <ElectricityAnimation />
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#383837] via-[#383837]/20 to-transparent" />
      </div>

      {/* MOBILE IMAGE BACKGROUND */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <img 
          src={finalImageUrl} 
          alt="TF Edilservice Sagl" 
          className="w-full h-full object-cover"
          loading="eager"
          onError={(e) => {
            e.currentTarget.src = "/images/servizi/impianti-elettrici.jpg";
          }}
        />
        <ElectricityAnimation />
        <div className="absolute inset-0 bg-[#383837]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#383837] via-[#383837]/40 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-accent font-medium text-sm backdrop-blur-md">
                <Zap className="w-4 h-4" />
                Servizi Professionali in Ticino
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Impianti Elettrici
              <br />
              <span className="text-accent">e Opere Edili</span>
              <br />
              di Qualità
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/70 mb-8 leading-relaxed"
            >
              TF Edilservice Sagl offre servizi completi di impiantistica
              elettrica, domotica, sicurezza e integrazione impiantistica per
              garantire la massima qualità e affidabilità.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/servizi"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-4 bg-accent text-white font-bold rounded-xl hover:bg-accent/90 transition-all hover:shadow-lg active:scale-95"
              >
                I nostri Servizi
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/preventivo"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white hover:text-[#383837] transition-all backdrop-blur-sm active:scale-95"
              >
                Preventivo
              </Link>
            </motion.div>

            {/* MOBILE SERVICE CARDS (Only visible on small screens) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-3 mt-12 lg:hidden"
            >
              <Link href="/servizi/impianti-elettrici" className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col gap-3 active:bg-white/20 transition-all">
                <Zap className="w-6 h-6 text-accent" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Elettrico</span>
              </Link>
              <Link href="/servizi/domotica" className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col gap-3 active:bg-white/20 transition-all">
                <svg className="w-6 h-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="text-xs font-bold text-white uppercase tracking-wider">Domotica</span>
              </Link>
              <Link href="/servizi/sicurezza" className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col gap-3 active:bg-white/20 transition-all">
                <svg className="w-6 h-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-xs font-bold text-white uppercase tracking-wider">Sicurezza</span>
              </Link>
              <Link href="/servizi/energie-rinnovabili" className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col gap-3 active:bg-white/20 transition-all">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-xs font-bold text-white uppercase tracking-wider">Solare</span>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT SIDE CARD (Floating above the diagonal image) */}
          <div className="hidden lg:block relative pl-12 lg:pl-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Premium Glassmorphism Card */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 relative overflow-hidden group hover:border-accent/30 transition-all duration-500">
                {/* Subtle glow effect behind card */}
                <div className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-accent/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                
                <div className="relative w-64 h-32 mx-auto mb-8 brightness-0 invert opacity-90 transition-opacity hover:opacity-100">
                  <Image
                    src="/logo-TF-edilservice.svg"
                    alt="TF Edilservice Sagl"
                    fill
                    className="object-contain"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <Link href="/servizi/impianti-elettrici" className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3 text-left hover:bg-white/10 hover:border-accent/50 transition-all group">
                    <Zap className="w-7 h-7 text-accent shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-white/90 leading-tight group-hover:text-white">Elettrico</span>
                  </Link>
                  <Link href="/servizi/domotica" className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3 text-left hover:bg-white/10 hover:border-accent/50 transition-all group">
                    <svg className="w-7 h-7 text-white/80 shrink-0 group-hover:text-white group-hover:scale-110 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="text-sm font-medium text-white/90 leading-tight group-hover:text-white">Domotica</span>
                  </Link>
                  <Link href="/servizi/sicurezza" className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3 text-left hover:bg-white/10 hover:border-accent/50 transition-all group">
                    <svg className="w-7 h-7 text-white/80 shrink-0 group-hover:text-white group-hover:scale-110 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-sm font-medium text-white/90 leading-tight group-hover:text-white">Sicurezza</span>
                  </Link>
                  <Link href="/servizi/energie-rinnovabili" className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3 text-left hover:bg-white/10 hover:border-accent/50 transition-all group">
                    <svg className="w-7 h-7 text-accent shrink-0 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-sm font-medium text-white/90 leading-tight group-hover:text-white">Fotovoltaico</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}