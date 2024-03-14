import type { ImageProps } from 'next/image';
import type { ReactElement } from 'react';

import type { TAG_NAMES } from '@/fablesLibrary/library.types';

import type { ButtonProps } from '../Button';

export enum BOOKCARD_LAYOUT {
  IMAGE_LEFT,
  IMAGE_RIGHT,
}

export interface IconsBlock {
  mainTags: [TAG_NAMES, TAG_NAMES];
  extraTags: TAG_NAMES[];
}

export interface ContentBlockProps {
  author: string[];
  bookTitle: string;
  summary: string;
  synopsis: string;
  iconsBlock: IconsBlock;
  ctaButton: ButtonProps;
}

export interface StoryCardProps {
  bookCover: ImageProps;
  layout: BOOKCARD_LAYOUT;
  content: ContentBlockProps;
}

export type ContentBlock = (props: ContentBlockProps) => ReactElement;
export type StoryCard = (props: StoryCardProps) => ReactElement;
