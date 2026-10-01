"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Phone, UserCheck } from "lucide-react";

export default function EngineerProfile() {
  return (
    <section id="about" className="py-16 md:py-24 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Photo of Engineer reviewing blueprints */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-card border border-[#E2E0D8] aspect-[4/5] bg-[#F4F3EE]">
            <Image
              src="/images/engr-besas-blueprint.jpg"
              alt="Engr. Giel Rex Besas reviewing structural construction blueprints"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            {/* Profile badge overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-[#0F0F0F] text-lg">
                    Engr. Giel Rex Besas
                  </h4>
                  <p className="text-xs font-semibold text-[#525252]">
                    Founder &amp; Principal Civil Engineer
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#FACC15] flex items-center justify-center text-[#0F0F0F] font-bold shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#EAE8E1] flex items-center justify-between text-[11px] text-[#666666]">
                <span>PRC Registered Civil Engineer</span>
                <span>PICE Member</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Narrative of Personal Client Relationship */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <span className="badge-dark mb-4 inline-flex">
            <UserCheck className="w-3.5 h-3.5 text-[#FACC15]" />
            LOCAL LEADERSHIP &amp; ACCOUNTABILITY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F0F0F] leading-[1.12] tracking-tight">
            &ldquo;When You Build With Us, You Deal Directly With Me.&rdquo;
          </h2>
          
          <div className="mt-6 text-[#525252] text-base md:text-lg leading-relaxed space-y-4 font-normal">
            <p>
              In traditional construction, homeowners frequently sign with a salesperson only to have their home handed off to unsupervised sub-contractors and informal foremen. When unexpected structural issues arise, nobody takes responsibility.
            </p>
            <p>
              I founded Giex Builders in Kabankalan City on a fundamentally different premise: <strong>direct engineer stewardship</strong>. Every foundation footing, rebar schedule, and beam calculation is personally calculated and inspected by a licensed civil engineer.
            </p>
            <p>
              Whether you are an OFW sending remittances from overseas or a local business investing in a commercial plaza on Coloso Street, you have my personal cell phone number and my commitment to absolute honesty.
            </p>
          </div>

          {/* 3 Pillars of Personal Care */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[#F4F3EE] border border-[#E2E0D8]">
              <span className="text-xl font-extrabold text-[#0F0F0F] block">100%</span>
              <span className="text-xs text-[#666666] mt-1 block">Engineer-led inspections on every concrete pour</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#F4F3EE] border border-[#E2E0D8]">
              <span className="text-xl font-extrabold text-[#0F0F0F] block">Weekly</span>
              <span className="text-xs text-[#666666] mt-1 block">Personal video logs sent straight to your phone</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#F4F3EE] border border-[#E2E0D8]">
              <span className="text-xl font-extrabold text-[#0F0F0F] block">Lifetime</span>
              <span className="text-xs text-[#666666] mt-1 block">Hometown support in Kabankalan City</span>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="tel:09460503038"
              className="btn-primary group flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#0F0F0F]" />
              <span>Call Engr. Besas Directly: 0946 050 3038</span>
            </a>
            <Link href="#contact" className="btn-secondary">
              Book Office Visit
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
