
import { Button } from "@/components/ui/button";
import { Calendar, Ticket, Map, Users, Settings, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Events", href: "#events" },
    { label: "Tickets", href: "#tickets" },
    { label: "Facilities", href: "#facilities" },
    { label: "News", href: "#news" },
    { label: "Fan Zone", href: "#fan-zone" },
    { label: "Booking", href: "#booking" },
  ];

  return (
    <>
      {/* COVID-19 Safety Notice Banner */}
      <div className="bg-primary text-white text-center py-2 px-4">
        <p className="text-sm font-medium">
          COVID-19 Safety Protocols in Effect — Face Masks Required for All Indoor Events
        </p>
      </div>
      
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-bold text-primary">Ulinzi Sports Complex</h1>
            </div>
            
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm">
                <Search className="w-4 h-4" />
              </Button>
              <Link to="/admin">
                <Button variant="ghost" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Admin
                </Button>
              </Link>
              <Button className="bg-primary hover:bg-primary/90">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
