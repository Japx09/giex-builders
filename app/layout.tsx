import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://giexbuilders.com"),
  title: "Giex Builders. | Civil Engineering & Turnkey Construction | Kabankalan City",
  description:
    "Institutional civil engineering and architectural construction firm in Kabankalan City, Negros Occidental. Led by Engr. Giel Rex Besas. Design-build, modern residential villas, steel structures, roofing, solar installations, and Pag-IBIG loan assistance.",
  keywords: [
    "Giex Builders",
    "Giex Builders Kabankalan",
    "Contractor Kabankalan City",
    "Civil Engineer Negros Occidental",
    "Engr. Giel Rex Besas",
    "House Construction Kabankalan",
    "Pag-IBIG Construction Loan Negros",
    "Roofing Contractor Kabankalan",
    "Solar Installation Kabankalan",
    "Design and Build Negros Occidental"
  ],
  authors: [{ name: "Engr. Giel Rex Besas" }],
  creator: "Giex Builders",
  publisher: "Giex Builders",
  formatDetection: {
    telephone: true,
    address: true,
  },
  openGraph: {
    title: "Giex Builders. | We build enduring spaces.",
    description:
      "Premier Civil Engineering & Construction Firm in Kabankalan City, Negros Occidental. Turnkey design-build, residential villas, commercial plazas, and structural steel.",
    locale: "en_PH",
    type: "website",
    siteName: "Giex Builders",
    images: [
      {
        url: "/images/hero-architecture.jpg",
        width: 1200,
        height: 630,
        alt: "Giex Builders Architectural Construction",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-[#fffffc] overflow-x-hidden">
      <body
        className={`${inter.variable} font-sans bg-[#fffffc] text-[#000000] selection:bg-black selection:text-[#fffffc] antialiased overflow-x-hidden w-full max-w-full`}
      >
        {children}
      </body>
    </html>
  );
}
