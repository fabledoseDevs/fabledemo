import { useEffect, useState } from 'react';

import type { UseStory as UseStoryType } from './Story.types';

export const useStory: UseStoryType = () => {
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

  return {
    settingsVisibility,
    setSettingsVisibility,
    exitVisibility,
    setExitVisibility,
    fullscreen,
    toggleFullscreen,
  };
};
