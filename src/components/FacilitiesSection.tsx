
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Map, Users, Ticket, Calendar } from "lucide-react";

const FacilitiesSection = () => {
  const facilities = [
    {
      title: "Main Football Pitch",
      description: "FIFA-standard grass pitch accommodating 30,000 spectators",
      icon: Users,
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop"
    },
    {
      title: "Athletics Track",
      description: "400m synthetic track with field event areas",
      icon: Calendar,
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&auto=format&fit=crop"
    },
    {
      title: "Indoor Arena",
      description: "Multi-purpose hall for concerts and events (5,000 capacity)",
      icon: Ticket,
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&auto=format&fit=crop"
    },
    {
      title: "VIP Lounges",
      description: "Premium hospitality suites with panoramic views",
      icon: Map,
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&auto=format&fit=crop"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
