
import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { PROJECTS_DATA } from '../constants';

const ProjectsSection: React.FC = () => {
  return (
    <Section id="projects" title="My Projects" className="bg-gray-900">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {PROJECTS_DATA.length === 0 && (
        <p className="text-center text-gray-400">More projects coming soon!</p>
      )}
    </Section>
  );
};

export default ProjectsSection;
