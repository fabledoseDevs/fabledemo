import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { ArrowExportRtl as ExitIcon } from '@styled-icons/fluentui-system-regular/ArrowExportRtl';
import { FullScreenMaximize as FullscreenUpIcon } from '@styled-icons/fluentui-system-regular/FullScreenMaximize';
import { FullScreenMinimize as FullscreenDownIcon } from '@styled-icons/fluentui-system-regular/FullScreenMinimize';
import { Home as HomeIcon } from '@styled-icons/fluentui-system-regular/Home';
import { TextBoxSettings as TextBoxSettingsIcon } from '@styled-icons/fluentui-system-regular/TextBoxSettings';
import { useEffect, useRef, useState } from 'react';
import {
  A11y,
  EffectFade,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from 'swiper/modules';

import Exitbox from '@/components/Exitbox';
import {
  FullscreenButton,
  ReturnToMainPage,
  SettingsButton,
  Slide,
  Slider,
} from '@/components/Story/Story.styled';
import StoryPage from '@/components/StoryPage';
import Toolbox from '@/components/Toolbox';

import type { Story as StoryType } from './Story.types';

export const Story: StoryType = ({ storyContent }) => {
  const swiperRef = useRef(null);
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

  return (
    <>
      <Slider
        ref={swiperRef}
        modules={[
          EffectFade,
          Navigation,
          Pagination,
          A11y,
          Keyboard,
          Mousewheel,
        ]}
        effect={'fade'}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        keyboard={{
          enabled: true,
          pageUpDown: true,
        }}
        mousewheel={{
          sensitivity: 2,
          invert: false,
        }}
      >
        {storyContent.map(singlePage => (
          <Slide key={singlePage.slideId} className="TUTAJ">
            <StoryPage
              layout={singlePage.layout}
              backgroundPicture={singlePage.picture}
              text={singlePage.paragraphs}
            />
          </Slide>
        ))}
      </Slider>
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
