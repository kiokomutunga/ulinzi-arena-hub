
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[70vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&auto=format&fit=crop')"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/70"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Experience World-Class Events
          </h1>
          
          <p className="text-xl mb-8 leading-relaxed opacity-95">
            Ulinzi Sports Complex hosts premier sporting competitions, concerts, and community events in a state-of-the-art facility.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">
              View Events
            </Button>
            <Button 
              size="lg" 
              className="bg-primary border-2 border-white text-white hover:bg-primary/90 text-lg px-8 py-6"
            >
              Book Tickets
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
