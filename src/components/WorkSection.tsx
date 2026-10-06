import React, { useMemo, useState } from 'react';
import { selectedWorkVideos, SelectedWorkService } from '../data/videos';
import { VideoWorkCard } from './VideoWorkCard';

const filters: Array<{ id: 'ALL' | SelectedWorkService; label: string }> = [
  { id: 'ALL', label: 'ALL WORK' },
  { id: '01', label: 'FILMS & PRODUCTION' },
  { id: '02', label: 'CELEBRITY INTERVIEW' },
];

export const WorkSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | SelectedWorkService>('ALL');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const visibleVideos = useMemo(() => {
    if (activeFilter === 'ALL') return selectedWorkVideos;
    return selectedWorkVideos.filter((video) => video.serviceNumber === activeFilter);
  }, [activeFilter]);

  return (
    <section id="work" className="relative w-full overflow-hidden bg-[#0A0A0A] py-28 sm:py-36 lg:py-44 px-6 sm:px-10 lg:px-12 border-b border-[#1A1A1A]">
      <div className="max-w-[1380px] mx-auto">
        <header className="mb-12 sm:mb-16 lg:mb-20">
          <div className="border-t border-[#252525] pt-5 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="flex items-start gap-5 sm:gap-8">
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.22em] text-[#C96B5A] pt-1">04</span>
              <div>
                <p className="text-[10px] sm:text-xs font-mono tracking-[0.24em] text-[#777] uppercase mb-4">
                  Verified YouTube Screenings / 2024—2025
                </p>
                <h2 className="text-5xl sm:text-7xl lg:text-[7.5rem] leading-[0.82] font-serif font-normal tracking-[-0.045em] text-[#F4F1EB]">
                  SELECTED<br /><span className="italic text-[#BEBBB4]">WORK</span>
                </h2>
              </div>
            </div>
            <p className="max-w-sm text-xs sm:text-sm leading-6 text-[#777] font-light">
              Curated moving-image projects streaming directly via YouTube across mini web series, narrative short films, dramatic sketches, and celebrity interviews.
            </p>
          </div>

          <div className="mt-10 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filters.map((filter) => {
              const active = activeFilter === filter.id;
              const count = filter.id === 'ALL'
                ? selectedWorkVideos.length
                : selectedWorkVideos.filter((video) => video.serviceNumber === filter.id).length;

              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => {
                    setActiveFilter(filter.id);
                    setHoveredIndex(null);
                  }}
                  className={`shrink-0 rounded-full border px-4 py-2 text-[9px] font-mono uppercase tracking-[0.16em] transition-all duration-300 cursor-pointer ${
                    active
                      ? 'border-[#C96B5A] bg-[#C96B5A] text-[#0A0A0A] font-semibold'
                      : 'border-[#292929] bg-[#101010] text-[#777] hover:border-[#555] hover:text-[#F4F1EB]'
                  }`}
                >
                  {filter.label} <span className="ml-1 opacity-70">{String(count).padStart(2, '0')}</span>
                </button>
              );
            })}
          </div>
        </header>

        {visibleVideos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-12 lg:gap-y-16">
            {visibleVideos.map((video, index) => (
              <VideoWorkCard
                key={`${video.serviceNumber}-${video.id}`}
                video={video}
                index={index}
                hoveredIndex={hoveredIndex}
                onHover={() => setHoveredIndex(index)}
                onLeave={() => setHoveredIndex(null)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
