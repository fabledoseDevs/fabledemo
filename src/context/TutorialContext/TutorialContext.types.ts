import type { Dispatch, SetStateAction } from 'react';

export type TutorialContext = {
  tutorialOff: boolean;
  setTutorialOff: Dispatch<SetStateAction<boolean>>;
};

export type UseTutorialContext = () => TutorialContext;
