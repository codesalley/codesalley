'use client';

import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Page() {
  const [contentVisible, setContentVisible] = useState(false);



  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AnimatePresence>
         
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <Projects />
              <About />
              <Blog />
              <Contact />
            </motion.div>
         
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}