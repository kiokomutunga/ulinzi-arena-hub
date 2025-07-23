
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Menu, Calendar, Trophy, Star, MapPin, Clock, Shield, ChevronDown, Users, Award } from "lucide-react";
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
      {/* Official Defense Command Banner */}
      <div className="defense-command-gradient text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center text-sm military-precision">
          <Award className="h-5 w-5 mr-3" />
          <span className="defense-insignia font-bold">KENYA DEFENCE FORCES</span>
          <span className="mx-4 text-defense-gold">•</span>
          <span>ULINZI SPORTS COMPLEX - EXCELLENCE THROUGH DISCIPLINE</span>
        </div>
      </div>

      <header className="fixed top-12 left-0 right-0 z-50 w-full">
        <div className="defense-glass-nav mx-4 rounded-lg shadow-2xl">
          <div className="container mx-auto flex h-20 items-center justify-between px-8">
            {/* Professional Military Logo */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 defense-glass rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-defense-gold" />
                </div>
                <div className="absolute -top-1 -right-1 h-4 w-4 bg-defense-crimson rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary-foreground military-precision">
                  ULINZI SPORTS COMPLEX
                </h1>
                <p className="text-sm text-defense-gold font-medium">KENYA DEFENCE FORCES FACILITY</p>
              </div>
            </div>

            {/* Professional Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <NavigationMenu>
                <NavigationMenuList className="space-x-8">
                  {/* Home */}
                  <NavigationMenuItem>
                    <NavigationMenuLink className="text-primary-foreground hover:text-defense-gold transition-colors cursor-pointer font-semibold military-precision">
                      HOME
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* About */}
                  <NavigationMenuItem>
                    <NavigationMenuLink className="text-primary-foreground hover:text-defense-gold transition-colors cursor-pointer font-semibold military-precision">
                      ABOUT
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* Events Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-primary-foreground hover:text-defense-gold transition-colors font-semibold military-precision">
                      OPERATIONS <ChevronDown className="ml-1 h-4 w-4" />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="p-6 w-[550px] defense-glass border border-defense-gold/30 rounded-lg">
                        <h3 className="font-bold text-lg mb-4 text-defense-navy">CURRENT OPERATIONS</h3>
                        <div className="grid gap-4">
                          {currentEvents.map((event, index) => (
                            <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-defense-navy/10 transition-colors">
                              <div className={`w-3 h-3 rounded-full mt-2 ${event.status === 'live' ? 'bg-defense-crimson animate-pulse' : 'bg-defense-gold'}`}></div>
                              <div className="flex-1">
                                <p className="font-semibold text-defense-navy military-precision">{event.title}</p>
                                <div className="flex items-center space-x-4 text-sm text-defense-slate mt-1">
                                  <span className="flex items-center"><Calendar className="h-3 w-3 mr-1" />{event.date}</span>
                                  <span className="flex items-center"><Clock className="h-3 w-3 mr-1" />{event.time}</span>
                                  <span className="flex items-center"><MapPin className="h-3 w-3 mr-1" />{event.venue}</span>
                                </div>
                              </div>
                              {event.status === 'live' && (
                                <span className="bg-defense-crimson text-white text-xs px-3 py-1 rounded-full font-bold">
                                  LIVE
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                        <Button className="w-full mt-6 bg-defense-navy hover:bg-defense-slate text-white font-bold">
                          VIEW ALL OPERATIONS
                        </Button>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Intelligence (News) Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-primary-foreground hover:text-defense-gold transition-colors font-semibold military-precision">
                      INTELLIGENCE <ChevronDown className="ml-1 h-4 w-4" />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="p-6 w-[450px] defense-glass border border-defense-gold/30 rounded-lg">
                        <h3 className="font-bold text-lg mb-4 text-defense-navy">LATEST INTELLIGENCE</h3>
                        <div className="space-y-4">
                          {liveNews.map((item, index) => (
                            <div key={index} className="border-l-4 border-defense-crimson pl-4 py-2 hover:bg-defense-navy/5 rounded-r-lg transition-colors">
                              <div className="flex items-center justify-between">
                                <span className={`text-xs px-3 py-1 rounded-full font-bold ${item.urgent ? 'bg-defense-crimson text-white' : 'bg-defense-gold text-defense-navy'}`}>
                                  {item.category}
                                </span>
                                {item.urgent && <span className="text-xs text-defense-crimson font-bold">PRIORITY</span>}
                              </div>
                              <p className="font-semibold text-defense-navy mt-2 military-precision">{item.title}</p>
                              <p className="text-sm text-defense-slate">{item.date}</p>
                            </div>
                          ))}
                        </div>
                        <Button variant="outline" className="w-full mt-6 border-defense-gold text-defense-navy hover:bg-defense-gold hover:text-defense-navy font-bold">
                          ACCESS FULL BRIEFING
                        </Button>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Personnel Zone */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-primary-foreground hover:text-defense-gold transition-colors font-semibold military-precision">
                      PERSONNEL <ChevronDown className="ml-1 h-4 w-4" />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="p-6 w-[400px] defense-glass border border-defense-gold/30 rounded-lg">
                        <h3 className="font-bold text-lg mb-4 text-defense-navy">PERSONNEL SERVICES</h3>
                        <div className="grid gap-3">
                          {fanZoneFeatures.map((item, index) => (
                            <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-defense-navy/5 transition-colors cursor-pointer">
                              <item.icon className="h-6 w-6 text-defense-gold mt-1" />
                              <div>
                                <p className="font-semibold text-defense-navy military-precision">{item.title}</p>
                                <p className="text-sm text-defense-slate">{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Simple Links */}
                  <NavigationMenuItem>
                    <NavigationMenuLink className="text-primary-foreground hover:text-defense-gold transition-colors cursor-pointer font-semibold military-precision">
                      FACILITIES
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink className="text-primary-foreground hover:text-defense-gold transition-colors cursor-pointer font-semibold military-precision">
                      BOOKING
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink className="text-primary-foreground hover:text-defense-gold transition-colors cursor-pointer font-semibold military-precision">
                      CONTACT
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm" className="border-defense-gold text-primary-foreground hover:bg-defense-gold hover:text-defense-navy font-bold">
                  PERSONNEL LOGIN
                </Button>
                <Link to="/admin">
                  <Button size="sm" className="bg-defense-crimson hover:bg-defense-crimson/80 text-white font-bold">
                    COMMAND CENTER
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
              <SheetContent side="right" className="w-80 bg-defense-navy text-primary-foreground">
                <nav className="flex flex-col space-y-6 mt-8">
                  <a href="#" className="text-lg font-semibold hover:text-defense-gold transition-colors military-precision">HOME</a>
                  <a href="#" className="text-lg font-semibold hover:text-defense-gold transition-colors military-precision">ABOUT</a>
                  <a href="#events" className="text-lg font-semibold hover:text-defense-gold transition-colors military-precision">OPERATIONS</a>
                  <a href="#news" className="text-lg font-semibold hover:text-defense-gold transition-colors military-precision">INTELLIGENCE</a>
                  <a href="#personnel" className="text-lg font-semibold hover:text-defense-gold transition-colors military-precision">PERSONNEL</a>
                  <a href="#facilities" className="text-lg font-semibold hover:text-defense-gold transition-colors military-precision">FACILITIES</a>
                  <a href="#booking" className="text-lg font-semibold hover:text-defense-gold transition-colors military-precision">BOOKING</a>
                  <a href="#contact" className="text-lg font-semibold hover:text-defense-gold transition-colors military-precision">CONTACT</a>
                  <div className="pt-6 border-t border-defense-gold/30">
                    <Button variant="outline" className="w-full mb-3 border-defense-gold text-primary-foreground hover:bg-defense-gold hover:text-defense-navy font-bold">
                      PERSONNEL LOGIN
                    </Button>
                    <Link to="/admin">
                      <Button className="w-full bg-defense-crimson hover:bg-defense-crimson/80 font-bold">
                        COMMAND CENTER
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
