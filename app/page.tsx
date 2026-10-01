import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustAndChallenges from "@/components/TrustAndChallenges";
import ServicesGrid from "@/components/ServicesGrid";
import BudgetEstimator from "@/components/BudgetEstimator";
import ProcessSection from "@/components/ProcessSection";
import EngineerProfile from "@/components/EngineerProfile";
import RelationshipBanner from "@/components/RelationshipBanner";
import ClientTestimonials from "@/components/ClientTestimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import FloatingContactCTA from "@/components/FloatingContactCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#0F0F0F] selection:bg-[#FACC15] selection:text-[#0F0F0F] relative w-full max-w-full overflow-x-hidden">
      <ScrollProgressBar />
      <Navigation />
      <main>
        <Hero />
        <TrustAndChallenges />
        <ServicesGrid />
        <BudgetEstimator />
        <ProcessSection />
        <EngineerProfile />
        <RelationshipBanner />
        <ClientTestimonials />
        <ContactSection />
      </main>
      <Footer />
      <FloatingContactCTA />
    </div>
  );
}
