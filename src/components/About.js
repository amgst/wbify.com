import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const About = () => {
  useEffect(() => {
    // Update page title and meta description
    document.title = 'About Us | AMG Wbify - Expert Web Development Team';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about AMG Wbify, a passionate team of developers, designers, and digital strategists dedicated to building exceptional web experiences that drive business growth.');
    }

    // Add structured data for about page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About AMG Wbify",
      "description": "Learn about our passionate team of developers, designers, and digital strategists dedicated to building exceptional web experiences.",
      "mainEntity": {
        "@type": "Organization",
        "name": "AMG Wbify",
        "description": "Expert web development team specializing in e-commerce solutions, custom applications, and digital transformation.",
        "url": "https://amgwbify.com",
        "foundingDate": "2020",
        "expertise": [
          "Web Development",
          "E-commerce Solutions",
          "Custom Applications",
          "Digital Strategy",
          "Responsive Design"
        ]
      }
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
    <main>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="gradient-bg pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-purple-400">Wbify</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're a passionate team of developers, designers, and digital strategists dedicated to building exceptional web experiences that drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2020, Wbify emerged from a simple belief: every business deserves a digital presence that truly reflects their vision and drives meaningful results. What started as a small team of passionate developers has grown into a full-service web development agency trusted by businesses worldwide.
                </p>
                <p>
                  Our journey began when we noticed a gap in the market for truly personalized, high-quality web development services. Too many businesses were settling for cookie-cutter solutions that didn't capture their unique value proposition or meet their specific needs.
                </p>
                <p>
                  Today, we've helped over 150 businesses transform their digital presence, from small startups to established enterprises. Our approach combines cutting-edge technology with deep understanding of business strategy, ensuring every project we deliver drives real, measurable results.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl p-8 shadow-2xl animate-float bg-gradient-to-br from-purple-500 to-purple-700">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white bg-opacity-10 rounded-2xl">
                    <div className="text-3xl font-bold text-white counter">150+</div>
                    <div className="text-gray-300 text-sm">Projects Completed</div>
                  </div>
                  <div className="text-center p-6 bg-white bg-opacity-10 rounded-2xl">
                    <div className="text-3xl font-bold text-white counter">5</div>
                    <div className="text-gray-300 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center p-6 bg-white bg-opacity-10 rounded-2xl">
                    <div className="text-3xl font-bold text-white counter">98%</div>
                    <div className="text-gray-300 text-sm">Client Satisfaction</div>
                  </div>
                  <div className="text-center p-6 bg-white bg-opacity-10 rounded-2xl">
                    <div className="text-3xl font-bold text-white counter">24/7</div>
                    <div className="text-gray-300 text-sm">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission & <span className="text-purple-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating digital experiences that not only look amazing but also drive meaningful business results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="lg:col-span-3 mb-12">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white text-center">
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                  To empower businesses of all sizes with exceptional web solutions that drive growth, enhance user experience, and create lasting digital impact in an increasingly connected world.
                </p>
              </div>
            </div>

            {/* Value 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We pursue excellence in every line of code, every design decision, and every client interaction. Quality isn't just a goal—it's our standard.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="m22 21-3-3m0-6a6 6 0 1 1-12 0 6 6 0 0 1 12 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Client-Centric</h3>
              <p className="text-gray-600 leading-relaxed">
                Your success is our success. We listen, understand, and deliver solutions that align perfectly with your business goals and vision.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We stay ahead of technology trends and continuously evolve our skills to provide cutting-edge solutions that future-proof your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-purple-600">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical excellence with business acumen to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Expertise 1 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl mx-auto flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">E-commerce Development</h3>
              <p className="text-gray-600">Building powerful online stores with advanced features and seamless user experiences.</p>
            </div>

            {/* Expertise 2 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl mx-auto flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Web Applications</h3>
              <p className="text-gray-600">Creating scalable web applications with modern frameworks and cutting-edge technologies.</p>
            </div>

            {/* Expertise 3 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl mx-auto flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">UI/UX Design</h3>
              <p className="text-gray-600">Designing beautiful, intuitive interfaces that engage users and drive conversions.</p>
            </div>

            {/* Expertise 4 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl mx-auto flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Performance Optimization</h3>
              <p className="text-gray-600">Optimizing websites for speed, SEO, and conversion rate improvements.</p>
            </div>

            {/* Expertise 5 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-2xl mx-auto flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assurance</h3>
              <p className="text-gray-600">Rigorous testing and quality control to ensure flawless user experiences.</p>
            </div>

            {/* Expertise 6 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl mx-auto flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Support</h3>
              <p className="text-gray-600">24/7 support and maintenance to keep your website running smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and see how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover-scale shadow-lg">
              Get In Touch
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

export default About;