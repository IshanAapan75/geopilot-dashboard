import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Loading = () => {

  return (
    <div className="min-h-screen gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-32 left-1/3 w-32 h-32 bg-white rounded-full animate-float" style={{ animationDelay: "4s" }}></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-white rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-white rounded-full animate-float" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full mb-8 animate-pulse">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>

          {/* Main Message */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Thank You for Your
            <span className="text-accent-foreground block"> Submission!</span>
          </h1>

          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Please wait while our AI systems analyze your business. 
            Your personalized report will be sent to your registered email address.
          </p>

          {/* Sparkle Elements */}
          <div className="flex justify-center gap-4 mb-12">
            <Sparkles className="w-6 h-6 text-accent-foreground animate-pulse" />
            <Sparkles className="w-8 h-8 text-white animate-pulse" style={{ animationDelay: "0.5s" }} />
            <Sparkles className="w-6 h-6 text-accent-foreground animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
        </div>

        {/* Email notification */}
        <div className="max-w-2xl mx-auto text-center text-white mb-12">
          <div className="p-8 bg-white/10 rounded-xl backdrop-blur-sm">
            <Mail className="w-12 h-12 text-accent-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Check Your Email</h3>
            <p className="text-white/80">
              Please keep an eye on your inbox. Your personalized AI analysis report 
              will be delivered shortly with detailed insights and recommendations.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/">
            <Button variant="accent" size="xl" className="text-primary font-semibold">
              Return to Homepage
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Loading;
