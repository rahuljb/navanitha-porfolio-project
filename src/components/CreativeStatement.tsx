import React, { useRef, useState } from 'react';
import { CinematicLightCanvas } from './CinematicLightCanvas';

export const CreativeStatement: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x: normalizedX, y: normalizedY });
  };

  return (
    <section
      id="creative-statement"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouseOffset({ x: 0, y: 0 })}
      className="group relative w-full pt-32 pb-14 sm:pt-44 sm:pb-16 px-6 sm:px-10 lg:px-12 bg-transparent text-center flex items-center justify-center select-none z-10"
    >
      {/* Unified Background Cinematic Caustics Canvas spanning both CreativeStatement and ContactSection */}
      <CinematicLightCanvas
        intensity={1.15}
        moteCount={42}
        showRibbons={true}
        showHorizon={false}
        extendToNextElementId="contact"
      />

      {/* Film Grain Scrim spanning the combined height */}
      <div className="absolute top-0 left-0 w-full h-[250%] film-grain opacity-20 pointer-events-none z-0" />

      {/* Floating Minimalist Typography Container */}
      <div className="relative z-20 max-w-4xl mx-auto space-y-10 sm:space-y-12">
        
        {/* Editorial Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md shadow-xl transition-transform duration-500 hover:border-[#C96B5A]/50">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C96B5A] shadow-[0_0_8px_#C96B5A]" />
          <span className="text-[10px] font-mono tracking-[0.26em] text-white/70 uppercase">
            CREATIVE STATEMENT
          </span>
        </div>

        {/* Cinematic Kinetic Headline with Multi-Layer 3D Depth */}
        <div className="space-y-1 sm:space-y-2">
          <h2
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.25rem] font-serif font-normal tracking-[-0.03em] leading-[0.92] text-[#F4F1EB] transition-transform duration-700 ease-out"
            style={{
              transform: `translate3d(${mouseOffset.x * -16}px, ${mouseOffset.y * -12}px, 0)`,
            }}
          >
            <span className="block drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]">
              “STORIES
            </span>
            <span
              className="block text-white/50 font-light italic transition-transform duration-700 ease-out"
              style={{
                transform: `translate3d(${mouseOffset.x * 12}px, ${mouseOffset.y * 8}px, 0)`,
              }}
            >
              ARE
            </span>
            <span
              className="block italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#F4F1EB] via-[#E5A988] to-[#C96B5A] drop-shadow-[0_0_40px_rgba(201,107,90,0.3)] transition-transform duration-700 ease-out"
              style={{
                transform: `translate3d(${mouseOffset.x * -24}px, ${mouseOffset.y * -16}px, 0)`,
              }}
            >
              EVERYWHERE.”
            </span>
          </h2>
        </div>

        {/* Poetic Narrative Statement */}
        <p
          className="text-base sm:text-xl text-[#8E8B84] font-light max-w-2xl mx-auto leading-relaxed pt-2 transition-transform duration-700 ease-out"
          style={{
            transform: `translate3d(${mouseOffset.x * 8}px, ${mouseOffset.y * 6}px, 0)`,
          }}
        >
          Inspired by human emotions, everyday moments, and the beauty of visual expression, I strive to turn ideas into meaningful stories.
        </p>
      </div>
    </section>
  );
};
