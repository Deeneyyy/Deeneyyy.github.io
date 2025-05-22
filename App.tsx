
import React from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { DESIGNER_NAME, NAV_LINKS } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans antialiased">
      <Header designerName={DESIGNER_NAME} navLinks={NAV_LINKS} />
      <main>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer designerName={DESIGNER_NAME} />
    </div>
  );
};

export default App;
