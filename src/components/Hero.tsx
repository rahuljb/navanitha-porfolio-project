import React, { useState, useRef } from 'react';
import { ArrowRight, ArrowDown, Camera } from 'lucide-react';
import { creatorProfile } from '../data/projects';
import { navanithaStudioPortrait, getProfileImageUrl } from '../assets/profileImage';

interface HeroProps {
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const [profileImg, setProfileImg] = useState<string>(getProfileImageUrl());
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleScrollToWork = () => {
    if (onExploreClick) {
      onExploreClick();
      return;
    }
    const workElem = document.getElementById('work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToNext = () => {
    const nextElem = document.getElementById('intro');
    if (nextElem) {
      nextElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setProfileImg(result);
          try {
            localStorage.setItem('navanitha_custom_profile_image', result);
          } catch (err) {
            console.error('Storage full or unavailable', err);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0A0A0A] text-[#F4F1EB]">
      {/* Hidden file uploader */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handlePhotoUpload}
        accept="image/*"
        className="hidden"
      />

      {/* 1. Cinematic Fullscreen Background with Desaturation & Film Grain */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2400&q=85"
          alt="Cinematic Background"
          className="w-full h-full object-cover grayscale opacity-30 scale-105 transition-transform duration-10000 ease-out animate-pulse"
          style={{ animationDuration: '8s' }}
        />
        {/* Dark Vignette & Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/50 pointer-events-none" />
        <div className="absolute inset-0 film-grain pointer-events-none" />
      </div>

      {/* 2. Main Hero Content: Off-center Editorial Card Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full pt-32 sm:pt-40 md:pt-44 flex-1 flex flex-col justify-center">
        
        {/* Asymmetrical / Off-Center Content Positioning */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Big Editorial Typographic Lead */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#8A8A8A] uppercase">
              <span className="w-8 h-[1px] bg-[#C96B5A]" />
              <span className="text-[#C96B5A]">{creatorProfile.tagline}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-[#F4F1EB] tracking-tight leading-[1.05] [text-wrap:balance]">
              Stories that evoke, linger and connect.
            </h1>

            <p className="text-base sm:text-lg text-[#8A8A8A] font-light max-w-xl leading-relaxed">
              {creatorProfile.heroSubtitle}
            </p>

            <div className="pt-2">
              <button
                onClick={handleScrollToWork}
                className="group inline-flex items-center gap-4 px-8 py-4 bg-[#F4F1EB] text-[#111111] hover:bg-white transition-all text-xs font-mono uppercase tracking-widest cursor-pointer shadow-xl"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5 text-[#C96B5A]" />
              </button>
            </div>
          </div>

          {/* Off-Center Editorial Profile Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md bg-[#F4F1EB] text-[#111111] p-7 sm:p-9 shadow-2xl rounded-sm border border-[#DDDBD6] transition-transform duration-500 hover:-translate-y-1">
              
              {/* Top status bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#111111]/15 mb-6">
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#111111]/70">
                  CREATIVE PROFILE
                </span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C96B5A]" />
                  <span className="text-[11px] font-mono tracking-widest uppercase text-[#C96B5A] font-medium">
                    ACTIVE 2026
                  </span>
                </div>
              </div>

              {/* Portrait container inside hero card */}
              <div
                onClick={() => fileInputRef.current?.click()}
                title="Click to change portrait"
                className="group/portrait relative aspect-[4/3] w-full overflow-hidden bg-[#E2DED6] mb-6 border border-[#111111]/15 shadow-sm cursor-pointer"
              >
                <img
                  src={profileImg}
                  alt={creatorProfile.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/portrait:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.dataset.triedImagesJpeg) {
                      target.dataset.triedImagesJpeg = 'true';
                      target.src = '/images/profile-photo.jpeg';
                    } else if (!target.dataset.triedRootJpg) {
                      target.dataset.triedRootJpg = 'true';
                      target.src = '/profile.jpg';
                    } else if (!target.dataset.triedRootJpeg) {
                      target.dataset.triedRootJpeg = 'true';
                      target.src = '/profile.jpeg';
                    }
                  }}
                />
                
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/portrait:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-mono tracking-wider uppercase">
                  <Camera className="w-4 h-4" />
                  <span>Change Photo</span>
                </div>

                {/* Thin inner geometric line */}
                <div className="absolute inset-2 border border-white/20 pointer-events-none" />
              </div>

              {/* Card Typography */}
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#111111] tracking-tight leading-tight">
                    {creatorProfile.name}
                  </h2>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#C96B5A] font-medium mt-1">
                    {creatorProfile.tagline}
                  </div>
                </div>

                {/* Thin black separator line */}
                <div className="w-12 h-[1px] bg-[#111111]" />

                {/* Big bold disciplines */}
                <div className="text-sm sm:text-base font-mono tracking-widest uppercase text-[#111111] font-semibold space-y-1">
                  <div>FILMMAKER.</div>
                  <div>DIRECTOR.</div>
                  <div>CREATOR.</div>
                </div>

                <p className="text-xs text-[#555555] font-light leading-relaxed pt-1">
                  Turning ideas, emotions and everyday moments into meaningful visual stories.
                </p>

                {/* Card CTA */}
                <div className="pt-3">
                  <button
                    onClick={handleScrollToWork}
                    className="group/card-btn inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#111111] hover:text-[#C96B5A] transition-colors cursor-pointer"
                  >
                    <span>EXPLORE PORTFOLIO</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/card-btn:translate-x-1" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* 3. Bottom Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full pt-8 pb-12 flex items-center justify-between text-xs font-mono text-[#8A8A8A]">
        <button
          type="button"
          onClick={handleScrollToNext}
          className="group flex items-center gap-2 tracking-widest uppercase cursor-pointer transition-colors duration-200 hover:text-[#F4F1EB] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C96B5A]"
          aria-label="Scroll to next section"
        >
          <span className="text-[#C96B5A] transition-colors group-hover:text-[#e07f6e] underline-offset-4 group-hover:underline">
            SCROLL
          </span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce stroke-[1.5] text-[#C96B5A] transition-transform group-hover:translate-y-0.5" />
        </button>

        <div className="hidden sm:block tracking-widest uppercase text-[11px] text-[#8A8A8A]">
          CINEMA · TELEVISION · DIGITAL MEDIA
        </div>
      </div>

      {/* 4. Section 5: Editorial Angled Transition Shape */}
      <div className="relative w-full h-12 sm:h-20 overflow-hidden pointer-events-none -mb-[1px]">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full text-[#0A0A0A]"
        >
          <polygon
            points="0,80 1440,80 1140,0 300,0"
            fill="#0A0A0A"
            opacity="0.9"
          />
          <line
            x1="300"
            y1="0"
            x2="0"
            y2="80"
            stroke="#1E1E1E"
            strokeWidth="1"
          />
          <line
            x1="1140"
            y1="0"
            x2="1440"
            y2="80"
            stroke="#1E1E1E"
            strokeWidth="1"
          />
        </svg>
      </div>
    </section>
  );
};
