"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      number: "1",
      title: "Discovery & Honest Feasibility",
      desc: "We start by listening to your vision, lifestyle needs, and real financial comfort zone. Engr. Besas personally evaluates your lot topography and zoning without any sales pressure.",
    },
    {
      number: "2",
      title: "Architectural & Itemized Engineering",
      desc: "We develop realistic 3D renderings and comprehensive structural blueprints paired with a line-by-line Bill of Materials so you know every cent before signing.",
    },
    {
      number: "3",
      title: "Precision Execution & Live Updates",
      desc: "Our licensed civil engineering team manages on-site crews daily. Homeowners and OFW clients receive weekly video walk-throughs and milestone sign-offs.",
    },
    {
      number: "4",
      title: "Turnover, Warranty & Lifetime Care",
      desc: "We deliver full occupancy documentation, ceremonial key handover, and provide a 1-year comprehensive builder warranty with lifetime technical support.",
    },
  ];

  return (
    <section id="process" className="py-16 md:py-24 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 lg:sticky lg:top-28"
        >
          <span className="badge-dark mb-4 inline-flex">
            <Sparkles className="w-3.5 h-3.5 text-[#FACC15]" />
            OUR APPROACH
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F0F0F] leading-[1.12] tracking-tight">
            A Streamlined Process for Lasting Peace of Mind
          </h2>
          <p className="mt-5 text-[#525252] text-base md:text-lg leading-relaxed font-normal">
            Building should be an empowering milestone, not an emotional struggle. We structure every stage of the project around clear communication, honest timeline commitments, and direct engineer accountability.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="#contact" className="btn-primary group flex items-center gap-2">
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a href="tel:09460503038" className="btn-secondary">
              Call 0946 050 3038
            </a>
          </div>

          {/* Quick trust callout */}
          <div className="mt-10 p-6 rounded-2xl bg-[#F4F3EE] border border-[#E2E0D8]">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-extrabold text-[#0F0F0F] mb-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FACC15]" />
              <span>Dedicated OFW &amp; Distance Support</span>
            </div>
            <p className="text-sm text-[#525252] leading-relaxed">
              We handle 100% of municipal permits, bank appraisals, and send weekly video logs directly to your WhatsApp or Messenger.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Stacked Process Cards with Connecting Progress Line */}
        <div className="lg:col-span-7 relative space-y-4 md:space-y-5">
          {/* Vertical connecting line */}
          <div className="hidden sm:block absolute left-[49px] top-10 bottom-10 w-0.5 bg-[#E2E0D8] z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 p-7 md:p-8 rounded-2xl md:rounded-3xl bg-[#F4F3EE] border border-[#E2E0D8] transition-all duration-300 hover:shadow-card hover:border-[#FACC15] flex gap-5 items-start"
            >
              {/* Yellow circle with bold dark number */}
              <div className="w-11 h-11 rounded-full bg-[#FACC15] text-[#0F0F0F] flex items-center justify-center font-extrabold text-lg shrink-0 shadow-sm mt-0.5 border border-black/5 relative z-10 ring-4 ring-[#F4F3EE]">
                {step.number}
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0F0F0F] mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-[#525252] leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
