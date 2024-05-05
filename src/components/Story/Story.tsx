import { ArrowExportRtl as ExitIcon } from '@styled-icons/fluentui-system-regular/ArrowExportRtl';
import { FullScreenMaximize as FullscreenUpIcon } from '@styled-icons/fluentui-system-regular/FullScreenMaximize';
import { FullScreenMinimize as FullscreenDownIcon } from '@styled-icons/fluentui-system-regular/FullScreenMinimize';
import { Home as HomeIcon } from '@styled-icons/fluentui-system-regular/Home';
import { TextBoxSettings as TextBoxSettingsIcon } from '@styled-icons/fluentui-system-regular/TextBoxSettings';
import { CheveronLeft, CheveronRight } from '@styled-icons/zondicons';
import { useSwipeable } from 'react-swipeable';

import Exitbox from '@/components/Exitbox';
import { useStory } from '@/components/Story/Story.hook';
import {
  FullscreenButton,
  Pagination,
  ReturnToMainPage,
  SettingsButton,
  Slider,
  SliderButton,
  SliderNavigation,
} from '@/components/Story/Story.styled';
import StoryPage from '@/components/StoryPage';
import Toolbox from '@/components/Toolbox';

import type { Story as StoryType } from './Story.types';

export const Story: StoryType = ({ storyContent, defaultColor }) => {
  const {
    currentSlide,
    nextSlide,
    setCurrentSlide,
    settingsVisibility,
    setSettingsVisibility,
    exitVisibility,
    setExitVisibility,
    fullscreen,
    toggleFullscreen,
    switchSlideBack,
    switchSlideForward,
  } = useStory(storyContent);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: switchSlideForward,
    onSwipedRight: switchSlideBack,
  });

  return (
    <>
      <Slider {...swipeHandlers} defaultColor={defaultColor}>
        <StoryPage
          key={storyContent[currentSlide].picture.backup.src}
          id={storyContent[currentSlide].slideId}
          layout={storyContent[currentSlide].layout}
          backgroundPicture={storyContent[currentSlide].picture}
          staticImage={storyContent[nextSlide].picture.backup.src}
          autoplayAnimation={true}
          text={storyContent[currentSlide].paragraphs}
        />
      </Slider>

      <SliderNavigation>
        <SliderButton disabled={currentSlide === 0} onClick={switchSlideBack}>
          <CheveronLeft />
        </SliderButton>
        <Pagination>
          {storyContent.map((slide, idx) => (
            <button
              className={idx === currentSlide ? 'active' : ''}
              key={idx}
              onClick={() => {
                setCurrentSlide(idx);
              }}
            />
          ))}
        </Pagination>
        <SliderButton
          disabled={currentSlide === storyContent.length - 1}
          onClick={switchSlideForward}
        >
          <CheveronRight />
        </SliderButton>
      </SliderNavigation>

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
