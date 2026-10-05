import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects, photographyCategories } from '../data/projects';
import { Lightbox } from '../components/Lightbox';

interface PhotoItem {
  id: string;
  url: string;
  title: string;
  category: string;
  location?: string;
  aspectClass: string;
}

export const Photography: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Collect photography projects and their gallery stills into a curated photography feed
  const photographyProjects = projects.filter((p) => p.category === 'photography');

  const photoItems: PhotoItem[] = [
    {
      id: 'photo-1',
      url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1600&q=80',
      title: 'City Frames: Dawn Transit Crossing',
      category: 'Street',
      location: 'Chennai Central',
      aspectClass: 'aspect-[3/4]'
    },
    {
      id: 'photo-2',
      url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=80',
      title: 'Artisan Portrait in Ambient Window Shadow',
      category: 'Portrait',
      location: 'Studio Madras',
      aspectClass: 'aspect-[4/5]'
    },
    {
      id: 'photo-3',
      url: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1600&q=80',
      title: 'Earth & Clay: Tactile Potter Wheel',
      category: 'Lifestyle',
      location: 'Auroville Retreat',
      aspectClass: 'aspect-[1/1]'
    },
    {
      id: 'photo-4',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
      title: 'Night Harvest & Coromandel Horizon',
      category: 'Personal Work',
      location: 'Bay of Bengal Coast',
      aspectClass: 'aspect-[16/10]'
    },
    {
      id: 'photo-5',
      url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80',
      title: 'Streets of Old George Town: Tea Stall Smoke',
      category: 'Street',
      location: 'Northern Chennai',
      aspectClass: 'aspect-[4/3]'
    },
    {
      id: 'photo-6',
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=80',
      title: 'Resilient Gaze: Master Weaver Portrait',
      category: 'Portrait',
      location: 'Kanchipuram',
      aspectClass: 'aspect-[3/4]'
    },
    {
      id: 'photo-7',
      url: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1600&q=80',
      title: 'Ceramic Kiln Shelves in Afternoon Sun',
      category: 'Lifestyle',
      location: 'Pondicherry',
      aspectClass: 'aspect-[16/10]'
    },
    {
      id: 'photo-8',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=80',
      title: 'Solitary Net Repair at Low Tide',
      category: 'Personal Work',
      location: 'Tuticorin',
      aspectClass: 'aspect-[4/5]'
    },
    {
      id: 'photo-9',
      url: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1600&q=80',
      title: 'Monsoon Overpass Reflection',
      category: 'Street',
      location: 'Mumbai Suburbs',
      aspectClass: 'aspect-[16/9]'
    },
    {
      id: 'photo-10',
      url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=80',
      title: 'Silhouettes in Silk Dyeing Yards',
      category: 'Portrait',
      location: 'Madurai',
      aspectClass: 'aspect-[3/4]'
    },
    {
      id: 'photo-11',
      url: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1600&q=80',
      title: 'Minimalist Dining & Natural Oak Grain',
      category: 'Lifestyle',
      location: 'Bangalore Residence',
      aspectClass: 'aspect-[4/3]'
    },
    {
      id: 'photo-12',
      url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
      title: 'Field Notes: The Salt Flats Archive',
      category: 'Personal Work',
      location: 'Coastal Tamil Nadu',
      aspectClass: 'aspect-[16/10]'
    }
  ];

  const filteredPhotos = activeCategory === 'All'
    ? photoItems
    : photoItems.filter((item) => item.category === activeCategory);

  const imageUrls = filteredPhotos.map((p) => p.url);

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-12 sm:py-20 space-y-16">
      
      {/* Back Link */}
      <div>
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#777777] hover:text-[#111111] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO WORK</span>
        </Link>
      </div>

      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono tracking-widest text-[#777777] uppercase block">
          04 / PHOTOGRAPHY
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif text-[#111111] font-normal tracking-tight">
          PHOTOGRAPHY
        </h1>
        <p className="text-base sm:text-lg text-[#777777] font-light leading-relaxed">
          An ongoing visual dialogue with light, street textures, artisan portraiture, and quiet contemplative horizons. Click any photograph to enter the full-screen lightbox.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 pb-6 border-b border-[#DDDBD6]">
        {photographyCategories.map((cat: string) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer ${
              activeCategory === cat
                ? 'bg-[#111111] text-[#F5F3EF]'
                : 'bg-white border border-[#DDDBD6] text-[#777777] hover:text-[#111111] hover:border-[#111111]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry / Balanced Editorial Photo Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 sm:gap-8 space-y-6 sm:space-y-8">
        {filteredPhotos.map((photo, idx) => (
          <div
            key={photo.id}
            onClick={() => setLightboxIndex(idx)}
            className="break-inside-avoid group cursor-pointer overflow-hidden bg-[#EAE8E2] border border-[#DDDBD6]"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setLightboxIndex(idx);
              }
            }}
            aria-label={`View photo: ${photo.title}`}
          >
            <div className={`relative ${photo.aspectClass} w-full overflow-hidden`}>
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />

              {/* Hover overlay with minimal details */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-between text-white pointer-events-none">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#DDDBD6]">
                  {photo.category} {photo.location && `· ${photo.location}`}
                </span>
                <div>
                  <h3 className="text-base font-serif text-white font-normal">
                    {photo.title}
                  </h3>
                  <span className="text-[10px] font-mono text-[#DDDBD6] uppercase tracking-wider block mt-1">
                    Expand Frame ↗
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Component with Keyboard Navigation & Counter */}
      <Lightbox
        isOpen={lightboxIndex !== null}
        images={imageUrls}
        currentIndex={lightboxIndex || 0}
        caption={lightboxIndex !== null ? filteredPhotos[lightboxIndex]?.title : ''}
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
  );
};
