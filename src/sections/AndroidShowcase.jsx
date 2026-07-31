import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { Smartphone, CheckCircle2 } from 'lucide-react';
import { ANDROID_PROJECTS } from '../data/portfolioData';
import { AndroidAppMockups } from '../components/mockups/AndroidAppMockups';

export const AndroidShowcase = () => {
  return (
    <section className="py-20 md:py-28 relative bg-[#05070c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="NATIVE MOBILE ENGINEERING"
          title="Android Applications in Kotlin & Jetpack Compose."
          subtitle="Modern Android apps engineered with MVVM architecture, offline Room databases, Mapbox turn-by-turn navigation, and real-time Firestore sync."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ANDROID_PROJECTS.map((app, idx) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-3xl p-6 flex flex-col justify-between border border-slate-800/90 shadow-2xl space-y-6 group hover:border-emerald-500/40 transition-all duration-300"
            >
              {/* Phone Device Mockup Wrapper */}
              <div className="my-2">
                <AndroidAppMockups project={app} />
              </div>

              {/* Application Details */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-emerald-400" />
                  <h4 className="font-display font-bold text-lg text-slate-100">{app.name}</h4>
                </div>
                <p className="text-xs font-mono text-emerald-400 font-semibold">{app.title}</p>

                <div className="space-y-1.5 pt-2 border-t border-slate-800">
                  {app.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="text-xs font-mono text-slate-300 flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3">
                  {app.tech.map((t) => (
                    <Badge key={t} variant="emerald">{t}</Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
