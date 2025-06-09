
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Phone, Mail, User, Clock, FileText, AlertCircle, Check, X } from "lucide-react";

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

interface BookingRequestDetailsModalProps {
  request: BookingRequest | null;
  isOpen: boolean;
  onClose: () => void;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
}

const BookingRequestDetailsModal = ({ request, isOpen, onClose, onApprove, onReject }: BookingRequestDetailsModalProps) => {
  if (!request) return null;

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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Booking Request Details</span>
            <div className="flex items-center space-x-2">
              <Badge className={`text-white ${getCategoryColor(request.category)}`}>
                {request.category.toUpperCase()}
              </Badge>
              <Badge className={`text-white ${getStatusColor(request.status)}`}>
                {request.status.toUpperCase()}
              </Badge>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">{request.title}</h3>
            <p className="text-sm text-muted-foreground">
              Submitted on {new Date(request.submittedAt).toLocaleDateString()} at {new Date(request.submittedAt).toLocaleTimeString()}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Event Date & Time</p>
                  <p className="text-muted-foreground">{new Date(request.eventDate).toLocaleDateString()}</p>
                  <p className="text-muted-foreground">{request.startTime} - {request.endTime}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Venue</p>
                  <p className="text-muted-foreground">{request.venue}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Expected Attendees</p>
                  <p className="text-muted-foreground">{request.expectedAttendees} people</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Organizer</p>
                  <p className="text-muted-foreground">{request.organizerName}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Contact Number</p>
                  <p className="text-muted-foreground">{request.organizerPhone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">{request.organizerEmail}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <FileText className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="font-medium">Event Description</p>
                <p className="text-muted-foreground">{request.description}</p>
              </div>
            </div>

            {request.specialRequirements && (
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Special Requirements</p>
                  <p className="text-muted-foreground">{request.specialRequirements}</p>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            {request.status === 'pending' && (
              <>
                <Button 
                  variant="outline"
                  onClick={() => {
                    onReject(request.id);
                    onClose();
                  }}
                  className="text-red-600 hover:text-red-700"
                >
                  <X className="w-4 h-4 mr-2" />
                  Reject
                </Button>
                <Button
                  onClick={() => {
                    onApprove(request.id);
                    onClose();
                  }}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Check className="w-4 h-4 mr-2" />
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

export default BookingRequestDetailsModal;
