
import { Calendar, Ticket, Map, Users } from "lucide-react";

const QuickLinksSection = () => {
  const quickLinks = [
    {
      icon: Calendar,
      title: "Events",
      description: "Browse upcoming events",
      href: "#events"
    },
    {
      icon: Ticket,
      title: "Tickets",
      description: "Purchase event tickets",
      href: "#tickets"
    },
    {
      icon: Map,
      title: "Facilities",
      description: "Explore our venues",
      href: "#facilities"
    },
    {
      icon: Users,
      title: "Contact",
      description: "Get in touch with us",
      href: "#contact"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {quickLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <link.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{link.title}</h3>
              <p className="text-gray-600 text-sm">{link.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;
