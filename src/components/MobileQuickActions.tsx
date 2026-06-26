"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function MobileQuickActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostra la barra solo dopo uno scroll di 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[45] md:hidden"
        >
          <div className="bg-primary/95 backdrop-blur-lg border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.15)] flex items-stretch h-[60px]">
            <a 
              href="tel:+41912908570" 
              className="flex-1 flex flex-col items-center justify-center gap-1 hover:bg-white/10 transition-colors border-r border-white/10"
            >
              <Phone className="w-[22px] h-[22px] text-white" />
              <span className="text-[10px] font-bold text-white uppercase tracking-wider">Chiama</span>
            </a>
            
            <Link 
              href="/preventivo" 
              className="flex-1 flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 transition-colors px-4"
            >
              <Calendar className="w-[22px] h-[22px] text-white" />
              <span className="text-xs font-black text-white uppercase tracking-wider">Preventivo</span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
