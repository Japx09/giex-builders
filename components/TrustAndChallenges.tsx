"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, HeartHandshake, ShieldCheck, AlertCircle } from "lucide-react";

export default function TrustAndChallenges() {
  const trustPillars = [
    { label: "PICE Licensed", sub: "Civil Engineer Supervised" },
    { label: "Pag-IBIG Fund", sub: "Accredited Construction Partner" },
    { label: "5.0 ★ Rating", sub: "17 Verified Client Reviews" },
    { label: "Kabankalan Native", sub: "Coloso St. Headquarters" },
    { label: "Fixed-Price Guarantee", sub: "Zero Unplanned Overruns" },
  ];

  const barriers = [
    {
      pain: "Surprise Cost Overruns",
      painDesc: "Unlicensed contractors who give vague bids and demand additional funds midway through the build.",
      solution: "100% Itemized Bill of Materials with guaranteed contract pricing locked in before breaking ground.",
    },
    {
      pain: "Unresponsive Project Leads",
      painDesc: "Weeks without clear updates, leaving OFW families and busy owners stressed and in the dark.",
      solution: "Direct WhatsApp & Viber channel with Engr. Besas + scheduled weekly photo and video progress reports.",
    },
    {
      pain: "Compromised Structural Integrity",
      painDesc: "Contractors quietly substituting thinner rebar or diluted concrete batches to pad margins.",
      solution: "Engineered under the National Structural Code of the Philippines with third-party tested concrete pours.",
    },
  ];

  return (
    <section id="why-giex" className="py-12 md:py-20">
      {/* ───────────────────────────────────────────────
          PART 1: Dark Trust Banner (Aligned Grid)
      ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#0F0F0F] text-white rounded-3xl md:rounded-[36px] p-8 md:p-14 lg:p-16 relative overflow-hidden border border-white/5"
        >
          {/* Subtle golden ambient accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FACC15]/10 blur-[110px] pointer-events-none" />

          <div className="text-center max-w-3xl mx-auto">
            <span className="badge-dark mb-5 inline-flex">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FACC15]" />
              INSTITUTIONAL CREDENTIALS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]">
              Built on Trust with Homeowners, OFWs &amp; Local Businesses
            </h2>
            <p className="mt-4 text-[#A1A1A1] text-base md:text-lg font-normal">
              Building a structure is usually a family&apos;s largest life investment. We honor that responsibility through rigorous civil engineering and personal accountability.
            </p>
          </div>

          {/* Trust badges row */}
          <div className="mt-12 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 text-center">
            {trustPillars.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#FACC15]/40 transition-colors duration-300"
              >
                <span className="font-bold text-base sm:text-lg text-white">{item.label}</span>
                <span className="text-xs text-[#8A8A8A] mt-1">{item.sub}</span>
              </div>
            ))}
          </div>

          {/* Kinetic Marquee Ticker */}
          <div className="mt-10 pt-6 border-t border-white/10 overflow-hidden relative">
            <div className="animate-marquee gap-8 items-center text-xs tracking-widest uppercase font-extrabold text-[#A1A1A1]">
              <span className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
                PICE Licensed Civil Engineer
              </span>
              <span className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
                100% Fixed-Price Contract Guarantee
              </span>
              <span className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
                Pag-IBIG Loan Documentation Partner
              </span>
              <span className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
                Weekly Video &amp; Photo Logs for OFWs
              </span>
              <span className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
                Negros Occidental Seismic Zone 4 Engineering
              </span>
              <span className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
                1-Year Comprehensive Warranty
              </span>

              {/* Duplicate for seamless infinite loop */}
              <span className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
                PICE Licensed Civil Engineer
              </span>
              <span className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
                100% Fixed-Price Contract Guarantee
              </span>
              <span className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
                Pag-IBIG Loan Documentation Partner
              </span>
              <span className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
                Weekly Video &amp; Photo Logs for OFWs
              </span>
              <span className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
                Negros Occidental Seismic Zone 4 Engineering
              </span>
              <span className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
                1-Year Comprehensive Warranty
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ───────────────────────────────────────────────
          PART 2: Overcoming Key Barriers (Aligned Grid)
      ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-20 md:mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <span className="badge-yellow mb-4">
              <AlertCircle className="w-3.5 h-3.5" />
              SOLVING COMMON ANXIETIES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F0F0F] leading-[1.12] tracking-tight">
              Overcoming Construction Stress Starts with Radical Honesty
            </h2>
            <p className="mt-5 text-[#525252] text-base md:text-lg leading-relaxed font-normal">
              Most horror stories in construction happen because of poor communication, hidden costs, and lack of professional oversight. We designed our entire client relationship model to systematically eliminate these problems.
            </p>

            <div className="mt-8 space-y-4">
              {barriers.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-[#F4F3EE] border border-[#E2E0D8] transition-all duration-300 hover:border-[#FACC15] hover:shadow-card"
                >
                  <div className="flex items-start gap-3.5">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-[#0F0F0F] text-base">
                        Common Barrier: {item.pain}
                      </h4>
                      <p className="text-xs text-[#666666] mt-0.5 mb-2.5">
                        {item.painDesc}
                      </p>
                      <div className="flex items-start gap-2 pt-2 border-t border-[#E5E3DC]">
                        <CheckCircle2 className="w-4 h-4 text-[#E5A900] shrink-0 mt-0.5" />
                        <p className="text-sm font-medium text-[#0F0F0F]">
                          <strong className="text-[#0F0F0F] font-bold">The Giex Way:</strong> {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual Card with Problem Tags (No Emoji) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card border border-[#E2E0D8] bg-[#F4F3EE] aspect-[4/5] sm:aspect-[4/4]">
              <Image
                src="/images/client-meeting-1.jpg"
                alt="Engr. Besas counseling homeowner on building plans"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

              {/* Floating challenge badges (Rendered with real icons, no emoji) */}
              <div className="absolute top-6 left-6 right-6 flex flex-wrap gap-2.5">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-rose-600/90 text-white backdrop-blur-md shadow-md inline-flex items-center gap-1.5 border border-rose-400/20">
                  <XCircle className="w-3.5 h-3.5" />
                  HIDDEN CONTRACTOR FEES
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-zinc-900/90 text-white backdrop-blur-md shadow-md inline-flex items-center gap-1.5 border border-white/10">
                  <XCircle className="w-3.5 h-3.5" />
                  ABSENT FOREMAN SUPERVISION
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-600/90 text-white backdrop-blur-md shadow-md inline-flex items-center gap-1.5 border border-amber-400/20">
                  <XCircle className="w-3.5 h-3.5" />
                  STRESSFUL PERMITS &amp; BANK DELAYS
                </span>
              </div>

              {/* Bottom resolution card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-lg">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#FACC15] flex items-center justify-center text-[#0F0F0F] shrink-0 font-bold shadow-sm">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0F0F0F] text-base">
                      The Giex Guarantee of Integrity
                    </h5>
                    <p className="text-xs text-[#525252]">
                      Direct civil engineer accountability on every blueprint, concrete batch, and milestone sign-off.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
