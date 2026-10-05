export interface ProductionVideo {
  id: number;
  number: string;
  category: string;
  title: string;
  year: string;
  role: string;
  youtubeId: string;
  youtubeUrl: string;
  thumbnail: string;
  description: string;
  duration?: string;
}

export type VideoItem = ProductionVideo;

export const productionVideos: ProductionVideo[] = [
  {
    id: 1,
    number: '01',
    category: 'Production',
    title: 'Visual Production Project 01',
    year: '2025',
    role: 'Director · Producer',
    youtubeId: 'dvoXNUJx2UI',
    youtubeUrl: 'https://youtu.be/dvoXNUJx2UI',
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=80',
    description: 'A visual production project showcasing creative execution, nuanced camera staging, and empathetic storytelling through cinematic framing.'
  },
  {
    id: 2,
    number: '02',
    category: 'Television & Film',
    title: 'Cinematic Narrative Project 02',
    year: '2024',
    role: 'Director · Screenplay',
    youtubeId: 'KCJ6rgQtbRQ',
    youtubeUrl: 'https://youtu.be/KCJ6rgQtbRQ',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=80',
    description: 'Dynamic character blocking, atmospheric lighting, and continuous spatial rhythm capturing emotional vulnerability on screen.'
  },
  {
    id: 3,
    number: '03',
    category: 'Digital Media & Direction',
    title: 'Creative Directing Project 03',
    year: '2024',
    role: 'Creative Director · Editor',
    youtubeId: '9_YAq3i-vII',
    youtubeUrl: 'https://youtu.be/9_YAq3i-vII',
    thumbnail: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=1600&q=80',
    description: 'Exploring human connections, everyday textures, and expressive visual grammar through rhythmic pacing and sound design.'
  },
  {
    id: 4,
    number: '04',
    category: 'Content Creation & Storytelling',
    title: 'Visual Storytelling Project 04',
    year: '2023',
    role: 'Visual Director · Storyteller',
    youtubeId: 'HVhoRcdmWi4',
    youtubeUrl: 'https://youtu.be/HVhoRcdmWi4',
    thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1600&q=80',
    description: 'An evocative synthesis of cultural authenticity, natural ambient lighting, and intimate human drama that leaves a lasting impression.'
  }
];

export const videos = productionVideos;
