import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { getEmbedVideoUrl } from '../utils/videoUtils';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  youtubeId?: string;
  embedUrl?: string;
  streamUrl?: string;
  title: string;
  description?: string;
  category?: string;
  year?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  youtubeId,
  embedUrl,
  streamUrl,
  title,
  description,
  category,
  year
}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // YouTube ID always wins over legacy Stream/Drive fields.
  const embedSource = getEmbedVideoUrl(youtubeId ? undefined : (embedUrl || streamUrl), youtubeId);

  // If not open or if video URL is not available, hide cleanly without breaking
  if (!isOpen || !embedSource || hasError) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div className="relative w-full max-w-4xl bg-[#111111] text-[#F5F3EF] rounded-sm overflow-hidden shadow-2xl flex flex-col border border-[#222222]">
        
        {/* Top Header */}
        <div className="px-5 py-4 border-b border-[#222222] flex items-center justify-between">
          <div className="pr-4 truncate">
            {(category || year) && (
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#777777] block mb-0.5">
                {category} {year && `· ${year}`}
              </span>
            )}
            <h3 id="video-modal-title" className="text-base sm:text-lg font-serif text-[#F5F3EF] truncate">
              {title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#777777] hover:text-white transition-colors cursor-pointer shrink-0"
            aria-label="Close video modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Frame */}
        <div className="w-full bg-black aspect-video">
          <iframe
            src={embedSource}
            title={title}
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            allowFullScreen
            onError={() => setHasError(true)}
            className="w-full h-full border-0"
          />
        </div>

        {/* Description */}
        {description && (
          <div className="p-5 bg-[#141414] border-t border-[#222222]">
            <p className="text-xs sm:text-sm text-[#AAAAAA] font-light leading-relaxed">
              {description}
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
