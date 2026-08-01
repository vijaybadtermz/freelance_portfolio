import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../sections/HeroSection';
import { TechStrip } from '../sections/TechStrip';
import { AboutSection } from '../sections/AboutSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { ExpertiseSection } from '../sections/ExpertiseSection';
import { ProcessSection } from '../sections/ProcessSection';
import { ProofOfWorkSection } from '../sections/ProofOfWorkSection';
import { ServicesSection } from '../sections/ServicesSection';
import { RecruiterSection } from '../sections/RecruiterSection';
import { ContactSection } from '../sections/ContactSection';
import { CaseStudyModal } from './CaseStudyModal';
import { CapabilityModal } from './CapabilityModal';

export const HomePage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCapability, setSelectedCapability] = useState(null);
  const [activeProjectsTab, setActiveProjectsTab] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  const tickingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const sections = ['home', 'about', 'projects', 'expertise', 'experience', 'contact'];
          const scrollPos = window.scrollY + 200;

          for (const sectionId of sections) {
            const element = document.getElementById(sectionId);
            if (element) {
              const top = element.offsetTop;
              const height = element.offsetHeight;
              if (scrollPos >= top && scrollPos < top + height) {
                setActiveSection(sectionId);
                break;
              }
            }
          }
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreCategory = (categoryTab) => {
    setActiveProjectsTab(categoryTab);
    const projectsElem = document.getElementById('projects');
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-200 selection:bg-cyan-500/20 selection:text-cyan-300 overflow-x-hidden">
      <Navbar activeSection={activeSection} />

      <main className="overflow-x-hidden">
        <HeroSection />
        <TechStrip />
        <AboutSection onSelectCapability={(cap) => setSelectedCapability(cap)} />
        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
          externalCategory={activeProjectsTab}
        />
        <ExpertiseSection />
        <ProcessSection />
        <ProofOfWorkSection />
        <ServicesSection />
        <RecruiterSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive About Capability Modal */}
      <CapabilityModal
        capability={selectedCapability}
        isOpen={Boolean(selectedCapability)}
        onClose={() => setSelectedCapability(null)}
        onExploreCategory={handleExploreCategory}
      />
    </div>
  );
};
