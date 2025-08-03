import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const Portfolio = () => {
  useEffect(() => {
    // Update page title and meta description
    document.title = 'Portfolio | AMG Wbify - Web Development Projects & Case Studies';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore our portfolio of successful web development projects including e-commerce platforms, custom applications, and digital solutions. See our work at AMG Wbify.');
    }

    // Add structured data for portfolio
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "AMG Wbify Portfolio",
      "description": "Portfolio showcasing web development projects, e-commerce platforms, and custom digital solutions created by AMG Wbify.",
      "creator": {
        "@type": "Organization",
        "name": "AMG Wbify",
        "url": "https://amgwbify.com"
      },
      "workExample": [
        {
          "@type": "WebSite",
          "name": "Culturefly",
          "description": "Pop Culture Subscription Boxes, Apparel and Accessories platform",
          "url": "https://culturefly.com/"
        },
        {
          "@type": "WebSite",
          "name": "Doomlings",
          "description": "Strategic card game e-commerce platform with community features"
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
  const projects = [
    {
      id: 1,
      title: "Culturefly",
      description: "Pop Culture Subscription Boxes, Apparel and Accessories platform with advanced e-commerce features.",
      image: "https://images.unsplash.com/photo-1607082349566-187342175e2f",
      tags: ["E-commerce", "Subscription"],
      url: "https://culturefly.com/",
      tagColors: ["purple", "blue"]
    },
    {
      id: 2,
      title: "Doomlings",
      description: "Strategic card game e-commerce platform with community features and game strategy guides.",
      image: "https://images.unsplash.com/photo-1558433916-90a36b44753f",
      tags: ["Gaming", "E-commerce"],
      url: "https://doomlings.com/",
      tagColors: ["purple", "green"]
    },
    {
      id: 3,
      title: "Cubscription Box by Build-A-Bear",
      description: "Subscription box service offering exclusive Build-A-Bear products with automated management.",
      image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1",
      tags: ["Subscription", "Kids Products"],
      url: "https://cubscription.com/",
      tagColors: ["purple", "yellow"]
    },
    {
      id: 4,
      title: "Rehals Divine",
      description: "Australian fashion and lifestyle brand with customized shopping experience.",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
      tags: ["Fashion", "Lifestyle"],
      url: "https://rehalsdivine.com.au/",
      tagColors: ["purple", "pink"]
    },
    {
      id: 5,
      title: "Pusheenbox",
      description: "The Internet's Favorite Cat subscription box with exclusive merchandise and collectibles.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
      tags: ["Subscription", "Merchandise"],
      url: "https://pusheenbox.com/",
      tagColors: ["purple", "blue"]
    },
    {
      id: 6,
      title: "JS Style Furniture",
      description: "Premium furniture e-commerce store with 3D visualization and customization options.",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
      tags: ["Furniture", "Home Decor"],
      url: "https://jsstylefurniture.com.au/",
      tagColors: ["purple", "yellow"]
    },
    {
      id: 7,
      title: "WB Handmade",
      description: "Artisanal products theme with customizable galleries and workshop scheduling.",
      image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66",
      tags: ["Theme Demo", "Handcrafted"],
      url: "#",
      password: "123",
      tagColors: ["purple", "green"]
    },
    {
      id: 8,
      title: "Modern E-commerce",
      description: "Clean and modern e-commerce template with advanced filtering and search capabilities.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      tags: ["Theme Demo", "E-commerce"],
      url: "#",
      password: "demo123",
      tagColors: ["purple", "blue"]
    },
    {
      id: 9,
      title: "Restaurant Chain",
      description: "Multi-location restaurant website with online ordering and reservation system.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      tags: ["Restaurant", "Online Ordering"],
      url: "#",
      tagColors: ["orange", "red"]
    }
  ];

  const getTagColorClass = (color) => {
    const colorMap = {
      purple: "bg-purple-100 text-purple-600",
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      yellow: "bg-yellow-100 text-yellow-600",
      pink: "bg-pink-100 text-pink-600",
      orange: "bg-orange-100 text-orange-600",
      red: "bg-red-100 text-red-600"
    };
    return colorMap[color] || "bg-gray-100 text-gray-600";
  };

  return (
    <main className="bg-gray-50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="gradient-bg pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-purple-400">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our collection of successful e-commerce projects and digital solutions that have helped businesses grow.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card hover-scale bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
                {project.password && (
                  <div className="password-badge">
                    Password: {project.password}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className={`px-3 py-1 rounded-full text-sm ${
                        getTagColorClass(project.tagColors[index])
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.url !== "#" ? (
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"
                  >
                    View Project
                  </a>
                ) : (
                  <Link 
                    to="/project-details" 
                    state={{ project }}
                    className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"
                  >
                    View Demo
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Project <span className="text-purple-600">Statistics</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our track record speaks for itself with successful projects across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">150+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
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
            Let's create something amazing together. Get in touch to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover-scale shadow-lg">
              Start Your Project
            </Link>
            <Link to="/services" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
              View Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Portfolio;