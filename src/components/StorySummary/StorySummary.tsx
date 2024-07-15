import { LinkExternal } from '@styled-icons/boxicons-regular/LinkExternal';

import {
  COLOR_VARIANTS,
  FONT_VARIANTS,
  PURPOSE,
} from '@/components/Button/Button.types';
import { TagList } from '@/components/TagList';
import Button from '@/componentsButton';
import { Logo } from '@/componentsLogo/Logo';
import { COLOUR_VARIANT } from '@/componentsLogo/Logo.types';
import { useScreenContext } from '@/context/ScreenContext/ScreenContext.provider';

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
          alt={'next image'}
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
                  {'Autor: '}
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
                  {'Adaptacja: '}
                  {adaptationAuthor.map((adaptAuth, index) => (
                    <span key={adaptAuth}>
                      {adaptAuth}{' '}
                      {index !== adaptationAuthor.length - 1 && ', '}
                    </span>
                  ))}
                </p>
              )}
              <p>
                {'Ilustracje: '}
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
                label="Czytaj Bajkę"
                colorVariant={COLOR_VARIANTS.GREEN}
                fontVariant={FONT_VARIANTS.UPPERCASE}
                purpose={PURPOSE.FUNCTION_TRIGGER}
                onclickAction={() => storyStatusHandler(true)}
              />
              {/*<Button*/}
              {/*  label="Wyjdź"*/}
              {/*  colorVariant={COLOR_VARIANTS.WHITE}*/}
              {/*  fontVariant={FONT_VARIANTS.UPPERCASE}*/}
              {/*  purpose={PURPOSE.ANCHOR}*/}
              {/*  anchorLink={'/'}*/}
              {/*/>*/}
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
