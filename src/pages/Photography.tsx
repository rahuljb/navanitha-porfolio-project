import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  ArrowLeft, 
  User, 
  BookOpen, 
  Layers, 
  Film, 
  Maximize2
} from 'lucide-react';
import { Lightbox } from '../components/Lightbox';
import { CreativeStatement } from '../components/CreativeStatement';
import { ContactSection } from '../components/ContactSection';
import { portraitPhotos, visualDiaryPhotos, type PortraitPhoto } from '../data/portraits';

interface GalleryItem extends PortraitPhoto {
  rotationClass?: string;
  tapeColor?: string;
}

export const Photography: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Portraits' | 'Visual Diary'>('Portraits');
  const [viewMode, setViewMode] = useState<'pinterest' | 'filmstrip'>('pinterest');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [errorImages, setErrorImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const allStills: GalleryItem[] = [
    // 01. PORTRAITS — strictly from /public/images/portraits/
    ...portraitPhotos.map((photo, idx) => ({
      ...photo,
      aspectClass: photo.aspectClass || (idx % 2 === 0 ? 'aspect-[4/5]' : 'aspect-[3/4]'),
      rotationClass: idx % 2 === 0 ? 'sm:group-hover:rotate-[-0.6deg]' : 'sm:group-hover:rotate-[0.7deg]',
      tapeColor: idx % 3 === 0 ? 'bg-[#C96B5A]/20' : 'bg-white/10'
    })),
    // 02. VISUAL DIARY — strictly from /public/images/visualdiary/
    ...visualDiaryPhotos.map((photo, idx) => ({
      ...photo,
      aspectClass: photo.aspectClass || (idx % 2 === 0 ? 'aspect-[16/10]' : 'aspect-[4/3]'),
      rotationClass: idx % 2 === 0 ? 'sm:group-hover:rotate-[0.6deg]' : 'sm:group-hover:rotate-[-0.6deg]',
      tapeColor: idx % 2 === 0 ? 'bg-[#C96B5A]/20' : 'bg-white/10'
    }))
  ];

  // Filter strictly by the respective category/folder
  const categoryStills = activeCategory === 'All'
    ? allStills
    : allStills.filter((item) => item.category === activeCategory);

  // Only display photos that exist on disk in their respective folder
  const availablePhotos = categoryStills.filter((p) => !errorImages[p.id]);
  const imageUrls = availablePhotos.map((p) => p.imageSrc);

  const portraitsLiveCount = portraitPhotos.filter((p) => !errorImages[p.id]).length;
  const diaryLiveCount = visualDiaryPhotos.filter((p) => !errorImages[p.id]).length;
  const totalLiveCount = portraitsLiveCount + diaryLiveCount;

  return (
    <div className="pt-24 bg-[#0A0A0A] text-[#F4F1EB] min-h-screen selection:bg-[#C96B5A] selection:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-8 pb-28 space-y-12 sm:space-y-16">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-[#1A1A1A] pb-6">
          <RouterLink
            to="/#journey"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8A8A8A] hover:text-[#C96B5A] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO JOURNEY</span>
          </RouterLink>

          <div className="flex items-center gap-3 text-xs font-mono text-[#8A8A8A]">
            <span className="text-[#C96B5A]">PHASE 04</span>
            <span className="text-[#333333]">/</span>
            <span>PHOTOGRAPHY</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center space-y-5 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-xs font-mono tracking-widest text-[#C96B5A] uppercase">
            <span>04 — STILLS &amp; ARCHIVE</span>
            <span className="w-6 h-[1px] bg-[#333333]" />
            <span className="text-[#8A8A8A]">PORTRAITS &amp; VISUAL DIARY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#F4F1EB] font-normal tracking-tight">
            PHOTOGRAPHY
          </h1>

          <p className="text-sm sm:text-base text-[#8A8A8A] font-light leading-relaxed max-w-2xl mx-auto">
            An evolving visual archive of human stories and lived moments, exploring character, atmosphere, natural light, urban rhythms, and the quiet beauty found in ordinary places.
          </p>
        </div>

        {/* Primary Controls: Filter Tabs + Layout Mode Switcher */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-[#1C1C1C] pb-6">
          
          {/* Category Tabs: PORTRAITS | ALL | VISUAL DIARY */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setActiveCategory('Portraits')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === 'Portraits'
                  ? 'bg-[#C96B5A] text-white shadow-lg shadow-[#C96B5A]/25'
                  : 'bg-[#121212] text-[#8A8A8A] border border-[#222222] hover:border-[#444444] hover:text-[#F4F1EB]'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Portraits ({portraitsLiveCount})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory('All')}
              className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === 'All'
                  ? 'bg-[#C96B5A] text-white shadow-lg shadow-[#C96B5A]/25'
                  : 'bg-[#121212] text-[#8A8A8A] border border-[#222222] hover:border-[#444444] hover:text-[#F4F1EB]'
              }`}
            >
              All Stills ({totalLiveCount})
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory('Visual Diary')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === 'Visual Diary'
                  ? 'bg-[#C96B5A] text-white shadow-lg shadow-[#C96B5A]/25'
                  : 'bg-[#121212] text-[#8A8A8A] border border-[#222222] hover:border-[#444444] hover:text-[#F4F1EB]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Visual Diary ({diaryLiveCount})</span>
            </button>
          </div>

          {/* View Mode Switcher: Pinterest Collage vs 35mm Filmstrip */}
          <div className="flex items-center gap-1.5 bg-[#121212] p-1 rounded-lg border border-[#222222]">
            <button
              type="button"
              onClick={() => setViewMode('pinterest')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-[11px] font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                viewMode === 'pinterest'
                  ? 'bg-[#222222] text-[#F4F1EB] shadow-sm'
                  : 'text-[#777777] hover:text-[#DDDBD6]'
              }`}
              title="Pinterest Editorial Collage"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Pinterest Collage</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('filmstrip')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-[11px] font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                viewMode === 'filmstrip'
                  ? 'bg-[#222222] text-[#C96B5A] shadow-sm'
                  : 'text-[#777777] hover:text-[#DDDBD6]'
              }`}
              title="35mm Filmstrip Contact Sheet"
            >
              <Film className="w-3.5 h-3.5" />
              <span>35mm Filmstrip</span>
            </button>
          </div>

        </div>

        {/* --- VIEW 1: PURE PINTEREST-INSPIRED EDITORIAL IMAGE COLLAGE --- */}
        {viewMode === 'pinterest' && (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {availablePhotos.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => setLightboxIndex(idx)}
                className={`break-inside-avoid group cursor-pointer relative rounded-xl bg-[#0D0D0D] border border-[#1E1E1E] hover:border-[#C96B5A]/80 transition-all duration-500 shadow-xl overflow-hidden ${photo.rotationClass || ''}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setLightboxIndex(idx);
                  }
                }}
                aria-label="View photo"
              >
                {/* Decorative Translucent Tape Accent */}
                <div 
                  className={`absolute -top-1.5 left-6 w-12 h-3.5 ${photo.tapeColor || 'bg-white/10'} backdrop-blur-md rounded-sm pointer-events-none z-30 shadow-sm border border-white/10`} 
                />

                {/* Pure Image Frame */}
                <div className={`relative ${photo.aspectClass} w-full overflow-hidden bg-[#111111]`}>
                  <img
                    src={photo.imageSrc}
                    alt="Photography still"
                    onError={() => {
                      setErrorImages((prev) => ({ ...prev, [photo.id]: true }));
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    loading="eager"
                    decoding="async"
                  />

                  {/* Subtle Minimalist Hover Action */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md text-[#F4F1EB] flex items-center justify-center shadow-lg border border-white/20 transform scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --- VIEW 2: 35MM FILMSTRIP CONTACT SHEET --- */}
        {viewMode === 'filmstrip' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between text-xs font-mono text-[#8A8A8A] uppercase tracking-widest pb-2 border-b border-[#181818]">
              <div className="flex items-center gap-2">
                <Film className="w-3.5 h-3.5 text-[#C96B5A]" />
                <span>35MM ANALOG CONTACT SHEET</span>
              </div>
              <span className="text-[#C96B5A]">{availablePhotos.length} STILLS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {availablePhotos.map((photo, idx) => (
                <div
                  key={photo.id}
                  onClick={() => setLightboxIndex(idx)}
                  className="group cursor-pointer bg-[#050505] p-3 sm:p-4 rounded-xl border border-[#222222] hover:border-[#C96B5A] transition-all duration-300 shadow-2xl relative"
                >
                  {/* 35mm Sprocket Holes Header */}
                  <div className="flex justify-between items-center px-2 py-1.5 border-b border-[#1A1A1A] mb-3">
                    <span className="text-[10px] font-mono tracking-widest text-[#555555]">
                      35MM NEGATIVE
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#1A1A1A]" />
                      <span className="w-2 h-2 rounded-full bg-[#1A1A1A]" />
                      <span className="w-2 h-2 rounded-full bg-[#1A1A1A]" />
                    </div>
                    <span className="text-[10px] font-mono text-[#C96B5A] font-bold">
                      ▲ {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Frame */}
                  <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden rounded bg-black">
                    <img
                      src={photo.imageSrc}
                      alt="Photography still"
                      onError={() => {
                        setErrorImages((prev) => ({ ...prev, [photo.id]: true }));
                      }}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="eager"
                      decoding="async"
                    />

                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md text-[#F4F1EB] flex items-center justify-center shadow-lg border border-white/20">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pure Fullscreen Lightbox */}
        <Lightbox
          isOpen={lightboxIndex !== null && imageUrls.length > 0}
          images={imageUrls}
          currentIndex={lightboxIndex || 0}
          caption=""
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((prev) =>
              prev !== null ? (prev - 1 + imageUrls.length) % imageUrls.length : 0
            )
          }
          onNext={() =>
            setLightboxIndex((prev) =>
              prev !== null ? (prev + 1) % imageUrls.length : 0
            )
          }
        />

      </div>

      <CreativeStatement />
      <ContactSection />
    </div>
  );
};
