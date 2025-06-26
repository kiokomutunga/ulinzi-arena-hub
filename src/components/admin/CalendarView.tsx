
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Filter } from "lucide-react";

interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  time: string;
  venue: string;
  category: 'sports' | 'entertainment' | 'community' | 'corporate';
  type: 'key-event' | 'booked' | 'upcoming';
}

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  
  const events: CalendarEvent[] = [
    {
      id: "1",
      title: "Ulinzi FC vs AFC Leopards",
      date: new Date(2025, 5, 10), // June 10, 2025
      time: "3:00 PM",
      venue: "Main Pitch",
      category: "sports",
      type: "key-event"
    },
    {
      id: "2",
      title: "Gospel Explosion Concert",
      date: new Date(2025, 5, 15), // June 15, 2025
      time: "6:00 PM",
      venue: "Indoor Arena",
      category: "entertainment",
      type: "upcoming"
    },
    {
      id: "3",
      title: "Corporate Meeting",
      date: new Date(2025, 5, 18), // June 18, 2025
      time: "9:00 AM",
      venue: "Conference Hall",
      category: "corporate",
      type: "booked"
    },
    {
      id: "4",
      title: "Kenya Music Festival",
      date: new Date(2025, 7, 20), // August 20, 2025
      time: "6:00 PM",
      venue: "Indoor Arena",
      category: "entertainment",
      type: "key-event"
    }
  ];

  const filteredEvents = events.filter(event => {
    if (selectedFilter === 'all') return true;
    return event.type === selectedFilter;
  });

  const selectedDateEvents = filteredEvents.filter(event => 
    selectedDate && event.date.toDateString() === selectedDate.toDateString()
  );

  const eventDates = filteredEvents.map(event => event.date);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'sports': return 'bg-sports';
      case 'entertainment': return 'bg-entertainment';
      case 'community': return 'bg-community';
      case 'corporate': return 'bg-corporate';
      default: return 'bg-primary';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'key-event': return 'bg-yellow-500';
      case 'booked': return 'bg-green-500';
      case 'upcoming': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <CalendarIcon className="w-5 h-5 mr-2" />
              Event Calendar
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <select 
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="border rounded px-3 py-1 text-sm"
              >
                <option value="all">All Events</option>
                <option value="key-event">Key Events</option>
                <option value="booked">Booked Events</option>
                <option value="upcoming">Upcoming Events</option>
              </select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border shadow-sm"
                modifiers={{
                  hasEvent: eventDates
                }}
                modifiersClassNames={{
                  hasEvent: "bg-primary/20 text-primary font-bold"
                }}
              />
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  {selectedDate ? selectedDate.toLocaleDateString() : "Select a date"}
                </h3>
                
                {selectedDateEvents.length > 0 ? (
                  <div className="space-y-3">
                    {selectedDateEvents.map((event) => (
                      <Card key={event.id} className="p-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">{event.title}</h4>
                            <p className="text-xs text-muted-foreground">{event.time} • {event.venue}</p>
                            <div className="flex items-center space-x-2 mt-2">
                              <Badge className={`text-white text-xs ${getCategoryColor(event.category)}`}>
                                {event.category}
                              </Badge>
                              <Badge className={`text-white text-xs ${getTypeColor(event.type)}`}>
                                {event.type.replace('-', ' ')}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-sm">No events scheduled for this date.</p>
                )}
              </div>
              
              <div className="pt-4 border-t">
                <h4 className="font-medium text-sm mb-3">Legend</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                    <span className="text-xs">Key Events</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <span className="text-xs">Booked Events</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span className="text-xs">Upcoming Events</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CalendarView;
