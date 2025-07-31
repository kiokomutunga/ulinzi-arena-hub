
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (href: string) => {
    if (href.startsWith('/')) {
      navigate(href);
    } else {
      // For hash links, check if we're on homepage
      if (location.pathname === '/') {
        // If on homepage, scroll to element
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If not on homepage, navigate to homepage first then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
              <img 
                src="/images/logo.png" 
                alt="Ulinzi Sports Complex Logo" 
                className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 mr-2 sm:mr-3 object-contain"
              />
              <span className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900">
                <span className="hidden sm:inline">Ulinzi Sports Complex</span>
                <span className="sm:hidden">Ulinzi Sports</span>
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => handleNavigation('#facilities')}
                className="text-gray-600 hover:text-red-600 transition-colors duration-300 font-medium"
              >
                Facilities
              </button>
              <button
                onClick={() => handleNavigation('#teams')}
                className="text-gray-600 hover:text-red-600 transition-colors duration-300 font-medium"
              >
                Teams
              </button>
              <button
                onClick={() => handleNavigation('#events')}
                className="text-gray-600 hover:text-red-600 transition-colors duration-300 font-medium"
              >
                Events
              </button>
              <button
                onClick={() => handleNavigation('#news')}
                className="text-gray-600 hover:text-red-600 transition-colors duration-300 font-medium"
              >
                News
              </button>
              <button
                onClick={() => handleNavigation('#contact')}
                className="text-gray-600 hover:text-red-600 transition-colors duration-300 font-medium"
              >
                Contact
              </button>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button 
                onClick={() => navigate('/my-bookings')}
                className="text-red-600 hover:text-red-700 font-semibold whitespace-nowrap rounded-lg px-4 py-2 transition-colors"
              >
                Sign In
              </button>
              <button 
                onClick={() => navigate('/booking')}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 font-semibold transition-colors duration-300 whitespace-nowrap rounded-lg"
              >
                Book Facility
              </button>
            </div>

            {/* Tablet CTA Buttons */}
            <div className="hidden md:flex lg:hidden items-center space-x-3">
              <button 
                onClick={() => navigate('/my-bookings')}
                className="text-red-600 hover:text-red-700 font-semibold text-sm px-3 py-2 rounded-lg transition-colors"
              >
                Sign In
              </button>
              <button 
                onClick={() => navigate('/booking')}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 font-semibold text-sm transition-colors duration-300 rounded-lg"
              >
                Book
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-red-600 transition-colors duration-300 p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Tablet Navigation Menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block lg:hidden bg-white border-t shadow-lg`}>
          <div className="px-4 py-4">
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <button
                onClick={() => handleNavigation('#facilities')}
                className="text-gray-600 hover:text-red-600 transition-colors duration-300 font-medium px-3 py-2 rounded-lg"
              >
                Facilities
              </button>
              <button
                onClick={() => handleNavigation('#teams')}
                className="text-gray-600 hover:text-red-600 transition-colors duration-300 font-medium px-3 py-2 rounded-lg"
              >
                Teams
              </button>
              <button
                onClick={() => handleNavigation('#events')}
                className="text-gray-600 hover:text-red-600 transition-colors duration-300 font-medium px-3 py-2 rounded-lg"
              >
                Events
              </button>
              <button
                onClick={() => handleNavigation('#news')}
                className="text-gray-600 hover:text-red-600 transition-colors duration-300 font-medium px-3 py-2 rounded-lg"
              >
                News
              </button>
              <button
                onClick={() => handleNavigation('#contact')}
                className="text-gray-600 hover:text-red-600 transition-colors duration-300 font-medium px-3 py-2 rounded-lg"
              >
                Contact
              </button>
            </div>
            
            {/* Mobile CTA Buttons */}
            <div className="md:hidden flex flex-col space-y-3">
              <button 
                onClick={() => navigate('/my-bookings')}
                className="w-full text-red-600 hover:text-red-700 font-semibold py-3 border border-red-600 rounded-lg transition-colors"
              >
                Sign In
              </button>
              <button 
                onClick={() => navigate('/booking')}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 font-semibold transition-colors duration-300 rounded-lg"
              >
                Book Facility
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-40 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      />
    </>
  );
};

export default Header;
