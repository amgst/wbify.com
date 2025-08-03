import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const ProjectDetails = () => {
  const { id } = useParams();

  // Sample project data - in a real app, this would come from an API or database
  const projects = {
    'culturefly': {
      title: 'Culturefly',
      subtitle: 'Premium Pop Culture Subscription Box',
      description: 'A sophisticated e-commerce platform for premium pop culture subscription boxes, featuring custom subscription management, inventory tracking, and seamless payment processing.',
      image: '/api/placeholder/800/600',
      tags: ['E-commerce', 'Subscription', 'Shopify Plus'],
      url: 'https://culturefly.co.uk',
      challenge: 'Culturefly needed a robust e-commerce solution that could handle complex subscription management while providing an engaging user experience for pop culture enthusiasts.',
      solution: 'We developed a custom Shopify Plus solution with advanced subscription management, automated inventory tracking, and personalized customer experiences.',
      results: [
        '300% increase in subscription conversions',
        '45% reduction in customer churn',
        '99.9% uptime during peak traffic periods',
        'Seamless integration with fulfillment partners'
      ],
      technologies: ['Shopify Plus', 'React', 'Node.js', 'PostgreSQL', 'Stripe'],
      features: [
        'Custom subscription management system',
        'Automated inventory tracking',
        'Personalized product recommendations',
        'Advanced analytics dashboard',
        'Multi-currency support',
        'Mobile-optimized checkout'
      ]
    },
    'doomlings': {
      title: 'Doomlings',
      subtitle: 'Card Game E-commerce Platform',
      description: 'A vibrant e-commerce platform for the popular card game Doomlings, featuring custom product configurators, community features, and seamless order management.',
      image: '/api/placeholder/800/600',
      tags: ['E-commerce', 'Gaming', 'Community'],
      url: 'https://doomlings.com',
      challenge: 'Doomlings required an e-commerce platform that could showcase their unique card game while building a strong community around their brand.',
      solution: 'We created a dynamic e-commerce experience with custom product configurators, community features, and engaging visual design that reflects the game\'s personality.',
      results: [
        '250% increase in online sales',
        '400% growth in community engagement',
        '60% improvement in mobile conversions',
        'Successfully launched in 15+ countries'
      ],
      technologies: ['Shopify', 'Vue.js', 'Firebase', 'Cloudinary', 'PayPal'],
      features: [
        'Custom product configurator',
        'Community forum integration',
        'Game rules and tutorials',
        'Multi-language support',
        'Social media integration',
        'Advanced search and filtering'
      ]
    },
    'cubscription': {
      title: 'Cubscription Box',
      subtitle: 'Children\'s Educational Subscription Service',
      description: 'An educational subscription platform designed for children, featuring age-appropriate content curation, parental controls, and engaging learning experiences.',
      image: '/api/placeholder/800/600',
      tags: ['E-commerce', 'Education', 'Subscription'],
      url: 'https://cubscriptionbox.com',
      challenge: 'Creating a safe, engaging platform for children\'s educational content while providing parents with complete control and transparency.',
      solution: 'We developed a child-friendly interface with robust parental controls, age-appropriate content curation, and educational progress tracking.',
      results: [
        '180% increase in subscription retention',
        '95% parent satisfaction rate',
        '40% improvement in learning outcomes',
        'Expanded to serve 10,000+ families'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      features: [
        'Age-appropriate content curation',
        'Parental control dashboard',
        'Progress tracking and reporting',
        'Interactive learning modules',
        'Safe communication features',
        'Flexible subscription management'
      ]
    }
  };

  const project = projects[id];

  if (!project) {
    return (
      <div>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
            <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
            <Link to="/portfolio" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="gradient-bg pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Link to="/portfolio" className="text-purple-300 hover:text-white transition-colors">
                Portfolio
              </Link>
              <span className="text-purple-300">/</span>
              <span className="text-white">{project.title}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              {project.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {project.tags.map((tag, index) => (
                <span key={index} className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Challenge */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project Info</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-gray-500">Website</span>
                    <p className="text-gray-900">
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 transition-colors">
                        Visit Live Site
                      </a>
                    </p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Category</span>
                    <p className="text-gray-900">{project.tags[0]}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Technologies</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Results Achieved</h3>
                <div className="space-y-3">
                  {project.results.map((result, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Like This Project?</h3>
                <p className="text-gray-600 mb-6">Let's discuss how we can create something amazing for your business.</p>
                <Link to="/contact" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover-scale">
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              More <span className="text-purple-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600">
              Explore our other successful projects and case studies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(projects)
              .filter(([key]) => key !== id)
              .slice(0, 3)
              .map(([key, proj]) => (
                <Link key={key} to={`/project/${key}`} className="group">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={proj.image} 
                        alt={proj.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{proj.subtitle}</p>
                      <div className="flex flex-wrap gap-2">
                        {proj.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio" className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-700 transition-colors">
              View All Projects
            </Link>
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
            Let's create something amazing together. Get in touch to discuss your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover-scale shadow-lg">
              Get Started
            </Link>
            <Link to="/portfolio" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
              View More Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetails;