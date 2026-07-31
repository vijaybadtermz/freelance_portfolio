import React from 'react';
import { Modal } from '../components/ui/Modal';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ExternalLink, CheckCircle2, Cpu, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import { Github } from '../components/ui/SocialIcons';
import { MgBuildersMockup } from '../components/mockups/MgBuildersMockup';
import { EasyAuditMockup } from '../components/mockups/EasyAuditMockup';
import { EmployeeManagementMockup } from '../components/mockups/EmployeeManagementMockup';
import { FuelStationMockup } from '../components/mockups/FuelStationMockup';
import { FaceHelpMockup } from '../components/mockups/FaceHelpMockup';
import { GkStudioMockup } from '../components/mockups/GkStudioMockup';
import { KlsSystemMockup } from '../components/mockups/KlsSystemMockup';

export const CaseStudyModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  const renderMockup = () => {
    switch (project.id) {
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
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-8 pr-2">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="cyan">{project.platform || project.category}</Badge>
            {project.badge && <Badge variant="accent">{project.badge}</Badge>}
          </div>

          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-100">{project.name}</h2>
          <p className="text-base font-sans text-cyan-400 font-medium">{project.title}</p>
          <p className="text-sm text-slate-300 leading-relaxed font-sans">{project.shortDesc}</p>
        </div>

        {/* Live Visual Interactive Mockup */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-2 shadow-2xl">
          {renderMockup()}
        </div>

        {/* Deep Case Study Information */}
        {project.caseStudy && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h4 className="font-mono text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> Operational Problem
              </h4>
              <p className="text-xs font-sans text-slate-300 leading-relaxed">{project.caseStudy.problem}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h4 className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Engineered Solution
              </h4>
              <p className="text-xs font-sans text-slate-300 leading-relaxed">{project.caseStudy.solution}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h4 className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-4 h-4" /> Stack Architecture
              </h4>
              <p className="text-xs font-sans text-slate-300 leading-relaxed">{project.caseStudy.architecture}</p>
            </div>
          </div>
        )}

        {/* Key Engineering Highlights */}
        <div className="space-y-3">
          <h3 className="text-base font-display font-semibold text-slate-100 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400" /> Engineering & Feature Highlights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900/40 border border-slate-800 text-xs font-mono text-slate-300 flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold mt-0.5">0{idx + 1}.</span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack List */}
        <div className="space-y-3 pt-4 border-t border-slate-800">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack?.map((tech) => (
              <Badge key={tech} variant="default">{tech}</Badge>
            ))}
          </div>
        </div>

        {/* External Actions (Only rendered if URL exists) */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
          {project.liveUrl && (
            <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer" variant="primary" size="sm" icon={ExternalLink}>
              Live Application
            </Button>
          )}
          {project.githubUrl && (
            <Button href={project.githubUrl} target="_blank" rel="noopener noreferrer" variant="secondary" size="sm" icon={Github}>
              GitHub Repository
            </Button>
          )}
          <Button onClick={onClose} variant="ghost" size="sm">
            Close Case Study
          </Button>
        </div>
      </div>
    </Modal>
  );
};
