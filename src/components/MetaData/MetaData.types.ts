import type { ImageProps } from 'next/image';
import type { ReactElement } from 'react';

export interface MetaDataProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: Pick<ImageProps, 'src' | 'width' | 'height'>;
}

export type MetaData = (props: MetaDataProps) => ReactElement;
