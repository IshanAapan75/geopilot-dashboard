import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";

const CTASection = () => {
  const urgencyPoints = [
    {
      icon: TrendingUp,
      text: "AI adoption is accelerating—every day matters"
    },
    {
      icon: Shield,
      text: "First-mover advantage in AI optimization"
    },
    {
      icon: Zap,
      text: "Your competitors are already planning their AI strategy"
    }
  ];

  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-20 h-20 bg-white rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white rounded-full animate-float" style={{ animationDelay: "4s" }}></div>
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-white rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Don't Get Left Behind in the 
              <span className="text-accent-foreground"> AI Revolution</span>
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Every day you wait is another day your competitors can establish themselves as 
              authoritative sources in AI systems. Secure your brand's future in the AI era today.
            </p>

            <div className="space-y-4 mb-8">
              {urgencyPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <point.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/90">{point.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="xl" className="text-primary font-semibold">
                Start Free Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
                Schedule Consultation
              </Button>
            </div>
          </div>

          {/* Form */}
          <Card className="p-8 shadow-glow bg-white/95 backdrop-blur-sm">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Get Your AI Readiness Report</h3>
              <p className="text-muted-foreground">
                Free assessment of your current AI optimization status
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="John" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Smith" className="mt-1" />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="john@company.com" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="company">Company Name *</Label>
                <Input id="company" placeholder="Your Company Inc." className="mt-1" />
              </div>

              <div>
                <Label htmlFor="website">Website URL</Label>
                <Input id="website" placeholder="https://yourcompany.com" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="challenge">Primary Interest</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select your main focus" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="visibility">Increase AI Visibility</SelectItem>
                    <SelectItem value="authority">Build Authority & Citations</SelectItem>
                    <SelectItem value="leads">Generate AI-Driven Leads</SelectItem>
                    <SelectItem value="competitive">Competitive Advantage</SelectItem>
                    <SelectItem value="future">Future-Proof Strategy</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="details">Additional Details (Optional)</Label>
                <Textarea 
                  id="details" 
                  placeholder="Tell us about your current challenges or goals..." 
                  className="mt-1 min-h-[80px]"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full">
                Get My Free AI Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to receive communications from GEO-Pilot. 
                We respect your privacy and never share your information.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTASection;