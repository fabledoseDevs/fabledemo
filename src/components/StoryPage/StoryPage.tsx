import { useScreenContext } from '@/context/ScreenContext/ScreenContext.provider';
import { useSettingsContext } from '@/context/SettingsContext/SettingsContext.provider';

import {
  AnimatedPicture,
  PageBody,
  TextBox,
  TextContent,
} from './StoryPage.styled';
import type { StoryPage as StoryPageType } from './StoryPage.types';
export const StoryPage: StoryPageType = ({
  id,
  layout,
  text,
  backgroundPicture,
}) => {
  const { settings } = useSettingsContext();
  const { screenData } = useScreenContext();

  const imageUrl =
    screenData.screenWidth >= 1920
      ? backgroundPicture.picSizes['1080']
      : backgroundPicture.picSizes['720'];

  return (
    <PageBody>
      <AnimatedPicture
        url={imageUrl}
        loop={true}
        controls={false}
        muted={true}
        playing={true}
        width={'100dvw'}
        height={'100dvh'}
        key={imageUrl}
      />
      <TextContent layout={layout} key={id}>
        <TextBox
          className={'textBox'}
          textboxTheme={settings.theme}
          fontSize={settings.fontSize}
        >
          {text.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </TextBox>
      </TextContent>
    </PageBody>
  );
};
