import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ isHomePage = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = isHomePage 
    ? `fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 lg:px-12 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`
    : "fixed top-0 left-0 right-0 bg-white shadow-lg z-50";

  const linkClass = isHomePage 
    ? `transition-colors duration-300 ${
        isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-300'
      }`
    : "text-gray-700 hover:text-purple-600 transition-colors duration-300";

  const activeLinkClass = isHomePage 
    ? `font-semibold ${
        isScrolled ? 'text-purple-600' : 'text-purple-300'
      }`
    : "text-purple-600 font-semibold";

  const logoClass = isHomePage 
    ? `text-2xl font-bold transition-colors duration-300 ${
        isScrolled ? 'text-gray-900' : 'text-white'
      }`
    : "text-2xl font-bold text-gray-900";

  const buttonClass = isHomePage 
    ? `transition-colors duration-300 ${
        isScrolled ? 'text-gray-700' : 'text-white'
      }`
    : "text-gray-700";

  const mobileMenuClass = isHomePage
    ? `${isScrolled ? 'bg-white shadow-lg border-t border-gray-200' : 'bg-black bg-opacity-95 backdrop-blur-md border-t border-gray-700'}`
    : "bg-white shadow-lg border-t border-gray-200";

  const mobileLinkClass = isHomePage
    ? `transition-colors duration-300 block py-3 px-6 ${
        isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-300'
      }`
    : "text-gray-700 hover:text-purple-600 transition-colors duration-300 block py-3 px-6";

  const isActive = (path) => location.pathname === path;

  const NavContent = () => (
    <>
      <div className={logoClass}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Wbify</Link>
      </div>
      <div className="hidden md:flex space-x-8">
        <Link 
          to="/" 
          className={isActive('/') ? activeLinkClass : linkClass}
        >
          Home
        </Link>
        <Link 
          to="/services" 
          className={isActive('/services') ? activeLinkClass : linkClass}
        >
          Services
        </Link>
        <Link 
          to="/portfolio" 
          className={isActive('/portfolio') ? activeLinkClass : linkClass}
        >
          Portfolio
        </Link>
        <Link 
          to="/about" 
          className={isActive('/about') ? activeLinkClass : linkClass}
        >
          About
        </Link>
        <Link 
          to="/contact" 
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover-scale"
        >
          Contact
        </Link>
      </div>
      <div className="md:hidden">
        <button 
          className={buttonClass}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </div>
    </>
  );

  if (isHomePage) {
    return (
      <>
        <nav className={navClass}>
          <NavContent />
        </nav>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`fixed top-0 left-0 right-0 z-40 md:hidden ${mobileMenuClass}`} style={{ marginTop: '80px' }}>
            <div className="flex flex-col">
              <Link 
                to="/" 
                className={isActive('/') ? `${mobileLinkClass} font-semibold` : mobileLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={isActive('/services') ? `${mobileLinkClass} font-semibold` : mobileLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/portfolio" 
                className={isActive('/portfolio') ? `${mobileLinkClass} font-semibold` : mobileLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                to="/about" 
                className={isActive('/about') ? `${mobileLinkClass} font-semibold` : mobileLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="bg-purple-600 hover:bg-purple-700 text-white mx-6 my-3 px-6 py-3 rounded-full transition-all duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <nav className={navClass}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            <NavContent />
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`fixed top-0 left-0 right-0 z-40 md:hidden ${mobileMenuClass}`} style={{ marginTop: '80px' }}>
          <div className="flex flex-col">
            <Link 
              to="/" 
              className={isActive('/') ? `${mobileLinkClass} font-semibold` : mobileLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={isActive('/services') ? `${mobileLinkClass} font-semibold` : mobileLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/portfolio" 
              className={isActive('/portfolio') ? `${mobileLinkClass} font-semibold` : mobileLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              to="/about" 
              className={isActive('/about') ? `${mobileLinkClass} font-semibold` : mobileLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="bg-purple-600 hover:bg-purple-700 text-white mx-6 my-3 px-6 py-3 rounded-full transition-all duration-300 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;