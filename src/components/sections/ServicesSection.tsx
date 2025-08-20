import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  FileText, 
  Database, 
  Shield, 
  Network, 
  BarChart3, 
  Settings,
  CheckCircle 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: "AI Content Audit & Gap Analysis",
      description: "Comprehensive analysis of your current content's AI-readiness and identification of optimization opportunities.",
      features: ["AI visibility assessment", "Content gap identification", "Competitor AI analysis", "Semantic audit"],
      popular: false
    },
    {
      icon: FileText,
      title: "Semantic Content Optimization",
      description: "Transform your content to be easily understood and cited by AI systems while maintaining human readability.",
      features: ["Natural language optimization", "Topic clustering", "Intent mapping", "Context enhancement"],
      popular: true
    },
    {
      icon: Database,
      title: "Structured Data Implementation",
      description: "Deploy advanced schema markup and structured data to explicitly communicate with AI systems.",
      features: ["Schema.org markup", "Knowledge graph optimization", "Entity definitions", "Rich snippets"],
      popular: false
    },
    {
      icon: Shield,
      title: "Brand Authority & Entity Building",
      description: "Establish your brand as a recognized entity in AI knowledge bases and increase citation frequency.",
      features: ["E-E-A-T optimization", "Author authority building", "Entity markup", "Knowledge panels"],
      popular: false
    },
    {
      icon: Network,
      title: "Cross-Platform Citation Development",
      description: "Build authoritative mentions and citations across the web to strengthen AI recognition.",
      features: ["Citation building", "Authority linking", "Mention optimization", "Trust signals"],
      popular: false
    },
    {
      icon: BarChart3,
      title: "AI Response Monitoring & Refinement",
      description: "Track how AI systems reference your brand and continuously optimize for better citations.",
      features: ["Citation tracking", "AI sentiment monitoring", "Performance analytics", "Optimization recommendations"],
      popular: false
    }
  ];

  const processes = [
    {
      step: "01",
      title: "AI Readiness Assessment",
      description: "We analyze your current digital footprint and assess how AI systems currently perceive your brand.",
      icon: Search
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Create a comprehensive GAIO strategy tailored to your industry, audience, and business goals.",
      icon: Settings
    },
    {
      step: "03",
      title: "Content & Technical Optimization",
      description: "Implement semantic optimizations, structured data, and AI-friendly content architecture.",
      icon: FileText
    },
    {
      step: "04",
      title: "Monitor & Refine",
      description: "Continuously track AI citations and refine strategies based on performance data.",
      icon: BarChart3
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Complete GAIO 
            <span className="gradient-accent bg-clip-text text-transparent"> Optimization Suite</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From assessment to implementation, we provide end-to-end GAIO services to ensure 
            your brand dominates AI-powered search and recommendations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {services.map((service, index) => (
            <Card key={index} className={`p-6 hover:shadow-ai transition-all duration-300 relative ${service.popular ? 'border-accent shadow-ai' : ''}`}>
              {service.popular && (
                <Badge className="absolute -top-3 left-6 bg-accent text-accent-foreground">
                  Most Popular
                </Badge>
              )}
              
              <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={service.popular ? "hero" : "outline"} 
                className="w-full"
              >
                Learn More
              </Button>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6">Our GAIO Process</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology for transforming your digital presence into an AI-intelligible knowledge base.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processes.map((process, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-ai transition-all duration-300 group">
              <div className="relative mb-6">
                <div className="w-16 h-16 gradient-hero rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                  <process.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{process.step}</span>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold mb-3">{process.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{process.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;