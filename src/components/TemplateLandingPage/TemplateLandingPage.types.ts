import type { ReactElement } from 'react';

import type { BOOKCARD_LAYOUT } from '@/components/StoryCard/StoryCard.types';
import type { TAG_NAMES } from '@/types/fairytale.types';

export interface CardData {
  thumb: string;
  cardLayout: BOOKCARD_LAYOUT;
  mainTags: [TAG_NAMES, TAG_NAMES];
  detailedTags: TAG_NAMES[];
}

export type TemplateLandingPageTT = {
  jumbotron: {
    subtitle: string;
    before: string;
    after: string;
    redLineText: string;
  };
  storyCardButtonLabel: { read: string; comingSoon: string };
  projectSummary: { mainText: string[]; supplementaryText: string[] };
};

export type StoryCardTT = {
  title: string;
  url: string;
  summary: string;
  synopsis: string;
};

export interface TranslationTemplate {
  en: TemplateLandingPageTT;
  pl: TemplateLandingPageTT;
}

export interface TranslationCard {
  en: StoryCardTT;
  pl: StoryCardTT;
}

export interface ActiveTranslation {
  template: TemplateLandingPageTT;
  goldilock: StoryCardTT;
  pigs: StoryCardTT;
}

export type UseTranslation = () => ActiveTranslation;
export type TemplateLandingPage = () => ReactElement;
