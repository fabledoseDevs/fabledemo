import type { Dispatch, ReactElement, SetStateAction } from 'react';

import type { TAG_NAMES } from '@/types/fairytale.types';

export interface TagboxTT {
  tagboxTitle: string;
  tagboxSynopsis: string;
}

export interface Translation {
  en: TagboxTT;
  pl: TagboxTT;
}

export interface TagboxProps {
  exitFunction: Dispatch<SetStateAction<boolean>>;
  storyTitle: string;
  synopsis: string;
  mainTags: [TAG_NAMES, TAG_NAMES];
  extraTags: TAG_NAMES[];
}

export type UseTranslation = () => TagboxTT;
export type Tagbox = (props: TagboxProps) => ReactElement;
