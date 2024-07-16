import type { ReactElement } from 'react';

import type { BOOKCARD_LAYOUT } from '@/components/StoryCard/StoryCard.types';
import type { TAG_NAMES } from '@/types/fairytale.types';

export interface CardData {
  title: string;
  thumb: string;
  url: string;
  summary: string;
  synopsis: string;
  cardLayout: BOOKCARD_LAYOUT;
  mainTags: [TAG_NAMES, TAG_NAMES];
  detailedTags: TAG_NAMES[];
}

export type TemplateLandingPage = () => ReactElement;
