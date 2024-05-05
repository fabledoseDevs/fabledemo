import type { ReactElement } from 'react';

import type { LAYOUT_VARIANTS } from '@/fablesLibrary/library.types';

import type { StoryPagePictureProps } from '../StoryPagePicture';

export interface StoryPageProps {
  id: number;
  layout: LAYOUT_VARIANTS;
  text: string[];
  backgroundPicture: StoryPagePictureProps;
  staticImage: string;
  autoplayAnimation: boolean;
}

export type StoryPage = (props: StoryPageProps) => ReactElement;
