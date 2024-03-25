import { StoryPagePicture } from '@/components/StoryPagePicture';
import { useSettingsContext } from '@/context/SettingsContext/SettingsContext.provider';

import { PageBody, TextBox, TextContent } from './StoryPage.styled';
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
            textboxTheme={settings.theme}
            fontSize={settings.fontSize}
            wildcard={wildcardsData && wildcardsData[index]}
          >
            {paragraph}
          </TextBox>
        ))}
      </TextContent>
    </PageBody>
  );
};
