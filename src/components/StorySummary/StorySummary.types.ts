import type { Dispatch, ReactElement, SetStateAction } from 'react';

import type { StoryPagePictureProps } from '@/components/StoryPagePicture';
import type { TagElementProps } from '@/components/TagElement';

export interface StorySummaryProps {
  revertLayout: boolean;
  author: string[];
  translation?: string[];
  picturesAuthor: string[];
  bookCover: StoryPagePictureProps;
  coverDecor?: string;
  bookTitle: string;
  bookSummary: string;
  mainTags: [TagElementProps, TagElementProps];
  detailedTags: TagElementProps[];
  storyStatusHandler: Dispatch<SetStateAction<boolean>>;
}

export type StorySummary = (props: StorySummaryProps) => ReactElement;
