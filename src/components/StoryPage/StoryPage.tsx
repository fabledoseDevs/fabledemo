import { BookArrowClockwise as RestartIcon } from '@styled-icons/fluentui-system-regular/BookArrowClockwise';
import { Home as HomeIcon } from '@styled-icons/fluentui-system-regular/Home';
import Link from 'next/link';
import { useSwiper } from 'swiper/react';

import { useScreenContext } from '@/context/ScreenContext/ScreenContext.provider';
import { useSettingsContext } from '@/context/SettingsContext/SettingsContext.provider';
import { quitStoryUiCleanup } from '@/helpers/storyUiCleanup';
import { StoryPageTranslations, useTranslation } from '@/translations';
import { LAYOUT_VARIANTS } from '@/types/fairytale.types';

import {
  ActionsContainer,
  AnimatedPicture,
  FinalSlideContent,
  PageBody,
  StaticPicture,
  TextBox,
  TextContent,
} from './StoryPage.styled';
import type { StoryPage as StoryPageType } from './StoryPage.types';

export const StoryPage: StoryPageType = ({
  id,
  layout,
  text,
  backgroundPicture,
  staticImage,
  autoplayAnimation,
}) => {
  const { settings } = useSettingsContext();
  const { screenData } = useScreenContext();
  const { theEnd, restart, goBack } = useTranslation(StoryPageTranslations);
  const swiper = useSwiper();

  const imageUrl =
    screenData.screenWidth >= 1920
      ? backgroundPicture.picSizes['1080']
      : backgroundPicture.picSizes['720'];

  return (
    <PageBody>
      <StaticPicture
        src={staticImage}
        alt={'next image'}
        width={1280}
        height={720}
        priority={true}
      />
      <AnimatedPicture
        url={imageUrl}
        loop={true}
        controls={false}
        muted={true}
        playing={autoplayAnimation}
        width={'100dvw'}
        height={'100dvh'}
        key={imageUrl}
        playsinline={true}
      />
      <TextContent layout={layout} key={id}>
        {layout === LAYOUT_VARIANTS.FINAL_SLIDE ? (
          <FinalSlideContent>
            <h2>{theEnd}</h2>
            <ActionsContainer>
              <Link onClick={quitStoryUiCleanup} href={'/'}>
                <HomeIcon />
                <span>{goBack}</span>
              </Link>
              <button onClick={() => swiper.slideTo(0)}>
                <RestartIcon />
                <span>{restart}</span>
              </button>
            </ActionsContainer>
          </FinalSlideContent>
        ) : (
          <TextBox
            className="textBox"
            textboxTheme={settings.theme}
            fontSize={settings.fontSize}
          >
            {text &&
              text.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </TextBox>
        )}
      </TextContent>
    </PageBody>
  );
};
