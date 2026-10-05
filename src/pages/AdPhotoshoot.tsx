import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import { ImageGallery } from '../components/ImageGallery';
import { Lightbox } from '../components/Lightbox';

export const AdPhotoshoot: React.FC = () => {
  const adProjects = projects.filter((p) => p.category === 'ad');
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    images: string[];
    currentIndex: number;
    caption?: string;
  }>({
    isOpen: false,
    images: [],
    currentIndex: 0
  });

  const openLightbox = (images: string[], index: number, caption?: string) => {
    setLightboxState({
      isOpen: true,
      images,
      currentIndex: index,
      caption
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-12 sm:py-20 space-y-16 sm:space-y-24">
      
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
          03 / AD PHOTOSHOOT
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif text-[#111111] font-normal tracking-tight">
          AD PHOTOSHOOT
        </h1>
        <p className="text-base sm:text-lg text-[#777777] font-light leading-relaxed">
          High-concept commercial photography, brand campaigns, and luxury editorial lookbooks. Blending sculptural lighting, organic material textures, and precise art direction to elevate brand identity.
        </p>
      </div>

      {/* Editorial Ad Projects */}
      <div className="space-y-24 sm:space-y-36 pt-6 border-t border-[#DDDBD6]">
        {adProjects.map((project) => {
          const allImages = [project.image, ...project.gallery];

          return (
            <article key={project.id} className="space-y-10">
              
              {/* Project Title & Metadata Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8 border-b border-[#DDDBD6]">
                <div className="lg:col-span-6 space-y-2">
                  <h2 className="text-3xl sm:text-5xl font-serif text-[#111111] font-normal">
                    {project.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#777777] font-light max-w-xl">
                    {project.description}
                  </p>
                </div>

                <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs font-mono">
                  <div>
                    <span className="text-[#777777] uppercase block mb-1">BRAND</span>
                    <span className="text-[#111111] font-medium">{project.brand || project.client}</span>
                  </div>
                  <div>
                    <span className="text-[#777777] uppercase block mb-1">CAMPAIGN</span>
                    <span className="text-[#111111] font-medium">{project.campaign || 'Editorial Spotlight'}</span>
                  </div>
                  <div>
                    <span className="text-[#777777] uppercase block mb-1">YEAR</span>
                    <span className="text-[#111111] font-medium">{project.year}</span>
                  </div>
                  <div>
                    <span className="text-[#777777] uppercase block mb-1">CREATIVE DIRECTION</span>
                    <span className="text-[#111111] font-medium">{project.creativeDirection || 'Navanitha Vijayakumar'}</span>
                  </div>
                  <div>
                    <span className="text-[#777777] uppercase block mb-1">PHOTOGRAPHY</span>
                    <span className="text-[#111111] font-medium">Navanitha Vijayakumar</span>
                  </div>
                  <div>
                    <span className="text-[#777777] uppercase block mb-1">CASE STUDY</span>
                    <Link
                      to={`/project/${project.id}`}
                      className="text-[#111111] hover:underline uppercase flex items-center gap-1"
                    >
                      <span>DETAILS</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Large Hero Still */}
              <div
                onClick={() => openLightbox(allImages, 0, `${project.title} — Main Campaign Image`)}
                className="relative aspect-[16/9] w-full overflow-hidden bg-[#EAE8E2] border border-[#DDDBD6] cursor-pointer group shadow-sm"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
                <span className="absolute bottom-4 right-4 text-[11px] font-mono text-white bg-black/60 px-2 py-1 backdrop-blur-sm">
                  Click to Expand
                </span>
              </div>

              {/* Supporting Gallery Grid */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="space-y-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#777777] block">
                    CAMPAIGN FRAMES & LOOKBOOK DETAILS
                  </span>
                  <ImageGallery
                    images={project.gallery}
                    onImageClick={(idx) =>
                      openLightbox(allImages, idx + 1, `${project.title} — Still ${idx + 1}`)
                    }
                    columns={3}
                  />
                </div>
              )}

            </article>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxState.isOpen}
        images={lightboxState.images}
        currentIndex={lightboxState.currentIndex}
        caption={lightboxState.caption}
        onClose={() => setLightboxState({ ...lightboxState, isOpen: false })}
        onPrev={() =>
          setLightboxState((prev) => ({
            ...prev,
            currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
          }))
        }
        onNext={() =>
          setLightboxState((prev) => ({
            ...prev,
            currentIndex: (prev.currentIndex + 1) % prev.images.length
          }))
        }
      />

    </div>
  );
};
