import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const Services = () => {
  useEffect(() => {
    // Update page title and meta description
    document.title = 'Web Development Services | AMG Wbify - E-commerce & Custom Solutions';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional web development services including e-commerce development, custom web applications, responsive design, and digital solutions. Transform your business with AMG Wbify.');
    }

    // Add structured data for services
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Web Development Services",
      "provider": {
        "@type": "Organization",
        "name": "AMG Wbify",
        "url": "https://amgwbify.com"
      },
      "serviceType": "Web Development",
      "description": "Comprehensive web development solutions including e-commerce development, custom web applications, responsive design, and digital transformation services.",
      "offers": [
        {
          "@type": "Offer",
          "name": "E-commerce Development",
          "description": "Custom online stores with payment gateway integration and inventory management"
        },
        {
          "@type": "Offer",
          "name": "Custom Web Applications",
          "description": "Tailored web applications built with modern technologies"
        },
        {
          "@type": "Offer",
          "name": "Responsive Web Design",
          "description": "Mobile-first responsive websites optimized for all devices"
        }
      ]
    };

    // Remove existing structured data script if any
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove structured data when component unmounts
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <main className="bg-gray-50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="gradient-bg pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-purple-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive web development solutions designed to elevate your business and drive measurable results.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* E-commerce Development */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-semibold mb-6">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  E-commerce Specialist
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">E-commerce Development</h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Build powerful online stores that convert visitors into customers with our custom e-commerce solutions.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Payment Gateway Integration</h3>
                      <p className="text-gray-600">Secure payment processing with multiple gateway options</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Inventory Management</h3>
                      <p className="text-gray-600">Advanced inventory tracking and automated stock management</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover-scale text-center">
                    Get Started
                  </Link>
                  <Link to="/portfolio" className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 text-center">
                    View Examples
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="glass rounded-3xl p-8 shadow-2xl">
                  <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl p-6 text-white">
                    <h3 className="text-2xl font-bold mb-4">E-commerce Features</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        <span>Product Catalog Management</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        <span>Shopping Cart & Checkout</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        <span>Order Management</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                        <span>Customer Accounts</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                        <span>Analytics & Reporting</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Web Application Development */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-6">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  </svg>
                  Modern Technology
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Web Application Development</h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Create powerful, scalable web applications with modern frameworks and cutting-edge technologies.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">React & Next.js Development</h3>
                      <p className="text-gray-600">Fast, interactive user interfaces with server-side rendering</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">API Integration</h3>
                      <p className="text-gray-600">Seamless third-party integrations and custom API development</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Cloud Deployment</h3>
                      <p className="text-gray-600">Scalable hosting solutions with automatic scaling and monitoring</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover-scale text-center">
                    Get Started
                  </Link>
                  <Link to="/portfolio" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 text-center">
                    View Examples
                  </Link>
                </div>
              </div>
              
              <div className="relative lg:order-1">
                <div className="glass rounded-3xl p-8 shadow-2xl">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white">
                    <h3 className="text-2xl font-bold mb-4">Web App Features</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        <span>Custom User Interfaces</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        <span>Database Integration</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        <span>Real-time Features</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                        <span>User Authentication</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                        <span>Performance Optimization</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* UI/UX Design */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-600 text-sm font-semibold mb-6">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Design Excellence
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">UI/UX Design & Development</h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Design and develop beautiful, user-friendly interfaces that engage visitors and drive conversions.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Modern Design Systems</h3>
                      <p className="text-gray-600">Consistent, scalable design patterns and component libraries</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">User Experience Research</h3>
                      <p className="text-gray-600">Data-driven design decisions based on user behavior analysis</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Conversion Optimization</h3>
                      <p className="text-gray-600">Strategic design improvements to maximize user engagement</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover-scale text-center">
                    Get Started
                  </Link>
                  <Link to="/portfolio" className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 text-center">
                    View Examples
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="glass rounded-3xl p-8 shadow-2xl">
                  <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-6 text-white">
                    <h3 className="text-2xl font-bold mb-4">Design Features</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        <span>Responsive Design</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        <span>Accessibility Standards</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        <span>Interactive Prototypes</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                        <span>Brand Integration</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                        <span>Performance Focused</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your requirements and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover-scale shadow-lg">
              Get Free Consultation
            </Link>
            <Link to="/portfolio" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;