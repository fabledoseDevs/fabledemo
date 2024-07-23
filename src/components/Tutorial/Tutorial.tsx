import { ArrowCircleLeft } from '@styled-icons/fluentui-system-regular/ArrowCircleLeft';
import { ArrowCircleRight } from '@styled-icons/fluentui-system-regular/ArrowCircleRight';
import { FullScreenMaximize } from '@styled-icons/fluentui-system-regular/FullScreenMaximize';
import { Home as HomeIcon } from '@styled-icons/fluentui-system-regular/Home';
import { TextBoxSettings } from '@styled-icons/fluentui-system-regular/TextBoxSettings';
import { Close } from '@styled-icons/ionicons-outline/Close';

import Button from '@/components/Button';
import {
  COLOR_VARIANTS,
  FONT_VARIANTS,
  PURPOSE,
} from '@/components/Button/Button.types';
import { TutorialTranslations, useTranslation } from '@/translations';

import { useTutorial } from './Tutorial.hook';
import {
  BackgroundPicture,
  ButtonsPositioner,
  ExitButton,
  GreeterBody,
  GreeterWrapper,
  MainTutorial,
  OptionsActiveFrame,
  SlideSwitchActiveFrame,
  TextBox,
  TextBoxActiveFrame,
  TipsSwitch,
  TipsWindow,
  TutorialBody,
} from './Tutorial.styled';
import type { Tutorial as TutorialType } from './Tutorial.types';
import { TUTORIAL_STEPS } from './Tutorial.types';

export const Tutorial: TutorialType = ({ closeTutorial }) => {
  const { currentStep, setCurrentStep, nextTip, prevTip, killTutorial } =
    useTutorial(closeTutorial);
  const {
    tutorialWelcome,
    yes,
    no,
    previewText,
    stepSlide,
    stepBoxBasic,
    stepBoxAdvanced,
    stepOptions,
    stepSlideSwitch,
    stepOutro,
    killTutorial: killTutorialLabel,
  } = useTranslation(TutorialTranslations);

  return (
    <TutorialBody>
      {currentStep === TUTORIAL_STEPS.INTRO && (
        <GreeterWrapper>
          <GreeterBody>
            <p>{tutorialWelcome}</p>
            <ButtonsPositioner>
              <Button
                label={yes}
                colorVariant={COLOR_VARIANTS.GREEN}
                fontVariant={FONT_VARIANTS.UPPERCASE}
                purpose={PURPOSE.FUNCTION_TRIGGER}
                onclickAction={() => setCurrentStep(TUTORIAL_STEPS.SLIDE)}
              />
              <Button
                label={no}
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
        <MainTutorial>
          <BackgroundPicture isActive={currentStep === TUTORIAL_STEPS.SLIDE}>
            <TextBoxActiveFrame
              isActive={
                currentStep === TUTORIAL_STEPS.TEXT_BOX_BASIC ||
                currentStep === TUTORIAL_STEPS.TEXT_BOX_ADVANCED
              }
            >
              <TextBox
                extraBackground={
                  currentStep === TUTORIAL_STEPS.TEXT_BOX_ADVANCED
                }
              >
                <p>{previewText}</p>
              </TextBox>
            </TextBoxActiveFrame>
            <OptionsActiveFrame
              isActive={currentStep === TUTORIAL_STEPS.OPTIONS}
            >
              <HomeIcon />
              <TextBoxSettings />
              <FullScreenMaximize />
            </OptionsActiveFrame>
            <SlideSwitchActiveFrame
              isActive={currentStep === TUTORIAL_STEPS.SLIDE_SWITCH}
            >
              <ArrowCircleLeft />
              <p>3/12</p>
              <ArrowCircleRight />
            </SlideSwitchActiveFrame>
          </BackgroundPicture>

          <TipsWindow>
            <TipsSwitch
              disabled={currentStep === TUTORIAL_STEPS.SLIDE}
              onClick={prevTip}
            >
              <ArrowCircleLeft />
            </TipsSwitch>
            {currentStep === TUTORIAL_STEPS.SLIDE && <p>{stepSlide}</p>}
            {currentStep === TUTORIAL_STEPS.TEXT_BOX_BASIC && (
              <p>{stepBoxBasic}</p>
            )}
            {currentStep === TUTORIAL_STEPS.TEXT_BOX_ADVANCED && (
              <p>{stepBoxAdvanced}</p>
            )}
            {currentStep === TUTORIAL_STEPS.OPTIONS && (
              <p>
                {stepOptions[0]}
                <HomeIcon />
                {stepOptions[1]}
                <TextBoxSettings />
                {stepOptions[2]}
                <FullScreenMaximize />
                {stepOptions[3]}
              </p>
            )}
            {currentStep === TUTORIAL_STEPS.SLIDE_SWITCH && (
              <p>{stepSlideSwitch}</p>
            )}
            {currentStep === TUTORIAL_STEPS.OUTRO && <p>{stepOutro}</p>}
            <TipsSwitch onClick={nextTip}>
              <ArrowCircleRight />
            </TipsSwitch>
          </TipsWindow>
          <ExitButton onClick={killTutorial}>
            <span>{killTutorialLabel}</span>
            <Close />
          </ExitButton>
        </MainTutorial>
      )}
    </TutorialBody>
  );
};
