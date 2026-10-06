import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { graphicDesignPhotos, portraitPhotos, visualDiaryPhotos } from '../data/portraits';

type PhotographyPhoto = {
  id: string;
  src: string;
  title?: string;
  category: 'Graphic Design' | 'Portraits' | 'Visual Diary';
  width: number;
  height: number;
};

// All visual works prioritized: 1. Portraits, 2. Visual Diary, 3. Graphic Design
const photographyPhotos: PhotographyPhoto[] = [
  // 1. Portraits — highest priority
  ...portraitPhotos.map((p) => ({
    id: p.id,
    src: p.imageSrc,
    title: p.title,
    category: p.category,
    width: p.width || 1800,
    height: p.height || 2700,
  })),
  // 2. Visual Diary — second priority
  ...visualDiaryPhotos.map((p) => ({
    id: p.id,
    src: p.imageSrc,
    title: p.title,
    category: p.category,
    width: p.width || 6000,
    height: p.height || 4000,
  })),
  // 3. Graphic Design — third priority
  ...graphicDesignPhotos.map((p) => ({
    id: p.id,
    src: p.imageSrc,
    title: p.title,
    category: p.category,
    width: p.width || 2480,
    height: p.height || 3508,
  })),
];

/**
 * Pinterest-style masonry: put the next image into the column with the
 * smallest projected height. Preserves native aspect ratios without cropping.
 */
const distributeIntoColumns = (photos: PhotographyPhoto[], count: number) => {
  const columns: PhotographyPhoto[][] = Array.from({ length: count }, () => []);
  const heights = Array.from({ length: count }, () => 0);

  photos.forEach((photo) => {
    const shortestColumn = heights.indexOf(Math.min(...heights));
    columns[shortestColumn].push(photo);
    heights[shortestColumn] += photo.height / photo.width;
  });

  return columns;
};

export const PhotographySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const images = useMemo(() => photographyPhotos.map((photo) => photo.src), []);
  const desktopColumns = useMemo(() => distributeIntoColumns(photographyPhotos, 3), []);
  const tabletColumns = useMemo(() => distributeIntoColumns(photographyPhotos, 2), []);

  const close = useCallback(() => setActiveIndex(null), []);
  const previous = useCallback(() => {
    setActiveIndex((current) => (current === null ? null : (current - 1 + images.length) % images.length));
  }, [images.length]);
  const next = useCallback(() => {
    setActiveIndex((current) => (current === null ? null : (current + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
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

  const renderPhoto = (photo: PhotographyPhoto) => {
    const index = photographyPhotos.findIndex((item) => item.id === photo.id);
    return (
      <figure key={photo.id} className="mb-5 sm:mb-6 break-inside-avoid">
        <button
          type="button"
          onClick={() => setActiveIndex(index)}
          className="group block w-full overflow-hidden rounded-[22px] bg-black/[0.035] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C96B5A] cursor-pointer"
          aria-label={`Open ${photo.category.toLowerCase()} ${photo.title || 'photo'} ${index + 1}`}
        >
          <img
            src={photo.src}
            alt={photo.title || `${photo.category} image`}
            width={photo.width}
            height={photo.height}
            sizes="(min-width: 1024px) 31vw, (min-width: 640px) 47vw, 94vw"
            className="block w-full h-auto rounded-[22px] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.018]"
            loading={index < 4 ? 'eager' : 'lazy'}
            decoding="async"
          />
        </button>
        <figcaption className="mt-2.5 px-1.5 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.18em] text-black/55">
          <span className="truncate font-medium">{photo.title || photo.category}</span>
          <span className="text-black/35 shrink-0 ml-2">{photo.category}</span>
        </figcaption>
      </figure>
    );
  };

  return (
    <section id="photography" className="relative w-full bg-[#F1EEE7] text-[#111111] border-b border-black/10 py-24 sm:py-32 px-5 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-10 sm:pb-14 border-b border-black/15">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.22em] text-[#C96B5A] mb-5">
              <span>05</span>
              <span className="w-8 h-px bg-black/20" />
              <span>PHOTOGRAPHY &amp; GRAPHIC DESIGN</span>
            </div>
            <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal tracking-[-0.04em] leading-[0.88]">
              Still moments,<br />
              <span className="italic text-black/45">posters &amp; print.</span>
            </h2>
          </div>
          <div className="max-w-sm space-y-5">
            <p className="text-sm sm:text-base text-black/60 leading-relaxed">
              Film posters, brand advertising, magazine covers, intimate portraits, and quiet visual diary captures exploring narrative design and human moments.
            </p>
            <Link
              to="/work/photography"
              className="inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.18em] border-b border-black/30 pb-2 hover:border-[#C96B5A] hover:text-[#C96B5A] transition-colors"
            >
              View full gallery archive
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Masonry composition */}
        <div className="mt-12 sm:mt-16">
          <div className="hidden lg:grid grid-cols-3 gap-5 sm:gap-6 items-start">
            {desktopColumns.map((column, columnIndex) => (
              <div key={`desktop-column-${columnIndex}`} className="min-w-0">
                {column.map(renderPhoto)}
              </div>
            ))}
          </div>

          <div className="hidden sm:grid lg:hidden grid-cols-2 gap-5 sm:gap-6 items-start">
            {tabletColumns.map((column, columnIndex) => (
              <div key={`tablet-column-${columnIndex}`} className="min-w-0">
                {column.map(renderPhoto)}
              </div>
            ))}
          </div>

          <div className="grid sm:hidden grid-cols-1 gap-5 items-start">
            {photographyPhotos.map(renderPhoto)}
          </div>
        </div>
      </div>

      {/* Lightbox Viewer */}
      {activeIndex !== null && photographyPhotos[activeIndex] && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-5 sm:p-10 select-none"
          role="dialog"
          aria-modal="true"
          aria-label="Photography viewer"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-5 right-5 sm:top-8 sm:right-8 text-white/70 hover:text-white transition-colors cursor-pointer"
            aria-label="Close photography viewer"
          >
            <X className="w-7 h-7" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              previous();
            }}
            className="absolute left-2 sm:left-8 text-white/70 hover:text-white transition-colors p-3 cursor-pointer"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>

          <div
            className="max-h-[86vh] max-w-[92vw] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[activeIndex]}
              alt={photographyPhotos[activeIndex].title || `${photographyPhotos[activeIndex].category} image`}
              className="max-h-[80vh] max-w-[90vw] w-auto h-auto object-contain shadow-2xl rounded-[14px]"
            />
            <div className="mt-3 text-center">
              <h4 className="text-sm sm:text-base font-serif text-[#F4F1EB]">
                {photographyPhotos[activeIndex].title || photographyPhotos[activeIndex].category}
              </h4>
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/50 mt-1">
                {String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')} · {photographyPhotos[activeIndex].category}
              </p>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 sm:right-8 text-white/70 hover:text-white transition-colors p-3 cursor-pointer"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
        </div>
      )}
    </section>
  );
};
