import { ArrowExportRtl as ExitIcon } from '@styled-icons/fluentui-system-regular/ArrowExportRtl';
import { FullScreenMaximize as FullscreenUpIcon } from '@styled-icons/fluentui-system-regular/FullScreenMaximize';
import { FullScreenMinimize as FullscreenDownIcon } from '@styled-icons/fluentui-system-regular/FullScreenMinimize';
import { Home as HomeIcon } from '@styled-icons/fluentui-system-regular/Home';
import { TextBoxSettings as TextBoxSettingsIcon } from '@styled-icons/fluentui-system-regular/TextBoxSettings';
import { CheveronLeft } from '@styled-icons/zondicons';
import { CheveronRight } from '@styled-icons/zondicons';
import { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import Exitbox from '@/components/Exitbox';
import {
  ActiveSlide,
  FullscreenButton,
  Pagination,
  ReturnToMainPage,
  SettingsButton,
  SliderButton,
  SliderNavigation,
} from '@/components/Story/Story.styled';
import StoryPage from '@/components/StoryPage';
import Toolbox from '@/components/Toolbox';

import type { Story as StoryType } from './Story.types';

export const Story: StoryType = ({ storyContent, defaultColor }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [settingsVisibility, setSettingsVisibility] = useState<boolean>(false);
  const [exitVisibility, setExitVisibility] = useState<boolean>(false);
  const [fullscreen, setFullscreen] = useState<boolean>();

  const toggleFullscreen = () => {
    const requestFullscreen = document.documentElement
      .requestFullscreen()
      .then(() => {
        setFullscreen(true);
      });

    const exitFullscreen =
      fullscreen &&
      document.exitFullscreen().then(() => {
        setFullscreen(false);
      });

    return document.fullscreenElement ? exitFullscreen : requestFullscreen;
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const previousSlide = () => {
    if (currentSlide === 0) {
      return;
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  const nextSlide = () => {
    if (currentSlide === storyContent.length - 1) {
      return;
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: previousSlide,
  });

  const handleKeyDown = (event: {
    preventDefault: () => void;
    key: string;
  }) => {
    event.preventDefault();
    switch (event.key) {
      case 'ArrowRight':
        nextSlide();
        break;
      case 'ArrowLeft':
        previousSlide();
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown, { passive: true });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide]);

  return (
    <>
      <ActiveSlide {...swipeHandlers} defaultColor={defaultColor}>
        <StoryPage
          id={storyContent[currentSlide].slideId}
          layout={storyContent[currentSlide].layout}
          backgroundPicture={storyContent[currentSlide].picture}
          backupPicture={storyContent[currentSlide].picture.backup}
          text={storyContent[currentSlide].paragraphs}
        />
      </ActiveSlide>

      <SliderNavigation>
        <SliderButton disabled={currentSlide === 0} onClick={previousSlide}>
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
          onClick={nextSlide}
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
