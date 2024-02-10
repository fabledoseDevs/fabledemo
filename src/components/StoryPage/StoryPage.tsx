import { useState } from 'react';

import {
  PageBody,
  TextBox,
  TextContent,
  Toolbox,
} from '@/components/StoryPage/StoryPage.styled';

import { StoryPagePicture } from '../StoryPagePicture/StoryPagePicture';
import type { StoryPage as StoryPageType } from './StoryPage.types';
import { BACKGROUND_VARIANTS, FONT_COLOR, FONT_SIZE } from './StoryPage.types';

export const StoryPage: StoryPageType = ({
  layout,
  text,
  backgroundPicture,
  wildcardsData,
}) => {
  const [settingsVisibility, setSettingsVisibility] = useState<boolean>(false);

  return (
    <PageBody>
      <StoryPagePicture {...backgroundPicture} />
      <TextContent layout={layout}>
        {text.map((paragraph, index) => (
          <TextBox
            key={index}
            background={BACKGROUND_VARIANTS.MEDIUM}
            fontSize={FONT_SIZE.SMALL}
            fontColor={FONT_COLOR.WHITE}
            wildcard={wildcardsData && wildcardsData[index]}
          >
            {paragraph}
          </TextBox>
        ))}
      </TextContent>
      <Toolbox isVisible={settingsVisibility}>toolbox</Toolbox>
    </PageBody>
  );
};
