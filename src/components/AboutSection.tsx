import React from 'react';
import { creatorProfile } from '../data/projects';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative w-full py-28 sm:py-40 px-6 sm:px-10 lg:px-12 bg-[#0A0A0A] border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#1E1E1E]">
          <span className="text-xs font-mono tracking-widest text-[#8A8A8A] uppercase">
            02 — PROFILE & PHILOSOPHY
          </span>
          <span className="text-xs font-mono tracking-widest text-[#C96B5A] uppercase">
            ABOUT ME
          </span>
        </div>

        {/* Two-Column Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Large Graphic Typography */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#F4F1EB] font-normal leading-[0.95] tracking-tight">
              STORIES.<br />
              <span className="italic text-[#C96B5A]">EMOTIONS.</span><br />
              VISUALS.
            </h3>
            
            <div className="pt-6">
              <span className="text-xs font-mono text-[#8A8A8A] uppercase tracking-widest block">
                CREATIVE DISCIPLINE
              </span>
              <p className="text-sm font-mono text-[#F4F1EB] mt-1">
                Filmmaking · Television · Digital Media · Direction
              </p>
            </div>
          </div>

          {/* Right Column: Narrative Broken Into Small Readable Paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#8A8A8A] font-light leading-relaxed">
            <p className="text-xl sm:text-2xl font-serif text-[#F4F1EB] leading-relaxed">
              I am Navanitha Vijayakumar, a visual media enthusiast driven by a passion for storytelling and creative exploration.
            </p>

            <p>
              My journey across filmmaking, television, and digital media has allowed me to explore directing, production, and content creation with equal devotion to both craft and human emotion.
            </p>

            <p>
              Inspired by human emotions, everyday moments, and the beauty of visual expression, I strive to turn ideas into meaningful stories that resonate deeply on screen.
            </p>

            <p>
              I thrive in collaborative creative spaces, constantly learning and evolving, with a vision to create work that not only captures attention but leaves a lasting impression.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
