import React from 'react';
import { ArrowUp, Instagram, Linkedin, Mail } from 'lucide-react';
import { creatorProfile } from '../data/projects';

const WhatsAppLogo: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z"/>
  </svg>
);

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

          {/* Social and Direct Links with Respective Logos */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-mono tracking-widest uppercase">
            <a
              href={creatorProfile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[#F4F1EB] hover:text-[#C96B5A] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5 text-[#8A8A8A] group-hover:text-[#E4405F] transition-colors shrink-0" />
              <span>Instagram</span>
            </a>
            <a
              href={creatorProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[#F4F1EB] hover:text-[#C96B5A] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#8A8A8A] group-hover:text-[#0A66C2] transition-colors shrink-0" />
              <span>LinkedIn</span>
            </a>
            <a
              href={creatorProfile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[#F4F1EB] hover:text-[#C96B5A] transition-colors"
              aria-label="WhatsApp"
            >
              <WhatsAppLogo className="w-3.5 h-3.5 text-[#8A8A8A] group-hover:text-[#25D366] transition-colors shrink-0" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`mailto:${creatorProfile.email}`}
              className="group inline-flex items-center gap-2 text-[#F4F1EB] hover:text-[#C96B5A] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-3.5 h-3.5 text-[#8A8A8A] group-hover:text-[#EA4335] transition-colors shrink-0" />
              <span>Email</span>
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
