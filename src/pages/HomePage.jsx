import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../sections/HeroSection';
import { TechStrip } from '../sections/TechStrip';
import { AboutSection } from '../sections/AboutSection';
import { FeaturedProjects } from '../sections/FeaturedProjects';
import { AndroidShowcase } from '../sections/AndroidShowcase';
import { ProjectExplorer } from '../sections/ProjectExplorer';
import { ExpertiseSection } from '../sections/ExpertiseSection';
import { ProcessSection } from '../sections/ProcessSection';
import { ProofOfWorkSection } from '../sections/ProofOfWorkSection';
import { ServicesSection } from '../sections/ServicesSection';
import { RecruiterSection } from '../sections/RecruiterSection';
import { ContactSection } from '../sections/ContactSection';
import { CaseStudyModal } from './CaseStudyModal';

export const HomePage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-200 selection:bg-cyan-500/20 selection:text-cyan-300">
      <Navbar activeSection={activeSection} />

      <main>
        <HeroSection />
        <TechStrip />
        <AboutSection />
        <FeaturedProjects onSelectProject={(project) => setSelectedProject(project)} />
        <AndroidShowcase />
        <ProjectExplorer onSelectProject={(project) => setSelectedProject(project)} />
        <ExpertiseSection />
        <ProcessSection />
        <ProofOfWorkSection />
        <ServicesSection />
        <RecruiterSection />
        <ContactSection />
      </main>

      <Footer />

      <CaseStudyModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
