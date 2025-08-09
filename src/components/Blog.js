import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import { getAllBlogPosts } from '../data/blog';

const Blog = () => {
  const blogPosts = getAllBlogPosts();

  return (
    <>
      <Navigation />
      <main className="max-w-3xl mx-auto py-24 px-4">
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
      <Footer />
    </>
  );
};

export default Blog;
