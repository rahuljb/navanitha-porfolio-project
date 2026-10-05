import React from 'react';
import { ArrowDown } from 'lucide-react';
import { creatorProfile } from '../data/projects';

export const Journey: React.FC = () => {
  return (
    <section className="relative w-full py-24 sm:py-36 px-6 sm:px-10 lg:px-12 bg-[#0A0A0A] border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#1E1E1E]">
          <span className="text-xs font-mono tracking-widest text-[#8A8A8A] uppercase">
            03 — EVOLUTION
          </span>
          <span className="text-xs font-mono tracking-widest text-[#F4F1EB] uppercase">
            MY JOURNEY
          </span>
        </div>

        {/* Editorial Visual Timeline (Desktop Horizontal / Flowing, Mobile Stacked) */}
        <div className="space-y-12">
          
          <div className="max-w-xl">
            <h3 className="text-3xl sm:text-4xl font-serif text-[#F4F1EB] font-normal leading-tight">
              A continuous path across visual disciplines and storytelling mediums.
            </h3>
          </div>

          {/* Minimalist Flow: FILMMAKING ↓ TELEVISION ↓ DIGITAL MEDIA ↓ DIRECTING ↓ PRODUCTION ↓ CONTENT CREATION */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 pt-4">
            {creatorProfile.journeySteps.map((step, idx) => (
              <div
                key={step}
                className="relative flex flex-col justify-between p-6 bg-[#0E0E0E] border border-[#1C1C1C] hover:border-[#C96B5A]/50 transition-all duration-300 group"
              >
                <div>
                  <span className="text-[11px] font-mono text-[#8A8A8A] group-hover:text-[#C96B5A] transition-colors block mb-6">
                    PHASE 0{idx + 1}
                  </span>
                  <h4 className="text-base sm:text-lg font-mono tracking-wider uppercase text-[#F4F1EB] font-medium leading-snug">
                    {step}
                  </h4>
                </div>

                {idx < creatorProfile.journeySteps.length - 1 && (
                  <div className="pt-8 flex items-center justify-end text-[#444444] group-hover:text-[#C96B5A] transition-colors">
                    <ArrowDown className="w-4 h-4 stroke-[1.5]" />
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
