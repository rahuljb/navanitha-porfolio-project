import React, { useState, useRef, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { VideoPlayer } from './VideoPlayer';
import { filmsAndProductionVideos, ProductionVideo } from '../data/videos';
import { hasValidVideoUrl } from '../utils/videoUtils';

interface ProductionSectionProps {
  showBreadcrumb?: boolean;
}

export const ProductionSection: React.FC<ProductionSectionProps> = ({ showBreadcrumb }) => {
  const location = useLocation();
  const isDedicatedPage = Boolean(showBreadcrumb || location.pathname.includes('production'));

  // 4 Films & Production YouTube screenings
  const videosList = filmsAndProductionVideos;
  const [activeVideo, setActiveVideo] = useState<ProductionVideo>(videosList[0]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const elem = scrollContainerRef.current;
    if (elem) {
      elem.addEventListener('scroll', checkScroll, { passive: true });
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (elem) elem.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = Math.max(280, scrollContainerRef.current.clientWidth * 0.7);
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="production" className={`relative w-full ${isDedicatedPage ? 'pt-8 pb-28 sm:pb-40' : 'py-28 sm:py-40'} px-6 sm:px-10 lg:px-12 bg-[#0A0A0A] border-b border-[#1A1A1A]`}>
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Navigation Breadcrumb */}
        {isDedicatedPage && (
          <div className="flex items-center justify-between border-b border-[#1A1A1A] pb-6">
            <RouterLink
              to="/#journey"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8A8A8A] hover:text-[#C96B5A] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>BACK TO JOURNEY</span>
            </RouterLink>

            <div className="flex items-center gap-3 text-xs font-mono text-[#8A8A8A]">
              <span className="text-[#C96B5A]">PHASE 01</span>
              <span className="text-[#333333]">/</span>
              <span>FILMS &amp; PRODUCTION</span>
            </div>
          </div>
        )}

        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-xs font-mono tracking-widest text-[#C96B5A] uppercase">
            <span>01 — SCREEN &amp; DIRECTION</span>
            <span className="w-6 h-[1px] bg-[#333333]" />
            <span className="text-[#8A8A8A]">4 CINEMA SCREENINGS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#F4F1EB] font-normal tracking-tight">
            FILMS &amp; PRODUCTION
          </h2>

          <p className="text-sm sm:text-base text-[#8A8A8A] font-light leading-relaxed max-w-2xl mx-auto">
            Four signature visual works across mini web series, narrative short films, dramatic sketches, and romance specials.
          </p>
        </div>

        {/* Smooth Horizontal Scroll Screening Reel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Scroll Header with Controls */}
          <div className="flex items-center justify-between mb-4 px-1">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#C96B5A] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-[#999] uppercase">
                SELECT SCREENING · SWIPE OR SCROLL
              </span>
            </div>

            {/* Smooth Scroll Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleScroll('left')}
                disabled={!canScrollLeft}
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                  canScrollLeft
                    ? 'border-[#333333] bg-[#141414] text-[#F4F1EB] hover:border-[#C96B5A] hover:bg-[#C96B5A] hover:text-[#0A0A0A]'
                    : 'border-[#1C1C1C] bg-[#0E0E0E] text-[#444444] cursor-not-allowed opacity-50'
                }`}
                aria-label="Scroll left"
                title="Scroll screenings left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => handleScroll('right')}
                disabled={!canScrollRight}
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                  canScrollRight
                    ? 'border-[#333333] bg-[#141414] text-[#F4F1EB] hover:border-[#C96B5A] hover:bg-[#C96B5A] hover:text-[#0A0A0A]'
                    : 'border-[#1C1C1C] bg-[#0E0E0E] text-[#444444] cursor-not-allowed opacity-50'
                }`}
                aria-label="Scroll right"
                title="Scroll screenings right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Smooth Horizontal Track */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 px-1 scrollbar-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {videosList.map((video) => {
              const isActive = activeVideo.id === video.id;

              return (
                <button
                  key={video.id}
                  type="button"
                  onClick={(e) => {
                    setActiveVideo(video);
                    e.currentTarget.scrollIntoView({
                      behavior: 'smooth',
                      inline: 'center',
                      block: 'nearest',
                    });
                  }}
                  className={`shrink-0 snap-center w-[260px] sm:w-[290px] md:w-[310px] p-5 text-left transition-all duration-300 rounded-xl border cursor-pointer ${
                    isActive
                      ? 'border-[#C96B5A] bg-[#161616] shadow-xl shadow-black/80 ring-1 ring-[#C96B5A]/60 -translate-y-1'
                      : 'border-[#1C1C1C] bg-[#0E0E0E] hover:border-[#383838] hover:bg-[#121212]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <span className={`text-[11px] font-mono font-medium tracking-widest ${isActive ? 'text-[#C96B5A]' : 'text-[#777777]'}`}>
                      SCREENING {video.number}
                    </span>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-[#C96B5A] animate-pulse" />
                    ) : (
                      <span className="text-[10px] font-mono text-[#555555]">{video.year}</span>
                    )}
                  </div>

                  <h4 className={`text-sm sm:text-base font-serif tracking-tight line-clamp-2 min-h-[2.75rem] leading-snug ${isActive ? 'text-[#F4F1EB] font-medium' : 'text-[#BEBBB4]'}`}>
                    {video.title}
                  </h4>

                  <div className="flex items-center justify-between pt-2.5 mt-2.5 border-t border-[#1C1C1C]">
                    <span className="text-[10px] font-mono text-[#888888] truncate uppercase tracking-wider">
                      {video.category.split('·')[0]}
                    </span>
                    {isActive && (
                      <span className="text-[9px] font-mono uppercase tracking-widest text-[#C96B5A] font-semibold">
                        PLAYING
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Central Featured Video Stage */}
        <div className="space-y-8">
          
          {/* Main Cinema Video Frame */}
          <div className="max-w-5xl mx-auto">
            {hasValidVideoUrl(activeVideo) ? (
              <VideoPlayer key={activeVideo.id} video={activeVideo} />
            ) : (
              <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-[#222222] bg-[#0A0A0A] shadow-2xl">
                <img
                  src={activeVideo.thumbnail}
                  alt={activeVideo.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C96B5A]">
                      PRODUCTION ARCHIVE · STILL
                    </span>
                    <h4 className="text-xl sm:text-2xl font-serif text-[#F4F1EB] mt-1">{activeVideo.title}</h4>
                  </div>
                  <span className="text-xs font-mono text-[#8A8A8A] uppercase tracking-wider">{activeVideo.year}</span>
                </div>
              </div>
            )}
          </div>

          {/* Title & Credits */}
          <div className="text-center space-y-4 max-w-2xl mx-auto pt-2">
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#8A8A8A] uppercase tracking-widest">
              <span>{activeVideo.category}</span>
              <span className="text-[#333333]">·</span>
              <span className="text-[#C96B5A]">{activeVideo.role}</span>
              <span className="text-[#333333]">·</span>
              <span>{activeVideo.year}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-serif text-[#F4F1EB] font-normal tracking-tight">
              {activeVideo.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#8A8A8A] font-light leading-relaxed max-w-xl mx-auto">
              {activeVideo.description}
            </p>

            {activeVideo.youtubeUrl && (
              <div className="pt-2">
                <a
                  href={activeVideo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C96B5A] hover:text-[#BEBBB4] transition-colors"
                >
                  <span>Watch on YouTube</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
