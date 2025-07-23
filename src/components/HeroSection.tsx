
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Shield, MapPin, Users, Trophy, Award, Target } from "lucide-react";

const heroImages = [
  {
    url: "https://readdy.ai/api/search-image?query=modern%20sports%20stadium%20at%20sunset%20with%20dramatic%20lighting%2C%20football%20pitch%20visible%2C%20spectators%20in%20stands%2C%20professional%20sports%20venue%20with%20mountains%20in%20background%2C%20cinematic%20wide%20angle%20shot%20with%20perfect%20lighting&width=1440&height=600&seq=hero&orientation=landscape",
    title: "OPERATIONAL EXCELLENCE",
    subtitle: "Premier military sports complex hosting world-class defense and civilian operations"
  },
  {
    url: "https://readdy.ai/api/search-image?query=modern%20football%20stadium%20with%20green%20pitch%2C%20professional%20lighting%2C%20packed%20stands%20with%20spectators%2C%20clear%20blue%20sky%2C%20aerial%20view%20of%20the%20entire%20stadium%20complex%20with%20perfect%20grass&width=1440&height=600&seq=facility1&orientation=landscape",
    title: "STRATEGIC ADVANTAGE",
    subtitle: "FIFA standard facilities with military precision and civilian accessibility"
  },
  {
    url: "https://readdy.ai/api/search-image?query=professional%20running%20track%20with%20red%20surface%2C%20white%20lane%20markings%2C%20field%20event%20areas%2C%20stadium%20seating%2C%20perfect%20condition%2C%20sunny%20day%2C%20empty%20track%20ready%20for%20competition&width=1440&height=600&seq=facility2&orientation=landscape",
    title: "ELITE PERFORMANCE",
    subtitle: "IAAF certified athletics facilities for defense training and public competitions"
  },
  {
    url: "https://readdy.ai/api/search-image?query=modern%20indoor%20sports%20arena%20with%20high%20ceiling%2C%20professional%20lighting%2C%20tiered%20seating%2C%20polished%20wooden%20floor%2C%20basketball%20court%20markings%2C%20wide%20angle%20view%20showing%20the%20entire%20arena%20space&width=1440&height=600&seq=facility3&orientation=landscape",
    title: "MULTI-DOMAIN OPERATIONS",
    subtitle: "Multi-purpose indoor arena supporting defense and community missions"
  }
];

const stats = [
  { number: "35,000", label: "STADIUM CAPACITY", icon: Users },
  { number: "100+", label: "MISSIONS COMPLETED", icon: Trophy },
  { number: "25", label: "YEARS OF SERVICE", icon: Award },
  { number: "24/7", label: "SECURITY OPERATIONS", icon: Shield },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Dynamic Background Slideshow */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              className="w-full h-full object-cover object-center" 
              src={image.url}
              alt={image.title}
            />
            <div className="absolute inset-0 defense-hero-gradient opacity-80"></div>
          </div>
        ))}
      </div>

      {/* Professional Military Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            {/* Military Command Badge */}
            <div className="inline-flex items-center space-x-3 defense-glass rounded-full px-6 py-3 mb-8 border border-defense-gold/30">
              <Target className="h-5 w-5 text-defense-gold" />
              <span className="text-primary-foreground font-bold military-precision">LANG'ATA COMMAND • NAIROBI</span>
            </div>

            {/* Primary Mission Statement */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-primary-foreground mb-8 fade-in-up text-shadow-strong military-precision">
              ULINZI SPORTS
              <br />
              <span className="defense-insignia">COMPLEX</span>
            </h1>

            {/* Dynamic Mission Brief */}
            <p className="text-2xl md:text-3xl text-primary-foreground/95 mb-6 slide-up font-semibold military-precision">
              {heroImages[currentSlide].subtitle}
            </p>

            {/* Defense Force Motto */}
            <div className="text-xl text-defense-gold mb-16 fade-in-up font-bold military-precision">
              "UTUMISHI KWA WOTE • SERVICE TO ALL"
            </div>

            {/* Command Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20 fade-in-up">
              <a href="#operations" className="group">
                <Button size="lg" className="bg-defense-gold text-defense-navy hover:bg-defense-gold/90 font-bold px-10 py-6 text-xl rounded-lg hover-lift-defense military-precision">
                  <Trophy className="mr-3 h-6 w-6" />
                  VIEW OPERATIONS
                </Button>
              </a>
              <a href="#booking" className="group">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="defense-border text-primary-foreground hover:bg-primary-foreground hover:text-defense-navy font-bold px-10 py-6 text-xl rounded-lg hover-lift-defense military-precision border-2 border-defense-gold"
                >
                  <Shield className="mr-3 h-6 w-6" />
                  SECURE BOOKING
                </Button>
              </a>
            </div>

            {/* Defense Statistics Dashboard */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 counter-animation">
              {stats.map((stat, index) => (
                <div key={index} className="text-center defense-glass rounded-xl p-8 hover-lift-defense border border-defense-gold/20">
                  <stat.icon className="h-10 w-10 text-defense-gold mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary-foreground mb-2 military-precision">{stat.number}</div>
                  <div className="text-sm text-defense-gold font-semibold military-precision">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Military-Grade Slideshow Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4 defense-glass rounded-full px-6 py-3 border border-defense-gold/30">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="text-primary-foreground hover:bg-defense-gold/20 rounded-full"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className="flex space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-defense-gold' : 'bg-primary-foreground/50'
                }`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="text-primary-foreground hover:bg-defense-gold/20 rounded-full"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-primary-foreground hover:bg-defense-gold/20 rounded-full ml-2"
          >
            <Play className={`h-5 w-5 ${isPlaying ? 'opacity-50' : 'opacity-100'}`} />
          </Button>
        </div>
      </div>

      {/* Military Command Indicator */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex flex-col items-center space-y-2 text-primary-foreground/70">
          <span className="text-sm font-bold rotate-90 origin-center military-precision">DEPLOY</span>
          <div className="w-px h-12 bg-primary-foreground/50"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
