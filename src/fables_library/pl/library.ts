import type { Story } from '../library.types';
import { LAYOUT_VARIANTS, TAG_NAMES } from '../library.types';

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
    summary:
      'Złotowłosa dziewczynka natrafia na chatkę niedźwiadków i zaczyna tam psocić, w konsekwencji czego otrzymuje lekcję na temat znaczenia odpowiedzialności.',
    extendedSummary:
      'Przygotowana przez nasz zespół wciągająca wersja klasycznej bajki „Złotowłosa i Trzy Misie”. Gdy Złotowłosa dziewczynka natrafia na chatkę niedźwiadków i zaczyna tam psocić, otrzymuje lekcję na temat znaczenia odpowiedzialności. Ta czarująca adaptacja przypomina zarówno najmłodszym, jak i starszym dzieciom, że nasze działania mają konsekwencje i nigdy nie jest za późno, aby to naprawić błędy.',
    synopsis:
      'Bajka opowiada o trzech misiach, które mieszkały w przytulnym lesie. Pewnego dnia złotowłosa dziewczynka, znana z psotnego charakteru, wtargnęła do ich domu i narobiła zamieszania, zjadając ich owsiankę, psując fotelik i bałaganiąc w sypialni. Gdy misie wróciły, zorientowały się, co się stało, i zaczęły szukać intruza. Złotowłosa dziewczynka, przerażona, postanowiła naprawić szkody i przeprosić misie. Spędziła z nimi cały dzień, pomagając w przygotowaniu owsianki, naprawiając fotelik i porządkując sypialnię. Bajka kończy się happy endem, gdy dziewczynka uczy się lekcji o szacunku do cudzego mienia i wspólnie z misiami cieszy się kolacją oraz deserem. Podkreśla, że choć dzieci czasem robią psoty, ważne jest przeproszenie i naprawienie błędów.',
    summaryDecor: '/images/decor-01.png',
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
          '1080': 'images/Trzy misie_TEST_1920x1080.webm',
          '720': 'images/Trzy misie_TEST_1920x1080.webm',
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
          '1080': 'images/Zlotowlosa_TEST_1920x1080.webm',
          '720': 'images//Zlotowlosa_TEST_1920x1080.webm',
          '480': '/',
          '360': '/',
        },
      },
    },
  ],
};
