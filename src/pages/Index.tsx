import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NewsSection from "@/components/NewsSection";
import VideoTourSection from "@/components/VideoTourSection";
import { useNavigate, Link } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [currentFacility, setCurrentFacility] = useState(0);

  const facilities = [
    {
      name: 'Main Stadium',
      capacity: '7,500 Seats',
      image: '/images/mainpitch.png',
      description: 'Our flagship stadium features a natural grass pitch, modern lighting systems, and seating for 7,500 spectators. Home to Ulinzi Stars FC and host to major football tournaments.',
      link: '/main-stadium'
    },
    {
      name: 'Indoor Basketball Arena', 
      capacity: '1,000 Seats',
      image: '/images/basketball.png',
      description: 'State-of-the-art indoor arena with professional wooden court, advanced sound system, and seating for 1,000 fans. Home court advantage for Ulinzi Warriors basketball team.',
      link: '/basketball-arena'
    },
    {
      name: 'Olympic Swimming Pool',
      capacity: '8 Lanes',
      image: '/images/swimmingpool.png',
      description: 'Competition-standard 50-meter pool with 8 lanes, diving boards, and electronic timing systems. Perfect for training and hosting swimming competitions.',
      link: '/swimming-pool'
    },
    {
      name: 'Tennis Courts',
      capacity: '4 Courts',
      image: '/images/tennis.png',
      description: 'Four professional hard courts with modern lighting and spectator seating. Ideal for tournaments, training, and recreational play.',
      link: '/tennis-courts'
    },
    {
      name: 'Fitness Center & Nature Trail',
      capacity: 'Full Equipment',
      image: '/images/gym.png',
      description: 'Fully equipped modern gym with cardio and strength training equipment, plus scenic nature trail for outdoor fitness activities.',
      link: '/gyms'
    }
  ];

  // Auto-scroll facility cards every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFacility((prev) => (prev + 1) % facilities.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [facilities.length]);

  const nextFacility = () => {
    setCurrentFacility((prev) => (prev + 1) % facilities.length);
  };

  const prevFacility = () => {
    setCurrentFacility((prev) => (prev - 1 + facilities.length) % facilities.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Auto-scrolling Background */}
      <HeroSection />

      {/* Introduction Block */}
      <div className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              World-Class Military Sports Hub
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Ulinzi Sports Complex stands as Kenya's premier military sports facility, a testament to excellence and precision that defines the Kenya Defence Forces. Located in the heart of Lang'ata, Nairobi, this state-of-the-art complex was inaugurated in 2022 and has quickly established itself as a national sports powerhouse.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Built with military precision and designed for sporting excellence, the complex serves as home to some of Kenya's most celebrated teams including Ulinzi Stars FC and Ulinzi Warriors basketball team. With world-class facilities spanning across multiple sports disciplines, we host everything from local community events to international competitions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The 7,500-seater stadium, indoor arena, Olympic-size swimming pool, and comprehensive training facilities make this complex a beacon of sporting achievement in East Africa. Every element has been crafted to foster athletic excellence while maintaining the disciplined standards that the military is renowned for.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-red-600 text-white p-8 rounded-lg">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">7,500</div>
                    <div className="text-sm opacity-90">Stadium Capacity</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">2022</div>
                    <div className="text-sm opacity-90">Year Inaugurated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">5+</div>
                    <div className="text-sm opacity-90">Major Facilities</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">KDF</div>
                    <div className="text-sm opacity-90">Military Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities Carousel */}
      <div id="facilities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Premium Sports Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience world-class sporting infrastructure designed with military precision and built for champions
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentFacility * 100}%)` }}
              >
                {facilities.map((facility, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="max-w-4xl mx-auto">
                      <Link 
                        to={facility.link}
                        className="block bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                      >
                        <div className="grid lg:grid-cols-2">
                          <div className="relative h-96 lg:h-auto overflow-hidden">
                            <img 
                              src={facility.image} 
                              alt={facility.name}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="p-12 flex flex-col justify-center">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">
                              {facility.name}
                            </h3>
                            <p className="text-xl text-red-600 font-semibold mb-6">
                              {facility.capacity}
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                              {facility.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={prevFacility}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl p-4 rounded-full transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button 
              onClick={nextFacility}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl p-4 rounded-full transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="flex justify-center mt-8 space-x-2">
              {facilities.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFacility(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentFacility === index ? 'bg-red-600 w-6' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Teams Section */}
      <div id="teams" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our Championship Teams
            </h2>
            <p className="text-xl text-gray-600">
              Home to Kenya's finest military sports teams
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Ulinzi Stars FC</h3>
                <p className="text-green-600 font-semibold">Kenya Premier League Champions</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Ulinzi Stars FC represents the pinnacle of military football excellence in Kenya. With multiple league titles and cup victories, the team embodies the discipline and tactical precision of the Kenya Defence Forces. Playing their home matches at our 7,500-seater stadium, they continue to be a formidable force in Kenyan football.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">3</div>
                  <div className="text-sm text-gray-600">League Titles</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">5</div>
                  <div className="text-sm text-gray-600">Cup Victories</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">2019</div>
                  <div className="text-sm text-gray-600">Last Title</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Ulinzi Warriors</h3>
                <p className="text-orange-600 font-semibold">Kenya Basketball Federation League</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Ulinzi Warriors dominate the basketball courts with the same military precision that defines our institution. Playing in our state-of-the-art indoor arena, they have consistently been among Kenya's top basketball teams, showcasing exceptional teamwork and strategic gameplay that reflects military training principles.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-orange-600">2</div>
                  <div className="text-sm text-gray-600">League Titles</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">4</div>
                  <div className="text-sm text-gray-600">Playoff Appearances</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">2023</div>
                  <div className="text-sm text-gray-600">Last Championship</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div id="events" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300">
              Don't miss the action at Kenya's premier sports destination
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">March 15, 2025</div>
                  <div className="font-semibold">3:00 PM</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Ulinzi Stars vs AFC Leopards</h3>
              <p className="text-gray-300 mb-4">Kenya Premier League showdown at our main stadium</p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm font-semibold transition-colors duration-300 cursor-pointer whitespace-nowrap !rounded-button">
                Get Tickets
              </button>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">March 22, 2025</div>
                  <div className="font-semibold">7:00 PM</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Warriors vs KPA Basketball</h3>
              <p className="text-gray-300 mb-4">Playoff semifinals at our indoor arena</p>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 text-sm font-semibold transition-colors duration-300 cursor-pointer whitespace-nowrap !rounded-button">
                Get Tickets
              </button>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">April 5, 2025</div>
                  <div className="font-semibold">9:00 AM</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Kip Keino Classic 2025</h3>
              <p className="text-gray-300 mb-4">International athletics meet featuring world-class athletes</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-semibold transition-colors duration-300 cursor-pointer whitespace-nowrap !rounded-button">
                Get Tickets
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold transition-colors duration-300 cursor-pointer whitespace-nowrap !rounded-button">
              View All Events
            </button>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div id="news">
        <NewsSection />
      </div>

      {/* Video Tour Section */}
      <VideoTourSection />

      {/* Contact Section */}
      <div id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Visit Ulinzi Sports Complex
            </h2>
            <p className="text-xl text-gray-600">
              Experience world-class sports facilities and military excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-2">General Inquiries</p>
              <p className="text-lg font-semibold text-red-600">+254 20 123 4567</p>
              <p className="text-gray-600 mb-2 mt-4">Event Bookings</p>
              <p className="text-lg font-semibold text-red-600">+254 20 765 4321</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-2">General Information</p>
              <p className="text-lg font-semibold text-red-600">info@ulinzisports.co.ke</p>
              <p className="text-gray-600 mb-2 mt-4">Event Hosting</p>
              <p className="text-lg font-semibold text-red-600">events@ulinzisports.co.ke</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visit Us</h3>
              <p className="text-gray-600 mb-2">Ulinzi Sports Complex</p>
              <p className="text-lg font-semibold text-gray-900">Lang'ata Road, Nairobi</p>
              <p className="text-gray-600 mt-2">Open Daily: 6:00 AM - 10:00 PM</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Whether you're a sports fan, event organizer, or fitness enthusiast, Ulinzi Sports Complex welcomes you to experience the finest in military sports excellence. Join us in celebrating the spirit of competition, discipline, and national pride that defines our great institution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/booking')}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold transition-colors duration-300 cursor-pointer whitespace-nowrap !rounded-button"
              >
                Plan Your Visit
              </button>
              <button 
                onClick={() => navigate('/booking')}
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap !rounded-button"
              >
                Host an Event
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Ulinzi Sports Complex</h3>
            <p className="text-gray-300">
              Where military precision meets sporting excellence
            </p>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2025 Ulinzi Sports Complex. Proudly serving Kenya with honor, discipline, and sporting excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
