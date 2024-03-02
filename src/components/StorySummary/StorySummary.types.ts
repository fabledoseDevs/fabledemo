import type { Dispatch, ReactElement, SetStateAction } from 'react';

import type { StoryPagePictureProps } from '@/components/StoryPagePicture';
import type { TAG_NAMES } from '@/fables_library/library.types';

export interface StorySummaryProps {
  revertLayout: boolean;
  author: string[];
  translation?: string[];
  picturesAuthor: string[];
  bookCover: StoryPagePictureProps;
  coverDecor?: string;
  bookTitle: string;
  extendedSummary: string;
  synopsis: string;
  mainTags: [TAG_NAMES, TAG_NAMES];
  detailedTags: TAG_NAMES[];
  storyStatusHandler: Dispatch<SetStateAction<boolean>>;
}

export type StorySummary = (props: StorySummaryProps) => ReactElement;
