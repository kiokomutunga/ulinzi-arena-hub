
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Calendar, MapPin } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "ULINZI SPORTS COMPLEX",
      subtitle: "KENYA DEFENCE FORCES FACILITY",
      description: "World-class multi-sport facility hosting premier events with military precision and excellence",
      image: "https://readdy.ai/api/search-image?query=modern%20sports%20stadium%20at%20sunset%20with%20dramatic%20lighting%2C%20football%20pitch%20visible%2C%20spectators%20in%20stands%2C%20professional%20sports%20venue%20with%20mountains%20in%20background%2C%20cinematic%20wide%20angle%20shot%20with%20perfect%20lighting&width=1440&height=600&seq=hero1&orientation=landscape",
      cta: "EXPLORE FACILITIES",
      featured: "20,000 Seater Stadium"
    },
    {
      id: 2,
      title: "OLYMPIC STANDARD ATHLETICS",
      subtitle: "IAAF CERTIFIED TRACK & FIELD",
      description: "Professional athletics facility meeting international standards for world-class competitions",
      image: "https://readdy.ai/api/search-image?query=professional%20running%20track%20with%20red%20surface%2C%20white%20lane%20markings%2C%20field%20event%20areas%2C%20stadium%20seating%2C%20perfect%20condition%2C%20sunny%20day%2C%20empty%20track%20ready%20for%20competition&width=1440&height=600&seq=hero2&orientation=landscape",
      cta: "VIEW ATHLETICS",
      featured: "400m Professional Track"
    },
    {
      id: 3,
      title: "LIVE MATCH EXPERIENCE",
      subtitle: "PREMIER FOOTBALL EVENTS",
      description: "Experience the thrill of live football with state-of-the-art facilities and atmosphere",
      image: "https://readdy.ai/api/search-image?query=live%20football%20match%20in%20progress%2C%20players%20on%20green%20pitch%2C%20stadium%20lights%2C%20excited%20crowd%2C%20professional%20sports%20photography%2C%20dynamic%20action%20shot%20of%20football%20game&width=1440&height=600&seq=hero3&orientation=landscape",
      cta: "BOOK TICKETS",
      featured: "Live Match Today"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 military-hero-gradient opacity-80"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Featured Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-military-maroon/20 backdrop-blur-sm border border-military-light-blue/30 mb-6">
              <span className="w-2 h-2 bg-military-maroon rounded-full mr-2 animate-pulse"></span>
              <span className="text-military-light-blue font-semibold text-sm military-precision">
                {slides[currentSlide].featured}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-military-white mb-4 text-shadow-strong military-precision">
              {slides[currentSlide].title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-military-light-blue mb-6 military-precision">
              {slides[currentSlide].subtitle}
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-military-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              {slides[currentSlide].description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-military-maroon hover:bg-military-maroon/80 text-military-white font-bold military-precision px-8 py-3 text-lg"
              >
                {slides[currentSlide].cta}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-military-light-blue text-military-white hover:bg-military-light-blue hover:text-military-black font-bold military-precision px-8 py-3 text-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                WATCH HIGHLIGHTS
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="military-glass rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-military-light-blue mb-2">20,000</div>
                <div className="text-military-white font-semibold">SEATING CAPACITY</div>
              </div>
              <div className="military-glass rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-military-light-blue mb-2">400M</div>
                <div className="text-military-white font-semibold">ATHLETICS TRACK</div>
              </div>
              <div className="military-glass rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-military-light-blue mb-2">24/7</div>
                <div className="text-military-white font-semibold">SECURITY</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {/* Play/Pause Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={togglePlayPause}
            className="text-military-white hover:bg-military-white/10"
          >
            <Play className={`h-4 w-4 ${isPlaying ? 'animate-pulse' : ''}`} />
          </Button>

          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-military-light-blue w-8'
                    : 'bg-military-white/50 hover:bg-military-white/75'
                }`}
              />
            ))}
          </div>

          {/* Previous/Next Buttons */}
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="text-military-white hover:bg-military-white/10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="text-military-white hover:bg-military-white/10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Upcoming Event Banner */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="military-glass border-t border-military-light-blue/30 p-4">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-military-maroon rounded-full animate-pulse"></div>
                  <span className="text-military-light-blue font-semibold text-sm">NEXT EVENT</span>
                </div>
                <div className="text-military-white font-semibold">
                  KDF vs Police FC - Premier League
                </div>
                <div className="flex items-center space-x-2 text-military-light-blue text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>Today, 3:00 PM</span>
                  <MapPin className="h-4 w-4 ml-2" />
                  <span>Main Stadium</span>
                </div>
              </div>
              <Button
                size="sm"
                className="bg-military-maroon hover:bg-military-maroon/80 text-military-white font-bold"
              >
                GET TICKETS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
