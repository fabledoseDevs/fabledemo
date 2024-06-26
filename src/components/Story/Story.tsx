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
import { TextBoxSettings as TextBoxSettingsIcon } from '@styled-icons/fluentui-system-regular/TextBoxSettings';
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
import {
  FullscreenButton,
  NavElements,
  NavigationButton,
  ReturnToMainPage,
  SettingsButton,
  Slide,
  Stage,
} from '@/components/Story/Story.styled';
import StoryPage from '@/components/StoryPage';
import Toolbox from '@/components/Toolbox';

import { useStory } from './Story.hook';
import type { Story as StoryType } from './Story.types';

export const Story: StoryType = ({ storyContent, defaultColor }) => {
  const swiperRef = useRef(null);

  const {
    settingsVisibility,
    setSettingsVisibility,
    exitVisibility,
    setExitVisibility,
    fullscreen,
    toggleFullscreen,
  } = useStory();

  return (
    <>
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
            key={page.picture.backup.src}
            virtualIndex={index}
            defaultColor={defaultColor}
          >
            <StoryPage
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
        <NavigationButton className="swiper-button-prev">
          <ArrowCircleLeft />
        </NavigationButton>
        <NavigationButton className="swiper-button-next">
          <ArrowCircleRight />
        </NavigationButton>
      </NavElements>

      {settingsVisibility && <Toolbox exitFunction={setSettingsVisibility} />}
      {exitVisibility && <Exitbox exitFunction={setExitVisibility} />}
      <SettingsButton
        onClick={() => setSettingsVisibility(prevState => !prevState)}
      >
        {settingsVisibility ? <ExitIcon /> : <TextBoxSettingsIcon />}
      </SettingsButton>
      <FullscreenButton onClick={toggleFullscreen}>
        {fullscreen ? <FullscreenDownIcon /> : <FullscreenUpIcon />}
      </FullscreenButton>
      <ReturnToMainPage
        onClick={() => setExitVisibility(prevState => !prevState)}
      >
        <HomeIcon />
      </ReturnToMainPage>
    </>
  );
};
