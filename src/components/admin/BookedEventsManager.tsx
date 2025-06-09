
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye, Calendar, MapPin, Users, Phone, Mail } from "lucide-react";
import BookingDetailsModal from "./BookingDetailsModal";

interface BookedEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  organizer: string;
  contact: string;
  email: string;
  expectedAttendees: number;
  status: 'confirmed' | 'pending' | 'completed';
  category: 'sports' | 'entertainment' | 'community' | 'corporate';
}

const BookedEventsManager = () => {
  const [selectedBooking, setSelectedBooking] = useState<BookedEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample booked events data
  const bookedEvents: BookedEvent[] = [
    {
      id: "1",
      title: "Corporate Annual Meeting",
      date: "June 12, 2024",
      time: "9:00 AM - 5:00 PM",
      venue: "Conference Hall",
      organizer: "TechCorp Ltd",
      contact: "+254 712 345 678",
      email: "events@techcorp.co.ke",
      expectedAttendees: 150,
      status: "confirmed",
      category: "corporate"
    },
    {
      id: "2",
      title: "Youth Football Tournament",
      date: "June 16, 2024",
      time: "8:00 AM - 6:00 PM",
      venue: "Main Pitch",
      organizer: "Nairobi Youth League",
      contact: "+254 722 876 543",
      email: "admin@nairobiyouth.org",
      expectedAttendees: 300,
      status: "pending",
      category: "sports"
    },
    {
      id: "3",
      title: "Wedding Reception",
      date: "June 20, 2024",
      time: "6:00 PM - 11:00 PM",
      venue: "Indoor Arena",
      organizer: "Sarah & John",
      contact: "+254 733 456 789",
      email: "sarahjohn@gmail.com",
      expectedAttendees: 200,
      status: "confirmed",
      category: "community"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-500';
      case 'pending': return 'bg-yellow-500';
      case 'completed': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'sports': return 'bg-sports';
      case 'entertainment': return 'bg-entertainment';
      case 'community': return 'bg-community';
      case 'corporate': return 'bg-corporate';
      default: return 'bg-primary';
    }
  };

  const handleViewDetails = (booking: BookedEvent) => {
    setSelectedBooking(booking);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Booked Events ({bookedEvents.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Venue</TableHead>
                  <TableHead>Organizer</TableHead>
                  <TableHead>Attendees</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookedEvents.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{booking.title}</div>
                        <Badge className={`text-white text-xs ${getCategoryColor(booking.category)}`}>
                          {booking.category.toUpperCase()}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {booking.date}
                        </div>
                        <div className="text-muted-foreground">{booking.time}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <MapPin className="w-3 h-3 mr-1" />
                        {booking.venue}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{booking.organizer}</div>
                        <div className="text-muted-foreground text-xs">{booking.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <Users className="w-3 h-3 mr-1" />
                        {booking.expectedAttendees}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={`text-white ${getStatusColor(booking.status)}`}>
                        {booking.status.toUpperCase()}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleViewDetails(booking)}
                      >
                        <Eye className="w-3 h-3 mr-1" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <BookingDetailsModal
        booking={selectedBooking}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default BookedEventsManager;
