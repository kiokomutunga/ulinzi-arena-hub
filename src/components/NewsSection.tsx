
import { Card, CardContent } from "@/components/ui/card";

const NewsSection = () => {
  const newsItems = [
    {
      title: 'Ulinzi Sports Complex to Host International Athletics Championship',
      excerpt: 'The prestigious event will bring together athletes from over 20 countries competing in various track and field disciplines.',
      date: 'June 5, 2025',
      category: 'Athletics',
      image: '/images/mainpitch.png'
    },
    {
      title: 'New State-of-the-Art Training Facilities Unveiled',
      excerpt: 'The complex now features cutting-edge equipment and specialized training areas for elite athletes.',
      date: 'June 3, 2025',
      category: 'Facilities',
      image: '/images/gym.png'
    },
    {
      title: 'Ticket Sales for Summer Concert Series Now Open',
      excerpt: 'Secure your spot for the hottest musical performances coming to Ulinzi Sports Complex this summer.',
      date: 'June 1, 2025',
      category: 'Events',
      image: '/images/gate.png'
    }
  ];

  const galleryItems = [
    {
      type: 'photo',
      category: 'stadium',
      image: '/images/mainpitch.png'
    },
    {
      type: 'photo',
      category: 'basketball',
      image: '/images/basketball.png'
    },
    {
      type: 'photo',
      category: 'facilities',
      image: '/images/gym.png'
    },
    {
      type: 'photo',
      category: 'facilities',
      image: '/images/swimmingpool.png'
    },
    {
      type: 'photo',
      category: 'facilities',
      image: '/images/tennis.png'
    },
    {
      type: 'photo',
      category: 'stadium',
      image: '/images/sideview.png'
    },
    {
      type: 'photo',
      category: 'facilities',
      image: '/images/indoora.png'
    },
    {
      type: 'photo',
      category: 'events',
      image: '/images/gate.png'
    },
    {
      type: 'photo',
      category: 'facilities',
      image: '/images/vip.png'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Gallery</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest happenings and witness the action at Ulinzi Sports Complex.
          </p>
        </div>

        {/* News Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              style={{ height: index % 3 === 1 ? '400px' : '300px' }}
            >
              <img 
                src={item.image} 
                alt="Gallery item"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold transition-colors duration-300 cursor-pointer whitespace-nowrap !rounded-button">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
