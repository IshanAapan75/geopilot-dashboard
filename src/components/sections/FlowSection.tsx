import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  UserPlus, 
  Link, 
  HelpCircle, 
  Code, 
  GitPullRequest, 
  Eye, 
  Check, 
  Settings,
  Crown,
  Zap
} from "lucide-react";

const FlowSection = () => {
  const freeFlow = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Create your free GEO-Pilot account in seconds"
    },
    {
      icon: Link,
      title: "Provide URL",
      description: "Enter your website URL for analysis"
    },
    {
      icon: HelpCircle,
      title: "Answer Questions",
      description: "5 simple questions about your business and goals"
    },
    {
      icon: Code,
      title: "Get Code",
      description: "Receive optimized llm.txt, robots.txt, and index.html updates"
    }
  ];

  const premiumFlow = [
    {
      icon: UserPlus,
      title: "Sign Up Premium",
      description: "Join our premium tier for full automation"
    },
    {
      icon: Link,
      title: "Connect Systems",
      description: "Provide URL and connect your source control"
    },
    {
      icon: HelpCircle,
      title: "Business Analysis",
      description: "Answer detailed questions about your business"
    },
    {
      icon: GitPullRequest,
      title: "AI Pull Request",
      description: "Our copilot creates optimized code changes"
    },
    {
      icon: Eye,
      title: "Review & Approve",
      description: "Review AI summary and approve changes"
    },
    {
      icon: Settings,
      title: "Stay Compliant",
      description: "Enable automated GEO monitoring and optimization"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Get Started
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your 
            <span className="gradient-accent bg-clip-text text-transparent"> Optimization Path</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you prefer hands-on control or full automation, we have the perfect 
            GAIO solution for your business needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Free Flow */}
          <Card className="p-8 hover:shadow-ai transition-all duration-300">
            <div className="text-center mb-8">
              <div className="w-16 h-16 gradient-hero rounded-full mx-auto flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Free Starter</h3>
              <p className="text-muted-foreground">Perfect for small businesses and startups</p>
              <div className="mt-4">
                <span className="text-3xl font-bold">Free</span>
                <span className="text-muted-foreground ml-2">Basic optimization</span>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              {freeFlow.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                <span className="text-sm">Basic GAIO code generation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                <span className="text-sm">Essential structured data</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                <span className="text-sm">Manual implementation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                <span className="text-sm">Community support</span>
              </div>
            </div>

            <Button variant="outline" className="w-full" size="lg">
              Start Free
            </Button>
          </Card>

          {/* Premium Flow */}
          <Card className="p-8 border-accent shadow-ai relative">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
              Recommended
            </Badge>
            
            <div className="text-center mb-8">
              <div className="w-16 h-16 gradient-accent rounded-full mx-auto flex items-center justify-center mb-4">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Premium Copilot</h3>
              <p className="text-muted-foreground">Full automation for serious businesses</p>
              <div className="mt-4">
                <span className="text-3xl font-bold">Custom</span>
                <span className="text-muted-foreground ml-2">Get in touch</span>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              {premiumFlow.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                <span className="text-sm">Complete GAIO automation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                <span className="text-sm">Advanced structured data</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                <span className="text-sm">Continuous optimization</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                <span className="text-sm">Priority support & consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                <span className="text-sm">Regular GEO compliance checks</span>
              </div>
            </div>

            <Button variant="hero" className="w-full" size="lg">
              Get Started Premium
            </Button>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Not sure which plan is right for you? Let's discuss your specific needs.
          </p>
          <Button variant="outline" size="lg">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FlowSection;