
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, List, Share, Plus, Ticket } from "lucide-react";

const EventScheduleSection = () => {
  const events = [
    {
      title: "Ulinzi FC vs AFC Leopards",
      date: "June 10, 2025",
      time: "3:00 PM",
      venue: "Main Pitch",
      category: "Football",
      icon: "⚽"
    },
    {
      title: "Nairobi Open Athletics", 
      date: "June 13, 2025",
      time: "8:00 AM",
      venue: "Track",
      category: "Athletics",
      icon: "🏃"
    },
    {
      title: "Gospel Explosion Concert",
      date: "June 15, 2025", 
      time: "6:00 PM",
      venue: "Indoor Arena",
      category: "Concerts",
      icon: "🎵"
    }
  ];

  const categories = ["All Events", "Football", "Athletics", "Concerts", "Corporate", "Community"];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Schedule</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Plan your visit to Ulinzi Sports Complex with our comprehensive event calendar.
          </p>
        </div>

        {/* View Toggle and Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center space-x-2">
            <Button variant="default" size="sm" className="bg-primary">
              <List className="w-4 h-4 mr-2" />
              List View
            </Button>
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Calendar View
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button 
                key={category}
                variant={category === "All Events" ? "default" : "outline"}
                size="sm"
                className={category === "All Events" ? "bg-primary" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {events.map((event, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">
                      {event.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                      <p className="text-gray-600">
                        {event.date} • {event.time} • {event.venue}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Button size="sm" className="bg-primary">
                      <Ticket className="w-4 h-4 mr-2" />
                      Tickets
                    </Button>
                    <Button size="sm" variant="outline">
                      <Plus className="w-4 h-4 mr-2" />
                      Add
                    </Button>
                    <Button size="sm" variant="outline">
                      <Share className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventScheduleSection;
