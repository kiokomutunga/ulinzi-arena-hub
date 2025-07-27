
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Menu, Shield, ChevronDown, Users, Calendar, MapPin } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: "HOME", href: "#", simple: true },
    { name: "ABOUT", href: "#about", simple: true },
    { 
      name: "EVENTS", 
      href: "#events", 
      dropdown: [
        { title: "Upcoming Events", description: "View all scheduled events", icon: Calendar },
        { title: "Live Events", description: "Currently happening", icon: Users },
        { title: "Event Calendar", description: "Full calendar view", icon: MapPin }
      ]
    },
    { name: "FACILITIES", href: "#facilities", simple: true },
    { name: "BOOKING", href: "#booking", simple: true },
    { name: "CONTACT", href: "#contact", simple: true }
  ];

  return (
    <>
      {/* Professional Military Banner */}
      <div className="bg-stadium-primary text-white py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-center text-sm font-medium">
          <Shield className="h-4 w-4 mr-2" />
          <span className="font-semibold">KENYA DEFENCE FORCES</span>
          <span className="mx-3 text-gray-300">|</span>
          <span>ULINZI SPORTS COMPLEX</span>
        </div>
      </div>

      {/* Enhanced Main Navigation with better visibility */}
      <header className="fixed top-8 left-0 right-0 z-50 w-full">
        <div className="bg-white/95 backdrop-blur-md mx-6 rounded-lg shadow-lg border border-gray-200/50">
          <div className="container mx-auto flex h-16 items-center justify-between px-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
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
                      {item.simple ? (
                        <NavigationMenuLink className="text-stadium-primary hover:text-stadium-secondary transition-colors cursor-pointer font-medium text-sm tracking-wide">
                          {item.name}
                        </NavigationMenuLink>
                      ) : (
                        <>
                          <NavigationMenuTrigger className="text-stadium-primary hover:text-stadium-secondary transition-colors font-medium text-sm tracking-wide bg-transparent hover:bg-gray-50">
                            {item.name} <ChevronDown className="ml-1 h-3 w-3" />
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <div className="p-4 w-80 bg-white border border-gray-200 rounded-lg shadow-lg">
                              <h3 className="font-semibold text-base mb-3 text-stadium-primary">{item.name}</h3>
                              <div className="space-y-2">
                                {item.dropdown?.map((dropItem, index) => (
                                  <div key={index} className="flex items-start space-x-3 p-2 rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
                                    <dropItem.icon className="h-4 w-4 text-gray-600 mt-0.5" />
                                    <div>
                                      <p className="font-medium text-sm text-stadium-primary">{dropItem.title}</p>
                                      <p className="text-xs text-gray-600">{dropItem.description}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </NavigationMenuContent>
                        </>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              {/* Action Button */}
              <Button 
                className="bg-stadium-secondary hover:bg-stadium-secondary/90 text-white font-medium px-6 shadow-md"
              >
                BOOK NOW
              </Button>
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
                    <a key={item.name} href={item.href} className="text-base font-medium text-stadium-primary hover:text-stadium-secondary transition-colors tracking-wide">
                      {item.name}
                    </a>
                  ))}
                  <div className="pt-4 border-t border-gray-200">
                    <Button className="w-full bg-stadium-secondary hover:bg-stadium-secondary/90 text-white font-medium">
                      BOOK NOW
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
