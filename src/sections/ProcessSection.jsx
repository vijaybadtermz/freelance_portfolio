import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/ui/SectionHeader';
import { PROCESS_TIMELINE } from '../data/portfolioData';

export const ProcessSection = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="04 / PROCESS"
          title="How I Build."
          subtitle="A structured, professional engineering process designed to deliver software that solves actual operational problems."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {/* Subtle Connection Line on Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/30 via-indigo-500/30 to-emerald-500/30 -translate-y-1/2 z-0" />

          {PROCESS_TIMELINE.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-6 relative z-10 border border-slate-800 space-y-3 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-black text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30 inline-block mb-3">
                  STEP {item.step}
                </span>
                <h3 className="text-xl font-display font-bold text-slate-100 mb-2">{item.title}</h3>
                <p className="text-xs font-sans text-slate-300 leading-relaxed">{item.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-500">
                Phase 0{idx + 1} Execution
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
