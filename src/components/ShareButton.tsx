"use client";

import { Share2, Check } from "lucide-react";
import { useState } from "react";

export default function ShareButton({ title, url }: { title: string, url: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  };

  return (
    <button 
      onClick={handleShare}
      className={`p-3 rounded-xl transition-all flex items-center gap-2 font-bold ${
        copied 
        ? "bg-green-500 text-white" 
        : "bg-gray-50 text-primary hover:bg-accent hover:text-white"
      }`}
      title="Condividi questa risorsa"
    >
      {copied ? <Check className="w-5 h-5" /> : <Share2 className="w-5 h-5" />}
      <span className="text-sm">{copied ? "Copiato!" : "Condividi"}</span>
    </button>
  );
}
