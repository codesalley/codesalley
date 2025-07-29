import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SKILLS } from '../constants';


 
const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  
  const handleShowAndScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
  
    
    // Allow time for the content to render before scrolling
    setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute bottom-0 left-[-20%] right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 py-32 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight"
        >
          I design and build Web and Mobile applications
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl mx-auto text-lg text-slate-400"
        >
          Full-Stack Developer focused on React, Rails, and real-world problem solving.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >

          <button
            onClick={(e) => handleShowAndScroll(e, 'contact')}
            className="inline-block rounded-md bg-slate-800 px-6 py-3 text-base font-semibold text-slate-300 shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all"
          >
            Contact Me
          </button>
        </motion.div>
        <motion.div variants={itemVariants} className="mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Specializing In
          </h2>
          <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2">
            {SKILLS.slice(0, 5).map((skill) => (
              <span key={skill.name} className="font-fira text-sm text-slate-400">
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;