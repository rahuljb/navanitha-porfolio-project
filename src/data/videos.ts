export interface ProductionVideo {
  id: number;
  number: string;
  category: string;
  title: string;
  year: string;
  role: string;
  youtubeId?: string;
  youtubeUrl?: string;
  streamUrl?: string;
  embedUrl?: string;
  thumbnail: string;
  description: string;
  duration?: string;
}

export type VideoItem = ProductionVideo;

/**
 * CELEBRITY INTERVIEW
 * Active YouTube video stream with actor Ragul Chandran.
 */
export const celebrityInterviewVideo: ProductionVideo = {
  id: 1,
  number: '01',
  category: 'Celebrity Interview · Cinema',
  title: 'INTERVIEW WITH RAGUL CHANDRAN',
  year: '2025',
  role: 'Director · Interviewer',
  youtubeId: 'JCll8ltoOLQ',
  youtubeUrl: 'https://www.youtube.com/watch?v=JCll8ltoOLQ',
  thumbnail: 'https://i.ytimg.com/vi/JCll8ltoOLQ/hqdefault.jpg',
  description: 'An intimate, cinematic celebrity interview exploring artistic expression, screen acting, and personal creative journeys. Directed and conducted with empathetic pacing and naturalistic lighting.'
};

/**
 * FILMS & PRODUCTION
 * 5 active YouTube video screenings.
 */
export const filmsAndProductionVideos: ProductionVideo[] = [
  {
    id: 11,
    number: '01',
    category: 'Mini Web Series · Romantic Comedy',
    title: "'NO MEANS NO' — MINI WEB SERIES",
    year: '2024',
    role: 'Director · Screenplay',
    youtubeId: 'dvoXNUJx2UI',
    youtubeUrl: 'https://www.youtube.com/watch?v=dvoXNUJx2UI',
    thumbnail: 'https://i.ytimg.com/vi/dvoXNUJx2UI/hqdefault.jpg',
    description: 'A relatable romantic comedy mini web series exploring modern relationship boundaries, situational humor, and nuanced young adult dynamics.'
  },
  {
    id: 12,
    number: '02',
    category: 'Narrative Short Film · Family Drama',
    title: 'HOW SHOULD A WIDOWED WOMAN LIVE?',
    year: '2024',
    role: 'Director · Screenwriter',
    youtubeId: 'KCJ6rgQtbRQ',
    youtubeUrl: 'https://www.youtube.com/watch?v=KCJ6rgQtbRQ',
    thumbnail: 'https://i.ytimg.com/vi/KCJ6rgQtbRQ/hqdefault.jpg',
    description: 'A poignant and emotional narrative short film addressing social stigma, societal expectations, and personal resilience in the face of loss.'
  },
  {
    id: 13,
    number: '03',
    category: 'Short Film · Drama & Sketch',
    title: 'FRIENDSHIPS TO BE AVOIDED',
    year: '2024',
    role: 'Director · Visual Storyteller',
    youtubeId: '9_YAq3i-vII',
    youtubeUrl: 'https://www.youtube.com/watch?v=9_YAq3i-vII',
    thumbnail: 'https://i.ytimg.com/vi/9_YAq3i-vII/hqdefault.jpg',
    description: 'A compelling dramatic sketch on toxic interpersonal relationships, deceptive friendships, and the importance of healthy emotional boundaries.'
  },
  {
    id: 14,
    number: '04',
    category: 'Narrative Short Film · Special',
    title: 'GONE WITH THE WIND — HAPPY PILLS',
    year: '2024',
    role: 'Director · Creative Lead',
    youtubeId: 'HVhoRcdmWi4',
    youtubeUrl: 'https://www.youtube.com/watch?v=HVhoRcdmWi4',
    thumbnail: 'https://i.ytimg.com/vi/HVhoRcdmWi4/hqdefault.jpg',
    description: 'A Valentine’s Day special narrative short film for Zero Angle Entertainments, balancing whimsical romance, emotive storytelling, and vivid cinematic frames.'
  },
  {
    id: 15,
    number: '05',
    category: 'Film & Industry · Celebrity Interview',
    title: 'INTERVIEW WITH SHAMEER MUHAMMED',
    year: '2024',
    role: 'Director · Interviewer',
    youtubeId: '54M4EZ7-RfQ',
    youtubeUrl: 'https://www.youtube.com/watch?v=54M4EZ7-RfQ',
    thumbnail: 'https://i.ytimg.com/vi/54M4EZ7-RfQ/hqdefault.jpg',
    description: 'An insightful industry conversation with acclaimed film editor Shameer Muhammed, exploring narrative pacing, post-production craft, and cinematic storytelling.'
  }
];

/**
 * SOCIAL MEDIA & COMMERCIAL CONTENT
 * Portfolio campaigns and creative stills (no external drive links).
 */
export const socialMediaVideos: ProductionVideo[] = [
  {
    id: 101,
    number: '01',
    category: 'Commercial Ad · Education',
    title: "AD FOR NEETHU'S ACADEMY",
    year: '2024',
    role: 'Creative Director · Editor',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
    description: "A dynamic, persuasive promotional commercial film developed for Neethu's Academy, highlighting educational excellence, aspirational student growth, and modern learning environments."
  },
  {
    id: 102,
    number: '02',
    category: 'Social Media Reels · Media Network',
    title: 'ASIAVILLE INSTAGRAM REELS',
    year: '2024',
    role: 'Visual Producer · Editor',
    thumbnail: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1600&q=80',
    description: 'Fast-paced, hook-driven social media reels engineered for Asiaville, combining snappy kinetic typography, rapid visual pacing, and high-retention storytelling for digital mobile audiences.'
  },
  {
    id: 103,
    number: '03',
    category: 'Commercial Ad · Brand Campaign',
    title: 'CONZTEK ACADEMY — CAMPAIGN 02',
    year: '2024',
    role: 'Director · Creative Lead',
    thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80',
    description: 'A stylized brand commercial spot featuring sleek transitions, professional lighting setups, and direct-to-consumer value propositions for Conztek Academy.'
  },
  {
    id: 104,
    number: '04',
    category: 'Commercial Ad · Academy Promo',
    title: 'CONZTEK ACADEMY — BRAND FILM',
    year: '2024',
    role: 'Director · Cinematographer',
    thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80',
    description: 'The flagship brand promotional film for Conztek Academy, delivering inspiring narrative beats, crisp audio design, and focused visuals to elevate institution brand recall.'
  },
  {
    id: 105,
    number: '05',
    category: 'Web Series · Digital Episodic',
    title: 'HONEY BEE SERIES',
    year: '2024',
    role: 'Director · Producer',
    thumbnail: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1600&q=80',
    description: 'A vibrant episodic web production series capturing lighthearted character dynamics, situational humor, and relatable everyday storylines tailored for digital video streaming.'
  },
  {
    id: 106,
    number: '06',
    category: 'Viral Content · Creative Reel',
    title: 'SHORT-FORM REEL SHOWCASE',
    year: '2024',
    role: 'Content Creator · Editor',
    thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=80',
    description: 'A snappy, creative short-form reel exhibiting creative framing, sound synchronization, and engaging visual hooks crafted specifically for Instagram and vertical platforms.'
  }
];

export const directionVideo: ProductionVideo = {
  id: 201,
  number: '01',
  category: 'Direction Showcase · Film Craft',
  title: 'DIRECTION & SCENE ORCHESTRATION',
  year: '2025',
  role: 'Director · Visual Storyteller',
  thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=80',
  description: 'Directorial showcase capturing dramatic tension, actor blocking, atmospheric camera framing, and nuanced pacing across narrative scenes.'
};

export const directionVideos: ProductionVideo[] = [directionVideo];
export const productionVideos = filmsAndProductionVideos;
export const videos: ProductionVideo[] = [celebrityInterviewVideo, ...filmsAndProductionVideos];

export type SelectedWorkService = '01' | '02' | '03' | '04' | '05';

export interface SelectedWorkVideo extends ProductionVideo {
  serviceNumber: SelectedWorkService;
  serviceTitle: string;
}

const attachService = (
  videosList: ProductionVideo[],
  serviceNumber: SelectedWorkService,
  serviceTitle: string
): SelectedWorkVideo[] =>
  videosList.map((video) => ({ ...video, serviceNumber, serviceTitle }));

// Unified index for SELECTED WORK - ONLY verified active YouTube videos, no dummy tiles
export const selectedWorkVideos: SelectedWorkVideo[] = [
  ...attachService(filmsAndProductionVideos, '01', 'FILMS & PRODUCTION'),
  ...attachService([celebrityInterviewVideo], '02', 'CELEBRITY INTERVIEW'),
];
