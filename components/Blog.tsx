import React from 'react';
import { motion, Variants } from 'framer-motion';
import { POSTS } from '../constants';

const Blog: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="blog" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Recent Writings</h2>
          <p className="mt-4 text-lg text-slate-400">
            Sharing thoughts on technology, development, and more.
          </p>
        </motion.div>
        <motion.div
          className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {POSTS.map((post) => (
            <motion.div
              key={post.title}
              variants={itemVariants}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-slate-800 hover:bg-slate-700/50 transition-colors"
            >
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href={post.link} className="block mt-2 group">
                    <p className="text-xl font-semibold text-white group-hover:text-sky-400 transition-colors">{post.title}</p>
                    <p className="mt-3 text-base text-slate-400">{post.summary}</p>
                  </a>
                </div>
                <div className="mt-6">
                  <a href={post.link} className="text-base font-medium text-sky-400 hover:text-sky-300 transition-colors">
                    Read post &rarr;
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-12">
          <a href="#" className="text-base font-medium text-slate-400 hover:text-white">View all posts on Dev.to</a>
        </div>
      </div>
    </section>
  );
};

export default Blog;