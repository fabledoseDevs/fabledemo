import Image from 'next/image';

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
  SettingsButton,
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
  bookSummary,
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
          <TagList mainTags={mainTags} extraTags={detailedTags} />
          <BookExcerpt>{bookSummary}</BookExcerpt>
          <ButtonsContainer>
            <Button
              label="Cztyaj Bajkę"
              colorVariant={COLOR_VARIANTS.GREEN}
              fontVariant={FONT_VARIANTS.UPPERCASE}
              purpose={PURPOSE.FUNCTION_TRIGGER}
              onclickAction={() => storyStatusHandler(true)}
            />
            <SettingsButton>
              <Image
                src={'images/icon-settings.svg'}
                alt={'Sprawdź Ustawienia'}
                width={50}
                height={50}
              />
            </SettingsButton>
          </ButtonsContainer>
        </MainContent>
      </SummaryCard>
    </SummaryLayer>
  </StoryCoverBody>
);
