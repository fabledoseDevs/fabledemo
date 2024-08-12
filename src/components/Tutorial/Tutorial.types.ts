import type { Dispatch, ReactElement, SetStateAction } from 'react';

export enum TUTORIAL_STEPS {
  INTRO,
  SLIDE,
  TEXT_BOX_BASIC,
  TEXT_BOX_ADVANCED,
  OPTIONS,
  SLIDE_SWITCH,
  OUTRO,
}

export interface TutorialProps {
  closeTutorial: Dispatch<SetStateAction<boolean>>;
}

export interface UseTutorialReturnValues {
  currentStep: TUTORIAL_STEPS;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  nextTip: () => void;
  prevTip: () => void;
  beginTutorial: () => void;
  killTutorial: () => void;
}

export type Tutorial = (props: TutorialProps) => ReactElement;
export type UseTutorial = (
  closeTutorial: (bool: boolean) => void,
) => UseTutorialReturnValues;
