import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Globe, Smartphone, Monitor, Cpu, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { CAPABILITIES } from '../data/portfolioData';

export const AboutSection = ({ onSelectCapability }) => {
  const iconMap = {
    web: Globe,
    android: Smartphone,
    desktop: Monitor,
    ai: Cpu
  };

  const workflowTypes = [
    "Business workflow platforms",
    "Enterprise-style ERP systems",
    "Android applications",
    "Electron desktop software",
    "AI/OCR tools",
    "Mapping & spatial navigation",
    "Billing & GST accounting workflows",
    "Inventory & QR hierarchy",
    "Role-based access systems (RBAC)",
    "Reporting & PDF document generation",
    "Offline / Local-first software"
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="01 / ABOUT"
          title="One developer. Multiple platforms. Real products."
          subtitle="I work across the complete application lifecycle—from UI architecture and frontend design to backend APIs, database modeling, role authentication, hardware integrations, desktop packaging, and cloud deployment."
        />

        {/* 4 Clickable Visual Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CAPABILITIES.map((cap, idx) => {
            const IconComponent = iconMap[cap.id] || Globe;
            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => onSelectCapability && onSelectCapability(cap)}
                className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between space-y-4 group cursor-pointer border border-slate-800/80 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectCapability && onSelectCapability(cap);
                  }
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400/80 bg-cyan-950/40 border border-cyan-500/20 px-2 py-0.5 rounded-full flex items-center gap-1 group-hover:border-cyan-400 transition-colors">
                      <Sparkles className="w-3 h-3" /> Explore Details
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400/90 mt-1 mb-3">{cap.tech}</p>
                  <p className="text-sm font-sans text-slate-300 leading-relaxed">{cap.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-cyan-300 transition-colors">
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Real Work Capabilities Checklist Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-950 to-slate-900/90 border border-slate-800 shadow-2xl"
        >
          <div className="mb-6">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">Production Workflow Scope</span>
            <h3 className="text-2xl font-display font-bold text-slate-100">
              Built for production demand, not tutorial CRUDs.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {workflowTypes.map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
