
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";

const LiveEventsSection = () => {
  const liveEvent = {
    title: "Kenya Premier League: Ulinzi Stars vs Tusker FC",
    venue: "Main Pitch",
    score: "2 - 1",
    time: "65:12",
    status: "LIVE"
  };

  const upcomingEvents = [
    {
      title: "Athletics: Nairobi Open",
      date: "June 13, 8:00 AM",
      venue: "Track",
      category: "athletics",
      daysUntil: "3 days"
    },
    {
      title: "Gospel Explosion Concert",
      date: "June 15, 6:00 PM", 
      venue: "Indoor Arena",
      category: "entertainment",
      daysUntil: "5 days"
    },
    {
      title: "Football: Ulinzi FC vs Gor Mahia",
      date: "June 22, 3:30 PM",
      venue: "Main Pitch", 
      category: "sports",
      daysUntil: "12 days"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'athletics': return 'border-l-blue-500';
      case 'entertainment': return 'border-l-purple-500';
      case 'sports': return 'border-l-green-500';
      default: return 'border-l-gray-500';
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Live Event */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></div>
              <h2 className="text-2xl font-bold text-gray-900">LIVE NOW</h2>
            </div>
            
            <Card className="overflow-hidden">
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=live%20football%20match%20in%20progress%2C%20players%20on%20green%20pitch%2C%20stadium%20lights%2C%20excited%20crowd%2C%20professional%20sports%20photography%2C%20dynamic%20action%20shot%20of%20football%20game&width=500&height=300&seq=live1&orientation=landscape" 
                  alt="Live Match"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    LIVE
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{liveEvent.title}</h3>
                <p className="text-gray-600 mb-4">{liveEvent.venue}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-bold text-primary">{liveEvent.score}</div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{liveEvent.time}</div>
                  </div>
                </div>
                <Button className="w-full bg-red-500 hover:bg-red-600">
                  Watch Live Stream
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Events */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Live Events</h2>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div 
                  key={index}
                  className={`bg-white border-l-4 ${getCategoryColor(event.category)} p-4 rounded-r-lg shadow-sm hover:shadow-md transition-shadow`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{event.title}</h3>
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        {event.venue}
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      Starts in {event.daysUntil}
                    </div>
                  </div>
                </div>
              ))}
              <div className="pt-4">
                <Button variant="link" className="text-primary p-0">
                  View all upcoming events →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveEventsSection;
