import React from 'react';
import { ArrowRight } from 'lucide-react';
import { creatorProfile } from '../data/projects';
import { getProfileImageUrl } from '../assets/profileImage';
import { CinematicLightCanvas } from './CinematicLightCanvas';

export const Hero: React.FC = () => {
  const profileImg = getProfileImageUrl();

  const scrollToIntro = () => {
    document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="modern-hero relative min-h-[92svh] w-full overflow-hidden bg-[#0A0A0A] text-[#F4F1EB]">
      {/* Cinematic Caustics Animation (Silk Ribbons & Floating Motes) WITHOUT Mouse Tracker Light */}
      <CinematicLightCanvas intensity={1.15} moteCount={32} showRibbons={true} showHorizon={false} enableMouseLight={false} />
      <div className="film-grain absolute inset-0 opacity-25 pointer-events-none z-0" />

      <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8 lg:px-12">
        <div className="mb-8 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.28em] text-white/45 sm:mb-12">
          <span>01 / CREATIVE PROFILE</span>
          <span className="hidden sm:block">FILM · TV · DIGITAL</span>
        </div>

        <div className="grid items-end gap-8 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.22em] text-white/60 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C96B5A]" />
              {creatorProfile.tagline}
            </div>

            <h1 className="max-w-4xl font-serif text-5xl leading-[.92] tracking-[-.035em] text-[#F4F1EB] sm:text-7xl lg:text-[7.5rem]">
              Stories that
              <span className="block italic font-light text-white/65">stay with you.</span>
            </h1>

            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-lg text-sm leading-7 text-white/48 sm:text-base">
                {creatorProfile.heroSubtitle}
              </p>
              <button
                onClick={scrollToIntro}
                className="group inline-flex shrink-0 items-center gap-3 text-[10px] font-mono uppercase tracking-[0.24em] text-[#F4F1EB] transition-colors hover:text-[#C96B5A] cursor-pointer"
              >
                Explore profile
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:pb-2">
            <div className="profile-portrait-shell group relative mx-auto w-full max-w-[620px] lg:ml-auto">
              {/* Animated Terracotta Ambient Backlight Glow */}
              <div
                className="absolute -inset-4 sm:-inset-6 rounded-[48px] bg-gradient-to-tr from-[#C96B5A]/25 via-[#C96B5A]/10 to-transparent blur-2xl opacity-60 transition-opacity duration-700 group-hover:opacity-100 animate-profile-glow pointer-events-none"
                aria-hidden="true"
              />

              {/* Floating Frame */}
              <div className="profile-portrait-frame relative rounded-[32px] bg-[#F4F1EB] p-3 sm:p-3.5 shadow-[0_30px_90px_rgba(0,0,0,.42)] transition-all duration-700 ease-out group-hover:shadow-[0_45px_120px_rgba(201,107,90,0.22),0_25px_60px_rgba(0,0,0,0.6)] animate-profile-float">
                {/* Photo Container with Lens Effects */}
                <div className="relative aspect-[4/4.75] overflow-hidden rounded-[24px] bg-[#ded9d0]">
                  <img
                    src={profileImg}
                    alt={creatorProfile.name}
                    className="h-full w-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                  />

                  {/* Animated Light Sweep Sheen on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full transition-transform duration-1000 ease-out group-hover:translate-x-full pointer-events-none" />
                </div>

                {/* Card Caption Footer */}
                <div className="flex items-end justify-between px-2 pb-1 pt-5 sm:px-3 sm:pt-6">
                  <div>
                    <p className="font-serif text-2xl leading-none text-[#111] sm:text-3xl transition-colors duration-300 group-hover:text-black">
                      {creatorProfile.name}
                    </p>
                    <p className="mt-2 text-[9px] font-mono uppercase tracking-[.22em] text-black/50 transition-colors duration-300 group-hover:text-black/80">
                      Filmmaker · Director · Creator
                    </p>
                  </div>
                  <div className="relative mb-1 flex items-center justify-center" title="Active Creative Studio">
                    <span className="animate-ping absolute inline-flex h-3.5 w-3.5 rounded-full bg-[#C96B5A] opacity-60" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C96B5A]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-end border-t border-white/10 pt-5 text-[10px] font-mono uppercase tracking-[.22em] text-white/35 sm:mt-20">
          <span>Based in Kerala · Working across screens</span>
        </div>
      </div>
    </section>
  );
};
