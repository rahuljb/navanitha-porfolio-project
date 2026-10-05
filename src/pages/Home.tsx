import React from 'react';
import { Hero } from '../components/Hero';
import { IntroSection } from '../components/IntroSection';
import { AboutSection } from '../components/AboutSection';
import { Journey } from '../components/Journey';
import { WorkSection } from '../components/WorkSection';
import { ProductionSection } from '../components/ProductionSection';
import { CreativeStatement } from '../components/CreativeStatement';
import { CategoryList } from '../components/CategoryList';
import { ContactSection } from '../components/ContactSection';

export const Home: React.FC = () => {
  return (
    <div className="relative w-full bg-[#0A0A0A] text-[#F4F1EB] overflow-hidden">
      {/* 1. HERO with 100vh, off-center warm ivory card, portrait, angled transition */}
      <Hero />

      {/* 2. INTRODUCTION (01 — INTRODUCTION, "I CREATE STORIES THAT STAY.") */}
      <IntroSection />

      {/* 3. ABOUT ME (02 — ABOUT ME, "STORIES. EMOTIONS. VISUALS.", broken narrative) */}
      <AboutSection />

      {/* 4. CREATIVE JOURNEY (03 — MY JOURNEY, FILMMAKING -> TELEVISION -> DIGITAL MEDIA -> DIRECTING -> PRODUCTION -> CONTENT CREATION) */}
      <Journey />

      {/* 5. SELECTED WORK (04 — SELECTED WORK, alternating editorial image/text layouts) */}
      <WorkSection />

      {/* 6. PRODUCTION / VIDEOS (05 — PRODUCTION, theater presentation of the 4 YouTube projects with 01-04 switcher) */}
      <ProductionSection />

      {/* 7. CREATIVE STATEMENT ("STORIES ARE EVERYWHERE.") */}
      <CreativeStatement />

      {/* 8. WHAT I DO / WORK CATEGORIES (06 — WHAT I DO, 01-06 with hover reveals) */}
      <CategoryList />

      {/* 9. CONTACT (07 — LET'S CREATE SOMETHING MEANINGFUL, Gmail, WhatsApp, LinkedIn, Instagram & simple form) */}
      <ContactSection />
    </div>
  );
};
