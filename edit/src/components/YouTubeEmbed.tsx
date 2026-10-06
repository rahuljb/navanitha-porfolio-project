import React from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
}

export const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  title = 'YouTube video player',
  className = ''
}) => {
  if (!videoId || typeof videoId !== 'string' || videoId.trim() === '') {
    return null;
  }
  return (
    <div className={`relative aspect-video w-full overflow-hidden bg-[#111111] rounded-sm ${className}`}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full border-0"
        loading="lazy"
      />
    </div>
  );
};
