import React from 'react';

export const CreativeStatement: React.FC = () => {
  return (
    <section className="relative w-full py-32 sm:py-48 px-6 sm:px-10 lg:px-12 overflow-hidden bg-[#0A0A0A] border-b border-[#1A1A1A] text-center">
      {/* Subtle Background Texture & Dark Atmospheric Scrim */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=2400&q=80"
          alt="Cinematic Texture"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]" />
        <div className="absolute inset-0 film-grain" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        
        <span className="text-xs font-mono tracking-widest text-[#C96B5A] uppercase block">
          CREATIVE STATEMENT
        </span>

        <h2 className="text-5xl sm:text-7xl md:text-8xl font-serif text-[#F4F1EB] font-normal tracking-tight leading-[0.95]">
          “STORIES<br />
          ARE<br />
          <span className="italic font-light">EVERYWHERE.”</span>
        </h2>

        <p className="text-base sm:text-xl text-[#8A8A8A] font-light max-w-2xl mx-auto leading-relaxed pt-4">
          Inspired by human emotions, everyday moments, and the beauty of visual expression, I strive to turn ideas into meaningful stories.
        </p>

      </div>
    </section>
  );
};
