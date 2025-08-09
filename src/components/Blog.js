import React from 'react';
import { Link } from 'react-router-dom';

// Example blog data
const blogPosts = [
  {
    id: 1,
    title: 'How to Choose the Right Web Development Stack',
    summary: 'Learn how to select the best technologies for your next web project.',
    date: '2025-08-01',
  },
  {
    id: 2,
    title: 'E-Commerce Trends in 2025',
    summary: 'Stay ahead with the latest e-commerce strategies and tools.',
    date: '2025-07-15',
  },
];

const Blog = () => (
  <main className="max-w-3xl mx-auto py-12 px-4">
    <h1 className="text-4xl font-bold mb-8">Blog</h1>
    <ul className="space-y-8">
      {blogPosts.map(post => (
        <li key={post.id} className="border-b pb-6">
          <h2 className="text-2xl font-semibold mb-2">
            <Link to={`/blog/${post.id}`} className="text-purple-700 hover:underline">{post.title}</Link>
          </h2>
          <p className="text-gray-600 mb-1">{post.summary}</p>
          <span className="text-sm text-gray-400">{post.date}</span>
        </li>
      ))}
    </ul>
  </main>
);

export default Blog;
