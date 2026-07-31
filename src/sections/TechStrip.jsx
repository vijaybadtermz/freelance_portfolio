import React from 'react';
import { TECH_STRIP } from '../data/portfolioData';

export const TechStrip = () => {
  // Duplicate array for seamless infinite looping scroll
  const items = [...TECH_STRIP, ...TECH_STRIP];

  return (
    <section className="py-6 bg-[#05070c] border-y border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-3 text-center">
        <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">
          Multi-Platform Technologies & Frameworks Delivered
        </span>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left/Right Edge Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#05070c] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#05070c] to-transparent z-10 pointer-events-none" />

        <div className="animate-ticker flex items-center gap-6 sm:gap-8">
          {items.map((tech, idx) => (
            <div
              key={idx}
              className="px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 font-mono text-xs font-medium tracking-wide flex items-center gap-2 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors cursor-default whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
