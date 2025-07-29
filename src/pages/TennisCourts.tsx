
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";

const TennisCourts = () => {
  const navigate = useNavigate();

  const courtFeatures = [
    {
      name: 'Professional Courts',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Four professional hard courts with premium surfaces meeting international tennis standards.',
      features: ['4 Professional Courts', 'Hard Court Surface', 'International Standards', 'Professional Nets', 'Court Maintenance']
    },
    {
      name: 'Modern Lighting',
      image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Advanced LED floodlighting system for evening matches and training sessions.',
      features: ['LED Floodlights', 'Even Light Distribution', 'Energy Efficient', 'Night Play Ready', 'Professional Grade']
    },
    {
      name: 'Spectator Areas',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Comfortable seating areas for spectators with excellent court views and amenities.',
      features: ['Spectator Seating', 'Excellent Views', 'Shade Structures', 'Refreshment Areas', 'Accessibility Features']
    },
    {
      name: 'Club Facilities',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Modern clubhouse with locker rooms, equipment rental, and player amenities.',
      features: ['Modern Clubhouse', 'Locker Rooms', 'Equipment Rental', 'Pro Shop', 'Player Lounge']
    }
  ];

  const services = [
    {
      title: 'Court Rental',
      description: 'Hourly court rentals for recreational and competitive play with equipment available.',
      icon: '🎾'
    },
    {
      title: 'Tennis Coaching',
      description: 'Professional tennis coaching for all skill levels from beginners to advanced players.',
      icon: '👨‍🏫'
    },
    {
      title: 'Tournament Hosting',
      description: 'Complete tournament organization services for local and regional tennis competitions.',
      icon: '🏆'
    },
    {
      title: 'Tennis Programs',
      description: 'Junior development programs, group lessons, and tennis camps for all ages.',
      icon: '🎯'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-red-600 to-red-800 text-white pt-20">
        <div className="max-w-7xl mx-auto px-8 h-full flex items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Tennis Courts</h1>
            <p className="text-xl opacity-90">
              Professional tennis facilities for players of all levels
            </p>
          </div>
        </div>
      </div>

      {/* Court Features */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tennis Complex Features</h2>
            <p className="text-xl text-gray-600">
              Professional facilities designed for championship tennis
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {courtFeatures.map((feature, index) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tennis Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive tennis programs and services
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
          <h2 className="text-4xl font-bold mb-4">Book Tennis Courts</h2>
          <p className="text-xl opacity-90 mb-8">
            Reserve your court and elevate your tennis game
          </p>
          <button 
            onClick={() => navigate('/booking')}
            className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-md text-lg font-semibold transition-colors duration-300"
          >
            Book Courts
          </button>
        </div>
      </div>
    </div>
  );
};

export default TennisCourts;
