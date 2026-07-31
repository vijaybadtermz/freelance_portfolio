import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Download, Code2, Globe, Smartphone, Monitor } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { HeroDeveloperVisual } from '../components/visualizers/HeroDeveloperVisual';
import { PERSONAL_INFO } from '../data/portfolioData';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden">
      {/* Background Radial Glow & Grid Overlay */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span className="text-xs font-mono text-slate-300">{PERSONAL_INFO.availability}</span>
            </motion.div>

            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-cyan-400 uppercase flex items-center gap-2"
            >
              <span className="h-px w-8 bg-cyan-400/60" />
              {PERSONAL_INFO.heroEyebrow}
            </motion.div>

            {/* Primary Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-100 tracking-tight leading-[1.1]"
            >
              Building software from <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                idea → interface → production.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-2xl"
            >
              {PERSONAL_INFO.heroDescription}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button href="#projects" variant="primary" size="lg" icon={ArrowRight}>
                Explore My Work
              </Button>

              <Button href="#contact" variant="secondary" size="lg">
                Start a Project
              </Button>

              <Button href={PERSONAL_INFO.resumeUrl} variant="ghost" size="lg" icon={Download}>
                View Resume
              </Button>
            </motion.div>

            {/* Key Capability Chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400"
            >
              <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-cyan-400" /> Web SaaS</span>
              <span className="flex items-center gap-1.5"><Smartphone className="w-4 h-4 text-emerald-400" /> Native Android</span>
              <span className="flex items-center gap-1.5"><Monitor className="w-4 h-4 text-indigo-400" /> Electron Desktop</span>
              <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-amber-400" /> Gemini AI</span>
            </motion.div>
          </div>

          {/* Right Column Modern Developer Photo Card Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-first lg:order-last lg:col-span-5 relative"
          >
            <HeroDeveloperVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
