import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Project } from '../data/projects';

interface ProjectGridProps {
  projects: Project[];
  className?: string;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 sm:gap-y-20 ${className}`}>
      {projects.map((project, idx) => {
        // Create an alternating rhythm of spacing and visual weight
        const isOffset = idx % 2 === 1;

        return (
          <div
            key={project.id}
            className={`${isOffset ? 'md:mt-12' : ''}`}
          >
            <ProjectCard project={project} />
          </div>
        );
      })}
    </div>
  );
};
