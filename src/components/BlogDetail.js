import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import { getBlogPostBySlug } from '../data/blog';
import { trackBlogView } from '../utils/analytics';

const BlogDetail = () => {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  // Track blog post view
  useEffect(() => {
    if (post) {
      trackBlogView(post.title);
    }
  }, [post]);

  if (!post) {
    return (
      <>
        <Navigation />
        <main className="max-w-3xl mx-auto py-24 px-4">
          <h1 className="text-4xl font-bold mb-8">Post Not Found</h1>
          <p className="text-gray-600">The blog post you're looking for doesn't exist.</p>
        </main>
        <Footer />
      </>
    );
  }

  // Function to format content with basic markdown-like styling
  const formatContent = (content) => {
    if (!content) return '';
    
    return content
      .split('\n\n')
      .map((paragraph, index) => {
        // Handle headings
        if (paragraph.startsWith('## ')) {
          return `<h2 class="text-2xl font-semibold mb-4 mt-8">${paragraph.substring(3)}</h2>`;
        }
        
        // Handle bold text
        const boldFormatted = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>');
        
        // Handle regular paragraphs
        return `<p class="mb-4 text-gray-700 leading-relaxed">${boldFormatted}</p>`;
      })
      .join('');
  };

  return (
    <>
      <Navigation />
      <main className="max-w-3xl mx-auto py-24 px-4">
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            {post.image && (
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
              />
            )}
            <p className="text-xl text-gray-600 leading-relaxed">{post.summary}</p>
          </header>
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogDetail;
