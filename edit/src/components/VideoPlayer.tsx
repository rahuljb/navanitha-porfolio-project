
import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { ProductionVideo } from '../data/videos';
import { getEmbedVideoUrl } from '../utils/videoUtils';

interface VideoPlayerProps {
  video?: ProductionVideo | null;
  className?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  video,
  className = '',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  // No video = don't render anything
  if (!video || hasError) {
    return null;
  }

  // Resolve YouTube / other supported video URLs
  // YouTube ID always wins over legacy Stream/Drive fields.
  const embedSource = getEmbedVideoUrl(
    video.youtubeUrl || video.embedUrl || video.streamUrl,
    video.youtubeId
  );

  // No valid video URL = don't render anything
  if (!embedSource) {
    return null;
  }

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden bg-[#0A0A0A] border border-[#222222] shadow-2xl rounded-lg ${className}`}
    >
      {isPlaying ? (
        <iframe
          src={embedSource}
          title={video.title || 'Video player'}
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          allowFullScreen
          className="w-full h-full border-0"
          onError={() => setHasError(true)}
        />
      ) : (
        <div
          onClick={() => setIsPlaying(true)}
          className="group relative w-full h-full cursor-pointer select-none"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsPlaying(true);
            }
          }}
          aria-label={`Play ${video.title || 'video'}`}
        >
          {/* Thumbnail */}
          {video.thumbnail && (
            <img
              src={video.thumbnail}
              alt={video.title || 'Video preview'}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          )}

          {/* Cinematic overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-300" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C96B5A] text-white flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
              <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1 text-white" />
            </div>
          </div>

          {/* Video information */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#DDDBD6] bg-black/75 backdrop-blur-sm px-3.5 py-2 rounded-sm border border-white/10">
            <span>
              {video.number || '01'} ·{' '}
              {(video.category || 'VIDEO').toUpperCase()}
            </span>

            <span className="text-[#C96B5A] font-medium">
              CLICK TO PLAY
            </span>
          </div>
        </div>
      )}
    </div>
  );
};