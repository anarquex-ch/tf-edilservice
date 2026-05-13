"use client";

import { motion } from "framer-motion";
import { Zap, Wifi, Home, Shield, Sun, Wrench, Hammer, Users, Phone, Grid, LucideIcon, ChevronRight } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Wifi,
  Home,
  Shield,
  Sun,
  Wrench,
  Hammer,
  Users,
  Phone,
  Grid
};

interface KeyPoint {
  text: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  iconName?: string;
  title: string;
  subtitle: string;
  imageUrl?: string;
  keyPoints?: KeyPoint[];
  breadcrumb?: string | BreadcrumbItem[];
}

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
          <pattern id="page-hero-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="white" strokeWidth="0.6"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#page-hero-grid)" />
      </svg>
    </div>
  );
}

export default function PageHero({ 
  iconName, 
  title, 
  subtitle, 
  imageUrl,
  keyPoints = [],
  breadcrumb 
}: PageHeroProps) {
  const Icon = (iconName ? iconMap[iconName] : undefined) || Zap;
  
  // Immagine di default se non fornita
  const finalImageUrl = imageUrl || "/images/servizi/impianti-elettrici.jpg";
  
  // SEO Structured Data
  const breadcrumbListSchema = Array.isArray(breadcrumb) ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumb.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href ? `https://www.tf-edilservice.ch${item.href}` : undefined
    }))
  } : null;

  return (
    <>
      {breadcrumbListSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }}
        />
      )}
      <section 
      className="relative pt-28 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 flex items-center bg-[#383837] overflow-hidden"
      style={{
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)'
      }}
    >
      {/* GRID OVERLAY */}
      <GridBackground />

      {/* 
        RIGHT SIDE IMAGE (Desktop)
        It covers the right side and uses clip-path for the diagonal cut.
      */}
      <div 
        className="hidden lg:block absolute inset-y-0 right-0 w-[55%] z-0"
        style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
      >
        <img 
          src={finalImageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
          loading="eager"
          onError={(e) => {
            e.currentTarget.src = "/images/servizi/impianti-elettrici.jpg";
          }}
        />

        {/* Subtle Overlay for text contrast */}
        <div className="absolute inset-0 bg-[#383837]/40" />
        <div className="absolute inset-0 bg-accent/10" />

        
        {/* Electricity Animation Overlay */}
        <ElectricityAnimation />
        
        {/* Subtle dark gradient from the left edge to blend with the text section */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#383837] via-[#383837]/20 to-transparent" />
      </div>

      {/* 
        MOBILE/TABLET IMAGE BACKGROUND 
        Falls back to a full background with gradient overlay on smaller screens.
      */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <img 
          src={finalImageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
          loading="eager"
          onError={(e) => {
            e.currentTarget.src = "/images/servizi/impianti-elettrici.jpg";
          }}
        />
        
        
        {/* Electricity Animation Overlay for Mobile */}
        <ElectricityAnimation />
        
        <div className="absolute inset-0 bg-[#383837]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#383837] via-[#383837]/40 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl">
          
          {/* Pill Badge / Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
              <Icon className="w-4 h-4 text-accent mr-1" />
              <nav aria-label="breadcrumb">
                <ol className="flex items-center text-sm font-medium text-white/80">
                  {Array.isArray(breadcrumb) ? (
                    breadcrumb.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        {item.href ? (
                          <Link href={item.href} className="hover:text-accent/80 transition-colors">
                            {item.label}
                          </Link>
                        ) : (
                          <span className="text-white font-semibold">{item.label}</span>
                        )}
                        {idx < breadcrumb.length - 1 && (
                          <span className="mx-2 text-white/40">/</span>
                        )}
                      </li>
                    ))
                  ) : (
                    <li><span className="text-white font-semibold">{breadcrumb || "Servizio"}</span></li>
                  )}
                </ol>
              </nav>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-bold text-white tracking-tight leading-[1.1] mb-6"
          >
            {title}
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/70 mb-10 leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {/* Key Points */}
          {keyPoints.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-3"
            >
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-white/60 text-sm font-medium">{point.text}</span>
                </div>
              ))}
            </motion.div>
          )}
          
        </div>
      </div>
    </section>
    </>
  );
}