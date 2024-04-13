export interface Info {
  id: string;
  title: string;
  author: string[];
  translation?: string[];
  pictures: string[];
  thumb: string;
  decorator: string;
  cover: Picture;
  summary: string;
  extendedSummary: string;
  synopsis: string;
  summaryDecor?: string;
  mainTags: [TAG_NAMES, TAG_NAMES];
  detailedTags: TAG_NAMES[];
}

export enum LAYOUT_VARIANTS {
  WIDE_TEXT_TOP,
  WIDE_TEXT_MIDDLE,
  WIDE_TEXT_BOTTOM,
  NARROW_TEXT_TOP_LEFT,
  NARROW_TEXT_TOP_RIGHT,
  NARROW_TEXT_MIDDLE_LEFT,
  NARROW_TEXT_MIDDLE_RIGHT,
  NARROW_TEXT_BOTTOM_LEFT,
  NARROW_TEXT_BOTTOM_RIGHT,
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
}

export interface Picture {
  description: string;
  picSizes: PictureSizes;
}

export interface Slide {
  slideId: number;
  layout: LAYOUT_VARIANTS;
  paragraphs: string[];
  picture: Picture;
}

export interface Story {
  info: Info;
  content: Slide[];
}
