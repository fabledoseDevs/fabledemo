import type { ReactElement } from 'react';

import type { Slide } from '@/fablesLibrary/library.types';

export interface StoryProps {
  storyContent: Slide[];
  defaultColor: string;
}

export type Story = (props: StoryProps) => ReactElement;
