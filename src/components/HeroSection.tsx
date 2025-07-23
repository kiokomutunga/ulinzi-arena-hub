
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Calendar, MapPin } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "World-Class Sports Facility",
      subtitle: "Experience excellence at Kenya's premier defence sports complex",
      description: "State-of-the-art facilities for professional sports, training, and community events.",
      image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      cta: "Explore Facilities"
    },
    {
      id: 2,
      title: "Premier Sports Events",
      subtitle: "Host to national and international competitions",
      description: "Witness thrilling matches and competitions in our professional-grade venues.",
      image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      cta: "View Events"
    },
    {
      id: 3,
      title: "Professional Training Ground",
      subtitle: "Elite training facilities for defence personnel and athletes",
      description: "Advanced equipment and facilities designed for peak performance and excellence.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      cta: "Book Training"
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

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Hero Content */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center h-full">
              <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="max-w-2xl">
                  <h2 className="text-sm font-semibold text-accent mb-4 text-professional tracking-wider">
                    ULINZI SPORTS COMPLEX
                  </h2>
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-200 mb-4 font-medium">
                    {slide.subtitle}
                  </p>
                  <p className="text-base text-gray-300 mb-8 leading-relaxed max-w-lg">
                    {slide.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                      {slide.cta}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-white text-white hover:bg-white hover:text-black font-semibold"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Watch Tour
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-6" : "bg-white/50"
              }`}
            />
          ))}
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Play/Pause Control */}
      <div className="absolute top-32 right-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
        >
          {isPlaying ? (
            <div className="w-4 h-4 flex space-x-1">
              <div className="w-1 h-4 bg-white"></div>
              <div className="w-1 h-4 bg-white"></div>
            </div>
          ) : (
            <Play className="w-4 h-4" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
