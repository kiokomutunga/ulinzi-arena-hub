
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Phone, Mail, User } from "lucide-react";

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

interface BookingDetailsModalProps {
  booking: BookedEvent | null;
  isOpen: boolean;
  onClose: () => void;
}

const BookingDetailsModal = ({ booking, isOpen, onClose }: BookingDetailsModalProps) => {
  if (!booking) return null;

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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Booking Details</span>
            <div className="flex items-center space-x-2">
              <Badge className={`text-white ${getCategoryColor(booking.category)}`}>
                {booking.category.toUpperCase()}
              </Badge>
              <Badge className={`text-white ${getStatusColor(booking.status)}`}>
                {booking.status.toUpperCase()}
              </Badge>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">{booking.title}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Date & Time</p>
                  <p className="text-muted-foreground">{booking.date}</p>
                  <p className="text-muted-foreground">{booking.time}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Venue</p>
                  <p className="text-muted-foreground">{booking.venue}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Expected Attendees</p>
                  <p className="text-muted-foreground">{booking.expectedAttendees} people</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Organizer</p>
                  <p className="text-muted-foreground">{booking.organizer}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Contact Number</p>
                  <p className="text-muted-foreground">{booking.contact}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">{booking.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            {booking.status === 'pending' && (
              <>
                <Button variant="outline">
                  Reject
                </Button>
                <Button>
                  Approve
                </Button>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDetailsModal;
