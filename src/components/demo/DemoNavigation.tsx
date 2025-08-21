import { Button } from "@/components/ui/button";
import { ArrowLeft, Circle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const DemoNavigation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const slideIndex = Math.round(scrollPosition / windowHeight);
      setCurrentSlide(slideIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="flex items-center gap-2">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`p-1 transition-all duration-300 ${
                currentSlide === index ? 'opacity-100' : 'opacity-40'
              }`}
            >
              <Circle 
                className={`h-2 w-2 transition-all duration-300 ${
                  currentSlide === index ? 'fill-primary text-primary' : 'text-muted-foreground'
                }`}
              />
            </button>
          ))}
        </div>

        {/* <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            GEO-Pilot Demo
          </span>
        </div> */}
      </div>
    </nav>
  );
};

export default DemoNavigation;
