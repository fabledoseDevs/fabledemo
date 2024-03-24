import Button from '@/components/Button';
import {
  COLOR_VARIANTS,
  FONT_VARIANTS,
  PURPOSE,
} from '@/components/Button/Button.types';
import { StoryPagePicture } from '@/components/StoryPagePicture';
import { TagList } from '@/components/TagList';

import {
  Author,
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
  translation,
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
    <SummaryLayer layout={revertLayout}>
      <SummaryCard decor={coverDecor}>
        <Logo
          src="images/logo-01.svg"
          alt="Fabledose Presents"
          width={200}
          height={40}
        />
        <MainContent>
          <Author>{author}</Author>
          <Title>{bookTitle}</Title>
          <Credits>
            <p>
              {'Ilustracje: '}
              {picturesAuthor.map(picAuth => (
                <span key={picAuth}>{picAuth}</span>
              ))}
              {translation && ' | Tłumaczenia: '}
              {translation &&
                translation.map(person => <span key={person}>{person} </span>)}
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
