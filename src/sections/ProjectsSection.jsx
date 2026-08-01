import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import {
  ArrowRight,
  ExternalLink,
  Smartphone,
  Globe,
  Monitor,
  Cpu,
  Search,
  Sparkles,
  Layers,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Github } from '../components/ui/SocialIcons';
import { FEATURED_PROJECTS, ANDROID_PROJECTS, ALL_PROJECTS } from '../data/portfolioData';

// Mockup Components
import { MgBuildersMockup } from '../components/mockups/MgBuildersMockup';
import { EasyAuditMockup } from '../components/mockups/EasyAuditMockup';
import { EmployeeManagementMockup } from '../components/mockups/EmployeeManagementMockup';
import { FuelStationMockup } from '../components/mockups/FuelStationMockup';
import { FaceHelpMockup } from '../components/mockups/FaceHelpMockup';
import { GkStudioMockup } from '../components/mockups/GkStudioMockup';
import { KlsSystemMockup } from '../components/mockups/KlsSystemMockup';
import { AndroidAppMockups } from '../components/mockups/AndroidAppMockups';

export const ProjectsSection = ({ onSelectProject, externalCategory }) => {
  const [activeTab, setActiveTab] = useState('FEATURED');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  useEffect(() => {
    if (externalCategory) {
      setActiveTab(externalCategory);
    }
  }, [externalCategory]);

  // Reset selected project index when changing tabs
  useEffect(() => {
    setActiveProjectIndex(0);
  }, [activeTab]);

  // Helper to render mockup for featured & desktop projects
  const renderMockup = (id) => {
    switch (id) {
      case 'mg-builders':
        return <MgBuildersMockup />;
      case 'easy-audit':
        return <EasyAuditMockup />;
      case 'employee-management':
        return <EmployeeManagementMockup />;
      case 'fuel-station':
        return <FuelStationMockup />;
      case 'facehelp':
        return <FaceHelpMockup />;
      case 'gk-studio':
        return <GkStudioMockup />;
      case 'kls-system':
        return <KlsSystemMockup />;
      default:
        return null;
    }
  };

  // Master combined project dataset
  const allCategorizedProjects = useMemo(() => {
    const combined = [...ALL_PROJECTS];
    ANDROID_PROJECTS.forEach(androidApp => {
      if (!combined.some(p => p.id === androidApp.id)) {
        combined.push({
          ...androidApp,
          slug: androidApp.id,
          category: 'Android Applications',
          platform: 'Native Android',
          shortDesc: androidApp.title,
          techStack: androidApp.tech,
          badge: 'Native Kotlin App'
        });
      }
    });
    return combined;
  }, []);

  // Compute counts for tabs
  const tabCounts = useMemo(() => {
    return {
      FEATURED: FEATURED_PROJECTS.length,
      MOBILE: ANDROID_PROJECTS.length,
      WEB: allCategorizedProjects.filter(p => p.category === 'Web Applications').length,
      DESKTOP: allCategorizedProjects.filter(p => p.category === 'Desktop Applications').length,
      AI: allCategorizedProjects.filter(p => p.category === 'AI / Automation').length,
      ALL: allCategorizedProjects.length,
    };
  }, [allCategorizedProjects]);

  // Tab Definitions
  const tabs = [
    { id: 'FEATURED', label: 'Flagship Systems', icon: Sparkles, count: tabCounts.FEATURED },
    { id: 'MOBILE', label: 'Native Mobile', icon: Smartphone, count: tabCounts.MOBILE },
    { id: 'WEB', label: 'Web Platforms', icon: Globe, count: tabCounts.WEB },
    { id: 'DESKTOP', label: 'Desktop Apps', icon: Monitor, count: tabCounts.DESKTOP },
    { id: 'AI', label: 'AI & Automation', icon: Cpu, count: tabCounts.AI },
    { id: 'ALL', label: 'All Catalog', icon: Layers, count: tabCounts.ALL }
  ];

  // Filter projects list for the current tab and search query
  const currentTabProjects = useMemo(() => {
    let list = allCategorizedProjects;

    if (activeTab === 'FEATURED') {
      list = FEATURED_PROJECTS;
    } else if (activeTab === 'MOBILE') {
      list = ANDROID_PROJECTS.map(app => {
        const found = allCategorizedProjects.find(p => p.id === app.id);
        return found || {
          ...app,
          category: 'Android Applications',
          platform: 'Native Android',
          shortDesc: app.title,
          techStack: app.tech
        };
      });
    } else if (activeTab === 'WEB') {
      list = allCategorizedProjects.filter(p => p.category === 'Web Applications');
    } else if (activeTab === 'DESKTOP') {
      list = allCategorizedProjects.filter(p => p.category === 'Desktop Applications');
    } else if (activeTab === 'AI') {
      list = allCategorizedProjects.filter(p => p.category === 'AI / Automation');
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(p => {
        const nameMatch = p.name?.toLowerCase().includes(q);
        const titleMatch = p.title?.toLowerCase().includes(q);
        const descMatch = p.shortDesc?.toLowerCase().includes(q);
        const techMatch = (p.techStack || p.tech || []).some(t => t.toLowerCase().includes(q));
        return nameMatch || titleMatch || descMatch || techMatch;
      });
    }

    return list;
  }, [activeTab, searchQuery, allCategorizedProjects]);

  // Ensure active index is within bounds
  const safeIndex = activeProjectIndex >= currentTabProjects.length ? 0 : activeProjectIndex;
  const currentProject = currentTabProjects[safeIndex] || currentTabProjects[0];

  const handlePrevProject = () => {
    setActiveProjectIndex(prev => (prev === 0 ? currentTabProjects.length - 1 : prev - 1));
  };

  const handleNextProject = () => {
    setActiveProjectIndex(prev => (prev === currentTabProjects.length - 1 ? 0 : prev + 1));
  };

  // Determine if current tab should show single project with chips (all except ALL catalog when no search query)
  const isSingleProjectView = activeTab !== 'ALL' && !searchQuery;

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="02 / SELECTED WORK & PROJECTS"
          title="Software built around real workflows."
          subtitle="Filter and explore complete software solutions engineered across Web, Native Mobile, Desktop, and AI automation."
        />

        {/* Control Bar: Category Tabs & Search Input */}
        <div className="space-y-6 mb-10">
          {/* Tabs Navigation Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-2.5 rounded-xl text-xs font-mono font-medium transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(6,182,212,0.35)] scale-[1.02]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-cyan-400'}`} />
                  <span>{tab.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                      isActive ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by project name or tech (e.g., Kotlin, React, SQLite)..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Content Showcase Views */}
        <AnimatePresence mode="wait">
          {/* Empty Search Results State */}
          {currentTabProjects.length === 0 ? (
            <motion.div
              key="empty-state"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center py-16 px-4 rounded-3xl bg-slate-900/40 border border-slate-800 space-y-3"
            >
              <Search className="w-8 h-8 text-slate-500 mx-auto" />
              <h3 className="text-lg font-display font-semibold text-slate-200">No projects found</h3>
              <p className="text-xs font-mono text-slate-400 max-w-sm mx-auto">
                No software matching "{searchQuery}". Try clearing your search query or selecting a different tab.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 text-xs font-mono font-semibold transition-colors inline-block"
              >
                Clear Search Query
              </button>
            </motion.div>
          ) : isSingleProjectView && currentProject ? (
            /* SINGLE PROJECT SHOWCASE WITH CHIPS CONTROL (For FEATURED, MOBILE, WEB, DESKTOP, AI) */
            <motion.div
              key={`single-view-${activeTab}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Project Selection Chips Bar & Controller */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-slate-900/70 border border-slate-800">
                <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none max-w-full">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider shrink-0 px-2">
                    EXPLORE PROJECTS:
                  </span>
                  {currentTabProjects.map((proj, idx) => {
                    const isSelected = idx === safeIndex;
                    return (
                      <button
                        key={proj.id}
                        onClick={() => setActiveProjectIndex(idx)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold whitespace-nowrap transition-all duration-200 shrink-0 flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                            : 'bg-slate-950/60 hover:bg-slate-800 text-slate-400 border border-slate-800/80 hover:text-slate-200'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-cyan-400 animate-pulse' : 'bg-slate-600'}`} />
                        <span>{proj.name}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Arrow Controllers & Counter */}
                <div className="flex items-center gap-2 shrink-0 ml-auto pt-1 sm:pt-0">
                  <span className="text-xs font-mono text-slate-400 font-medium">
                    <span className="text-cyan-400 font-bold">0{safeIndex + 1}</span> / 0{currentTabProjects.length}
                  </span>
                  <button
                    onClick={handlePrevProject}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-cyan-400 border border-slate-700 transition-colors"
                    title="Previous Project"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextProject}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-cyan-400 border border-slate-700 transition-colors"
                    title="Next Project"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Single Project Detailed Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800/90 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  {/* Visual Mockup Area */}
                  <div className="lg:col-span-7 flex justify-center">
                    {activeTab === 'MOBILE' ? (
                      <AndroidAppMockups project={currentProject} />
                    ) : renderMockup(currentProject.id) ? (
                      renderMockup(currentProject.id)
                    ) : (
                      /* Generic Visual Card Container if custom mockup doesn't exist */
                      <div className="w-full h-64 sm:h-80 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/30 border border-slate-800 p-6 flex flex-col justify-between relative overflow-hidden group">
                        <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                          <span className="flex items-center gap-1.5 font-bold">
                            <Sparkles className="w-4 h-4" /> {currentProject.platform || currentProject.category}
                          </span>
                          <span>{currentProject.badge || 'Production Build'}</span>
                        </div>

                        <div className="space-y-2 my-auto">
                          <h4 className="text-2xl font-display font-extrabold text-slate-100">{currentProject.name}</h4>
                          <p className="text-xs font-mono text-cyan-300">{currentProject.title}</p>
                          <p className="text-xs font-sans text-slate-300 leading-relaxed line-clamp-3">{currentProject.shortDesc}</p>
                        </div>

                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                          {(currentProject.techStack || currentProject.tech || []).slice(0, 5).map(t => (
                            <Badge key={t} variant="cyan">{t}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Editorial & Technical Specs Column */}
                  <div className="lg:col-span-5 space-y-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="cyan">{currentProject.platform || currentProject.category}</Badge>
                      {currentProject.badge && <Badge variant="accent">{currentProject.badge}</Badge>}
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-100">{currentProject.name}</h3>
                      <p className="text-sm font-mono text-cyan-400 mt-1 font-semibold">{currentProject.title}</p>
                    </div>

                    <p className="text-sm font-sans text-slate-300 leading-relaxed">
                      {currentProject.shortDesc}
                    </p>

                    {/* Key Highlights */}
                    {currentProject.highlights && currentProject.highlights.length > 0 && (
                      <div className="space-y-2 pt-2 border-t border-slate-800">
                        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Key Engineering Highlights</span>
                        {currentProject.highlights.slice(0, 4).map((h, hIdx) => (
                          <div key={hIdx} className="text-xs font-mono text-slate-300 flex items-start gap-2">
                            <span className="text-cyan-400 font-bold">•</span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {(currentProject.techStack || currentProject.tech || []).map((tech) => (
                        <Badge key={tech} variant="default">{tech}</Badge>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
                      <Button onClick={() => onSelectProject(currentProject)} variant="primary" size="md" icon={ArrowRight}>
                        View Project Details
                      </Button>

                      {currentProject.liveUrl && (
                        <Button href={currentProject.liveUrl} target="_blank" rel="noopener noreferrer" variant="secondary" size="md" icon={ExternalLink}>
                          Live Application
                        </Button>
                      )}

                      {currentProject.githubUrl && (
                        <Button href={currentProject.githubUrl} target="_blank" rel="noopener noreferrer" variant="outline" size="md" icon={Github}>
                          GitHub
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ) : (
            /* ALL CATALOG GRID VIEW (For 'ALL' catalog or when searching) */
            <motion.div
              key="all-catalog-grid-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentTabProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between border border-slate-800 space-y-4 group hover:border-cyan-500/40 transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="cyan">{project.platform || project.category}</Badge>
                      {project.badge && <Badge variant="accent">{project.badge}</Badge>}
                    </div>

                    <h3 className="text-xl font-display font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 font-semibold">{project.title}</p>
                    <p className="text-xs font-sans text-slate-300 leading-relaxed">{project.shortDesc}</p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-slate-800">
                    <div className="flex flex-wrap gap-1.5">
                      {(project.techStack || project.tech || []).map((tech) => (
                        <Badge key={tech} variant="default">{tech}</Badge>
                      ))}
                    </div>

                    <button
                      onClick={() => onSelectProject(project)}
                      className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-cyan-400 border border-slate-800 text-xs font-mono font-semibold transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>View Project Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
