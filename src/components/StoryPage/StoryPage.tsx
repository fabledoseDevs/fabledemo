import { useState } from 'react';

import SlidePicture from '@/components/SlidePicture';
import {
  PageBody,
  TextBox,
  TextContent,
  Toolbox,
} from '@/components/StoryPage/StoryPage.styled';

import type { StoryPage as StoryPageType } from './StoryPage.types';

export const StoryPage: StoryPageType = ({
  layout,
  text,
  backgroundPicture,
  //TODO: Add wildcardData
}) => {
  const [settingsVisibility, setSettingsVisibility] = useState<boolean>(false);

  //TODO: Remove this
  setSettingsVisibility(false);

  return (
    <PageBody>
      <SlidePicture {...backgroundPicture} />
      <TextContent layout={layout}>
        {text.map((paragraph, index) => (
          <TextBox key={index}>{paragraph}</TextBox>
        ))}
      </TextContent>
      <Toolbox isVisible={settingsVisibility}>toolbox</Toolbox>
    </PageBody>
  );
};
