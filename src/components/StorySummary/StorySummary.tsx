import Button from '@/components/Button';
import {
  COLOR_VARIANTS,
  FONT_VARIANTS,
  PURPOSE,
} from '@/components/Button/Button.types';
import { StoryPagePicture } from '@/components/StoryPagePicture';
import { TagList } from '@/components/TagList';

import {
  BookExcerpt,
  ButtonsContainer,
  Credits,
  Logo,
  MainContent,
  StoryCoverBody,
  SummaryCard,
  SummaryLayer,
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
  coverDecor,
  mainTags,
  detailedTags,
  storyStatusHandler,
}) => (
  <StoryCoverBody>
    <StoryPagePicture {...bookCover} />
    <SummaryLayer $layout={revertLayout}>
      <SummaryCard $decor={coverDecor}>
        <Logo
          src="images/logo-01.svg"
          alt="Fabledose Presents"
          width={200}
          height={40}
        />
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
                    {adaptAuth}
                    {index !== adaptationAuthor.length - 1 && ', '}
                  </span>
                ))}
              </p>
            )}
            <p>
              {'Ilustracje: '}
              {picturesAuthor.map(picAuth => (
                <span key={picAuth}>{picAuth}</span>
              ))}
            </p>
          </Credits>
          <TagList
            mainTags={mainTags}
            synopsis={synopsis}
            extraTags={detailedTags}
            storyTitle={bookTitle}
          />
          <BookExcerpt>{extendedSummary}</BookExcerpt>
          <ButtonsContainer>
            <Button
              label="Czytaj Bajkę"
              colorVariant={COLOR_VARIANTS.GREEN}
              fontVariant={FONT_VARIANTS.UPPERCASE}
              purpose={PURPOSE.FUNCTION_TRIGGER}
              onclickAction={() => storyStatusHandler(true)}
            />
            <Button
              label="Wyjdź"
              colorVariant={COLOR_VARIANTS.WHITE}
              fontVariant={FONT_VARIANTS.UPPERCASE}
              purpose={PURPOSE.ANCHOR}
              anchorLink={'/'}
            />
          </ButtonsContainer>
        </MainContent>
      </SummaryCard>
    </SummaryLayer>
  </StoryCoverBody>
);
