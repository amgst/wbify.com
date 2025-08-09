import { shopifyEssentialApps } from './shopify-essential-apps';
import { shopifyHomepageDesign } from './shopify-homepage-design';

export const blogPosts = [
  shopifyEssentialApps,
  shopifyHomepageDesign,
];

export const getBlogPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

export const getAllBlogPosts = () => {
  return blogPosts;
};
