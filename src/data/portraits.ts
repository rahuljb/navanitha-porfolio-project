import diary0055 from '../assets/visualdiary/IMG_0055.JPG';
import diary0733 from '../assets/visualdiary/IMG_0733.JPG';
import diary2137 from '../assets/visualdiary/IMG_2137.JPG';
import diary2275 from '../assets/visualdiary/IMG_2275.JPG';
import diary2343 from '../assets/visualdiary/IMG_2343.JPG';
import diary7778 from '../assets/visualdiary/IMG_7778.JPG';

export interface PortraitPhoto {
  id: string;
  imageSrc: string;
  aspectClass: string;
  category: 'Portraits' | 'Visual Diary';
}

// These entries mirror the image files that actually exist in /public/images.
export const portraitPhotos: PortraitPhoto[] = [
  { id: 'portrait-1018', imageSrc: '/images/portraits/IMG_1018.JPG', aspectClass: '', category: 'Portraits' },
  { id: 'portrait-1094', imageSrc: '/images/portraits/IMG_1094.JPG', aspectClass: '', category: 'Portraits' },
  { id: 'portrait-1112', imageSrc: '/images/portraits/IMG_1112.JPG', aspectClass: '', category: 'Portraits' },
  { id: 'portrait-2776', imageSrc: '/images/portraits/IMG_2776.JPG', aspectClass: '', category: 'Portraits' },
  { id: 'portrait-6726', imageSrc: '/images/portraits/IMG_6726.JPG', aspectClass: '', category: 'Portraits' },
  { id: 'portrait-6837', imageSrc: '/images/portraits/IMG_6837.JPG', aspectClass: '', category: 'Portraits' },
];

export const visualDiaryPhotos: PortraitPhoto[] = [
  { id: 'diary-0055', imageSrc: diary0055, aspectClass: '', category: 'Visual Diary' },
  { id: 'diary-0733', imageSrc: diary0733, aspectClass: '', category: 'Visual Diary' },
  { id: 'diary-2137', imageSrc: diary2137, aspectClass: '', category: 'Visual Diary' },
  { id: 'diary-2275', imageSrc: diary2275, aspectClass: '', category: 'Visual Diary' },
  { id: 'diary-2343', imageSrc: diary2343, aspectClass: '', category: 'Visual Diary' },
  { id: 'diary-7778', imageSrc: diary7778, aspectClass: '', category: 'Visual Diary' },
];

export const allPhotographyItems = [...portraitPhotos, ...visualDiaryPhotos];
