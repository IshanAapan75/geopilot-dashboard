import { Card } from "@/components/ui/card";
import { TrendingUp, Search, MessageSquare, Brain } from "lucide-react";
import aiShiftVisual from "@/assets/ai-shift-visual.jpg";

const AIShiftSection = () => {
  const stats = [
    { icon: MessageSquare, value: "73%", label: "of users now prefer AI for quick answers" },
    { icon: Search, value: "2.4x", label: "faster information discovery with AI" },
    { icon: Brain, value: "85%", label: "of businesses unprepared for AI search" },
    { icon: TrendingUp, value: "300%", label: "growth in AI-powered queries" }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The AI Revolution is 
              <span className="gradient-accent bg-clip-text text-transparent"> Changing Everything</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              AI chatbots like ChatGPT, Gemini, and Claude are becoming the new front door for information discovery. 
              When users ask "What's the best solution for X?" your brand must be the answer.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 gradient-hero rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">From Search to Conversation</h3>
                  <p className="text-muted-foreground">Users are shifting from keyword searches to natural conversations with AI assistants.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">AI-Generated Recommendations</h3>
                  <p className="text-muted-foreground">AI systems directly recommend businesses, bypassing traditional search results entirely.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Zero-Click Answers</h3>
                  <p className="text-muted-foreground">Users get complete answers without visiting your website, unless AI knows to cite you.</p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="p-4 text-center shadow-card hover:shadow-ai transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-ai">
              <img
                src={aiShiftVisual}
                alt="AI Shift Visualization"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 gradient-neural"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 gradient-hero rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent rounded-full opacity-60 animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIShiftSection;
