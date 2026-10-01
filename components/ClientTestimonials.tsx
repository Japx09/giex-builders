"use client";

import { motion } from "framer-motion";
import { Star, MessageSquareQuote } from "lucide-react";

export default function ClientTestimonials() {
  const testimonials = [
    {
      quote:
        "As an OFW working in Dubai, my biggest fear was sending money to contractors back home and getting cheated. Engr. Besas personally sent video updates every Friday. Our home in Kabankalan was finished right on budget with zero surprise fees!",
      client: "Mark & Eleanor D.",
      role: "OFW Homeowners (Dubai / Kabankalan)",
      rating: 5,
    },
    {
      quote:
        "Giex Builders handles construction like true professionals. When our commercial plaza encountered unexpected soil conditions, Engr. Besas redesigned the foundation without charging unfair variation fees. He puts the client first.",
      client: "Atty. Roberto V.",
      role: "Commercial Property Investor",
      rating: 5,
    },
    {
      quote:
        "The Pag-IBIG loan process felt overwhelming until Giex Builders took care of the blueprint submissions and bank paperwork for us. Now my family is living happily in our modern dream villa.",
      client: "Maria Carmela S.",
      role: "Kabankalan Resident & Teacher",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20"
      >
        <span className="badge-dark mb-4 inline-flex">
          <MessageSquareQuote className="w-3.5 h-3.5 text-[#FACC15]" />
          CLIENT STORIES
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F0F0F] tracking-tight leading-[1.12]">
          What Our Clients Say About Working With Us
        </h2>
        <p className="mt-4 text-[#525252] text-base md:text-lg font-normal">
          Real feedback from families and business partners who trusted Giex Builders with their most important investments.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#F4F3EE] border border-[#E2E0D8] flex flex-col justify-between transition-all duration-300 hover:shadow-card hover:border-[#FACC15] hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center gap-1 text-[#E5A900] mb-5 sm:mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-[#2E2E2E] leading-relaxed italic mb-6 sm:mb-8 font-normal">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            <div className="pt-5 sm:pt-6 border-t border-[#E2E0D8]">
              <h4 className="font-bold text-[#0F0F0F] text-base">{t.client}</h4>
              <p className="text-xs text-[#6B6B6B] mt-0.5">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
