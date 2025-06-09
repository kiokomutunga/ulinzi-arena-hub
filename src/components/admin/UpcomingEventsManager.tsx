
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Edit, Trash2, Calendar, MapPin } from "lucide-react";
import AddEventModal from "./AddEventModal";

interface UpcomingEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  category: 'sports' | 'entertainment' | 'community' | 'corporate';
  price: string;
  isPublished: boolean;
}

const UpcomingEventsManager = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [events, setEvents] = useState<UpcomingEvent[]>([
    {
      id: "1",
      title: "Ulinzi FC vs AFC Leopards",
      date: "June 10, 2024",
      time: "3:00 PM",
      venue: "Main Pitch",
      category: "sports",
      price: "KES 500",
      isPublished: true
    },
    {
      id: "2",
      title: "Nairobi Open Athletics",
      date: "June 13, 2024",
      time: "8:00 AM",
      venue: "Athletics Track",
      category: "sports",
      price: "KES 300",
      isPublished: true
    },
    {
      id: "3",
      title: "Gospel Explosion Concert",
      date: "June 15, 2024",
      time: "6:00 PM",
      venue: "Indoor Arena",
      category: "entertainment",
      price: "KES 1,200",
      isPublished: true
    },
    {
      id: "4",
      title: "Corporate Leadership Summit",
      date: "June 18, 2024",
      time: "9:00 AM",
      venue: "Conference Hall",
      category: "corporate",
      price: "KES 2,500",
      isPublished: false
    }
  ]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'sports': return 'bg-sports';
      case 'entertainment': return 'bg-entertainment';
      case 'community': return 'bg-community';
      case 'corporate': return 'bg-corporate';
      default: return 'bg-primary';
    }
  };

  const handleTogglePublish = (id: string) => {
    setEvents(events.map(event => 
      event.id === id ? { ...event, isPublished: !event.isPublished } : event
    ));
  };

  const handleDeleteEvent = (id: string) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const handleAddEvent = (newEvent: Omit<UpcomingEvent, 'id'>) => {
    const event: UpcomingEvent = {
      ...newEvent,
      id: Date.now().toString()
    };
    setEvents([...events, event]);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Upcoming Events ({events.length})
            </CardTitle>
            <Button onClick={() => setIsAddModalOpen(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add Event
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Venue</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {events.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{event.title}</div>
                        <Badge className={`text-white text-xs ${getCategoryColor(event.category)}`}>
                          {event.category.toUpperCase()}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {event.date}
                        </div>
                        <div className="text-muted-foreground">{event.time}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <MapPin className="w-3 h-3 mr-1" />
                        {event.venue}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="font-medium text-primary">{event.price}</span>
                    </TableCell>
                    <TableCell>
                      <Badge variant={event.isPublished ? "default" : "secondary"}>
                        {event.isPublished ? "Published" : "Draft"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button
                          size="sm"
                          variant={event.isPublished ? "outline" : "default"}
                          onClick={() => handleTogglePublish(event.id)}
                        >
                          {event.isPublished ? "Unpublish" : "Publish"}
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Edit className="w-3 h-3" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="ghost"
                          onClick={() => handleDeleteEvent(event.id)}
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <AddEventModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddEvent={handleAddEvent}
      />
    </div>
  );
};

export default UpcomingEventsManager;
