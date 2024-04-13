import { StoryPagePicture } from '@/components/StoryPagePicture';
import { useSettingsContext } from '@/context/SettingsContext/SettingsContext.provider';

import { PageBody, TextBox, TextContent } from './StoryPage.styled';
import type { StoryPage as StoryPageType } from './StoryPage.types';

export const StoryPage: StoryPageType = ({
  layout,
  text,
  backgroundPicture,
}) => {
  const { settings } = useSettingsContext();

  return (
    <PageBody>
      <StoryPagePicture {...backgroundPicture} />
      <TextContent layout={layout}>
        <TextBox textboxTheme={settings.theme} fontSize={settings.fontSize}>
          {text.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </TextBox>
      </TextContent>
    </PageBody>
  );
};
