import { useState } from 'react';

import Story from '@/components/Story';
import StorySummary from '@/components/StorySummary';

import type { TemplateStoryPage as TemplateStoryPageType } from './TemplateStoryPage.types';

export const TemplateStoryPage: TemplateStoryPageType = ({ storyData }) => {
  const [storyStatus, setStoryStatus] = useState<boolean>(false);

  return (
    <>
      {storyStatus ? (
        <Story storyContent={storyData.content} />
      ) : (
        <StorySummary
          revertLayout={false}
          author={storyData.info.author}
          picturesAuthor={storyData.info.pictures}
          bookCover={storyData.info.cover}
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
