import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
          <motion.div
            className="lg:col-span-1 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <img
              className="h-48 w-48 rounded-full object-cover shadow-lg"
              src="https://picsum.photos/seed/codesalley-avatar/200/200"
              alt="Code Salley's profile picture"
            />
          </motion.div>
          <motion.div
            className="mt-8 lg:mt-0 lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              I'm Code Salley, a Full-Stack Engineer and Product Builder passionate about creating software that not only functions flawlessly but also feels intuitive and fast. My journey in tech is driven by a desire to solve real-world problems through clean code and delightful user experiences.
            </p>
            <p className="mt-4 text-lg text-slate-400">
              With a strong foundation in React, React Native, Ruby on Rails, and Go, I thrive in dynamic environments and continuously embrace a learning mindset. Whether it's architecting a scalable backend or polishing the final details of a mobile UI, I am committed to quality and craftsmanship.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="text-base font-medium text-sky-400 hover:text-sky-300 transition-colors"
              >
                View my Resume &rarr;
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
