import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import { initGA, trackPageView } from './utils/analytics';

// Import components

import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import ProjectDetails from './components/ProjectDetails';
import NewsletterManager from './components/NewsletterManager';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';

// Component to track page views
function Analytics() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
}

function App() {
  useEffect(() => {
    // Initialize Google Analytics when the app loads
    initGA();
  }, []);

  return (
    <Router>
      <Analytics />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/admin/newsletter" element={<NewsletterManager />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;