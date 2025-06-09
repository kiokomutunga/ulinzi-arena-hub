
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Calendar, Map, Ticket } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  venue: string;
  category: 'sports' | 'entertainment' | 'community' | 'corporate';
  price?: string;
  image?: string;
}

const EventCard = ({ title, date, time, venue, category, price }: EventCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'sports': return 'bg-sports';
      case 'entertainment': return 'bg-entertainment';
      case 'community': return 'bg-community';
      case 'corporate': return 'bg-corporate';
      default: return 'bg-primary';
    }
  };

  const getCategoryBorder = (category: string) => {
    switch (category) {
      case 'sports': return 'border-sports';
      case 'entertainment': return 'border-entertainment';
      case 'community': return 'border-community';
      case 'corporate': return 'border-corporate';
      default: return 'border-primary';
    }
  };

  return (
    <Card className={`overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 ${getCategoryBorder(category)}`}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-2">
          <span className={`px-3 py-1 rounded-full text-white text-xs font-medium ${getCategoryColor(category)}`}>
            {category.toUpperCase()}
          </span>
          {price && (
            <span className="text-lg font-bold text-primary">{price}</span>
          )}
        </div>
        <h3 className="text-xl font-bold text-foreground leading-tight">{title}</h3>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="flex items-center text-muted-foreground">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="text-sm">{date} at {time}</span>
        </div>
        <div className="flex items-center text-muted-foreground">
          <Map className="w-4 h-4 mr-2" />
          <span className="text-sm">{venue}</span>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full" variant="outline">
          <Ticket className="w-4 h-4 mr-2" />
          Get Tickets
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
