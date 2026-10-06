import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play } from 'lucide-react';
import { videos, VideoItem } from '../data/videos';
import { VideoModal } from '../components/VideoModal';

export const FilmInterview: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

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
          02 / FILM & INTERVIEW
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif text-[#111111] font-normal tracking-tight">
          FILM & INTERVIEW
        </h1>
        <p className="text-base sm:text-lg text-[#777777] font-light leading-relaxed">
          Narrative short films, character-driven documentary interviews, and poetic audio-visual explorations. Grounded in empathetic pacing, naturalistic dialogue, and cinematic rhythm.
        </p>
      </div>

      {/* Video Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 pt-6 border-t border-[#DDDBD6]">
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => setSelectedVideo(video)}
            className="group cursor-pointer select-none space-y-4"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedVideo(video);
              }
            }}
            aria-label={`Watch ${video.title}`}
          >
            {/* 16:9 Thumbnail with Play icon */}
            <div className="relative aspect-video w-full overflow-hidden bg-[#EAE8E2] border border-[#DDDBD6]">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-300" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white text-[#111111] flex items-center justify-center shadow-xl transition-transform duration-300 ease-out group-hover:scale-110">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </div>
              </div>

              {video.duration && (
                <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/70 backdrop-blur-sm text-[10px] font-mono text-white rounded-sm">
                  {video.duration}
                </div>
              )}
            </div>

            {/* Video Meta Info */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[#777777] uppercase tracking-wider">
                <span>{video.year}</span>
                <span aria-hidden="true">·</span>
                <span>{video.role}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif text-[#111111] group-hover:italic transition-all font-normal">
                {video.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#777777] font-light leading-relaxed line-clamp-2">
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={Boolean(selectedVideo)}
        onClose={() => setSelectedVideo(null)}
        youtubeId={selectedVideo?.youtubeId}
        embedUrl={selectedVideo?.embedUrl}
        streamUrl={selectedVideo?.streamUrl}
        title={selectedVideo?.title || ''}
        description={selectedVideo?.description}
        category={selectedVideo?.category}
        year={selectedVideo?.year}
      />

    </div>
  );
};
