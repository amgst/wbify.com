import React from 'react';
import { Link } from 'react-router-dom';

// Simplified Footer with Mailchimp Integration
// No complex state management or custom code needed!
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold">AMG Wbify</span>
            </div>
            <p className="text-gray-300 mb-4">
              Creating exceptional web experiences with cutting-edge technology and innovative design solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
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
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  E-commerce Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  SEO Optimization
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section - SIMPLIFIED WITH MAILCHIMP */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            
            {/* 
              REPLACE THIS SECTION WITH YOUR MAILCHIMP EMBED CODE
              
              Steps:
              1. Go to mailchimp.com and create free account
              2. Create an audience
              3. Go to Forms → Other forms → Create embedded form
              4. Customize the form design
              5. Copy the generated HTML code
              6. Replace the content below with your Mailchimp code
            */}
            
            {/* Example Mailchimp Integration */}
            <div className="mailchimp-form">
              {/* 
                Paste your Mailchimp embed code here!
                It will look something like this:
                
                <div id="mc_embed_signup">
                  <form action="https://your-domain.us1.list-manage.com/subscribe/post?u=xxx&id=xxx" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                    <div id="mc_embed_signup_scroll">
                      <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" placeholder="Enter your email" required />
                      <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                        <input type="text" name="b_xxx" tabIndex="-1" value="" />
                      </div>
                      <div className="clear">
                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                      </div>
                    </div>
                  </form>
                </div>
              */}
              
              {/* Placeholder form (replace with Mailchimp code) */}
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-400 mb-3">
                  📧 Replace this with your Mailchimp embed code
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:outline-none"
                    disabled
                  />
                  <button 
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                    disabled
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  See SIMPLE_NEWSLETTER_SETUP.md for instructions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 AMG Wbify. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for Mailchimp Form Styling */}
      <style jsx>{`
        .mailchimp-form #mc_embed_signup {
          background: transparent !important;
          clear: left;
          font: 14px Helvetica, Arial, sans-serif;
        }
        
        .mailchimp-form #mc_embed_signup input.email {
          background: #374151 !important;
          border: 1px solid #4b5563 !important;
          border-radius: 0.5rem !important;
          color: white !important;
          padding: 0.5rem 1rem !important;
          width: 100% !important;
          margin-bottom: 0.5rem !important;
        }
        
        .mailchimp-form #mc_embed_signup input.email:focus {
          border-color: #7c3aed !important;
          outline: none !important;
        }
        
        .mailchimp-form #mc_embed_signup input.button {
          background: #7c3aed !important;
          border: none !important;
          border-radius: 0.5rem !important;
          color: white !important;
          cursor: pointer !important;
          font-weight: 600 !important;
          padding: 0.5rem 1.5rem !important;
          transition: background-color 0.3s !important;
          width: auto !important;
        }
        
        .mailchimp-form #mc_embed_signup input.button:hover {
          background: #6d28d9 !important;
        }
        
        .mailchimp-form #mc_embed_signup_scroll {
          display: flex !important;
          flex-direction: column !important;
          gap: 0.5rem !important;
        }
        
        @media (min-width: 640px) {
          .mailchimp-form #mc_embed_signup_scroll {
            flex-direction: row !important;
          }
          
          .mailchimp-form #mc_embed_signup input.email {
            margin-bottom: 0 !important;
            flex: 1 !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

/*
  INSTRUCTIONS FOR MAILCHIMP INTEGRATION:
  
  1. Create free Mailchimp account at mailchimp.com
  2. Create an audience (subscriber list)
  3. Go to Forms → Other forms → Create embedded form
  4. Customize the form (colors, fields, etc.)
  5. Copy the generated HTML embed code
  6. Replace the placeholder div in the Newsletter Section above
  7. The custom CSS will automatically style your Mailchimp form!
  
  Benefits:
  ✅ No complex JavaScript needed
  ✅ No state management required
  ✅ Professional email delivery
  ✅ Built-in analytics and reporting
  ✅ GDPR compliant
  ✅ Mobile responsive
  ✅ Spam protection included
  ✅ Email templates provided
  ✅ Automation features available
  
  This is MUCH simpler than custom code!
*/