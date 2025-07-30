
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";

const MainStadium = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/mainpitch.png')`
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        
        <div className="relative z-10 flex h-full items-center justify-center pt-20">
          <div className="text-center text-white px-8 max-w-4xl">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Main Stadium
            </h1>
            <p className="text-2xl mb-8 font-light opacity-90">
              The Heart of Ulinzi Sports Complex
            </p>
            <div className="flex gap-6 justify-center">
              <button 
                onClick={() => navigate('/booking')}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold transition-colors duration-300 cursor-pointer whitespace-nowrap !rounded-button"
              >
                Book Stadium
              </button>
              <button 
                onClick={() => navigate('/facilities')}
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap !rounded-button"
              >
                View All Facilities
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 px-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Introduction */}
          <div className="mb-16">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Welcome to the heart of Ulinzi Sports Complex, the Main Stadium, a beacon of athletic excellence and national pride located in Lang'ata, Nairobi, Kenya. This magnificent arena stands as the premier venue within our state-of-the-art facility, designed to host a myriad of sporting events, cultural celebrations, and significant national gatherings. It is here that the spirit of competition and camaraderie truly comes alive, echoing the dedication and discipline that defines Kenyan sports.
            </p>
          </div>

          {/* Stadium Images Gallery */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="md:col-span-2">
              <img 
                src="/images/mainpitch.png"
                alt="Main Stadium aerial view"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <img 
                src="/images/sideview.png"
                alt="Stadium side view"
                className="w-full h-36 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="/images/gate.png"
                alt="Stadium entrance"
                className="w-full h-36 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Stadium Description */}
          <div className="mb-16">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Main Stadium is a marvel of modern architectural design, boasting an impressive seating capacity of 7,500 spectators, ensuring an intimate yet electrifying atmosphere for every event. Its thoughtful design incorporates covered stands to provide comfort and protection for fans, regardless of the weather, while the expansive natural grass pitch offers a pristine playing surface. During major events, the stadium transforms into a vibrant spectacle of color and sound, amplified by powerful floodlighting that illuminates the arena, creating an unforgettable ambiance for both players and spectators alike. The overall comfort and strategic layout ensure that every seat offers an excellent vantage point, making each experience memorable.
            </p>
          </div>

          {/* Events Hosted */}
          <div className="mb-16">
            <div className="bg-green-50 p-8 rounded-lg mb-8">
              <img 
                src="/images/mainpitch.png"
                alt="Football match at stadium"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <p className="text-lg text-gray-700 leading-relaxed">
                This versatile stadium has been the stage for a diverse range of prestigious events, from thrilling Kenyan Premier League matches featuring our own Ulinzi Stars FC, to solemn military parades that honor our nation's heroes. It has also hosted high-stakes national athletics competitions, drawing top talent from across the country, and has served as a venue for large-scale community sports festivals that bring people together in celebration of sport. The stadium's adaptability makes it the ideal location for any significant occasion, reflecting its importance in the national sporting calendar.
              </p>
            </div>
          </div>

          {/* Football Culture */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/images/ulinziworriors.png"
                  alt="Ulinzi team"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The stadium holds a special place in the hearts of football enthusiasts, particularly as the home ground for Ulinzi Stars FC. Matchdays here are an electrifying experience, fueled by the passionate support of home fans who create a formidable atmosphere for visiting teams. The stadium is renowned as a military stronghold in Kenyan football, a place where the team's fighting spirit is palpable. Past victories celebrated within these walls have cemented its reputation as a fortress, a testament to the team's resilience and the unwavering support of its dedicated fanbase.
                </p>
              </div>
            </div>
          </div>

          {/* Athletics & Training */}
          <div className="mb-16">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Beyond football, the Main Stadium is a crucial hub for track and field athletics, providing an exceptional environment for athlete conditioning and training camps. Military sports units and national teams frequently utilize its facilities to hone their skills, benefiting from the high-quality track and field amenities. The stadium's comprehensive setup supports rigorous training regimes, helping athletes prepare for national and international competitions, further solidifying its role in developing Kenya's sporting talent.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <img 
                src="/images/mainpitch.png"
                alt="Athletics track"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="/images/gym.png"
                alt="Training session"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Spectator Experience */}
          <div className="mb-16">
            <div className="bg-red-50 p-8 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Spectator experience and accessibility are paramount in the stadium's design. Efficient crowd flow management, robust security measures, and clear signage ensure ease of access and a safe environment for all attendees. The well-appointed seating offers excellent viewing angles, prioritizing comfort throughout the duration of any event. Essential facilities such as clean washrooms, dedicated media areas for broadcasting and reporting, and a variety of food vendors offering local and international cuisine are readily available, enhancing the overall visitor experience.
              </p>
              <div className="grid md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">7,500</div>
                  <div className="text-sm text-gray-600">Seating Capacity</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Security</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">10+</div>
                  <div className="text-sm text-gray-600">Food Vendors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Accessibility</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Features */}
          <div className="mb-16">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The stadium is equipped with advanced technical and safety features to meet international standards. Its state-of-the-art lighting systems provide optimal visibility for night games and broadcasts, while the superior drainage system ensures the pitch remains in excellent condition. Comprehensive broadcast support infrastructure is in place for media coverage, and meticulous emergency plans are implemented to guarantee the safety and well-being of all participants and spectators. The facility consistently adheres to the stringent standards set by various sports federations, ensuring a world-class experience.
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-900 text-white p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Experience the Main Stadium</h2>
            <p className="text-lg mb-8 opacity-90">
              We invite event organizers, sports federations, educational institutions, and passionate fans to experience the grandeur of the Main Stadium. Whether you are looking to host a major sporting event, a corporate function, or a community gathering, our facilities are ready to accommodate your needs. Booking the Main Stadium means aligning with a venue that embodies excellence, national pride, and the vibrant spirit of Kenyan sports, contributing to its legacy and future success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/booking')}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold transition-colors duration-300 cursor-pointer whitespace-nowrap !rounded-button"
              >
                Book Stadium Now
              </button>
              <button 
                onClick={() => navigate('/my-bookings')}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap !rounded-button"
              >
                View My Bookings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainStadium;
