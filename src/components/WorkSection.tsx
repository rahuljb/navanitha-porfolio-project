import React from 'react';
import { ProjectCard } from './ProjectCard';
import { selectedWorks } from '../data/projects';

export const WorkSection: React.FC = () => {
  return (
    <section id="work" className="relative w-full py-28 sm:py-40 px-6 sm:px-10 lg:px-12 bg-[#0A0A0A] border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-[#1E1E1E]">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#C96B5A] uppercase block mb-1">
              04 — SELECTED WORK
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif text-[#F4F1EB] font-normal tracking-tight">
              SELECTED WORK
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-mono text-[#8A8A8A] max-w-sm sm:text-right">
            A collection of stories, ideas and visual experiences.
          </p>
        </div>

        {/* Alternating Editorial Projects Layout */}
        <div className="space-y-4">
          {selectedWorks.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              reversed={idx % 2 === 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
