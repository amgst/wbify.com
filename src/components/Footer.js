import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-2xl font-bold">Wbify</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Professional web development services that transform your digital vision into reality. We specialize in creating exceptional websites, e-commerce stores, and web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  E-commerce Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Performance Optimization
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section - Brevo Integration */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-300">
                Get the latest web development tips and project updates delivered to your inbox.
              </p>
            </div>
            
            {/* Newsletter Subscribe Button */}
            <div className="flex-shrink-0">
              <button
                onClick={() => {
                  // Calculate center position
                  const screenWidth = window.screen.width;
                  const screenHeight = window.screen.height;
                  const popupWidth = 600;
                  const popupHeight = 700;
                  const left = (screenWidth - popupWidth) / 2;
                  const top = (screenHeight - popupHeight) / 2;
                  
                  // Open Brevo form in a centered popup window with better styling
                  const popup = window.open(
                    'https://efd0dc66.sibforms.com/serve/MUIFADo4gydgnBDNGPiFe7BFzZ7seQQcUaKqEBTIzfHZxRXXBvMYyztvIzbZy5_zdX-UD4ceKtVZiN_KwVLcncF2GGRAMGCj0pPD8j2TNp4ogEh7o5xkKFt4oebGjNwr2KNLx6F55Trgz_aID4gM7XdCy44VP9tYEmOYuAbsfNeKdFbDpdmj7TVl8KDN10HWVsrW0MoyJxU8eDMQ',
                    'newsletter-signup',
                    `width=${popupWidth},height=${popupHeight},left=${left},top=${top},scrollbars=yes,resizable=yes,status=no,toolbar=no,menubar=no,location=no`
                  );
                  
                  // Focus the popup window and add some styling
                  if (popup) {
                    popup.focus();
                    // Add a title to the popup
                    popup.document.title = 'Newsletter Subscription';
                  }
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
              >
                <span className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Subscribe Now</span>
                </span>
              </button>
            </div>
          </div>
          
          <p className="mt-4 text-xs text-gray-500 text-center md:text-left">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="md:flex md:items-center md:justify-center">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Wbify. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;