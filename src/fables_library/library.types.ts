export interface Info {
  id: string;
  title: string;
  author: string[];
  translation?: string[];
  pictures: string[];
  thumb: string;
  cover: Picture;
  excerpt: string;
  summary: string;
  summaryDecor?: string;
  mainTags: string[];
  detailedTags: string[];
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
  wildcardsData?: WildcardData[];
  paragraphs: string[];
  picture: Picture;
}

export interface Story {
  info: Info;
  content: Slide[];
}
