import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { EXPERTISE_MATRIX } from '../data/portfolioData';
import { Layout, Server, Smartphone, Monitor, Cpu, Wrench } from 'lucide-react';

export const ExpertiseSection = () => {
  const categoryIcons = {
    Frontend: Layout,
    Backend: Server,
    Android: Smartphone,
    Desktop: Monitor,
    'AI & Automation': Cpu,
    'Additional Engineering': Wrench
  };

  return (
    <section id="expertise" className="py-20 md:py-28 relative bg-[#05070c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="03 / EXPERTISE"
          title="More than frontend development."
          subtitle="A comprehensive capability matrix showing full-stack development, native mobile engineering, desktop software packaging, database optimization, and AI integration."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERTISE_MATRIX.map((group, idx) => {
            const IconComponent = categoryIcons[group.category] || Wrench;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-cyan-400">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-slate-100">{group.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="cyan" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
