
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Map, Users, Ticket, Calendar, Trophy, Activity, Building, Dumbbell, MapPin, Clock, Star } from "lucide-react";

const FacilitiesSection = () => {
  const facilities = [
    {
      title: "Main Stadium",
      description: "FIFA standard football field with premium seating for 35,000 spectators",
      icon: Trophy,
      image: "https://readdy.ai/api/search-image?query=modern%20football%20stadium%20with%20green%20pitch%2C%20professional%20lighting%2C%20packed%20stands%20with%20spectators%2C%20clear%20blue%20sky%2C%20aerial%20view%20of%20the%20entire%20stadium%20complex%20with%20perfect%20grass&width=400&height=300&seq=facility1&orientation=landscape",
      capacity: "35,000",
      features: ["FIFA Standard", "Premium Seating", "Professional Lighting", "VIP Boxes"],
      category: "Main Venue"
    },
    {
      title: "Athletics Track",
      description: "IAAF certified 400m track with 8 lanes and comprehensive field event areas",
      icon: Activity,
      image: "https://readdy.ai/api/search-image?query=professional%20running%20track%20with%20red%20surface%2C%20white%20lane%20markings%2C%20field%20event%20areas%2C%20stadium%20seating%2C%20perfect%20condition%2C%20sunny%20day%2C%20empty%20track%20ready%20for%20competition&width=400&height=300&seq=facility2&orientation=landscape",
      capacity: "15,000",
      features: ["IAAF Certified", "8 Lanes", "Field Events", "Electronic Timing"],
      category: "Athletics"
    },
    {
      title: "Indoor Arena",
      description: "Multi-purpose indoor venue with state-of-the-art facilities and 10,000 seating capacity",
      icon: Building,
      image: "https://readdy.ai/api/search-image?query=modern%20indoor%20sports%20arena%20with%20high%20ceiling%2C%20professional%20lighting%2C%20tiered%20seating%2C%20polished%20wooden%20floor%2C%20basketball%20court%20markings%2C%20wide%20angle%20view%20showing%20the%20entire%20arena%20space&width=400&height=300&seq=facility3&orientation=landscape",
      capacity: "10,000",
      features: ["Multi-Purpose", "Climate Control", "Premium Sound", "LED Displays"],
      category: "Indoor Sports"
    },
    {
      title: "Conference Center",
      description: "Versatile spaces for meetings, presentations, corporate events and military ceremonies",
      icon: Users,
      image: "https://readdy.ai/api/search-image?query=elegant%20conference%20center%20with%20modern%20furnishings%2C%20presentation%20screens%2C%20comfortable%20seating%2C%20professional%20lighting%2C%20business%20setting%2C%20clean%20and%20sophisticated%20design&width=400&height=300&seq=facility4&orientation=landscape",
      capacity: "500",
      features: ["AV Equipment", "Flexible Seating", "Catering Ready", "WiFi"],
      category: "Conference"
    },
    {
      title: "Basketball Courts",
      description: "Professional indoor courts with spectator seating and broadcast capabilities",
      icon: Activity,
      image: "https://readdy.ai/api/search-image?query=indoor%20basketball%20court%20with%20professional%20wooden%20floor%2C%20modern%20lighting%2C%20spectator%20seating%2C%20clean%20modern%20sports%20facility%20interior&width=400&height=300&seq=facility5&orientation=landscape",
      capacity: "2,000",
      features: ["Professional Courts", "Spectator Seating", "Broadcast Ready", "Training Facilities"],
      category: "Court Sports"
    },
    {
      title: "Volleyball Courts",
      description: "Indoor and outdoor volleyball courts with tournament-grade facilities",
      icon: Trophy,
      image: "https://readdy.ai/api/search-image?query=volleyball%20court%20with%20professional%20net%2C%20marked%20floor%2C%20indoor%20sports%20facility%2C%20spectator%20seating%2C%20bright%20lighting&width=400&height=300&seq=facility6&orientation=landscape",
      capacity: "1,500",
      features: ["Tournament Grade", "Indoor & Outdoor", "Professional Nets", "Scoreboard"],
      category: "Court Sports"
    },
    {
      title: "Tennis Complex",
      description: "Multiple tennis courts with professional surfaces, lighting, and clubhouse facilities",
      icon: Activity,
      image: "https://readdy.ai/api/search-image?query=tennis%20courts%20with%20professional%20surface%2C%20net%2C%20court%20markings%2C%20outdoor%20setting%2C%20clear%20blue%20sky%2C%20well%20maintained%20facility&width=400&height=300&seq=facility7&orientation=landscape",
      capacity: "800",
      features: ["Multiple Courts", "Professional Surface", "Floodlights", "Clubhouse"],
      category: "Racquet Sports"
    },
    {
      title: "Fitness & Wellness Center",
      description: "Fully equipped gym, rehabilitation center, and wellness facilities with modern equipment",
      icon: Dumbbell,
      image: "https://readdy.ai/api/search-image?query=modern%20fitness%20center%20with%20exercise%20equipment%2C%20weight%20machines%2C%20bright%20lighting%2C%20clean%20interior%2C%20professional%20gym%20setting&width=400&height=300&seq=facility8&orientation=landscape",
      capacity: "200",
      features: ["Modern Equipment", "Rehabilitation", "Personal Training", "Wellness Programs"],
      category: "Fitness"
    }
  ];

  const stats = [
    { label: "Total Capacity", value: "65,000+", icon: Users },
    { label: "Facilities", value: "15+", icon: Building },
    { label: "Events Annually", value: "200+", icon: Calendar },
    { label: "Years of Excellence", value: "25+", icon: Trophy }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Main Venue': return 'bg-stadium-secondary text-white';
      case 'Athletics': return 'bg-blue-500 text-white';
      case 'Indoor Sports': return 'bg-green-500 text-white';
      case 'Conference': return 'bg-purple-500 text-white';
      case 'Court Sports': return 'bg-orange-500 text-white';
      case 'Racquet Sports': return 'bg-teal-500 text-white';
      case 'Fitness': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="facilities">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Building className="h-8 w-8 text-stadium-secondary mr-3" />
            <span className="text-stadium-secondary font-semibold text-lg">WORLD-CLASS FACILITIES</span>
          </div>
          <h2 className="text-5xl font-bold text-stadium-primary mb-6">
            State-of-the-Art Sports Complex
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience excellence at Kenya's premier military sports facility. Our comprehensive complex features 
            world-class venues designed to host international competitions and deliver exceptional experiences.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-stadium-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-stadium-secondary" />
              </div>
              <div className="text-3xl font-bold text-stadium-primary mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {facilities.map((facility, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border-0 shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className={`${getCategoryColor(facility.category)} font-medium`}>
                    {facility.category}
                  </Badge>
                </div>
                
                {/* Capacity Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-gray-800 font-medium">
                    <Users className="w-3 h-3 mr-1" />
                    {facility.capacity}
                  </Badge>
                </div>
                
                {/* Icon */}
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <facility.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-stadium-primary">
                  {facility.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {facility.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-stadium-primary text-sm">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {facility.features.map((feature, featureIndex) => (
                      <Badge 
                        key={featureIndex} 
                        variant="secondary" 
                        className="text-xs bg-gray-100 text-gray-700"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Action Button */}
                <Button 
                  variant="outline" 
                  className="w-full mt-4 border-stadium-secondary text-stadium-secondary hover:bg-stadium-secondary hover:text-white transition-colors"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-stadium-primary rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience Excellence?</h3>
          <p className="text-xl mb-8 text-gray-200">
            Book your event at Kenya's premier sports complex and create unforgettable memories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-stadium-secondary hover:bg-stadium-secondary/90 text-white font-semibold px-8"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Facility
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-stadium-primary font-semibold px-8"
            >
              <Map className="w-5 h-5 mr-2" />
              Schedule Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
