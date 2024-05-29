import { BookArrowClockwise as RestartIcon } from '@styled-icons/fluentui-system-regular/BookArrowClockwise';
import { Home as HomeIcon } from '@styled-icons/fluentui-system-regular/Home';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useScreenContext } from '@/context/ScreenContext/ScreenContext.provider';
import { useSettingsContext } from '@/context/SettingsContext/SettingsContext.provider';
import { LAYOUT_VARIANTS } from '@/fablesLibrarylibrary.types';

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
  const path = usePathname();

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
            <h2>Koniec</h2>
            <ActionsContainer>
              <Link href={'/'}>
                <HomeIcon />
                <p>Strona główna</p>
              </Link>
              <Link href={path}>
                <RestartIcon />
                <p>Od początku</p>
              </Link>
            </ActionsContainer>
          </FinalSlideContent>
        ) : (
          <TextBox
            className={'textBox'}
            textboxTheme={settings.theme}
            fontSize={settings.fontSize}
          >
            {text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </TextBox>
        )}
      </TextContent>
    </PageBody>
  );
};
