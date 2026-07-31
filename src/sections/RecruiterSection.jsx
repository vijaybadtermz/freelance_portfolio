import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Download, Briefcase } from 'lucide-react';
import { Github } from '../components/ui/SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const RecruiterSection = () => {
  return (
    <section className="py-16 relative bg-gradient-to-b from-[#07090e] via-[#0b0e17] to-[#07090e]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-800 text-center space-y-6 relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 font-mono text-xs">
            <Briefcase className="w-4 h-4" /> FOR RECRUITERS & ENGINEERING MANAGERS
          </div>

          <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-100 max-w-2xl mx-auto">
            Looking for a developer who can work beyond one layer?
          </h3>

          <p className="text-sm sm:text-base font-sans text-slate-300 max-w-2xl mx-auto leading-relaxed">
            My work spans UI development, application architecture, REST APIs, databases, authentication, permissions, platform integrations, desktop packaging and Android development.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href={PERSONAL_INFO.resumeUrl} variant="primary" size="md" icon={Download}>
              Download Resume
            </Button>
            <Button href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" variant="secondary" size="md" icon={Github}>
              View GitHub Profile
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
