import React from 'react';
import { creatorProfile } from '../data/projects';

export const IntroSection: React.FC = () => {
  return (
    <section className="relative w-full py-28 sm:py-44 px-6 sm:px-10 lg:px-12 bg-[#0A0A0A] border-b border-[#1A1A1A]">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Small Editorial Label */}
        <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#8A8A8A] uppercase">
          <span className="text-[#C96B5A]">01</span>
          <span className="w-6 h-[1px] bg-[#333333]" />
          <span>INTRODUCTION</span>
        </div>

        {/* Large Statement Heading */}
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-normal text-[#F4F1EB] tracking-tight leading-[0.95] [text-wrap:balance]">
          I CREATE<br />
          STORIES THAT<br />
          <span className="italic text-[#F4F1EB]/85 font-light">STAY.</span>
        </h2>

        {/* Calm Intro Paragraph with Generous Whitespace */}
        <div className="max-w-2xl pt-4">
          <p className="text-xl sm:text-2xl md:text-3xl font-serif text-[#8A8A8A] font-light leading-relaxed">
            "{creatorProfile.bioShort}"
          </p>
        </div>

      </div>
    </section>
  );
};
