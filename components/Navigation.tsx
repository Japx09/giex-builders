"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Why Giex", href: "#why-giex" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-4 md:top-6 inset-x-0 z-50 px-4 sm:px-6 max-w-7xl mx-auto">
        <div
          className={`flex items-center justify-between px-5 md:px-7 py-3 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-[#FBFBFA]/95 backdrop-blur-md shadow-pill border border-[#E2E0D8]"
              : "bg-[#FBFBFA]/90 backdrop-blur-sm border border-[#EAE8E1] shadow-sm"
          }`}
        >
          {/* Logo with official SVG emblem */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-[#0F0F0F] flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/giex-logo.svg"
                alt="Giex Builders Logo"
                width={20}
                height={24}
                className="w-auto h-5 object-contain"
                priority
              />
            </div>
            <span className="font-bold text-[17px] text-[#0F0F0F] tracking-tight">
              Giex Builders<span className="text-[#FACC15]">.</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[14px] font-medium text-[#4A4A4A] hover:text-[#0F0F0F] transition-colors relative py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:09460503038"
              className="text-[14px] font-semibold text-[#4A4A4A] hover:text-[#0F0F0F] flex items-center gap-1.5 px-3 py-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FACC15]" />
              <span>0946 050 3038</span>
            </a>
            <Link
              href="#contact"
              className="btn-primary text-[14px] !py-2.5 !px-5"
            >
              <span>Let&apos;s Talk</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-9 h-9 rounded-full bg-[#EFECE6] flex items-center justify-center text-[#0F0F0F]"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#FBFBFA] flex flex-col justify-between pt-24 pb-8 px-6">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-[#0F0F0F] py-2 border-b border-[#EAE8E1]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="tel:09460503038"
              className="flex items-center justify-center gap-2 py-3 rounded-full bg-[#EFECE6] text-sm font-bold text-[#0F0F0F]"
            >
              <Phone className="w-4 h-4 text-[#FACC15]" />
              <span>Call 0946 050 3038</span>
            </a>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary text-center justify-center w-full"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
