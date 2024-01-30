import type { ReactElement } from 'react';

import type { ButtonProps } from '@/components/Button';
import type { TagListProps } from '@/components/TagList/TagList.types';
import type { Picture } from '@/fables_library/library.types';

export interface BookSummaryProps {
  revertLayout: boolean;
  author: string[];
  translation?: string[];
  picturesAuthor: string[];
  bookCover: Picture;
  coverDecor?: string;
  bookTitle: string;
  bookSummary: string;
  iconsBlock: TagListProps;
  ctaButton: ButtonProps;
}

export type BookSummary = (props: BookSummaryProps) => ReactElement;
