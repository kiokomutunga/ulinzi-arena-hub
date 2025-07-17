
import { Card, CardContent } from "@/components/ui/card";

const NewsSection = () => {
  const newsItems = [
    {
      title: 'Ulinzi Sports Complex to Host International Athletics Championship',
      excerpt: 'The prestigious event will bring together athletes from over 20 countries competing in various track and field disciplines.',
      date: 'June 5, 2025',
      category: 'Athletics',
      image: 'https://readdy.ai/api/search-image?query=modern%20athletics%20stadium%20with%20track%20and%20field%20athletes%20competing%20in%20a%20professional%20championship%20event%2C%20bright%20sunny%20day%2C%20clear%20blue%20sky%2C%20spectators%20in%20the%20background%2C%20professional%20sports%20photography%20style&width=600&height=400&seq=news1&orientation=landscape'
    },
    {
      title: 'New State-of-the-Art Training Facilities Unveiled',
      excerpt: 'The complex now features cutting-edge equipment and specialized training areas for elite athletes.',
      date: 'June 3, 2025',
      category: 'Facilities',
      image: 'https://readdy.ai/api/search-image?query=modern%20sports%20training%20facility%20with%20high-tech%20equipment%2C%20athletes%20training%2C%20clean%20modern%20design%2C%20bright%20lighting%2C%20professional%20gym%20environment%2C%20wide%20angle%20view%20of%20spacious%20interior&width=600&height=400&seq=news2&orientation=landscape'
    },
    {
      title: 'Ticket Sales for Summer Concert Series Now Open',
      excerpt: 'Secure your spot for the hottest musical performances coming to Ulinzi Sports Complex this summer.',
      date: 'June 1, 2025',
      category: 'Events',
      image: 'https://readdy.ai/api/search-image?query=outdoor%20concert%20venue%20at%20sunset%20with%20stage%20lights%2C%20crowd%20of%20excited%20fans%2C%20professional%20concert%20photography%2C%20vibrant%20atmosphere%2C%20music%20festival%20setting%20in%20a%20sports%20stadium&width=600&height=400&seq=news3&orientation=landscape'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest happenings at Ulinzi Sports Complex.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                    {news.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{news.excerpt}</p>
                <p className="text-xs text-gray-500">{news.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
