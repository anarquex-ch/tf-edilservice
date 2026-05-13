"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  href?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
  href,
}: ServiceCardProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-100 p-6 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
          <Icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-xl font-semibold text-primary leading-tight">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}