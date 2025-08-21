import { Card } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, Eye, Users } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Eye,
      title: "Invisible to AI",
      description: "Your brand doesn't appear in AI-generated answers, losing valuable visibility to potential customers.",
      impact: "Lost Opportunities"
    },
    {
      icon: TrendingDown,
      title: "Declining Traditional SEO",
      description: "Keyword-based SEO strategies become less effective as users bypass search engines for AI answers.",
      impact: "Reduced Traffic"
    },
    {
      icon: Users,
      title: "Competitor Advantage",
      description: "Forward-thinking competitors are already optimizing for AI, gaining first-mover advantage in citations.",
      impact: "Market Share Loss"
    },
    {
      icon: AlertTriangle,
      title: "No AI Strategy",
      description: "Without GAIO, your business lacks a strategy for the fastest-growing information discovery channel.",
      impact: "Future Risk"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why traditional SEO 
            <span className="text-destructive"> isn't enough</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            AI systems don't just look for keywords - they understand context, authority, and semantic meaning. 
            Your traditional SEO strategy is leaving you invisible in the AI era.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((problem, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-ai transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{problem.description}</p>
              <div className="inline-block px-3 py-1 bg-destructive/10 text-destructive text-sm rounded-full font-medium">
                {problem.impact}
              </div>
            </Card>
          ))}
        </div>

        {/* Call-out Box */}
        <Card className="p-8 gradient-card border-l-4 border-l-destructive shadow-ai">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-destructive" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-destructive">
                The Cost of Waiting
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Every day you delay implementing GAIO is another day your competitors can establish themselves 
                as authoritative sources in AI systems. Once AI models learn to associate certain topics with 
                your competitors, it becomes exponentially harder to change those associations.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProblemSection;
