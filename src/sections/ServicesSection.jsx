import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { ArrowRight, Globe, Smartphone, Monitor, Cpu, Wrench } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

export const ServicesSection = () => {
  const iconMap = {
    Globe,
    Smartphone,
    Monitor,
    Cpu,
    Wrench
  };

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="05 / SERVICES"
          title="Have an idea? Let's turn it into software."
          subtitle="Freelance software engineering services tailored to startups, small businesses, and enterprise teams needing complete custom applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SERVICES.map((srv, idx) => {
            const IconComponent = iconMap[srv.icon] || Globe;
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between space-y-4 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300 shadow-md mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-display font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-sm font-sans text-slate-300 leading-relaxed mt-2">{srv.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all"
                  >
                    <span>Discuss Requirements</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Button href="#contact" variant="primary" size="lg" icon={ArrowRight}>
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};
