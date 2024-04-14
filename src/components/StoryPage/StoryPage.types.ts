import type { ReactElement } from 'react';

import type { LAYOUT_VARIANTS } from '@/fablesLibrary/library.types';

import type { StoryPagePictureProps } from '../StoryPagePicture';

export interface StoryPageProps {
  layout: LAYOUT_VARIANTS;
  text: string[];
  backgroundPicture: StoryPagePictureProps;
}

export type StoryPage = (props: StoryPageProps) => ReactElement;
