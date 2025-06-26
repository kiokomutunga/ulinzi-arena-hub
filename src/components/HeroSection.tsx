
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[70vh] bg-cover bg-center flex items-center" 
    >
      <div className="relative bg-blue-800 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover object-top" 
            src="https://readdy.ai/api/search-image?query=modern%20sports%20stadium%20at%20sunset%20with%20dramatic%20lighting%2C%20football%20pitch%20visible%2C%20spectators%20in%20stands%2C%20professional%20sports%20venue%20with%20mountains%20in%20background%2C%20cinematic%20wide%20angle%20shot%20with%20perfect%20lighting&width=1440&height=600&seq=hero&orientation=landscape" 
            alt="Ulinzi Sports Complex" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent opacity-90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Experience World-Class Events
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl">
              Ulinzi Sports Complex hosts premier sporting competitions, concerts, and community events in a state-of-the-art facility.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-button text-blue-700 bg-white hover:bg-blue-50 whitespace-nowrap cursor-pointer">
                View Events
              </a>
              <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-button text-white bg-blue-600 hover:bg-blue-700 whitespace-nowrap cursor-pointer">
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
