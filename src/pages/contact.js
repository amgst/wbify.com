import React from "react"

const ContactPage = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    currentPlatform: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! We\'ll get back to you within 24 hours.')
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}>
      {/* Fixed Header */}
      <header style={{ 
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", 
        padding: "1rem 0",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}>
        <div style={{ 
          maxWidth: "80rem", 
          margin: "0 auto", 
          padding: "0 1.5rem" 
        }}>
          <nav style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between",
            minHeight: "60px"
          }}>
            {/* Logo */}
            <a 
              href="/" 
              style={{ 
                fontSize: "2rem", 
                fontWeight: "700", 
                color: "white", 
                textDecoration: "none",
                letterSpacing: "-0.025em"
              }}
            >
              Wbify
            </a>
            
            {/* Desktop Navigation */}
            <div style={{ 
              display: "flex", 
              gap: "2rem", 
              alignItems: "center",
              "@media (max-width: 768px)": { display: "none" }
            }}>
              <a 
                href="/" 
                style={{ 
                  color: "white", 
                  textDecoration: "none",
                  fontWeight: "500",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem"
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "rgba(255,255,255,0.1)"
                  e.target.style.color = "#c084fc"
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "transparent"
                  e.target.style.color = "white"
                }}
              >
                Home
              </a>
              <a 
                href="/#services" 
                style={{ 
                  color: "white", 
                  textDecoration: "none",
                  fontWeight: "500",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem"
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "rgba(255,255,255,0.1)"
                  e.target.style.color = "#c084fc"
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "transparent"
                  e.target.style.color = "white"
                }}
              >
                Services
              </a>
              <a 
                href="/portfolio" 
                style={{ 
                  color: "white", 
                  textDecoration: "none",
                  fontWeight: "500",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem"
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "rgba(255,255,255,0.1)"
                  e.target.style.color = "#c084fc"
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "transparent"
                  e.target.style.color = "white"
                }}
              >
                Portfolio
              </a>
              <a 
                href="/projects" 
                style={{ 
                  color: "white", 
                  textDecoration: "none",
                  fontWeight: "500",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem"
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "rgba(255,255,255,0.1)"
                  e.target.style.color = "#c084fc"
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "transparent"
                  e.target.style.color = "white"
                }}
              >
                Projects
              </a>
              <a 
                href="/contact" 
                style={{ 
                  color: "#c084fc", 
                  textDecoration: "none",
                  fontWeight: "500",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  backgroundColor: "rgba(192, 132, 252, 0.1)"
                }}
              >
                Contact
              </a>
              <a 
                href="/quote" 
                style={{ 
                  backgroundColor: "#9333ea", 
                  color: "white", 
                  padding: "0.75rem 1.5rem", 
                  borderRadius: "9999px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(147, 51, 234, 0.3)"
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#7c3aed"
                  e.target.style.transform = "translateY(-2px)"
                  e.target.style.boxShadow = "0 8px 25px rgba(147, 51, 234, 0.4)"
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#9333ea"
                  e.target.style.transform = "translateY(0)"
                  e.target.style.boxShadow = "0 4px 15px rgba(147, 51, 234, 0.3)"
                }}
              >
                Get Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              style={{
                display: "none",
                background: "none",
                border: "none",
                color: "white",
                fontSize: "1.5rem",
                cursor: "pointer",
                padding: "0.5rem"
              }}
              id="mobile-menu-btn"
            >
              ☰
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile-responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          nav > div:nth-child(2) {
            display: none !important;
          }
          #mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section style={{ 
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", 
        padding: "4rem 0", 
        textAlign: "center",
        color: "white"
      }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "1rem" }}>
            Let's Build Your <span style={{ color: "#c084fc" }}>Dream Store</span>
          </h1>
          <p style={{ fontSize: "1.25rem", opacity: "0.9", maxWidth: "48rem", margin: "0 auto" }}>
            Ready to transform your business with a professional Shopify store? Get in touch and let's discuss your project.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: "5rem 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr", 
            gap: "3rem", 
            alignItems: "start" 
          }}>
            
            {/* Contact Form */}
            <div style={{
              backgroundColor: "white",
              padding: "3rem",
              borderRadius: "1rem",
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              border: "1px solid #e5e7eb",
              maxWidth: "800px",
              margin: "0 auto",
              width: "100%"
            }}>
              <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "#111827", marginBottom: "1rem" }}>
                Start Your Project
              </h2>
              <p style={{ color: "#6b7280", marginBottom: "2rem" }}>
                Fill out the form below and we'll get back to you with a custom quote within 24 hours.
              </p>

              <form onSubmit={handleSubmit}>
                {/* Form Grid for Desktop */}
                <div style={{ 
                  display: "grid", 
                  gridTemplateColumns: "1fr 1fr", 
                  gap: "1rem", 
                  marginBottom: "1.5rem" 
                }}>
                  <div>
                    <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "#374151" }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      style={{
                        width: "100%",
                        padding: "1rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "0.5rem",
                        fontSize: "1rem",
                        transition: "border-color 0.3s ease"
                      }}
                      onFocus={(e) => e.target.style.borderColor = "#9333ea"}
                      onBlur={(e) => e.target.style.borderColor = "#d1d5db"}
                    />
                  </div>
                  
                  <div>
                    <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "#374151" }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      style={{
                        width: "100%",
                        padding: "1rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "0.5rem",
                        fontSize: "1rem",
                        transition: "border-color 0.3s ease"
                      }}
                      onFocus={(e) => e.target.style.borderColor = "#9333ea"}
                      onBlur={(e) => e.target.style.borderColor = "#d1d5db"}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "#374151" }}>
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "1rem",
                      border: "1px solid #d1d5db",
                      borderRadius: "0.5rem",
                      fontSize: "1rem",
                      backgroundColor: "white",
                      transition: "border-color 0.3s ease"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#9333ea"}
                    onBlur={(e) => e.target.style.borderColor = "#d1d5db"}
                  >
                    <option value="">Select your project type</option>
                    <option value="new-store">New Shopify Store</option>
                    <option value="migration">Platform Migration to Shopify</option>
                    <option value="redesign">Store Redesign</option>
                    <option value="optimization">Store Optimization</option>
                    <option value="app-integration">App Integration</option>
                    <option value="maintenance">Ongoing Maintenance</option>
                    <option value="custom">Custom Development</option>
                  </select>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "#374151" }}>
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "1rem",
                      border: "1px solid #d1d5db",
                      borderRadius: "0.5rem",
                      fontSize: "1rem",
                      backgroundColor: "white",
                      transition: "border-color 0.3s ease"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#9333ea"}
                    onBlur={(e) => e.target.style.borderColor = "#d1d5db"}
                  >
                    <option value="">Select budget range</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000+">$10,000+</option>
                  </select>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "#374151" }}>
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project goals, specific requirements, features you need, target audience, etc."
                    style={{
                      width: "100%",
                      padding: "1rem",
                      border: "1px solid #d1d5db",
                      borderRadius: "0.5rem",
                      fontSize: "1rem",
                      minHeight: "120px",
                      resize: "vertical",
                      transition: "border-color 0.3s ease"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#9333ea"}
                    onBlur={(e) => e.target.style.borderColor = "#d1d5db"}
                  />
                </div>

                <button 
                  type="submit"
                  style={{
                    width: "100%",
                    background: "#9333ea",
                    color: "white",
                    padding: "1rem 2rem",
                    border: "none",
                    borderRadius: "0.5rem",
                    fontSize: "1.125rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#7c3aed"
                    e.target.style.transform = "translateY(-2px)"
                    e.target.style.boxShadow = "0 8px 25px rgba(147, 51, 234, 0.3)"
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#9333ea"
                    e.target.style.transform = "translateY(0)"
                    e.target.style.boxShadow = "none"
                  }}
                >
                  Send Project Details
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div style={{ maxWidth: "600px", margin: "0 auto", width: "100%" }}>
              <div style={{
                backgroundColor: "white",
                padding: "3rem",
                borderRadius: "1rem",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                border: "1px solid #e5e7eb"
              }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#111827", marginBottom: "1rem" }}>
                  Get In Touch Directly
                </h3>
                <p style={{ color: "#6b7280", marginBottom: "2rem" }}>
                  Prefer to reach out directly? Choose your preferred method below.
                </p>

                <div style={{ display: "grid", gap: "1rem" }}>
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    padding: "1rem", 
                    backgroundColor: "#f8fafc", 
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0"
                  }}>
                    <span style={{ fontSize: "1.5rem", marginRight: "1rem" }}>📧</span>
                    <div>
                      <strong style={{ color: "#374151" }}>Email:</strong>
                      <span style={{ color: "#6b7280", marginLeft: "0.5rem" }}>hello@wbify.com</span>
                    </div>
                  </div>
                  
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    padding: "1rem", 
                    backgroundColor: "#f8fafc", 
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0"
                  }}>
                    <span style={{ fontSize: "1.5rem", marginRight: "1rem" }}>📞</span>
                    <div>
                      <strong style={{ color: "#374151" }}>Phone:</strong>
                      <span style={{ color: "#6b7280", marginLeft: "0.5rem" }}>+1 (555) 123-4567</span>
                    </div>
                  </div>
                  
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    padding: "1rem", 
                    backgroundColor: "#f8fafc", 
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0"
                  }}>
                    <span style={{ fontSize: "1.5rem", marginRight: "1rem" }}>⏰</span>
                    <div>
                      <strong style={{ color: "#374151" }}>Hours:</strong>
                      <span style={{ color: "#6b7280", marginLeft: "0.5rem" }}>Monday-Friday, 9AM-6PM EST</span>
                    </div>
                  </div>
                  
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    padding: "1rem", 
                    backgroundColor: "#f0fdf4", 
                    borderRadius: "0.5rem",
                    border: "1px solid #bbf7d0"
                  }}>
                    <span style={{ fontSize: "1.5rem", marginRight: "1rem" }}>⚡</span>
                    <div>
                      <strong style={{ color: "#374151" }}>Response:</strong>
                      <span style={{ color: "#16a34a", marginLeft: "0.5rem", fontWeight: "600" }}>Within 24 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .grid-cols-2 {
            grid-template-columns: 1fr !important;
          }
          nav h1 {
            font-size: 1.5rem !important;
          }
          section h1 {
            font-size: 2rem !important;
          }
          section h2 {
            font-size: 1.5rem !important;
          }
        }
      `}</style>

      {/* Enhanced Footer */}
      <footer style={{ backgroundColor: "#111827", color: "white", padding: "4rem 0 2rem 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
          
          {/* Main Footer Content */}
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
            gap: "3rem", 
            marginBottom: "3rem" 
          }}>
            
            {/* Company Info */}
            <div>
              <div style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "1rem", color: "white" }}>
                Wbify
              </div>
              <p style={{ color: "#9ca3af", marginBottom: "1.5rem", lineHeight: "1.6", maxWidth: "20rem" }}>
                Professional Shopify development agency helping small businesses transform their online presence and boost sales.
              </p>
              
              {/* Trust Badges */}
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ 
                    width: "2rem", 
                    height: "2rem", 
                    background: "#95bf47", 
                    borderRadius: "0.25rem", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    fontSize: "0.875rem", 
                    fontWeight: "700", 
                    color: "white" 
                  }}>
                    S
                  </div>
                  <span style={{ color: "#9ca3af", fontSize: "0.875rem" }}>Shopify Partner</span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontSize: "1rem" }}>⭐</span>
                  <span style={{ color: "#9ca3af", fontSize: "0.875rem" }}>5.0 Rating</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "1rem", color: "white" }}>
                Quick Links
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  { name: "Home", href: "/" },
                  { name: "Services", href: "/#services" },
                  { name: "Portfolio", href: "/portfolio" },
                  { name: "Projects", href: "/projects" },
                  { name: "Get Quote", href: "/quote" }
                ].map((link, idx) => (
                  <li key={idx} style={{ marginBottom: "0.5rem" }}>
                    <a 
                      href={link.href}
                      style={{ 
                        color: "#9ca3af", 
                        textDecoration: "none",
                        transition: "color 0.3s ease"
                      }}
                      onMouseOver={(e) => e.target.style.color = "white"}
                      onMouseOut={(e) => e.target.style.color = "#9ca3af"}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "1rem", color: "white" }}>
                Our Services
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Shopify Store Setup",
                  "Theme Customization", 
                  "Platform Migration",
                  "App Integration",
                  "Store Optimization",
                  "Ongoing Support"
                ].map((service, idx) => (
                  <li key={idx} style={{ marginBottom: "0.5rem" }}>
                    <span style={{ color: "#9ca3af", fontSize: "0.875rem" }}>
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "1rem", color: "white" }}>
                Contact Info
              </h3>
              
              <div style={{ marginBottom: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "0.75rem" }}>
                  <span style={{ marginRight: "0.75rem" }}>📧</span>
                  <a 
                    href="mailto:hello@wbify.com" 
                    style={{ 
                      color: "#9ca3af", 
                      textDecoration: "none",
                      transition: "color 0.3s ease"
                    }}
                    onMouseOver={(e) => e.target.style.color = "white"}
                    onMouseOut={(e) => e.target.style.color = "#9ca3af"}
                  >
                    hello@wbify.com
                  </a>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", marginBottom: "0.75rem" }}>
                  <span style={{ marginRight: "0.75rem" }}>📞</span>
                  <a 
                    href="tel:+15551234567" 
                    style={{ 
                      color: "#9ca3af", 
                      textDecoration: "none",
                      transition: "color 0.3s ease"
                    }}
                    onMouseOver={(e) => e.target.style.color = "white"}
                    onMouseOut={(e) => e.target.style.color = "#9ca3af"}
                  >
                    +1 (555) 123-4567
                  </a>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ marginRight: "0.75rem" }}>⏰</span>
                  <span style={{ color: "#9ca3af", fontSize: "0.875rem" }}>
                    Mon-Fri: 9AM-6PM EST
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "0.75rem", color: "white" }}>
                  Follow Us
                </h4>
                <div style={{ display: "flex", gap: "1rem" }}>
                  {[
                    { name: "LinkedIn", icon: "💼", href: "#" },
                    { name: "Twitter", icon: "🐦", href: "#" },
                    { name: "Instagram", icon: "📷", href: "#" }
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        backgroundColor: "#374151",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                        transition: "all 0.3s ease"
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = "#9333ea"
                        e.target.style.transform = "translateY(-2px)"
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = "#374151"
                        e.target.style.transform = "translateY(0)"
                      }}
                      title={social.name}
                    >
                      <span style={{ fontSize: "1.25rem" }}>{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{ borderTop: "1px solid #374151", paddingTop: "2rem" }}>
            <div style={{ 
              display: "flex", 
              flexDirection: "column", 
              gap: "1rem", 
              alignItems: "center",
              textAlign: "center"
            }}>
              
              {/* Copyright */}
              <div style={{ color: "#9ca3af", fontSize: "0.875rem" }}>
                © 2025 Wbify. All rights reserved. | Built with ❤️ for small businesses
              </div>

              {/* Legal Links */}
              <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
                <a 
                  href="/privacy" 
                  style={{ 
                    color: "#9ca3af", 
                    fontSize: "0.875rem", 
                    textDecoration: "none",
                    transition: "color 0.3s ease"
                  }}
                  onMouseOver={(e) => e.target.style.color = "white"}
                  onMouseOut={(e) => e.target.style.color = "#9ca3af"}
                >
                  Privacy Policy
                </a>
                <a 
                  href="/terms" 
                  style={{ 
                    color: "#9ca3af", 
                    fontSize: "0.875rem", 
                    textDecoration: "none",
                    transition: "color 0.3s ease"
                  }}
                  onMouseOver={(e) => e.target.style.color = "white"}
                  onMouseOut={(e) => e.target.style.color = "#9ca3af"}
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Simple Head export without external dependencies
export const Head = () => (
  <>
    <title>Contact Us - Get Your Shopify Store Built | Wbify</title>
    <meta name="description" content="Contact Wbify for professional Shopify development services. Get a free quote for your e-commerce store project. We respond within 24 hours!" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
)

export default ContactPage