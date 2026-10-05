import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  number: string;
  title: string;
  path: string;
  count?: number;
  previewImage?: string;
  description?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  number,
  title,
  path,
  count,
  previewImage,
  description
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={path}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative block py-8 sm:py-12 border-b border-[#DDDBD6] transition-colors hover:border-[#111111]"
      aria-label={`Explore ${title} category`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        {/* Left: Number + Title */}
        <div className="flex items-baseline gap-6 sm:gap-12">
          <span className="text-sm sm:text-base font-mono text-[#777777] group-hover:text-[#111111] transition-colors">
            {number}
          </span>
          <div>
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#111111] group-hover:italic transition-all duration-300 font-normal tracking-tight">
              {title}
            </h3>
            {description && (
              <p className="mt-2 text-xs sm:text-sm text-[#777777] font-light max-w-md hidden sm:block">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Right: Count & Arrow */}
        <div className="flex items-center gap-6 self-end sm:self-center">
          {count !== undefined && (
            <span className="text-xs font-mono text-[#777777] hidden md:inline-block">
              {count} {count === 1 ? 'Project' : 'Projects'}
            </span>
          )}

          <div className="text-[#111111] transition-transform duration-300 group-hover:translate-x-3">
            <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 stroke-[1.2]" />
          </div>
        </div>

      </div>

      {/* Floating Preview Image on Hover (Desktop) */}
      {previewImage && isHovered && (
        <div
          aria-hidden="true"
          className="pointer-events-none hidden lg:block fixed right-32 top-1/2 -translate-y-1/2 w-72 h-44 z-30 overflow-hidden shadow-2xl rounded-sm border border-[#DDDBD6] animate-fade-in"
        >
          <img
            src={previewImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </Link>
  );
};
