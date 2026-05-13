"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { UtilitàItem } from "@/data/utilitaData";

interface UtilitaListProps {
  items: UtilitàItem[];
}

export default function UtilitaList({ items }: UtilitaListProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <Link 
          key={item.slug} 
          href={`/utilita/${item.slug}`}
          className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <div className="aspect-video bg-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
            <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full z-20 uppercase tracking-wider">
              {item.category}
            </div>
            <img 
              src={item.imageUrl} 
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/images/servizi/impianti-elettrici.jpg";
              }}
            />
          </div>

          <div className="p-8 flex flex-col flex-grow">
            <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(item.date).toLocaleDateString('it-CH')}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {item.readTime}
              </div>
            </div>

            <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors leading-tight">
              {item.title}
            </h3>
            
            <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
              {item.excerpt}
            </p>

            <div className="mt-auto flex items-center gap-2 text-accent font-bold text-sm">
              Leggi di più <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
