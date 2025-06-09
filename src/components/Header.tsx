
import { Button } from "@/components/ui/button";
import { Calendar, Ticket, Map, Users, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const navItems = [
    { label: "Events", icon: Calendar, href: "#events" },
    { label: "Tickets", icon: Ticket, href: "#tickets" },
    { label: "Facilities", icon: Map, href: "#facilities" },
    { label: "Contact", icon: Users, href: "#contact" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">U</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">Ulinzi Sports Complex</h1>
              <p className="text-sm text-muted-foreground">Multipurpose Stadium</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-200"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-3">
            <Link to="/admin">
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Admin
              </Button>
            </Link>
            <Button className="bg-primary hover:bg-primary/90">
              Buy Tickets
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
