import React from 'react';

interface ImageGalleryProps {
  images: string[];
  onImageClick?: (index: number) => void;
  className?: string;
  columns?: 2 | 3;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
  className = '',
  columns = 2
}) => {
  if (!images || images.length === 0) return null;

  return (
    <div
      className={`grid grid-cols-1 ${
        columns === 3 ? 'sm:grid-cols-2 md:grid-cols-3' : 'md:grid-cols-2'
      } gap-6 sm:gap-8 ${className}`}
    >
      {images.map((img, idx) => (
        <div
          key={idx}
          onClick={() => onImageClick && onImageClick(idx)}
          className={`relative overflow-hidden bg-[#EAE8E2] border border-[#DDDBD6] ${
            onImageClick ? 'cursor-pointer group' : ''
          }`}
          role={onImageClick ? 'button' : undefined}
          tabIndex={onImageClick ? 0 : undefined}
          onKeyDown={(e) => {
            if (onImageClick && (e.key === 'Enter' || e.key === ' ')) {
              e.preventDefault();
              onImageClick(idx);
            }
          }}
          aria-label={`View photo ${idx + 1}`}
        >
          <div className="aspect-[4/3] w-full overflow-hidden">
            <img
              src={img}
              alt={`Gallery image ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
          </div>
          {onImageClick && (
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
          )}
        </div>
      ))}
    </div>
  );
};
