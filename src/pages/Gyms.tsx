
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";

const Gyms = () => {
  const navigate = useNavigate();

  const gymFacilities = [
    {
      name: 'Main Fitness Center',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Our main fitness center features state-of-the-art equipment for all fitness levels. Designed with military precision to deliver exceptional training experiences.',
      equipment: ['Cardio Machines', 'Strength Training Equipment', 'Free Weights', 'Functional Training Area', 'Stretching Zone']
    },
    {
      name: 'Strength Training Zone',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Dedicated strength training area with professional-grade equipment. Perfect for building military-level physical conditioning and strength.',
      equipment: ['Olympic Weightlifting Platform', 'Power Racks', 'Barbells & Plates', 'Dumbbells', 'Resistance Machines']
    },
    {
      name: 'Cardio Center',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Modern cardio center with latest equipment and entertainment systems. Perfect for endurance training and cardiovascular fitness.',
      equipment: ['Treadmills', 'Elliptical Machines', 'Stationary Bikes', 'Rowing Machines', 'Stair Climbers']
    },
    {
      name: 'Functional Training Area',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Specialized area for functional movement training, CrossFit-style workouts, and military-specific training protocols.',
      equipment: ['Kettlebells', 'Battle Ropes', 'Plyometric Boxes', 'Suspension Trainers', 'Medicine Balls']
    }
  ];

  const services = [
    {
      title: 'Personal Training',
      description: 'One-on-one training sessions with certified military fitness instructors.',
      price: 'KSh 2,000/session'
    },
    {
      title: 'Group Classes',
      description: 'High-intensity group fitness classes including boot camp and circuit training.',
      price: 'KSh 500/class'
    },
    {
      title: 'Military Fitness Programs',
      description: 'Specialized programs designed for military personnel and fitness enthusiasts.',
      price: 'KSh 8,000/month'
    },
    {
      title: 'Nutrition Counseling',
      description: 'Professional nutrition guidance to complement your fitness journey.',
      price: 'KSh 1,500/session'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-red-600 to-red-800 text-white pt-20">
        <div className="max-w-7xl mx-auto px-8 h-full flex items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Fitness & Gym Facilities</h1>
            <p className="text-xl opacity-90">
              Military-grade fitness training for peak performance
            </p>
          </div>
        </div>
      </div>

      {/* Gym Facilities */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Gym Facilities</h2>
            <p className="text-xl text-gray-600">
              State-of-the-art equipment for all your fitness needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {gymFacilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{facility.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{facility.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Equipment Available:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {facility.equipment.map((item, itemIndex) => (
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

      {/* Services & Pricing */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services & Pricing</h2>
            <p className="text-xl text-gray-600">
              Professional fitness services tailored to your goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                <p className="text-red-600 font-bold text-lg">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Membership Information */}
      <div className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Membership Options</h2>
            <p className="text-xl opacity-90">
              Choose the plan that fits your fitness journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Basic</h3>
              <p className="text-4xl font-bold mb-4">KSh 3,000<span className="text-lg">/month</span></p>
              <ul className="text-left space-y-2 mb-6">
                <li>• Gym access during regular hours</li>
                <li>• Basic equipment usage</li>
                <li>• Locker room access</li>
              </ul>
              <button 
                onClick={() => navigate('/booking')}
                className="w-full bg-white text-red-600 hover:bg-gray-100 py-3 px-6 font-semibold transition-colors duration-300 cursor-pointer whitespace-nowrap !rounded-button"
              >
                Choose Basic
              </button>
            </div>

            <div className="bg-white bg-opacity-20 rounded-xl p-8 text-center border-2 border-white">
              <h3 className="text-2xl font-bold mb-4">Premium</h3>
              <p className="text-4xl font-bold mb-4">KSh 5,000<span className="text-lg">/month</span></p>
              <ul className="text-left space-y-2 mb-6">
                <li>• 24/7 gym access</li>
                <li>• All equipment usage</li>
                <li>• Group classes included</li>
                <li>• Personal training discount</li>
              </ul>
              <button 
                onClick={() => navigate('/booking')}
                className="w-full bg-white text-red-600 hover:bg-gray-100 py-3 px-6 font-semibold transition-colors duration-300 cursor-pointer whitespace-nowrap !rounded-button"
              >
                Choose Premium
              </button>
            </div>

            <div className="bg-white bg-opacity-10 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Elite</h3>
              <p className="text-4xl font-bold mb-4">KSh 8,000<span className="text-lg">/month</span></p>
              <ul className="text-left space-y-2 mb-6">
                <li>• All Premium benefits</li>
                <li>• Personal training sessions</li>
                <li>• Nutrition counseling</li>
                <li>• Priority booking</li>
              </ul>
              <button 
                onClick={() => navigate('/booking')}
                className="w-full bg-white text-red-600 hover:bg-gray-100 py-3 px-6 font-semibold transition-colors duration-300 cursor-pointer whitespace-nowrap !rounded-button"
              >
                Choose Elite
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gyms;
