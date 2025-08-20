import { Button } from "@/components/ui/button";
import { Navigation, Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        "AI Content Audit",
        "Semantic Optimization", 
        "Structured Data",
        "Authority Building",
        "Citation Development",
        "AI Monitoring"
      ]
    },
    {
      title: "Resources",
      links: [
        "What is GAIO?",
        "AI Optimization Guide",
        "Case Studies",
        "Blog",
        "Documentation",
        "Support"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Our Team",
        "Careers",
        "Contact",
        "Privacy Policy",
        "Terms of Service"
      ]
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 gradient-hero rounded-lg flex items-center justify-center">
                  <Navigation className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">GEO-Pilot</span>
                  <div className="text-sm text-muted-foreground">Generative AI Optimization</div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-sm">
                Pioneering the future of AI optimization. We help businesses dominate 
                generative AI search and recommendations.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>hello@geo-pilot.ai</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href="#" 
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-semibold mb-2">Stay ahead of the AI curve</h3>
              <p className="text-sm text-muted-foreground">
                Get the latest insights on AI optimization and GAIO strategies.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 md:w-64 px-3 py-2 text-sm border border-border rounded-md bg-background"
              />
              <Button variant="hero" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div>
              © 2024 GEO-Pilot. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;