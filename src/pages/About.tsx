import React from 'react';
import { AboutSection } from '../components/AboutSection';
import { Journey } from '../components/Journey';
import { CreativeStatement } from '../components/CreativeStatement';
import { ContactSection } from '../components/ContactSection';
import { creatorProfile } from '../data/projects';
import { getProfileImageUrl } from '../assets/profileImage';

export const About: React.FC = () => {
  const profileImg = getProfileImageUrl();

  return (
    <div className="pt-28 bg-[#0A0A0A] text-[#F4F1EB]">
      {/* Editorial Profile Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16 border-b border-[#1E1E1E]">
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] w-full overflow-hidden bg-[#141414] border border-[#222222] shadow-2xl">
              <img
                src={profileImg}
                alt={creatorProfile.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono tracking-widest text-[#C96B5A] uppercase block">
              BIOGRAPHY & BACKGROUND
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif text-[#F4F1EB] font-normal tracking-tight">
              {creatorProfile.name}
            </h1>
            <p className="text-base sm:text-lg text-[#8A8A8A] font-light leading-relaxed max-w-xl">
              {creatorProfile.heroSubtitle}
            </p>
          </div>
        </div>
      </div>

      <AboutSection />
      <Journey />
      <CreativeStatement />
      <ContactSection />
    </div>
  );
};
