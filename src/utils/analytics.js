// Google Analytics configuration for React app
export const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID || 'G-EB1Z519BGJ';

// Initialize Google Analytics
export const initGA = () => {
  // Only initialize in production or when explicitly enabled
  if (process.env.NODE_ENV !== 'production' && !process.env.REACT_APP_GA_TRACKING_ID) {
    console.log('Google Analytics disabled in development mode');
    return;
  }

  // Load gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  
  window.gtag('js', new Date());
  window.gtag('config', GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track page views
export const trackPageView = (path) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: path,
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track newsletter subscription
export const trackNewsletterSignup = () => {
  trackEvent('newsletter_signup', 'engagement', 'footer_newsletter');
};

// Track contact form submission
export const trackContactForm = () => {
  trackEvent('contact_form_submit', 'engagement', 'contact_page');
};

// Track blog post views
export const trackBlogView = (postTitle) => {
  trackEvent('blog_view', 'content', postTitle);
};
