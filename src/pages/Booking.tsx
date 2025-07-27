
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Booking = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    eventTitle: "",
    eventDate: "",
    startTime: "",
    endTime: "",
    venue: "",
    category: "",
    expectedAttendees: "",
    description: "",
    specialRequirements: ""
  });

  const venues = [
    "Main Stadium",
    "Athletics Track", 
    "Indoor Arena",
    "Conference Hall",
    "Basketball Courts",
    "Volleyball Courts",
    "Tennis Complex",
    "Fitness Center"
  ];

  const categories = [
    { value: "sports", label: "Sports Event" },
    { value: "entertainment", label: "Entertainment" },
    { value: "community", label: "Community Event" },
    { value: "corporate", label: "Corporate Event" },
    { value: "military", label: "Military Event" },
    { value: "educational", label: "Educational Event" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store booking in localStorage (in real app, would be database)
    const bookingId = Date.now().toString();
    const booking = {
      id: bookingId,
      ...formData,
      status: "pending",
      submittedAt: new Date().toISOString()
    };
    
    const existingBookings = JSON.parse(localStorage.getItem('userBookings') || '[]');
    existingBookings.push(booking);
    localStorage.setItem('userBookings', JSON.stringify(existingBookings));
    
    toast({
      title: "Booking Submitted Successfully",
      description: "Your facility booking request has been submitted. You can track its status in My Bookings."
    });
    
    // Reset form
    setFormData({
      userName: "",
      userEmail: "",
      userPhone: "",
      eventTitle: "",
      eventDate: "",
      startTime: "",
      endTime: "",
      venue: "",
      category: "",
      expectedAttendees: "",
      description: "",
      specialRequirements: ""
    });
    
    // Navigate to my bookings after 2 seconds
    setTimeout(() => {
      navigate('/my-bookings');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-stadium-primary mb-4">Book Ulinzi Sports Complex</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Reserve our world-class facilities for your event. Fill out the form below to submit your booking request.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-stadium-primary">
                Facility Booking Request
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="userName">Your Name *</Label>
                      <Input
                        id="userName"
                        value={formData.userName}
                        onChange={(e) => handleInputChange('userName', e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="userEmail">Email Address *</Label>
                      <Input
                        id="userEmail"
                        type="email"
                        value={formData.userEmail}
                        onChange={(e) => handleInputChange('userEmail', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="userPhone">Phone Number *</Label>
                      <Input
                        id="userPhone"
                        value={formData.userPhone}
                        onChange={(e) => handleInputChange('userPhone', e.target.value)}
                        placeholder="+254 7XX XXX XXX"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="eventTitle">Event Title *</Label>
                      <Input
                        id="eventTitle"
                        value={formData.eventTitle}
                        onChange={(e) => handleInputChange('eventTitle', e.target.value)}
                        placeholder="e.g., Annual Sports Day"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="eventDate">Event Date *</Label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => handleInputChange('eventDate', e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="startTime">Start Time *</Label>
                        <Input
                          id="startTime"
                          type="time"
                          value={formData.startTime}
                          onChange={(e) => handleInputChange('startTime', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="endTime">End Time *</Label>
                        <Input
                          id="endTime"
                          type="time"
                          value={formData.endTime}
                          onChange={(e) => handleInputChange('endTime', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="venue">Preferred Venue *</Label>
                      <Select value={formData.venue} onValueChange={(value) => handleInputChange('venue', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select venue" />
                        </SelectTrigger>
                        <SelectContent>
                          {venues.map((venue) => (
                            <SelectItem key={venue} value={venue}>
                              {venue}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="category">Event Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.value} value={category.value}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="expectedAttendees">Expected Attendees *</Label>
                      <Input
                        id="expectedAttendees"
                        type="number"
                        value={formData.expectedAttendees}
                        onChange={(e) => handleInputChange('expectedAttendees', e.target.value)}
                        placeholder="e.g., 150"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Event Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Describe your event in detail..."
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="specialRequirements">Special Requirements</Label>
                  <Textarea
                    id="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                    placeholder="Any special equipment, catering, or other requirements..."
                    rows={3}
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => navigate('/')}
                    className="border-2 border-stadium-primary text-stadium-primary hover:bg-stadium-primary hover:text-white"
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    className="bg-stadium-secondary hover:bg-stadium-secondary/90 text-white px-8"
                  >
                    Submit Booking Request
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Booking;
