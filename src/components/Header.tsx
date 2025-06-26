
import { Button } from "@/components/ui/button";
import { Calendar, Ticket, Map, Users, Settings, Search, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const upcomingEvents = [
    { title: "Ulinzi FC vs AFC Leopards", date: "June 10, 2025", time: "3:00 PM" },
    { title: "Nairobi Open Athletics", date: "June 13, 2025", time: "8:00 AM" },
    { title: "Gospel Explosion Concert", date: "June 15, 2025", time: "6:00 PM" }
  ];

  const newsItems = [
    { title: "New Training Facilities Opened", category: "Facilities" },
    { title: "Ulinzi Stars Championship Win", category: "Sports" },
    { title: "Upcoming Concert Series", category: "Entertainment" }
  ];

  const fanZoneItems = [
    { title: "Fan Shop", description: "Official merchandise and gear" },
    { title: "Photo Gallery", description: "Memorable moments captured" },
    { title: "Player Profiles", description: "Meet your favorite players" },
    { title: "Stadium Tours", description: "Behind the scenes experience" }
  ];

  return (
    <>
      {/* COVID-19 Safety Notice Banner */}
      <div className="bg-primary text-white text-center py-2 px-4">
        <p className="text-sm font-medium">
          COVID-19 Safety Protocols in Effect — Face Masks Required for All Indoor Events
        </p>
      </div>
      
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-2xl font-bold text-blue-800">
                  Ulinzi Sports Complex
                </Link>
              </div>
              
              <NavigationMenu className="hidden md:ml-6 md:flex">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link to="/" className="border-b-2 border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                      Home
                    </Link>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium">
                      Events
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                        <div className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md" href="#events">
                              <Calendar className="h-6 w-6" />
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Upcoming Events
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Discover exciting events happening at our venue
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </div>
                        {upcomingEvents.map((event, index) => (
                          <NavigationMenuLink key={index} asChild>
                            <a href="#events" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="text-sm font-medium leading-none">{event.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {event.date} • {event.time}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link to="#tickets" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium">
                      Tickets
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link to="#facilities" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium">
                      Facilities
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium">
                      News
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 md:w-[400px]">
                        <div className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md" href="#news">
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Latest News
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Stay updated with the latest happenings
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </div>
                        {newsItems.map((news, index) => (
                          <NavigationMenuLink key={index} asChild>
                            <a href="#news" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="text-sm font-medium leading-none">{news.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {news.category}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium">
                      Fan Zone
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {fanZoneItems.map((item, index) => (
                          <NavigationMenuLink key={index} asChild>
                            <a href="#fan-zone" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link to="#booking" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium">
                      Booking
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/admin">
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                  <Settings className="w-4 h-4 mr-2" />
                  Admin
                </Button>
              </Link>
              
              <Button type="button" className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Users className="w-4 h-4 mr-2" />
                <span>Sign In</span>
              </Button>
              
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-500">
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a href="#" className="bg-blue-50 border-l-4 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 text-base font-medium">
              Home
            </a>
            <a href="#events" className="border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium">
              Events
            </a>
            <a href="#tickets" className="border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium">
              Tickets
            </a>
            <a href="#facilities" className="border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium">
              Facilities
            </a>
            <a href="#news" className="border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium">
              News
            </a>
            <a href="#fan-zone" className="border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium">
              Fan Zone
            </a>
            <a href="#booking" className="border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium">
              Booking
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
