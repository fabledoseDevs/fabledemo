import { ArrowCircleLeft } from '@styled-icons/fluentui-system-regular/ArrowCircleLeft';
import { ArrowCircleRight } from '@styled-icons/fluentui-system-regular/ArrowCircleRight';
import { ArrowExportRtl as ExitIcon } from '@styled-icons/fluentui-system-regular/ArrowExportRtl';
import { FullScreenMaximize as FullscreenUpIcon } from '@styled-icons/fluentui-system-regular/FullScreenMaximize';
import { FullScreenMinimize as FullscreenDownIcon } from '@styled-icons/fluentui-system-regular/FullScreenMinimize';
import { Home as HomeIcon } from '@styled-icons/fluentui-system-regular/Home';
import { TextBoxSettings as TextBoxSettingsIcon } from '@styled-icons/fluentui-system-regular/TextBoxSettings';
import { useSwipeable } from 'react-swipeable';

import Exitbox from '@/components/Exitbox';
import { useStory } from '@/components/Story/Story.hook';
import {
  FullscreenButton,
  Navigation,
  NavigationButton,
  Pagination,
  ReturnToMainPage,
  SettingsButton,
  Stage,
} from '@/components/Story/Story.styled';
import StoryPage from '@/components/StoryPage';
import Toolbox from '@/components/Toolbox';

import type { Story as StoryType } from './Story.types';

export const Story: StoryType = ({ storyContent, defaultColor }) => {
  const {
    currentSlide,
    backgroundSlide,
    switchToInput,
    inputShown,
    handleInput,
    switchToSpan,
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
      <Stage {...swipeHandlers} defaultColor={defaultColor}>
        <StoryPage
          key={storyContent[currentSlide].picture.backup.src}
          id={storyContent[currentSlide].slideId}
          layout={storyContent[currentSlide].layout}
          bufferedPicture={
            storyContent[
              currentSlide !== storyContent.length - 1 ? currentSlide + 1 : 0
            ].picture
          }
          backgroundPicture={storyContent[currentSlide].picture}
          staticImage={storyContent[backgroundSlide].picture.backup.src}
          autoplayAnimation={true}
          text={storyContent[currentSlide].paragraphs}
        />
      </Stage>

      <Navigation>
        <NavigationButton
          disabled={currentSlide === 0}
          onClick={switchSlideBack}
        >
          <ArrowCircleLeft />
        </NavigationButton>
        <Pagination onClick={switchToInput}>
          {inputShown ? (
            <input
              type="number"
              value={currentSlide + 1}
              onChange={handleInput}
              onBlur={switchToSpan}
              autoFocus
            />
          ) : (
            <span>
              {currentSlide + 1}/{storyContent.length}
            </span>
          )}
        </Pagination>
        <NavigationButton
          disabled={currentSlide === storyContent.length - 1}
          onClick={switchSlideForward}
        >
          <ArrowCircleRight />
        </NavigationButton>
      </Navigation>

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
