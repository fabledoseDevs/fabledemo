import type { ReactElement } from 'react';

export interface AvailableSizes {
  1080?: string; //FHD
  720: string; //HD
  480?: string; //SD
  360?: string; //LQ
}

export interface SlidePictureProps {
  description: string;
  picSizes: AvailableSizes;
}

export type PictureSelector = (props: AvailableSizes) => string;
export type SlidePicture = (props: SlidePictureProps) => ReactElement;
