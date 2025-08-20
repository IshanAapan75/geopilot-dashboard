import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import AIShiftSection from "@/components/sections/AIShiftSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ServicesSection from "@/components/sections/ServicesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import FlowSection from "@/components/sections/FlowSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AIShiftSection />
        <ProblemSection />
        <section id="solution">
          <SolutionSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="benefits">
          <BenefitsSection />
        </section>
        <section id="pricing">
          <FlowSection />
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
