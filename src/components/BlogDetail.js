import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Example blog data (should be shared or fetched in a real app)
const blogPosts = [
  {
    id: 1,
    title: 'How to Choose the Right Web Development Stack',
    content: 'Choosing the right stack depends on your project goals, budget, and team expertise. Consider scalability, security, and community support when making your decision.',
    date: '2025-08-01',
  },
  {
    id: 2,
    title: 'E-Commerce Trends in 2025',
    content: 'E-commerce is evolving rapidly. In 2025, focus on personalization, mobile-first design, and seamless checkout experiences to stay competitive.',
    date: '2025-07-15',
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return <main className="max-w-2xl mx-auto py-12 px-4"><h1>Post not found</h1></main>;
  }

  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <Link to="/blog" className="text-purple-700 hover:underline">&larr; Back to Blog</Link>
      <h1 className="text-4xl font-bold mb-4 mt-4">{post.title}</h1>
      <span className="text-sm text-gray-400 mb-6 block">{post.date}</span>
      <div className="text-lg text-gray-700 mb-8">{post.content}</div>
    </main>
  );
};

export default BlogDetail;
