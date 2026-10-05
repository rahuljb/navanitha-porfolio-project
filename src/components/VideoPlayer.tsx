import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { ProductionVideo } from '../data/videos';

interface VideoPlayerProps {
  video: ProductionVideo;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-[#111111] border border-[#222222] shadow-2xl">
      {isPlaying ? (
        <iframe
          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
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
          aria-label={`Play ${video.title}`}
        >
          {/* YouTube Thumbnail Background */}
          <img
            src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
            alt={video.title}
            onError={(e) => {
              // Fallback to high quality Unsplash thumbnail if maxresdefault is missing
              (e.target as HTMLImageElement).src = video.thumbnail;
            }}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />

          {/* Cinematic Scrim */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-300" />

          {/* Center Play Affordance */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F4F1EB] text-[#111111] flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
              <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1 text-[#111111]" />
            </div>
          </div>

          {/* Bottom Video Meta Bar */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#DDDBD6] bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-sm">
            <span>{video.number} · {video.category.toUpperCase()}</span>
            <span className="text-[#C96B5A]">CLICK TO PLAY</span>
          </div>
        </div>
      )}
    </div>
  );
};
