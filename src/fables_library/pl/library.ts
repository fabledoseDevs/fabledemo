import type { Story } from '../library.types';
import { LAYOUT_VARIANTS } from '../library.types';

export const GOLDILOCKS_AND_THREE_BEARS: Story = {
  info: {
    id: '230100_GOLDILOCK_PL',
    title: 'Złotowłosa i Trzy Misie',
    author: ['Paweł Modzelewski'],
    pictures: ['Edyta Petrzak'],
    translation: ['Franek', 'Józiak'],
    thumb: '/images/fairytale-thumb-placeholder-01.png',
    cover: {
      description: 'Lorem Ipsum',
      picSizes: {
        '1080': 'images/goldilock_cover.webm',
        '720': 'images/goldilock_cover.webm',
        '480': '/',
        '360': '/',
      },
    },
    excerpt:
      'Złotowłosa dziewczynka natrafia na chatkę niedźwiadków i zaczyna tam psocić, w konsekwencji czego otrzymuje lekcję na temat znaczenia odpowiedzialności.',
    summary:
      'Przygotowana przez nasz zespół wciągająca wersja klasycznej bajki „Złotowłosa i Trzy Misie”. Gdy Złotowłosa dziewczynka natrafia na chatkę niedźwiadków i zaczyna tam psocić, otrzymuje lekcję na temat znaczenia odpowiedzialności. Ta czarująca adaptacja przypomina zarówno najmłodszym, jak i starszym dzieciom, że nasze działania mają konsekwencje i nigdy nie jest za późno, aby to naprawić błędy.',
    summaryDecor: '/images/decor-01.png',
    mainTags: [
      {
        tagName: '3+',
        tagDescription: 'Dobra dla dzieci od trzeciego roku życia',
        icon: {
          src: 'images/icon-tag-placeholder-01.svg',
          alt: '2+',
        },
      },
      {
        tagName: '3+',
        tagDescription: 'Dobra dla dzieci od trzeciego roku życia',
        icon: {
          src: 'images/icon-tag-placeholder-01.svg',
          alt: '2+',
        },
      },
    ],
    detailedTags: [
      {
        tagName: '3+',
        tagDescription: 'Dobra dla dzieci od trzeciego roku życia',
        icon: {
          src: 'images/icon-tag-placeholder-01.svg',
          alt: '2+',
        },
      },
      {
        tagName: '3+',
        tagDescription: 'Dobra dla dzieci od trzeciego roku życia',
        icon: {
          src: 'images/icon-tag-placeholder-01.svg',
          alt: '2+',
        },
      },
      {
        tagName: '3+',
        tagDescription: 'Dobra dla dzieci od trzeciego roku życia',
        icon: {
          src: 'images/icon-tag-placeholder-01.svg',
          alt: '2+',
        },
      },
      {
        tagName: '3+',
        tagDescription: 'Dobra dla dzieci od trzeciego roku życia',
        icon: {
          src: 'images/icon-tag-placeholder-01.svg',
          alt: '2+',
        },
      },
    ],
  },
  content: [
    {
      slideId: 1,
      layout: LAYOUT_VARIANTS.WILDCARD,
      wildcardData: [
        { top: 10, left: 5, width: 50 },
        { top: 40, left: 15, width: 50 },
      ],
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra leo odio, vel iaculis elit aliquet vel. Quisque a eros elit. Pellentesque id ex eu leo efficitur vehicula at elementum magna. Aliquam eu lacus purus. Fusce pellentesque nunc ut ex tempor, vel volutpat enim pretium. Ut blandit aliquam dui id aliquam. ',
        'Quisque id sodales sapien, eget imperdiet est. Sed tempus mi nec est mollis, feugiat pulvinar tellus sodales. Donec rhoncus felis a arcu pretium fringilla. Nunc eu sapien risus. Integer convallis tellus sed consectetur fermentum. Donec faucibus ex ac tellus pretium, ut viverra nisl suscipit. Curabitur viverra placerat varius.',
      ],
      picture: {
        description: 'Lorem',
        picSizes: {
          '1080': 'images/goldilock_cover.webm',
          '720': 'images/goldilock_cover.webm',
          '480': '/',
          '360': '/',
        },
      },
    },
    {
      slideId: 2,
      layout: LAYOUT_VARIANTS.TWO_COLUMNS_TEXT_LEFT,
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra leo odio, vel iaculis elit aliquet vel. Quisque a eros elit. Pellentesque id ex eu leo efficitur vehicula at elementum magna. Aliquam eu lacus purus. Fusce pellentesque nunc ut ex tempor, vel volutpat enim pretium. Ut blandit aliquam dui id aliquam. ',
      ],
      picture: {
        description: 'Lorem',
        picSizes: {
          '1080': 'images/goldilock_cover.webm',
          '720': 'images/goldilock_cover.webm',
          '480': '/',
          '360': '/',
        },
      },
    },
  ],
};
