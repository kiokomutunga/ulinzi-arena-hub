import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Shield, MapPin, Users, Trophy } from "lucide-react";

const heroImages = [
  {
    url: "https://readdy.ai/api/search-image?query=modern%20sports%20stadium%20at%20sunset%20with%20dramatic%20lighting%2C%20football%20pitch%20visible%2C%20spectators%20in%20stands%2C%20professional%20sports%20venue%20with%20mountains%20in%20background%2C%20cinematic%20wide%20angle%20shot%20with%20perfect%20lighting&width=1440&height=600&seq=hero&orientation=landscape",
    title: "Experience World-Class Events",
    subtitle: "Ulinzi Sports Complex hosts premier sporting competitions, concerts, and community events"
  },
  {
    url: "https://readdy.ai/api/search-image?query=modern%20football%20stadium%20with%20green%20pitch%2C%20professional%20lighting%2C%20packed%20stands%20with%20spectators%2C%20clear%20blue%20sky%2C%20aerial%20view%20of%20the%20entire%20stadium%20complex%20with%20perfect%20grass&width=1440&height=600&seq=facility1&orientation=landscape",
    title: "FIFA Standard Main Pitch",
    subtitle: "FIFA standard football field with seating for 35,000 spectators"
  },
  {
    url: "https://readdy.ai/api/search-image?query=professional%20running%20track%20with%20red%20surface%2C%20white%20lane%20markings%2C%20field%20event%20areas%2C%20stadium%20seating%2C%20perfect%20condition%2C%20sunny%20day%2C%20empty%20track%20ready%20for%20competition&width=1440&height=600&seq=facility2&orientation=landscape",
    title: "IAAF Certified Athletics Track",
    subtitle: "IAAF certified 400m track with 8 lanes and field event areas"
  },
  {
    url: "https://readdy.ai/api/search-image?query=modern%20indoor%20sports%20arena%20with%20high%20ceiling%2C%20professional%20lighting%2C%20tiered%20seating%2C%20polished%20wooden%20floor%2C%20basketball%20court%20markings%2C%20wide%20angle%20view%20showing%20the%20entire%20arena%20space&width=1440&height=600&seq=facility3&orientation=landscape",
    title: "Multi-Purpose Indoor Arena",
    subtitle: "Multi-purpose indoor venue with 10,000 seating capacity"
  }
];

const stats = [
  { number: "20,000", label: "Stadium Capacity", icon: Users },
  { number: "50+", label: "Events Hosted", icon: Trophy },
  { number: "15", label: "Years of Service", icon: Shield },
  { number: "24/7", label: "Security Coverage", icon: Shield },
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
            <div className="absolute inset-0 military-hero-gradient opacity-70"></div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Location Badge */}
            <div className="inline-flex items-center space-x-2 bg-military-black/20 backdrop-blur-sm border border-military-gold/30 rounded-full px-4 py-2 mb-8">
              <MapPin className="h-4 w-4 text-military-gold" />
              <span className="text-primary-foreground font-medium">Lang'ata, Nairobi</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-primary-foreground mb-6 fade-in-up text-shadow">
              ULINZI SPORTS
              <br />
              <span className="text-military-gold">COMPLEX</span>
            </h1>

            {/* Dynamic Subtitle */}
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 slide-up font-medium">
              {heroImages[currentSlide].subtitle}
            </p>

            {/* Military Heritage Statement */}
            <div className="text-lg text-military-gold mb-12 fade-in-up font-medium">
              "Excellence Through Discipline & Commitment"
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 fade-in-up">
              <a href="#events" className="group">
                <Button size="lg" className="bg-military-gold text-military-black hover:bg-military-gold/90 font-bold px-8 py-4 text-lg rounded-xl hover-lift">
                  <Trophy className="mr-2 h-5 w-5" />
                  View Events
                </Button>
              </a>
              <a href="#booking" className="group">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-military-black font-bold px-8 py-4 text-lg rounded-xl hover-lift"
                >
                  <Shield className="mr-2 h-5 w-5" />
                  Book Facility
                </Button>
              </a>
            </div>

            {/* Statistics Counter */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 counter-animation">
              {stats.map((stat, index) => (
                <div key={index} className="text-center military-glass rounded-xl p-6 hover-lift">
                  <stat.icon className="h-8 w-8 text-military-gold mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary-foreground mb-1">{stat.number}</div>
                  <div className="text-sm text-primary-foreground/80 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slideshow Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="text-primary-foreground hover:bg-military-gold/20 rounded-full"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className="flex space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-military-gold' : 'bg-primary-foreground/50'
                }`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="text-primary-foreground hover:bg-military-gold/20 rounded-full"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-primary-foreground hover:bg-military-gold/20 rounded-full ml-2"
          >
            <Play className={`h-5 w-5 ${isPlaying ? 'opacity-50' : 'opacity-100'}`} />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex flex-col items-center space-y-2 text-primary-foreground/70">
          <span className="text-sm font-medium rotate-90 origin-center">SCROLL</span>
          <div className="w-px h-12 bg-primary-foreground/50"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;