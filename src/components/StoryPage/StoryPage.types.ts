import type { StaticImageData } from 'next/image';
import type { ReactElement } from 'react';

import type { LAYOUT_VARIANTS } from '@/fablesLibrary/library.types';

import type { StoryPagePictureProps } from '../StoryPagePicture';

export interface StoryPageProps {
  id: number;
  layout: LAYOUT_VARIANTS;
  text: string[];
  backgroundPicture: StoryPagePictureProps;
  backupPicture: StaticImageData;
}

export type StoryPage = (props: StoryPageProps) => ReactElement;
