import * as React from "react"
import { Link } from "gatsby"

const Header = ({ transparent = false, siteTitle = "Wbify" }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMenuOpen(false)
  }

  // Close mobile menu on window resize
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMenuOpen])

  return (
    <>
      {/* Embedded CSS to avoid import issues */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav-wbify {
            display: flex !important;
          }
          .mobile-menu-btn-wbify {
            display: none !important;
          }
        }
        
        .logo-wbify:hover {
          color: white !important;
          text-decoration: none !important;
        }
        
        .nav-link-wbify:hover {
          color: white !important;
          background: rgba(255,255,255,0.1) !important;
        }
        
        .cta-button-wbify:hover {
          background: rgba(255,255,255,0.25) !important;
          transform: translateY(-1px) !important;
          color: white !important;
          text-decoration: none !important;
        }
        
        .mobile-menu-btn-wbify:hover {
          background: rgba(255,255,255,0.1) !important;
        }
        
        .mobile-nav-link-wbify:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          color: #c084fc !important;
          text-decoration: none !important;
        }
        
        .mobile-cta-wbify:hover {
          background: #7c3aed !important;
          color: white !important;
          text-decoration: none !important;
        }
      `}</style>

      <header 
        style={{
          position: transparent ? 'absolute' : 'relative',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: transparent ? 'transparent' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '1rem 0',
          transition: 'all 0.3s ease',
        }}
      >
        <div 
          style={{
            maxWidth: '80rem',
            margin: '0 auto',
            padding: '0 1.5rem',
          }}
        >
          <nav 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              minHeight: '50px',
            }}
          >
            
            {/* Logo */}
            <Link 
              to="/" 
              style={{
                fontSize: '1.75rem',
                fontWeight: '600',
                color: 'white',
                textDecoration: 'none',
                letterSpacing: '-0.015em',
              }}
              className="logo-wbify"
            >
              {siteTitle}
            </Link>

            {/* Desktop Navigation */}
            <div 
              style={{
                display: 'none',
                gap: '2.5rem',
                alignItems: 'center',
              }}
              className="desktop-nav-wbify"
            >
              <Link 
                to="/" 
                style={{
                  color: 'rgba(255,255,255,0.9)',
                  textDecoration: 'none',
                  fontWeight: '400',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                }} 
                className="nav-link-wbify"
              >
                Home
              </Link>
              <a 
                href="/#services" 
                style={{
                  color: 'rgba(255,255,255,0.9)',
                  textDecoration: 'none',
                  fontWeight: '400',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                }} 
                className="nav-link-wbify"
              >
                Services
              </a>
              <Link 
                to="/portfolio" 
                style={{
                  color: 'rgba(255,255,255,0.9)',
                  textDecoration: 'none',
                  fontWeight: '400',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                }} 
                className="nav-link-wbify"
              >
                Portfolio
              </Link>
              <Link 
                to="/projects" 
                style={{
                  color: 'rgba(255,255,255,0.9)',
                  textDecoration: 'none',
                  fontWeight: '400',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                }} 
                className="nav-link-wbify"
              >
                Projects
              </Link>
              <Link 
                to="/contact" 
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                }} 
                className="nav-link-wbify"
              >
                Contact
              </Link>
              <Link 
                to="/quote" 
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  padding: '0.6rem 1.25rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(10px)',
                  display: 'inline-block',
                }} 
                className="cta-button-wbify"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              style={{
                display: 'block',
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                padding: '0.5rem',
                fontSize: '1.25rem',
                borderRadius: '0.25rem',
                transition: 'background 0.3s ease',
              }}
              className="mobile-menu-btn-wbify"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </nav>

          {/* Mobile Menu */}
          <div 
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'rgba(15, 23, 42, 0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '1rem',
              transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
              opacity: isMenuOpen ? 1 : 0,
              visibility: isMenuOpen ? 'visible' : 'hidden',
              transition: 'all 0.3s ease',
              zIndex: 40,
            }}
          >
            <Link 
              to="/" 
              style={{
                display: 'block',
                color: 'white',
                textDecoration: 'none',
                padding: '1rem',
                borderRadius: '0.5rem',
                transition: 'all 0.3s ease',
                fontWeight: '400',
                marginBottom: '0.5rem',
              }} 
              className="mobile-nav-link-wbify" 
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <a 
              href="/#services" 
              style={{
                display: 'block',
                color: 'white',
                textDecoration: 'none',
                padding: '1rem',
                borderRadius: '0.5rem',
                transition: 'all 0.3s ease',
                fontWeight: '400',
                marginBottom: '0.5rem',
              }} 
              className="mobile-nav-link-wbify" 
              onClick={closeMobileMenu}
            >
              Services
            </a>
            <Link 
              to="/portfolio" 
              style={{
                display: 'block',
                color: 'white',
                textDecoration: 'none',
                padding: '1rem',
                borderRadius: '0.5rem',
                transition: 'all 0.3s ease',
                fontWeight: '400',
                marginBottom: '0.5rem',
              }} 
              className="mobile-nav-link-wbify" 
              onClick={closeMobileMenu}
            >
              Portfolio
            </Link>
            <Link 
              to="/projects" 
              style={{
                display: 'block',
                color: 'white',
                textDecoration: 'none',
                padding: '1rem',
                borderRadius: '0.5rem',
                transition: 'all 0.3s ease',
                fontWeight: '400',
                marginBottom: '0.5rem',
              }} 
              className="mobile-nav-link-wbify" 
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              style={{
                display: 'block',
                color: 'white',
                textDecoration: 'none',
                padding: '1rem',
                borderRadius: '0.5rem',
                transition: 'all 0.3s ease',
                fontWeight: '400',
                marginBottom: '0.5rem',
              }} 
              className="mobile-nav-link-wbify" 
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            <Link 
              to="/quote" 
              style={{
                background: '#9333ea',
                color: 'white',
                padding: '1rem',
                borderRadius: '1rem',
                textDecoration: 'none',
                fontWeight: '600',
                textAlign: 'center',
                display: 'block',
                marginTop: '1rem',
                transition: 'all 0.3s ease',
              }} 
              className="mobile-cta-wbify" 
              onClick={closeMobileMenu}
            >
              Get Quote
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header