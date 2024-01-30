import Image from 'next/image';

import Button from '@/components/Button';
import {
  COLOR_VARIANTS,
  FONT_VARIANTS,
  PURPOSE,
} from '@/components/Button/Button.types';

import { SlidePicture } from '../SlidePicture/SlidePicture';
import TagList from '../TagList';
import {
  Author,
  BookCoverBody,
  BookExcerpt,
  ButtonsContaineer,
  Credits,
  Logo,
  MainContent,
  SettingsButton,
  SummaryCard,
  SummaryLayer,
  Title,
} from './BookSummary.styled';
import type { BookSummary as BookSummaryType } from './BookSummary.types';

export const BookSummary: BookSummaryType = ({
  revertLayout,
  author,
  translation,
  picturesAuthor,
  bookTitle,
  bookSummary,
  bookCover,
  coverDecor,
  iconsBlock,
  ctaButton,
}) => (
  <BookCoverBody>
    <SlidePicture picDescription={bookTitle} picSizes={bookCover} />
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
          <TagList {...iconsBlock} />
          <BookExcerpt>{bookSummary}</BookExcerpt>
          <ButtonsContaineer>
            <Button
              label="Cztyaj Bajkę"
              colorVariant={COLOR_VARIANTS.GREEN}
              fontVariant={FONT_VARIANTS.UPPERCASE}
              purpose={PURPOSE.FUNCTION_TRIGGER} //TODO: Update purpouse when ready!
              onclickAction={() => console.info('Openibg fairy tale...')} //TODO: Update this when ready!
            />
            <SettingsButton>
              <Image
                src={'images/icon-settings.svg'}
                alt={'Sprawdź Ustawienia'}
                width={50}
                height={50}
              />
            </SettingsButton>
          </ButtonsContaineer>
        </MainContent>
      </SummaryCard>
    </SummaryLayer>
  </BookCoverBody>
);
