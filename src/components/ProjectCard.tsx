import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  reversed?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, reversed = false }) => {
  return (
    <article
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center py-12 sm:py-20 border-b border-[#1A1A1A] last:border-b-0 ${
        reversed ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Large Visual Container */}
      <div className={`lg:col-span-7 ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
        <Link
          to={`/project/${project.id}`}
          className="group block relative aspect-[16/10] w-full overflow-hidden bg-[#111111] border border-[#222222]"
          aria-label={`Explore ${project.title}`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-[1.03]"
            loading="lazy"
          />
          {/* Subtle Scrim */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
          
          <div className="absolute top-4 left-4 text-xs font-mono text-[#8A8A8A] bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-sm border border-white/10">
            {project.number}
          </div>
        </Link>
      </div>

      {/* Content Block */}
      <div className={`lg:col-span-5 space-y-6 ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-xs font-mono text-[#8A8A8A] uppercase tracking-widest">
            <span className="text-[#C96B5A]">{project.number}</span>
            <span aria-hidden="true">·</span>
            <span>{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          <h3 className="text-3xl sm:text-5xl font-serif font-normal text-[#F4F1EB] tracking-tight leading-tight">
            <Link
              to={`/project/${project.id}`}
              className="hover:text-[#C96B5A] transition-colors"
            >
              {project.title}
            </Link>
          </h3>
        </div>

        <p className="text-sm sm:text-base text-[#8A8A8A] font-light leading-relaxed">
          {project.description}
        </p>

        <div className="pt-2">
          <Link
            to={`/project/${project.id}`}
            className="group/btn inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#F4F1EB] hover:text-[#C96B5A] transition-colors"
          >
            <span>Explore Project</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1.5 text-[#C96B5A]" />
          </Link>
        </div>
      </div>
    </article>
  );
};
