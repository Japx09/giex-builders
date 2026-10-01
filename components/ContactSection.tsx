"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "Residential Villa",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 max-w-7xl mx-auto px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#0F0F0F] text-white rounded-3xl md:rounded-[40px] p-8 sm:p-12 md:p-16 lg:p-20 relative overflow-hidden border border-white/5"
      >
        {/* Subtle yellow ambient glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FACC15]/10 blur-[130px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
          {/* Left Column: Direct Outreach & Location */}
          <div className="lg:col-span-6">
            <span className="badge-dark mb-5 inline-flex">
              <MessageCircle className="w-3.5 h-3.5 text-[#FACC15]" />
              LET&apos;S CONNECT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
              Let&apos;s Have an Honest Conversation About Your Plans
            </h2>
            <p className="mt-5 text-[#A1A1A1] text-base md:text-lg leading-relaxed font-normal">
              Whether you are ready to break ground next month or just exploring your budget, Engr. Giel Rex Besas is here to give you straightforward, technical advice without any sales pressure.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FACC15] flex items-center justify-center text-[#0F0F0F] shrink-0 font-bold shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#8A8A8A] font-bold">
                    Direct Call / WhatsApp / Viber
                  </p>
                  <a
                    href="tel:09460503038"
                    className="text-xl sm:text-2xl font-extrabold text-white hover:text-[#FACC15] transition-colors"
                  >
                    0946 050 3038
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#FACC15] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#8A8A8A] font-bold">
                    Office Headquarters
                  </p>
                  <p className="text-base text-white font-medium">
                    Coloso St., Brgy. 6, Kabankalan City, Negros Occidental 6111
                  </p>
                  <p className="text-xs text-[#8A8A8A] mt-0.5">
                    (Beside Rozay Travellers Inn)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#FACC15] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#8A8A8A] font-bold">
                    Consultation Hours
                  </p>
                  <p className="text-base text-white font-medium">
                    Monday – Saturday: 7:30 AM – 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-4">
              <a
                href="https://www.facebook.com/GiexBuilders/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !bg-white/10 !text-white !border-white/10 hover:!bg-white/20"
              >
                Chat on Facebook Messenger
              </a>
            </div>
          </div>

          {/* Right Column: Quick Consultation Card */}
          <div className="lg:col-span-6 bg-white text-[#0F0F0F] p-8 sm:p-10 rounded-3xl shadow-xl border border-white/10">
            {formSubmitted ? (
              <div className="text-center py-10">
                <CheckCircle2 className="w-16 h-16 text-[#FACC15] mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Thank You, We Received Your Note!</h3>
                <p className="text-[#525252] text-sm max-w-md mx-auto mb-6">
                  Engr. Giel Rex Besas or our engineering team will reach out to you via phone or WhatsApp within 24 hours.
                </p>
                <a
                  href={`https://wa.me/639460503038?text=Hello%20Engr.%20Besas,%20I%20am%20interested%20in%20a%20${encodeURIComponent(formData.projectType)}%20consultation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Send via WhatsApp Now
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight mb-1 text-[#0F0F0F]">
                  Request a Free Consultation
                </h3>
                <p className="text-sm text-[#666666] mb-5">
                  Tell us a little bit about what you&apos;re planning to build.
                </p>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#444444] mb-1.5">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Juan dela Cruz"
                    className="w-full px-4 py-3 rounded-xl bg-[#F4F3EE] border border-[#E2E0D8] text-sm text-[#0F0F0F] focus:outline-none focus:border-[#FACC15] focus:ring-2 focus:ring-[#FACC15]/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#444444] mb-1.5">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0946 050 3038"
                    className="w-full px-4 py-3 rounded-xl bg-[#F4F3EE] border border-[#E2E0D8] text-sm text-[#0F0F0F] focus:outline-none focus:border-[#FACC15] focus:ring-2 focus:ring-[#FACC15]/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#444444] mb-1.5">
                    Project Interest
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F4F3EE] border border-[#E2E0D8] text-sm text-[#0F0F0F] focus:outline-none focus:border-[#FACC15] focus:ring-2 focus:ring-[#FACC15]/20"
                  >
                    <option value="Residential Villa">Residential Villa / House Construction</option>
                    <option value="Commercial Plaza">Commercial Building / Plaza</option>
                    <option value="Steel Warehouse & Roofing">Steel Structure &amp; Roofing</option>
                    <option value="Solar Roof Installation">Solar Energy System</option>
                    <option value="Pag-IBIG Loan Assistance">Pag-IBIG Construction Loan Assistance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#444444] mb-1.5">
                    Notes or Questions (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your lot location, target budget, or ideal timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-[#F4F3EE] border border-[#E2E0D8] text-sm text-[#0F0F0F] focus:outline-none focus:border-[#FACC15] focus:ring-2 focus:ring-[#FACC15]/20"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center text-center mt-3"
                >
                  <span>Submit Consultation Request</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
