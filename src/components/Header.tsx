import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Menu, Calendar, Trophy, Star, MapPin, Clock, Shield, ChevronDown, Users } from "lucide-react";
import { Link } from "react-router-dom";

// Dynamic sample data for dropdowns
const currentEvents = [
  { title: "KDF vs Police FC - Premier League", date: "Today", time: "3:00 PM", venue: "Main Stadium", status: "live" },
  { title: "Athletics Championship Final", date: "Tomorrow", time: "9:00 AM", venue: "Track & Field", status: "upcoming" },
  { title: "Military Parade Ceremony", date: "March 25", time: "10:00 AM", venue: "Main Stadium", status: "upcoming" },
  { title: "Youth Football Tournament", date: "March 30", time: "2:00 PM", venue: "Training Pitch", status: "upcoming" },
];

const liveNews = [
  { title: "New Olympic-Standard Track Unveiled", date: "Today", category: "Facilities", urgent: true },
  { title: "KDF Wins Regional Championship", date: "Yesterday", category: "Sports", urgent: false },
  { title: "Security Upgrades Complete", date: "March 10", category: "Military", urgent: false },
  { title: "Community Outreach Program Launch", date: "March 8", category: "Community", urgent: false },
];

const fanZoneFeatures = [
  { title: "Official Team Store", description: "Authentic jerseys & merchandise", icon: Trophy },
  { title: "VIP Hospitality", description: "Premium match experiences", icon: Star },
  { title: "Season Memberships", description: "Exclusive member benefits", icon: Shield },
  { title: "Fan Community Hub", description: "Connect with fellow supporters", icon: Users },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Military Heritage Banner */}
      <div className="bg-military-black text-military-gold py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center text-sm font-medium">
          <Shield className="h-4 w-4 mr-2" />
          <span>Ulinzi Sports Complex - Excellence Through Discipline & Commitment</span>
        </div>
      </div>

      <header className="fixed top-8 left-0 right-0 z-50 w-full">
        <div className="glass-nav mx-4 rounded-xl">
          <div className="container mx-auto flex h-16 items-center justify-between px-6">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Shield className="h-10 w-10 text-military-gold" />
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-kenya-red rounded-full"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary-foreground">Ulinzi Sports Complex</h1>
                <p className="text-xs text-military-gold">Lang'ata, Nairobi</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <NavigationMenu>
                <NavigationMenuList className="space-x-6">
                  {/* Home */}
                  <NavigationMenuItem>
                    <NavigationMenuLink className="text-primary-foreground hover:text-military-gold transition-colors cursor-pointer font-medium">
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* About */}
                  <NavigationMenuItem>
                    <NavigationMenuLink className="text-primary-foreground hover:text-military-gold transition-colors cursor-pointer font-medium">
                      About
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* Events Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-primary-foreground hover:text-military-gold transition-colors font-medium">
                      Events & Fixtures <ChevronDown className="ml-1 h-4 w-4" />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="p-6 w-[500px] bg-card border border-military-gold/20">
                        <h3 className="font-bold text-lg mb-4 text-military-black">Current Events</h3>
                        <div className="grid gap-4">
                          {currentEvents.map((event, index) => (
                            <div key={index} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                              <div className={`w-3 h-3 rounded-full mt-2 ${event.status === 'live' ? 'bg-kenya-red animate-pulse' : 'bg-military-gold'}`}></div>
                              <div className="flex-1">
                                <p className="font-semibold text-military-black">{event.title}</p>
                                <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                                  <span className="flex items-center"><Calendar className="h-3 w-3 mr-1" />{event.date}</span>
                                  <span className="flex items-center"><Clock className="h-3 w-3 mr-1" />{event.time}</span>
                                  <span className="flex items-center"><MapPin className="h-3 w-3 mr-1" />{event.venue}</span>
                                </div>
                              </div>
                              {event.status === 'live' && <span className="bg-kenya-red text-white text-xs px-2 py-1 rounded-full">LIVE</span>}
                            </div>
                          ))}
                        </div>
                        <Button className="w-full mt-4 bg-military-black hover:bg-military-gold hover:text-military-black">
                          View All Events
                        </Button>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* News Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-primary-foreground hover:text-military-gold transition-colors font-medium">
                      News <ChevronDown className="ml-1 h-4 w-4" />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="p-6 w-[400px] bg-card border border-military-gold/20">
                        <h3 className="font-bold text-lg mb-4 text-military-black">Latest Updates</h3>
                        <div className="space-y-4">
                          {liveNews.map((item, index) => (
                            <div key={index} className="border-l-4 border-kenya-red pl-4 py-2 hover:bg-muted/50 rounded-r-lg transition-colors">
                              <div className="flex items-center justify-between">
                                <span className={`text-xs px-2 py-1 rounded-full ${item.urgent ? 'bg-kenya-red text-white' : 'bg-military-gold text-military-black'}`}>
                                  {item.category}
                                </span>
                                {item.urgent && <span className="text-xs text-kenya-red font-bold">URGENT</span>}
                              </div>
                              <p className="font-medium text-military-black mt-1">{item.title}</p>
                              <p className="text-sm text-muted-foreground">{item.date}</p>
                            </div>
                          ))}
                        </div>
                        <Button variant="outline" className="w-full mt-4 border-military-gold text-military-black hover:bg-military-gold">
                          Read All News
                        </Button>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Fan Zone Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-primary-foreground hover:text-military-gold transition-colors font-medium">
                      Fan Zone <ChevronDown className="ml-1 h-4 w-4" />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="p-6 w-[350px] bg-card border border-military-gold/20">
                        <h3 className="font-bold text-lg mb-4 text-military-black">Fan Experience</h3>
                        <div className="grid gap-3">
                          {fanZoneFeatures.map((item, index) => (
                            <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                              <item.icon className="h-6 w-6 text-military-gold mt-1" />
                              <div>
                                <p className="font-semibold text-military-black">{item.title}</p>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Simple Links */}
                  <NavigationMenuItem>
                    <NavigationMenuLink className="text-primary-foreground hover:text-military-gold transition-colors cursor-pointer font-medium">
                      Facilities
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink className="text-primary-foreground hover:text-military-gold transition-colors cursor-pointer font-medium">
                      Book Appointment
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink className="text-primary-foreground hover:text-military-gold transition-colors cursor-pointer font-medium">
                      Contact Us
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm" className="border-military-gold text-primary-foreground hover:bg-military-gold hover:text-military-black">
                  Sign In
                </Button>
                <Link to="/admin">
                  <Button size="sm" className="bg-kenya-red hover:bg-kenya-red/80">
                    Admin
                  </Button>
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-primary-foreground">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-military-black text-primary-foreground">
                <nav className="flex flex-col space-y-6 mt-8">
                  <a href="#" className="text-lg font-medium hover:text-military-gold transition-colors">Home</a>
                  <a href="#" className="text-lg font-medium hover:text-military-gold transition-colors">About</a>
                  <a href="#events" className="text-lg font-medium hover:text-military-gold transition-colors">Events & Fixtures</a>
                  <a href="#news" className="text-lg font-medium hover:text-military-gold transition-colors">News</a>
                  <a href="#fanzone" className="text-lg font-medium hover:text-military-gold transition-colors">Fan Zone</a>
                  <a href="#facilities" className="text-lg font-medium hover:text-military-gold transition-colors">Facilities</a>
                  <a href="#booking" className="text-lg font-medium hover:text-military-gold transition-colors">Book Appointment</a>
                  <a href="#contact" className="text-lg font-medium hover:text-military-gold transition-colors">Contact Us</a>
                  <div className="pt-6 border-t border-military-gold/30">
                    <Button variant="outline" className="w-full mb-3 border-military-gold text-primary-foreground hover:bg-military-gold hover:text-military-black">
                      Sign In
                    </Button>
                    <Link to="/admin">
                      <Button className="w-full bg-kenya-red hover:bg-kenya-red/80">Admin</Button>
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