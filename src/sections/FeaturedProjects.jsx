import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ArrowRight, ExternalLink, Cpu, Layers } from 'lucide-react';
import { Github } from '../components/ui/SocialIcons';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { MgBuildersMockup } from '../components/mockups/MgBuildersMockup';
import { EasyAuditMockup } from '../components/mockups/EasyAuditMockup';
import { EmployeeManagementMockup } from '../components/mockups/EmployeeManagementMockup';
import { FuelStationMockup } from '../components/mockups/FuelStationMockup';
import { FaceHelpMockup } from '../components/mockups/FaceHelpMockup';
import { GkStudioMockup } from '../components/mockups/GkStudioMockup';
import { KlsSystemMockup } from '../components/mockups/KlsSystemMockup';

export const FeaturedProjects = ({ onSelectProject }) => {
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

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="02 / SELECTED WORK"
          title="Software built around real workflows."
          subtitle="Case studies highlighting deep application architecture, multi-role permissions, offline databases, hardware printing, and computer vision."
        />

        <div className="space-y-16 sm:space-y-24">
          {FEATURED_PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`glass-card rounded-3xl p-6 sm:p-8 border border-slate-800/90 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  project.id === 'mg-builders' ? 'border-cyan-500/40 shadow-[0_0_40px_rgba(6,182,212,0.1)]' : ''
                }`}
              >
                {/* Visual Product Mockup Area */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  {renderMockup(project.id)}
                </div>

                {/* Editorial Content Column */}
                <div className={`lg:col-span-5 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="cyan">{project.platform}</Badge>
                    {project.badge && <Badge variant="accent">{project.badge}</Badge>}
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-100">{project.name}</h3>
                    <p className="text-sm font-mono text-cyan-400 mt-1 font-semibold">{project.title}</p>
                  </div>

                  <p className="text-sm font-sans text-slate-300 leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Key Highlights</span>
                    {project.highlights.slice(0, 4).map((h, hIdx) => (
                      <div key={hIdx} className="text-xs font-mono text-slate-300 flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="default">{tech}</Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
                    <Button onClick={() => onSelectProject(project)} variant="primary" size="md" icon={ArrowRight}>
                      View Case Study
                    </Button>

                    {project.liveUrl && (
                      <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer" variant="secondary" size="md" icon={ExternalLink}>
                        Live Demo
                      </Button>
                    )}

                    {project.githubUrl && (
                      <Button href={project.githubUrl} target="_blank" rel="noopener noreferrer" variant="outline" size="md" icon={Github}>
                        GitHub
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
