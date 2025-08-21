import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Shield, Database, FileText, Globe, Zap } from "lucide-react";
import semanticVisual from "@/assets/semantic-visual.jpg";

const SolutionSection = () => {
  const gaioPillars = [
    {
      icon: Network,
      title: "Semantic Understanding",
      description: "AI interprets the true meaning and context of your content, not just exact keyword matches.",
      techniques: ["Natural language optimization", "Contextual content structuring", "Topic authority building"]
    },
    {
      icon: Shield,
      title: "Authority & Trust (E-E-A-T)",
      description: "AI prioritizes content from highly authoritative, expert, and trustworthy sources across the web.",
      techniques: ["Expert author profiles", "Citation building", "Trust signal optimization"]
    },
    {
      icon: Database,
      title: "Structured Data",
      description: "Schema markup explicitly tells AI models what your content is about and how to understand it.",
      techniques: ["Schema.org implementation", "Knowledge graph optimization", "Entity markup"]
    },
    {
      icon: FileText,
      title: "Content Architecture",
      description: "AI favors comprehensive, unique, and well-organized content that directly answers queries.",
      techniques: ["FAQ optimization", "Summary structuring", "Q&A formatting"]
    },
    {
      icon: Globe,
      title: "Cross-Platform Citations",
      description: "The more your brand is mentioned by reputable sources, the more AI recognizes your authority.",
      techniques: ["Citation building", "Mention optimization", "Authority linking"]
    },
    {
      icon: Zap,
      title: "Multimodal Optimization",
      description: "AI processes various formats, so optimizing across text, images, and video enhances discoverability.",
      techniques: ["Alt text optimization", "Video transcripts", "Image context"]
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            The Solution
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What is Generative AI 
            <span className="gradient-accent bg-clip-text text-transparent"> Optimization?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            GAIO is the systematic process of structuring and creating content to be easily consumed, 
            understood, and cited by large language models and AI-powered systems.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Visual */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-ai">
              <img
                src={semanticVisual}
                alt="Semantic AI Visualization"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 gradient-neural"></div>
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 gradient-hero rounded-full opacity-60 animate-float"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent rounded-full opacity-80 animate-pulse"></div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold mb-8">How Chatbots "Find" Companies</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              AI doesn't just search for keywords - it understands, evaluates, and recommends based on 
              sophisticated criteria that go far beyond traditional SEO signals.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 gradient-hero rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Network className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Context Over Keywords</h4>
                  <p className="text-muted-foreground text-sm">AI understands the intent behind queries and matches content based on semantic meaning, not just word matching.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Authority Recognition</h4>
                  <p className="text-muted-foreground text-sm">AI evaluates your expertise, authoritativeness, and trustworthiness across the entire web ecosystem.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Database className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Structured Intelligence</h4>
                  <p className="text-muted-foreground text-sm">Properly formatted data helps AI understand your content's purpose and relationship to user queries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GAIO Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gaioPillars.map((pillar, index) => (
            <Card key={index} className="p-6 hover:shadow-ai transition-all duration-300 group">
              <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <pillar.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{pillar.description}</p>
              
              <div className="space-y-1">
                {pillar.techniques.map((technique, techIndex) => (
                  <div key={techIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-xs text-muted-foreground">{technique}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
