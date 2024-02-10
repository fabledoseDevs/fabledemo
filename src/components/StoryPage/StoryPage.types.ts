import type { ReactElement } from 'react';

import type {
  LAYOUT_VARIANTS,
  WildcardData,
} from '@/fables_library/library.types';

import type { SlidePictureProps } from '../StoryPagePicture';

export enum BACKGROUND_VARIANTS {
  NONE = 'none',
  LIGHT = 'light',
  MEDIUM = 'medium',
  INTENSE = 'intense',
}

export enum FONT_SIZE {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum FONT_COLOR {
  WHITE = 'white',
  WHITE_STROKED = 'white-stroked',
  BLACK = 'black',
  BLACK_STROKED = 'black-stroked',
  YELLOW = 'yellow',
  YELLOW_STROKED = 'yellow-stroked',
}

export interface StoryPageProps {
  layout: LAYOUT_VARIANTS;
  wildcardsData?: WildcardData[];
  text: string[];
  backgroundPicture: SlidePictureProps;
}

export type StoryPage = (props: StoryPageProps) => ReactElement;
