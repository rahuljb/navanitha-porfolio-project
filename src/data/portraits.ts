import diary0055 from '../assets/visualdiary/IMG_0055.JPG';
import diary0733 from '../assets/visualdiary/IMG_0733.JPG';
import diary2137 from '../assets/visualdiary/IMG_2137.JPG';
import diary2275 from '../assets/visualdiary/IMG_2275.JPG';
import diary2343 from '../assets/visualdiary/IMG_2343.JPG';
import diary7778 from '../assets/visualdiary/IMG_7778.JPG';

export interface PortraitPhoto {
  id: string;
  imageSrc: string;
  title?: string;
  aspectClass: string;
  category: 'Graphic Design' | 'Portraits' | 'Visual Diary';
  width?: number;
  height?: number;
}

// Graphic design posters and prints from /public/images/graphicdesigning
export const graphicDesignPhotos: PortraitPhoto[] = [
  {
    id: 'gd-film-poster-1',
    title: 'Film Poster 1',
    imageSrc: '/images/graphicdesigning/Film%20Poster%201.jpg',
    aspectClass: 'aspect-[15/21]',
    category: 'Graphic Design',
    width: 1500,
    height: 2100,
  },
  {
    id: 'gd-horizontal-poster',
    title: 'Horizontal Poster',
    imageSrc: '/images/graphicdesigning/Horizontal%20Poster.jpg',
    aspectClass: 'aspect-[35/25]',
    category: 'Graphic Design',
    width: 3508,
    height: 2480,
  },
  {
    id: 'gd-magazine-cover',
    title: 'Magazine Cover Page',
    imageSrc: '/images/graphicdesigning/Magazine%20Cover%20Page.jpg',
    aspectClass: 'aspect-[25/35]',
    category: 'Graphic Design',
    width: 2480,
    height: 3508,
  },
  {
    id: 'gd-neoe-poster',
    title: 'NEOE Poster',
    imageSrc: '/images/graphicdesigning/NEOE%20Poster.jpg',
    aspectClass: 'aspect-[35/50]',
    category: 'Graphic Design',
    width: 3508,
    height: 4961,
  },
  {
    id: 'gd-poster-1',
    title: 'Poster 1',
    imageSrc: '/images/graphicdesigning/Poster%201.jpg',
    aspectClass: 'aspect-[35/50]',
    category: 'Graphic Design',
    width: 3508,
    height: 4961,
  },
  {
    id: 'gd-product-ad',
    title: 'Product Ad',
    imageSrc: '/images/graphicdesigning/Product%20Ad.jpg',
    aspectClass: 'aspect-[25/35]',
    category: 'Graphic Design',
    width: 2480,
    height: 3508,
  },
  {
    id: 'gd-social-media-poster',
    title: 'Social Media Poster',
    imageSrc: '/images/graphicdesigning/Social%20Media%20Poster.jpg',
    aspectClass: 'aspect-square',
    category: 'Graphic Design',
    width: 1080,
    height: 1080,
  },
  {
    id: 'gd-three-fold-2',
    title: 'Three Fold - 2',
    imageSrc: '/images/graphicdesigning/Three%20Fold%20-2.jpg',
    aspectClass: 'aspect-[36/26]',
    category: 'Graphic Design',
    width: 3600,
    height: 2550,
  },
];

// Portrait series from /public/images/portraits
export const portraitPhotos: PortraitPhoto[] = [
  { id: 'portrait-1018', title: 'Portrait Study I', imageSrc: '/images/portraits/IMG_1018.JPG', aspectClass: 'aspect-[2/3]', category: 'Portraits', width: 1800, height: 2700 },
  { id: 'portrait-1094', title: 'Portrait Study II', imageSrc: '/images/portraits/IMG_1094.JPG', aspectClass: 'aspect-[2/3]', category: 'Portraits', width: 1800, height: 2700 },
  { id: 'portrait-1112', title: 'Portrait Study III', imageSrc: '/images/portraits/IMG_1112.JPG', aspectClass: 'aspect-[2/3]', category: 'Portraits', width: 1800, height: 2700 },
  { id: 'portrait-2776', title: 'Portrait Study IV', imageSrc: '/images/portraits/IMG_2776.JPG', aspectClass: 'aspect-[2/3]', category: 'Portraits', width: 1800, height: 2700 },
  { id: 'portrait-6726', title: 'Portrait Study V', imageSrc: '/images/portraits/IMG_6726.JPG', aspectClass: 'aspect-[2/3]', category: 'Portraits', width: 1800, height: 2700 },
  { id: 'portrait-6837', title: 'Portrait Study VI', imageSrc: '/images/portraits/IMG_6837.JPG', aspectClass: 'aspect-[2/3]', category: 'Portraits', width: 1800, height: 2700 },
];

// Visual diary frames from visualdiary assets
export const visualDiaryPhotos: PortraitPhoto[] = [
  { id: 'diary-0055', title: 'Quiet Light', imageSrc: diary0055, aspectClass: 'aspect-[3/2]', category: 'Visual Diary', width: 6000, height: 4000 },
  { id: 'diary-0733', title: 'Subtle Geometry', imageSrc: diary0733, aspectClass: 'aspect-[3/2]', category: 'Visual Diary', width: 6000, height: 4000 },
  { id: 'diary-2137', title: 'Urban Texture', imageSrc: diary2137, aspectClass: 'aspect-[3/2]', category: 'Visual Diary', width: 6000, height: 4000 },
  { id: 'diary-2275', title: 'Between Moments', imageSrc: diary2275, aspectClass: 'aspect-[3/2]', category: 'Visual Diary', width: 6000, height: 4000 },
  { id: 'diary-2343', title: 'Coastal Dusk', imageSrc: diary2343, aspectClass: 'aspect-[3/2]', category: 'Visual Diary', width: 6000, height: 4000 },
  { id: 'diary-7778', title: 'Shadow Play', imageSrc: diary7778, aspectClass: 'aspect-[3/2]', category: 'Visual Diary', width: 6000, height: 4000 },
];

export const allPhotographyItems: PortraitPhoto[] = [
  ...portraitPhotos,
  ...visualDiaryPhotos,
  ...graphicDesignPhotos,
];
