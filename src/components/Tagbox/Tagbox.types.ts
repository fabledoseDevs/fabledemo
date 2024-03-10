import type { Dispatch, ReactElement, SetStateAction } from 'react';

import type { TAG_NAMES } from '@/fables_library/library.types';

export interface TagboxProps {
  exitFunction: Dispatch<SetStateAction<boolean>>;
  storyTitle: string;
  synopsis: string;
  mainTags: [TAG_NAMES, TAG_NAMES];
  extraTags: TAG_NAMES[];
}

export type Tagbox = (props: TagboxProps) => ReactElement;
