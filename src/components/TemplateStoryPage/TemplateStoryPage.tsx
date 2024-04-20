import { useState } from 'react';

import { RotationGuard } from '@/components/RotationGuard/RotationGuard';
import Story from '@/components/Story';
import StorySummary from '@/components/StorySummary';
import { useScreenContext } from '@/context/ScreenContext/ScreenContext.provider';
import { ORIENTATION } from '@/context/ScreenContext/ScreenContext.types';

import type { TemplateStoryPage as TemplateStoryPageType } from './TemplateStoryPage.types';

export const TemplateStoryPage: TemplateStoryPageType = ({ storyData }) => {
  const [storyStatus, setStoryStatus] = useState<boolean>(false);
  const { screenData } = useScreenContext();

  return (
    <>
      {screenData.orientation === ORIENTATION.PORTRAIT && <RotationGuard />}
      {storyStatus ? (
        <Story storyContent={storyData.content} />
      ) : (
        <StorySummary
          revertLayout={false}
          adaptationAuthor={storyData.info.adaptationAuthor}
          picturesAuthor={storyData.info.pictures}
          bookCover={storyData.info.cover}
          coverDecor={storyData.info.decorator}
          bookTitle={storyData.info.title}
          extendedSummary={storyData.info.extendedSummary}
          synopsis={storyData.info.synopsis}
          mainTags={storyData.info.mainTags}
          detailedTags={storyData.info.detailedTags}
          storyStatusHandler={setStoryStatus}
        />
      )}
    </>
  );
};
