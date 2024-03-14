import cover from '@/fablesLibrary/240100_GOLDILOCK/images/cover.webm';
import img_1_fhd from '@/fablesLibrary/240100_GOLDILOCK/images/img_1_1920x1080.webm';
import img_2_fhd from '@/fablesLibrary/240100_GOLDILOCK/images/img_2_1920x1080.webm';
import img_3_lq from '@/fablesLibrary/240100_GOLDILOCK/images/img_3_640x360.webm';
import img_3_sd from '@/fablesLibrary/240100_GOLDILOCK/images/img_3_854x480.webm';
import img_3_hd from '@/fablesLibrary/240100_GOLDILOCK/images/img_3_1280x720.webm';
import img_3_fhd from '@/fablesLibrary/240100_GOLDILOCK/images/img_3_1920x1080.webm';
import decorator from '@/fablesLibrary240100_GOLDILOCK/images/decorator.png';
import thumb from '@/fablesLibrary240100_GOLDILOCK/images/thumb.png';

import type { Story } from '../library.types';
import { LAYOUT_VARIANTS, TAG_NAMES } from '../library.types';

export const GOLDILOCKS_AND_THREE_BEARS: Story = {
  info: {
    id: '240100_GOLDILOCK',
    title: 'Złotowłosa i Trzy Misie',
    author: ['Paweł Modzelewski'],
    pictures: ['Edyta Petrzak'],
    translation: [],
    thumb: thumb.src,
    decorator: decorator.src,
    cover: {
      description: 'Złotowłosa i Trzy Misie',
      picSizes: {
        '1080': cover,
        '720': cover,
        '480': '/',
        '360': '/',
      },
    },
    summary:
      'Złotowłosa dziewczynka natrafia na chatkę niedźwiadków i zaczyna tam psocić, w konsekwencji czego otrzymuje lekcję na temat znaczenia odpowiedzialności.',
    extendedSummary:
      'Przygotowana przez nasz zespół wciągająca wersja klasycznej bajki „Złotowłosa i Trzy Misie”. Gdy Złotowłosa dziewczynka natrafia na chatkę niedźwiadków i zaczyna tam psocić, otrzymuje lekcję na temat znaczenia odpowiedzialności. Ta czarująca adaptacja przypomina zarówno najmłodszym, jak i starszym dzieciom, że nasze działania mają konsekwencje i nigdy nie jest za późno, aby to naprawić błędy.',
    synopsis:
      'Bajka opowiada o trzech misiach, które mieszkały w przytulnym lesie. Pewnego dnia złotowłosa dziewczynka, znana z psotnego charakteru, wtargnęła do ich domu i narobiła zamieszania, zjadając ich owsiankę, psując fotelik i bałaganiąc w sypialni. Gdy misie wróciły, zorientowały się, co się stało, i zaczęły szukać intruza. Złotowłosa dziewczynka, przerażona, postanowiła naprawić szkody i przeprosić misie. Spędziła z nimi cały dzień, pomagając w przygotowaniu owsianki, naprawiając fotelik i porządkując sypialnię. Bajka kończy się happy endem, gdy dziewczynka uczy się lekcji o szacunku do cudzego mienia i wspólnie z misiami cieszy się kolacją oraz deserem. Podkreśla, że choć dzieci czasem robią psoty, ważne jest przeproszenie i naprawienie błędów.',
    summaryDecor: '/images/decorator.png',
    mainTags: [TAG_NAMES.AGE_3, TAG_NAMES.CONTEMPORARY_FABLE],
    detailedTags: [
      TAG_NAMES.RESPONSIBILITY,
      TAG_NAMES.PRIVACY,
      TAG_NAMES.REPARATION,
    ],
  },
  content: [
    {
      slideId: 1,
      layout: LAYOUT_VARIANTS.TWO_COLUMNS_TEXT_LEFT,
      paragraphs: [
        'Na skraju przytulnego lasu, w drewnianym domu żyły sobie trzy misie. Tata miś, który był duży i silny, mama miś o łagodnym sercu, oraz mały misio co był marudny. W domu misiów było przytulnie. Były w nim trzy fotele oraz trzy, starannie pościelone łóżeczka. Misiowa rodzina codziennie rano jadała owsiankę przygotowywaną przez mamę. To była najlepsza owsianka na świecie — z miodem i jagodami. Jednak bardziej niż owsiankę misie uwielbiały spacery po lesie. Pewnego ranka postanowiły ruszyć na taki spacer wyjątkowo wcześnie. Wstały od stołu, od śniadania, nie skończywszy owsianki, i wyszły do lasu.\n',
      ],
      picture: {
        description: 'Lorem',
        picSizes: {
          '1080': img_1_fhd,
          '720': img_1_fhd,
          '480': '/',
          '360': '/',
        },
      },
    },
    {
      slideId: 2,
      layout: LAYOUT_VARIANTS.TWO_COLUMNS_TEXT_RIGHT,
      paragraphs: [
        'Tak się złożyło, że tego dnia nieopodal ich domu przechadzała się złotowłosa dziewczynka. Niesforne to było dziecko, znane z psotnego zachowania i niebaczenia na innych. Złotowłosa zobaczywszy otwarty dom, wślizgnęła się do środka bez zaproszenia.\n',
      ],
      picture: {
        description: 'Lorem',
        picSizes: {
          '1080': img_2_fhd,
          '720': img_2_fhd,
          '480': '/',
          '360': '/',
        },
      },
    },
    {
      slideId: 3,
      layout: LAYOUT_VARIANTS.WILDCARD,
      wildcardData: [
        { top: 5, left: 2.5, width: 30 },
        { top: 30, left: 45, width: 35 },
        { top: 45, left: 50, width: 35 },
        { top: 60, left: 55, width: 40 },
      ],
      paragraphs: [
        'Będąc w środku, od razu poczuła w powietrzu zapach owsianki. Usiadła przy stole kuchennym i zaczęła wyjadać owsiankę należącą do misiów.',
        '"Ta jest zbyt gorąca." Powiedziała, zjadłszy łyżeczkę owsianki z miski taty misia.',
        '"Ta jest zbyt zimna." Powiedziała, po zjedzeniu łyżki owsianki z miseczki mamy misia.',
        '"Ta jest w sam raz!" Powiedziała po spróbowaniu owsianki z miseczki małego misia. A potem zjadła całą jego owsiankę.',
      ],
      picture: {
        description: 'Lorem',
        picSizes: {
          '1080': img_3_fhd,
          '720': img_3_hd,
          '480': img_3_sd,
          '360': img_3_lq,
        },
      },
    },
  ],
};
