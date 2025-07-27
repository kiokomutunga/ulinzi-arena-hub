
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Menu, Shield, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navigationItems = [
    { name: "HOME", href: "/", simple: true },
    { name: "ABOUT", href: "#about", simple: true },
    { name: "EVENTS", href: "#events", simple: true },
    { name: "FACILITIES", href: "#facilities", simple: true },
    { name: "BOOKING", href: "/booking", simple: true },
    { name: "CONTACT", href: "#contact", simple: true }
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith('/')) {
      navigate(href);
    } else {
      // For hash links, scroll to element
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Kenya Defence Forces Banner with Flag */}
      <div className="bg-stadium-primary text-white py-3 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-center text-sm font-medium">
          <div className="flex items-center mr-4">
            {/* Kenya Flag */}
            <div className="w-8 h-5 mr-3 border border-white/20 overflow-hidden rounded-sm">
              <div className="h-1/3 bg-black"></div>
              <div className="h-1/3 bg-red-600"></div>
              <div className="h-1/3 bg-green-600"></div>
            </div>
            <Shield className="h-4 w-4 mr-2" />
            <span className="font-bold">KENYA DEFENCE FORCES</span>
          </div>
          <span className="mx-3 text-gray-300">|</span>
          <span className="font-semibold">ULINZI SPORTS COMPLEX</span>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="fixed top-12 left-0 right-0 z-50 w-full">
        <div className="bg-white/98 backdrop-blur-md mx-6 rounded-lg shadow-lg border border-gray-200/50">
          <div className="container mx-auto flex h-16 items-center justify-between px-6">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-10 h-10 bg-stadium-primary rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-stadium-primary">
                  ULINZI SPORTS COMPLEX
                </h1>
                <p className="text-xs text-gray-600">Defence Forces Facility</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <NavigationMenu>
                <NavigationMenuList className="space-x-6">
                  {navigationItems.map((item) => (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuLink 
                        className="text-stadium-primary hover:text-stadium-secondary transition-colors cursor-pointer font-medium text-sm tracking-wide"
                        onClick={() => handleNavigation(item.href)}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              {/* Military themed action buttons */}
              <div className="flex space-x-3">
                <Button 
                  onClick={() => navigate('/booking')}
                  className="bg-stadium-secondary hover:bg-stadium-secondary/90 text-white font-medium px-6 shadow-md border-2 border-stadium-secondary"
                >
                  BOOK FACILITY
                </Button>
                <Button 
                  onClick={() => navigate('/my-bookings')}
                  variant="outline"
                  className="border-2 border-stadium-primary text-stadium-primary hover:bg-stadium-primary hover:text-white font-medium px-6"
                >
                  MY BOOKINGS
                </Button>
              </div>
            </nav>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-stadium-primary hover:bg-gray-100">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <button 
                      key={item.name} 
                      onClick={() => handleNavigation(item.href)}
                      className="text-base font-medium text-stadium-primary hover:text-stadium-secondary transition-colors tracking-wide text-left"
                    >
                      {item.name}
                    </button>
                  ))}
                  <div className="pt-4 border-t border-gray-200 space-y-3">
                    <Button 
                      onClick={() => { navigate('/booking'); setIsOpen(false); }}
                      className="w-full bg-stadium-secondary hover:bg-stadium-secondary/90 text-white font-medium"
                    >
                      BOOK FACILITY
                    </Button>
                    <Button 
                      onClick={() => { navigate('/my-bookings'); setIsOpen(false); }}
                      variant="outline"
                      className="w-full border-2 border-stadium-primary text-stadium-primary hover:bg-stadium-primary hover:text-white font-medium"
                    >
                      MY BOOKINGS
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
