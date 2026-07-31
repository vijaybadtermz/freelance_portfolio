import React from 'react';

export const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-slate-800/80 text-slate-300 border-slate-700/60',
    cyan: 'bg-cyan-950/40 text-cyan-300 border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.15)]',
    indigo: 'bg-indigo-950/40 text-indigo-300 border-indigo-500/30',
    emerald: 'bg-emerald-950/40 text-emerald-300 border-emerald-500/30',
    amber: 'bg-amber-950/40 text-amber-300 border-amber-500/30',
    accent: 'bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 text-cyan-300 border-cyan-400/30'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium rounded-full border transition-colors ${variants[variant] || variants.default} ${className}`}
    >
      {children}
    </span>
  );
};
