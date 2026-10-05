import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { creatorProfile } from '../data/projects';

export const CategoryList: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="relative w-full py-28 sm:py-40 px-6 sm:px-10 lg:px-12 bg-[#0A0A0A] border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#1E1E1E]">
          <span className="text-xs font-mono tracking-widest text-[#8A8A8A] uppercase">
            06 — VISUAL MEDIA CAPABILITIES
          </span>
          <span className="text-xs font-mono tracking-widest text-[#C96B5A] uppercase">
            WHAT I DO
          </span>
        </div>

        {/* Categories List with Minimal Hover Reveal */}
        <div className="divide-y divide-[#1A1A1A]">
          {creatorProfile.services.map((item, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={item.number}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group relative py-8 sm:py-12 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  
                  {/* Left: Number + Title */}
                  <div className="flex items-baseline gap-6 sm:gap-12">
                    <span className="text-sm sm:text-base font-mono text-[#8A8A8A] group-hover:text-[#C96B5A] transition-colors">
                      {item.number}
                    </span>
                    <h3 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#F4F1EB] group-hover:italic group-hover:text-white transition-all duration-300 font-normal tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Right: Description & Arrow */}
                  <div className="flex items-center gap-6 sm:gap-10 self-start sm:self-center">
                    <p className="text-xs sm:text-sm text-[#8A8A8A] font-light max-w-xs hidden md:block">
                      {item.description}
                    </p>

                    <div className="text-[#8A8A8A] group-hover:text-[#C96B5A] transition-transform duration-300 group-hover:translate-x-3">
                      <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 stroke-[1.2]" />
                    </div>
                  </div>

                </div>

                {/* Floating Preview Image on Desktop Hover */}
                {isHovered && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none hidden lg:block fixed right-24 top-1/2 -translate-y-1/2 w-80 h-48 z-40 overflow-hidden shadow-2xl border border-[#222222] bg-[#111111]"
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full object-cover grayscale opacity-90"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
