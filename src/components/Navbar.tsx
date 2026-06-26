"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servizi", label: "Servizi" },
  { href: "/referenze", label: "Referenze" },
  { href: "/utilita", label: "Utilità" },
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/contatti", label: "Contatti" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const linkVariants: Variants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 md:py-4",
        isScrolled ? "md:py-2" : "md:py-4"
      )}
    >
      <div className="md:container md:mx-auto md:px-6">
        <div className={clsx(
          "bg-white/95 backdrop-blur-md shadow-lg md:rounded-full pl-0 pr-5 py-4 md:px-4 md:py-3 md:border border-b border-gray-100 md:border-white/20 transition-all duration-300",
          isScrolled && "shadow-xl"
        )}>
          <nav className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center flex-shrink-0">
              {/* Logo made larger on mobile (w-48 h-12) */}
              <div className="relative w-48 h-12 sm:w-56 sm:h-14 md:w-48 md:h-14 transition-all duration-300">
                <Image
                  src="/logo-header.svg"
                  alt="TF Edilservice"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 bg-gray-100/50 p-1 rounded-full border border-gray-200/50">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "px-5 py-2 text-sm font-medium rounded-full transition-all duration-300",
                    pathname === link.href
                      ? "bg-primary text-white shadow-md"
                      : "text-gray-600 hover:text-primary hover:bg-white/50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center">
              <Link 
                href="/preventivo" 
                className="bg-accent hover:bg-accent/90 text-white px-7 py-2.5 rounded-full font-medium transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/40 transform hover:-translate-y-0.5 active:scale-95"
              >
                Preventivo
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 text-primary active:scale-90 transition-transform"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </div>
      </div>

      {/* Premium Mobile Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-white z-[60] md:hidden flex flex-col"
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between pl-0 pr-5 py-5 border-b border-gray-100 bg-white">
              <div className="relative w-48 h-12">
                <Image
                  src="/logo-header.svg"
                  alt="TF Edilservice"
                  fill
                  className="object-contain"
                />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 text-primary active:scale-90 transition-transform"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-1 overflow-y-auto px-5 py-8 flex flex-col w-full">
              <div className="space-y-2 w-full">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    custom={i}
                    variants={linkVariants}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={clsx(
                        "block w-full text-2xl font-bold transition-all py-4 px-4 rounded-2xl",
                        pathname === link.href 
                          ? "bg-accent/10 text-accent" 
                          : "text-primary hover:bg-gray-50 active:bg-gray-100"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-auto space-y-6 pt-8 w-full"
              >
                <Link
                  href="/preventivo"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-accent text-white py-5 rounded-2xl font-bold text-center text-lg shadow-xl shadow-accent/20 block active:scale-95 transition-transform"
                >
                  Richiedi un Preventivo
                </Link>

                <div className="grid grid-cols-1 gap-3 w-full">
                  <a href="tel:+41912908570" className="flex items-center gap-4 p-4 bg-gray-50 active:bg-gray-100 rounded-2xl w-full">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-accent shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 font-medium">Chiamaci ora</p>
                      <p className="font-bold text-primary">+41 91 290 85 70</p>
                    </div>
                  </a>
                  <a href="mailto:info@tfedilservice.ch" className="flex items-center gap-4 p-4 bg-gray-50 active:bg-gray-100 rounded-2xl w-full">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-accent shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <p className="text-xs text-gray-500 font-medium truncate">Scrivici una mail</p>
                      <p className="font-bold text-primary truncate">info@tfedilservice.ch</p>
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}