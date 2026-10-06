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

export const filmsAndProductionVideos: ProductionVideo[] = [
  {
    id: 1,
    number: '01',
    category: 'Film Editor Interview · Cinema',
    title: 'INTERVIEW WITH SHAMEER MUHAMMED',
    year: '2025',
    role: 'Director · Interviewer',
    streamUrl: 'https://asaskochi-my.sharepoint.com/personal/kh_ah_p2vmc25006_kh_students_amrita_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fkh%5Fah%5Fp2vmc25006%5Fkh%5Fstudents%5Famrita%5Fedu%2FDocuments%2FPORTFOLIO%2FFILMS%20%26%20PRODUCTION%2FINTERVIEW%20WITH%20SHAMMER%20MUHAMMED%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ea1f974b9%2Dab7b%2D4135%2D8113%2D039c142f1fa7',
    embedUrl: 'https://asaskochi-my.sharepoint.com/personal/kh_ah_p2vmc25006_kh_students_amrita_edu/_layouts/15/embed.aspx?id=%2Fpersonal%2Fkh%5Fah%5Fp2vmc25006%5Fkh%5Fstudents%5Famrita%5Fedu%2FDocuments%2FPORTFOLIO%2FFILMS%20%26%20PRODUCTION%2FINTERVIEW%20WITH%20SHAMMER%20MUHAMMED%2Emp4',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=80',
    description: 'An insightful, in-depth industry interview with renowned film editor Shameer Muhammed. Exploring the craft of film editing, rhythmic storytelling, narrative continuity, and post-production execution across major cinema releases.'
  },
  {
    id: 2,
    number: '02',
    category: 'Narrative Short Film',
    title: 'SHORT FILM',
    year: '2024',
    role: 'Director · Screenplay · Producer',
    streamUrl: 'https://asaskochi-my.sharepoint.com/personal/kh_ah_p2vmc25006_kh_students_amrita_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fkh%5Fah%5Fp2vmc25006%5Fkh%5Fstudents%5Famrita%5Fedu%2FDocuments%2FPORTFOLIO%2FFILMS%20%26%20PRODUCTION%2FSHORT%20FILM%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E5fcc7705%2D2df5%2D42e6%2Da04b%2D32675d5eb226',
    embedUrl: 'https://asaskochi-my.sharepoint.com/personal/kh_ah_p2vmc25006_kh_students_amrita_edu/_layouts/15/embed.aspx?id=%2Fpersonal%2Fkh%5Fah%5Fp2vmc25006%5Fkh%5Fstudents%5Famrita%5Fedu%2FDocuments%2FPORTFOLIO%2FFILMS%20%26%20PRODUCTION%2FSHORT%20FILM%2Emp4',
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=80',
    description: 'An atmospheric fictional short film exploring raw human emotion, subtle silence, and visual poetry. Directed with naturalistic camera movement, nuanced actor direction, and cinematic scene lighting.'
  },
  {
    id: 3,
    number: '03',
    category: 'Commercial Ad Film · Brand Production',
    title: 'TANISHQ COMMERCIAL AD',
    year: '2024',
    role: 'Creative Direction · Production Lead',
    streamUrl: 'https://asaskochi-my.sharepoint.com/personal/kh_ah_p2vmc25006_kh_students_amrita_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fkh%5Fah%5Fp2vmc25006%5Fkh%5Fstudents%5Famrita%5Fedu%2FDocuments%2FPORTFOLIO%2FFILMS%20%26%20PRODUCTION%2FTanishq%20Ad%20Final%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ee2998ed7%2D60dd%2D475f%2Dbf17%2Ddd01b6c617f3',
    embedUrl: 'https://asaskochi-my.sharepoint.com/personal/kh_ah_p2vmc25006_kh_students_amrita_edu/_layouts/15/embed.aspx?id=%2Fpersonal%2Fkh%5Fah%5Fp2vmc25006%5Fkh%5Fstudents%5Famrita%5Fedu%2FDocuments%2FPORTFOLIO%2FFILMS%20%26%20PRODUCTION%2FTanishq%20Ad%20Final%2Emp4',
    thumbnail: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1600&q=80',
    description: 'A commercial advertisement created for Tanishq, celebrating timeless elegance, heritage jewelry design, and emotive storytelling through refined lighting and sophisticated camera framing.'
  },
  {
    id: 4,
    number: '04',
    category: 'Celebrity Interview · Cinema',
    title: 'INTERVIEW WITH RAGUL CHANDRAN',
    year: '2025',
    role: 'Director · Interviewer',
    youtubeId: 'JCll8ltoOLQ',
    youtubeUrl: 'https://www.youtube.com/watch?v=JCll8ltoOLQ',
    thumbnail: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=1600&q=80',
    description: 'An intimate, cinematic celebrity interview exploring artistic expression, screen acting, and personal creative journeys. Directed and conducted with empathetic pacing and naturalistic lighting.'
  }
];

export const socialMediaVideos: ProductionVideo[] = [
  {
    id: 101,
    number: '01',
    category: 'Commercial Ad · Education',
    title: "AD FOR NEETHU'S ACADEMY",
    year: '2024',
    role: 'Creative Director · Editor',
    streamUrl: 'https://asaskochi-my.sharepoint.com/personal/kh_ah_p2vmc25006_kh_students_amrita_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fkh%5Fah%5Fp2vmc25006%5Fkh%5Fstudents%5Famrita%5Fedu%2FDocuments%2FPORTFOLIO%2FSocial%20Media%26Commercial%20Content%2FAD%20For%20Neethu%27s%20Academy%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E12f4b686%2D265a%2D4c05%2D8ec8%2D359abb8493fe',
    embedUrl: 'https://asaskochi-my.sharepoint.com/personal/kh_ah_p2vmc25006_kh_students_amrita_edu/_layouts/15/embed.aspx?id=%2Fpersonal%2Fkh%5Fah%5Fp2vmc25006%5Fkh%5Fstudents%5Famrita%5Fedu%2FDocuments%2FPORTFOLIO%2FSocial%20Media%26Commercial%20Content%2FAD%20For%20Neethu%27s%20Academy%2Emp4',
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
    streamUrl: 'https://asaskochi-my.sharepoint.com/personal/kh_ah_p2vmc25006_kh_students_amrita_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fkh%5Fah%5Fp2vmc25006%5Fkh%5Fstudents%5Famrita%5Fedu%2FDocuments%2FPORTFOLIO%2FSocial%20Media%26Commercial%20Content%2FAsiaville%20Instagram%20reels%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Eb84cfc94%2D023d%2D456d%2D80ed%2D018c161ae8af',
    embedUrl: 'https://asaskochi-my.sharepoint.com/personal/kh_ah_p2vmc25006_kh_students_amrita_edu/_layouts/15/embed.aspx?id=%2Fpersonal%2Fkh%5Fah%5Fp2vmc25006%5Fkh%5Fstudents%5Famrita%5Fedu%2FDocuments%2FPORTFOLIO%2FSocial%20Media%26Commercial%20Content%2FAsiaville%20Instagram%20reels%2Emp4',
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
    streamUrl: 'https://asaskochi-my.sharepoint.com/personal/kh_ah_p2vmc25006_kh_students_amrita_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fkh%5Fah%5Fp2vmc25006%5Fkh%5Fstudents%5Famrita%5Fedu%2FDocuments%2FPORTFOLIO%2FSocial%20Media%26Commercial%20Content%2FConztek%20Academy%202%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Edbabd7e5%2D2e54%2D4708%2D83a4%2De971f64df03e',
    embedUrl: 'https://asaskochi-my.sharepoint.com/personal/kh_ah_p2vmc25006_kh_students_amrita_edu/_layouts/15/embed.aspx?id=%2Fpersonal%2Fkh%5Fah%5Fp2vmc25006%5Fkh%5Fstudents%5Famrita%5Fedu%2FDocuments%2FPORTFOLIO%2FSocial%20Media%26Commercial%20Content%2FConztek%20Academy%202%2Emp4',
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
    streamUrl: 'https://asaskochi-my.sharepoint.com/personal/kh_ah_p2vmc25006_kh_students_amrita_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fkh%5Fah%5Fp2vmc25006%5Fkh%5Fstudents%5Famrita%5Fedu%2FDocuments%2FPORTFOLIO%2FSocial%20Media%26Commercial%20Content%2FConztek%20Academy%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E28fcb40d%2D9411%2D4315%2Db062%2D00a5125f3816',
    embedUrl: 'https://asaskochi-my.sharepoint.com/personal/kh_ah_p2vmc25006_kh_students_amrita_edu/_layouts/15/embed.aspx?id=%2Fpersonal%2Fkh%5Fah%5Fp2vmc25006%5Fkh%5Fstudents%5Famrita%5Fedu%2FDocuments%2FPORTFOLIO%2FSocial%20Media%26Commercial%20Content%2FConztek%20Academy%2Emp4',
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
    streamUrl: 'https://asaskochi-my.sharepoint.com/personal/kh_ah_p2vmc25006_kh_students_amrita_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fkh%5Fah%5Fp2vmc25006%5Fkh%5Fstudents%5Famrita%5Fedu%2FDocuments%2FPORTFOLIO%2FSocial%20Media%26Commercial%20Content%2FHoney%20Bee%20Series%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E563c0694%2Dc404%2D4338%2Daf39%2D373f2922554d',
    embedUrl: 'https://asaskochi-my.sharepoint.com/personal/kh_ah_p2vmc25006_kh_students_amrita_edu/_layouts/15/embed.aspx?id=%2Fpersonal%2Fkh%5Fah%5Fp2vmc25006%5Fkh%5Fstudents%5Famrita%5Fedu%2FDocuments%2FPORTFOLIO%2FSocial%20Media%26Commercial%20Content%2FHoney%20Bee%20Series%2Emp4',
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
    streamUrl: 'https://asaskochi-my.sharepoint.com/personal/kh_ah_p2vmc25006_kh_students_amrita_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fkh%5Fah%5Fp2vmc25006%5Fkh%5Fstudents%5Famrita%5Fedu%2FDocuments%2FPORTFOLIO%2FSocial%20Media%26Commercial%20Content%2FReel%203%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E2ba9b165%2D66bc%2D4476%2Daf87%2Dc7801638c5a0',
    embedUrl: 'https://asaskochi-my.sharepoint.com/personal/kh_ah_p2vmc25006_kh_students_amrita_edu/_layouts/15/embed.aspx?id=%2Fpersonal%2Fkh%5Fah%5Fp2vmc25006%5Fkh%5Fstudents%5Famrita%5Fedu%2FDocuments%2FPORTFOLIO%2FSocial%20Media%26Commercial%20Content%2FReel%203%2Emp4',
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
export const videos = filmsAndProductionVideos;


export type SelectedWorkService = '01' | '02' | '03' | '04' | '05';

export interface SelectedWorkVideo extends ProductionVideo {
  serviceNumber: SelectedWorkService;
  serviceTitle: string;
}

const attachService = (
  videos: ProductionVideo[],
  serviceNumber: SelectedWorkService,
  serviceTitle: string
): SelectedWorkVideo[] =>
  videos.map((video) => ({ ...video, serviceNumber, serviceTitle }));

// One unified video index for SELECTED WORK.
// 04 — Photography currently has image work but no dedicated video in the source data.
export const selectedWorkVideos: SelectedWorkVideo[] = [
  ...attachService(filmsAndProductionVideos.slice(0, 3), '01', 'FILMS & PRODUCTION'),
  ...attachService(
    [filmsAndProductionVideos.find((video) => video.id === 4)!],
    '02',
    'CELEBRITY INTERVIEW'
  ),
  ...attachService(
    socialMediaVideos.slice(0, 4),
    '03',
    'SOCIAL MEDIA & COMMERCIAL CONTENT'
  ),
  ...attachService(
    socialMediaVideos.slice(4),
    '05',
    'CONTENT CREATION'
  ),
];
