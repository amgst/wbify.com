import * as React from "react"
import { Link } from "gatsby"

const Footer = () => {
  const [email, setEmail] = React.useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    alert('Thank you for subscribing!')
    setEmail('')
  }

  return (
    <>
      <style>{`
        .footer-container {
          background: #111827;
          color: white;
          border-top: 1px solid #374151;
        }
        .footer-link {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-link:hover {
          color: white;
        }
        .social-icon {
          width: 2.5rem;
          height: 2.5rem;
          background: #374151;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9ca3af;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          background: #9333ea;
          color: white;
          transform: translateY(-2px);
        }
        .newsletter-input {
          flex: 1;
          padding: 0.75rem 1rem;
          background: #374151;
          border: 1px solid #4b5563;
          border-radius: 0.5rem 0 0 0.5rem;
          color: white;
          outline: none;
          transition: all 0.3s ease;
        }
        .newsletter-input:focus {
          border-color: #9333ea;
          background: #4b5563;
        }
        .newsletter-input::placeholder {
          color: #9ca3af;
        }
        .newsletter-button {
          background: #9333ea;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0 0.5rem 0.5rem 0;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .newsletter-button:hover {
          background: #7c3aed;
        }
        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 0.75rem;
          color: #9ca3af;
        }
        .contact-icon {
          width: 1.25rem;
          height: 1.25rem;
          margin-right: 0.75rem;
          flex-shrink: 0;
        }
      `}</style>

      <footer className="footer-container">
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "4rem 1.5rem 0" }}>
          
          {/* Main Footer Content */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>
            
            {/* Company Info */}
            <div>
              <div style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "1rem", color: "white" }}>
                Wbify
              </div>
              <p style={{ color: "#9ca3af", marginBottom: "1.5rem", lineHeight: "1.6", maxWidth: "20rem" }}>
                Professional Shopify development agency helping small businesses transform their online presence and boost sales with custom e-commerce solutions.
              </p>
              
              {/* Social Links */}
              <div style={{ display: "flex", gap: "1rem" }}>
                {[
                  { name: "Twitter", icon: "𝕏", href: "#" },
                  { name: "LinkedIn", icon: "💼", href: "#" },
                  { name: "Instagram", icon: "📷", href: "#" },
                  { name: "GitHub", icon: "🐙", href: "#" }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="social-icon"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span style={{ fontSize: "1.25rem" }}>{social.icon}</span>
                  </a>
                ))}
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
                  { name: "Stores", href: "/stores" },
                  { name: "Contact", href: "/contact" }
                ].map((link, idx) => (
                  <li key={idx} style={{ marginBottom: "0.5rem" }}>
                    <Link to={link.href} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "1rem", color: "white" }}>
                Services
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
                    <span className="footer-link" style={{ cursor: "default" }}>
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "1rem", color: "white" }}>
                Get In Touch
              </h3>
              
              {/* Contact Info */}
              <div style={{ marginBottom: "2rem" }}>
                <div className="contact-item">
                  <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:hello@wbify.com" className="footer-link">
                    hello@wbify.com
                  </a>
                </div>
                
                <div className="contact-item">
                  <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+15551234567" className="footer-link">
                    +1 (555) 123-4567
                  </a>
                </div>

                <div className="contact-item">
                  <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Mon-Fri: 9AM-6PM EST</span>
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "0.75rem", color: "white" }}>
                  Newsletter
                </h4>
                <p style={{ color: "#9ca3af", fontSize: "0.875rem", marginBottom: "1rem" }}>
                  Get Shopify tips and updates delivered to your inbox.
                </p>
                <form onSubmit={handleSubscribe} style={{ display: "flex" }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="newsletter-input"
                    required
                  />
                  <button type="submit" className="newsletter-button">
                    <svg style={{ width: "1.25rem", height: "1.25rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{ borderTop: "1px solid #374151", paddingTop: "2rem", paddingBottom: "2rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
              
              {/* Copyright */}
              <div style={{ color: "#9ca3af", fontSize: "0.875rem", textAlign: "center" }}>
                © 2025 Wbify. All rights reserved. | Built with ❤️ for small businesses
              </div>

              {/* Legal Links */}
              <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
                <a href="/privacy" className="footer-link" style={{ fontSize: "0.875rem" }}>
                  Privacy Policy
                </a>
                <a href="/terms" className="footer-link" style={{ fontSize: "0.875rem" }}>
                  Terms of Service
                </a>
                <a href="/sitemap" className="footer-link" style={{ fontSize: "0.875rem" }}>
                  Sitemap
                </a>
              </div>

              {/* Trust Badges */}
              <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: "2rem", height: "2rem", background: "#95bf47", borderRadius: "0.25rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.875rem", fontWeight: "700", color: "white" }}>
                    S
                  </div>
                  <span style={{ color: "#9ca3af", fontSize: "0.875rem" }}>Shopify Partner</span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontSize: "1rem" }}>⭐</span>
                  <span style={{ color: "#9ca3af", fontSize: "0.875rem" }}>5.0 Rating</span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontSize: "1rem" }}>🛡️</span>
                  <span style={{ color: "#9ca3af", fontSize: "0.875rem" }}>Secure & Trusted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .footer-container > div:first-child > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .footer-container > div:first-child > div:last-child > div:first-child {
            flex-direction: column !important;
            gap: 1rem !important;
          }
          .footer-container > div:first-child > div:last-child > div:last-child {
            flex-direction: column !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </>
  )
}

export default Footer