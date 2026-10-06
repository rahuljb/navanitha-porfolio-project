export interface PortraitPhoto {
  id: string;
  imageSrc: string;
  aspectClass: string;
  category: 'Portraits' | 'Visual Diary';
}

// 01. PORTRAITS — strictly /public/images/portraits/
export const portraitPhotos: PortraitPhoto[] = [
  {
    id: 'portrait-1018',
    imageSrc: '/images/portraits/IMG_1018.JPG',
    aspectClass: 'aspect-[4/5]',
    category: 'Portraits'
  },
  {
    id: 'portrait-1094',
    imageSrc: '/images/portraits/IMG_1094.JPG',
    aspectClass: 'aspect-[3/4]',
    category: 'Portraits'
  },
  {
    id: 'portrait-1112',
    imageSrc: '/images/portraits/IMG_1112.JPG',
    aspectClass: 'aspect-[9/13]',
    category: 'Portraits'
  },
  {
    id: 'portrait-2776',
    imageSrc: '/images/portraits/IMG_2776.JPG',
    aspectClass: 'aspect-[4/5]',
    category: 'Portraits'
  },
  {
    id: 'portrait-6726',
    imageSrc: '/images/portraits/IMG_6726.JPG',
    aspectClass: 'aspect-[3/4]',
    category: 'Portraits'
  },
  {
    id: 'portrait-6837',
    imageSrc: '/images/portraits/IMG_6837.JPG',
    aspectClass: 'aspect-[1/1]',
    category: 'Portraits'
  }
];

// 02. VISUAL DIARY — strictly /public/images/visualdiary/
export const visualDiaryPhotos: PortraitPhoto[] = [
  {
    id: 'diary-7778',
    imageSrc: '/images/visualdiary/IMG_7778.JPG',
    aspectClass: 'aspect-[3/2]',
    category: 'Visual Diary'
  },
  {
    id: 'diary-0055',
    imageSrc: '/images/visualdiary/IMG_0055.JPG',
    aspectClass: 'aspect-[4/5]',
    category: 'Visual Diary'
  },
  {
    id: 'diary-0733',
    imageSrc: '/images/visualdiary/IMG_0733.JPG',
    aspectClass: 'aspect-[16/10]',
    category: 'Visual Diary'
  },
  {
    id: 'diary-2137',
    imageSrc: '/images/visualdiary/IMG_2137.JPG',
    aspectClass: 'aspect-[4/3]',
    category: 'Visual Diary'
  },
  {
    id: 'diary-2275',
    imageSrc: '/images/visualdiary/IMG_2275.JPG',
    aspectClass: 'aspect-[1/1]',
    category: 'Visual Diary'
  },
  {
    id: 'diary-2343',
    imageSrc: '/images/visualdiary/IMG_2343.JPG',
    aspectClass: 'aspect-[16/10]',
    category: 'Visual Diary'
  }
];

export const allPhotographyItems = [...portraitPhotos, ...visualDiaryPhotos];
