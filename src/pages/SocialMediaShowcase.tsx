import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { VideoPlayer } from '../components/VideoPlayer';
import { socialMediaVideos, ProductionVideo } from '../data/videos';
import { hasValidVideoUrl } from '../utils/videoUtils';
import { CreativeStatement } from '../components/CreativeStatement';
import { ContactSection } from '../components/ContactSection';

export const SocialMediaShowcase: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<ProductionVideo>(socialMediaVideos[0]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="pt-24 bg-[#0A0A0A] text-[#F4F1EB] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 pt-8 pb-20 space-y-12 sm:space-y-16">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-[#1A1A1A] pb-6">
          <RouterLink
            to="/#journey"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8A8A8A] hover:text-[#C96B5A] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO JOURNEY</span>
          </RouterLink>

          <div className="flex items-center gap-3 text-xs font-mono text-[#8A8A8A]">
            <span className="text-[#C96B5A]">PHASE 03</span>
            <span className="text-[#333333]">/</span>
            <span>SOCIAL MEDIA &amp; COMMERCIAL CONTENT</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-xs font-mono tracking-widest text-[#C96B5A] uppercase">
            <span>03 — BRAND &amp; VIRAL MOTION</span>
            <span className="w-6 h-[1px] bg-[#333333]" />
            <span className="text-[#8A8A8A]">6 CINEMA SCREENINGS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#F4F1EB] font-normal tracking-tight">
            SOCIAL MEDIA &amp; COMMERCIAL CONTENT
          </h1>

          <p className="text-sm sm:text-base text-[#8A8A8A] font-light leading-relaxed max-w-2xl mx-auto">
            High-impact commercial advertisements, brand promotional films, episodic web series, and viral short-form reels crafted for modern digital audiences.
          </p>
        </div>

        {/* 6 Video Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-6xl mx-auto">
          {socialMediaVideos.map((video) => {
            const isActive = activeVideo.id === video.id;

            return (
              <button
                key={video.id}
                type="button"
                onClick={() => setActiveVideo(video)}
                className={`p-3.5 text-left transition-all duration-300 rounded-lg border cursor-pointer ${
                  isActive
                    ? 'border-[#C96B5A] bg-[#141414] shadow-lg shadow-black/60 ring-1 ring-[#C96B5A]/40'
                    : 'border-[#1C1C1C] bg-[#0E0E0E] hover:border-[#333333] hover:bg-[#121212]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[11px] font-mono font-medium tracking-widest ${isActive ? 'text-[#C96B5A]' : 'text-[#666666]'}`}>
                    {video.number}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#C96B5A] animate-pulse" />}
                </div>

                <h4 className={`text-xs font-serif tracking-tight line-clamp-2 ${isActive ? 'text-[#F4F1EB] font-medium' : 'text-[#AAAAAA]'}`}>
                  {video.title}
                </h4>

                <span className="text-[10px] font-mono text-[#777777] block mt-1.5 truncate uppercase">
                  {video.category.split('·')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Central Featured Cinema Video Stage - safely hidden if URL not available */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {hasValidVideoUrl(activeVideo) && (
            <VideoPlayer key={activeVideo.id} video={activeVideo} />
          )}

          {/* Title & Production Credits */}
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

      <CreativeStatement />
      <ContactSection />
    </div>
  );
};
