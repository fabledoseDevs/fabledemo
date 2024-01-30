import type { ImageProps } from 'next/image';
import type { ReactElement } from 'react';

export interface TagElementProps {
  tagName: string;
  tagDescription: string;
  icon: ImageProps;
}

export type TagElement = (props: TagElementProps) => ReactElement;
