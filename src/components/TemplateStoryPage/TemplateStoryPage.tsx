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
import LoadingScreen from '@/components/LoadingScreen';
import MetaData from '@/components/MetaData';
import { useScreenContext } from '@/context/ScreenContext/ScreenContext.provider';
import { ORIENTATION } from '@/context/ScreenContext/ScreenContext.types';

import type { TemplateStoryPage as TemplateStoryPageType } from './TemplateStoryPage.types';

export const TemplateStoryPage: TemplateStoryPageType = ({ storyData }) => {
  const [storyStatus, setStoryStatus] = useState<boolean>(false);
  const [loadingScreenFadeOut, setLoadingScreenFadeOut] =
    useState<boolean>(false);
  const [loadingScreenRemoved, setLoadingScreenRemoved] =
    useState<boolean>(false);
  const { screenData } = useScreenContext();

  const removeLoadingScreen = () => {
    setLoadingScreenFadeOut(true);
    setTimeout(() => {
      setLoadingScreenRemoved(true);
    }, 750);
  };

  return (
    <>
      <MetaData {...storyData.info.metaData} />
      {!loadingScreenRemoved && (
        <LoadingScreen
          fadeOutReady={loadingScreenFadeOut}
          bgColor={storyData.info.defaultColor}
        />
      )}
      {screenData.orientation === ORIENTATION.PORTRAIT && <RotationGuard />}
      {storyStatus ? (
        <Story
          storyContent={storyData.content}
          defaultColor={storyData.info.defaultColor}
        />
      ) : (
        <StorySummary
          revertLayout={false}
          adaptationAuthor={storyData.info.adaptationAuthors}
          picturesAuthor={storyData.info.pictures}
          bookCover={storyData.info.cover}
          bookCoverBlur={storyData.info.cover.backup.src}
          coverDecor={storyData.info.decorator}
          bookTitle={storyData.info.title}
          extendedSummary={storyData.info.extendedSummary}
          synopsis={storyData.info.synopsis}
          mainTags={storyData.info.mainTags}
          detailedTags={storyData.info.detailedTags}
          storyStatusHandler={setStoryStatus}
          defaultColor={storyData.info.defaultColor}
          onAnimationReady={removeLoadingScreen}
        />
      )}
    </>
  );
};
