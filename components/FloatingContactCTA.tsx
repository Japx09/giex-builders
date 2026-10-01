"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X } from "lucide-react";

export default function FloatingContactCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450 && !dismissed) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 p-2 pr-4 bg-[#0F0F0F] text-white rounded-full shadow-2xl border border-white/10 backdrop-blur-md"
        >
          <a
            href="https://wa.me/639460503038?text=Hello%20Engr.%20Besas,%20I%20am%20exploring%20a%20construction%20project%20in%20Negros."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 group"
          >
            <div className="relative w-9 h-9 rounded-full bg-[#FACC15] flex items-center justify-center text-[#0F0F0F] shrink-0 font-bold shadow-sm transition-transform duration-300 group-hover:scale-105">
              <MessageCircle className="w-4 h-4 fill-current" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#0F0F0F]" />
            </div>
            <div className="text-left">
              <p className="text-[11px] uppercase tracking-wider text-[#A1A1A1] font-semibold leading-tight">
                Engr. Besas Available
              </p>
              <p className="text-xs font-bold text-white group-hover:text-[#FACC15] transition-colors leading-tight">
                Chat on WhatsApp
              </p>
            </div>
          </a>

          <div className="w-px h-5 bg-white/15 mx-1" />

          <a
            href="tel:09460503038"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Direct Phone Call"
          >
            <Phone className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setDismissed(true)}
            className="w-6 h-6 rounded-full text-[#666666] hover:text-white flex items-center justify-center transition-colors ml-0.5"
            aria-label="Dismiss shortcut"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
