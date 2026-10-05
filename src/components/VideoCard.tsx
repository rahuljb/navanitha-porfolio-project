import React from 'react';
import { Play } from 'lucide-react';
import { VideoItem } from '../data/videos';

interface VideoCardProps {
  video: VideoItem;
  onPlay: (video: VideoItem) => void;
  className?: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, onPlay, className = '' }) => {
  return (
    <div
      onClick={() => onPlay(video)}
      className={`group cursor-pointer select-none ${className}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onPlay(video);
        }
      }}
      aria-label={`Play video: ${video.title}`}
    >
      {/* 16:9 Thumbnail container */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#EAE8E2] border border-[#DDDBD6]">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />

        {/* Ambient overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300" />

        {/* Centered Play Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 text-[#111111] flex items-center justify-center shadow-lg transition-transform duration-300 ease-out group-hover:scale-110">
            <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
          </div>
        </div>

        {/* Duration badge if available */}
        {video.duration && (
          <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/70 backdrop-blur-sm text-[10px] font-mono text-white rounded-sm">
            {video.duration}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1">
        <div className="flex items-center gap-2 text-xs font-mono text-[#777777] uppercase tracking-wider">
          <span>{video.category}</span>
          <span aria-hidden="true">·</span>
          <span>{video.year}</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-serif text-[#111111] group-hover:text-black transition-colors font-normal leading-snug">
          {video.title}
        </h3>
      </div>
    </div>
  );
};
