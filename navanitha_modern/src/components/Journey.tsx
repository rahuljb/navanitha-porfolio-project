import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Film, Tv, Video, Compass, Sparkles, Camera } from 'lucide-react';

interface JourneyPhase {
  number: string;
  step: string;
  domain: string;
  tagline: string;
  description: string;
  targetId: string;
  targetRoute?: string;
  destinationName: string;
  icon: React.ElementType;
  actionText?: string;
  featured?: boolean;
}

const journeyPhases: JourneyPhase[] = [
  {
    number: '01',
    step: 'FILMS & PRODUCTION',
    domain: 'Cinema & Full Production',
    tagline: '3 Screenings: Interview, Short Film & Commercial Ad',
    description: 'Crafting emotionally resonant cinematic stories alongside full physical production leadership — camera direction, scheduling, crew synergy, lighting orchestration, and post-production polish.',
    targetId: 'production',
    targetRoute: '/work/production',
    destinationName: 'Films & Production Showcase',
    actionText: 'WATCH VIDEOS',
    icon: Film,
    featured: true,
  },
  {
    number: '02',
    step: 'CELEBRITY INTERVIEW',
    domain: 'Cinema Interview',
    tagline: 'Interview with Ragul Chandran · Cinema Stream',
    description: 'An intimate, cinematic celebrity interview exploring artistic expression, screen acting, and personal creative journeys.',
    targetId: 'work/celebrity-interview',
    targetRoute: '/work/celebrity-interview',
    destinationName: 'Interview with Ragul Chandran',
    actionText: 'WATCH VIDEO',
    icon: Video,
  },
  {
    number: '03',
    step: 'SOCIAL MEDIA & COMMERCIAL CONTENT',
    domain: 'Brand Campaigns & Viral Motion',
    tagline: '6 Screenings: Commercial Ads, Reels & Web Series',
    description: 'High-impact commercial spots, dynamic brand campaigns, episodic web series, and high-retention short-form reels crafted for modern digital audiences.',
    targetId: 'work/social-media',
    targetRoute: '/work/social-media',
    destinationName: 'Social Media & Commercial Showcase',
    actionText: 'WATCH VIDEOS',
    icon: Sparkles,
  },
  {
    number: '04',
    step: 'PHOTOGRAPHY',
    domain: 'Portraits & Visual Diary',
    tagline: 'Portraits · Visual Diary · Observational Stills',
    description: 'An ongoing visual dialogue with character portraiture, human intimacy, street textures, and contemplative visual diaries captured in ambient natural light.',
    targetId: 'work/photography',
    targetRoute: '/work/photography',
    destinationName: 'Photography: Portraits & Visual Diary',
    actionText: 'EXPLORE PHOTOGRAPHY',
    icon: Camera,
  },
  {
    number: '05',
    step: 'CONTENT CREATION',
    domain: 'Brand & Micro-Stories',
    tagline: 'Human connection in everyday frames',
    description: 'Developing evocative lifestyle pieces, brand vignettes, and short-form storytelling that resonate deeply with today’s viewers.',
    targetId: 'area-content-creation',
    destinationName: '06 — Content Creation',
    icon: Sparkles,
  },
];

export const Journey: React.FC = () => {
  const navigate = useNavigate();

  const handleStepClick = (phase: JourneyPhase) => {
    if (phase.targetRoute) {
      navigate(phase.targetRoute);
      return;
    }
    const element = document.getElementById(phase.targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      element.classList.add('ring-2', 'ring-[#C96B5A]', 'transition-all', 'duration-500');
      setTimeout(() => {
        element.classList.remove('ring-2', 'ring-[#C96B5A]');
      }, 2500);
    }
  };

  return (
    <section id="journey" className="relative w-full py-28 sm:py-40 px-6 sm:px-10 lg:px-12 bg-[#0A0A0A] border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-[#1E1E1E]">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#8A8A8A] uppercase">
              <span className="text-[#C96B5A]">03</span>
              <span className="w-6 h-[1px] bg-[#333333]" />
              <span>EVOLUTION & EXPERTISE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif text-[#F4F1EB] font-normal tracking-tight">
              MY JOURNEY
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm font-mono text-[#8A8A8A] leading-relaxed">
              A continuous path across cinema, broadcast television, and digital visual culture. Click any discipline to jump to its showcase.
            </p>
          </div>
        </div>

        {/* Narrative Progression Ribbon / Chapter Timeline */}
        <div className="hidden lg:grid grid-cols-5 gap-4 text-xs font-mono text-[#666666] pb-2 border-b border-[#161616]">
          {journeyPhases.map((phase, idx) => (
            <div key={phase.number} className="flex items-center gap-2">
              <span className="text-[#C96B5A] font-medium">0{idx + 1}</span>
              <span className="truncate uppercase tracking-wider text-[#A0A0A0]">{phase.step}</span>
              {idx < journeyPhases.length - 1 && <span className="text-[#333333] ml-auto">→</span>}
            </div>
          ))}
        </div>

        {/* 5-Card Cinematic Showcase (Balanced Grid on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {journeyPhases.map((phase) => {
            const IconComponent = phase.icon;

            return (
              <button
                type="button"
                key={phase.step}
                onClick={() => handleStepClick(phase)}
                className={`group relative flex flex-col justify-between p-8 sm:p-9 bg-[#0E0E0E] hover:bg-[#141414] border transition-all duration-300 text-left cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C96B5A] shadow-sm hover:shadow-xl hover:shadow-black/50 ${
                  phase.featured ? 'lg:col-span-2 bg-gradient-to-br from-[#121212] via-[#0E0E0E] to-[#0A0A0A]' : 'lg:col-span-1'
                } ${
                  phase.targetRoute ? 'border-[#C96B5A]/40 hover:border-[#C96B5A]' : 'border-[#1E1E1E] hover:border-[#C96B5A]/80'
                }`}
                title={`Open ${phase.destinationName}`}
              >
                {/* Top Corner Subtle Accent Bar on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C96B5A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="space-y-6">
                  {/* Phase Number & Domain Pill */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-medium tracking-widest text-[#C96B5A]">
                        PHASE {phase.number}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#333333] group-hover:bg-[#C96B5A] transition-colors" />
                      <span className="text-[11px] font-mono tracking-wider uppercase text-[#777777] group-hover:text-[#AAAAAA] transition-colors">
                        {phase.domain}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-[#161616] group-hover:bg-[#C96B5A]/15 border border-[#262626] group-hover:border-[#C96B5A]/40 flex items-center justify-center transition-all duration-300">
                      <IconComponent className="w-4 h-4 text-[#777777] group-hover:text-[#C96B5A] transition-colors" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-serif tracking-tight uppercase text-[#F4F1EB] group-hover:text-white transition-colors">
                      {phase.step}
                    </h3>
                    <p className="text-xs font-mono tracking-wide text-[#C96B5A]/90 italic">
                      {phase.tagline}
                    </p>
                  </div>

                  {/* Narrative Craft Description */}
                  <p className="text-xs sm:text-sm text-[#8A8A8A] group-hover:text-[#B5B5B5] font-light leading-relaxed transition-colors">
                    {phase.description}
                  </p>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-8 mt-6 border-t border-[#1A1A1A] group-hover:border-[#262626] flex items-center justify-between text-xs font-mono uppercase tracking-widest transition-colors">
                  <span className="text-[#888888] group-hover:text-[#F4F1EB] transition-colors flex items-center gap-2">
                    <span>{phase.destinationName}</span>
                  </span>

                  <div className={`flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-x-1 ${
                    phase.actionText ? 'text-[#F4F1EB] bg-[#C96B5A]/20 px-2 py-0.5 rounded border border-[#C96B5A]/40' : 'text-[#C96B5A]'
                  }`}>
                    <span className="text-[11px] font-mono font-medium">{phase.actionText || 'VIEW'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
