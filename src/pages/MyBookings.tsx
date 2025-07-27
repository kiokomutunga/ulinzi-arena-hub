
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Booking {
  id: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  eventTitle: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  venue: string;
  category: string;
  expectedAttendees: string;
  description: string;
  specialRequirements: string;
  status: string;
  submittedAt: string;
}

const MyBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [userEmail, setUserEmail] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setUserEmail(storedEmail);
      setIsAuthenticated(true);
      loadUserBookings(storedEmail);
    }
  }, []);

  const loadUserBookings = (email: string) => {
    const allBookings = JSON.parse(localStorage.getItem('userBookings') || '[]');
    const userBookings = allBookings.filter((booking: Booking) => booking.userEmail === email);
    setBookings(userBookings);
  };

  const handleAuthenticate = () => {
    if (userEmail) {
      localStorage.setItem('userEmail', userEmail);
      setIsAuthenticated(true);
      loadUserBookings(userEmail);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500 text-white';
      case 'approved': return 'bg-green-500 text-white';
      case 'rejected': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-stadium-primary text-center">
                    Access Your Bookings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="email">Enter your email address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <Button 
                    onClick={handleAuthenticate}
                    className="w-full bg-stadium-secondary hover:bg-stadium-secondary/90 text-white"
                    disabled={!userEmail}
                  >
                    View My Bookings
                  </Button>
                  <Button 
                    onClick={() => navigate('/booking')}
                    variant="outline"
                    className="w-full border-2 border-stadium-primary text-stadium-primary hover:bg-stadium-primary hover:text-white"
                  >
                    Make New Booking
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-stadium-primary mb-4">My Bookings</h1>
            <p className="text-xl text-gray-600">
              Track your facility booking requests and their status
            </p>
          </div>

          <div className="mb-6 flex justify-between items-center">
            <div className="text-lg font-semibold text-stadium-primary">
              Welcome back, {userEmail}
            </div>
            <div className="space-x-4">
              <Button 
                onClick={() => navigate('/booking')}
                className="bg-stadium-secondary hover:bg-stadium-secondary/90 text-white"
              >
                New Booking
              </Button>
              <Button 
                onClick={() => {
                  localStorage.removeItem('userEmail');
                  setIsAuthenticated(false);
                  setUserEmail("");
                }}
                variant="outline"
                className="border-2 border-stadium-primary text-stadium-primary hover:bg-stadium-primary hover:text-white"
              >
                Sign Out
              </Button>
            </div>
          </div>

          {bookings.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <h3 className="text-xl font-semibold text-stadium-primary mb-4">No bookings found</h3>
                <p className="text-gray-600 mb-6">You haven't made any booking requests yet.</p>
                <Button 
                  onClick={() => navigate('/booking')}
                  className="bg-stadium-secondary hover:bg-stadium-secondary/90 text-white"
                >
                  Make Your First Booking
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
              {bookings.map((booking) => (
                <Card key={booking.id} className="overflow-hidden">
                  <CardHeader className="bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl font-bold text-stadium-primary">
                          {booking.eventTitle}
                        </CardTitle>
                        <p className="text-gray-600 mt-1">
                          Submitted on {formatDate(booking.submittedAt)}
                        </p>
                      </div>
                      <Badge className={getStatusColor(booking.status)}>
                        {booking.status.toUpperCase()}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-stadium-primary">Event Details</h4>
                          <p className="text-gray-600">Date: {formatDate(booking.eventDate)}</p>
                          <p className="text-gray-600">Time: {formatTime(booking.startTime)} - {formatTime(booking.endTime)}</p>
                          <p className="text-gray-600">Venue: {booking.venue}</p>
                          <p className="text-gray-600">Expected Attendees: {booking.expectedAttendees}</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-stadium-primary">Contact Information</h4>
                          <p className="text-gray-600">Name: {booking.userName}</p>
                          <p className="text-gray-600">Email: {booking.userEmail}</p>
                          <p className="text-gray-600">Phone: {booking.userPhone}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold text-stadium-primary mb-2">Description</h4>
                      <p className="text-gray-600">{booking.description}</p>
                    </div>
                    {booking.specialRequirements && (
                      <div className="mt-4">
                        <h4 className="font-semibold text-stadium-primary mb-2">Special Requirements</h4>
                        <p className="text-gray-600">{booking.specialRequirements}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MyBookings;
