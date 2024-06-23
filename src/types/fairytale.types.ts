import type { StaticImageData } from 'next/image';

export interface Info {
  id: string;
  title: string;
  author?: string[];
  adaptationAuthors?: string[];
  translation?: string[];
  pictures: string[];
  animation: string[];
  thumb: string;
  decorator: string;
  defaultColor: string;
  cover: Picture;
  summary: string;
  extendedSummary: string;
  synopsis: string;
  summaryDecor?: string;
  mainTags: [TAG_NAMES, TAG_NAMES];
  detailedTags: TAG_NAMES[];
}

export enum LAYOUT_VARIANTS {
  WIDE_TEXT_TOP = 'wide-text-top',
  WIDE_TEXT_MIDDLE = 'wide-text-middle',
  WIDE_TEXT_BOTTOM = 'wide-text-bottom',
  NARROW_TEXT_TOP_LEFT = 'narrow-text-top-left',
  NARROW_TEXT_TOP_RIGHT = 'narrow-text-top-right',
  NARROW_TEXT_MIDDLE_LEFT = 'narrow-text-middle-left',
  NARROW_TEXT_MIDDLE_RIGHT = 'narrow-text-middle-right',
  NARROW_TEXT_BOTTOM_LEFT = 'narrow-text-bottom-left',
  NARROW_TEXT_BOTTOM_RIGHT = 'narrow-text-bottom-right',
  FINAL_SLIDE = 'final-slide',
}

export enum TAG_NAMES {
  AGE_3 = 'age-3',
  AGE_5 = 'age-5',
  CLASSIC_FABLE = 'classic-fable',
  CONTEMPORARY_FABLE = 'contemporary-fable',
  RESPONSIBILITY = 'responsibility',
  CAREFULNESS = 'carefulness',
  HELPFULNESS = 'helpfulness',
  DILIGENCE = 'diligence',
  PRIVACY = 'privacy',
  FAMILY = 'family',
  DEATH = 'death',
  TOXIC_RELATIONS = 'toxic-relations',
  MODERATION = 'moderation',
  COOPERATION = 'cooperation',
  REPARATION = 'reparation',
}

export interface PictureSizes {
  1080?: string;
  720: string;
  480?: string;
  360?: string;
  blur?: string;
}

export interface Picture {
  description: string;
  picSizes: PictureSizes;
  backup: StaticImageData;
}

export interface Slide {
  slideId: number;
  layout: LAYOUT_VARIANTS;
  paragraphs?: string[];
  picture: Picture;
}

export interface Story {
  info: Info;
  content: Slide[];
}
