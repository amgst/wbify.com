import React from 'react';

/**
 * Reusable Brevo Newsletter Component
 * 
 * This component can be used anywhere on your website to display
 * a Brevo newsletter signup form with consistent styling.
 * 
 * Props:
 * - formUrl: Your Brevo form iframe URL
 * - title: Custom title for the newsletter section
 * - description: Custom description text
 * - variant: 'default', 'compact', 'hero', or 'sidebar'
 * - className: Additional CSS classes
 */

const BrevoNewsletter = ({ 
  formUrl = "YOUR_BREVO_FORM_URL_HERE", 
  title = "Subscribe to Our Newsletter",
  description = "Stay updated with our latest news, insights, and exclusive content delivered directly to your inbox.",
  variant = "default",
  className = ""
}) => {
  
  // Variant styles
  const variants = {
    default: {
      container: "bg-gray-50 py-16",
      wrapper: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
      content: "text-center",
      title: "text-3xl font-bold text-gray-900 mb-4",
      description: "text-lg text-gray-600 mb-8 max-w-2xl mx-auto",
      formContainer: "max-w-lg mx-auto",
      iframe: "w-full h-96 rounded-lg shadow-lg"
    },
    compact: {
      container: "bg-white py-8",
      wrapper: "max-w-2xl mx-auto px-4 sm:px-6 lg:px-8",
      content: "text-center",
      title: "text-2xl font-bold text-gray-900 mb-3",
      description: "text-gray-600 mb-6",
      formContainer: "max-w-md mx-auto",
      iframe: "w-full h-80 rounded-lg shadow-md"
    },
    hero: {
      container: "bg-gradient-to-r from-blue-600 to-purple-600 py-20",
      wrapper: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
      content: "text-center",
      title: "text-4xl font-bold text-white mb-6",
      description: "text-xl text-blue-100 mb-10 max-w-3xl mx-auto",
      formContainer: "max-w-xl mx-auto",
      iframe: "w-full h-96 rounded-xl shadow-2xl"
    },
    sidebar: {
      container: "bg-gray-100 p-6 rounded-lg",
      wrapper: "w-full",
      content: "",
      title: "text-xl font-bold text-gray-900 mb-3",
      description: "text-sm text-gray-600 mb-4",
      formContainer: "w-full",
      iframe: "w-full h-72 rounded-md"
    }
  };

  const styles = variants[variant] || variants.default;

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            {title}
          </h2>
          <p className={styles.description}>
            {description}
          </p>
          
          <div className={styles.formContainer}>
            {formUrl !== "YOUR_BREVO_FORM_URL_HERE" ? (
              // Actual Brevo form
              <iframe
                src={formUrl}
                className={styles.iframe}
                frameBorder="0"
                scrolling="no"
                style={{ border: 'none' }}
                title="Newsletter Signup Form"
                loading="lazy"
              ></iframe>
            ) : (
              // Placeholder when form URL is not configured
              <div className={`${styles.iframe} bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center`}>
                <div className="text-center p-6">
                  <div className="text-4xl mb-4">📧</div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Brevo Form Placeholder
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Replace <code className="bg-gray-300 px-2 py-1 rounded">formUrl</code> prop with your Brevo form URL
                  </p>
                  <div className="text-xs text-gray-500">
                    <p>1. Create form in Brevo dashboard</p>
                    <p>2. Copy iframe src URL</p>
                    <p>3. Pass as formUrl prop</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Trust indicators */}
          <div className="mt-4 flex items-center justify-center space-x-4 text-xs text-gray-500">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Secure & Private
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No Spam
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Easy Unsubscribe
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Example usage components
export const NewsletterHero = (props) => (
  <BrevoNewsletter 
    variant="hero" 
    title="Join 10,000+ Subscribers"
    description="Get exclusive insights, tips, and updates delivered weekly to your inbox. No spam, just valuable content."
    {...props} 
  />
);

export const NewsletterSidebar = (props) => (
  <BrevoNewsletter 
    variant="sidebar" 
    title="Newsletter"
    description="Weekly updates and insights"
    {...props} 
  />
);

export const NewsletterCompact = (props) => (
  <BrevoNewsletter 
    variant="compact" 
    title="Stay in the Loop"
    description="Get our latest updates and exclusive content."
    {...props} 
  />
);

// Usage examples:
/*

// Basic usage
<BrevoNewsletter formUrl="https://your-brevo-form-url" />

// Hero section
<NewsletterHero formUrl="https://your-brevo-form-url" />

// Sidebar widget
<NewsletterSidebar formUrl="https://your-brevo-form-url" />

// Compact version
<NewsletterCompact formUrl="https://your-brevo-form-url" />

// Custom styling
<BrevoNewsletter 
  formUrl="https://your-brevo-form-url"
  title="Custom Title"
  description="Custom description"
  variant="hero"
  className="my-custom-class"
/>

*/

export default BrevoNewsletter;