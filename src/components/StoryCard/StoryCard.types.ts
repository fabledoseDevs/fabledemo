import type { ImageProps } from 'next/image';
import type { ReactElement } from 'react';

import type { ButtonProps } from '../Button';
import type { TagListProps } from '../TagList/TagList.types';

export enum BOOKCARD_LAYOUT {
  IMAGE_LEFT,
  IMAGE_RIGHT,
}

export interface IconsBlock {
  main: string[];
  details: string[];
}

export interface ContentBlockProps {
  author: string[];
  bookTitle: string;
  bookExcerpt: string;
  iconsBlock: TagListProps;
  ctaButton: ButtonProps;
}

export interface StoryCardProps {
  bookCover: ImageProps;
  layout: BOOKCARD_LAYOUT;
  content: ContentBlockProps;
}

export type ContentBlock = (props: ContentBlockProps) => ReactElement;
export type StoryCard = (props: StoryCardProps) => ReactElement;
