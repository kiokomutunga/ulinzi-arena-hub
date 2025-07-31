
import { useState, useEffect } from "react";
import { Play } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "World-Class Sports Facility",
      subtitle: "Experience excellence at Kenya's premier defence sports complex",
      description: "State-of-the-art facilities for professional sports, training, and community events.",
      cta: "Explore Facilities"
    },
    {
      id: 2,
      title: "Premier Sports Events",
      subtitle: "Host to national and international competitions",
      description: "Witness thrilling matches and competitions in our professional-grade venues.",
      cta: "View Events"
    },
    {
      id: 3,
      title: "Professional Training Ground",
      subtitle: "Elite training facilities for defence personnel and athletes",
      description: "Advanced equipment and facilities designed for peak performance and excellence.",
      cta: "Book Training"
    },
    {
      id: 4,
      title: "Olympic Swimming Pool",
      subtitle: "Competition-standard aquatic facilities",
      description: "50-meter pool with 8 lanes, perfect for training and competitions.",
      cta: "Book Swimming"
    },
    {
      id: 5,
      title: "Tennis Excellence",
      subtitle: "Professional tennis courts for champions",
      description: "Four professional courts with modern lighting and spectator seating.",
      cta: "Book Courts"
    },
    {
      id: 6,
      title: "Indoor Arena",
      subtitle: "Multi-purpose indoor sports facility",
      description: "Versatile indoor space for various sports and events.",
      cta: "Book Arena"
    },
    {
      id: 7,
      title: "VIP Experience",
      subtitle: "Premium hospitality and viewing areas",
      description: "Luxury seating and exclusive amenities for special events.",
      cta: "VIP Packages"
    },
    {
      id: 8,
      title: "Stadium Views",
      subtitle: "Spectacular venue from every angle",
      description: "Impressive architecture and design showcasing military precision.",
      cta: "Virtual Tour"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const scrollToVideoTour = () => {
    const videoSection = document.querySelector('.video-tour-section');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/images/tour.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white px-4 sm:px-8 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 font-light opacity-90">
            {slides[currentSlide].subtitle}
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-8 sm:mb-12 opacity-80 max-w-2xl mx-auto">
            {slides[currentSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <button 
              onClick={() => document.getElementById('facilities')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 md:py-6 font-semibold transition-colors duration-300 cursor-pointer whitespace-nowrap rounded-lg"
            >
              {slides[currentSlide].cta}
            </button>
            <button 
              onClick={scrollToVideoTour}
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 md:py-6 font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap rounded-lg flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4" />
              Watch Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
