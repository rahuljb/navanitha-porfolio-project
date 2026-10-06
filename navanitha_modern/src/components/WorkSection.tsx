import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { selectedWorks } from '../data/projects';

export const WorkSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="work"
      className="relative w-full overflow-hidden bg-[#0A0A0A] py-28 sm:py-36 lg:py-44 px-6 sm:px-10 lg:px-12 border-b border-[#1A1A1A]"
    >
      <div className="max-w-[1380px] mx-auto">
        <header className="mb-16 sm:mb-20 lg:mb-24">
          <div className="flex items-end justify-between gap-8 border-t border-[#252525] pt-5">
            <div className="flex items-start gap-5 sm:gap-8">
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.22em] text-[#C96B5A] pt-1">
                04
              </span>
              <div>
                <p className="text-[10px] sm:text-xs font-mono tracking-[0.24em] text-[#777] uppercase mb-4">
                  Selected projects / 2024—2025
                </p>
                <h2 className="text-5xl sm:text-7xl lg:text-[7.5rem] leading-[0.82] font-serif font-normal tracking-[-0.045em] text-[#F4F1EB]">
                  SELECTED
                  <br />
                  <span className="italic text-[#BEBBB4]">WORK</span>
                </h2>
              </div>
            </div>
          </div>
        </header>

        {/* Clean, aligned 3-up gallery. Cards keep one consistent frame so the section never feels uneven. */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-500 ${
            hoveredIndex !== null ? 'is-spotlighting' : ''
          }`}
        >
          {selectedWorks.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              hoveredIndex={hoveredIndex}
              onHover={() => setHoveredIndex(idx)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>

        <div className="mt-16 sm:mt-20 pt-5 border-t border-[#252525] flex items-center justify-between">
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-[#666] uppercase">
          </span>
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-[#666] uppercase">
          </span>
        </div>
      </div>
    </section>
  );
};
