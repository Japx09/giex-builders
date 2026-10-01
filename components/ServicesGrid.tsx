"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, ArrowUpRight, Wrench } from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      title: "Residential Turnkey Homes",
      subtitle: "For Local Families & OFWs",
      desc: "Complete design-build from blueprints and municipal permits to interior fixtures. Includes weekly live video walk-throughs and 100% fixed pricing.",
      image: "/images/project-villa-kabankalan.jpg",
      badge: "Flagship Service",
    },
    {
      title: "Commercial & Mixed-Use Plazas",
      subtitle: "Engineered for Long-Term ROI",
      desc: "Multi-tenant spaces built for maximum safety, rapid occupancy clearances, and clean modern aesthetics that attract high-value tenants.",
      image: "/images/project-commercial-plaza.jpg",
      badge: "Commercial Grade",
    },
    {
      title: "Steel Structures & Solar Roofs",
      subtitle: "Storm-Tested & Energy Efficient",
      desc: "Pre-engineered structural steel warehouses and commercial solar roof integrations that lower monthly utility overhead by up to 60%.",
      image: "/images/project-steel-warehouse.jpg",
      badge: "Clean Energy",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 max-w-7xl mx-auto px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-14 md:mb-20"
      >
        <span className="badge-dark mb-4 inline-flex">
          <Wrench className="w-3.5 h-3.5 text-[#FACC15]" />
          OUR EXPERTISE
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F0F0F] tracking-tight leading-[1.12]">
          Client-Centric Services Designed for Lasting Value
        </h2>
        <p className="mt-4 text-[#525252] text-base md:text-lg font-normal">
          Whether building your first family home or investing in a commercial plaza, we serve as your trusted technical partner from concept to turnover.
        </p>
      </motion.div>

      {/* 3 Large Image Cards with Yellow Theme */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="group relative h-[480px] sm:h-[540px] rounded-3xl overflow-hidden shadow-card border border-[#E2E0D8] flex flex-col justify-between p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Background Image */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark gradient overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />

            {/* Top row: Badge and Plus Button */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20">
                {item.badge}
              </span>
              <button
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 group-hover:bg-[#FACC15] group-hover:text-[#0F0F0F] group-hover:rotate-45"
                aria-label={`Explore ${item.title}`}
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Content with Yellow Highlights */}
            <div className="relative z-10 text-white">
              <span className="text-xs uppercase tracking-wider text-[#FACC15] font-bold block mb-1">
                {item.subtitle}
              </span>
              <h3 className="text-2xl sm:text-[26px] font-bold leading-tight mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-sm text-[#CCCCCC] leading-relaxed mb-5 font-normal">
                {item.desc}
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-[#FACC15] transition-colors"
              >
                <span>Consult with Engr. Besas</span>
                <ArrowUpRight className="w-4 h-4 text-[#FACC15]" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
