import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap } from "lucide-react";
import aiHeroBg from "@/assets/ai-hero-bg.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {

  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={aiHeroBg}
          alt="AI Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 gradient-neural"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 gradient-hero rounded-full opacity-30 animate-neural-pulse"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "2s" }}>
        <div className="w-12 h-12 bg-accent rounded-full opacity-40 animate-neural-pulse"></div>
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: "4s" }}>
        <div className="w-20 h-20 bg-secondary rounded-full opacity-20 animate-neural-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary mb-6">
            <Bot className="w-4 h-4" />
            Pioneering Generative AI Optimization
          </div>
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Don't Just Rank,
            <span className="gradient-hero bg-clip-text text-transparent animate-gradient">
              {" "}Get Cited
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Master Generative AI Optimization (GAIO) and ensure your business is accurately recognized,
            understood, and recommended by AI chatbots and intelligent search systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="group" onClick={() => navigate("/auditForm")}>
              Start Your GEO Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#solution">Learn About GAIO</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent" />
              <span>Future-Proof Your Brand</span>
            </div>
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-accent" />
              <span>AI-First Optimization</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-accent" />
              <span>Proven Methodology</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
