
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";

const AthleticsTrack = () => {
  const navigate = useNavigate();

  const trackFeatures = [
    {
      name: 'Professional Track',
      image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'IAAF-certified 400-meter track with 8 lanes, professional surface, and precise lane markings.',
      features: ['IAAF Certified', '400-Meter Track', '8 Competition Lanes', 'Professional Surface', 'Precise Markings']
    },
    {
      name: 'Field Event Areas',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Comprehensive field event facilities including jumping pits, throwing areas, and pole vault.',
      features: ['Long Jump Pit', 'High Jump Area', 'Shot Put Circle', 'Discus Cage', 'Pole Vault Runway']
    },
    {
      name: 'Timing Systems',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Advanced electronic timing systems with photo-finish capabilities and digital displays.',
      features: ['Electronic Timing', 'Photo Finish', 'Digital Displays', 'Wind Measurement', 'Data Recording']
    },
    {
      name: 'Support Facilities',
      image: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Complete athlete support facilities including warm-up areas, equipment storage, and medical stations.',
      features: ['Warm-up Areas', 'Equipment Storage', 'Medical Station', 'Officials Area', 'Spectator Seating']
    }
  ];

  const services = [
    {
      title: 'Track & Field Training',
      description: 'Professional training programs for sprinters, distance runners, and field event athletes.',
      icon: '🏃‍♂️'
    },
    {
      title: 'Athletics Competitions',
      description: 'Host regional and national athletics meets with full timing and officiating support.',
      icon: '🏆'
    },
    {
      title: 'School Programs',
      description: 'Educational athletics programs for schools and youth development initiatives.',
      icon: '🎓'
    },
    {
      title: 'Fitness Training',
      description: 'Track-based fitness programs, running clubs, and endurance training sessions.',
      icon: '💪'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-red-600 to-red-800 text-white pt-20">
        <div className="max-w-7xl mx-auto px-8 h-full flex items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Athletics Track</h1>
            <p className="text-xl opacity-90">
              IAAF-certified track and field complex for champions
            </p>
          </div>
        </div>
      </div>

      {/* Track Features */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Track & Field Complex</h2>
            <p className="text-xl text-gray-600">
              World-class athletics facilities meeting international standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {trackFeatures.map((feature, index) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Athletics Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive track and field programs
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
          <h2 className="text-4xl font-bold mb-4">Book Athletics Track</h2>
          <p className="text-xl opacity-90 mb-8">
            Train like a champion at our world-class facility
          </p>
          <button 
            onClick={() => navigate('/booking')}
            className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-md text-lg font-semibold transition-colors duration-300"
          >
            Book Track
          </button>
        </div>
      </div>
    </div>
  );
};

export default AthleticsTrack;
