import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Example blog data (should be shared or fetched in a real app)
const blogPosts = [
  {
    id: 1,
    slug: 'web-development-stack',
    title: 'How to Choose the Right Web Development Stack',
    content: 'Choosing the right stack depends on your project goals, budget, and team expertise. Consider scalability, security, and community support when making your decision.',
    date: '2025-08-01',
    image: '/blog/web-stack.jpg',
  },
  {
    id: 2,
    slug: 'ecommerce-trends-2025',
    title: 'E-Commerce Trends in 2025',
    content: 'E-commerce is evolving rapidly. In 2025, focus on personalization, mobile-first design, and seamless checkout experiences to stay competitive.',
    date: '2025-07-15',
    image: '/blog/ecommerce-trends.jpg',
  },
  {
    id: 3,
    slug: 'shopify-essential-apps',
    title: '5 Essential Shopify Apps for Your Store',
    content: 'Shopify’s app ecosystem is vast, but these 5 apps stand out for boosting sales, improving customer experience, and streamlining operations: 1) Oberlo for dropshipping, 2) Klaviyo for email marketing, 3) Yotpo for reviews, 4) Privy for popups and conversion, 5) Rewind for backups. Install these to get the most out of your Shopify store.',
    date: '2025-08-09',
    image: '/blog/shopify-apps.jpg',
  },
  {
    id: 4,
    slug: 'shopify-homepage-design',
    title: 'How to Design a High-Converting Shopify Homepage',
    content: 'A high-converting Shopify homepage is clear, visually appealing, and guides visitors to action. Use a strong headline, quality images, clear CTAs, and highlight trust signals like reviews and guarantees. Test and optimize regularly for best results.',
    date: '2025-08-08',
    image: '/blog/shopify-homepage.jpg',
  },
];

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <main className="max-w-2xl mx-auto py-12 px-4"><h1>Post not found</h1></main>;
  }

  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <Link to="/blog" className="text-purple-700 hover:underline">&larr; Back to Blog</Link>
      <h1 className="text-4xl font-bold mb-4 mt-4">{post.title}</h1>
      <span className="text-sm text-gray-400 mb-6 block">{post.date}</span>
      {post.image && (
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg shadow mb-6" />
      )}
      <div className="text-lg text-gray-700 mb-8">{post.content}</div>
    </main>
  );
};

export default BlogDetail;
