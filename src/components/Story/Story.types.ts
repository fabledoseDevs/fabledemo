import type { Dispatch, ReactElement, SetStateAction } from 'react';
import type React from 'react';

import type { Slide } from '@/fablesLibrary/library.types';

export interface StoryProps {
  storyContent: Slide[];
  defaultColor: string;
}

export interface Hook {
  currentSlide: number;
  backgroundSlide: number;
  switchToInput: () => void;
  inputShown: boolean;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  switchToSpan: () => void;
  setCurrentSlide: (idx: number) => void;
  settingsVisibility: boolean;
  setSettingsVisibility: Dispatch<SetStateAction<boolean>>;
  exitVisibility: boolean;
  setExitVisibility: Dispatch<SetStateAction<boolean>>;
  fullscreen: boolean | undefined;
  toggleFullscreen: () => void;
  switchSlideBack: () => void;
  switchSlideForward: () => void;
}

export type UseStory = (storyContent: Slide[]) => Hook;
export type Story = (props: StoryProps) => ReactElement;
