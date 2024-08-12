import { track } from '@vercel/analytics';
import { useState } from 'react';

import type { UseTutorial as UseTutorialType } from './Tutorial.types';
import { TUTORIAL_STEPS } from './Tutorial.types';

export const useTutorial: UseTutorialType = closeTutorial => {
  const [currentStep, setCurrentStep] = useState<TUTORIAL_STEPS>(
    TUTORIAL_STEPS.INTRO,
  );

  const killTutorial = () => {
    track('Tutorial OFF');
    closeTutorial(true);
  };

  const beginTutorial = () => {
    track('Tutorial ON');
    setCurrentStep(TUTORIAL_STEPS.SLIDE);
  };

  const nextTip = () => {
    switch (currentStep) {
      case TUTORIAL_STEPS.INTRO:
        setCurrentStep(TUTORIAL_STEPS.SLIDE);
        break;
      case TUTORIAL_STEPS.SLIDE:
        setCurrentStep(TUTORIAL_STEPS.TEXT_BOX_BASIC);
        break;
      case TUTORIAL_STEPS.TEXT_BOX_BASIC:
        setCurrentStep(TUTORIAL_STEPS.TEXT_BOX_ADVANCED);
        break;
      case TUTORIAL_STEPS.TEXT_BOX_ADVANCED:
        setCurrentStep(TUTORIAL_STEPS.OPTIONS);
        break;
      case TUTORIAL_STEPS.OPTIONS:
        setCurrentStep(TUTORIAL_STEPS.SLIDE_SWITCH);
        break;
      case TUTORIAL_STEPS.SLIDE_SWITCH:
        setCurrentStep(TUTORIAL_STEPS.OUTRO);
        break;
      case TUTORIAL_STEPS.OUTRO:
        killTutorial();
        break;
    }
  };

  const prevTip = () => {
    switch (currentStep) {
      case TUTORIAL_STEPS.OUTRO:
        setCurrentStep(TUTORIAL_STEPS.SLIDE_SWITCH);
        break;
      case TUTORIAL_STEPS.SLIDE_SWITCH:
        setCurrentStep(TUTORIAL_STEPS.OPTIONS);
        break;
      case TUTORIAL_STEPS.OPTIONS:
        setCurrentStep(TUTORIAL_STEPS.TEXT_BOX_ADVANCED);
        break;
      case TUTORIAL_STEPS.TEXT_BOX_ADVANCED:
        setCurrentStep(TUTORIAL_STEPS.TEXT_BOX_BASIC);
        break;
      case TUTORIAL_STEPS.TEXT_BOX_BASIC:
        setCurrentStep(TUTORIAL_STEPS.SLIDE);
        break;
      case TUTORIAL_STEPS.SLIDE:
        setCurrentStep(TUTORIAL_STEPS.INTRO);
        break;
    }
  };

  return {
    currentStep,
    setCurrentStep,
    nextTip,
    prevTip,
    beginTutorial,
    killTutorial,
  };
};
