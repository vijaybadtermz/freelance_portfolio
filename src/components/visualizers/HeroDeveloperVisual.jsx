import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Monitor, Cpu, Sparkles, Terminal, ShieldCheck, Code2, Zap, CheckCircle2 } from 'lucide-react';
import portraitImg from '../../assets/images/vijay.jpeg';

export const HeroDeveloperVisual = () => {
  const [activeTab, setActiveTab] = useState('all');

  const platforms = [
    { id: 'web', name: 'Web Apps', icon: Globe, color: 'from-cyan-500 to-blue-600', text: 'React • Node • MongoDB' },
    { id: 'android', name: 'Android Native', icon: Smartphone, color: 'from-emerald-500 to-teal-600', text: 'Kotlin • Compose • Room' },
    { id: 'desktop', name: 'Desktop Systems', icon: Monitor, color: 'from-indigo-500 to-purple-600', text: 'Electron • SQLite • NSIS' },
    { id: 'ai', name: 'AI & Automation', icon: Cpu, color: 'from-amber-500 to-rose-600', text: 'Gemini AI • Python • OCR' }
  ];

  return (
    <div className="relative w-full max-w-[540px] mx-auto py-4 px-2 select-none">
      {/* Deep Ambient Glowing Backdrop Rings */}
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-indigo-500/15 to-emerald-500/20 rounded-3xl blur-2xl opacity-60 pointer-events-none animate-pulse" />

      {/* Main Glassmorphic Profile & Visual Card */}
      <div className="relative z-10 rounded-3xl bg-[#0b0f19]/90 border border-slate-700/80 p-5 sm:p-7 shadow-[0_0_50px_rgba(6,182,212,0.15)] backdrop-blur-xl space-y-6">

        {/* Top Header Status Row */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-mono text-xs font-semibold text-emerald-400 tracking-wide uppercase">
              Full-Stack Developer
            </span>
          </div>
          <div className="px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-[11px] flex items-center gap-1.5">
            <Zap className="w-3 h-3 text-cyan-400" />
            <span>4 Platforms Ready</span>
          </div>
        </div>

        {/* Central Developer Photo Frame & Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
          {/* Portrait Image Frame */}
          <div className="sm:col-span-5 relative group mx-auto sm:mx-0">
            {/* Gradient Glow Outline */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-emerald-400 opacity-70 group-hover:opacity-100 transition-opacity blur-[6px]" />

            <div className="relative w-44 h-52 sm:w-full sm:h-56 rounded-2xl overflow-hidden border-2 border-slate-800 bg-slate-950 shadow-2xl">
              <img
                src={portraitImg}
                alt="Vijayakumar K Developer Portrait"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />

              {/* Photo Overlay Badge */}
              <div className="absolute bottom-2 left-2 right-2 p-2 rounded-xl bg-slate-950/85 border border-slate-800/80 backdrop-blur-md text-center">
                <span className="font-display font-bold text-xs text-slate-100 block">Vijayakumar K</span>
                <span className="text-[10px] font-mono text-cyan-400 block">Freelance Engineer</span>
              </div>
            </div>
          </div>

          {/* Right Column Core Stats & Live Terminal */}
          <div className="sm:col-span-7 space-y-3">
            {/* Live Terminal Snippet Box */}
            <div className="p-3.5 rounded-xl bg-[#060911] border border-slate-800 font-mono text-xs text-slate-300 shadow-inner space-y-1.5">
              <div className="flex items-center justify-between text-[10px] text-slate-500 border-b border-slate-800/80 pb-1 mb-2">
                <span className="flex items-center gap-1 text-cyan-400"><Terminal className="w-3 h-3" /> developer.config.ts</span>
                <span className="text-emerald-400">● Active</span>
              </div>
              <p className="text-[11px] text-slate-400">
                <span className="text-purple-400">const</span> developer = &#123;
              </p>
              <p className="pl-3 text-[11px] text-slate-300">
                name: <span className="text-emerald-300">"Vijayakumar K"</span>,
              </p>
              <p className="pl-3 text-[11px] text-slate-300">
                platforms: [<span className="text-cyan-300">"Web"</span>, <span className="text-cyan-300 font-medium">"Android"</span>, <span className="text-cyan-300 font-medium">"Desktop"</span>, <span className="text-cyan-300 font-medium">"AI"</span>],
              </p>
              <p className="pl-3 text-[11px] text-slate-300">
                focus: <span className="text-amber-300">"Complete Products"</span>
              </p>
              <p className="text-[11px] text-slate-400">&#125;;</p>
            </div>

            {/* Quick Proof Badges */}
            <div className="grid grid-cols-2 gap-2 text-center font-mono text-[11px]">
              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300">
                <span className="text-cyan-400 font-bold block text-sm">40+</span>
                <span className="text-[10px] text-slate-400">Screens Platform</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300">
                <span className="text-emerald-400 font-bold block text-sm">13 Roles</span>
                <span className="text-[10px] text-slate-400">ERP System</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Platform Stack Tabs */}
        <div className="space-y-2 pt-2 border-t border-slate-800/80">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
            Platform Capabilities
          </span>
          <div className="grid grid-cols-2 gap-2">
            {platforms.map((p) => {
              const IconComp = p.icon;
              return (
                <div
                  key={p.id}
                  className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center gap-2.5 hover:border-cyan-500/40 transition-colors"
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${p.color} text-white shadow-md`}>
                    <IconComp className="w-3.5 h-3.5" />
                  </div>
                  <div className="truncate">
                    <span className="font-display font-bold text-xs text-slate-200 block truncate">{p.name}</span>
                    <span className="text-[10px] font-mono text-slate-400 block truncate">{p.text}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Guarantee */}
        <div className="flex items-center justify-between pt-1 text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1 text-cyan-400">
            <CheckCircle2 className="w-3.5 h-3.5" /> Production Ready
          </span>
          <span className="text-slate-500">Web • Android • Desktop • AI</span>
        </div>
      </div>
    </div>
  );
};
