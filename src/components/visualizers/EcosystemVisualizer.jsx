import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Monitor, Cpu, Code2, Database, ShieldCheck, Terminal } from 'lucide-react';

export const EcosystemVisualizer = () => {
  const nodes = [
    {
      id: 'web',
      label: 'WEB',
      icon: Globe,
      sub: 'React • Node • MongoDB',
      color: 'from-cyan-500 to-blue-600',
      glow: 'rgba(6,182,212,0.25)',
      pos: 'top-2 right-4 md:top-6 md:right-8'
    },
    {
      id: 'android',
      label: 'ANDROID',
      icon: Smartphone,
      sub: 'Kotlin • Compose • Room',
      color: 'from-emerald-500 to-teal-600',
      glow: 'rgba(16,185,129,0.25)',
      pos: 'bottom-4 right-2 md:bottom-8 md:right-6'
    },
    {
      id: 'desktop',
      label: 'DESKTOP',
      icon: Monitor,
      sub: 'Electron • SQLite • NSIS',
      color: 'from-indigo-500 to-purple-600',
      glow: 'rgba(99,102,241,0.25)',
      pos: 'top-6 left-2 md:top-10 md:left-6'
    },
    {
      id: 'ai',
      label: 'AI / OCR',
      icon: Cpu,
      sub: 'Gemini • Python • OCR',
      color: 'from-amber-500 to-rose-600',
      glow: 'rgba(245,158,11,0.25)',
      pos: 'bottom-2 left-4 md:bottom-6 md:left-10'
    }
  ];

  return (
    <div className="relative w-full aspect-square max-w-[520px] mx-auto flex items-center justify-center p-4">
      {/* Background Orbit Rings */}
      <div className="absolute inset-4 rounded-full border border-slate-800/80 animate-[spin_40s_linear_infinite]" />
      <div className="absolute inset-16 rounded-full border border-dashed border-slate-700/40 animate-[spin_60s_linear_infinite_reverse]" />

      {/* Connection SVG Canvas Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-cyan-500/20" strokeWidth="1.5">
        <line x1="50%" y1="50%" x2="80%" y2="20%" strokeDasharray="4 4" className="animate-[pulse_3s_infinite]" />
        <line x1="50%" y1="50%" x2="80%" y2="80%" strokeDasharray="4 4" className="animate-[pulse_4s_infinite]" />
        <line x1="50%" y1="50%" x2="20%" y2="20%" strokeDasharray="4 4" className="animate-[pulse_2.5s_infinite]" />
        <line x1="50%" y1="50%" x2="20%" y2="80%" strokeDasharray="4 4" className="animate-[pulse_3.5s_infinite]" />
      </svg>

      {/* Central Hub Core VK Node */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            '0 0 20px rgba(6,182,212,0.2)',
            '0 0 40px rgba(6,182,212,0.4)',
            '0 0 20px rgba(6,182,212,0.2)'
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-20 w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-2 border-cyan-500/40 flex flex-col items-center justify-center shadow-2xl group cursor-pointer"
      >
        <div className="absolute inset-0 rounded-3xl bg-cyan-500/10 blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
        <div className="flex items-center gap-1 font-display font-black text-2xl sm:text-3xl tracking-wider text-cyan-400">
          <span>VK</span>
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        </div>
        <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase mt-1">Full-Stack Core</span>
      </motion.div>

      {/* Outer Ecosystem Platform Nodes */}
      {nodes.map((node, index) => {
        const IconComponent = node.icon;
        return (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: index * 0.15 },
              scale: { duration: 0.5, delay: index * 0.15 },
              y: { duration: 3 + index, repeat: Infinity, ease: 'easeInOut' }
            }}
            className={`absolute ${node.pos} z-10`}
          >
            <div className="glass-card glass-card-hover p-3 sm:p-4 rounded-2xl flex items-center gap-3 border border-slate-700/60 shadow-lg">
              <div className={`p-2.5 sm:p-3 rounded-xl bg-gradient-to-br ${node.color} text-white shadow-md`}>
                <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-bold text-xs sm:text-sm text-slate-100 tracking-wide">{node.label}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </div>
                <p className="text-[10px] sm:text-xs font-mono text-slate-400 mt-0.5">{node.sub}</p>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Sub-signals Floating Code Chips */}
      <motion.div
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-1/2 left-0 -translate-y-1/2 text-[10px] font-mono text-cyan-400/80 bg-slate-900/80 px-2 py-1 rounded border border-cyan-500/20 backdrop-blur-sm hidden sm:block"
      >
        <span className="flex items-center gap-1"><Terminal className="w-3 h-3" /> REST API / JWT</span>
      </motion.div>

      <motion.div
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
        className="absolute top-1/2 right-0 -translate-y-1/2 text-[10px] font-mono text-emerald-400/80 bg-slate-900/80 px-2 py-1 rounded border border-emerald-500/20 backdrop-blur-sm hidden sm:block"
      >
        <span className="flex items-center gap-1"><Database className="w-3 h-3" /> SQLite / Room Sync</span>
      </motion.div>
    </div>
  );
};
