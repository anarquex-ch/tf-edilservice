"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, X, Settings } from "lucide-react";
import Link from "next/link";

type ConsentType = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<ConsentType>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if consent was already given
    const storedConsent = localStorage.getItem("tf_cookie_consent");
    if (!storedConsent) {
      // Small delay so it doesn't pop up instantly on page load, feeling more natural
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    } else {
      setConsent(JSON.parse(storedConsent));
    }
  }, []);

  useEffect(() => {
    const handleOpenPreferences = () => {
      setShowDetails(true);
    };

    window.addEventListener("open-cookie-preferences", handleOpenPreferences);
    return () => window.removeEventListener("open-cookie-preferences", handleOpenPreferences);
  }, []);

  const handleAcceptAll = () => {
    const allConsent = { necessary: true, analytics: true, marketing: true, preferences: true };
    setConsent(allConsent);
    localStorage.setItem("tf_cookie_consent", JSON.stringify(allConsent));
    setIsVisible(false);
    setShowDetails(false);
    // Future integration: trigger GTM/Analytics consent update here
  };

  const handleRejectAll = () => {
    const minConsent = { necessary: true, analytics: false, marketing: false, preferences: false };
    setConsent(minConsent);
    localStorage.setItem("tf_cookie_consent", JSON.stringify(minConsent));
    setIsVisible(false);
    setShowDetails(false);
    // Future integration: trigger GTM/Analytics consent update here
  };

  const handleSavePreferences = () => {
    localStorage.setItem("tf_cookie_consent", JSON.stringify(consent));
    setIsVisible(false);
    setShowDetails(false);
    // Future integration: trigger GTM/Analytics consent update here
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {/* Mini Banner */}
      {isVisible && !showDetails && (
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 150, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-6 pointer-events-none"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="bg-[#2A2A2A] border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col lg:flex-row items-start lg:items-center gap-6 pointer-events-auto backdrop-blur-xl relative overflow-hidden">
              
              {/* Subtle background glow */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />

              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-2 text-white font-bold text-lg">
                  <Shield className="w-5 h-5 text-accent" />
                  <span>Proteggiamo i tuoi dati (LPD & GDPR)</span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed max-w-3xl">
                  Questo sito utilizza cookie tecnici necessari per il corretto funzionamento e, previo tuo consenso, cookie analitici e di profilazione per migliorare l'esperienza di navigazione. Conformemente alla <strong>nuova LPD Svizzera</strong> e al <strong>GDPR</strong>, puoi gestire le tue preferenze liberamente.
                </p>
                <div className="flex items-center gap-4 pt-1">
                  <Link href="/privacy" className="text-accent text-sm hover:underline underline-offset-4 transition-all">
                    Informativa Privacy
                  </Link>
                  <Link href="/privacy#cookie" className="text-accent text-sm hover:underline underline-offset-4 transition-all">
                    Cookie Policy
                  </Link>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-row gap-3 w-full lg:w-auto shrink-0 mt-4 lg:mt-0">
                <button
                  onClick={() => setShowDetails(true)}
                  className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-colors text-sm font-medium whitespace-nowrap"
                >
                  Personalizza
                </button>
                <button
                  onClick={handleRejectAll}
                  className="px-5 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors text-sm font-medium whitespace-nowrap"
                >
                  Solo Necessari
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-3 rounded-xl bg-accent text-white hover:bg-accent/90 transition-colors text-sm font-bold shadow-[0_0_20px_rgba(243,106,4,0.3)] whitespace-nowrap"
                >
                  Accetta Tutti
                </button>
              </div>

            </div>
          </div>
        </motion.div>
      )}

      {/* Detailed Modal */}
      {showDetails && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => {
              if (!isVisible) setShowDetails(false); // Only allow closing if banner is already hidden (meaning they are editing preferences from footer)
              // If banner is visible, they must make a choice.
            }}
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative bg-[#2A2A2A] border border-white/10 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Settings className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Centro Preferenze Privacy</h2>
                  <p className="text-xs text-white/50 mt-1">Conforme LPD (CH) e GDPR (UE)</p>
                </div>
              </div>
              {/* Only show close button if the banner has already been dismissed before */}
              {!isVisible && (
                <button 
                  onClick={() => setShowDetails(false)}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto flex-1 space-y-4 custom-scrollbar">
               <p className="text-white/70 text-sm mb-6 leading-relaxed">
                 La trasparenza è il nostro standard. Gestisci l'utilizzo dei tuoi dati scegliendo quali categorie di cookie autorizzare. I cookie strettamente necessari sono sempre attivi per garantire il funzionamento base del portale.
               </p>

               {/* Categories */}
               <div className="space-y-3">
                 
                 {/* Necessary */}
                 <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                   <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                     <div>
                       <h3 className="text-white font-semibold flex items-center gap-2">
                         <Shield className="w-4 h-4 text-emerald-400" />
                         Strettamente Necessari
                       </h3>
                       <p className="text-white/50 text-sm mt-2 leading-relaxed">Questi cookie sono essenziali per il funzionamento del sito web e non possono essere disattivati nei nostri sistemi. Solitamente vengono impostati solo in risposta ad azioni da te effettuate che costituiscono una richiesta di servizi, come l'impostazione delle preferenze di privacy.</p>
                     </div>
                     <div className="shrink-0 mt-1 self-start">
                       <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider bg-emerald-400/10 px-3 py-1.5 rounded-full border border-emerald-400/20">Sempre Attivi</span>
                     </div>
                   </div>
                 </div>

                 {/* Analytics */}
                 <div className="bg-white/5 rounded-2xl p-5 border border-white/5 transition-colors hover:bg-white/10">
                   <label className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 cursor-pointer group">
                     <div className="flex-1">
                       <h3 className="text-white font-semibold group-hover:text-accent transition-colors">Statistiche e Analisi</h3>
                       <p className="text-white/50 text-sm mt-2 leading-relaxed">Permettono di contare le visite e le fonti di traffico per misurare e migliorare le prestazioni del sito. Ci aiutano a sapere quali sono le pagine più visitate e a capire come i visitatori si muovono nel portale in modo aggregato e anonimo.</p>
                     </div>
                     <div className="shrink-0 mt-1 self-start relative flex items-center">
                       <input 
                         type="checkbox" 
                         className="sr-only" 
                         checked={consent.analytics}
                         onChange={(e) => setConsent(p => ({ ...p, analytics: e.target.checked }))}
                       />
                       <div className={`w-12 h-6 rounded-full transition-colors duration-300 ease-in-out ${consent.analytics ? 'bg-accent' : 'bg-white/20 group-hover:bg-white/30'}`}>
                         <div className={`w-5 h-5 rounded-full bg-white absolute top-0.5 shadow-sm transition-transform duration-300 ease-in-out ${consent.analytics ? 'translate-x-6' : 'translate-x-0.5'}`} />
                       </div>
                     </div>
                   </label>
                 </div>

                 {/* Marketing */}
                 <div className="bg-white/5 rounded-2xl p-5 border border-white/5 transition-colors hover:bg-white/10">
                   <label className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 cursor-pointer group">
                     <div className="flex-1">
                       <h3 className="text-white font-semibold group-hover:text-accent transition-colors">Marketing e Profilazione</h3>
                       <p className="text-white/50 text-sm mt-2 leading-relaxed">Possono essere impostati tramite il nostro sito dai nostri partner pubblicitari. Vengono utilizzati per costruire un profilo dei tuoi interessi e mostrarti annunci pertinenti su altri siti. Non memorizzano direttamente informazioni personali, ma si basano sull'identificazione univoca del browser e del dispositivo.</p>
                     </div>
                     <div className="shrink-0 mt-1 self-start relative flex items-center">
                       <input 
                         type="checkbox" 
                         className="sr-only" 
                         checked={consent.marketing}
                         onChange={(e) => setConsent(p => ({ ...p, marketing: e.target.checked }))}
                       />
                       <div className={`w-12 h-6 rounded-full transition-colors duration-300 ease-in-out ${consent.marketing ? 'bg-accent' : 'bg-white/20 group-hover:bg-white/30'}`}>
                         <div className={`w-5 h-5 rounded-full bg-white absolute top-0.5 shadow-sm transition-transform duration-300 ease-in-out ${consent.marketing ? 'translate-x-6' : 'translate-x-0.5'}`} />
                       </div>
                     </div>
                   </label>
                 </div>

                 {/* Preferences */}
                 <div className="bg-white/5 rounded-2xl p-5 border border-white/5 transition-colors hover:bg-white/10">
                   <label className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 cursor-pointer group">
                     <div className="flex-1">
                       <h3 className="text-white font-semibold group-hover:text-accent transition-colors">Preferenze e Funzionalità</h3>
                       <p className="text-white/50 text-sm mt-2 leading-relaxed">Consentono al sito web di fornire funzionalità e personalizzazioni avanzate, come ad esempio ricordare la lingua selezionata o la regione di appartenenza. Se non autorizzati, alcuni servizi potrebbero non funzionare correttamente.</p>
                     </div>
                     <div className="shrink-0 mt-1 self-start relative flex items-center">
                       <input 
                         type="checkbox" 
                         className="sr-only" 
                         checked={consent.preferences}
                         onChange={(e) => setConsent(p => ({ ...p, preferences: e.target.checked }))}
                       />
                       <div className={`w-12 h-6 rounded-full transition-colors duration-300 ease-in-out ${consent.preferences ? 'bg-accent' : 'bg-white/20 group-hover:bg-white/30'}`}>
                         <div className={`w-5 h-5 rounded-full bg-white absolute top-0.5 shadow-sm transition-transform duration-300 ease-in-out ${consent.preferences ? 'translate-x-6' : 'translate-x-0.5'}`} />
                       </div>
                     </div>
                   </label>
                 </div>

               </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/10 bg-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
               <Link href="/privacy" className="text-white/50 hover:text-white text-sm transition-colors text-center sm:text-left">
                 Leggi l'Informativa Privacy Completa
               </Link>
               <div className="flex gap-3 w-full sm:w-auto">
                 <button
                   onClick={handleRejectAll}
                   className="flex-1 sm:flex-none px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors text-sm font-medium"
                 >
                   Rifiuta Tutti
                 </button>
                 <button
                   onClick={handleSavePreferences}
                   className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-accent text-white hover:bg-accent/90 transition-colors text-sm font-bold shadow-[0_0_15px_rgba(243,106,4,0.3)]"
                 >
                   Salva Scelte
                 </button>
               </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
