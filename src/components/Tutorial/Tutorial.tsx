import { Close } from '@styled-icons/ionicons-outline/Close';
import React, { useState } from 'react';

import Button from '@/componentsButton';
import {
  COLOR_VARIANTS,
  FONT_VARIANTS,
  PURPOSE,
} from '@/componentsButton/Button.types';

import {
  BackgroundPicture,
  ButtonsPositioner,
  ExitButton,
  GreeterBody,
  GreeterWrapper,
  OptionIcons,
  SlideSwitch,
  TextBox,
  TipsWindow,
  TutorialBody,
} from './Tutorial.styled';
import type { Tutorial as TutorialType } from './Tutorial.types';
import { TUTORIAL_STEPS } from './Tutorial.types';

export const Tutorial: TutorialType = ({ closeTutorial }) => {
  const [currentStep, setCurrentStep] = useState<TUTORIAL_STEPS>(
    TUTORIAL_STEPS.INTRO,
  );

  const killTutorial = () => {
    closeTutorial(true);
  };

  return (
    <TutorialBody>
      {currentStep === TUTORIAL_STEPS.INTRO && (
        <GreeterWrapper>
          <GreeterBody>
            <p>
              Czy chcesz przejść krótki tutorial o tym, jak ogladać nasze bajki?
            </p>
            <ButtonsPositioner>
              <Button
                label={'Tak'}
                colorVariant={COLOR_VARIANTS.GREEN}
                fontVariant={FONT_VARIANTS.UPPERCASE}
                purpose={PURPOSE.FUNCTION_TRIGGER}
                onclickAction={() => setCurrentStep(TUTORIAL_STEPS.SLIDE)}
              />
              <Button
                label={'Nie'}
                colorVariant={COLOR_VARIANTS.WHITE}
                fontVariant={FONT_VARIANTS.UPPERCASE}
                purpose={PURPOSE.FUNCTION_TRIGGER}
                onclickAction={killTutorial}
              />
            </ButtonsPositioner>
          </GreeterBody>
        </GreeterWrapper>
      )}
      {currentStep !== TUTORIAL_STEPS.INTRO && (
        <>
          <BackgroundPicture isActive={currentStep === TUTORIAL_STEPS.SLIDE} />
          <TextBox isActive={currentStep === TUTORIAL_STEPS.TEXT_BOX} />
          <OptionIcons isActive={currentStep === TUTORIAL_STEPS.OPTIONS} />
          <SlideSwitch isActive={currentStep === TUTORIAL_STEPS.SLIDE_SWITCH} />
          <TipsWindow />
          <ExitButton>
            <span>Wyłącz Tutorial</span>
            <Close />
          </ExitButton>
        </>
      )}
    </TutorialBody>
  );
};
