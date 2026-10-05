export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  categoryLabel: string;
  year: string;
  image: string;
  description: string;
  role: string[];
  client: string;
  youtubeId?: string;
  gallery: string[];
  brand?: string;
  campaign?: string;
  creativeDirection?: string;
}

export const photographyCategories = [
  'All',
  'Portraits',
  'Visual Diary'
];

export const creatorProfile = {
  name: 'Navanitha Vijayakumar',
  roleTitle: 'FILMMAKER. DIRECTOR. CREATOR.',
  tagline: 'Visual Storyteller',
  heroSubtitle: 'Turning ideas, emotions and everyday moments into meaningful visual stories.',
  bioShort: 'I’m Navanitha Vijayakumar — a visual storyteller drawn to the art of film, emotion, and human experiences. I create with a simple belief: every frame has a story worth telling.',
  bioParagraphs: [
    'I am Navanitha Vijayakumar, a visual media enthusiast driven by a passion for storytelling and creative exploration.',
    'My journey across filmmaking, television, and digital media has allowed me to explore directing, production, and content creation.',
    'Inspired by human emotions, everyday moments, and the beauty of visual expression, I strive to turn ideas into meaningful stories.',
    'I thrive in collaborative creative spaces, constantly learning and evolving, with a vision to create work that not only captures attention but leaves a lasting impression.'
  ],
  journeySteps: [
    'FILMS & PRODUCTION',
    'CELEBRITY INTERVIEW',
    'SOCIAL MEDIA & COMMERCIAL CONTENT',
    'PHOTOGRAPHY',
    'CONTENT CREATION'
  ],
  services: [
    {
      number: '01',
      title: 'FILMS & PRODUCTION',
      description: 'End-to-end cinematic storytelling, narrative short films, physical set direction, crew coordination, and high-standard finishing.',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80'
    },
    {
      number: '02',
      title: 'CELEBRITY INTERVIEW',
      description: 'Intimate, cinematic long-form conversations exploring artistic discipline, acting craft, and personal reflections with industry figures.',
      image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=1200&q=80'
    },
    {
      number: '03',
      title: 'SOCIAL MEDIA & COMMERCIAL CONTENT',
      description: 'High-impact commercial spots, dynamic brand campaigns, episodic web series, and viral short-form reels.',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80'
    },
    {
      number: '04',
      title: 'PHOTOGRAPHY',
      description: 'Intimate human portraits, expressive character stills, and observational visual diaries captured with natural light.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80'
    },
    {
      number: '05',
      title: 'CONTENT CREATION',
      description: 'Compelling micro-stories, branded editorial pieces, and evocative human moments.',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80'
    }
  ],
  email: 'navanithavijayakumar14@gmail.com',
  whatsapp: '+91 7356837413',
  whatsappUrl: 'https://wa.me/917356837413',
  linkedin: 'https://www.linkedin.com/in/navanitha-vijayakumar-9b77b8385',
  instagram: 'https://www.instagram.com/__navu__navanitha'
};

export const selectedWorks: Project[] = [
  {
    id: 'production-project',
    number: '01',
    title: 'PRODUCTION',
    category: 'Production',
    categoryLabel: 'Television & Episodic Direction',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=80',
    description: 'A multi-arc episodic drama balancing rapid dialogue rhythm, continuous spatial choreography, and nuanced camera staging across intense creative environments.',
    role: ['Episodic Director', 'Creative Producer'],
    client: 'Broadcast & Streaming Network',
    youtubeId: 'dvoXNUJx2UI',
    gallery: [
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'film-interview-project',
    number: '02',
    title: 'FILM & INTERVIEW',
    category: 'Film & Interview',
    categoryLabel: 'Narrative Fiction & Documentary',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=80',
    description: 'An intimate neo-noir narrative short exploring psychological suspense, natural ambient shadows, and coastal audio landscapes in northern Chennai.',
    role: ['Director', 'Screenwriter'],
    client: 'Independent Film Collective',
    youtubeId: 'KCJ6rgQtbRQ',
    gallery: [
      'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'digital-content-project',
    number: '03',
    title: 'DIGITAL CONTENT',
    category: 'Digital Media',
    categoryLabel: 'Creative Visual Direction & Brand Content',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80',
    description: 'Sculpted commercial spot blending robotic motion control, probe macro cinematography, and tactile reflections to express artisanal craftsmanship.',
    role: ['Visual Director', 'Editor'],
    client: 'Atelier Horology Studio',
    youtubeId: '9_YAq3i-vII',
    gallery: [
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];

export const projects = selectedWorks;
