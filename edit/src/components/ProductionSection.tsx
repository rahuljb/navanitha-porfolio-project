import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { VideoPlayer } from './VideoPlayer';
import { filmsAndProductionVideos, ProductionVideo } from '../data/videos';
import { hasValidVideoUrl } from '../utils/videoUtils';

interface ProductionSectionProps {
  showBreadcrumb?: boolean;
}

export const ProductionSection: React.FC<ProductionSectionProps> = ({ showBreadcrumb }) => {
  const location = useLocation();
  const isDedicatedPage = Boolean(showBreadcrumb || location.pathname.includes('production'));

  // Primary 3 Films & Production videos
  const videosList = filmsAndProductionVideos.slice(0, 3);
  const [activeVideo, setActiveVideo] = useState<ProductionVideo>(videosList[0]);

  return (
    <section id="production" className={`relative w-full ${isDedicatedPage ? 'pt-8 pb-28 sm:pb-40' : 'py-28 sm:py-40'} px-6 sm:px-10 lg:px-12 bg-[#0A0A0A] border-b border-[#1A1A1A]`}>
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Navigation Breadcrumb (like in the user screenshot) */}
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
            <span>05 — SCREEN & MOTION</span>
            <span className="w-6 h-[1px] bg-[#333333]" />
            <span className="text-[#8A8A8A]">3 CINEMA SCREENINGS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#F4F1EB] font-normal tracking-tight">
            FILMS &amp; PRODUCTION
          </h2>

          <p className="text-sm sm:text-base text-[#8A8A8A] font-light leading-relaxed max-w-2xl mx-auto">
            Three signature visual works across celebrity industry interviews, atmospheric short fiction, and high-impact commercial advertising.
          </p>
        </div>

        {/* Video Selector Tabs (3 Big Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {videosList.map((video) => {
            const isActive = activeVideo.id === video.id;

            return (
              <button
                key={video.id}
                type="button"
                onClick={() => setActiveVideo(video)}
                className={`p-5 text-left transition-all duration-300 rounded-lg border cursor-pointer ${
                  isActive
                    ? 'border-[#C96B5A] bg-[#141414] shadow-lg shadow-black/60 ring-1 ring-[#C96B5A]/40'
                    : 'border-[#1C1C1C] bg-[#0E0E0E] hover:border-[#333333] hover:bg-[#121212]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-medium tracking-widest ${isActive ? 'text-[#C96B5A]' : 'text-[#666666]'}`}>
                    SCREENING {video.number}
                  </span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#C96B5A] animate-pulse" />}
                </div>

                <h4 className={`text-sm sm:text-base font-serif tracking-tight line-clamp-1 ${isActive ? 'text-[#F4F1EB]' : 'text-[#AAAAAA]'}`}>
                  {video.title}
                </h4>

                <span className="text-[11px] font-mono text-[#777777] block mt-1 truncate uppercase">
                  {video.category.split('·')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Central Featured Video Stage */}
        <div className="space-y-8">
          
          {/* Main Cinema Video Frame - hidden cleanly if URL not available */}
          {hasValidVideoUrl(activeVideo) && (
            <div className="max-w-5xl mx-auto">
              <VideoPlayer key={activeVideo.id} video={activeVideo} />
            </div>
          )}

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
          </div>

        </div>

      </div>
    </section>
  );
};
