import React, { useCallback, useMemo, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portraitPhotos, visualDiaryPhotos } from '../data/portraits';

const featuredPhotos = [
  portraitPhotos[0],
  visualDiaryPhotos[0],
  portraitPhotos[1],
  visualDiaryPhotos[1],
  portraitPhotos[3],
  visualDiaryPhotos[2],
].filter(Boolean);

export const PhotographySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const images = useMemo(() => featuredPhotos.map((photo) => photo.imageSrc), []);

  const close = useCallback(() => setActiveIndex(null), []);
  const previous = useCallback(() => {
    setActiveIndex((current) => current === null ? null : (current - 1 + images.length) % images.length);
  }, [images.length]);
  const next = useCallback(() => {
    setActiveIndex((current) => current === null ? null : (current + 1) % images.length);
  }, [images.length]);

  React.useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') previous();
      if (event.key === 'ArrowRight') next();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeIndex, close, previous, next]);

  return (
    <section id="photography" className="relative w-full bg-[#F1EEE7] text-[#111111] border-b border-black/10 py-24 sm:py-32 px-5 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-10 sm:pb-14 border-b border-black/15">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.22em] text-[#C96B5A] mb-5">
              <span>05</span>
              <span className="w-8 h-px bg-black/20" />
              <span>PHOTOGRAPHY</span>
            </div>
            <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal tracking-[-0.04em] leading-[0.88]">
              Still moments,<br />
              <span className="italic text-black/45">kept alive.</span>
            </h2>
          </div>
          <div className="max-w-sm space-y-5">
            <p className="text-sm sm:text-base text-black/55 leading-relaxed">
              Portraits and visual diary frames built around people, atmosphere, quiet details, and the moments between the planned ones.
            </p>
            <Link
              to="/work/photography"
              className="inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.18em] border-b border-black/30 pb-2 hover:border-[#C96B5A] hover:text-[#C96B5A] transition-colors"
            >
              View full photography archive
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 [column-fill:_balance]">
          {featuredPhotos.map((photo, index) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative mb-4 sm:mb-5 w-full break-inside-avoid overflow-hidden rounded-[24px] bg-[#DDD8CF] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C96B5A]"
              aria-label={`Open ${photo.category.toLowerCase()} photograph`}
            >
              <img
                src={photo.imageSrc}
                alt={`${photo.category} photograph`}
                className="block w-full h-auto rounded-[24px] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.015]"
                loading={index < 3 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-5 sm:p-10" role="dialog" aria-modal="true" aria-label="Photography viewer">
          <button onClick={close} className="absolute top-5 right-5 sm:top-8 sm:right-8 text-white/70 hover:text-white transition-colors" aria-label="Close photography viewer">
            <X className="w-7 h-7" />
          </button>
          <button onClick={previous} className="absolute left-2 sm:left-8 text-white/70 hover:text-white transition-colors p-3" aria-label="Previous photograph">
            <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
          <img src={images[activeIndex]} alt="Photography" className="max-h-[86vh] max-w-[88vw] object-contain shadow-2xl" />
          <button onClick={next} className="absolute right-2 sm:right-8 text-white/70 hover:text-white transition-colors p-3" aria-label="Next photograph">
            <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
          <div className="absolute bottom-5 left-0 right-0 text-center text-[10px] font-mono uppercase tracking-[0.2em] text-white/55">
            {String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')} · {featuredPhotos[activeIndex].category}
          </div>
        </div>
      )}
    </section>
  );
};
