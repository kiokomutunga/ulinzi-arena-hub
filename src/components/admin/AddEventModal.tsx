
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface UpcomingEvent {
  title: string;
  date: string;
  time: string;
  venue: string;
  category: 'sports' | 'entertainment' | 'community' | 'corporate';
  price: string;
  isPublished: boolean;
}

interface AddEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddEvent: (event: UpcomingEvent) => void;
}

const AddEventModal = ({ isOpen, onClose, onAddEvent }: AddEventModalProps) => {
  const [formData, setFormData] = useState<UpcomingEvent>({
    title: "",
    date: "",
    time: "",
    venue: "",
    category: "sports",
    price: "",
    isPublished: false
  });

  const venues = [
    "Main Pitch",
    "Athletics Track", 
    "Indoor Arena",
    "Conference Hall",
    "Outdoor Grounds"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddEvent(formData);
    onClose();
    setFormData({
      title: "",
      date: "",
      time: "",
      venue: "",
      category: "sports",
      price: "",
      isPublished: false
    });
  };

  const handleInputChange = (field: keyof UpcomingEvent, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Add New Event</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Event Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="time">Time</Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => handleInputChange('time', e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="venue">Venue</Label>
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
            <Label htmlFor="category">Category</Label>
            <Select value={formData.category} onValueChange={(value: any) => handleInputChange('category', value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sports">Sports</SelectItem>
                <SelectItem value="entertainment">Entertainment</SelectItem>
                <SelectItem value="community">Community</SelectItem>
                <SelectItem value="corporate">Corporate</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              placeholder="e.g., KES 500 or Free"
              value={formData.price}
              onChange={(e) => handleInputChange('price', e.target.value)}
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="published"
              checked={formData.isPublished}
              onChange={(e) => handleInputChange('isPublished', e.target.checked)}
            />
            <Label htmlFor="published">Publish immediately</Label>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              Add Event
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEventModal;
