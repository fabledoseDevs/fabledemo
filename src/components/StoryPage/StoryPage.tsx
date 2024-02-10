import { useState } from 'react';

import SlidePicture from '@/components/SlidePicture';
import {
  PageBody,
  TextBox,
  TextContent,
  Toolbox,
} from '@/components/StoryPage/StoryPage.styled';

import type { StoryPage as StoryPageType } from './StoryPage.types';
import { BACKGROUND_VARIANTS, FONT_COLOR, FONT_SIZE } from './StoryPage.types';

export const StoryPage: StoryPageType = ({
  layout,
  text,
  backgroundPicture,
  //TODO: Add wildcardData
}) => {
  const [settingsVisibility, setSettingsVisibility] = useState<boolean>(false);

  return (
    <PageBody>
      <SlidePicture {...backgroundPicture} />
      <TextContent layout={layout}>
        {text.map((paragraph, index) => (
          <TextBox
            key={index}
            background={BACKGROUND_VARIANTS.INTENSE}
            fontSize={FONT_SIZE.SMALL}
            fontColor={FONT_COLOR.YELLOW_STROKED}
          >
            {paragraph}
          </TextBox>
        ))}
      </TextContent>
      <Toolbox isVisible={settingsVisibility}>toolbox</Toolbox>
    </PageBody>
  );
};
