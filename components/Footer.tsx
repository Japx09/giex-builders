import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FBFBFA] border-t border-[#E2E0D8] text-[#0F0F0F] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-[#E2E0D8]">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-8 h-8 rounded-full bg-[#0F0F0F] flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/giex-logo.svg"
                  alt="Giex Builders Logo"
                  width={20}
                  height={24}
                  className="w-auto h-5 object-contain"
                />
              </div>
              <span className="font-bold text-xl text-[#0F0F0F] tracking-tight">
                Giex Builders<span className="text-[#FACC15]">.</span>
              </span>
            </Link>

            <p className="text-sm text-[#525252] leading-relaxed max-w-sm font-normal">
              Licensed civil engineering &amp; design-build construction firm in Kabankalan City, Negros Occidental. Led personally by Engr. Giel Rex Besas.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#FACC15] animate-pulse" />
              <span className="text-xs font-bold text-[#525252]">
                Available for New 2024 / 2025 Projects in Negros
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F0F0F] mb-4">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-[#525252]">
              <li>
                <Link href="#services" className="hover:text-[#E5A900] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#why-giex" className="hover:text-[#E5A900] transition-colors">
                  Why Giex
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-[#E5A900] transition-colors">
                  4-Step Process
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-[#E5A900] transition-colors">
                  Client Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F0F0F] mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-[#525252]">
              <li>
                <a href="tel:09460503038" className="hover:text-[#E5A900] transition-colors font-bold text-[#0F0F0F]">
                  0946 050 3038
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/GiexBuilders/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E5A900] transition-colors inline-flex items-center gap-1 font-medium"
                >
                  <span>Facebook Page</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li className="text-xs text-[#707070] leading-relaxed pt-1">
                Coloso St., Brgy. 6, Kabankalan City, Negros Occidental 6111
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F0F0F] mb-4">
              Office Hours
            </h4>
            <div className="text-sm text-[#525252] space-y-1">
              <p className="font-bold text-[#0F0F0F]">Mon – Sat</p>
              <p className="text-xs">7:30 AM – 5:00 PM</p>
              <p className="text-xs text-[#8A8A8A] pt-2">
                Sunday: Closed (Site emergencies only)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8A8A] text-center sm:text-left">
          <p>© {new Date().getFullYear()} Giex Builders. All rights reserved.</p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-2.5 sm:gap-6 font-medium">
            <span>PICE Member</span>
            <span className="hidden sm:inline">•</span>
            <span>Pag-IBIG Accredited Partner</span>
            <span className="hidden sm:inline">•</span>
            <span>Kabankalan City, Philippines</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
