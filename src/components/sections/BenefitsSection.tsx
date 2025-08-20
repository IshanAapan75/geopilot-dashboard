import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  Shield, 
  Zap, 
  Target, 
  Globe,
  ArrowUpRight,
  Star
} from "lucide-react";
import benefitsVisual from "@/assets/benefits-visual.jpg";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased AI Visibility",
      description: "Your brand appears prominently in AI-generated answers and recommendations.",
      metric: "300% increase in AI citations",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Higher Citation Frequency",
      description: "AI systems reference your content more often as a trusted, authoritative source.",
      metric: "5x more frequent mentions",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Enhanced Brand Authority",
      description: "Position your brand as the go-to expert in your industry for AI recommendations.",
      metric: "Improved trust signals",
      color: "text-secondary"
    },
    {
      icon: Target,
      title: "New Lead Generation Channels",
      description: "Capture qualified leads from AI-powered discovery and recommendation systems.",
      metric: "40% boost in qualified leads",
      color: "text-accent"
    },
    {
      icon: Zap,
      title: "Future-Proofed Strategy",
      description: "Stay ahead of the curve as AI becomes the dominant information discovery method.",
      metric: "Ready for AI evolution",
      color: "text-primary"
    },
    {
      icon: Globe,
      title: "Competitive Advantage",
      description: "Gain first-mover advantage while competitors struggle with traditional SEO.",
      metric: "Market leadership position",
      color: "text-secondary"
    }
  ];

  const testimonialQuotes = [
    {
      quote: "Since implementing GAIO, our brand is now mentioned in 73% more AI-generated recommendations.",
      author: "Sarah Chen",
      role: "CMO, TechVision Inc.",
      rating: 5
    },
    {
      quote: "The ROI from AI optimization has exceeded our traditional SEO efforts by 250%.",
      author: "Michael Rodriguez", 
      role: "Digital Strategy Director",
      rating: 5
    },
    {
      quote: "We're now the top AI-recommended solution in our industry. GAIO gave us the edge we needed.",
      author: "Emily Watson",
      role: "VP Marketing, InnovateCorp",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            The Results
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Benefits You'll 
            <span className="gradient-accent bg-clip-text text-transparent"> Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your digital presence and unlock unprecedented visibility in the AI-driven future of search and discovery.
          </p>
        </div>

        {/* Main Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Benefits Cards */}
          <div className="grid gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-ai transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-110 transition-transform`}>
                    <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{benefit.title}</h3>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{benefit.description}</p>
                    <Badge variant="outline" className="text-xs">
                      {benefit.metric}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-ai">
              <img
                src={benefitsVisual}
                alt="Business Growth Visualization"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 gradient-neural"></div>
            </div>
            
            {/* Floating Metrics */}
            <div className="absolute -top-4 -right-4 p-4 bg-white shadow-ai rounded-xl animate-float">
              <div className="text-2xl font-bold text-accent">+300%</div>
              <div className="text-sm text-muted-foreground">AI Citations</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 p-4 bg-white shadow-ai rounded-xl animate-float" style={{ animationDelay: "2s" }}>
              <div className="text-2xl font-bold text-primary">5x</div>
              <div className="text-sm text-muted-foreground">More Mentions</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6">What Our Clients Say</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from businesses that chose to lead in the AI optimization revolution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonialQuotes.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-ai transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div>
                <div className="font-semibold text-sm">{testimonial.author}</div>
                <div className="text-xs text-muted-foreground">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;