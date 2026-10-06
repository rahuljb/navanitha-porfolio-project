import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowLeft, Compass, Eye, Sparkles } from 'lucide-react';
import { VideoPlayer } from '../components/VideoPlayer';
import { directionVideo } from '../data/videos';
import { hasValidVideoUrl } from '../utils/videoUtils';
import { CreativeStatement } from '../components/CreativeStatement';
import { ContactSection } from '../components/ContactSection';

export const DirectionShowcase: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const isVideoAvailable = hasValidVideoUrl(directionVideo);

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
            <span className="text-[#C96B5A]">PHASE 04</span>
            <span className="text-[#333333]">/</span>
            <span>DIRECTION</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-xs font-mono tracking-widest text-[#C96B5A] uppercase">
            <span>04 — VISION &amp; PERFORMANCE</span>
            <span className="w-6 h-[1px] bg-[#333333]" />
            <span className="text-[#8A8A8A]">DIRECTORIAL CRAFT</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#F4F1EB] font-normal tracking-tight">
            DIRECTION
          </h1>

          <p className="text-sm sm:text-base text-[#8A8A8A] font-light leading-relaxed max-w-2xl mx-auto">
            Translating written treatments into captivating visual experiences through empathetic actor direction, deliberate camera blocking, and distinct aesthetic tone.
          </p>
        </div>

        {/* Central Featured Video Stage - safely hidden if URL not available */}
        <div className="space-y-10 max-w-5xl mx-auto">
          {isVideoAvailable ? (
            <VideoPlayer video={directionVideo} />
          ) : (
            /* Editorial Directorial Pillars - renders cleanly when video URL is not directly playable */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
              <div className="p-6 sm:p-7 rounded-lg bg-[#0E0E0E] border border-[#1C1C1C] hover:border-[#2C2C2C] transition-colors space-y-3">
                <div className="w-8 h-8 rounded-full bg-[#181818] flex items-center justify-center text-[#C96B5A]">
                  <Eye className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-mono text-[#C96B5A] uppercase tracking-widest block">01 · VISION</span>
                <h4 className="text-lg font-serif text-[#F4F1EB]">Atmosphere &amp; World-Building</h4>
                <p className="text-xs sm:text-sm text-[#8A8A8A] font-light leading-relaxed">
                  Establishing visual tone, lighting texture, and spatial intimacy to immerse audiences into the emotional world of the narrative.
                </p>
              </div>

              <div className="p-6 sm:p-7 rounded-lg bg-[#0E0E0E] border border-[#1C1C1C] hover:border-[#2C2C2C] transition-colors space-y-3">
                <div className="w-8 h-8 rounded-full bg-[#181818] flex items-center justify-center text-[#C96B5A]">
                  <Compass className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-mono text-[#C96B5A] uppercase tracking-widest block">02 · PERFORMANCE</span>
                <h4 className="text-lg font-serif text-[#F4F1EB]">Actor Direction &amp; Subtext</h4>
                <p className="text-xs sm:text-sm text-[#8A8A8A] font-light leading-relaxed">
                  Guiding talent to draw out spontaneous nuance, emotional depth, and unspoken tension beneath written dialogue.
                </p>
              </div>

              <div className="p-6 sm:p-7 rounded-lg bg-[#0E0E0E] border border-[#1C1C1C] hover:border-[#2C2C2C] transition-colors space-y-3">
                <div className="w-8 h-8 rounded-full bg-[#181818] flex items-center justify-center text-[#C96B5A]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-mono text-[#C96B5A] uppercase tracking-widest block">03 · CHOREOGRAPHY</span>
                <h4 className="text-lg font-serif text-[#F4F1EB]">Scene Blocking &amp; Rhythm</h4>
                <p className="text-xs sm:text-sm text-[#8A8A8A] font-light leading-relaxed">
                  Harmonizing camera movement, lens choices, and internal character pacing to construct scenes that breathe with dramatic poise.
                </p>
              </div>
            </div>
          )}

          {/* Title & Production Credits */}
          <div className="text-center space-y-4 max-w-2xl mx-auto pt-4 border-t border-[#1C1C1C]">
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#8A8A8A] uppercase tracking-widest">
              <span>{directionVideo.category}</span>
              <span className="text-[#333333]">·</span>
              <span className="text-[#C96B5A]">{directionVideo.role}</span>
              <span className="text-[#333333]">·</span>
              <span>{directionVideo.year}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-serif text-[#F4F1EB] font-normal tracking-tight">
              {directionVideo.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#8A8A8A] font-light leading-relaxed max-w-xl mx-auto">
              {directionVideo.description}
            </p>
          </div>
        </div>

      </div>

      <CreativeStatement />
      <ContactSection />
    </div>
  );
};
