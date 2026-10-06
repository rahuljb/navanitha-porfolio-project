import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Play, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index?: number;
  hoveredIndex?: number | null;
  onHover?: () => void;
  onLeave?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index = 0,
  hoveredIndex = null,
  onHover,
  onLeave,
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [thumbnailStage, setThumbnailStage] = useState(0);

  const thumbnailSources = project.youtubeId
    ? [
        `https://i.ytimg.com/vi/${project.youtubeId}/hqdefault.jpg`,
        `https://i.ytimg.com/vi/${project.youtubeId}/sddefault.jpg`,
        `https://i.ytimg.com/vi/${project.youtubeId}/mqdefault.jpg`,
        project.image,
      ].filter(Boolean)
    : [project.image];

  const thumbnailSrc = thumbnailSources[Math.min(thumbnailStage, thumbnailSources.length - 1)];

  const openVideo = () => {
    if (project.youtubeId) setIsVideoOpen(true);
  };

  const closeVideo = () => setIsVideoOpen(false);

  useEffect(() => {
    if (!isVideoOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeVideo();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVideoOpen]);

  const isFocused = hoveredIndex === index;
  const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

  return (
    <>
      <article
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        className={`relative min-w-0 transition-[transform,opacity,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
          isFocused
            ? 'z-20 -translate-y-2 scale-[1.025] opacity-100'
            : isDimmed
              ? 'z-0 scale-[0.965] translate-y-1 opacity-45'
              : 'z-10 scale-100 opacity-100'
        }`}
      >
        <div className="relative">
          <button
            type="button"
            onClick={openVideo}
            disabled={!project.youtubeId}
            className="group/video relative block w-full aspect-[16/10] overflow-hidden bg-[#0D0D0D] border border-[#292929] text-left disabled:cursor-default"
            aria-label={project.youtubeId ? `Watch ${project.title}` : project.title}
          >
            {/* Reliable YouTube thumbnail with several fallbacks. */}
            <img
              src={thumbnailSrc}
              alt={`${project.title} video thumbnail`}
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/video:scale-[1.035]"
              onError={() => {
                if (thumbnailStage < thumbnailSources.length - 1) {
                  setThumbnailStage((stage) => stage + 1);
                }
              }}
            />

            <div className="absolute inset-0 bg-black/28 group-hover/video:bg-black/16 transition-colors duration-500 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/25 pointer-events-none" />

            <div className="absolute left-5 top-5 sm:left-6 sm:top-6 text-[9px] font-mono tracking-[0.2em] text-white/65">
              PROJECT / {project.number}
            </div>

            <div className="absolute right-5 top-5 sm:right-6 sm:top-6 text-[9px] font-mono tracking-[0.18em] text-white/55">
              {project.year}
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex items-center justify-center w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full border border-white/50 bg-black/55 backdrop-blur-sm transition-all duration-500 group-hover/video:scale-110 group-hover/video:border-[#C96B5A] group-hover/video:bg-[#C96B5A]">
                <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-white ml-1" />
              </span>
            </div>

            <div className="absolute inset-x-5 bottom-5 sm:inset-x-6 sm:bottom-6">
              <p className="text-[8px] font-mono uppercase tracking-[0.2em] text-white/55 mb-2">
                {project.categoryLabel}
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-[2.4rem] font-serif font-normal leading-[0.92] tracking-[-0.035em] text-[#F4F1EB]">
                {project.title}
              </h3>
            </div>

            <div className="absolute inset-0 border border-transparent group-hover/video:border-[#C96B5A]/60 transition-colors duration-500 pointer-events-none" />
          </button>
        </div>

        <div className="pt-5 sm:pt-6">
          <div className="flex items-center justify-between gap-4 text-[9px] font-mono uppercase tracking-[0.16em] text-[#666]">
            <span className="text-[#C96B5A]">{project.number} — {project.categoryLabel}</span>
            <span>{project.year}</span>
          </div>

          <div className="mt-4 flex items-end justify-between gap-5">
            <p className="max-w-[90%] text-sm leading-6 text-[#777] font-light line-clamp-3">
              {project.description}
            </p>

            {project.youtubeId ? (
              <button
                type="button"
                onClick={openVideo}
                className="shrink-0 inline-flex items-center gap-2 text-[9px] font-mono uppercase tracking-[0.16em] text-[#F4F1EB] hover:text-[#C96B5A] transition-colors"
              >
                Watch
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <Link
                to={`/project/${project.id}`}
                className="shrink-0 inline-flex items-center gap-2 text-[9px] font-mono uppercase tracking-[0.16em] text-[#F4F1EB] hover:text-[#C96B5A] transition-colors"
              >
                Open
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>
      </article>

      {isVideoOpen && project.youtubeId && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} video`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeVideo();
          }}
        >
          <div className="w-full max-w-6xl">
            <div className="flex items-center justify-between gap-5 mb-4">
              <div className="min-w-0">
                <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#777]">
                  {project.number} — {project.categoryLabel}
                </p>
                <h4 className="mt-2 truncate text-2xl sm:text-4xl font-serif text-[#F4F1EB] tracking-[-0.025em]">
                  {project.title}
                </h4>
              </div>

              <button
                type="button"
                onClick={closeVideo}
                className="shrink-0 flex items-center gap-2 border border-[#333] px-3 py-2 text-[9px] font-mono uppercase tracking-[0.18em] text-[#DDD] hover:bg-[#C96B5A] hover:border-[#C96B5A] transition-colors"
                aria-label="Close video"
              >
                <X className="w-4 h-4" />
                <span className="hidden sm:inline">Close</span>
              </button>
            </div>

            <div className="relative w-full aspect-video bg-black border border-[#292929] shadow-2xl overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title={`${project.title} — YouTube video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-[9px] font-mono uppercase tracking-[0.18em] text-[#666]">
              <span>{project.year}</span>
              <span>Press ESC or click outside to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
