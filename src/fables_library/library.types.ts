export interface Info {
  id: string;
  title: string;
  author: string[];
  translation?: string[];
  pictures: string[];
  thumb: string;
  cover: string;
  excerpt: string;
  summary: string;
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

export interface Picture {
  general: string;
  mobile: string;
}

export interface Slide {
  slideId: number;
  layout: LAYOUT_VARIANTS;
  widcardsData?: WildcardData[]
  paragraphs: string[];
  picture: Picture;
}

export interface Story {
  info: Info;
  content: Slide[];
}