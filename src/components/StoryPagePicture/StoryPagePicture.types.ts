import type { ReactElement } from 'react';

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

export type StoryPagePicture = (props: StoryPagePictureProps) => ReactElement;
