
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookingRequestForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    organizerName: "",
    organizerEmail: "",
    organizerPhone: "",
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
    "Main Pitch",
    "Athletics Track", 
    "Indoor Arena",
    "Conference Hall",
    "Outdoor Grounds"
  ];

  const categories = [
    { value: "sports", label: "Sports" },
    { value: "entertainment", label: "Entertainment" },
    { value: "community", label: "Community" },
    { value: "corporate", label: "Corporate" },
    { value: "religious", label: "Religious" },
    { value: "educational", label: "Educational" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    console.log("Booking request submitted:", formData);
    toast({
      title: "Booking Request Submitted",
      description: "Your booking request has been submitted successfully. We will review it and get back to you within 24 hours."
    });
    
    // Reset form
    setFormData({
      title: "",
      organizerName: "",
      organizerEmail: "",
      organizerPhone: "",
      eventDate: "",
      startTime: "",
      endTime: "",
      venue: "",
      category: "",
      expectedAttendees: "",
      description: "",
      specialRequirements: ""
    });
  };

  return (
    <section className="py-16 bg-secondary/20" id="booking">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Book Our Venue</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Planning an event? Submit your booking request and we'll get back to you with availability and pricing.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Venue Booking Request
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Event Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      placeholder="e.g., Annual Company Retreat"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="organizerName">Organizer Name *</Label>
                    <Input
                      id="organizerName"
                      value={formData.organizerName}
                      onChange={(e) => handleInputChange('organizerName', e.target.value)}
                      placeholder="Your full name or organization"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="organizerEmail">Email *</Label>
                    <Input
                      id="organizerEmail"
                      type="email"
                      value={formData.organizerEmail}
                      onChange={(e) => handleInputChange('organizerEmail', e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="organizerPhone">Phone Number *</Label>
                    <Input
                      id="organizerPhone"
                      value={formData.organizerPhone}
                      onChange={(e) => handleInputChange('organizerPhone', e.target.value)}
                      placeholder="+254 7XX XXX XXX"
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
                  placeholder="Please describe your event, its purpose, and any important details..."
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
                  placeholder="Any special equipment, catering, security, or other requirements..."
                  rows={3}
                />
              </div>

              <div className="flex justify-end">
                <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90">
                  Submit Booking Request
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingRequestForm;
