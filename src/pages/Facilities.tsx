
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";

const Facilities = () => {
  const navigate = useNavigate();

  const facilities = [
    {
      name: 'Main Stadium',
      capacity: '7,500 Seats',
      image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Our flagship stadium features a natural grass pitch, modern lighting systems, and seating for 7,500 spectators. Home to Ulinzi Stars FC and host to major football tournaments.',
      features: ['Natural Grass Pitch', 'Modern Lighting', 'VIP Boxes', 'Media Center', 'Training Facilities'],
      link: '/main-stadium'
    },
    {
      name: 'Indoor Basketball Arena',
      capacity: '1,000 Seats',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'State-of-the-art indoor arena with professional wooden court, advanced sound system, and seating for 1,000 fans. Home court advantage for Ulinzi Warriors basketball team.',
      features: ['Professional Wooden Court', 'Advanced Sound System', 'Climate Control', 'Electronic Scoreboard', 'Player Facilities'],
      link: '/booking'
    },
    {
      name: 'Olympic Swimming Pool',
      capacity: '8 Lanes',
      image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Competition-standard 50-meter pool with 8 lanes, diving boards, and electronic timing systems. Perfect for training and hosting swimming competitions.',
      features: ['50-Meter Pool', '8 Competition Lanes', 'Diving Boards', 'Electronic Timing', 'Spectator Seating'],
      link: '/swimming-pool'
    },
    {
      name: 'Tennis Courts',
      capacity: '4 Courts',
      image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Four professional hard courts with modern lighting and spectator seating. Ideal for tournaments, training, and recreational play.',
      features: ['Professional Hard Courts', 'Modern Lighting', 'Spectator Seating', 'Equipment Storage', 'Court Maintenance'],
      link: '/booking'
    },
    {
      name: 'Fitness Center & Gym',
      capacity: 'Full Equipment',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Fully equipped modern gym with cardio and strength training equipment. State-of-the-art facilities for military personnel and civilian fitness enthusiasts.',
      features: ['Modern Cardio Equipment', 'Strength Training Area', 'Free Weights Section', 'Personal Training', 'Locker Rooms'],
      link: '/gyms'
    },
    {
      name: 'Athletics Track',
      capacity: '8 Lanes',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Professional 400-meter track with 8 lanes, field event areas, and timing systems. Used for athletics training and competitions.',
      features: ['400-Meter Track', '8 Competition Lanes', 'Field Event Areas', 'Electronic Timing', 'Warm-up Areas'],
      link: '/booking'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-red-600 to-red-800 text-white pt-20">
        <div className="max-w-7xl mx-auto px-8 h-full flex items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Our Facilities</h1>
            <p className="text-xl opacity-90">
              World-class sports infrastructure designed with military precision
            </p>
          </div>
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.name}</h3>
                  <p className="text-red-600 font-semibold mb-3">{facility.capacity}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">{facility.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {facility.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button 
                    onClick={() => navigate(facility.link)}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 font-semibold transition-colors duration-300 cursor-pointer whitespace-nowrap !rounded-button"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience Excellence?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your preferred facility and join the legacy of champions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/booking')}
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-colors duration-300 cursor-pointer whitespace-nowrap !rounded-button"
            >
              Book Now
            </button>
            <button 
              onClick={() => navigate('/')}
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap !rounded-button"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
