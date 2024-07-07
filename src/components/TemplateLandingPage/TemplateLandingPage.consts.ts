import { BOOKCARD_LAYOUT } from '@/componentsStoryCard/StoryCard.types';
import goldilockThumb from '@/img/stories-thumbs/thumb-goldilock.png';
import piggiesThumb from '@/img/stories-thumbs/thumb-piggies.png';
import { TAG_NAMES } from '@/types/fairytale.types';

import type { CardData } from './TemplateLandingPage.types';

export const CARD_GOLDILOCK: CardData = {
  title: 'Złotowłosa i Trzy Misie',
  thumb: goldilockThumb.src,
  url: '/zlotowlosa-i-trzy-misie',
  summary:
    'Złotowłosa dziewczynka natrafia na chatkę niedźwiadków i zaczyna tam psocić, w konsekwencji czego otrzymuje lekcję na temat znaczenia odpowiedzialności.',
  synopsis:
    'Bajka opowiada o trzech misiach, które mieszkały w przytulnym lesie. Pewnego dnia złotowłosa dziewczynka, znana z psotnego charakteru, wtargnęła do ich domu i narobiła zamieszania, zjadając ich owsiankę, psując fotelik i bałaganiąc w sypialni. Gdy misie wróciły, zorientowały się, co się stało, i zaczęły szukać intruza. Złotowłosa dziewczynka, przerażona, postanowiła naprawić szkody i przeprosić misie. Spędziła z nimi cały dzień, pomagając w przygotowaniu owsianki, naprawiając fotelik i porządkując sypialnię. Bajka kończy się happy endem, gdy dziewczynka uczy się lekcji o szacunku do cudzego mienia i wspólnie z misiami cieszy się kolacją oraz deserem. Podkreśla, że choć dzieci czasem robią psoty, ważne jest przeproszenie i naprawienie błędów.',
  cardLayout: BOOKCARD_LAYOUT.IMAGE_LEFT,
  mainTags: [TAG_NAMES.AGE_3, TAG_NAMES.CONTEMPORARY_FABLE],
  detailedTags: [
    TAG_NAMES.RESPONSIBILITY,
    TAG_NAMES.PRIVACY,
    TAG_NAMES.REPARATION,
  ],
};

export const CARD_THREE_PIGGIES: CardData = {
  title: 'Trzy Świnki',
  thumb: piggiesThumb.src,
  url: '/',
  summary:
    'Trzy świnki wyruszają w wielki świat aby rozpocząć samodzielne życie. Ich historia nabiera dramatycznych barw, gdy muszą się skonfrontować z wilkiem.',
  synopsis: '...',
  cardLayout: BOOKCARD_LAYOUT.IMAGE_RIGHT,
  mainTags: [TAG_NAMES.AGE_3, TAG_NAMES.CONTEMPORARY_FABLE],
  detailedTags: [
    TAG_NAMES.HELPFULNESS,
    TAG_NAMES.RESPONSIBILITY,
    TAG_NAMES.FAMILY,
  ],
};
