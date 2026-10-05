import React, { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { VideoPlayer } from './VideoPlayer';
import { productionVideos, ProductionVideo } from '../data/videos';

export const ProductionSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<ProductionVideo>(productionVideos[0]);

  return (
    <section id="production" className="relative w-full py-28 sm:py-40 px-6 sm:px-10 lg:px-12 bg-[#0A0A0A] border-b border-[#1A1A1A]">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-mono tracking-widest text-[#C96B5A] uppercase block">
            05 — SCREEN & MOTION
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#F4F1EB] font-normal tracking-tight">
            PRODUCTION
          </h2>
          <p className="text-sm sm:text-base text-[#8A8A8A] font-light leading-relaxed">
            Stories brought to life through creative collaboration, planning and visual execution.
          </p>
        </div>

        {/* Central Featured Video Stage */}
        <div className="space-y-8">
          
          {/* Main Video Frame */}
          <div className="max-w-4xl mx-auto">
            <VideoPlayer key={activeVideo.id} video={activeVideo} />
          </div>

          {/* Title & Watch Link */}
          <div className="text-center space-y-3 max-w-xl mx-auto pt-2">
            <span className="text-xs font-mono text-[#8A8A8A] uppercase tracking-widest">
              {activeVideo.category} · {activeVideo.year} · {activeVideo.role}
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif text-[#F4F1EB] font-normal">
              {activeVideo.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#8A8A8A] font-light leading-relaxed">
              {activeVideo.description}
            </p>

            <div className="pt-2">
              <a
                href={activeVideo.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#F4F1EB] hover:text-[#C96B5A] transition-colors"
              >
                <span>WATCH ON YOUTUBE</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C96B5A]" />
              </a>
            </div>
          </div>

          {/* Quick Selector Bar: 01   02   03   04 */}
          <div className="pt-8 border-t border-[#1C1C1C] max-w-2xl mx-auto">
            <div className="grid grid-cols-4 gap-3 sm:gap-6">
              {productionVideos.map((video) => {
                const isActive = activeVideo.id === video.id;

                return (
                  <button
                    key={video.id}
                    onClick={() => setActiveVideo(video)}
                    className={`py-4 px-3 sm:px-4 text-center transition-all cursor-pointer border ${
                      isActive
                        ? 'border-[#C96B5A] bg-[#141414] text-[#F4F1EB]'
                        : 'border-[#1C1C1C] bg-[#0E0E0E] text-[#8A8A8A] hover:border-[#333333] hover:text-[#F4F1EB]'
                    }`}
                  >
                    <span className={`text-base sm:text-xl font-mono block ${isActive ? 'text-[#C96B5A] font-semibold' : ''}`}>
                      {video.number}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest uppercase block mt-1 truncate">
                      {video.category.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
