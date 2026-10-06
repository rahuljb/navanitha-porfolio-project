import React from 'react';
import { ArrowDown, ArrowRight, Play } from 'lucide-react';
import { creatorProfile } from '../data/projects';
import { getProfileImageUrl } from '../assets/profileImage';

export const Hero: React.FC = () => {
  const profileImg = getProfileImageUrl();

  const scrollToIntro = () => {
    document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="modern-hero relative min-h-[92svh] w-full overflow-hidden bg-[#0A0A0A] text-[#F4F1EB]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(201,107,90,.10),transparent_34%)]" />
        <div className="film-grain absolute inset-0 opacity-30" />
      </div>

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
              <button onClick={scrollToIntro} className="group inline-flex shrink-0 items-center gap-3 text-[10px] font-mono uppercase tracking-[0.24em] text-[#F4F1EB] transition-colors hover:text-[#C96B5A]">
                Explore profile
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:pb-2">
            <div className="profile-modern-card group relative mx-auto w-full max-w-[470px] overflow-hidden rounded-[28px] border border-white/12 bg-[#F4F1EB] p-2 text-[#111] shadow-[0_35px_100px_rgba(0,0,0,.42)] transition-[transform,box-shadow] duration-700 [transition-timing-function:cubic-bezier(.22,1,.36,1)] hover:-translate-x-2 hover:-translate-y-2 hover:scale-[1.018] hover:shadow-[0_45px_120px_rgba(0,0,0,.55)] lg:ml-auto">
              <div className="relative aspect-[4/4.55] overflow-hidden rounded-[22px] bg-[#ded9d0]">
                <img src={profileImg} alt={creatorProfile.name} className="h-full w-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute left-5 right-5 top-5 flex items-center justify-between text-[9px] font-mono uppercase tracking-[.2em] text-white/80">
                  <span>NV / 01</span>
                  <span>VISUAL STORYTELLER</span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                  <div>
                    <p className="font-serif text-2xl leading-none">{creatorProfile.name}</p>
                    <p className="mt-2 text-[9px] font-mono uppercase tracking-[.2em] text-white/60">Filmmaker · Director · Creator</p>
                  </div>
                  <button onClick={scrollToWork} aria-label="View selected work" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition-all duration-500 hover:scale-110 hover:bg-[#C96B5A] hover:border-[#C96B5A]">
                    <Play className="ml-0.5 h-4 w-4 fill-current" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-5 text-[10px] font-mono uppercase tracking-[.22em] text-white/35 sm:mt-20">
          <button onClick={scrollToIntro} className="group inline-flex items-center gap-2 hover:text-white/70 transition-colors">
            <ArrowDown className="h-3.5 w-3.5 text-[#C96B5A] transition-transform duration-500 group-hover:translate-y-1" />
            Scroll to introduction
          </button>
          <span className="hidden sm:block">Based in Kerala · Working across screens</span>
        </div>
      </div>
    </section>
  );
};
