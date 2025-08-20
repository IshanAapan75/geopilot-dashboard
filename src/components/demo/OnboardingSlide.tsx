import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Globe, MessageSquare, Mail, ArrowRight } from "lucide-react";

const OnboardingSlide = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: MessageSquare,
      title: "Sign Up",
      description: "Create your GEO-Pilot account in seconds with just your email",
      detail: "Quick registration with enterprise-grade security"
    },
    {
      icon: Globe,
      title: "Provide Business URL",
      description: "Enter your website URL and answer 3-5 optional questions about your business",
      detail: "We analyze your digital presence and business context"
    },
    {
      icon: Mail,
      title: "Get AI-Optimized Files",
      description: "Receive llm.txt, robots.txt, and index.html optimizations in your email within 24-48 hours",
      detail: "Ready-to-implement files tailored for AI search engines"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-advance steps for demo
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="container mx-auto px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center space-y-16">
        {/* Header */}
        <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20">
            <CheckCircle className="h-4 w-4" />
            <span className="text-sm font-medium">Simple Onboarding</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
            Get Started in
            <span className="gradient-accent bg-clip-text text-transparent"> 3 Simple Steps</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your digital presence for AI search engines with our streamlined onboarding process.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            const isCompleted = activeStep > index;
            
            return (
              <div
                key={index}
                className={`relative transition-all duration-700 delay-${index * 200} ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
              >
                <Card className={`h-full transition-all duration-500 hover:shadow-glow ${
                  isActive ? 'ring-2 ring-primary shadow-glow scale-105' : 
                  isCompleted ? 'ring-1 ring-accent/50' : ''
                }`}>
                  <CardContent className="p-8 text-center space-y-6">
                    {/* Step indicator */}
                    <div className="relative">
                      <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center transition-all duration-500 ${
                        isActive ? 'gradient-hero animate-pulse' :
                        isCompleted ? 'bg-accent' :
                        'bg-muted'
                      }`}>
                        <Icon className={`h-8 w-8 ${
                          isActive || isCompleted ? 'text-primary-foreground' : 'text-muted-foreground'
                        }`} />
                      </div>
                      
                      {/* Step number */}
                      <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                        isActive ? 'bg-primary text-primary-foreground' :
                        isCompleted ? 'bg-accent text-accent-foreground' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                      <p className="text-sm text-primary font-medium">
                        {step.detail}
                      </p>
                    </div>

                    {/* Action indicator */}
                    {isActive && (
                      <div className="flex justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Connector arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className={`h-6 w-6 transition-colors duration-500 ${
                      isCompleted ? 'text-accent' : 'text-muted-foreground'
                    }`} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`space-y-6 transition-all duration-1000 delay-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="p-6 rounded-2xl gradient-neural border border-border/50">
            <h3 className="text-2xl font-semibold mb-4">Ready to get started?</h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of businesses already optimizing for the AI search revolution.
            </p>
            <Button size="lg" className="shadow-glow">
              Start Your GEO Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingSlide;