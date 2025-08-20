import { useEffect, useState } from "react";
import { TrendingUp, Search, Bot, Users, Zap } from "lucide-react";

const MarketSlide = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({
    aiSearchUsers: 0,
    traditionalSearch: 100,
    marketCapture: 0
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Animate statistics
    const timer = setTimeout(() => {
      setStats({
        aiSearchUsers: 67,
        traditionalSearch: 33,
        marketCapture: 45
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-6 pt-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
        {/* Content */}
        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">Market Evolution</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
              The AI Search
              <span className="gradient-hero bg-clip-text text-transparent"> Revolution</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Traditional search is rapidly evolving. AI-powered assistants like ChatGPT, Claude, and Gemini 
              are becoming the new gateway to information discovery.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Market Capture Reality</h3>
            
            <div className="grid gap-6">
              {/* AI Search Growth */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Bot className="h-5 w-5 text-primary" />
                    <span className="font-medium">AI Search Adoption</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">{stats.aiSearchUsers}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className="h-3 rounded-full gradient-hero transition-all duration-2000 ease-out"
                    style={{ width: `${stats.aiSearchUsers}%` }}
                  />
                </div>
              </div>

              {/* Traditional Search Decline */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Search className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">Traditional Search Reliance</span>
                  </div>
                  <span className="text-2xl font-bold text-muted-foreground">{stats.traditionalSearch}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className="h-3 rounded-full bg-muted-foreground/50 transition-all duration-2000 ease-out"
                    style={{ width: `${stats.traditionalSearch}%` }}
                  />
                </div>
              </div>

              {/* Market Capture */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-accent" />
                    <span className="font-medium">Businesses Optimizing for AI</span>
                  </div>
                  <span className="text-2xl font-bold text-accent">{stats.marketCapture}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className="h-3 rounded-full bg-accent transition-all duration-2000 ease-out"
                    style={{ width: `${stats.marketCapture}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className={`relative transition-all duration-1200 delay-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="relative">
            {/* Background glow effect */}
            <div className="absolute inset-0 gradient-neural rounded-3xl blur-3xl scale-110" />
            
            {/* Main visual container */}
            <div className="relative bg-card rounded-3xl p-8 shadow-ai border border-border/50">
              <div className="grid grid-cols-2 gap-6">
                {/* Traditional Search */}
                <div className="text-center space-y-4 p-6 rounded-2xl bg-muted/30">
                  <Search className="h-12 w-12 mx-auto text-muted-foreground animate-pulse" />
                  <h4 className="font-semibold text-muted-foreground">Traditional Search</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Keyword matching</p>
                    <p>• Link-based results</p>
                    <p>• Manual browsing</p>
                  </div>
                </div>

                {/* AI Search */}
                <div className="text-center space-y-4 p-6 rounded-2xl gradient-card shadow-glow">
                  <Bot className="h-12 w-12 mx-auto text-primary animate-bounce" />
                  <h4 className="font-semibold text-primary">AI Search</h4>
                  <div className="space-y-2 text-sm">
                    <p>• Semantic understanding</p>
                    <p>• Direct answers</p>
                    <p>• Contextual responses</p>
                  </div>
                </div>
              </div>

              {/* Arrow transition */}
              <div className="flex justify-center mt-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-muted-foreground to-primary" />
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent" />
                </div>
              </div>

              {/* Bottom stats */}
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  <Users className="inline h-4 w-4 mr-1" />
                  Over 180M people now use AI for information discovery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketSlide;