import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "World-Class Sports Facility",
      subtitle: "Experience excellence at Kenya's premier defence sports complex",
      description: "State-of-the-art facilities for professional sports, training, and community events.",
      image: "/images/mainpitch.png",
      cta: "Explore Facilities"
    },
    {
      id: 2,
      title: "Premier Sports Events",
      subtitle: "Host to national and international competitions",
      description: "Witness thrilling matches and competitions in our professional-grade venues.",
      image: "/images/basketball.png",
      cta: "View Events"
    },
    {
      id: 3,
      title: "Professional Training Ground",
      subtitle: "Elite training facilities for defence personnel and athletes",
      description: "Advanced equipment and facilities designed for peak performance and excellence.",
      image: "/images/gym.png",
      cta: "Book Training"
    },
    {
      id: 4,
      title: "Olympic Swimming Pool",
      subtitle: "Competition-standard aquatic facilities",
      description: "50-meter pool with 8 lanes, perfect for training and competitions.",
      image: "/images/swimmingpool.png",
      cta: "Book Swimming"
    },
    {
      id: 5,
      title: "Tennis Excellence",
      subtitle: "Professional tennis courts for champions",
      description: "Four professional courts with modern lighting and spectator seating.",
      image: "/images/tennis.png",
      cta: "Book Courts"
    },
    {
      id: 6,
      title: "Indoor Arena",
      subtitle: "Multi-purpose indoor sports facility",
      description: "Versatile indoor space for various sports and events.",
      image: "/images/indoora.png",
      cta: "Book Arena"
    },
    {
      id: 7,
      title: "VIP Experience",
      subtitle: "Premium hospitality and viewing areas",
      description: "Luxury seating and exclusive amenities for special events.",
      image: "/images/vip.png",
      cta: "VIP Packages"
    },
    {
      id: 8,
      title: "Stadium Views",
      subtitle: "Spectacular venue from every angle",
      description: "Impressive architecture and design showcasing military precision.",
      image: "/images/sideview.png",
      cta: "Virtual Tour"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToVideoTour = () => {
    const videoSection = document.querySelector('.video-tour-section');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Auto-scrolling Background Images */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{
            backgroundImage: `url('${slides[currentSlide].image}')`
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white px-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light opacity-90">
            {slides[currentSlide].subtitle}
          </p>
          <p className="text-base md:text-lg mb-12 opacity-80 max-w-2xl mx-auto">
            {slides[currentSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <button 
              onClick={() => document.getElementById('facilities')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-red-600 hover:bg-red-700 text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-semibold transition-colors duration-300 cursor-pointer whitespace-nowrap !rounded-button"
            >
              {slides[currentSlide].cta}
            </button>
            <button 
              onClick={scrollToVideoTour}
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap !rounded-button"
            >
              <Play className="w-4 h-4 mr-2 inline" />
              Watch Tour
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="bg-stadium-black/60 hover:bg-stadium-black/80 text-white backdrop-blur-sm"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-red-600 w-6" : "bg-white/50 w-2"
              }`}
            />
          ))}
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="bg-stadium-black/60 hover:bg-stadium-black/80 text-white backdrop-blur-sm"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
