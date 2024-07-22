import type { ReactElement } from 'react';

import type { TAG_NAMES } from '@/types/fairytale.types';

export interface TagListProps {
  storyTitle: string;
  synopsis: string;
  mainTags: [TAG_NAMES, TAG_NAMES];
  extraTags: TAG_NAMES[];
}

export type TagList = (props: TagListProps) => ReactElement;
