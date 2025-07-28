
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
              <i className="fas fa-shield-alt text-3xl text-red-600 mr-3"></i>
              <span className="text-xl font-bold text-gray-900">
                Ulinzi Sports
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => handleNavigation('#facilities')}
                className="text-gray-600 hover:text-red-600 transition-colors duration-300"
              >
                Facilities
              </button>
              <button
                onClick={() => handleNavigation('#teams')}
                className="text-gray-600 hover:text-red-600 transition-colors duration-300"
              >
                Teams
              </button>
              <button
                onClick={() => handleNavigation('#events')}
                className="text-gray-600 hover:text-red-600 transition-colors duration-300"
              >
                Events
              </button>
              <button
                onClick={() => handleNavigation('#gallery')}
                className="text-gray-600 hover:text-red-600 transition-colors duration-300"
              >
                Gallery
              </button>
              <button
                onClick={() => handleNavigation('#contact')}
                className="text-gray-600 hover:text-red-600 transition-colors duration-300"
              >
                Contact
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => navigate('/my-bookings')}
                className="text-red-600 hover:text-red-700 font-semibold whitespace-nowrap !rounded-button"
              >
                Sign In
              </button>
              <button 
                onClick={() => navigate('/booking')}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 font-semibold transition-colors duration-300 whitespace-nowrap !rounded-button"
              >
                Book Facility
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-red-600 transition-colors duration-300"
              >
                <i className="fas fa-bars text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-40 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="bg-white h-full w-64 shadow-xl">
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <i className="fas fa-shield-alt text-2xl text-red-600 mr-2"></i>
                <span className="text-lg font-bold text-gray-900">
                  Ulinzi Sports
                </span>
              </div>
              <button
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-red-600"
              >
                <i className="fas fa-times text-2xl"></i>
              </button>
            </div>
            <div className="space-y-4">
              <button
                onClick={() => handleNavigation('#facilities')}
                className="block text-gray-600 hover:text-red-600 transition-colors duration-300"
              >
                Facilities
              </button>
              <button
                onClick={() => handleNavigation('#teams')}
                className="block text-gray-600 hover:text-red-600 transition-colors duration-300"
              >
                Teams
              </button>
              <button
                onClick={() => handleNavigation('#events')}
                className="block text-gray-600 hover:text-red-600 transition-colors duration-300"
              >
                Events
              </button>
              <button
                onClick={() => handleNavigation('#gallery')}
                className="block text-gray-600 hover:text-red-600 transition-colors duration-300"
              >
                Gallery
              </button>
              <button
                onClick={() => handleNavigation('#contact')}
                className="block text-gray-600 hover:text-red-600 transition-colors duration-300"
              >
                Contact
              </button>
              <div className="pt-4 space-y-4">
                <button 
                  onClick={() => navigate('/my-bookings')}
                  className="w-full text-red-600 hover:text-red-700 font-semibold py-2 whitespace-nowrap !rounded-button"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => navigate('/booking')}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 font-semibold transition-colors duration-300 whitespace-nowrap !rounded-button"
                >
                  Book Facility
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
