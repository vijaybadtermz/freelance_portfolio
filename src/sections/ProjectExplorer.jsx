import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ArrowRight, Layers, Globe, Smartphone, Monitor, Cpu } from 'lucide-react';
import { ALL_PROJECTS } from '../data/portfolioData';

export const ProjectExplorer = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filters = [
    { label: 'ALL', value: 'ALL' },
    { label: 'WEB', value: 'Web Applications' },
    { label: 'ANDROID', value: 'Android Applications' },
    { label: 'DESKTOP', value: 'Desktop Applications' },
    { label: 'AI / AUTOMATION', value: 'AI / Automation' }
  ];

  const filteredProjects = ALL_PROJECTS.filter((p) => {
    if (activeFilter === 'ALL') return true;
    return p.category === activeFilter;
  });

  return (
    <section className="py-20 md:py-28 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="EXPLORE ALL WORK"
          title="Project Archive & Tech Categorization."
          subtitle="Filter through complete software solutions engineered across Web, Android, Desktop, and AI automation."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.label}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-300 ${
                activeFilter === f.value
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 border border-slate-800'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Filtered Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between border border-slate-800 space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="cyan">{project.platform}</Badge>
                    {project.badge && <Badge variant="accent">{project.badge}</Badge>}
                  </div>

                  <h3 className="text-xl font-display font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 font-semibold">{project.title}</p>
                  <p className="text-xs font-sans text-slate-300 leading-relaxed">{project.shortDesc}</p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-800">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="default">{tech}</Badge>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-cyan-400 border border-slate-800 text-xs font-mono font-semibold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>View Project Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
