"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

export default function BudgetEstimator() {
  const [area, setArea] = useState<number>(120);
  const [finishLevel, setFinishLevel] = useState<"standard" | "semi" | "premium">("semi");
  const [storeys, setStoreys] = useState<number>(2);

  // Realistic Philippine construction rates per sqm (Negros Occidental standard 2024/2025)
  const rates = {
    standard: 25000, // Standard / Basic Turnkey
    semi: 32000,     // Semi-Elegant (Most popular)
    premium: 42000,  // High-End Architectural Luxury
  };

  const costPerSqm = rates[finishLevel];
  const estimatedCost = area * costPerSqm * (storeys === 2 ? 1.08 : 1);
  // Pag-IBIG 30-year indicative monthly amortization at ~6.25% fixed
  const pagIbigMonthly = (estimatedCost * 0.8) * 0.00615;

  const formatPHP = (val: number) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#0F0F0F] text-white rounded-3xl md:rounded-[40px] p-8 sm:p-12 md:p-16 relative overflow-hidden border border-white/5 shadow-2xl"
      >
        {/* Subtle yellow ambient background glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-[#FACC15]/10 blur-[140px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          {/* Left Column: Context & Explanations */}
          <div className="lg:col-span-6">
            <span className="badge-dark mb-4 inline-flex">
              <Calculator className="w-3.5 h-3.5 text-[#FACC15]" />
              TRANSPARENT COSTING
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
              Plan Your Budget with Complete Transparency
            </h2>
            <p className="mt-5 text-[#A1A1A1] text-base md:text-lg leading-relaxed font-normal">
              No hidden fees, no mystery contractor markups. Use our interactive estimator to gauge realistic turnkey construction costs in Kabankalan and across Negros Occidental.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-[#FACC15] shrink-0 mt-0.5" />
                <p className="text-sm text-[#CCCCCC]">
                  <strong className="text-white">Pag-IBIG &amp; Bank Financing:</strong> We prepare all structural blueprints, signed Bill of Materials, and building permits required by lenders.
                </p>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/5">
                <ShieldCheck className="w-5 h-5 text-[#FACC15] shrink-0 mt-0.5" />
                <p className="text-sm text-[#CCCCCC]">
                  <strong className="text-white">Fixed-Price Turnkey Guarantee:</strong> Once Engr. Besas signs the contract, our price remains locked against inflation and raw material surges.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Calculator Card */}
          <div className="lg:col-span-6 bg-white text-[#0F0F0F] p-8 sm:p-10 rounded-3xl shadow-card border border-white/10">
            <div className="flex items-center justify-between pb-6 border-b border-[#EAE8E1]">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#666666] font-bold">
                  Estimated Turnkey Budget
                </span>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#0F0F0F] tracking-tight mt-1">
                  {formatPHP(estimatedCost)}
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs text-[#888888] block">Indicative Pag-IBIG</span>
                <span className="text-base font-bold text-[#E5A900]">
                  {formatPHP(pagIbigMonthly)}/mo*
                </span>
              </div>
            </div>

            {/* Area Slider */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#444444]">
                  Floor Area: <span className="text-[#0F0F0F] font-extrabold text-sm">{area} sqm</span>
                </label>
                <span className="text-xs text-[#888888]">
                  Approx. {Math.round(area * 10.764)} sq ft
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="400"
                step="5"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full accent-[#FACC15] cursor-pointer h-2 bg-[#EAE8E1] rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-[#888888] mt-1">
                <span>50 sqm (Starter Home)</span>
                <span>200 sqm</span>
                <span>400 sqm (Large Villa)</span>
              </div>
            </div>

            {/* Storeys Selector */}
            <div className="mt-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#444444] mb-2.5">
                Number of Storeys
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setStoreys(1)}
                  className={`py-3 px-4 rounded-xl font-bold text-sm border transition-all ${
                    storeys === 1
                      ? "bg-[#0F0F0F] text-white border-[#0F0F0F] shadow-sm"
                      : "bg-[#F4F3EE] text-[#444444] border-[#E2E0D8] hover:bg-[#EAE8E1]"
                  }`}
                >
                  Single Storey (Bungalow)
                </button>
                <button
                  type="button"
                  onClick={() => setStoreys(2)}
                  className={`py-3 px-4 rounded-xl font-bold text-sm border transition-all ${
                    storeys === 2
                      ? "bg-[#0F0F0F] text-white border-[#0F0F0F] shadow-sm"
                      : "bg-[#F4F3EE] text-[#444444] border-[#E2E0D8] hover:bg-[#EAE8E1]"
                  }`}
                >
                  Two Storey Villa
                </button>
              </div>
            </div>

            {/* Finish Level Tabs */}
            <div className="mt-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#444444] mb-2.5">
                Architectural Finish Tier
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {(["standard", "semi", "premium"] as const).map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setFinishLevel(tier)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold capitalize transition-all border ${
                      finishLevel === tier
                        ? "bg-[#FACC15] text-[#0F0F0F] border-[#EAB308] shadow-sm"
                        : "bg-[#F4F3EE] text-[#555555] border-[#E2E0D8] hover:bg-[#EAE8E1]"
                    }`}
                  >
                    {tier} Finish
                  </button>
                ))}
              </div>
              <p className="text-xs text-[#777777] mt-2">
                {finishLevel === "standard" && "Basic turnkey: tiled floors, standard sanitary fixtures, painted finish, electrical trim."}
                {finishLevel === "semi" && "Most popular: granite counters, cove ceiling lighting, branded fixtures, custom aluminum windows."}
                {finishLevel === "premium" && "High-end luxury: custom hardwood cabinetry, tempered glass railings, smart lighting, designer facade."}
              </p>
            </div>

            {/* Direct Consultation Action */}
            <div className="mt-8 pt-6 border-t border-[#EAE8E1]">
              <a
                href={`https://wa.me/639460503038?text=Hello%20Engr.%20Besas,%20I%20used%20your%20website%20estimator%20for%20a%20${area}sqm%20${storeys}-storey%20${finishLevel}%20finish%20home%20(approx%20${encodeURIComponent(formatPHP(estimatedCost))}).%20Can%20we%20schedule%20a%20consultation?`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-center group"
              >
                <span>Discuss This Estimate with Engr. Besas</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <span className="text-[11px] text-[#888888] text-center block mt-2">
                *Subject to actual site survey, soil bearing capacity &amp; client finishing preferences.
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
