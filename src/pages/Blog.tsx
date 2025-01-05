import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'The Future of Decentralized Content Sharing',
    excerpt: 'Explore how blockchain technology is revolutionizing content distribution and access control.',
    date: 'Mar 15, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a'
  },
  {
    title: 'Understanding Proxy Re-Encryption',
    excerpt: 'A deep dive into the technology that powers secure content sharing.',
    date: 'Mar 12, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28'
  },
  {
    title: 'Web3 Privacy: A New Paradigm',
    excerpt: 'How decentralized technologies are reshaping digital privacy.',
    date: 'Mar 10, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1639322537674-e8f5f08c4d89'
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Latest Updates
          </h1>
          <p className="mt-4 text-gray-400">
            Insights and news from the CipherConnect team
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                <img
                  src={`${post.image}?w=800&auto=format&fit=crop`}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-400">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold text-white group-hover:text-purple-500 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400">{post.excerpt}</p>
                <div className="flex items-center text-purple-500 group-hover:text-pink-500 transition-colors">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;