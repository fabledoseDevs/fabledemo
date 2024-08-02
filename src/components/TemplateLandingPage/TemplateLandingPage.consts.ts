import { BOOKCARD_LAYOUT } from '@/components/StoryCard/StoryCard.types';
import goldilocksThumb from '@/img/stories-thumbs/thumb-goldilocks.png';
import piggiesThumb from '@/img/stories-thumbs/thumb-piggies.png';
import { TAG_NAMES } from '@/types/fairytale.types';

import type { CardData } from './TemplateLandingPage.types';

export const CARD_GOLDILOCKS: CardData = {
  thumb: goldilocksThumb.src,
  cardLayout: BOOKCARD_LAYOUT.IMAGE_LEFT,
  mainTags: [TAG_NAMES.AGE_3, TAG_NAMES.CONTEMPORARY_FABLE],
  detailedTags: [
    TAG_NAMES.RESPONSIBILITY,
    TAG_NAMES.PRIVACY,
    TAG_NAMES.REPARATION,
  ],
};

export const CARD_THREE_PIGGIES: CardData = {
  thumb: piggiesThumb.src,
  cardLayout: BOOKCARD_LAYOUT.IMAGE_RIGHT,
  mainTags: [TAG_NAMES.AGE_3, TAG_NAMES.CONTEMPORARY_FABLE],
  detailedTags: [
    TAG_NAMES.HELPFULNESS,
    TAG_NAMES.RESPONSIBILITY,
    TAG_NAMES.DILIGENCE,
  ],
};
