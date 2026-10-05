/**
 * Video URL helper utility to safely parse and validate video URLs
 * across Microsoft SharePoint/Stream, Google Drive, YouTube, and direct sources.
 * If the URL is unavailable or invalid, returns null so components can safely hide the player.
 */

export function getEmbedVideoUrl(url?: string | null, youtubeId?: string | null): string | null {
  // If youtubeId is directly provided
  if (youtubeId && typeof youtubeId === 'string' && youtubeId.trim().length > 0) {
    return `https://www.youtube.com/embed/${youtubeId.trim()}?autoplay=1&rel=0&modestbranding=1`;
  }

  if (!url || typeof url !== 'string' || url.trim().length === 0) {
    return null;
  }

  const cleanUrl = url.trim();

  try {
    // 1. Google Drive URL handling:
    // Only direct file URLs can be embedded with /preview.
    // Folders (/folders/...) cannot be embedded as playable videos and would show "No preview available", so return null.
    if (cleanUrl.includes('drive.google.com')) {
      if (cleanUrl.includes('/folders/')) {
        return null;
      }
      const fileMatch = cleanUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
      if (fileMatch && fileMatch[1]) {
        return `https://drive.google.com/file/d/${fileMatch[1]}/preview`;
      }
      const idMatch = cleanUrl.match(/[?&]id=([a-zA-Z0-9_-]+)/);
      if (idMatch && idMatch[1]) {
        return `https://drive.google.com/file/d/${idMatch[1]}/preview`;
      }
      return null;
    }

    // 2. Microsoft SharePoint / OneDrive Stream URL handling:
    // Convert stream.aspx to embed.aspx for seamless iframe rendering
    if (cleanUrl.includes('sharepoint.com') || cleanUrl.includes('1drv.ms') || cleanUrl.includes('onedrive.live.com')) {
      if (cleanUrl.includes('embed.aspx')) {
        return cleanUrl;
      }
      if (cleanUrl.includes('stream.aspx')) {
        return cleanUrl.replace('stream.aspx', 'embed.aspx');
      }
      return cleanUrl;
    }

    // 3. YouTube URL handling:
    if (cleanUrl.includes('youtube.com') || cleanUrl.includes('youtu.be')) {
      const ytMatch = cleanUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
      if (ytMatch && ytMatch[1]) {
        return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0&modestbranding=1`;
      }
    }

    // 4. Vimeo handling:
    if (cleanUrl.includes('vimeo.com')) {
      const vimeoMatch = cleanUrl.match(/vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)/);
      if (vimeoMatch && vimeoMatch[1]) {
        return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
      }
    }

    // 5. Direct embed or HTTPS video URL:
    if (cleanUrl.startsWith('http://') || cleanUrl.startsWith('https://')) {
      return cleanUrl;
    }

    return null;
  } catch {
    return null;
  }
}

/**
 * Checks if a video object has a valid, playable URL
 */
export function hasValidVideoUrl(video?: { embedUrl?: string; streamUrl?: string; youtubeId?: string; youtubeUrl?: string } | null): boolean {
  if (!video) return false;
  const embed = getEmbedVideoUrl(
  video.youtubeUrl || video.embedUrl || video.streamUrl,
  video.youtubeId
);
  return Boolean(embed);
}
