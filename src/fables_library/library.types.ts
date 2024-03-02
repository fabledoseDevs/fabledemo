export interface Info {
  id: string;
  title: string;
  author: string[];
  translation?: string[];
  pictures: string[];
  thumb: string;
  cover: Picture;
  summary: string;
  extendedSummary: string;
  synopsis: string;
  summaryDecor?: string;
  mainTags: [TAG_NAMES, TAG_NAMES];
  detailedTags: TAG_NAMES[];
}

export enum LAYOUT_VARIANTS {
  SINGLE_COLUMN_TEXT_BOTTOM,
  SINGLE_COLUMN_TEXT_MIDDLE,
  SINGLE_COLUMN_TEXT_TOP,
  TWO_COLUMNS_TEXT_LEFT,
  TWO_COLUMNS_TEXT_RIGHT,
  DIAGONAL_TLBR,
  DIAGONAL_TRBL,
  WILDCARD,
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

export interface WildcardData {
  top: number;
  left: number;
  width: number;
  height?: number;
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
  wildcardData?: WildcardData[];
  paragraphs: string[];
  picture: Picture;
}

export interface Story {
  info: Info;
  content: Slide[];
}
