import type { ReactElement } from 'react';

import type { LAYOUT_VARIANTS } from '@/fablesLibrary/library.types';

export interface AvailableSizes {
  1080?: string; //FHD
  720: string; //HD
  480?: string; //SD
  360?: string; //LQ
}

export interface StoryPagePictureProps {
  description: string;
  picSizes: AvailableSizes;
}

export interface StoryPageProps {
  id: number;
  layout: LAYOUT_VARIANTS;
  text: string[];
  backgroundPicture: StoryPagePictureProps;
  staticImage: string;
  autoplayAnimation: boolean;
}

export type StoryPage = (props: StoryPageProps) => ReactElement;
