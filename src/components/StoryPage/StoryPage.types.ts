import type { ReactElement } from 'react';

import type { SlidePictureProps } from '@/components/SlidePicture';
import type {
  LAYOUT_VARIANTS,
  WildcardData,
} from '@/fables_library/library.types';

export interface StoryPageProps {
  layout: LAYOUT_VARIANTS;
  wildcardsData?: WildcardData[];
  text: string[];
  backgroundPicture: SlidePictureProps;
}

export type StoryPage = (props: StoryPageProps) => ReactElement;
