import React from 'react';
import { creatorProfile } from '../data/projects';

export const IntroSection: React.FC = () => {
  return (
    <section id="intro" className="modern-section relative bg-[#0A0A0A] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="modern-intro-panel overflow-hidden rounded-[30px] border border-white/10 bg-[#F4F1EB] text-[#111] shadow-[0_30px_90px_rgba(0,0,0,.28)]">
          <div className="grid lg:grid-cols-[.34fr_1fr]">
            <div className="border-b border-black/10 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <div className="sticky top-28">
                <div className="mb-10 flex items-center justify-between text-[10px] font-mono uppercase tracking-[.24em] text-black/45">
                  <span>02</span>
                  <span>Introduction</span>
                </div>
                <div className="h-px w-16 bg-[#C96B5A]" />
                <p className="mt-5 max-w-[180px] text-xs font-mono uppercase leading-5 tracking-[.16em] text-black/50">
                  A quiet space for the person behind the pictures.
                </p>
              </div>
            </div>

            <div className="p-7 sm:p-10 lg:p-16 xl:p-20">
              <p className="mb-7 max-w-3xl text-[11px] font-mono uppercase tracking-[.24em] text-[#C96B5A]">The work begins with feeling</p>
              <h2 className="max-w-5xl font-serif text-5xl leading-[.94] tracking-[-.035em] sm:text-7xl lg:text-[6.8rem]">
                I create stories
                <span className="block italic font-light text-black/55">that stay.</span>
              </h2>

              <div className="mt-12 border-t border-black/10 pt-8">
                <p className="max-w-2xl text-base leading-7 text-black/62 sm:text-lg">
                  {creatorProfile.bioShort}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
