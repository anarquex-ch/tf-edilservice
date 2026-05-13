"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faq: FAQItem[];
}

export default function ServiceFAQ({ faq }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 tracking-tight">
            Domande Frequenti
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Risposte chiare alle domande più comuni. Per qualsiasi altro dubbio, siamo a tua disposizione.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faq.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-gray-50 rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 sm:p-8 text-left transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 bg-white rounded-full flex items-center justify-center mt-0.5 shadow-sm">
                    <HelpCircle className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-semibold text-lg text-primary pr-4 sm:pr-8 pt-1.5 leading-snug">
                    {item.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-10 h-10 shrink-0 bg-white rounded-full flex items-center justify-center shadow-sm"
                >
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                      <div className="pl-0 sm:pl-14 text-gray-600 leading-relaxed text-lg">
                        {item.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}