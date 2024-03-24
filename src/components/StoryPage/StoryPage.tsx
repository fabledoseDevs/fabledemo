import {
  PageBody,
  TextBox,
  TextContent,
} from '@/components/StoryPage/StoryPage.styled';
import { StoryPagePicture } from '@/components/StoryPagePicture';
import { useSettingsContext } from '@/context/SettingsContext/SettingsContext.provider';

import type { StoryPage as StoryPageType } from './StoryPage.types';

export const StoryPage: StoryPageType = ({
  layout,
  text,
  backgroundPicture,
  wildcardsData,
}) => {
  const { settings } = useSettingsContext();

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
    </PageBody>
  );
};
