
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] hero-gradient flex items-center">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center bg-white/20 rounded-full px-4 py-2 text-white backdrop-blur-sm">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Next Event: June 10, 2024</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Experience Sports
            <br />
            <span className="text-accent">Like Never Before</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Join thousands of fans at Kenya's premier multipurpose stadium. From thrilling football matches to world-class concerts and community events.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              View Events
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
            >
              Virtual Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
