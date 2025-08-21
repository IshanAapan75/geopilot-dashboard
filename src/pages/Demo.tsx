import { useEffect, useRef } from "react";
import MarketSlide from "@/components/demo/MarketSlide";
import OnboardingSlide from "@/components/demo/OnboardingSlide";
import ComingSoonSlide from "@/components/demo/ComingSoonSlide";
import DemoNavigation from "@/components/demo/DemoNavigation";


const Demo = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Add smooth scroll behavior
    if (containerRef.current) {
      containerRef.current.style.scrollBehavior = 'smooth';
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory bg-background"
    >
      <DemoNavigation />
      
      {/* Slide 1: Market Evolution */}
      <section className="h-screen w-full snap-start flex items-center justify-center">
        <MarketSlide />
      </section>

      {/* Slide 2: Onboarding Process */}
      <section className="h-screen w-full snap-start flex items-center justify-center">
        <OnboardingSlide />
      </section>

      {/* Slide 3: Coming Soon */}
      <section className="h-screen w-full snap-start flex items-center justify-center">
        <ComingSoonSlide />
      </section>
    </div>
  );
};

export default Demo;
