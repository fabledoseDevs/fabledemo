import type { Dispatch, ReactElement, SetStateAction } from 'react';

import type { Slide } from '@/types/fairytale.types';

export interface StoryProps {
  storyContent: Slide[];
  defaultColor: string;
}

export interface Hook {
  settingsVisibility: boolean;
  setSettingsVisibility: Dispatch<SetStateAction<boolean>>;
  exitVisibility: boolean;
  setExitVisibility: Dispatch<SetStateAction<boolean>>;
  fullscreen: boolean | undefined;
  toggleFullscreen: () => void;
}

export type UseStory = () => Hook;
export type Story = (props: StoryProps) => ReactElement;
