
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye, Calendar, MapPin, Users, Phone, Mail, Check, X, Clock } from "lucide-react";
import BookingRequestDetailsModal from "./BookingRequestDetailsModal";
import { useToast } from "@/hooks/use-toast";

interface BookingRequest {
  id: string;
  title: string;
  organizerName: string;
  organizerEmail: string;
  organizerPhone: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  venue: string;
  category: 'sports' | 'entertainment' | 'community' | 'corporate' | 'religious' | 'educational';
  expectedAttendees: number;
  description: string;
  specialRequirements: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
}

const BookingRequestsManager = () => {
  const { toast } = useToast();
  const [selectedRequest, setSelectedRequest] = useState<BookingRequest | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requests, setRequests] = useState<BookingRequest[]>([
    {
      id: "1",
      title: "Annual School Sports Day",
      organizerName: "Nairobi Primary School",
      organizerEmail: "admin@nairobiprimary.ac.ke",
      organizerPhone: "+254 712 345 678",
      eventDate: "2024-07-05",
      startTime: "08:00",
      endTime: "17:00",
      venue: "Main Pitch",
      category: "educational",
      expectedAttendees: 500,
      description: "Annual inter-house sports competition for primary school students including track and field events.",
      specialRequirements: "First aid station, public address system, scoreboard",
      status: "pending",
      submittedAt: "2024-06-08T10:30:00Z"
    },
    {
      id: "2",
      title: "Wedding Reception",
      organizerName: "Grace & Michael",
      organizerEmail: "grace.michael@gmail.com",
      organizerPhone: "+254 722 876 543",
      eventDate: "2024-06-25",
      startTime: "18:00",
      endTime: "23:00",
      venue: "Indoor Arena",
      category: "community",
      expectedAttendees: 250,
      description: "Wedding reception celebration with dinner and dancing.",
      specialRequirements: "Catering setup, decorations, DJ equipment, lighting",
      status: "approved",
      submittedAt: "2024-06-01T14:20:00Z"
    },
    {
      id: "3",
      title: "Product Launch Event",
      organizerName: "TechStart Kenya",
      organizerEmail: "events@techstart.co.ke",
      organizerPhone: "+254 733 456 789",
      eventDate: "2024-06-30",
      startTime: "14:00",
      endTime: "18:00",
      venue: "Conference Hall",
      category: "corporate",
      expectedAttendees: 100,
      description: "Launch event for new mobile app with presentations and networking.",
      specialRequirements: "Projector, sound system, cocktail setup",
      status: "rejected",
      submittedAt: "2024-06-05T09:15:00Z"
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-500';
      case 'pending': return 'bg-yellow-500';
      case 'rejected': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'sports': return 'bg-sports';
      case 'entertainment': return 'bg-entertainment';
      case 'community': return 'bg-community';
      case 'corporate': return 'bg-corporate';
      case 'religious': return 'bg-purple-500';
      case 'educational': return 'bg-blue-500';
      default: return 'bg-primary';
    }
  };

  const handleViewDetails = (request: BookingRequest) => {
    setSelectedRequest(request);
    setIsModalOpen(true);
  };

  const handleApprove = (id: string) => {
    setRequests(requests.map(request => 
      request.id === id ? { ...request, status: 'approved' as const } : request
    ));
    toast({
      title: "Booking Approved",
      description: "The booking request has been approved successfully."
    });
  };

  const handleReject = (id: string) => {
    setRequests(requests.map(request => 
      request.id === id ? { ...request, status: 'rejected' as const } : request
    ));
    toast({
      title: "Booking Rejected",
      description: "The booking request has been rejected."
    });
  };

  const pendingCount = requests.filter(r => r.status === 'pending').length;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Booking Requests ({requests.length})
              {pendingCount > 0 && (
                <Badge className="ml-2 bg-yellow-500 text-white">
                  {pendingCount} Pending
                </Badge>
              )}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event</TableHead>
                  <TableHead>Organizer</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Venue</TableHead>
                  <TableHead>Attendees</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {requests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{request.title}</div>
                        <Badge className={`text-white text-xs ${getCategoryColor(request.category)}`}>
                          {request.category.toUpperCase()}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{request.organizerName}</div>
                        <div className="text-muted-foreground text-xs">{request.organizerEmail}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(request.eventDate).toLocaleDateString()}
                        </div>
                        <div className="text-muted-foreground">
                          {request.startTime} - {request.endTime}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <MapPin className="w-3 h-3 mr-1" />
                        {request.venue}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <Users className="w-3 h-3 mr-1" />
                        {request.expectedAttendees}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={`text-white ${getStatusColor(request.status)}`}>
                        {request.status.toUpperCase()}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleViewDetails(request)}
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          View
                        </Button>
                        {request.status === 'pending' && (
                          <>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleApprove(request.id)}
                              className="text-green-600 hover:text-green-700"
                            >
                              <Check className="w-3 h-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleReject(request.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <X className="w-3 h-3" />
                            </Button>
                          </>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <BookingRequestDetailsModal
        request={selectedRequest}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </div>
  );
};

export default BookingRequestsManager;
