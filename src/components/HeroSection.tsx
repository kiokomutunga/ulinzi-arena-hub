
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-cover bg-center flex items-center">
      <div className="relative bg-blue-800 overflow-hidden min-h-screen w-full">
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover object-center" 
            src="https://readdy.ai/api/search-image?query=modern%20sports%20stadium%20at%20sunset%20with%20dramatic%20lighting%2C%20football%20pitch%20visible%2C%20spectators%20in%20stands%2C%20professional%20sports%20venue%20with%20mountains%20in%20background%2C%20cinematic%20wide%20angle%20shot%20with%20perfect%20lighting&width=1920&height=1080&seq=hero&orientation=landscape" 
            alt="Ulinzi Sports Complex" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-32 px-4 sm:py-48 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="md:w-2/3 lg:w-1/2">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-tight">
              Experience World-Class Events
            </h1>
            <p className="mt-8 text-xl text-blue-100 max-w-3xl leading-relaxed">
              Ulinzi Sports Complex hosts premier sporting competitions, concerts, and community events in a state-of-the-art facility designed for unforgettable experiences.
            </p>
            <div className="mt-12 flex flex-wrap gap-6">
              <a href="#events" className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-blue-700 bg-white hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
                View Events
              </a>
              <a href="#booking" className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
                Book Tickets
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
