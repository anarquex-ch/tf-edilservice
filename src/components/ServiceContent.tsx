"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Users, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";
import CTASection from "./CTASection";
import ServiceFAQ from "./ServiceFAQ";

interface Feature {
  title: string;
  description: string;
  slug?: string;
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface TargetAudience {
  title: string;
  description: string;
  slug?: string;
}

interface ServiceContentProps {
  definition: string;
  features: Feature[];
  benefits: string[];
  serviceName: string;
  processSteps?: ProcessStep[];
  faq?: FAQItem[];
  targetAudience?: TargetAudience[];
  extraContent?: React.ReactNode;
  parentSlug?: string;
  hideFeatures?: boolean;
}

export default function ServiceContent({
  definition,
  features,
  benefits,
  serviceName,
  processSteps = [],
  faq = [],
  targetAudience = [],
  extraContent,
  parentSlug,
  hideFeatures = false,
}: ServiceContentProps) {
  return (
    <>
      {/* Definition Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-primary mb-6">Cosa sono gli {serviceName}?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{definition}</p>
          </div>
        </div>

        {/* Subtle background image on the right */}
        <div className="absolute right-0 top-0 bottom-0 w-1/4 md:w-1/3 lg:w-1/4 opacity-[0.2] pointer-events-none hidden sm:block">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: 'url(/images/servizi/impianti-elettrici.jpg)',
              maskImage: 'linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))',
              WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))'
            }}
          />
        </div>
      </section>

      {/* Target Audience Section */}
      {targetAudience.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">A Chi Ci Rivolgiamo</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {targetAudience.map((target, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <Users className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-3">{target.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{target.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {!hideFeatures && features.length > 0 && (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">I Nostri Servizi</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const CardContent = (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`bg-white rounded-xl p-6 shadow-sm transition-all group ${
                    feature.slug ? 'cursor-pointer hover:shadow-md hover:border-accent/20 border border-transparent hover:-translate-y-1' : 'hover:shadow-md'
                  }`}
                >
                  <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{feature.description}</p>
                  {feature.slug && (
                    <span className="text-accent text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all mt-4">
                      Scopri di più <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </span>
                  )}
                </motion.div>
              );

              if (feature.slug && parentSlug) {
                return (
                  <Link key={index} href={`/servizi/${parentSlug}/${feature.slug}`} className="block">
                    {CardContent}
                  </Link>
                );
              }
              
              return CardContent;
            })}
          </div>
        </div>
      </section>
      )}

      {/* Process Steps Section */}
      {processSteps.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16 text-center tracking-tight">Il Nostro Processo di Lavoro</h2>
            <div className="relative">
              {/* Desktop connecting line */}
              <div className="hidden lg:block absolute top-10 left-0 w-full h-[2px] bg-gray-100 -z-10" />
              
              {/* Mobile connecting line */}
              <div className="lg:hidden absolute left-[31px] sm:left-[39px] top-4 bottom-4 w-[2px] bg-gray-100 -z-10" />
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-12 lg:gap-6">
                {processSteps.map((process, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex lg:flex-col items-start lg:items-center gap-6 lg:gap-4 text-left lg:text-center group"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-20 lg:h-20 shrink-0 bg-white border-[6px] border-gray-50 text-accent rounded-full flex items-center justify-center text-xl font-bold shadow-sm group-hover:border-accent/20 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      {process.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center tracking-tight">Perché Sceglierci</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-4 bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 shrink-0 bg-[#383837]/5 rounded-2xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <span className="text-gray-700 font-medium leading-relaxed pt-3 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faq.length > 0 && <ServiceFAQ faq={faq} />}

      {extraContent}

      <CTASection />
    </>
  );
}