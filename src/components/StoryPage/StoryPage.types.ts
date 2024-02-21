import type { ReactElement } from 'react';

import type {
  LAYOUT_VARIANTS,
  WildcardData,
} from '@/fables_library/library.types';

import type { StoryPagePictureProps } from '../StoryPagePicture';

export interface StoryPageProps {
  layout: LAYOUT_VARIANTS;
  wildcardsData?: WildcardData[];
  text: string[];
  backgroundPicture: StoryPagePictureProps;
}

export type StoryPage = (props: StoryPageProps) => ReactElement;
