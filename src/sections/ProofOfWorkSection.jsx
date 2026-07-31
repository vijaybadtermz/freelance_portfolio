import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/ui/SectionHeader';
import { PROOF_METRICS } from '../data/portfolioData';

export const ProofOfWorkSection = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative bg-[#05070c] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="ENGINEERING SCOPE"
          title="Built across platforms. Designed around workflows."
          subtitle="Factual metrics derived directly from production software built for clients and real business operations."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROOF_METRICS.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 border border-slate-800 text-center space-y-3 relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

              <span className="font-display font-black text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 block tracking-tight">
                {metric.value}
              </span>

              <h4 className="font-display font-bold text-base text-slate-100">{metric.label}</h4>
              <p className="text-xs font-mono text-slate-400">{metric.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
