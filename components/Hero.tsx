"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const yEven = useTransform(scrollY, [0, 600], [0, -20]);
  const yOdd = useTransform(scrollY, [0, 600], [0, 20]);

  const images = [
    {
      src: "/images/client-meeting-1.jpg",
      alt: "Engineer and homeowner exploring design options together",
      tag: "Honest Consultation",
    },
    {
      src: "/images/happy-homeowner.jpg",
      alt: "Happy homeowner receiving keys to new turnkey villa",
      tag: "Family Dream Homes",
    },
    {
      src: "/images/team-collaboration.jpg",
      alt: "Active engineering team collaborating on site",
      tag: "Direct Supervision",
    },
    {
      src: "/images/client-partnership.jpg",
      alt: "Long-term partnership with commercial business owners",
      tag: "Commercial Projects",
    },
    {
      src: "/images/project-villa-kabankalan.jpg",
      alt: "Modern turnkey residential home in Kabankalan",
      tag: "Turnkey Quality",
    },
  ];

  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      {/* Subtle warm ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FACC15]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Top Badge with subtle pulse */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="badge-dark">
            <span className="w-2 h-2 rounded-full bg-[#FACC15] animate-pulse" />
            CLIENT-FIRST CIVIL ENGINEERING
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0F0F0F] leading-[1.1] sm:leading-[1.08] tracking-[-0.03em] max-w-4xl"
        >
          Building Partnerships for Modern Living &amp; Business
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-[#525252] leading-relaxed max-w-2xl font-normal"
        >
          We remove the stress, fear of hidden costs, and guesswork from construction. Led personally by licensed Civil Engineer Giel Rex Besas in Kabankalan City, we focus on genuine client care, transparent milestones, and structures built to last.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-9 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <Link href="#contact" className="btn-primary group flex items-center justify-center gap-2 w-full sm:w-auto">
            <span>Let&apos;s Talk</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link href="#process" className="btn-secondary justify-center text-center w-full sm:w-auto">
            <span>How We Work</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#5A5A5A] mt-1 sm:mt-0 sm:ml-2">
            <CheckCircle2 className="w-4 h-4 text-[#FACC15] shrink-0" />
            <span>Zero obligation consultation</span>
          </div>
        </motion.div>
      </div>

      {/* Aligned Arc-Shaped Visual Gallery with subtle scroll-driven parallax */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mt-12 md:mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* On mobile (<sm), horizontal smooth snap carousel. On tablet & desktop (sm+), elegant grid */}
        <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 items-end overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 px-2 sm:px-0 snap-x scrollbar-none">
          {images.map((item, index) => (
            <motion.div
              key={index}
              style={{ y: index % 2 === 0 ? yEven : yOdd }}
              className={`relative overflow-hidden group shadow-card border border-[#EAE8E1] transition-all duration-300 hover:-translate-y-2 shrink-0 snap-center w-[210px] sm:w-auto ${
                index === 4 ? "sm:col-span-2 md:col-span-1" : ""
              } ${
                index % 2 === 0
                  ? "h-[290px] sm:h-[330px] md:h-[400px] arch-card"
                  : "h-[250px] sm:h-[290px] md:h-[360px] arch-card"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 210px, (max-width: 1024px) 33vw, 20vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="absolute bottom-4 left-3 right-3 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-black/40 backdrop-blur-md px-3 py-1 rounded-full inline-block border border-white/10">
                  {item.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
