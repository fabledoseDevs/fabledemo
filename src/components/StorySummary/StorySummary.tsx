import { LinkExternal } from '@styled-icons/boxicons-regular/LinkExternal';

import Button from '@/components/Button';
import {
  COLOR_VARIANTS,
  FONT_VARIANTS,
  PURPOSE,
} from '@/components/Button/Button.types';
import Logo from '@/components/Logo';
import { COLOUR_VARIANT } from '@/components/Logo/Logo.types';
import { TagList } from '@/components/TagList';
import { useScreenContext } from '@/context/ScreenContext/ScreenContext.provider';
import { StorySummaryTranslations, useTranslation } from '@/translations';

import {
  AnimatedPicture,
  BlurPicture,
  BookExcerpt,
  ButtonsContainer,
  Credits,
  LogoPositioner,
  MainContent,
  StoryCoverBody,
  SummaryCard,
  SummaryLayer,
  TagListPositioner,
  Title,
} from './StorySummary.styled';
import type { StorySummary as StorySummaryType } from './StorySummary.types';

export const StorySummary: StorySummaryType = ({
  revertLayout,
  author,
  adaptationAuthor,
  picturesAuthor,
  bookTitle,
  extendedSummary,
  synopsis,
  bookCover,
  bookCoverBlur,
  coverDecor,
  mainTags,
  detailedTags,
  storyStatusHandler,
  defaultColor,
  onAnimationReady,
}) => {
  const { screenData } = useScreenContext();
  const {
    author: authorName,
    adaptation: adaptationAuthors,
    illustrations: illustrationAuthors,
    readCTA,
  } = useTranslation(StorySummaryTranslations);

  const removeLoadingScreen = () => {
    onAnimationReady();
  };

  const imageUrl =
    screenData.screenWidth >= 1920
      ? bookCover.picSizes['1080']
      : bookCover.picSizes['720'];

  return (
    <StoryCoverBody backgroundColor={defaultColor}>
      {bookCoverBlur && (
        <BlurPicture
          src={bookCoverBlur}
          alt={'next image preview'}
          width={1280}
          height={720}
          priority={true}
        />
      )}
      <AnimatedPicture
        url={imageUrl}
        loop={true}
        controls={false}
        muted={true}
        playing={true}
        width={'100dvw'}
        height={'100dvh'}
        onReady={removeLoadingScreen}
        playsinline={true}
      />
      <SummaryLayer $layout={revertLayout}>
        <LogoPositioner $layout={revertLayout}>
          <Logo colourVariant={COLOUR_VARIANT.WHITE} logoWidth={240} />
        </LogoPositioner>
        <SummaryCard $decor={coverDecor}>
          <MainContent>
            <Title>{bookTitle}</Title>
            <Credits>
              {author && (
                <p>
                  {authorName + ' '}
                  {author.map((auth, index) => (
                    <span key={auth}>
                      {auth}
                      {index !== auth.length - 1 && ', '}
                    </span>
                  ))}
                </p>
              )}
              {adaptationAuthor && (
                <p>
                  {adaptationAuthors + ' '}
                  {adaptationAuthor.map((adaptAuth, index) => (
                    <span key={adaptAuth}>
                      {adaptAuth}{' '}
                      {index !== adaptationAuthor.length - 1 && ', '}
                    </span>
                  ))}
                </p>
              )}
              <p>
                {illustrationAuthors + ' '}
                {picturesAuthor.map(picAuth => (
                  <span key={picAuth}>
                    {picAuth}
                    {picAuth === 'Edyta Petrzak' && (
                      <>
                        &nbsp;(
                        <a
                          href={
                            'https://www.facebook.com/profile.php?id=100079143065239'
                          }
                          target="_blank"
                        >
                          Kropką Zmalowane <LinkExternal />
                        </a>
                        )
                      </>
                    )}
                  </span>
                ))}
              </p>
            </Credits>
            <ButtonsContainer>
              <Button
                label={readCTA}
                colorVariant={COLOR_VARIANTS.GREEN}
                fontVariant={FONT_VARIANTS.UPPERCASE}
                purpose={PURPOSE.FUNCTION_TRIGGER}
                onclickAction={() => storyStatusHandler(true)}
              />
            </ButtonsContainer>
            <TagListPositioner>
              <TagList
                mainTags={mainTags}
                synopsis={synopsis}
                extraTags={detailedTags}
                storyTitle={bookTitle}
              />
            </TagListPositioner>
            <BookExcerpt>{extendedSummary}</BookExcerpt>
          </MainContent>
        </SummaryCard>
      </SummaryLayer>
    </StoryCoverBody>
  );
};
