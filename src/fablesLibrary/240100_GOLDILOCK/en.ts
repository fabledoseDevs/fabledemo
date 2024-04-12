import cover_sd from '@/fablesLibrary/240100_GOLDILOCK/images/cover_1280x720.webm';
import cover_hd from '@/fablesLibrary/240100_GOLDILOCK/images/cover_1920x1080.webm';
import img_1_sd from '@/fablesLibrary/240100_GOLDILOCK/images/img_1_1280x720.webm';
import img_1_hd from '@/fablesLibrary/240100_GOLDILOCK/images/img_1_1920x1080.webm';
import img_2_sd from '@/fablesLibrary/240100_GOLDILOCK/images/img_2_1280x720.webm';
import img_2_hd from '@/fablesLibrary/240100_GOLDILOCK/images/img_2_1920x1080.webm';
import img_3_sd from '@/fablesLibrary/240100_GOLDILOCK/images/img_3_1280x720.webm';
import img_3_hd from '@/fablesLibrary/240100_GOLDILOCK/images/img_3_1920x1080.webm';
import img_6_sd from '@/fablesLibrary/240100_GOLDILOCK/images/img_6_1280x720.webm';
import img_6_hd from '@/fablesLibrary/240100_GOLDILOCK/images/img_6_1920x1080.webm';
import img_7_sd from '@/fablesLibrary/240100_GOLDILOCK/images/img_7_1280x720.webm';
import img_7_hd from '@/fablesLibrary/240100_GOLDILOCK/images/img_7_1920x1080.webm';
import decorator from '@/fablesLibrary240100_GOLDILOCK/images/decorator.png';
import thumb from '@/fablesLibrary240100_GOLDILOCK/images/thumb.png';

import type { Story } from '../library.types';
import { LAYOUT_VARIANTS, TAG_NAMES } from '../library.types';

export const GOLDILOCKS_AND_THREE_BEARS: Story = {
  info: {
    id: '240100_GOLDILOCK',
    title: 'Goldilocks And Three Bears',
    author: ['Pawel Modzelewski'],
    pictures: ['Edyta Petrzak'],
    translation: [],
    thumb: thumb.src,
    decorator: decorator.src,
    cover: {
      description: 'Goldilocks And Three Bears',
      picSizes: {
        '1080': cover_hd,
        '720': cover_sd,
      },
    },
    summary:
      "The golden-haired girl stumbles upon the bears' cabin and starts causing mischief there, learning a lesson about the importance of responsibility.",
    extendedSummary:
      'An engaging version of the classic fairy tale "Goldilocks and the Three Bears" prepared by our team. When the golden-haired girl stumbles upon the bears\' cabin and starts causing mischief there, she learns a lesson about the importance of responsibility. This charming adaptation reminds both young and old children that our actions have consequences and it is never too late to make amends.',
    synopsis:
      "The fairy tale tells about three teddy bears who lived in a cozy forest. One day, a golden-haired girl, known for her mischievous nature, broke into their house and caused a ruckus, eating their porridge, breaking their armchair and making a mess in their bedroom. When the bears returned, they realized what had happened and started looking for the intruder. The golden-haired girl, terrified, decided to repair the damage and apologize to the bears. She spent the whole day with them, helping them prepare the porridge, fixing the car seat, and tidying up the bedroom. The fairy tale has a happy ending when the girl learns a lesson about respect for other people's property and enjoys dinner and dessert together with the teddy bears. He emphasizes that although children sometimes do mischief, it is important to apologize and correct mistakes.",
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
      layout: LAYOUT_VARIANTS.NARROW_TEXT_TOP_LEFT,
      paragraphs: [
        'Na skraju przytulnego lasu, w drewnianym domu żyły sobie trzy misie. Tata miś, który był duży i silny, mama miś o łagodnym sercu, oraz mały misio co był marudny. W domu misiów było przytulnie. Były w nim trzy fotele oraz trzy, starannie pościelone łóżeczka. Misiowa rodzina codziennie rano jadała owsiankę przygotowywaną przez mamę. To była najlepsza owsianka na świecie — z miodem i jagodami. Jednak bardziej niż owsiankę misie uwielbiały spacery po lesie. Pewnego ranka postanowiły ruszyć na taki spacer wyjątkowo wcześnie. Wstały od stołu, od śniadania, nie skończywszy owsianki, i wyszły do lasu.\n',
      ],
      picture: {
        description: 'Lorem',
        picSizes: {
          '1080': img_1_hd,
          '720': img_1_sd,
        },
      },
    },
    {
      slideId: 2,
      layout: LAYOUT_VARIANTS.NARROW_TEXT_BOTTOM_RIGHT,
      paragraphs: [
        'Tak się złożyło, że tego dnia nieopodal ich domu przechadzała się złotowłosa dziewczynka. Niesforne to było dziecko, znane z psotnego zachowania i niebaczenia na innych. Złotowłosa zobaczywszy otwarty dom, wślizgnęła się do środka bez zaproszenia.\n',
      ],
      picture: {
        description: 'Lorem',
        picSizes: {
          '1080': img_2_hd,
          '720': img_2_sd,
        },
      },
    },
    {
      slideId: 3,
      layout: LAYOUT_VARIANTS.WILDCARD,
      wildcardData: [
        { top: 5, left: 2.5, width: 40 },
        { top: 20, left: 48, width: 40 },
        { top: 40, left: 50, width: 40 },
        { top: 60, left: 52, width: 40 },
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
          '1080': img_3_hd,
          '720': img_3_sd,
        },
      },
    },

    {
      slideId: 6,
      layout: LAYOUT_VARIANTS.WILDCARD,
      wildcardData: [
        { top: 55, left: 2.5, width: 30 },
        { top: 10, left: 62, width: 35 },
        { top: 25, left: 59, width: 35 },
        { top: 38, left: 57, width: 35 },
      ],
      paragraphs: [
        'Wtem misie wróciły ze swojego porannego spaceru. I od razu po wejściu do kuchni zorientowały się, że coś jest nie tak. Podeszły do stolika, na którym stała owsianka i zdumione zaczęły ze sobą rozmawiać.',
        '"Ktoś jadł moją owsiankę." Powiedział mocnym głosem tata miś po zerknięciu do swojej miseczki.',
        '"I moją także." Powiedziała zdziwiona mama miś.',
        'Błeee!" Zajęczał mały miś-maruda. "Moją owsiankę ktoś zjadł w całości!',
      ],
      picture: {
        description: 'Lorem',
        picSizes: {
          '1080': img_6_hd,
          '720': img_6_sd,
        },
      },
    },

    {
      slideId: 7,
      layout: LAYOUT_VARIANTS.WILDCARD,
      wildcardData: [
        { top: 5, left: 65, width: 30 },
        { top: 30, left: 60, width: 35 },
        { top: 45, left: 57, width: 35 },
        { top: 60, left: 54, width: 40 },
      ],
      paragraphs: [
        'Wciąż czujne i nieufne misie przeszły do saloniku, aby sprawdzić, czy intruz wciąż krząta się po domu. Z wielkim zdziwieniem zaczęły badać swoje foteliki.',
        '"Ktoś siedział na moim fotelu." Mocnym głosem powiedział tata miś.',
        '"I na moim także." Powiedziała zatroskana mama miś.',
        '"Błeee!" Zajęczał mały miś-maruda. "W moim foteliku ktoś ułamał nogę!"',
      ],
      picture: {
        description: 'Lorem',
        picSizes: {
          '1080': img_7_hd,
          '720': img_7_sd,
        },
      },
    },
  ],
};
