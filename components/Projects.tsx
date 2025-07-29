import React from 'react';
import { motion, Variants } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { GithubIcon, ExternalLinkIcon } from '../components/icons';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-sky-500/20 transition-all duration-300 group flex flex-col h-full">
      <img className="w-full h-48 object-cover" src={project.image} alt={project.title} />
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-2 text-slate-400 text-sm">{project.description}</p>
        
        <div className="mt-4">
          <h4 className="font-semibold text-slate-300 text-sm">Key Highlight:</h4>
          <p className="text-slate-400 text-sm italic">"{project.highlight}"</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-700 text-sky-300 font-fira"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="px-6 py-4 bg-slate-800/50 border-t border-slate-700 flex justify-end items-center gap-4 mt-auto">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors" aria-label="GitHub repository">
          <GithubIcon className="w-6 h-6" />
        </a>
        {project.liveDemo && (
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors" aria-label="Live demo">
            <ExternalLinkIcon className="w-6 h-6" />
          </a>
        )}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
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
    <section id="projects" className="py-20 sm:py-32 bg-slate-900/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-lg text-slate-400">
            A selection of projects that showcase my skills and passion.
          </p>
        </motion.div>
        <motion.div 
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {PROJECTS.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;