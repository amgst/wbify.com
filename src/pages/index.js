import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

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
    stars: 5,
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
    <Layout headerTransparent={true}>
      <style>{`
        .gradient-bg {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8,0,1,1);
          }
          50% {
            transform: none;
            animation-timing-function: cubic-bezier(0,0,0.2,1);
          }
        }
        /* Container styles for consistent layout */
        .hero-container {
          max-width: 72rem !important;
          margin-left: auto !important;
          margin-right: auto !important;
          display: grid !important;
          grid-template-columns: 1fr !important;
          gap: 3rem !important;
          align-items: center !important;
        }
        
        @media (min-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        .max-w-6xl { max-width: 72rem !important; }
        .max-w-7xl { max-width: 80rem !important; }
        .max-w-4xl { max-width: 56rem !important; }
        .max-w-3xl { max-width: 48rem !important; }
        .max-w-2xl { max-width: 42rem !important; }
        .mx-auto { margin-left: auto !important; margin-right: auto !important; }
        .grid { display: grid !important; }
        .lg\\:grid-cols-2 { grid-template-columns: 1fr !important; }
        .gap-12 { gap: 3rem !important; }
        .gap-8 { gap: 2rem !important; }
        .gap-6 { gap: 1.5rem !important; }
        .gap-4 { gap: 1rem !important; }
        .items-center { align-items: center !important; }
        
        /* Responsive grid for larger screens */
        @media (min-width: 1024px) {
          .lg\\:grid-cols-2 { 
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important; 
          }
          .lg\\:grid-cols-3 { 
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important; 
          }
          .lg\\:grid-cols-4 { 
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important; 
          }
          .lg\\:text-left { text-align: left !important; }
          .lg\\:justify-start { justify-content: flex-start !important; }
        }
        
        @media (min-width: 768px) {
          .md\\:grid-cols-2 { 
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important; 
          }
          .md\\:text-5xl { font-size: 3rem !important; }
          .md\\:text-4xl { font-size: 2.25rem !important; }
          .md\\:flex { display: flex !important; }
          .md\\:flex-row { flex-direction: row !important; }
        }
      `}</style>
      
      <main className="bg-white">
        {/* Hero Section */}
        <section className="min-h-screen gradient-bg relative overflow-hidden" style={{ marginTop: "-80px", paddingTop: "80px" }}>
          <div className="absolute inset-0"  style={{ zIndex: 1, pointerEvents: 'none' }}>
            <div
              className="absolute top-20 left-10 w-64 h-64 bg-purple-600 rounded-full opacity-20"
              style={{ filter: "blur(60px)", width: "16rem", height: "16rem", top: "5rem", left: "2.5rem" }}
            />
            <div
              className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600 rounded-full opacity-20"
              style={{ filter: "blur(60px)", width: "20rem", height: "20rem", bottom: "5rem", right: "2.5rem" }}
            />
          </div>
          <div className="relative z-10 flex items-center justify-center min-h-screen px-6 -mt-20" style={{ position: "relative", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", paddingLeft: "1.5rem", paddingRight: "1.5rem", marginTop: "-5rem" }}>
            <div 
              className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center hero-container" 
              style={{ 
                maxWidth: "72rem", 
                marginLeft: "auto", 
                marginRight: "auto", 
                display: "grid", 
                gridTemplateColumns: "1fr",
                gap: "3rem", 
                alignItems: "center" 
              }}
            >
              
              {/* Left Content */}
              <div className="text-center lg:text-left" style={{ textAlign: "center" }}>
                {/* Status Badge */}
                <div 
                  className="inline-flex items-center px-4 py-2 rounded-full bg-green-600 bg-opacity-20 text-green-300 text-sm mb-6"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "0.5rem 1rem",
                    borderRadius: "9999px",
                    backgroundColor: "rgba(34, 197, 94, 0.2)",
                    color: "#86efac",
                    fontSize: "0.875rem",
                    marginBottom: "1.5rem"
                  }}
                >
                  <span 
                    className="w-2 h-2 bg-green-400 rounded-full mr-2"
                    style={{
                      width: "0.5rem",
                      height: "0.5rem",
                      backgroundColor: "#4ade80",
                      borderRadius: "9999px",
                      marginRight: "0.5rem"
                    }}
                  />
                  Available for New Projects
                </div>

                {/* Main Heading */}
                <h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                  style={{
                    fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                    fontWeight: "700",
                    color: "white",
                    marginBottom: "1.5rem",
                    lineHeight: "1.25"
                  }}
                >
                  Professional{" "}
                  <span className="text-purple-400" style={{ color: "#c084fc" }}>Web Development</span>{" "}
                  Services
                </h1>
                {/* Subheading */}
                <p 
                  className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
                  style={{
                    fontSize: "1.25rem",
                    color: "#d1d5db",
                    marginBottom: "2rem",
                    lineHeight: "1.625",
                    maxWidth: "42rem"
                  }}
                >
                  Transform your digital vision into reality with custom websites,
                  e-commerce stores, and web applications that drive growth and
                  enhance user experience.
                </p>

                {/* Stats */}
                <div className="flex justify-center lg:justify-start gap-8 mb-8" style={{ display: "flex", justifyContent: "center", gap: "2rem", marginBottom: "2rem" }}>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white" style={{ fontSize: "1.875rem", fontWeight: "700", color: "white" }}>150+</div>
                    <div className="text-gray-400 text-sm" style={{ color: "#9ca3af", fontSize: "0.875rem" }}>Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white" style={{ fontSize: "1.875rem", fontWeight: "700", color: "white" }}>5.0★</div>
                    <div className="text-gray-400 text-sm" style={{ color: "#9ca3af", fontSize: "0.875rem" }}>Client Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white" style={{ fontSize: "1.875rem", fontWeight: "700", color: "white" }}>24/7</div>
                    <div className="text-gray-400 text-sm" style={{ color: "#9ca3af", fontSize: "0.875rem" }}>Support</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <button 
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                    style={{
                      backgroundColor: "#9333ea",
                      color: "white",
                      padding: "1rem 2rem",
                      borderRadius: "9999px",
                      fontWeight: "600",
                      fontSize: "1.125rem",
                      border: "none",
                      cursor: "pointer",
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      transition: "all 0.3s ease"
                    }}
                  >
                    Start Your Project
                    <svg
                      className="inline-block w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ width: "1.25rem", height: "1.25rem", marginLeft: "0.5rem", display: "inline-block" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                  <button 
                    className="border-2 border-white border-opacity-30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300"
                    style={{
                      border: "2px solid rgba(255, 255, 255, 0.3)",
                      color: "white",
                      padding: "1rem 2rem",
                      borderRadius: "9999px",
                      fontWeight: "600",
                      fontSize: "1.125rem",
                      backgroundColor: "transparent",
                      cursor: "pointer",
                      transition: "all 0.3s ease"
                    }}
                  >
                    View Portfolio
                  </button>
                </div>
              </div>

              {/* Right Content - Service Showcase */}
              <div className="relative animate-float" style={{ position: "relative" }}>
                {/* Main Service Card */}
                <div 
                  className="glass rounded-3xl p-8 shadow-2xl"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "1.5rem",
                    padding: "2rem",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                >
                  
                  {/* Logo */}
                  <div 
                    className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg"
                    style={{
                      width: "4rem",
                      height: "4rem",
                      backgroundColor: "#3b82f6",
                      borderRadius: "1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.5rem",
                      marginLeft: "auto",
                      marginRight: "auto",
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                    }}
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      style={{ width: "2rem", height: "2rem", color: "white" }}
                    >
                      <path d="M3 13h8V3c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v10zm0 8h8v-6H3v6zm10 0h8V11c0-1.1-.9-2-2-2h-6v10zm0-18v6h8V3c0-1.1-.9-2-2-2h-6z" />
                    </svg>
                  </div>

                  {/* Services List */}
                  <div className="space-y-4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {[
                      { color: "#4ade80", text: "Custom Website Development" },
                      { color: "#3b82f6", text: "E-commerce Solutions" },
                      { color: "#c084fc", text: "Web Application Development" },
                      { color: "#ec4899", text: "Digital Strategy Consulting" }
                    ].map((item, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center p-4 bg-white bg-opacity-5 rounded-xl border border-white border-opacity-10"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          padding: "1rem",
                          backgroundColor: "rgba(255, 255, 255, 0.05)",
                          borderRadius: "0.75rem",
                          border: "1px solid rgba(255, 255, 255, 0.1)"
                        }}
                      >
                        <div 
                          className="w-3 h-3 rounded-full mr-4"
                          style={{
                            width: "0.75rem",
                            height: "0.75rem",
                            backgroundColor: item.color,
                            borderRadius: "9999px",
                            marginRight: "1rem"
                          }}
                        />
                        <span className="text-white font-medium" style={{ color: "white", fontWeight: "500" }}>
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Stats Cards */}
                <div 
                  className="absolute -top-6 -left-6 glass rounded-2xl p-4 shadow-xl"
                  style={{
                    position: "absolute",
                    top: "-1.5rem",
                    left: "-1.5rem",
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "1rem",
                    padding: "1rem",
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <div className="text-2xl font-bold text-white" style={{ fontSize: "1.5rem", fontWeight: "700", color: "white" }}>99%</div>
                  <div className="text-gray-300 text-sm" style={{ color: "#d1d5db", fontSize: "0.875rem" }}>Success Rate</div>
                </div>

                <div 
                  className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 shadow-xl"
                  style={{
                    position: "absolute",
                    bottom: "-1.5rem",
                    right: "-1.5rem",
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "1rem",
                    padding: "1rem",
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <div className="text-2xl font-bold text-white" style={{ fontSize: "1.5rem", fontWeight: "700", color: "white" }}>48h</div>
                  <div className="text-gray-300 text-sm" style={{ color: "#d1d5db", fontSize: "0.875rem" }}>Quick Start</div>
                </div>
              </div>
            </div>
          </div>
          <div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
            style={{
              position: "absolute",
              bottom: "2rem",
              left: "50%",
              transform: "translateX(-50%)",
              color: "white"
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ width: "1.5rem", height: "1.5rem" }}
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

        {/* Why Choose Us Section */}
        <section className="py-20 relative overflow-hidden" style={{ paddingTop: "5rem", paddingBottom: "5rem", position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)" }}>
          {/* Decorative Elements */}
          <div 
            style={{
              position: "absolute",
              top: "-10%",
              right: "-10%",
              width: "40rem",
              height: "40rem",
              background: "linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(79, 70, 229, 0.1))",
              borderRadius: "50%",
              filter: "blur(40px)"
            }}
          />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10" style={{ maxWidth: "80rem", marginLeft: "auto", marginRight: "auto", paddingLeft: "1.5rem", paddingRight: "1.5rem", position: "relative", zIndex: 10 }}>
            <div className="text-center mb-16" style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)", fontWeight: "700", color: "#111827", marginBottom: "1.5rem" }}>
                Why Small Businesses <span style={{ color: "#9333ea" }}>Choose Us</span>
              </h2>
              <p style={{ fontSize: "1.25rem", color: "#4b5563", maxWidth: "48rem", marginLeft: "auto", marginRight: "auto" }}>
                We're not just another agency. We're your dedicated Shopify partners who understand what small businesses need.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              {[
                {
                  icon: "👥",
                  title: "Direct Access to Founders",
                  description: "No account managers or middlemen. Work directly with experienced Shopify developers who care about your success."
                },
                {
                  icon: "⚡",
                  title: "Lightning Fast Turnaround",
                  description: "Your store ready in 2-4 weeks, not months. Small team means quick decisions and faster execution."
                },
                {
                  icon: "💰",
                  title: "Transparent, Fair Pricing",
                  description: "No hidden fees or surprise costs. Lower overhead means better prices without compromising quality."
                },
                {
                  icon: "🏪",
                  title: "100% Shopify Focused",
                  description: "We eat, sleep, and breathe Shopify. Deep expertise in the platform means better results for your store."
                },
                {
                  icon: "🤝",
                  title: "Ongoing Support Included",
                  description: "We don't disappear after launch. Training, updates, and support to help your business grow."
                },
                {
                  icon: "🎯",
                  title: "Small Business Specialists",
                  description: "We understand tight budgets and big dreams. Flexible solutions that grow with your business."
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "2rem",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "1.5rem",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    textAlign: "center",
                    transition: "all 0.3s ease"
                  }}
                >
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{item.icon}</div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#111827", marginBottom: "1rem" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "#4b5563", lineHeight: "1.6" }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-20 relative" style={{ paddingTop: "5rem", paddingBottom: "5rem", position: "relative", background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)" }}>
          <div className="max-w-7xl mx-auto px-6" style={{ maxWidth: "80rem", marginLeft: "auto", marginRight: "auto", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
            <div className="text-center mb-16" style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)", fontWeight: "700", color: "white", marginBottom: "1.5rem" }}>
                From Idea to <span style={{ color: "#c084fc" }}>Launch</span> in 4 Steps
              </h2>
              <p style={{ fontSize: "1.25rem", color: "#d1d5db", maxWidth: "48rem", marginLeft: "auto", marginRight: "auto" }}>
                Our proven process gets your Shopify store online quickly and efficiently
              </p>
            </div>

            <div style={{ position: "relative" }}>
              {/* Timeline Line */}
              <div 
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "10%",
                  right: "10%",
                  height: "2px",
                  background: "linear-gradient(90deg, #9333ea, #c084fc)",
                  transform: "translateY(-50%)",
                  zIndex: 1
                }}
              />

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", position: "relative", zIndex: 2 }}>
                {[
                  {
                    step: "01",
                    title: "Discovery Call",
                    description: "Free 30-minute consultation to understand your business goals and requirements",
                    duration: "1 Day",
                    color: "#9333ea"
                  },
                  {
                    step: "02", 
                    title: "Design & Setup",
                    description: "Store creation, theme selection, and customization based on your brand",
                    duration: "1-2 Weeks",
                    color: "#c084fc"
                  },
                  {
                    step: "03",
                    title: "Review & Launch", 
                    description: "Testing, final reviews, and going live with your new Shopify store",
                    duration: "3-5 Days",
                    color: "#a855f7"
                  },
                  {
                    step: "04",
                    title: "Training & Support",
                    description: "Complete training on managing your store plus ongoing support",
                    duration: "Ongoing",
                    color: "#8b5cf6"
                  }
                ].map((process, idx) => (
                  <div
                    key={idx}
                    style={{
                      textAlign: "center",
                      position: "relative"
                    }}
                  >
                    {/* Step Circle */}
                    <div
                      style={{
                        width: "4rem",
                        height: "4rem",
                        backgroundColor: process.color,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 1.5rem auto",
                        fontSize: "1.25rem",
                        fontWeight: "700",
                        color: "white",
                        boxShadow: "0 10px 25px -5px rgba(147, 51, 234, 0.3)"
                      }}
                    >
                      {process.step}
                    </div>

                    <div
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(10px)",
                        borderRadius: "1.5rem",
                        padding: "2rem",
                        border: "1px solid rgba(255, 255, 255, 0.1)"
                      }}
                    >
                      <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "white", marginBottom: "1rem" }}>
                        {process.title}
                      </h3>
                      <p style={{ color: "#d1d5db", marginBottom: "1rem", lineHeight: "1.6" }}>
                        {process.description}
                      </p>
                      <div
                        style={{
                          display: "inline-block",
                          backgroundColor: process.color,
                          color: "white",
                          padding: "0.5rem 1rem",
                          borderRadius: "9999px",
                          fontSize: "0.875rem",
                          fontWeight: "500"
                        }}
                      >
                        {process.duration}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ textAlign: "center", marginTop: "4rem" }}>
              <button
                style={{
                  backgroundColor: "#9333ea",
                  color: "white",
                  padding: "1rem 2rem",
                  borderRadius: "9999px",
                  fontWeight: "600",
                  fontSize: "1.125rem",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s ease"
                }}
              >
                Start Your Project Today
                <svg
                  style={{ width: "1.25rem", height: "1.25rem", marginLeft: "0.5rem", display: "inline-block" }}
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
        
        <section id="services" className="py-20 bg-gray-50" style={{ paddingTop: "5rem", paddingBottom: "5rem", backgroundColor: "#f9fafb" }}>
          <div className="max-w-7xl mx-auto px-6" style={{ maxWidth: "80rem", marginLeft: "auto", marginRight: "auto", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
            <div className="text-center mb-16" style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)", fontWeight: "700", color: "#111827", marginBottom: "1.5rem" }}>
                Our <span className="text-purple-600" style={{ color: "#9333ea" }}>Web Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontSize: "1.25rem", color: "#4b5563", maxWidth: "48rem", marginLeft: "auto", marginRight: "auto" }}>
                From custom development to digital strategy, we provide
                comprehensive web solutions to grow your business and enhance your
                online presence.
              </p>
            </div>
            <div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem"
              }}
            >
              {services.map((s, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "1rem",
                    padding: "2rem",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    border: "1px solid #f3f4f6",
                    transition: "all 0.3s ease"
                  }}
                >
                  <div
                    style={{
                      width: "4rem",
                      height: "4rem",
                      backgroundColor: s.color === 'purple' ? '#faf5ff' : s.color === 'blue' ? '#eff6ff' : s.color === 'green' ? '#f0fdf4' : s.color === 'orange' ? '#fff7ed' : s.color === 'pink' ? '#fdf2f8' : '#eef2ff',
                      borderRadius: "1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.5rem"
                    }}
                  >
                    {s.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontSize: "1.5rem", fontWeight: "700", color: "#111827", marginBottom: "1rem" }}>
                    {s.title}
                  </h3>
                  <p className="text-gray-600 mb-6" style={{ color: "#4b5563", marginBottom: "1.5rem" }}>{s.description}</p>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {s.bullets.map((b, i) => (
                      <li key={i} className="flex items-center" style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                        <svg
                          className="w-4 h-4 text-green-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          style={{ width: "1rem", height: "1rem", color: "#10b981", marginRight: "0.5rem" }}
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span style={{ color: "#4b5563" }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 relative overflow-hidden" style={{ paddingTop: "5rem", paddingBottom: "5rem", position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)" }}>
          <div className="max-w-7xl mx-auto px-6" style={{ maxWidth: "80rem", marginLeft: "auto", marginRight: "auto", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
            <div className="text-center mb-16" style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)", fontWeight: "700", color: "#111827", marginBottom: "1.5rem" }}>
                Simple, <span style={{ color: "#9333ea" }}>Transparent</span> Pricing
              </h2>
              <p style={{ fontSize: "1.25rem", color: "#4b5563", maxWidth: "48rem", marginLeft: "auto", marginRight: "auto" }}>
                Choose the package that fits your business needs. No hidden fees, no surprises.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem", alignItems: "stretch" }}>
              {[
                {
                  name: "Starter",
                  price: "$799",
                  popular: false,
                  description: "Perfect for new businesses getting started",
                  features: [
                    "Basic Shopify store setup",
                    "Mobile-responsive theme",
                    "Up to 25 products",
                    "Payment gateway setup",
                    "Basic SEO optimization",
                    "2 weeks delivery",
                    "Email support"
                  ],
                  buttonText: "Get Started",
                  color: "#6366f1"
                },
                {
                  name: "Professional",
                  price: "$1,499",
                  popular: true,
                  description: "Most popular for growing businesses",
                  features: [
                    "Everything in Starter",
                    "Custom theme modifications",
                    "Up to 100 products",
                    "5 essential apps setup",
                    "Advanced SEO optimization",
                    "Social media integration",
                    "3 rounds of revisions",
                    "Phone + email support"
                  ],
                  buttonText: "Most Popular",
                  color: "#9333ea"
                },
                {
                  name: "Premium",
                  price: "$2,799",
                  popular: false,
                  description: "For established businesses wanting more",
                  features: [
                    "Everything in Professional",
                    "Unlimited products",
                    "10+ apps integration", 
                    "Email marketing setup",
                    "Analytics & tracking setup",
                    "Staff training included",
                    "30 days post-launch support",
                    "Priority support"
                  ],
                  buttonText: "Go Premium",
                  color: "#059669"
                }
              ].map((pkg, idx) => (
                <div
                  key={idx}
                  style={{
                    position: "relative",
                    backgroundColor: "white",
                    borderRadius: "2rem",
                    padding: pkg.popular ? "2.5rem 2rem" : "2rem",
                    boxShadow: pkg.popular ? "0 25px 50px -12px rgba(147, 51, 234, 0.25)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                    border: pkg.popular ? "2px solid #9333ea" : "1px solid #e5e7eb",
                    transform: pkg.popular ? "scale(1.05)" : "scale(1)",
                    transition: "all 0.3s ease"
                  }}
                >
                  {pkg.popular && (
                    <div
                      style={{
                        position: "absolute",
                        top: "-0.75rem",
                        left: "50%",
                        transform: "translateX(-50%)",
                        backgroundColor: "#9333ea",
                        color: "white",
                        padding: "0.5rem 1.5rem",
                        borderRadius: "9999px",
                        fontSize: "0.875rem",
                        fontWeight: "600"
                      }}
                    >
                      Most Popular
                    </div>
                  )}

                  <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                    <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#111827", marginBottom: "0.5rem" }}>
                      {pkg.name}
                    </h3>
                    <p style={{ color: "#6b7280", fontSize: "0.875rem", marginBottom: "1rem" }}>
                      {pkg.description}
                    </p>
                    <div style={{ marginBottom: "1rem" }}>
                      <span style={{ fontSize: "3rem", fontWeight: "700", color: pkg.color }}>
                        {pkg.price}
                      </span>
                      <span style={{ color: "#6b7280", fontSize: "1rem" }}> one-time</span>
                    </div>
                  </div>

                  <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem" }}>
                    {pkg.features.map((feature, featureIdx) => (
                      <li
                        key={featureIdx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "0.75rem"
                        }}
                      >
                        <svg
                          style={{ width: "1.25rem", height: "1.25rem", color: "#10b981", marginRight: "0.75rem", flexShrink: 0 }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span style={{ color: "#374151", fontSize: "0.875rem" }}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    style={{
                      width: "100%",
                      backgroundColor: pkg.color,
                      color: "white",
                      padding: "1rem",
                      borderRadius: "1rem",
                      fontWeight: "600",
                      fontSize: "1rem",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease"
                    }}
                  >
                    {pkg.buttonText}
                  </button>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <p style={{ color: "#6b7280", marginBottom: "1rem" }}>
                Need something custom? All packages can be tailored to your specific needs.
              </p>
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "#9333ea",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.5rem",
                  fontWeight: "600",
                  border: "2px solid #9333ea",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              >
                Request Custom Quote
              </button>
            </div>
          </div>
        </section>
        
        <section id="portfolio" className="py-20 bg-gray-900" style={{ paddingTop: "5rem", paddingBottom: "5rem", backgroundColor: "#111827" }}>
          <div className="max-w-7xl mx-auto px-6" style={{ maxWidth: "80rem", marginLeft: "auto", marginRight: "auto", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
            <div className="text-center mb-16" style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)", fontWeight: "700", color: "white", marginBottom: "1.5rem" }}>
                Aren't these truly{" "}
                <span style={{ color: "#c084fc" }}>remarkable?</span>
              </h2>
              <p style={{ fontSize: "1.25rem", color: "#d1d5db", maxWidth: "48rem", marginLeft: "auto", marginRight: "auto" }}>
                Explore our latest projects that have transformed
                businesses and delivered exceptional results.
              </p>
            </div>
            <div 
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1.5rem"
              }}
            >
              {projects.map((project, i) => (
                <div
                  key={project.id}
                  onClick={() => openProject(project.id)}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "1rem",
                    background: "linear-gradient(to bottom right, #374151, #111827)",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    cursor: "pointer",
                    transition: "all 0.5s ease"
                  }}
                >
                  <div style={{ padding: "1.5rem" }}>
                    <div
                      style={{
                        backgroundColor: project.id === 'blue-ruby' ? '#2563eb' : project.id === 'sidekick' ? '#ea580c' : project.id === 'wolf-circus' ? '#d97706' : '#4f46e5',
                        borderRadius: "0.75rem",
                        padding: "1rem",
                        marginBottom: "1rem",
                        width: "fit-content"
                      }}
                    >
                      <span style={{ color: "white", fontWeight: "700", fontSize: "1.125rem" }}>
                        {project.name}
                      </span>
                    </div>
                    <div 
                      style={{
                        backgroundColor: "#374151",
                        borderRadius: "0.75rem",
                        overflow: "hidden",
                        marginBottom: "1rem",
                        aspectRatio: "16/9"
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          background: project.id === 'blue-ruby' ? 'linear-gradient(to bottom right, #3b82f6, #4f46e5)' : 
                                    project.id === 'sidekick' ? 'linear-gradient(to bottom right, #f97316, #dc2626)' :
                                    project.id === 'wolf-circus' ? 'linear-gradient(to bottom right, #d97706, #a16207)' :
                                    'linear-gradient(to bottom right, #4f46e5, #7c3aed)',
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative"
                        }}
                      >
                        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <div style={{ color: "white", fontSize: "0.875rem", opacity: 0.5 }}>
                            Project Preview
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 style={{ color: "white", fontWeight: "700", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                      {project.brand}
                    </h3>
                    <p style={{ color: "#9ca3af", fontSize: "0.875rem", marginBottom: "1rem" }}>
                      {project.description}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            color: "white",
                            padding: "0.25rem 0.5rem",
                            borderRadius: "0.25rem",
                            fontSize: "0.75rem"
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p style={{ color: "#6b7280", fontSize: "0.75rem" }}>{project.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <button 
                style={{
                  backgroundColor: "#9333ea",
                  color: "white",
                  padding: "1rem 2rem",
                  borderRadius: "9999px",
                  fontWeight: "600",
                  fontSize: "1.125rem",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                }}
              >
                View All Projects
                <svg
                  style={{ width: "1.25rem", height: "1.25rem", marginLeft: "0.5rem", display: "inline-block" }}
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
      </main>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage