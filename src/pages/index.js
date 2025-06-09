import * as React from "react"

const services = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-purple-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "E-commerce Development",
    description:
      "Build powerful online stores with custom features, payment integrations, and optimized user experiences.",
    bullets: [
      "Shopify & WooCommerce",
      "Payment Gateway Integration",
      "Inventory Management",
    ],
    color: "purple",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-blue-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    title: "Web Application Development",
    description:
      "Create powerful web applications with modern frameworks and cutting-edge technologies.",
    bullets: ["React & Next.js", "Database Integration", "Cloud Deployment"],
    color: "blue",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-green-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "UI/UX Design & Development",
    description:
      "Design and develop beautiful, user-friendly interfaces that engage and convert visitors.",
    bullets: [
      "Modern Design Systems",
      "User Experience Research",
      "Conversion Optimization",
    ],
    color: "green",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-orange-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Performance Optimization",
    description:
      "Speed up your store and improve conversion rates with our optimization services.",
    bullets: ["Speed Optimization", "Code Cleanup", "Image Optimization"],
    color: "orange",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-pink-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
      </svg>
    ),
    title: "Digital Strategy & Consulting",
    description:
      "Get expert guidance on digital transformation, technology stack, and growth strategies.",
    bullets: [
      "Technology Assessment",
      "Growth Planning",
      "Digital Transformation",
      "24/7 Monitoring",
      "Bug Fixes",
      "Updates & Security",
    ],
    color: "pink",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-indigo-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
      </svg>
    ),
    title: "Analytics & Performance Optimization",
    description:
      "Monitor, analyze, and optimize your website's performance to maximize conversions and user satisfaction.",
    bullets: [
      "Custom Analytics Dashboards",
      "Performance Monitoring",
      "Conversion Rate Optimization",
    ],
    color: "indigo",
  },
]

const projects = [
  {
    id: "blue-ruby",
    name: "blue ruby",
    brand: "Blue Ruby Jewelry",
    description: "Luxury jewelry e-commerce with custom product configurator",
    tags: ["E-commerce", "Custom App"],
    date: "Dec 15, 2024",
    colors: "from-blue-500 to-indigo-600",
    overlay: "bg-blue-600",
  },
  {
    id: "sidekick",
    name: "SIDEKICK",
    brand: "SideKick Tools",
    description:
      "Professional tools marketplace with advanced search and filtering",
    tags: ["Marketplace", "B2B"],
    date: "Nov 28, 2024",
    colors: "from-orange-500 to-red-600",
    overlay: "bg-orange-600",
  },
  {
    id: "wolf-circus",
    name: "WOLF CIRCUS",
    brand: "Wolf Circus",
    description: "Modern jewelry brand with AR try-on functionality",
    tags: ["Fashion", "AR/VR"],
    date: "Oct 12, 2024",
    colors: "from-amber-600 to-yellow-700",
    overlay: "bg-amber-600",
  },
  {
    id: "printninja",
    name: "PrintNinja",
    brand: "PrintNinja",
    description: "Custom printing service with real-time quote calculator",
    tags: ["Print Services", "Calculator"],
    date: "Sep 05, 2024",
    colors: "from-indigo-600 to-purple-700",
    overlay: "bg-indigo-600",
  },
]

const testimonials = [
  {
    initials: "SJ",
    color: "purple",
    name: "Sarah Johnson",
    role: "CEO, Fashion Forward",
    quote:
      "ShopifyPro transformed our online store completely. The custom features they built increased our conversion rate by 340%. Their team is incredibly professional and responsive.",
    stars: 2,
  },
  {
    initials: "MC",
    color: "blue",
    name: "Mike Chen",
    role: "Founder, TechMart",
    quote:
      "The custom app they developed for our marketplace saved us thousands in monthly fees. Their expertise in Shopify development is unmatched.",
    stars: 5,
  },
  {
    initials: "LR",
    color: "green",
    name: "Lisa Rodriguez",
    role: "Co-founder, WellnessHub",
    quote:
      "Outstanding service! They delivered our subscription-based store ahead of schedule. The automated billing system works flawlessly and our customer retention improved by 180%.",
    stars: 5,
  },
]

const faqs = [
  {
    q: "How long does it take to build a custom website?",
    a: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex web applications can take 6-12 weeks. We provide detailed timelines and milestones during our initial consultation to set clear expectations.",
  },
  {
    q: "Do you provide ongoing support after the store is launched?",
    a: "Yes! We offer comprehensive ongoing support including 24/7 monitoring, security updates, bug fixes, and feature enhancements. Our support packages range from basic maintenance to full-service management depending on your needs.",
  },
  {
    q: "What's included in your Shopify development service?",
    a: "Our service includes custom theme development, responsive design, SEO optimization, payment gateway integration, inventory setup, performance optimization, testing, training, and 30 days of free support post-launch.",
  },
  {
    q: "Can you help migrate from other e-commerce platforms to Shopify?",
    a: "Absolutely! We specialize in seamless migrations from platforms like WooCommerce, Magento, BigCommerce, and others. We handle product data, customer information, order history, and ensure zero downtime during the transition.",
  },
  {
    q: "What are your pricing packages?",
    a: "We offer flexible pricing starting from $2,500 for basic stores, $5,000-$10,000 for advanced custom stores, and $15,000+ for enterprise solutions with custom apps. All projects include a detailed quote based on your specific requirements.",
  },
  {
    q: "Do you work with clients internationally?",
    a: "Yes, we work with clients worldwide! We're experienced in different markets, currencies, languages, and compliance requirements. Our remote collaboration process ensures smooth communication across time zones.",
  },
]

const IndexPage = () => {
  const [openFAQ, setOpenFAQ] = React.useState({})

  const toggleFAQ = index => {
    setOpenFAQ(prev => ({ ...prev, [index]: !prev[index] }))
  }

  const openProject = projectId => {
    const project = projects.find(p => p.id === projectId)
    if (project) {
      alert(
        `Opening: ${project.brand}\n${project.description}\n\nIn a real application, this would navigate to: project-${projectId}.html`,
      )
    }
  }

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="min-h-screen gradient-bg relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute top-20 left-10 w-64 h-64 bg-purple-600 rounded-full opacity-20"
            style={{ filter: "blur(60px)" }}
          />
          <div
            className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600 rounded-full opacity-20"
            style={{ filter: "blur(60px)" }}
          />
        </div>
        <nav className="relative z-10 flex items-center justify-between p-6 lg:px-12">
          <div className="text-2xl font-bold text-white">ShopifyPro</div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-white hover:text-purple-300 transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-white hover:text-purple-300 transition-colors duration-300"
            >
              Portfolio
            </a>
            <a
              href="#about"
              className="text-white hover:text-purple-300 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6 -mt-20">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-600 bg-opacity-20 text-green-300 text-sm mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2" />{" "}
                Available for New Projects
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Professional{" "}
                <span className="text-purple-400">Web Development</span>{" "}
                Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Transform your digital vision into reality with custom websites,
                e-commerce stores, and web applications that drive growth and
                enhance user experience.
              </p>
              <div className="flex justify-center lg:justify-start gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">150+</div>
                  <div className="text-gray-400 text-sm">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">5.0★</div>
                  <div className="text-gray-400 text-sm">Client Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-gray-400 text-sm">Support</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  Start Your Project
                  <svg
                    className="inline-block w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
                <button className="border-2 border-white border-opacity-30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="glass rounded-3xl p-8 shadow-2xl">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 13h8V3c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v10zm0 8h8v-6H3v6zm10 0h8V11c0-1.1-.9-2-2-2h-6v10zm0-18v6h8V3c0-1.1-.9-2-2-2h-6z" />
                  </svg>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-white bg-opacity-5 rounded-xl border border-white border-opacity-10">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-4" />
                    <span className="text-white font-medium">
                      Custom Website Development
                    </span>
                  </div>
                  <div className="flex items-center p-4 bg-white bg-opacity-5 rounded-xl border border-white border-opacity-10">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-4" />
                    <span className="text-white font-medium">
                      E-commerce Solutions
                    </span>
                  </div>
                  <div className="flex items-center p-4 bg-white bg-opacity-5 rounded-xl border border-white border-opacity-10">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mr-4" />
                    <span className="text-white font-medium">
                      Web Application Development
                    </span>
                  </div>
                  <div className="flex items-center p-4 bg-white bg-opacity-5 rounded-xl border border-white border-opacity-10">
                    <div className="w-3 h-3 bg-pink-400 rounded-full mr-4" />
                    <span className="text-white font-medium">
                      Digital Strategy Consulting
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 glass rounded-2xl p-4 shadow-xl">
                <div className="text-2xl font-bold text-white">99%</div>
                <div className="text-gray-300 text-sm">Success Rate</div>
              </div>
              <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 shadow-xl">
                <div className="text-2xl font-bold text-white">48h</div>
                <div className="text-gray-300 text-sm">Quick Start</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-purple-600">Web Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From custom development to digital strategy, we provide
              comprehensive web solutions to grow your business and enhance your
              online presence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 bg-${s.color}-100 rounded-2xl flex items-center justify-center mb-6`}
                >
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {s.title}
                </h3>
                <p className="text-gray-600 mb-6">{s.description}</p>
                <ul className="space-y-2 text-gray-600">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Aren't these truly{" "}
              <span className="text-purple-400">remarkable?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our latest Shopify projects that have transformed
              businesses and delivered exceptional results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => openProject(project.id)}
              >
                <div className="p-6">
                  <div
                    className={`${project.overlay} rounded-xl p-4 mb-4 w-fit`}
                  >
                    <span className="text-white font-bold text-lg">
                      {project.name}
                    </span>
                  </div>
                  <div className="bg-gray-700 rounded-xl overflow-hidden mb-4 aspect-video">
                    <div
                      className={`w-full h-full bg-gradient-to-br ${project.colors} flex items-center justify-center relative`}
                    >
                      <div className="w-full h-full relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-white text-sm opacity-50">
                            Project Preview
                          </div>
                        </div>
                        <div
                          className={`absolute inset-0 ${project.overlay} bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center`}
                        >
                          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                            View Project →
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">
                    {project.brand}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-white bg-opacity-10 text-white px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-500 text-xs">{project.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              View All Projects
              <svg
                className="inline-block w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Client <span className="text-purple-600">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from businesses that have transformed their e-commerce
              presence with our Shopify solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(t.stars)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center">
                  <div
                    className={`w-12 h-12 bg-${t.color}-100 rounded-full flex items-center justify-center mr-4`}
                  >
                    <span className={`text-${t.color}-600 font-bold text-lg`}>
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{t.name}</div>
                    <div className="text-gray-600 text-sm">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <div
              className="glass rounded-3xl p-12 max-w-4xl mx-auto"
              style={{
                background:
                  "linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(79, 70, 229, 0.1) 100%)",
              }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Shopify Store?
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join 150+ successful businesses who've trusted us to build their
                dream e-commerce stores.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  Get Free Consultation
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300">
                  View Our Process
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked{" "}
              <span className="text-purple-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our web development services
              and process.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg border border-gray-100"
              >
                <button
                  className="w-full text-left p-6 focus:outline-none"
                  onClick={() => toggleFAQ(i)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900 pr-8">
                      {f.q}
                    </h3>
                    <svg
                      className={`w-6 h-6 text-purple-600 transform transition-transform duration-300 ${openFAQ[i] ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                {openFAQ[i] && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white" id="contact">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="text-2xl font-bold mb-4">Wbify</div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Professional web development agency transforming digital visions
                into reality. Building high-performance websites and
                applications since 2020.
              </p>
              <div className="flex space-x-4">
                {["twitter", "linkedin", "github", "instagram"].map(icon => (
                  <a
                    key={icon}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
                  >
                    <span className="sr-only">{icon}</span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li>E-commerce Development</li>
                <li>Web Application Development</li>
                <li>UI/UX Design</li>
                <li>Performance Optimization</li>
                <li>Digital Strategy</li>
                <li>Ongoing Support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li>About Us</li>
                <li>Portfolio</li>
                <li>Case Studies</li>
                <li>Process</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-4">
                Get the latest Shopify tips and updates delivered to your inbox.
              </p>
              <div className="mb-6">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-600"
                  />
                  <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-r-lg transition-colors duration-300">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  hello@wbify.com
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +1 (555) 123-4567
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 ShopifyPro. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default IndexPage
