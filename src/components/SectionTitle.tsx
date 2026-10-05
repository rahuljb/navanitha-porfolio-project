import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  kicker?: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'left',
  kicker,
  className = ''
}) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {kicker && (
        <span className="block text-xs font-mono tracking-widest text-[#777777] uppercase mb-2">
          {kicker}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111111] font-normal tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-[#777777] font-light max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
