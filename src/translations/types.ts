interface CookieBannerTT {
  headline: string;
  firstPart: string;
  secondPart: string;
}

interface ExitboxTT {
  headline: string;
  acceptButton: string;
  declineButton: string;
}

interface FooterTT {
  mainCopyrights: string;
  copyrightsNote: string;
}

interface JumbotronTT {
  subtitle: string;
  before: string;
  after: string;
  redLineText: string;
}

interface LoadingScreenTT {
  label: string;
  alt: string;
}

interface RotationGuardTT {
  mainMessage: string;
  detailedMessage: string[];
}

interface SocialIconsTT {
  cta: string;
  fbLabel: string;
  fbLink: string;
  instLabel: string;
  instLink: string;
  subLabel: string;
  subLink: string;
}

interface StoryCardTT {
  title: string;
  url: string;
  summary: string;
  synopsis: string;
}

interface TagboxTT {
  tagboxTitle: string;
  tagboxSynopsis: string;
}

interface TagListTT {
  general: string;
  themes: string;
  details: string;
}

interface TemplateLandingPageTT {
  storyCardButtonLabel: {
    read: string;
    comingSoon: string;
  };
  projectSummary: {
    mainText: string[];
    supplementaryText: string[];
  };
}

export interface Translation<T> {
  en: T;
  pl: T;
}

export type CookieBannerTranslation = Translation<CookieBannerTT>;
export type ExitboxTranslation = Translation<ExitboxTT>;
export type FooterTranslation = Translation<FooterTT>;
export type JumbotronTranslation = Translation<JumbotronTT>;
export type LoadingScreenTranslation = Translation<LoadingScreenTT>;
export type RotationGuardTranslation = Translation<RotationGuardTT>;
export type SocialIconsTranslation = Translation<SocialIconsTT>;
export type StoryCardTranslation = Translation<StoryCardTT>;
export type TagboxTranslation = Translation<TagboxTT>;
export type TagListTranslation = Translation<TagListTT>;
export type TemplateLandingPageTranslation = Translation<TemplateLandingPageTT>;
