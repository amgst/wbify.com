import React from 'react';
import { Link } from 'react-router-dom';

// Example blog data
const blogPosts = [
  {
    id: 1,
    slug: 'web-development-stack',
    title: 'How to Choose the Right Web Development Stack',
    summary: 'Learn how to select the best technologies for your next web project.',
    date: '2025-08-01',
    image: '/blog/web-stack.jpg',
  },
  {
    id: 2,
    slug: 'ecommerce-trends-2025',
    title: 'E-Commerce Trends in 2025',
    summary: 'Stay ahead with the latest e-commerce strategies and tools.',
    date: '2025-07-15',
    image: '/blog/ecommerce-trends.jpg',
  },
  {
    id: 3,
    slug: 'shopify-essential-apps',
    title: '5 Essential Shopify Apps for Your Store',
    summary: 'Boost your Shopify store’s performance and sales with these must-have apps.',
    date: '2025-08-09',
    image: '/blog/shopify-apps.jpg',
  },
  {
    id: 4,
    slug: 'shopify-homepage-design',
    title: 'How to Design a High-Converting Shopify Homepage',
    summary: 'Tips and best practices for creating a Shopify homepage that turns visitors into customers.',
    date: '2025-08-08',
    image: '/blog/shopify-homepage.jpg',
  },
];

const Blog = () => (
  <main className="max-w-3xl mx-auto py-12 px-4">
    <h1 className="text-4xl font-bold mb-8">Blog</h1>
    <ul className="space-y-8">
      {blogPosts.map(post => (
        <li key={post.id} className="border-b pb-6 flex flex-col md:flex-row md:items-center gap-6">
          {post.image && (
            <img src={post.image} alt={post.title} className="w-40 h-28 object-cover rounded-lg shadow" />
          )}
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              <Link to={`/blog/${post.slug}`} className="text-purple-700 hover:underline">{post.title}</Link>
            </h2>
            <p className="text-gray-600 mb-1">{post.summary}</p>
            <span className="text-sm text-gray-400">{post.date}</span>
          </div>
        </li>
      ))}
    </ul>
  </main>
);

export default Blog;
