
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Map, Users, Ticket, Calendar } from "lucide-react";

const FacilitiesSection = () => {
const facilities = [
    {
      title: "Main Pitch",
      description: "FIFA standard football field with seating for 35,000 spectators",
      icon: Users,
      image: "https://readdy.ai/api/search-image?query=modern%20football%20stadium%20with%20green%20pitch%2C%20professional%20lighting%2C%20packed%20stands%20with%20spectators%2C%20clear%20blue%20sky%2C%20aerial%20view%20of%20the%20entire%20stadium%20complex%20with%20perfect%20grass&width=400&height=300&seq=facility1&orientation=landscape"
    },
    {
      title: "Athletics Track",
      description: "IAAF certified 400m track with 8 lanes and field event areas",
      icon: Calendar,
      image: "https://readdy.ai/api/search-image?query=professional%20running%20track%20with%20red%20surface%2C%20white%20lane%20markings%2C%20field%20event%20areas%2C%20stadium%20seating%2C%20perfect%20condition%2C%20sunny%20day%2C%20empty%20track%20ready%20for%20competition&width=400&height=300&seq=facility2&orientation=landscape"
    },
    {
      title: "Indoor Arena",
      description: "Multi-purpose indoor venue with 10,000 seating capacity",
      icon: Ticket,
      image: "https://readdy.ai/api/search-image?query=modern%20indoor%20sports%20arena%20with%20high%20ceiling%2C%20professional%20lighting%2C%20tiered%20seating%2C%20polished%20wooden%20floor%2C%20basketball%20court%20markings%2C%20wide%20angle%20view%20showing%20the%20entire%20arena%20space&width=400&height=300&seq=facility3&orientation=landscape"
    },
    {
      title: "Conference Center",
      description: "Versatile spaces for meetings, presentations and corporate events",
      icon: Map,
      image: "https://readdy.ai/api/search-image?query=elegant%20conference%20center%20with%20modern%20furnishings%2C%20presentation%20screens%2C%20comfortable%20seating%2C%20professional%20lighting%2C%20business%20setting%2C%20clean%20and%20sophisticated%20design&width=400&height=300&seq=facility4&orientation=landscape"
    },
    {
      title: "Basketball Courts",
      description: "Professional indoor courts with spectator seating",
      icon: Users,
      image: "https://readdy.ai/api/search-image?query=indoor%20basketball%20court%20with%20professional%20wooden%20floor%2C%20modern%20lighting%2C%20spectator%20seating%2C%20clean%20modern%20sports%20facility%20interior&width=400&height=300&seq=facility5&orientation=landscape"
    },
    {
      title: "Volleyball Courts",
      description: "Indoor and outdoor volleyball courts with tournament facilities",
      icon: Calendar,
      image: "https://readdy.ai/api/search-image?query=volleyball%20court%20with%20professional%20net%2C%20marked%20floor%2C%20indoor%20sports%20facility%2C%20spectator%20seating%2C%20bright%20lighting&width=400&height=300&seq=facility6&orientation=landscape"
    },
    {
      title: "Tennis Courts",
      description: "Multiple tennis courts with professional surfaces and lighting",
      icon: Ticket,
      image: "https://readdy.ai/api/search-image?query=tennis%20courts%20with%20professional%20surface%2C%20net%2C%20court%20markings%2C%20outdoor%20setting%2C%20clear%20blue%20sky%2C%20well%20maintained%20facility&width=400&height=300&seq=facility7&orientation=landscape"
    },
    {
      title: "Fitness Center & Gym",
      description: "Fully equipped gym and rehabilitation center with modern equipment",
      icon: Map,
      image: "https://readdy.ai/api/search-image?query=modern%20fitness%20center%20with%20exercise%20equipment%2C%20weight%20machines%2C%20bright%20lighting%2C%20clean%20interior%2C%20professional%20gym%20setting&width=400&height=300&seq=facility8&orientation=landscape"
    }
  ];

  return (
    <section className="py-16" id="facilities">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">World-Class Facilities</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            State-of-the-art venues designed to deliver exceptional experiences for every event
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <facility.icon className="w-8 h-8 text-white mb-2" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{facility.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground">{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
