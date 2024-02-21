import type { ReactElement } from 'react';

import type { ButtonProps } from '@/components/Button';
import type { StoryPagePictureProps } from '@/components/StoryPagePicture';
import type { TagListProps } from '@/components/TagList/TagList.types';

export interface BookSummaryProps {
  revertLayout: boolean;
  author: string[];
  translation?: string[];
  picturesAuthor: string[];
  bookCover: StoryPagePictureProps;
  coverDecor?: string;
  bookTitle: string;
  bookSummary: string;
  iconsBlock: TagListProps;
  ctaButton: ButtonProps;
}

export type BookSummary = (props: BookSummaryProps) => ReactElement;
