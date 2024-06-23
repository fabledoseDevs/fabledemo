import type { Dispatch, ReactElement, SetStateAction } from 'react';

import type { StoryPagePictureProps } from '@/components/StoryPage/StoryPage.types';
import type { TAG_NAMES } from '@/types/fairytale.types';

export interface StorySummaryProps {
  revertLayout: boolean;
  author?: string[];
  adaptationAuthor?: string[];
  translation?: string[];
  picturesAuthor: string[];
  bookCover: StoryPagePictureProps;
  bookCoverBlur?: string;
  coverDecor?: string;
  bookTitle: string;
  extendedSummary: string;
  synopsis: string;
  mainTags: [TAG_NAMES, TAG_NAMES];
  detailedTags: TAG_NAMES[];
  storyStatusHandler: Dispatch<SetStateAction<boolean>>;
  defaultColor: string;
}

export type StorySummary = (props: StorySummaryProps) => ReactElement;
