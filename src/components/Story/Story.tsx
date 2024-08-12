import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/virtual';

import { ArrowCircleLeft } from '@styled-icons/fluentui-system-regular/ArrowCircleLeft';
import { ArrowCircleRight } from '@styled-icons/fluentui-system-regular/ArrowCircleRight';
import { ArrowExportRtl as ExitIcon } from '@styled-icons/fluentui-system-regular/ArrowExportRtl';
import { FullScreenMaximize as FullscreenUpIcon } from '@styled-icons/fluentui-system-regular/FullScreenMaximize';
import { FullScreenMinimize as FullscreenDownIcon } from '@styled-icons/fluentui-system-regular/FullScreenMinimize';
import { Home as HomeIcon } from '@styled-icons/fluentui-system-regular/Home';
import { QuestionCircle as HelpIcon } from '@styled-icons/fluentui-system-regular/QuestionCircle';
import { TextBoxSettings as TextBoxSettingsIcon } from '@styled-icons/fluentui-system-regular/TextBoxSettings';
import { track } from '@vercel/analytics';
import { useRef } from 'react';
import {
  A11y,
  EffectFade,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Virtual,
} from 'swiper/modules';

import Exitbox from '@/components/Exitbox';
import StoryPage from '@/components/StoryPage';
import Toolbox from '@/components/Toolbox';
import Tutorial from '@/components/Tutorial';
import { useTutorialContext } from '@/context/TutorialContext/TutorialContext.provider';

import { useStory } from './Story.hook';
import {
  FullscreenButton,
  HelpButton,
  NavElements,
  NavigationButton,
  ReturnToMainPage,
  SettingsButton,
  Slide,
  Stage,
} from './Story.styled';
import type { Story as StoryType } from './Story.types';

export const Story: StoryType = ({
  storyContent,
  defaultColor,
  storyTitle,
}) => {
  const swiperRef = useRef(null);

  const {
    settingsVisibility,
    setSettingsVisibility,
    exitVisibility,
    setExitVisibility,
    fullscreen,
    toggleFullscreen,
  } = useStory();

  const { tutorialOff, setTutorialOff } = useTutorialContext();

  const fullscreenSwitch = () => {
    {
      fullscreen ? track('Fullscreen OFF') : track('Fullscreen ON');
    }
    toggleFullscreen();
  };

  const settingsSwitch = () => {
    {
      settingsVisibility
        ? track('Settings screen OFF')
        : track('Settings screen ON');
    }
    setSettingsVisibility(prevState => !prevState);
  };

  return (
    <>
      {!tutorialOff && <Tutorial closeTutorial={setTutorialOff} />}
      <Stage
        defaultColor={defaultColor}
        ref={swiperRef}
        modules={[
          EffectFade,
          Navigation,
          Pagination,
          A11y,
          Keyboard,
          Mousewheel,
          Virtual,
        ]}
        effect={'fade'}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          type: 'fraction',
          clickable: true,
        }}
        keyboard={{
          enabled: true,
          pageUpDown: true,
        }}
        mousewheel={{
          sensitivity: 2,
          invert: false,
        }}
        virtual={{
          enabled: true,
          addSlidesBefore: 1,
          addSlidesAfter: 1,
        }}
      >
        {storyContent.map((page, index) => (
          <Slide
            key={`${storyTitle} page ${page.slideId}`}
            virtualIndex={index}
            defaultColor={defaultColor}
          >
            <StoryPage
              storyTitle={storyTitle}
              id={page.slideId}
              layout={page.layout}
              backgroundPicture={page.picture}
              staticImage={page.picture.backup.src}
              autoplayAnimation={true}
              text={page.paragraphs}
            />
          </Slide>
        ))}
      </Stage>

      <NavElements>
        <NavigationButton
          className="swiper-button-prev"
          onClick={() => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const currentSlideIndex = swiperRef.current?.swiper?.activeIndex;
            track(`Slide back. New slide number ${currentSlideIndex + 1}.`);
          }}
        >
          <ArrowCircleLeft />
        </NavigationButton>
        <NavigationButton
          className="swiper-button-next"
          onClick={() => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const currentSlideIndex = swiperRef.current?.swiper?.activeIndex;
            track(`Slide forward. New slide number ${currentSlideIndex + 1}.`);
          }}
        >
          <ArrowCircleRight />
        </NavigationButton>
      </NavElements>

      {settingsVisibility && <Toolbox exitFunction={settingsSwitch} />}
      {exitVisibility && <Exitbox exitFunction={setExitVisibility} />}
      <SettingsButton onClick={settingsSwitch}>
        {settingsVisibility ? <ExitIcon /> : <TextBoxSettingsIcon />}
      </SettingsButton>
      <FullscreenButton onClick={fullscreenSwitch}>
        {fullscreen ? <FullscreenDownIcon /> : <FullscreenUpIcon />}
      </FullscreenButton>
      <HelpButton onClick={() => setTutorialOff(false)}>
        <HelpIcon />
      </HelpButton>
      <ReturnToMainPage
        onClick={() => setExitVisibility(prevState => !prevState)}
      >
        <HomeIcon />
      </ReturnToMainPage>
    </>
  );
};
