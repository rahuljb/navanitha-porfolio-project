import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { selectedWorks } from '../data/projects';
import { ContactSection } from '../components/ContactSection';

export const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const currentIndex = selectedWorks.findIndex((p) => p.id === id);
  const project = selectedWorks[currentIndex];

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center pt-28 px-6 text-center space-y-6 bg-[#0A0A0A] text-[#F4F1EB]">
        <h1 className="text-4xl font-serif">Project Not Found</h1>
        <p className="text-sm text-[#8A8A8A]">The requested project could not be found.</p>
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C96B5A] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO SELECTED WORK</span>
        </Link>
      </div>
    );
  }

  const prevProject = selectedWorks[(currentIndex - 1 + selectedWorks.length) % selectedWorks.length];
  const nextProject = selectedWorks[(currentIndex + 1) % selectedWorks.length];

  return (
    <div className="pt-28 bg-[#0A0A0A] text-[#F4F1EB] space-y-20 sm:space-y-28">
      
      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-8">
        
        {/* Back Link */}
        <div>
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8A8A8A] hover:text-[#F4F1EB] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO SELECTED WORK</span>
          </Link>
        </div>

        {/* Project Title Block */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-3 text-xs font-mono text-[#8A8A8A] uppercase tracking-widest">
            <span className="text-[#C96B5A]">{project.number}</span>
            <span aria-hidden="true">·</span>
            <span>{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#F4F1EB] font-normal tracking-tight leading-tight">
            {project.title}
          </h1>
        </div>

        {/* Hero Visual / YouTube Embed */}
        <div className="w-full">
          {project.youtubeId ? (
            <div className="relative aspect-video w-full overflow-hidden bg-[#111111] border border-[#222222]">
              <iframe
                src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=0&rel=0&modestbranding=1`}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          ) : (
            <div className="aspect-[16/9] w-full overflow-hidden bg-[#111111] border border-[#222222]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Project Information & Role */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 border-t border-[#1C1C1C]">
          
          <div className="lg:col-span-8 space-y-6">
            <span className="text-xs font-mono tracking-widest text-[#8A8A8A] uppercase block">
              ABOUT THE PROJECT
            </span>
            <p className="text-xl sm:text-2xl font-serif text-[#F4F1EB] leading-relaxed">
              {project.description}
            </p>
            <p className="text-sm sm:text-base text-[#8A8A8A] font-light leading-relaxed">
              Crafted through rigorous pre-production planning, sensitive actor blocking, and deliberate camera rhythm. Every frame is designed to let the emotional truth of the scene breathe without unnecessary cinematic clutter.
            </p>
          </div>

          <div className="lg:col-span-4 p-8 bg-[#0E0E0E] border border-[#1C1C1C] space-y-6 text-xs font-mono">
            <span className="text-[#8A8A8A] uppercase tracking-widest block pb-3 border-b border-[#1C1C1C]">
              PROJECT SPECS
            </span>

            <div>
              <span className="text-[#8A8A8A] uppercase block mb-1">CLIENT / COLLABORATION</span>
              <span className="text-[#F4F1EB] text-sm font-sans">{project.client}</span>
            </div>

            <div>
              <span className="text-[#8A8A8A] uppercase block mb-1">ROLE</span>
              <span className="text-[#F4F1EB] text-sm font-sans">{project.role.join(' · ')}</span>
            </div>

            <div>
              <span className="text-[#8A8A8A] uppercase block mb-1">RELEASE YEAR</span>
              <span className="text-[#F4F1EB] text-sm font-sans">{project.year}</span>
            </div>

            <div>
              <span className="text-[#8A8A8A] uppercase block mb-1">CATEGORY</span>
              <span className="text-[#C96B5A] text-sm font-sans">{project.category}</span>
            </div>
          </div>

        </div>

        {/* Supporting Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="space-y-6 pt-12 border-t border-[#1C1C1C]">
            <span className="text-xs font-mono tracking-widest text-[#8A8A8A] uppercase block">
              PRODUCTION FRAMES
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((img, i) => (
                <div key={i} className="aspect-[16/10] overflow-hidden bg-[#111111] border border-[#222222]">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dynamic Prev / Next Navigation */}
        <div className="pt-16 border-t border-[#1C1C1C] grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            to={`/project/${prevProject.id}`}
            className="p-6 bg-[#0E0E0E] border border-[#1C1C1C] hover:border-[#C96B5A] transition-colors group block"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#8A8A8A] block mb-2 flex items-center gap-2">
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1 text-[#C96B5A]" />
              <span>PREVIOUS PROJECT</span>
            </span>
            <div className="text-xl sm:text-2xl font-serif text-[#F4F1EB] group-hover:text-[#C96B5A] transition-colors">
              {prevProject.title}
            </div>
          </Link>

          <Link
            to={`/project/${nextProject.id}`}
            className="p-6 bg-[#0E0E0E] border border-[#1C1C1C] hover:border-[#C96B5A] transition-colors group block sm:text-right"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#8A8A8A] block mb-2 flex items-center sm:justify-end gap-2">
              <span>NEXT PROJECT</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#C96B5A]" />
            </span>
            <div className="text-xl sm:text-2xl font-serif text-[#F4F1EB] group-hover:text-[#C96B5A] transition-colors">
              {nextProject.title}
            </div>
          </Link>
        </div>

      </div>

      <ContactSection />
    </div>
  );
};
