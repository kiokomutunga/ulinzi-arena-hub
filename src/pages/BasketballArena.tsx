
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";

const BasketballArena = () => {
  const navigate = useNavigate();

  const arenaFeatures = [
    {
      name: 'Professional Court',
      image: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'FIBA-standard wooden court with premium flooring system designed for professional basketball games and training.',
      features: ['FIBA Standard Court', 'Premium Wooden Floor', 'Professional Hoops', 'Court Markings', 'Safety Padding']
    },
    {
      name: 'Spectator Seating',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Comfortable tiered seating for 1,000 spectators with excellent sightlines and modern amenities.',
      features: ['1,000 Seat Capacity', 'Tiered Design', 'Excellent Sightlines', 'Comfortable Seating', 'Accessibility Features']
    },
    {
      name: 'Advanced Audio/Visual',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'State-of-the-art sound system and LED displays for enhanced game experience and broadcasting capabilities.',
      features: ['Professional Sound System', 'LED Scoreboards', 'Broadcast Equipment', 'HD Cameras', 'Live Streaming Capability']
    },
    {
      name: 'Player Facilities',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Comprehensive locker rooms, training areas, and medical facilities for teams and athletes.',
      features: ['Team Locker Rooms', 'Training Areas', 'Medical Room', 'Equipment Storage', 'Warm-up Areas']
    }
  ];

  const services = [
    {
      title: 'Tournament Hosting',
      description: 'Professional basketball tournaments and championship games with full broadcast support.',
      icon: '🏆'
    },
    {
      title: 'Team Training',
      description: 'Dedicated training sessions for basketball teams with coaching support and equipment.',
      icon: '🏀'
    },
    {
      title: 'Youth Programs',
      description: 'Basketball development programs for young athletes and school competitions.',
      icon: '👥'
    },
    {
      title: 'Corporate Events',
      description: 'Corporate basketball events, team building activities, and company tournaments.',
      icon: '🏢'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-red-600 to-red-800 text-white pt-20">
        <div className="max-w-7xl mx-auto px-8 h-full flex items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Basketball Arena</h1>
            <p className="text-xl opacity-90">
              Professional indoor arena for championship basketball
            </p>
          </div>
        </div>
      </div>

      {/* Arena Features */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Arena Features</h2>
            <p className="text-xl text-gray-600">
              State-of-the-art facilities for professional basketball
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {arenaFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center">
                          <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive basketball facility services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Book the Basketball Arena</h2>
          <p className="text-xl opacity-90 mb-8">
            Experience professional basketball at its finest
          </p>
          <button 
            onClick={() => navigate('/booking')}
            className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-md text-lg font-semibold transition-colors duration-300"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketballArena;
