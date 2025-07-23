
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Menu, Shield, ChevronDown, Users, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: "HOME", href: "#", simple: true },
    { name: "ABOUT", href: "#", simple: true },
    { 
      name: "EVENTS", 
      href: "#", 
      dropdown: [
        { title: "Upcoming Events", description: "View all scheduled events", icon: Calendar },
        { title: "Live Events", description: "Currently happening", icon: Users },
        { title: "Event Calendar", description: "Full calendar view", icon: MapPin }
      ]
    },
    { name: "FACILITIES", href: "#", simple: true },
    { name: "BOOKING", href: "#", simple: true },
    { name: "CONTACT", href: "#", simple: true }
  ];

  return (
    <>
      {/* Professional Military Banner */}
      <div className="military-professional text-military-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center text-sm text-professional">
          <Shield className="h-4 w-4 mr-2" />
          <span className="font-semibold">KENYA DEFENCE FORCES</span>
          <span className="mx-3 text-military-text-muted">|</span>
          <span>ULINZI SPORTS COMPLEX</span>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="fixed top-8 left-0 right-0 z-50 w-full">
        <div className="military-nav mx-6 rounded-lg professional-shadow">
          <div className="container mx-auto flex h-16 items-center justify-between px-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-military-white text-professional">
                  ULINZI SPORTS COMPLEX
                </h1>
                <p className="text-xs text-military-text-muted">Defence Forces Facility</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <NavigationMenu>
                <NavigationMenuList className="space-x-6">
                  {navigationItems.map((item) => (
                    <NavigationMenuItem key={item.name}>
                      {item.simple ? (
                        <NavigationMenuLink className="text-military-white hover:text-accent-foreground transition-colors cursor-pointer font-medium text-sm text-professional">
                          {item.name}
                        </NavigationMenuLink>
                      ) : (
                        <>
                          <NavigationMenuTrigger className="text-military-white hover:text-accent-foreground transition-colors font-medium text-sm text-professional">
                            {item.name} <ChevronDown className="ml-1 h-3 w-3" />
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <div className="p-4 w-80 bg-card border border-border rounded-lg professional-shadow">
                              <h3 className="font-semibold text-base mb-3 text-card-foreground">{item.name}</h3>
                              <div className="space-y-2">
                                {item.dropdown?.map((dropItem, index) => (
                                  <div key={index} className="flex items-start space-x-3 p-2 rounded-md hover:bg-accent transition-colors cursor-pointer">
                                    <dropItem.icon className="h-4 w-4 text-muted-foreground mt-0.5" />
                                    <div>
                                      <p className="font-medium text-sm text-card-foreground">{dropItem.title}</p>
                                      <p className="text-xs text-muted-foreground">{dropItem.description}</p>
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

              {/* Action Buttons */}
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm" className="border-accent text-military-white hover:bg-accent hover:text-accent-foreground font-medium">
                  LOGIN
                </Button>
                <Link to="/admin">
                  <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium">
                    ADMIN
                  </Button>
                </Link>
              </div>
            </nav>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-military-white">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-card text-card-foreground">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <a key={item.name} href={item.href} className="text-base font-medium hover:text-primary transition-colors text-professional">
                      {item.name}
                    </a>
                  ))}
                  <div className="pt-4 border-t border-border space-y-3">
                    <Button variant="outline" className="w-full font-medium">
                      LOGIN
                    </Button>
                    <Link to="/admin">
                      <Button className="w-full bg-secondary hover:bg-secondary/90 font-medium">
                        ADMIN
                      </Button>
                    </Link>
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
