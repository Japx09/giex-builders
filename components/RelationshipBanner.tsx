"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Heart } from "lucide-react";

export default function RelationshipBanner() {
  return (
    <section className="py-12 md:py-20 max-w-7xl mx-auto px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-3xl md:rounded-[40px] overflow-hidden min-h-[460px] md:min-h-[540px] flex items-center shadow-card border border-[#E2E0D8]"
      >
        {/* Full-width collaboration photo background */}
        <Image
          src="/images/banner-consultation.jpg"
          alt="Giex Builders team reviewing blueprint solutions with clients"
          fill
          className="object-cover object-center"
        />
        {/* Soft dark overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

        {/* Content Overlay */}
        <div className="relative z-10 p-8 sm:p-12 md:p-16 lg:p-20 max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 bg-[#FACC15] text-[#0F0F0F] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-6 shadow-sm">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>DIRECT CLIENT CARE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold leading-[1.15] tracking-tight text-white">
            Tailored to your family&apos;s dreams &amp; engineered for lifelong confidence.
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#CCCCCC] leading-relaxed max-w-xl font-normal">
            We don&apos;t just build houses — we safeguard your hard-earned investment. Experience the confidence of working directly with a civil engineer who genuinely listens.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link href="#contact" className="btn-primary group flex items-center gap-2">
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Quick rating metric */}
            <div className="flex items-center gap-2 text-sm text-[#CCCCCC]">
              <div className="flex text-[#FACC15]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-bold text-white">5.0</span>
              <span>(17 Verified Google Reviews)</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
