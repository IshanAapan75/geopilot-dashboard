import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  BarChart3, 
  GitBranch, 
  Zap, 
  Shield, 
  Bell,
  ArrowRight,
  Sparkles
} from "lucide-react";

const ComingSoonSlide = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: BarChart3,
      title: "Weekly AI Search Score",
      description: "Monitor your AI discoverability with comprehensive weekly reports",
      details: [
        "AI citation frequency tracking",
        "Competitor AI visibility analysis", 
        "Semantic authority scoring",
        "LLM response quality metrics"
      ],
      timeline: "Q1 2025",
      status: "In Development"
    },
    {
      icon: GitBranch,
      title: "Auto-Merge Integration",
      description: "Seamlessly integrate optimizations directly into your codebase",
      details: [
        "GitHub/GitLab integration",
        "Automated pull requests",
        "Code review workflows",
        "Rollback capabilities"
      ],
      timeline: "Q2 2025", 
      status: "Coming Soon"
    }
  ];

  const additionalFeatures = [
    { icon: Shield, title: "Enterprise Security", description: "SOC 2 compliance and enterprise-grade security" },
    { icon: Bell, title: "Real-time Alerts", description: "Instant notifications for AI visibility changes" },
    { icon: Sparkles, title: "AI Content Generator", description: "Generate AI-optimized content automatically" }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="container mx-auto px-6 pt-20">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className={`text-center space-y-6 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
            <Clock className="h-4 w-4" />
            <span className="text-sm font-medium">Coming Soon</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
            The Future of
            <span className="gradient-hero bg-clip-text text-transparent"> AI Optimization</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're building advanced features to make AI optimization effortless and automated. 
            Get early access to cutting-edge capabilities.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-500 hover:shadow-glow cursor-pointer ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                } ${isHovered ? 'scale-105 ring-2 ring-primary/50' : ''}`}
                style={{ animationDelay: `${index * 300}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background gradient */}
                <div className="absolute inset-0 gradient-neural opacity-50" />
                
                <CardHeader className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isHovered ? 'gradient-hero' : 'bg-muted'
                      }`}>
                        <Icon className={`h-6 w-6 ${
                          isHovered ? 'text-primary-foreground' : 'text-muted-foreground'
                        }`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="secondary" className="text-xs">
                            {feature.timeline}
                          </Badge>
                          <Badge 
                            variant={feature.status === "In Development" ? "default" : "outline"}
                            className="text-xs"
                          >
                            {feature.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-primary">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-3 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {feature.status === "In Development" && (
                    <div className="flex items-center gap-2 text-xs text-primary">
                      <Zap className="h-3 w-3 animate-pulse" />
                      <span>Active development in progress</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Features Grid */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h3 className="text-2xl font-semibold text-center mb-8">And Much More...</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-card transition-all duration-300">
                  <CardContent className="space-y-4">
                    <div className="w-10 h-10 mx-auto rounded-lg bg-muted flex items-center justify-center">
                      <Icon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <h4 className="font-semibold">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Early Access CTA */}
        <div className={`text-center space-y-6 transition-all duration-1000 delay-1000 ${isVisible ? 'animate-apple-bounce' : 'opacity-0'}`}>
          <div className="max-w-2xl mx-auto p-8 rounded-3xl gradient-card shadow-glow border border-border/50">
            <h3 className="text-3xl font-bold mb-4">Get Early Access</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Be among the first to experience these powerful features. Join our early access program 
              and help shape the future of AI optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-glow">
                Join Early Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Get Notified
                <Bell className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonSlide;