import type { ReactElement } from 'react';

import type { TAG_NAMES } from '@/fablesLibrary/library.types';

export interface TagElementProps {
  tagName: TAG_NAMES;
  extendedTag?: boolean;
}

export interface TagData {
  title: string;
  description: string;
  icon: string;
}

export type TagDataSelector = (tagName: TAG_NAMES) => TagData;
export type TagSelector = (tagName: TAG_NAMES) => ReactElement;
export type TagElement = (props: TagElementProps) => ReactElement;
