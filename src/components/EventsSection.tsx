
import { Button } from "@/components/ui/button";
import EventCard from "./EventCard";
import { ArrowRight } from "lucide-react";

const EventsSection = () => {
  const upcomingEvents = [
    {
      title: "Ulinzi FC vs AFC Leopards",
      date: "June 10, 2024",
      time: "3:00 PM",
      venue: "Main Pitch",
      category: "sports" as const,
      price: "KES 500"
    },
    {
      title: "Nairobi Open Athletics",
      date: "June 13, 2024",
      time: "8:00 AM",
      venue: "Athletics Track",
      category: "sports" as const,
      price: "KES 300"
    },
    {
      title: "Gospel Explosion Concert",
      date: "June 15, 2024",
      time: "6:00 PM",
      venue: "Indoor Arena",
      category: "entertainment" as const,
      price: "KES 1,200"
    },
    {
      title: "Corporate Leadership Summit",
      date: "June 18, 2024",
      time: "9:00 AM",
      venue: "Conference Hall",
      category: "corporate" as const,
      price: "KES 2,500"
    },
    {
      title: "Community Health Fair",
      date: "June 22, 2024",
      time: "10:00 AM",
      venue: "Outdoor Grounds",
      category: "community" as const,
      price: "Free"
    },
    {
      title: "Inter-School Championship",
      date: "June 25, 2024",
      time: "2:00 PM",
      venue: "Main Pitch",
      category: "sports" as const,
      price: "KES 200"
    }
  ];

  return (
    <section className="py-16 bg-secondary/30" id="events">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Upcoming Events</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover exciting sports matches, concerts, and community events happening at Ulinzi Sports Complex
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <EventCard {...event} />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            View All Events
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
