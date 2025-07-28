
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";

const SwimmingPool = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        <div className="relative z-10 flex h-full items-center justify-center pt-20">
          <div className="text-center text-white px-8 max-w-4xl">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Olympic Swimming Pool
            </h1>
            <p className="text-2xl mb-8 font-light opacity-90">
              World-Class Aquatic Excellence
            </p>
            <div className="flex gap-6 justify-center">
              <button 
                onClick={() => navigate('/booking')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transition-colors duration-300 cursor-pointer whitespace-nowrap !rounded-button"
              >
                Book Pool
              </button>
              <button 
                onClick={() => navigate('/facilities')}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap !rounded-button"
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
              The Olympic Swimming Pool at Ulinzi Sports Complex represents the pinnacle of aquatic sports facilities in Kenya. This state-of-the-art facility embodies the precision and excellence that defines our military institution, providing a world-class venue for competitive swimming, training, and aquatic programs. Designed to international Olympic standards, our pool serves as a cornerstone of aquatic excellence, where athletes push their limits and achieve remarkable feats in the water.
            </p>
          </div>

          {/* Pool Images Gallery */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <img 
              src="https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Olympic swimming pool"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Swimming competition"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Pool Specifications */}
          <div className="mb-16">
            <div className="bg-blue-50 p-8 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our Olympic-standard swimming pool features eight competition lanes spanning 50 meters in length, meeting all international federation requirements for competitive swimming. The pool maintains a consistent depth of 2 meters, providing optimal conditions for all swimming disciplines. Crystal-clear water is maintained through advanced filtration systems, while precision temperature control ensures year-round comfort for athletes and recreational swimmers alike. The facility includes professional diving boards, electronic timing systems, and underwater viewing windows for coaching and analysis purposes.
              </p>
              <div className="grid md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50m</div>
                  <div className="text-sm text-gray-600">Pool Length</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
                  <div className="text-sm text-gray-600">Competition Lanes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2m</div>
                  <div className="text-sm text-gray-600">Pool Depth</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">26°C</div>
                  <div className="text-sm text-gray-600">Water Temperature</div>
                </div>
              </div>
            </div>
          </div>

          {/* Training Programs */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Training Programs & Services</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Military Swimming Training</h4>
                <p className="text-gray-700 leading-relaxed">
                  Specialized programs designed for military personnel, focusing on endurance, tactical swimming, and water survival skills. Our certified military instructors provide comprehensive training that enhances both physical fitness and operational readiness.
                </p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Competitive Swimming</h4>
                <p className="text-gray-700 leading-relaxed">
                  Elite coaching programs for competitive swimmers of all levels, from beginner to Olympic preparation. Our experienced coaches utilize advanced techniques and training methodologies to develop champion athletes.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Learn to Swim</h4>
                <p className="text-gray-700 leading-relaxed">
                  Comprehensive swimming lessons for children and adults, taught by certified instructors in a safe and supportive environment. Programs range from basic water safety to advanced stroke development.
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Aqua Fitness</h4>
                <p className="text-gray-700 leading-relaxed">
                  Low-impact fitness classes conducted in water, perfect for rehabilitation, weight management, and overall wellness. Our aqua fitness programs combine cardiovascular exercise with strength training.
                </p>
              </div>
            </div>
          </div>

          {/* Facilities & Equipment */}
          <div className="mb-16">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The swimming complex includes comprehensive support facilities designed to enhance the athlete experience. Modern changing rooms with individual lockers provide privacy and security, while the pool deck offers ample space for warm-up exercises and coaching. Professional diving boards cater to both training and competition needs, supported by depth specifications that meet international safety standards. The facility also houses a fully equipped pool maintenance center, ensuring optimal water quality and facility management around the clock.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Pool changing rooms"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Diving boards"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Pool deck"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Competitions & Events */}
          <div className="mb-16">
            <div className="bg-red-50 p-8 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our Olympic Swimming Pool regularly hosts prestigious swimming competitions, including national championships, military swimming meets, and international tournaments. The facility's electronic timing systems, underwater cameras, and broadcast capabilities ensure professional-level event management. Spectator seating provides excellent viewing angles for families and swimming enthusiasts, while dedicated areas for officials and media support comprehensive event coverage and administration.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-900 text-white p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Dive into Excellence</h2>
            <p className="text-lg mb-8 opacity-90">
              Whether you're a competitive swimmer, fitness enthusiast, or someone looking to learn this essential life skill, our Olympic Swimming Pool offers unparalleled facilities and expert instruction. Join us in celebrating the beauty and challenge of aquatic sports, where every stroke brings you closer to your personal best and contributes to Kenya's proud swimming heritage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/booking')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transition-colors duration-300 cursor-pointer whitespace-nowrap !rounded-button"
              >
                Book Pool Session
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

export default SwimmingPool;
