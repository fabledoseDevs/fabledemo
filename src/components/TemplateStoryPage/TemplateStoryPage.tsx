import { useState } from 'react';

import CookieBanner from '@/components/CookieBanner';
import Story from '@/components/Story';
import StorySummary from '@/components/StorySummary';
import { useSettingsContext } from '@/context/SettingsContext/SettingsContext.provider';

import type { TemplateStoryPage as TemplateStoryPageType } from './TemplateStoryPage.types';

export const TemplateStoryPage: TemplateStoryPageType = ({ storyData }) => {
  const [storyStatus, setStoryStatus] = useState<boolean>(false);
  const { settings } = useSettingsContext();
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
          coverDecor={storyData.info.decorator}
          bookTitle={storyData.info.title}
          extendedSummary={storyData.info.extendedSummary}
          synopsis={storyData.info.synopsis}
          mainTags={storyData.info.mainTags}
          detailedTags={storyData.info.detailedTags}
          storyStatusHandler={setStoryStatus}
        />
      )}
      {!settings.cookieConsent && <CookieBanner />}
    </>
  );
};
