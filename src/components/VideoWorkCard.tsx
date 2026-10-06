import React, { useEffect, useState } from 'react';
import { Play, ArrowUpRight, X } from 'lucide-react';
import { SelectedWorkVideo } from '../data/videos';
import { getEmbedVideoUrl } from '../utils/videoUtils';

interface VideoWorkCardProps {
  video: SelectedWorkVideo;
  index: number;
  hoveredIndex: number | null;
  onHover: () => void;
  onLeave: () => void;
}

export const VideoWorkCard: React.FC<VideoWorkCardProps> = ({
  video,
  index,
  hoveredIndex,
  onHover,
  onLeave,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const embedSource = video.youtubeId ? getEmbedVideoUrl(undefined, video.youtubeId) : null;
  const youtubeUrl = video.youtubeUrl || (video.youtubeId ? `https://www.youtube.com/watch?v=${video.youtubeId}` : undefined);

  // Runs the YouTube video continuously in the card background like an animated film GIF
  const gifPreviewUrl = video.youtubeId
    ? `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${video.youtubeId}&playsinline=1&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&disablekb=1&fs=0`
    : null;

  const focused = hoveredIndex === index;
  const dimmed = hoveredIndex !== null && hoveredIndex !== index;

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <article
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        className={`group relative min-w-0 transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
          focused
            ? 'z-20 -translate-y-2 scale-[1.02] opacity-100'
            : dimmed
              ? 'z-0 scale-[0.97] translate-y-1 opacity-45'
              : 'z-10'
        }`}
      >
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative block w-full aspect-[16/10] overflow-hidden rounded-[18px] border border-[#292929] bg-[#0D0D0D] text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C96B5A] cursor-pointer"
          aria-label={`Watch ${video.title} on YouTube`}
        >
          {/* Real Looping YouTube Video (Runs like a GIF) */}
          {gifPreviewUrl ? (
            <div className="absolute inset-0 overflow-hidden pointer-events-none bg-black">
              <iframe
                src={gifPreviewUrl}
                title={`${video.title} looping video preview`}
                loading="lazy"
                allow="autoplay; encrypted-media; picture-in-picture"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border-0 pointer-events-none scale-100 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
            </div>
          ) : (
            <img
              src={video.thumbnail}
              alt={video.title}
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              loading="lazy"
            />
          )}

          <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

          {/* Service badge */}
          <div className="absolute left-5 top-5 flex items-center gap-2 text-[9px] font-mono uppercase tracking-[0.18em] text-white/80 pointer-events-none">
            <span className="text-[#C96B5A] font-semibold">{video.serviceNumber}</span>
            <span>·</span>
            <span>{video.serviceTitle}</span>
          </div>

          <div className="absolute right-5 top-5 text-[9px] font-mono tracking-[0.16em] text-white/65 pointer-events-none">
            {video.year}
          </div>

          {/* Central YouTube Play button indicator */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-black/55 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-[#C96B5A] group-hover:bg-[#C96B5A]">
              <Play className="ml-1 h-5 w-5 fill-current text-white" />
            </span>
          </div>

          {/* Bottom title & category */}
          <div className="absolute inset-x-5 bottom-5 pointer-events-none">
            <p className="mb-1.5 text-[8px] font-mono uppercase tracking-[0.2em] text-[#C96B5A]">
              {video.category}
            </p>
            <h3 className="max-w-[95%] text-2xl sm:text-3xl font-serif leading-[0.94] tracking-[-0.03em] text-[#F4F1EB]">
              {video.title}
            </h3>
          </div>
        </button>

        <div className="flex items-start justify-between gap-5 pt-5">
          <p className="max-w-[80%] text-sm leading-6 text-[#777] font-light line-clamp-2">
            {video.description}
          </p>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="shrink-0 inline-flex items-center gap-1.5 pt-0.5 text-[9px] font-mono uppercase tracking-[0.16em] text-[#F4F1EB] group-hover:text-[#C96B5A] transition-colors cursor-pointer"
          >
            Watch Video
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </article>

      {/* YouTube Cinema Modal */}
      {isOpen && embedSource && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <div className="w-full max-w-5xl space-y-4">
            <div className="flex items-center justify-between gap-5">
              <div className="min-w-0">
                <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#C96B5A]">
                  {video.serviceNumber} — {video.serviceTitle} · {video.year}
                </p>
                <h4 className="mt-1.5 truncate text-2xl sm:text-4xl font-serif text-[#F4F1EB]">
                  {video.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="shrink-0 inline-flex items-center gap-2 border border-[#333] px-3.5 py-2 text-[9px] font-mono uppercase tracking-[0.18em] text-[#DDD] hover:border-[#C96B5A] hover:bg-[#C96B5A] transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
                <span>Close</span>
              </button>
            </div>

            {/* Cinema Video Frame */}
            <div className="relative aspect-video w-full overflow-hidden rounded-[14px] border border-[#292929] bg-black shadow-2xl">
              <iframe
                src={embedSource}
                title={video.title}
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>

            {/* Video description and direct link */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <p className="text-xs sm:text-sm text-[#888] font-light max-w-2xl leading-relaxed">
                {video.description}
              </p>
              {youtubeUrl && (
                <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C96B5A] hover:text-[#BEBBB4] transition-colors"
                >
                  <span>Open on YouTube</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
