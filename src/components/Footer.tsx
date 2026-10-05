import React from 'react';
import { ArrowUp } from 'lucide-react';
import { creatorProfile } from '../data/projects';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0A0A0A] text-[#8A8A8A] py-16 sm:py-24 px-6 sm:px-10 lg:px-12 border-t border-[#161616]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Footer Block */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          
          <div className="space-y-2 max-w-sm">
            <h3 className="text-xl sm:text-2xl font-serif text-[#F4F1EB] tracking-wider uppercase">
              {creatorProfile.name}
            </h3>
            <p className="text-xs font-mono tracking-widest uppercase text-[#8A8A8A]">
              Visual Storyteller · Filmmaker · Director
            </p>
          </div>

          {/* Social and Direct Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-xs font-mono tracking-widest uppercase">
            <a
              href={creatorProfile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F4F1EB] hover:text-[#C96B5A] transition-colors"
            >
              Instagram
            </a>
            <a
              href={creatorProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F4F1EB] hover:text-[#C96B5A] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={creatorProfile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F4F1EB] hover:text-[#C96B5A] transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${creatorProfile.email}`}
              className="text-[#F4F1EB] hover:text-[#C96B5A] transition-colors"
            >
              Email
            </a>
          </div>

        </div>

        {/* Bottom Tier: Copyright & Back-to-Top */}
        <div className="pt-8 border-t border-[#161616] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#555555]">
          <div>
            © 2026 {creatorProfile.name}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[#8A8A8A] hover:text-[#F4F1EB] transition-colors cursor-pointer tracking-widest uppercase"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1 text-[#C96B5A]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
