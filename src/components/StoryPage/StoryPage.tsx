import { ArrowExportRtl as ExitIcon } from '@styled-icons/fluentui-system-regular/ArrowExportRtl';
import { FullScreenMaximize as FullscreenUpIcon } from '@styled-icons/fluentui-system-regular/FullScreenMaximize';
import { FullScreenMinimize as FullscreenDownIcon } from '@styled-icons/fluentui-system-regular/FullScreenMinimize';
import { TextBoxSettings as TextBoxSettingsIcon } from '@styled-icons/fluentui-system-regular/TextBoxSettings';
import { useEffect, useState } from 'react';

import {
  FullscreenButton,
  PageBody,
  SettingsButton,
  TextBox,
  TextContent,
  Toolbox,
  ToolboxContainer,
} from '@/components/StoryPage/StoryPage.styled';
import { useSettingsContext } from '@/context/SettingsContext/SettingsContext.provider';

import { StoryPagePicture } from '../StoryPagePicture/StoryPagePicture';
import type { StoryPage as StoryPageType } from './StoryPage.types';

export const StoryPage: StoryPageType = ({
  layout,
  text,
  backgroundPicture,
  wildcardsData,
}) => {
  const [settingsVisibility, setSettingsVisibility] = useState<boolean>(false);
  const [fullscreen, setFullscreen] = useState<boolean>();
  const { settings } = useSettingsContext();

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setFullscreen(true);
      });
    } else {
      document.exitFullscreen().then(() => {
        setFullscreen(false);
      });
    }
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
    <PageBody>
      <StoryPagePicture {...backgroundPicture} />
      <TextContent layout={layout}>
        {text.map((paragraph, index) => (
          <TextBox
            key={index}
            background={settings.background}
            fontSize={settings.fontSize}
            fontColor={settings.fontColor}
            wildcard={wildcardsData && wildcardsData[index]}
          >
            {paragraph}
          </TextBox>
        ))}
      </TextContent>
      <FullscreenButton onClick={toggleFullscreen}>
        {fullscreen ? <FullscreenDownIcon /> : <FullscreenUpIcon />}
      </FullscreenButton>
      <SettingsButton
        onClick={() => setSettingsVisibility(!settingsVisibility)}
      >
        {settingsVisibility ? <ExitIcon /> : <TextBoxSettingsIcon />}
      </SettingsButton>
      {settingsVisibility && (
        <Toolbox>
          <ToolboxContainer />
        </Toolbox>
      )}
    </PageBody>
  );
};
