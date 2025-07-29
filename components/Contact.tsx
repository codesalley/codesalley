import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../components/icons';

const Contact: React.FC = () => {
  return (
    <motion.section 
      id="contact" 
      className="py-20 sm:py-32 bg-slate-900/70"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Get In Touch</h2>
        <p className="mt-4 text-lg text-slate-400">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>
        <div className="mt-8">
          <a
            href="mailto:contact@codesalley.dev"
            className="inline-block rounded-md bg-sky-500 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all"
          >
            contact@codesalley.dev
          </a>
        </div>

        <form className="mt-12 text-left space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300">
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-md border-slate-600 bg-slate-800 text-white shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm p-3"
                placeholder="Your Name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300">
              Email
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-slate-600 bg-slate-800 text-white shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm p-3"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300">
              Message
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border-slate-600 bg-slate-800 text-white shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm p-3"
                placeholder="Your message..."
              ></textarea>
            </div>
          </div>
          <div>
            <button
              type="submit"
              onClick={(e) => e.preventDefault()}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-700 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-slate-500 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="mt-12 flex justify-center space-x-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><span className="sr-only">GitHub</span><GithubIcon className="h-6 w-6"/></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><span className="sr-only">LinkedIn</span><LinkedinIcon className="h-6 w-6"/></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><span className="sr-only">Twitter</span><TwitterIcon className="h-6 w-6"/></a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
