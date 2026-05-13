"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { reviewsData } from "@/data/reviewsData";

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function ReviewSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
            Cosa dicono i nostri Clienti
          </h2>
          <div className="flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-full border border-gray-100">
            <GoogleLogo />
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
              ))}
            </div>
            <span className="font-semibold text-gray-900 text-sm">4.9/5</span>
            <span className="text-gray-500 text-sm hidden sm:inline">su oltre 120 recensioni</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsData.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-50 p-8 rounded-[2rem] flex flex-col hover:bg-gray-100/80 transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>
                <GoogleLogo />
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed flex-1 text-[15px]">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-gray-900 shadow-sm border border-gray-100 shrink-0">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{review.author}</p>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
