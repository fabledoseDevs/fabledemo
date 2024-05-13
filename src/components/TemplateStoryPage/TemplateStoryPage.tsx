import dynamic from 'next/dynamic';
import { useState } from 'react';

const RotationGuard = dynamic(() => import('@/components/RotationGuard'), {
  ssr: false,
});
const Story = dynamic(() => import('@/components/Story'), {
  ssr: false,
});
const StorySummary = dynamic(() => import('@/components/StorySummary'), {
  ssr: false,
});
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
        <Story
          storyContent={storyData.content}
          defaultColor={storyData.info.defaultColor}
        />
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
