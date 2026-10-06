import diary0055 from '../assets/visualdiary/IMG_0055.JPG';
import diary0733 from '../assets/visualdiary/IMG_0733.JPG';
import diary2137 from '../assets/visualdiary/IMG_2137.JPG';
import diary2275 from '../assets/visualdiary/IMG_2275.JPG';
import diary2343 from '../assets/visualdiary/IMG_2343.JPG';
import diary7778 from '../assets/visualdiary/IMG_7778.JPG';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

type PhotographyPhoto = {
  id: string;
  src: string;
  category: 'Portraits' | 'Visual Diary';
  width: number;
  height: number;
};

/**
 * Real files from /public/images only.
 * Width/height are the source dimensions so the masonry layout can preserve
 * each photograph's native aspect ratio without cropping or distortion.
 */
const photographyPhotos: PhotographyPhoto[] = [
  { id: 'portrait-1018', src: '/images/portraits/IMG_1018.JPG', category: 'Portraits', width: 1800, height: 2700 },
  { id: 'diary-0055', src: diary0055, category: 'Visual Diary', width: 6000, height: 4000 },
  { id: 'diary-0733', src: diary0733, category: 'Visual Diary', width: 6000, height: 4000 },
  { id: 'diary-2137', src: diary2137, category: 'Visual Diary', width: 6000, height: 4000 },
  { id: 'diary-2275', src: diary2275, category: 'Visual Diary', width: 6000, height: 4000 },
  { id: 'diary-2343', src: diary2343, category: 'Visual Diary', width: 6000, height: 4000 },
  { id: 'diary-7778', src: diary7778, category: 'Visual Diary', width: 6000, height: 4000 },
  { id: 'portrait-1094', src: '/images/portraits/IMG_1094.JPG', category: 'Portraits', width: 1800, height: 2700 },
  { id: 'portrait-1112', src: '/images/portraits/IMG_1112.JPG', category: 'Portraits', width: 1800, height: 2700 },
  { id: 'portrait-2776', src: '/images/portraits/IMG_2776.JPG', category: 'Portraits', width: 1800, height: 2700 },
  { id: 'portrait-6726', src: '/images/portraits/IMG_6726.JPG', category: 'Portraits', width: 1800, height: 2700 },
  { id: 'portrait-6837', src: '/images/portraits/IMG_6837.JPG', category: 'Portraits', width: 1800, height: 2700 },
];

/**
 * Pinterest-style masonry: put the next image into the column with the
 * smallest projected height. This keeps the original aspect ratios while
 * naturally creating an intentionally irregular composition.
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

  const close = useCallback(() => setActiveIndex(null), []);
  const previous = useCallback(() => {
    setActiveIndex((current) => current === null ? null : (current - 1 + images.length) % images.length);
  }, [images.length]);
  const next = useCallback(() => {
    setActiveIndex((current) => current === null ? null : (current + 1) % images.length);
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
          className="group block w-full overflow-hidden rounded-[22px] bg-black/[0.035] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C96B5A]"
          aria-label={`Open ${photo.category.toLowerCase()} photograph ${index + 1}`}
        >
          <img
            src={photo.src}
            alt={`${photo.category} photograph`}
            width={photo.width}
            height={photo.height}
            sizes="(min-width: 1024px) 31vw, (min-width: 640px) 47vw, 94vw"
            className="block w-full h-auto rounded-[22px] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.015]"
            loading={index < 3 ? 'eager' : 'lazy'}
            decoding="async"
          />
        </button>
        <figcaption className="mt-2 px-1 text-[9px] font-mono uppercase tracking-[0.18em] text-black/40">
          {String(index + 1).padStart(2, '0')} · {photo.category}
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

        {/*
          True masonry composition:
          - 3 independent columns on desktop
          - 2 columns on tablet
          - 1 column on mobile
          - every image keeps its native aspect ratio
          - no object-cover, no forced height, no cropping
        */}
        <div className="mt-10 sm:mt-14">
          <div className="hidden lg:grid grid-cols-3 gap-5 sm:gap-6 items-start">
            {desktopColumns.map((column, columnIndex) => (
              <div key={`desktop-column-${columnIndex}`} className="min-w-0">
                {column.map(renderPhoto)}
              </div>
            ))}
          </div>

          <div className="hidden sm:grid lg:hidden grid-cols-2 gap-5 sm:gap-6 items-start">
            {distributeIntoColumns(photographyPhotos, 2).map((column, columnIndex) => (
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

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-5 sm:p-10"
          role="dialog"
          aria-modal="true"
          aria-label="Photography viewer"
          onClick={close}
        >
          <button onClick={close} className="absolute top-5 right-5 sm:top-8 sm:right-8 text-white/70 hover:text-white transition-colors" aria-label="Close photography viewer">
            <X className="w-7 h-7" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); previous(); }} className="absolute left-2 sm:left-8 text-white/70 hover:text-white transition-colors p-3" aria-label="Previous photograph">
            <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
          <img
            src={images[activeIndex]}
            alt={`${photographyPhotos[activeIndex].category} photograph`}
            className="max-h-[88vh] max-w-[90vw] w-auto h-auto object-contain shadow-2xl rounded-[18px]"
            onClick={(e) => e.stopPropagation()}
          />
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-2 sm:right-8 text-white/70 hover:text-white transition-colors p-3" aria-label="Next photograph">
            <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
          <div className="absolute bottom-5 left-0 right-0 text-center text-[10px] font-mono uppercase tracking-[0.2em] text-white/55">
            {String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')} · {photographyPhotos[activeIndex].category}
          </div>
        </div>
      )}
    </section>
  );
};
