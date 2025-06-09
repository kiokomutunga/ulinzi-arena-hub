
import { Map, Calendar, Ticket, Users } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">U</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Ulinzi Sports Complex</h3>
                <p className="text-sm opacity-80">Multipurpose Stadium</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Kenya's premier destination for sports, entertainment, and community events.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#events" className="opacity-80 hover:opacity-100 transition-opacity">Events</a></li>
              <li><a href="#tickets" className="opacity-80 hover:opacity-100 transition-opacity">Tickets</a></li>
              <li><a href="#facilities" className="opacity-80 hover:opacity-100 transition-opacity">Facilities</a></li>
              <li><a href="#booking" className="opacity-80 hover:opacity-100 transition-opacity">Venue Booking</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 flex items-center">
              <Ticket className="w-4 h-4 mr-2" />
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Corporate Events</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Sports Hosting</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Concerts</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Community Events</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 flex items-center">
              <Map className="w-4 h-4 mr-2" />
              Contact Info
            </h4>
            <div className="text-sm space-y-2 opacity-80">
              <p>Langata Road, Nairobi</p>
              <p>P.O. Box 12345-00100</p>
              <p>+254 700 123 456</p>
              <p>info@ulinzisports.co.ke</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 Ulinzi Sports Complex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
