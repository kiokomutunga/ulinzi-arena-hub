
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Edit, Trash2, Star, Calendar, MapPin, Users } from "lucide-react";

interface KeyEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  category: 'sports' | 'entertainment' | 'community' | 'corporate';
  priority: 'high' | 'medium' | 'low';
  attendees: number;
  status: 'scheduled' | 'ongoing' | 'completed';
  featured: boolean;
}

const KeyEventsManager = () => {
  const [keyEvents, setKeyEvents] = useState<KeyEvent[]>([
    {
      id: "1",
      title: "Ulinzi FC vs AFC Leopards - Championship Final",
      date: "July 15, 2025",
      time: "3:00 PM",
      venue: "Main Pitch",
      category: "sports",
      priority: "high",
      attendees: 25000,
      status: "scheduled",
      featured: true
    },
    {
      id: "2",
      title: "Kenya Music Festival 2025",
      date: "August 20, 2025",
      time: "6:00 PM",
      venue: "Indoor Arena",
      category: "entertainment",
      priority: "high",
      attendees: 15000,
      status: "scheduled",
      featured: true
    },
    {
      id: "3",
      title: "Corporate Leadership Summit",
      date: "September 10, 2025",
      time: "9:00 AM",
      venue: "Conference Hall",
      category: "corporate",
      priority: "medium",
      attendees: 500,
      status: "scheduled",
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'sports': return 'bg-sports';
      case 'entertainment': return 'bg-entertainment';
      case 'community': return 'bg-community';
      case 'corporate': return 'bg-corporate';
      default: return 'bg-primary';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'bg-blue-500';
      case 'ongoing': return 'bg-green-500';
      case 'completed': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const handleToggleFeatured = (id: string) => {
    setKeyEvents(keyEvents.map(event => 
      event.id === id ? { ...event, featured: !event.featured } : event
    ));
  };

  const handleDeleteEvent = (id: string) => {
    setKeyEvents(keyEvents.filter(event => event.id !== id));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <Star className="w-5 h-5 mr-2 text-yellow-500" />
              Key Events Management ({keyEvents.length})
            </CardTitle>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Key Event
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-600">Scheduled Events</p>
                    <p className="text-2xl font-bold text-blue-800">
                      {keyEvents.filter(e => e.status === 'scheduled').length}
                    </p>
                  </div>
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-green-600">Featured Events</p>
                    <p className="text-2xl font-bold text-green-800">
                      {keyEvents.filter(e => e.featured).length}
                    </p>
                  </div>
                  <Star className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-purple-600">Total Attendees</p>
                    <p className="text-2xl font-bold text-purple-800">
                      {keyEvents.reduce((sum, e) => sum + e.attendees, 0).toLocaleString()}
                    </p>
                  </div>
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Venue</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Attendees</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {keyEvents.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {event.featured && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
                        <div>
                          <div className="font-medium">{event.title}</div>
                          <Badge className={`text-white text-xs ${getCategoryColor(event.category)}`}>
                            {event.category.toUpperCase()}
                          </Badge>
                        </div>
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
                      <Badge className={`text-white text-xs ${getPriorityColor(event.priority)}`}>
                        {event.priority.toUpperCase()}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <Users className="w-3 h-3 mr-1" />
                        {event.attendees.toLocaleString()}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={`text-white text-xs ${getStatusColor(event.status)}`}>
                        {event.status.toUpperCase()}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button
                          size="sm"
                          variant={event.featured ? "default" : "outline"}
                          onClick={() => handleToggleFeatured(event.id)}
                        >
                          <Star className="w-3 h-3" />
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
    </div>
  );
};

export default KeyEventsManager;
