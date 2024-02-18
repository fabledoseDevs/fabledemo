import type { ReactElement } from 'react';

import type { Slide } from '@/fables_library/library.types';

export interface StoryProps {
  storyContent: Slide[];
}

export type Story = (props: StoryProps) => ReactElement;
