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
    mainTags: ['3+', 'Bajka'],
    detailedTags: ['Odpowiedzialność', 'Odwaga', 'Przepraszam', 'Przyroda'],
  },
  content: [
    {
      slideId: 1,
      layout: LAYOUT_VARIANTS.SINGLE_COLUMN_TEXT_BOTTOM,
      paragraphs: [
        'Na skraju przytulnego lasu, w drewnianym domu żyły sobie trzy misie. Tata miś, który był duży i silny, mama miś o łagodnym sercu, oraz mały misio co był marudny. W domu misiów było przytulnie. Były w nim trzy fotele oraz trzy, starannie pościelone łóżeczka. Misiowa rodzina codziennie rano jadała owsiankę przygotowywaną przez mamę. To była najlepsza owsianka na świecie — z miodem i jagodami. Jednak bardziej niż owsiankę misie uwielbiały spacery po lesie. Pewnego ranka postanowiły ruszyć na taki spacer wyjątkowo wcześnie. Wstały od stołu, od śniadania, nie skończywszy owsianki, i wyszły do lasu.',
        'Lorem ipsum sit amet.',
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
