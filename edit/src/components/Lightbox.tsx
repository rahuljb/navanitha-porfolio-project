import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  caption?: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  images,
  currentIndex,
  caption,
  onClose,
  onPrev,
  onNext
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];
  const formatIndex = (idx: number) => String(idx + 1).padStart(2, '0');
  const formatTotal = (tot: number) => String(tot).padStart(2, '0');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 select-none transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Top Bar: Counter & Close */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-white z-50">
        <span className="text-xs font-mono tracking-widest text-[#DDDBD6]">
          {formatIndex(currentIndex)} / {formatTotal(images.length)}
        </span>
        <button
          onClick={onClose}
          className="p-2 text-[#DDDBD6] hover:text-white transition-colors cursor-pointer"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Prev button */}
      {images.length > 1 && (
        <button
          onClick={onPrev}
          className="absolute left-4 sm:left-8 z-40 p-3 text-[#DDDBD6] hover:text-white transition-colors cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={onNext}
          className="absolute right-4 sm:right-8 z-40 p-3 text-[#DDDBD6] hover:text-white transition-colors cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      )}

      {/* Centered Image */}
      <div className="relative max-w-5xl max-h-[82vh] flex flex-col items-center">
        <img
          src={currentImage}
          alt={caption || `Gallery image ${currentIndex + 1}`}
          className="max-h-[75vh] w-auto max-w-full object-contain shadow-2xl"
        />
        {caption && (
          <p className="mt-4 text-xs font-mono tracking-wider text-[#DDDBD6] text-center max-w-xl">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
};
